/**
 * ImageImport — OCR-based image import module using Tesseract.js
 * Allows users to upload a screenshot/photo of a financial statement
 * and extract structured data from it.
 */
const ImageImport = {
    worker: null,

    /**
     * Open file picker and process selected image
     * @param {string} dataType - 'bank' | 'credit' | 'stocks' | 'funds'
     */
    openImagePicker(dataType) {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                this.processImage(file, dataType);
            }
        };
        input.click();
    },

    /**
     * Process image with Tesseract OCR
     */
    async processImage(file, dataType) {
        // Show loading modal
        this.showLoadingModal();

        try {
            const result = await Tesseract.recognize(file, 'heb+eng', {
                logger: (info) => {
                    if (info.status === 'recognizing text') {
                        this.updateProgress(Math.round(info.progress * 100));
                    }
                }
            });

            this.closeLoadingModal();

            const text = result.data.text;
            if (!text || text.trim().length < 5) {
                App.notify('לא זוהה טקסט בתמונה', 'error');
                return;
            }

            console.log('OCR raw text:', text);

            // Try smart extraction for card-layout financial screenshots
            const smartData = this.extractFinancialCard(text, dataType);
            if (smartData) {
                this.showSmartPreviewModal(smartData, dataType);
                return;
            }

            const rows = this.parseOCRText(text);
            if (rows.length < 1) {
                App.notify('לא נמצאו שורות נתונים בתמונה', 'error');
                return;
            }

            this.showPreviewModal(rows, dataType);
        } catch (error) {
            this.closeLoadingModal();
            console.error('OCR error:', error);
            App.notify('שגיאה בזיהוי טקסט: ' + error.message, 'error');
        }
    },

    /**
     * Try to extract structured data from card-layout financial screenshots
     * (e.g. Menora, Harel, Migdal pension/fund summary pages)
     */
    extractFinancialCard(text, dataType) {
        console.log('Trying smart extraction on:', text);

        // Check if this looks like a financial card (not a table)
        // Look for known Israeli financial keywords
        const financialKeywords = ['צברתי', 'צבירה', 'בקופה', 'קצבה', 'מסלול', 'קופה',
            'פנסי', 'השתלמות', 'גמל', 'חיסכון', 'מבטחים', 'ביטוח'];
        const hasFinancialContext = financialKeywords.some(kw => text.includes(kw));
        if (!hasFinancialContext) return null;

        // Extract ALL numbers from text — handle various OCR formats:
        // 719,539.54 | 719.539,54 | 719539.54 | 10,423.29 | ₪719,539
        const amounts = [];

        // Pattern 1: numbers with commas and decimal (719,539.54)
        const p1 = text.match(/[\d][,\d]*\d\.\d{1,2}/g) || [];
        p1.forEach(s => {
            const val = parseFloat(s.replace(/,/g, ''));
            if (!isNaN(val) && val > 50) amounts.push(val);
        });

        // Pattern 2: numbers with dots as thousands separator and comma decimal (719.539,54)
        const p2 = text.match(/[\d][.\d]*\d,\d{1,2}/g) || [];
        p2.forEach(s => {
            const val = parseFloat(s.replace(/\./g, '').replace(',', '.'));
            if (!isNaN(val) && val > 50) amounts.push(val);
        });

        // Pattern 3: plain large numbers without decimals (719539 or 719,539)
        const p3 = text.match(/(?:₪\s*)?(\d{1,3}(?:[,]\d{3})+)(?!\.\d)/g) || [];
        p3.forEach(s => {
            const val = parseFloat(s.replace(/[₪\s,]/g, ''));
            if (!isNaN(val) && val > 50) amounts.push(val);
        });

        // Pattern 4: numbers right after ₪ symbol
        const p4 = text.match(/₪\s*([\d,.]+)/g) || [];
        p4.forEach(s => {
            const numStr = s.replace(/₪\s*/, '');
            const val = parseFloat(numStr.replace(/,/g, ''));
            if (!isNaN(val) && val > 50 && !amounts.includes(val)) amounts.push(val);
        });

        console.log('Extracted amounts:', amounts);

        if (amounts.length === 0) return null;

        // Detect fund/company name from known Israeli providers
        const providers = [
            { key: 'menora', patterns: ['מנורה', 'מנורא', 'menora'] },
            { key: 'harel', patterns: ['הראל', 'harel'] },
            { key: 'migdal', patterns: ['מגדל', 'migdal'] },
            { key: 'phoenix', patterns: ['פניקס', 'הפניקס', 'phoenix'] },
            { key: 'clal', patterns: ['כלל', 'clal'] },
            { key: 'meitav', patterns: ['מיטב', 'meitav'] },
            { key: 'altshuler', patterns: ['אלטשולר', 'altshuler'] },
            { key: 'psagot', patterns: ['פסגות', 'psagot'] },
            { key: 'analyst', patterns: ['אנליסט', 'analyst'] },
            { key: 'yelin', patterns: ['ילין', 'yelin'] },
            { key: 'more', patterns: ['מור בית'] }
        ];

        let company = 'other';
        for (const p of providers) {
            if (p.patterns.some(pat => text.includes(pat))) {
                company = p.key;
                break;
            }
        }

        // Detect fund type
        let type = 'gemel';
        if (/פנסי/.test(text)) type = 'pension';
        else if (/השתלמות/.test(text)) type = 'training';
        else if (/גמל/.test(text)) type = 'gemel';
        else if (/חיסכון/.test(text)) type = 'savings';

        // Detect fund number — flexible patterns
        let fundNumber = '';
        const fundNumPatterns = [
            /מספר\s*קופה\s*:?\s*(\d+)/,
            /קופה\s*:?\s*(\d+)/,
            /מס[פ']?\s*:?\s*(\d{2,6})/
        ];
        for (const pat of fundNumPatterns) {
            const fm = text.match(pat);
            if (fm) { fundNumber = fm[1]; break; }
        }

        // Detect investment track
        let track = '';
        const trackPatterns = [
            /(?:המסלול שלי|מסלול השקעה)[:\s]*([^\n]+)/,
            /(?:מסלול)[:\s]*([^\n]+)/,
            /(מניות[^,\n]*(?:S&P|מדד)[^\n]*)/,
            /(S&P\s*\d*[^\n]*)/
        ];
        for (const pat of trackPatterns) {
            const tm = text.match(pat);
            if (tm) { track = tm[1].trim(); break; }
        }

        // Build fund name
        const providerObj = providers.find(p => p.key === company);
        const typeNames = { pension: 'פנסיה', training: 'קרן השתלמות', gemel: 'קופת גמל', savings: 'פוליסת חיסכון' };
        let fundName = (providerObj ? providerObj.patterns[0] : '') + ' ' + (typeNames[type] || '');
        if (text.includes('מקיפה')) fundName += ' מקיפה';
        else if (text.includes('כללית')) fundName += ' כללית';
        fundName = fundName.trim();

        // The largest amount is likely the total balance
        const balance = Math.max(...amounts);

        // Try to find expected pension (קצבה צפויה)
        let expectedPension = null;
        const pensionPatterns = [
            /קצבה[^\d₪]*([\d][,\d]*\.?\d*)/,
            /קצבה\s*צפויה[^\d₪]*([\d][,\d]*\.?\d*)/
        ];
        for (const pat of pensionPatterns) {
            const pm = text.match(pat);
            if (pm) {
                const val = parseFloat(pm[1].replace(/,/g, ''));
                if (!isNaN(val) && val < balance) {
                    expectedPension = val;
                    break;
                }
            }
        }

        console.log('Smart extraction result:', { fundName, company, type, balance, fundNumber, track, expectedPension });

        return {
            name: fundName,
            company: company,
            type: type,
            value: balance,
            fundNumber: fundNumber,
            track: track,
            expectedPension: expectedPension,
            allAmounts: amounts
        };
    },

    /**
     * Show preview modal for smart-extracted card data
     */
    showSmartPreviewModal(data, dataType) {
        const typeNames = { pension: 'פנסיה', training: 'קרן השתלמות', gemel: 'קופת גמל', savings: 'פוליסת חיסכון' };

        let fieldsHTML = `
            <div class="form-group">
                <label>שם הקרן</label>
                <input type="text" class="form-control" id="smartName" value="${data.name}">
            </div>
            <div class="form-group">
                <label>סוג</label>
                <select class="form-control" id="smartType">
                    <option value="pension" ${data.type === 'pension' ? 'selected' : ''}>🏛️ פנסיה</option>
                    <option value="training" ${data.type === 'training' ? 'selected' : ''}>🎓 קרן השתלמות</option>
                    <option value="gemel" ${data.type === 'gemel' ? 'selected' : ''}>💼 קופת גמל</option>
                    <option value="savings" ${data.type === 'savings' ? 'selected' : ''}>🐷 פוליסת חיסכון</option>
                </select>
            </div>
            <div class="form-group">
                <label>חברה</label>
                <select class="form-control" id="smartCompany">
                    <option value="menora" ${data.company === 'menora' ? 'selected' : ''}>מנורה מבטחים</option>
                    <option value="harel" ${data.company === 'harel' ? 'selected' : ''}>הראל</option>
                    <option value="migdal" ${data.company === 'migdal' ? 'selected' : ''}>מגדל</option>
                    <option value="phoenix" ${data.company === 'phoenix' ? 'selected' : ''}>הפניקס</option>
                    <option value="clal" ${data.company === 'clal' ? 'selected' : ''}>כלל</option>
                    <option value="meitav" ${data.company === 'meitav' ? 'selected' : ''}>מיטב דש</option>
                    <option value="altshuler" ${data.company === 'altshuler' ? 'selected' : ''}>אלטשולר שחם</option>
                    <option value="psagot" ${data.company === 'psagot' ? 'selected' : ''}>פסגות</option>
                    <option value="analyst" ${data.company === 'analyst' ? 'selected' : ''}>אנליסט</option>
                    <option value="yelin" ${data.company === 'yelin' ? 'selected' : ''}>ילין לפידות</option>
                    <option value="more" ${data.company === 'more' ? 'selected' : ''}>מור</option>
                    <option value="other" ${data.company === 'other' ? 'selected' : ''}>אחר</option>
                </select>
            </div>
            <div class="form-group">
                <label>שווי צבירה (₪)</label>
                <input type="number" class="form-control" id="smartValue" value="${data.value}" step="0.01">
            </div>
            <div class="form-group">
                <label>מספר קופה</label>
                <input type="text" class="form-control" id="smartFundNumber" value="${data.fundNumber}">
            </div>`;

        if (data.track) {
            fieldsHTML += `
            <div class="form-group">
                <label>מסלול השקעה</label>
                <input type="text" class="form-control" id="smartTrack" value="${data.track}" readonly style="opacity: 0.7;">
            </div>`;
        }

        if (data.expectedPension) {
            fieldsHTML += `
            <div class="form-group">
                <label>קצבה צפויה (₪)</label>
                <input type="number" class="form-control" id="smartPension" value="${data.expectedPension}" step="0.01">
            </div>`;
        }

        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.id = 'ocrPreviewModal';
        modal.innerHTML = `
            <div class="modal" style="max-width: 500px;">
                <div class="modal-header">
                    <h2>נתונים שזוהו מהתמונה</h2>
                    <button class="modal-close" onclick="document.getElementById('ocrPreviewModal').remove()">&times;</button>
                </div>
                <div class="modal-body">
                    <p style="margin-bottom: 15px; color: var(--color-text-secondary); font-size: 0.9rem;">
                        זוהו נתוני ${typeNames[data.type] || 'קרן'} — ניתן לערוך לפני ייבוא.
                    </p>
                    ${fieldsHTML}
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="document.getElementById('ocrPreviewModal').remove()">ביטול</button>
                    <button class="btn btn-primary" onclick="ImageImport.confirmSmartImport('${dataType}')">ייבא</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },

    /**
     * Confirm import from smart-extracted card data
     */
    confirmSmartImport(dataType) {
        const name = document.getElementById('smartName').value.trim();
        const type = document.getElementById('smartType').value;
        const company = document.getElementById('smartCompany').value;
        const value = parseFloat(document.getElementById('smartValue').value) || 0;
        const fundNumber = document.getElementById('smartFundNumber').value.trim();
        const pensionEl = document.getElementById('smartPension');
        const expectedPension = pensionEl ? parseFloat(pensionEl.value) || null : null;

        if (!name || !value) {
            App.notify('יש למלא שם ושווי', 'error');
            return;
        }

        document.getElementById('ocrPreviewModal').remove();

        const now = new Date().toISOString();
        const today = now.split('T')[0];
        const FUNDS_KEY = 'finance_my_funds';

        const funds = JSON.parse(localStorage.getItem(FUNDS_KEY) || '[]');
        funds.push({
            id: 'fund_' + Date.now(),
            type: type,
            name: name,
            company: company,
            value: value,
            monthlyDeposit: 0,
            accountNumber: fundNumber,
            actuarialBalance: expectedPension,
            notes: '',
            history: [{ date: today, value: value }],
            createdAt: now,
            updatedAt: now
        });
        localStorage.setItem(FUNDS_KEY, JSON.stringify(funds));

        if (typeof loadFunds === 'function') loadFunds();
        App.notify('הקרן יובאה בהצלחה', 'success');
    },

    /**
     * Parse OCR text into table rows
     */
    parseOCRText(text) {
        const lines = text.split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0);

        const rows = [];
        for (const line of lines) {
            // Split by tabs, multiple spaces (3+), or pipe characters
            let cells = line.split(/\t|\s{3,}|\|/)
                .map(c => c.trim())
                .filter(c => c.length > 0);

            // If only one cell, try splitting by 2+ spaces
            if (cells.length <= 1) {
                cells = line.split(/\s{2,}/)
                    .map(c => c.trim())
                    .filter(c => c.length > 0);
            }

            if (cells.length >= 2) {
                rows.push(cells);
            }
        }

        return rows;
    },

    /**
     * Show loading modal with progress bar
     */
    showLoadingModal() {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.id = 'ocrLoadingModal';
        modal.innerHTML = `
            <div class="modal" style="max-width: 400px; text-align: center;">
                <div class="modal-body" style="padding: 40px 30px;">
                    <div style="font-size: 3rem; margin-bottom: 15px;">📷</div>
                    <h3 style="margin-bottom: 15px;">מזהה טקסט מתמונה...</h3>
                    <div style="background: rgba(255,255,255,0.1); border-radius: 8px; height: 8px; overflow: hidden; margin-bottom: 10px;">
                        <div id="ocrProgressBar" style="height: 100%; width: 0%; background: var(--color-primary, #3b82f6); border-radius: 8px; transition: width 0.3s;"></div>
                    </div>
                    <div id="ocrProgressText" style="color: var(--color-text-secondary); font-size: 0.9rem;">0%</div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },

    /**
     * Update loading progress
     */
    updateProgress(percent, label) {
        const bar = document.getElementById('ocrProgressBar');
        const text = document.getElementById('ocrProgressText');
        if (bar) bar.style.width = percent + '%';
        if (text) text.textContent = label || (percent + '%');
    },

    /**
     * Close loading modal
     */
    closeLoadingModal() {
        const modal = document.getElementById('ocrLoadingModal');
        if (modal) modal.remove();
    },

    /**
     * Show preview modal with extracted data for user to confirm/edit
     */
    showPreviewModal(rows, dataType) {
        // Determine max columns
        const maxCols = Math.max(...rows.map(r => r.length));

        // Build editable table
        let tableHTML = '<table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">';
        tableHTML += '<thead><tr>';
        for (let c = 0; c < maxCols; c++) {
            tableHTML += `<th style="padding: 8px; border: 1px solid var(--color-border); background: var(--color-bg-secondary);">עמודה ${c + 1}</th>`;
        }
        tableHTML += '<th style="padding: 8px; border: 1px solid var(--color-border); background: var(--color-bg-secondary); width: 40px;"></th>';
        tableHTML += '</tr></thead><tbody>';

        rows.forEach((row, rowIdx) => {
            tableHTML += `<tr data-row="${rowIdx}">`;
            for (let c = 0; c < maxCols; c++) {
                const val = row[c] || '';
                tableHTML += `<td style="padding: 4px; border: 1px solid var(--color-border);">
                    <input type="text" value="${val.replace(/"/g, '&quot;')}"
                           data-row="${rowIdx}" data-col="${c}"
                           style="width: 100%; background: transparent; border: none; color: inherit; padding: 4px; font-size: 0.85rem;">
                </td>`;
            }
            tableHTML += `<td style="padding: 4px; border: 1px solid var(--color-border); text-align: center;">
                <button onclick="ImageImport.removePreviewRow(${rowIdx})" style="background: none; border: none; color: var(--color-negative); cursor: pointer; font-size: 1rem;" title="הסר שורה">✕</button>
            </td>`;
            tableHTML += '</tr>';
        });

        tableHTML += '</tbody></table>';

        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.id = 'ocrPreviewModal';
        modal.innerHTML = `
            <div class="modal" style="max-width: 90vw; width: 700px;">
                <div class="modal-header">
                    <h2>תצוגה מקדימה - נתונים שזוהו</h2>
                    <button class="modal-close" onclick="document.getElementById('ocrPreviewModal').remove()">&times;</button>
                </div>
                <div class="modal-body">
                    <p style="margin-bottom: 10px; color: var(--color-text-secondary); font-size: 0.9rem;">
                        נמצאו ${rows.length} שורות. ניתן לערוך את הנתונים לפני הייבוא.
                        <br>השורה הראשונה תשמש ככותרות עמודות.
                    </p>
                    <div style="max-height: 400px; overflow: auto;">
                        ${tableHTML}
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="document.getElementById('ocrPreviewModal').remove()">ביטול</button>
                    <button class="btn btn-primary" onclick="ImageImport.confirmImport('${dataType}')">ייבא</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Store original row count for reference
        this._previewRowCount = rows.length;
        this._previewMaxCols = maxCols;
    },

    /**
     * Remove a row from the preview table
     */
    removePreviewRow(rowIdx) {
        const row = document.querySelector(`#ocrPreviewModal tr[data-row="${rowIdx}"]`);
        if (row) row.remove();
    },

    /**
     * Read current data from preview modal inputs
     */
    getPreviewData() {
        const modal = document.getElementById('ocrPreviewModal');
        if (!modal) return [];

        const inputs = modal.querySelectorAll('input[data-row]');
        const rowMap = {};

        inputs.forEach(input => {
            const r = input.getAttribute('data-row');
            const c = parseInt(input.getAttribute('data-col'));
            if (!rowMap[r]) rowMap[r] = [];
            rowMap[r][c] = input.value.trim();
        });

        // Return in order, filtering out removed rows
        return Object.keys(rowMap)
            .sort((a, b) => parseInt(a) - parseInt(b))
            .map(k => rowMap[k])
            .filter(row => row.some(cell => cell && cell.length > 0));
    },

    /**
     * Import confirmed data using existing page functions
     */
    confirmImport(dataType) {
        const rows = this.getPreviewData();
        if (rows.length < 2) {
            App.notify('נדרשות לפחות 2 שורות (כותרות + נתונים)', 'error');
            return;
        }

        document.getElementById('ocrPreviewModal').remove();

        let imported = 0;

        switch (dataType) {
            case 'bank':
                imported = this.importBank(rows);
                break;
            case 'credit':
                imported = this.importCredit(rows);
                break;
            case 'stocks':
                imported = this.importStocks(rows);
                break;
            case 'funds':
                imported = this.importFunds(rows);
                break;
        }

        if (imported > 0) {
            App.notify(`יובאו ${imported} רשומות בהצלחה`, 'success');
        } else {
            App.notify('לא נמצאו רשומות תקינות לייבוא', 'error');
        }
    },

    /**
     * Detect column index by header keywords
     */
    detectColumn(headers, keywords) {
        for (let i = 0; i < headers.length; i++) {
            const h = (headers[i] || '').toLowerCase().trim();
            for (const kw of keywords) {
                if (h.includes(kw.toLowerCase())) return i;
            }
        }
        return -1;
    },

    /**
     * Parse a number from OCR text (handles commas, Hebrew currency symbols)
     */
    parseNumber(str) {
        if (typeof str === 'number') return str;
        if (!str) return NaN;
        const cleaned = String(str).replace(/[^\d.\-,]/g, '').replace(/,/g, '');
        return parseFloat(cleaned);
    },

    // ---- Import Handlers per Data Type ----

    importBank(rows) {
        const headers = rows[0];
        const nameCol = this.detectColumn(headers, ['שם', 'חשבון', 'תיאור', 'name', 'account', 'description']);
        const bankCol = this.detectColumn(headers, ['בנק', 'bank']);
        const numCol = this.detectColumn(headers, ['מספר', 'number', 'חשבון']);
        const balCol = this.detectColumn(headers, ['יתרה', 'סכום', 'balance', 'amount']);

        let imported = 0;
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const first = (row[0] || '').trim();
            if (!first || first.includes('סה"כ') || first.includes('total')) continue;

            const balance = this.parseNumber(row[balCol >= 0 ? balCol : row.length - 1]);
            if (isNaN(balance)) continue;

            const name = nameCol >= 0 ? (row[nameCol] || 'חשבון מיובא').trim() : 'חשבון מיובא';
            const bank = bankCol >= 0 ? (row[bankCol] || '').trim() : '';
            const accNum = numCol >= 0 ? (row[numCol] || '').replace(/[^\d]/g, '').slice(-10) : '';

            const bankKey = typeof mapBankName === 'function' ? mapBankName(bank) : 'other';

            Storage.addBankAccount({
                nameHe: name,
                nameEn: name,
                bank: bankKey,
                accountNumber: accNum,
                balance: balance,
                currency: 'ILS'
            });
            imported++;
        }

        if (imported > 0 && typeof loadAccounts === 'function') loadAccounts();
        return imported;
    },

    importCredit(rows) {
        const headers = rows[0];
        const dateCol = this.detectColumn(headers, ['תאריך', 'date']);
        const descCol = this.detectColumn(headers, ['תיאור', 'עסק', 'שם', 'description', 'merchant']);
        const catCol = this.detectColumn(headers, ['קטגוריה', 'category']);
        const amtCol = this.detectColumn(headers, ['סכום', 'חיוב', 'amount', 'sum']);

        // Get or create default card
        const data = Storage.getCreditCards();
        let cardId = data.cards[0] ? data.cards[0].id : null;
        if (!cardId) {
            const card = Storage.addCreditCard({ name: 'כרטיס אשראי', lastFour: '0000', limit: 50000 });
            cardId = card.id;
        }

        let imported = 0;
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const first = (row[0] || '').trim();
            if (!first || first.includes('סה"כ') || first.includes('total')) continue;

            const amount = this.parseNumber(row[amtCol >= 0 ? amtCol : row.length - 1]);
            if (isNaN(amount) || amount <= 0) continue;

            // Try to parse date
            let date = '';
            if (dateCol >= 0 && row[dateCol]) {
                date = this.parseDate(row[dateCol]);
            }
            if (!date) {
                date = new Date().toISOString().split('T')[0];
            }

            const description = descCol >= 0 ? (row[descCol] || '').trim() : first;
            const category = catCol >= 0 ? this.mapCreditCategory(row[catCol]) : 'other';

            Storage.addExpense({
                cardId: cardId,
                date: date,
                amount: amount,
                category: category,
                description: description,
                isRecurring: false
            });
            imported++;
        }

        if (imported > 0 && typeof loadExpenses === 'function') {
            if (typeof loadCards === 'function') loadCards();
            loadExpenses();
        }
        return imported;
    },

    importStocks(rows) {
        const headers = rows[0];
        const symCol = this.detectColumn(headers, ['סימול', 'symbol', 'ticker', 'מניה', 'שם']);
        const qtyCol = this.detectColumn(headers, ['כמות', 'quantity', 'יחידות', 'units']);
        const priceCol = this.detectColumn(headers, ['מחיר', 'שער', 'price', 'עלות']);

        let imported = 0;
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const first = (row[0] || '').trim();
            if (!first || first.includes('סה"כ') || first.includes('total')) continue;

            const symbol = symCol >= 0 ? (row[symCol] || '').trim().toUpperCase() : first.toUpperCase();
            if (!symbol) continue;

            const quantity = this.parseNumber(row[qtyCol >= 0 ? qtyCol : 1]);
            const price = this.parseNumber(row[priceCol >= 0 ? priceCol : 2]);
            if (isNaN(quantity) || quantity <= 0) continue;

            Storage.addStock({
                symbol: symbol,
                quantity: quantity,
                buyPrice: isNaN(price) ? 0 : price,
                currency: 'ILS'
            });
            imported++;
        }

        if (imported > 0 && typeof loadStocks === 'function') loadStocks();
        return imported;
    },

    importFunds(rows) {
        const FUNDS_KEY = 'finance_my_funds';
        const headers = rows[0];
        const nameCol = this.detectColumn(headers, ['שם', 'קרן', 'name', 'fund']);
        const typeCol = this.detectColumn(headers, ['סוג', 'type', 'מסלול']);
        const valCol = this.detectColumn(headers, ['שווי', 'יתרה', 'סכום', 'value', 'balance', 'amount']);
        const numCol = this.detectColumn(headers, ['מספר', 'number']);

        const funds = JSON.parse(localStorage.getItem(FUNDS_KEY) || '[]');
        const now = new Date().toISOString();
        const today = now.split('T')[0];
        let imported = 0;

        for (let i = 1; i < rows.length; i++) {
            const row = rows[i];
            const first = (row[0] || '').trim();
            if (!first || first.includes('סה"כ') || first.includes('total')) continue;

            const value = this.parseNumber(row[valCol >= 0 ? valCol : row.length - 1]);
            if (isNaN(value)) continue;

            const name = nameCol >= 0 ? (row[nameCol] || 'קרן מיובאת').trim() : 'קרן מיובאת';
            const type = typeCol >= 0 ? this.mapFundType(row[typeCol]) : 'gemel';
            const fundNumber = numCol >= 0 ? (row[numCol] || '').trim() : '';

            funds.push({
                id: 'fund_' + Date.now() + '_' + i,
                type: type,
                name: name,
                company: 'other',
                value: value,
                monthlyDeposit: 0,
                accountNumber: fundNumber,
                notes: '',
                history: [{ date: today, value: value }],
                createdAt: now,
                updatedAt: now
            });
            imported++;
        }

        if (imported > 0) {
            localStorage.setItem(FUNDS_KEY, JSON.stringify(funds));
            if (typeof loadFunds === 'function') loadFunds();
        }
        return imported;
    },

    // ---- Utility ----

    parseDate(str) {
        if (!str) return '';
        str = str.trim();
        // DD/MM/YYYY or DD-MM-YYYY
        let m = str.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})$/);
        if (m) {
            const year = m[3].length === 2 ? '20' + m[3] : m[3];
            return `${year}-${m[2].padStart(2, '0')}-${m[1].padStart(2, '0')}`;
        }
        // YYYY-MM-DD
        m = str.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
        if (m) return str;
        return '';
    },

    mapCreditCategory(text) {
        if (!text) return 'other';
        const t = text.toLowerCase().trim();
        if (t.includes('מזון') || t.includes('אוכל') || t.includes('מסעד') || t.includes('food')) return 'food';
        if (t.includes('תחבורה') || t.includes('דלק') || t.includes('transport')) return 'transport';
        if (t.includes('קניות') || t.includes('אופנה') || t.includes('shopping')) return 'shopping';
        if (t.includes('בילוי') || t.includes('בידור') || t.includes('entertainment')) return 'entertainment';
        if (t.includes('חשבונ') || t.includes('bill')) return 'bills';
        if (t.includes('בריאות') || t.includes('health')) return 'health';
        if (t.includes('חינוך') || t.includes('education')) return 'education';
        return 'other';
    },

    mapFundType(text) {
        if (!text) return 'gemel';
        const t = text.toLowerCase().trim();
        if (t.includes('פנסי') || t.includes('pension')) return 'pension';
        if (t.includes('השתלמות') || t.includes('training')) return 'training';
        if (t.includes('גמל') || t.includes('gemel')) return 'gemel';
        if (t.includes('חיסכון') || t.includes('saving')) return 'savings';
        return 'gemel';
    },

    // ---- Payslip Scanner ----

    /**
     * Open file picker for payslip photo
     */
    openPayslipPicker() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*,.pdf,application/pdf';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                if (file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf')) {
                    this.processPayslipPDF(file);
                } else {
                    this.processPayslipImage(file);
                }
            }
        };
        input.click();
    },

    /**
     * Process payslip image with Tesseract OCR
     */
    async processPayslipImage(file) {
        this.showLoadingModal();

        try {
            const result = await Tesseract.recognize(file, 'heb+eng', {
                logger: (info) => {
                    if (info.status === 'recognizing text') {
                        this.updateProgress(Math.round(info.progress * 100));
                    }
                }
            });

            this.closeLoadingModal();

            const text = result.data.text;
            if (!text || text.trim().length < 5) {
                App.notify('לא זוהה טקסט בתמונה', 'error');
                return;
            }

            console.log('Payslip OCR raw text:', text);

            const data = this.extractPayslip(text);
            if (!data) {
                App.notify('לא זוהה תלוש משכורת בתמונה', 'error');
                return;
            }

            this.showPayslipPreviewModal(data);
        } catch (error) {
            this.closeLoadingModal();
            console.error('Payslip OCR error:', error);
            App.notify('שגיאה בזיהוי טקסט: ' + error.message, 'error');
        }
    },

    /**
     * Process payslip PDF with pdf.js + Tesseract OCR
     */
    async processPayslipPDF(file) {
        if (typeof pdfjsLib === 'undefined') {
            App.notify('PDF.js לא נטען — נא לרענן את הדף', 'error');
            return;
        }

        this.showLoadingModal();

        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
            const totalPages = pdf.numPages;
            let combinedText = '';

            for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
                // Update progress: rendering phase
                this.updateProgress(0, `עמוד ${pageNum}/${totalPages} — מעבד...`);

                const page = await pdf.getPage(pageNum);
                const viewport = page.getViewport({ scale: 2.0 });
                const canvas = document.createElement('canvas');
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                const ctx = canvas.getContext('2d');
                await page.render({ canvasContext: ctx, viewport }).promise;

                // Convert canvas to blob for Tesseract
                const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));

                // OCR this page
                const result = await Tesseract.recognize(blob, 'heb+eng', {
                    logger: (info) => {
                        if (info.status === 'recognizing text') {
                            const pageProgress = Math.round(info.progress * 100);
                            this.updateProgress(pageProgress, `עמוד ${pageNum}/${totalPages} — OCR ${pageProgress}%`);
                        }
                    }
                });

                combinedText += result.data.text + '\n';
            }

            this.closeLoadingModal();

            if (!combinedText || combinedText.trim().length < 5) {
                App.notify('לא זוהה טקסט ב-PDF', 'error');
                return;
            }

            console.log('Payslip PDF OCR raw text:', combinedText);

            const data = this.extractPayslip(combinedText);
            if (!data) {
                App.notify('לא זוהה תלוש משכורת ב-PDF', 'error');
                return;
            }

            this.showPayslipPreviewModal(data);

        } catch (error) {
            this.closeLoadingModal();
            console.error('Payslip PDF error:', error);
            App.notify('שגיאה בעיבוד PDF: ' + error.message, 'error');
        }
    },

    /**
     * Detect if OCR text is a payslip and extract fields
     */
    extractPayslip(text) {
        // Detection: is this a payslip?
        const isPayslip = text.includes('תלוש') ||
            (text.includes('ברוטו') && text.includes('נטו')) ||
            (text.includes('שכר') && text.includes('ניכויים'));

        if (!isPayslip) return null;

        const lines = text.split('\n').map(l => l.trim()).filter(l => l.length > 0);
        console.log('Payslip OCR lines:', lines);

        /**
         * Extract a number near a keyword.
         * Searches the entire line (RTL-aware), then adjacent lines.
         * min/max filter out base-salary numbers and tiny percentages.
         */
        const findAmount = (keywords, min = 0, max = Infinity) => {
            for (const keyword of keywords) {
                for (let i = 0; i < lines.length; i++) {
                    if (lines[i].includes(keyword)) {
                        const searchLines = [lines[i]];
                        if (i + 1 < lines.length) searchLines.push(lines[i + 1]);
                        if (i - 1 >= 0) searchLines.push(lines[i - 1]);

                        for (const sl of searchLines) {
                            const allNums = sl.match(/[\d][,\d]*\.?\d*/g);
                            if (allNums) {
                                for (const n of allNums) {
                                    const val = parseFloat(n.replace(/,/g, ''));
                                    if (!isNaN(val) && val >= min && val <= max) return val;
                                }
                            }
                        }
                    }
                }
            }
            return 0;
        };

        // Salary fields — large numbers OK
        const baseSalary = findAmount(['שכר לקצבה', 'שכר לקרן השתלמות', 'שכר בסיס', 'סה"כ תשלומים בגין משרה', 'סה״כ תשלומים בגין משרה', 'תשלומים בגין משרה'], 500);
        const grossSalary = findAmount(['סה"כ ברוטו', 'סה״כ ברוטו', 'שכר ברוטו', 'סך-כל התשלומים', 'סה"כ תשלומים', 'סה״כ תשלומים', 'ברוטו למס', 'ברוטו'], 500);
        const netSalary = findAmount(['נטו לתשלום', 'שכר 103', 'סה"כ נטו', 'סה״כ נטו', 'נטו'], 500);

        // Contribution fields — find employee/employer pairs on same line
        // Uses strict money-format regex to avoid matching fund IDs (078, 5600, etc.)
        // Employer contribution >= employee, so: larger = employer, smaller = employee.
        const findContributionPair = (keywords) => {
            for (const keyword of keywords) {
                for (let i = 0; i < lines.length; i++) {
                    if (lines[i].includes(keyword)) {
                        // Strict: only numbers with decimal point (X.XX) or comma thousands (X,XXX)
                        const allNums = lines[i].match(/\d{1,3}(?:,\d{3})*\.\d{2}/g);
                        if (allNums) {
                            const parsed = allNums.map(n => parseFloat(n.replace(/,/g, '')));
                            const amounts = parsed.filter(v => v >= 50 && v <= 10000);
                            const pcts = parsed.filter(v => v > 0 && v < 50);
                            if (amounts.length >= 2) {
                                return {
                                    employee: Math.min(...amounts),
                                    employer: Math.max(...amounts),
                                    employeePct: pcts.length >= 2 ? Math.min(...pcts) : (pcts.length === 1 ? pcts[0] : 0),
                                    employerPct: pcts.length >= 2 ? Math.max(...pcts) : 0
                                };
                            } else if (amounts.length === 1) {
                                return { single: amounts[0], singlePct: pcts.length >= 1 ? pcts[0] : 0 };
                            }
                        }
                    }
                }
            }
            return null;
        };

        // Pension: try pair detection, then individual keyword fallback
        const pensionPair = findContributionPair(['קצבה שכיר', 'קצבה', 'פנסיה']);
        const pensionEmployee = pensionPair?.employee || pensionPair?.single || findAmount(['פנסיה עובד', 'תגמולים עובד', 'תגמולים לקצבה', 'ניכוי פנסיה'], 50, 10000);
        const pensionEmployer = pensionPair?.employer || findAmount(['פנסיה מעביד', 'פנסיה מעסיק', 'תגמולים מעביד'], 50, 10000);

        // Severance (פיצויים) — employer-only, use strict regex
        const severancePair = findContributionPair(['פיצויים']);
        const severance = severancePair?.single || severancePair?.employer || findAmount(['פיצויים'], 50, 10000);
        const severancePct = severance > 0 ? 8.33 : 0;

        // Training fund: try pair detection, then individual keyword fallback
        const trainingPair = findContributionPair(['השתלמות']);
        const trainingEmployee = trainingPair?.employee || findAmount(['קרן השתלמות עובד', 'השתלמות עובד', 'ק.השתלמות עובד', 'קה"ש עובד'], 50, 10000);
        const trainingEmployer = trainingPair?.employer || findAmount(['קרן השתלמות מעביד', 'השתלמות מעביד', 'ק.השתלמות מעביד', 'קה"ש מעביד'], 50, 10000);

        // Tax/deduction fields — try Hilan table first, then keyword search
        let incomeTax = 0, nationalInsurance = 0, healthInsurance = 0;

        // Hilan format: "ניכויי חובה" section has a line with 4 numbers:
        // [total, national_insurance, health_insurance, income_tax]
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].includes('ניכויי חובה') || lines[i].includes('ניכויי  חובה')) {
                // Search next 3 lines for a line with 3+ large numbers
                for (let j = i + 1; j <= Math.min(i + 3, lines.length - 1); j++) {
                    const nums = lines[j].match(/[\d][,\d]*\.\d{2}/g);
                    if (nums && nums.length >= 3) {
                        const vals = nums.map(n => parseFloat(n.replace(/,/g, '')));
                        // Pattern: total (largest), NI, health, tax
                        const sorted = [...vals].sort((a, b) => b - a);
                        const total = sorted[0]; // largest = total
                        const remaining = vals.filter(v => v !== total && v >= 50);
                        if (remaining.length >= 3) {
                            // Order in Hilan: total, NI, health, tax
                            nationalInsurance = remaining[0];
                            healthInsurance = remaining[1];
                            incomeTax = remaining[2];
                        } else if (remaining.length >= 2) {
                            nationalInsurance = Math.min(...remaining);
                            incomeTax = Math.max(...remaining);
                        }
                        break;
                    }
                }
                break;
            }
        }

        // Fallback to keyword search if Hilan table didn't work
        if (!incomeTax) incomeTax = findAmount(['מס רגיל', 'מס הכנסה', 'מ.הכנסה', 'מ. הכנסה'], 10);
        if (!nationalInsurance) nationalInsurance = findAmount(['ביטוח לאומי', 'בט.לאומי', 'בט. לאומי', 'ב.לאומי'], 50, 10000);
        if (!healthInsurance) healthInsurance = findAmount(['ביטוח בריאות', 'בט.בריאות', 'בט. בריאות', 'דמי בריאות'], 50, 10000);

        // Percentages — use pair data (extracted from same line as amounts), fallback to X% search
        const pensionEmployeePct = pensionPair?.employeePct || 0;
        const pensionEmployerPct = pensionPair?.employerPct || 0;
        const trainingEmployeePct = trainingPair?.employeePct || 0;
        const trainingEmployerPct = trainingPair?.employerPct || 0;

        return {
            baseSalary,
            grossSalary,
            netSalary,
            pensionEmployee,
            pensionEmployer,
            severance,
            trainingEmployee,
            trainingEmployer,
            incomeTax,
            nationalInsurance,
            healthInsurance,
            pensionEmployeePct,
            pensionEmployerPct,
            severancePct,
            trainingEmployeePct,
            trainingEmployerPct
        };
    },

    /**
     * Show payslip preview modal with editable fields
     */
    showPayslipPreviewModal(data) {
        const fields = [
            { id: 'psBase', label: 'שכר בסיס', labelKey: 'baseSalary', value: data.baseSalary },
            { id: 'psGross', label: 'שכר ברוטו', labelKey: 'grossSalary', value: data.grossSalary },
            { id: 'psNet', label: 'שכר נטו', labelKey: 'netSalary', value: data.netSalary },
            { id: 'psPensionEmp', label: 'פנסיה עובד', labelKey: 'pensionEmployee', value: data.pensionEmployee, pctId: 'psPensionEmpPct', pctValue: data.pensionEmployeePct },
            { id: 'psPensionEr', label: 'פנסיה מעביד', labelKey: 'pensionEmployer', value: data.pensionEmployer, pctId: 'psPensionErPct', pctValue: data.pensionEmployerPct },
            { id: 'psSeverance', label: 'פיצויים', labelKey: 'severance', value: data.severance, pctId: 'psSeverancePct', pctValue: data.severancePct },
            { id: 'psTrainEmp', label: 'קרן השתלמות עובד', labelKey: 'trainingEmployee', value: data.trainingEmployee, pctId: 'psTrainEmpPct', pctValue: data.trainingEmployeePct },
            { id: 'psTrainEr', label: 'קרן השתלמות מעביד', labelKey: 'trainingEmployer', value: data.trainingEmployer, pctId: 'psTrainErPct', pctValue: data.trainingEmployerPct },
            { id: 'psTax', label: 'מס הכנסה', labelKey: 'incomeTax', value: data.incomeTax },
            { id: 'psNI', label: 'ביטוח לאומי', labelKey: 'nationalInsurance', value: data.nationalInsurance },
            { id: 'psHealth', label: 'ביטוח בריאות', labelKey: 'healthInsurance', value: data.healthInsurance }
        ];

        const lang = (typeof I18n !== 'undefined' && I18n.currentLanguage) || 'he';
        const t = (key) => {
            try { return I18n.translations[lang].profile[key]; } catch(e) { return null; }
        };

        const inputStyle = 'padding: 6px 10px; background: var(--color-bg-primary); border: 1px solid var(--color-border); border-radius: 8px; color: white; font-size: 0.95rem;';

        let fieldsHTML = fields.map(f => {
            const pctInput = f.pctId ? `
                    <span>%</span>
                    <input type="number" class="form-control" id="${f.pctId}" value="${f.pctValue || 0}" step="0.1"
                           style="width: 70px; ${inputStyle}">` : '';
            return `
            <div class="form-group" style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid var(--color-border);">
                <label style="font-weight: 500;">${t(f.labelKey) || f.label}</label>
                <div style="display: flex; align-items: center; gap: 6px;">
                    <span>₪</span>
                    <input type="number" class="form-control" id="${f.id}" value="${f.value || 0}" step="0.01"
                           style="width: ${f.pctId ? '100px' : '140px'}; ${inputStyle}">${pctInput}
                </div>
            </div>`;
        }).join('');

        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.id = 'payslipPreviewModal';
        modal.innerHTML = `
            <div class="modal" style="max-width: 500px;">
                <div class="modal-header">
                    <h2>${lang === 'he' ? 'נתוני תלוש משכורת' : 'Payslip Data'}</h2>
                    <button class="modal-close" onclick="document.getElementById('payslipPreviewModal').remove()">&times;</button>
                </div>
                <div class="modal-body">
                    <p style="margin-bottom: 15px; color: var(--color-text-secondary); font-size: 0.9rem;">
                        ${lang === 'he' ? 'זוהו נתוני תלוש — ניתן לערוך לפני שמירה.' : 'Payslip data detected — you can edit before saving.'}
                    </p>
                    ${fieldsHTML}
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="document.getElementById('payslipPreviewModal').remove()">${lang === 'he' ? 'ביטול' : 'Cancel'}</button>
                    <button class="btn btn-primary" onclick="ImageImport.confirmPayslipImport()">${lang === 'he' ? 'שמור בפרופיל' : 'Save to Profile'}</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },

    /**
     * Save payslip data to profile
     */
    confirmPayslipImport() {
        const payslipData = {
            baseSalary: parseFloat(document.getElementById('psBase').value) || 0,
            grossSalary: parseFloat(document.getElementById('psGross').value) || 0,
            netSalary: parseFloat(document.getElementById('psNet').value) || 0,
            pensionEmployee: parseFloat(document.getElementById('psPensionEmp').value) || 0,
            pensionEmployer: parseFloat(document.getElementById('psPensionEr').value) || 0,
            severance: parseFloat(document.getElementById('psSeverance').value) || 0,
            trainingEmployee: parseFloat(document.getElementById('psTrainEmp').value) || 0,
            trainingEmployer: parseFloat(document.getElementById('psTrainEr').value) || 0,
            incomeTax: parseFloat(document.getElementById('psTax').value) || 0,
            nationalInsurance: parseFloat(document.getElementById('psNI').value) || 0,
            healthInsurance: parseFloat(document.getElementById('psHealth').value) || 0,
            pensionEmployeePct: parseFloat(document.getElementById('psPensionEmpPct').value) || 0,
            pensionEmployerPct: parseFloat(document.getElementById('psPensionErPct').value) || 0,
            severancePct: parseFloat(document.getElementById('psSeverancePct').value) || 0,
            trainingEmployeePct: parseFloat(document.getElementById('psTrainEmpPct').value) || 0,
            trainingEmployerPct: parseFloat(document.getElementById('psTrainErPct').value) || 0,
            scannedAt: new Date().toISOString()
        };

        document.getElementById('payslipPreviewModal').remove();

        // Update profile
        const profile = Storage.getUserProfile() || {};
        profile.payslipData = payslipData;

        // Auto-fill profile fields
        if (payslipData.netSalary > 0) {
            profile.monthlyIncome = payslipData.netSalary;
        }
        if (payslipData.pensionEmployee > 0 || payslipData.pensionEmployer > 0) {
            profile.hasPension = true;
        }
        if (payslipData.trainingEmployee > 0 || payslipData.trainingEmployer > 0) {
            profile.hasTrainingFund = true;
        }
        profile.updatedAt = new Date().toISOString();

        Storage.saveUserProfile(profile);

        // Update form fields on profile page if they exist
        const incomeEl = document.getElementById('profileIncome');
        if (incomeEl) incomeEl.value = profile.monthlyIncome || '';
        const pensionEl = document.getElementById('profilePension');
        if (pensionEl) pensionEl.checked = profile.hasPension || false;
        const trainingEl = document.getElementById('profileTrainingFund');
        if (trainingEl) trainingEl.checked = profile.hasTrainingFund || false;

        // Render payslip summary if function exists
        if (typeof renderPayslipSummary === 'function') {
            renderPayslipSummary(payslipData);
        }

        App.notify('נתוני התלוש נשמרו בהצלחה', 'success');
    }
};
