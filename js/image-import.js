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
    updateProgress(percent) {
        const bar = document.getElementById('ocrProgressBar');
        const text = document.getElementById('ocrProgressText');
        if (bar) bar.style.width = percent + '%';
        if (text) text.textContent = percent + '%';
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
        const headers = rows[0];
        const nameCol = this.detectColumn(headers, ['שם', 'קרן', 'name', 'fund']);
        const typeCol = this.detectColumn(headers, ['סוג', 'type', 'מסלול']);
        const valCol = this.detectColumn(headers, ['שווי', 'יתרה', 'סכום', 'value', 'balance', 'amount']);
        const numCol = this.detectColumn(headers, ['מספר', 'number']);

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

            // Use Storage to add fund (my-funds uses a generic fund storage)
            const funds = JSON.parse(localStorage.getItem('finsight_my_funds') || '[]');
            funds.push({
                id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
                name: name,
                type: type,
                value: value,
                fundNumber: fundNumber,
                addedAt: new Date().toISOString()
            });
            localStorage.setItem('finsight_my_funds', JSON.stringify(funds));
            imported++;
        }

        if (imported > 0 && typeof loadFunds === 'function') loadFunds();
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
    }
};
