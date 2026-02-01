/**
 * Export Module - Export data to Excel (CSV) and PDF
 */
const ExportManager = {
    /**
     * Export data to CSV (Excel compatible)
     * @param {Array} data - Array of objects to export
     * @param {Array} columns - Column definitions [{key, label}]
     * @param {string} filename - Filename without extension
     */
    toCSV(data, columns, filename) {
        // BOM for Excel to recognize UTF-8
        const BOM = '\uFEFF';

        // Header row
        const headers = columns.map(col => `"${col.label}"`).join(',');

        // Data rows
        const rows = data.map(item => {
            return columns.map(col => {
                let value = item[col.key];
                if (value === null || value === undefined) value = '';
                if (typeof value === 'number') return value;
                // Escape quotes and wrap in quotes
                return `"${String(value).replace(/"/g, '""')}"`;
            }).join(',');
        });

        const csv = BOM + headers + '\n' + rows.join('\n');

        // Download
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        this.downloadBlob(blob, `${filename}.csv`);
    },

    /**
     * Export to PDF using print dialog
     * @param {string} title - Report title
     * @param {string} content - HTML content to print
     */
    toPDF(title, content) {
        const printWindow = window.open('', '_blank');
        const lang = I18n?.currentLanguage || 'he';
        const dir = lang === 'he' ? 'rtl' : 'ltr';

        printWindow.document.write(`
            <!DOCTYPE html>
            <html lang="${lang}" dir="${dir}">
            <head>
                <meta charset="UTF-8">
                <title>${title}</title>
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
                        padding: 40px;
                        color: #333;
                        direction: ${dir};
                    }
                    .report-header {
                        text-align: center;
                        margin-bottom: 30px;
                        padding-bottom: 20px;
                        border-bottom: 2px solid #333;
                    }
                    .report-header h1 {
                        font-size: 24px;
                        margin-bottom: 10px;
                    }
                    .report-header .date {
                        color: #666;
                        font-size: 14px;
                    }
                    .section {
                        margin-bottom: 30px;
                    }
                    .section h2 {
                        font-size: 18px;
                        margin-bottom: 15px;
                        color: #444;
                        border-bottom: 1px solid #ddd;
                        padding-bottom: 8px;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-bottom: 20px;
                    }
                    th, td {
                        padding: 10px 8px;
                        text-align: ${dir === 'rtl' ? 'right' : 'left'};
                        border-bottom: 1px solid #ddd;
                    }
                    th {
                        background: #f5f5f5;
                        font-weight: 600;
                    }
                    .positive { color: #10b981; }
                    .negative { color: #ef4444; }
                    .summary-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 20px;
                        margin-bottom: 30px;
                    }
                    .summary-item {
                        padding: 15px;
                        background: #f9fafb;
                        border-radius: 8px;
                        text-align: center;
                    }
                    .summary-item .label {
                        font-size: 12px;
                        color: #666;
                        margin-bottom: 5px;
                    }
                    .summary-item .value {
                        font-size: 20px;
                        font-weight: 600;
                    }
                    @media print {
                        body { padding: 20px; }
                        .no-print { display: none; }
                    }
                </style>
            </head>
            <body>
                <div class="report-header">
                    <h1>${title}</h1>
                    <div class="date">${new Date().toLocaleDateString(lang === 'he' ? 'he-IL' : 'en-US', {
                        year: 'numeric', month: 'long', day: 'numeric'
                    })}</div>
                </div>
                ${content}
                <script>
                    window.onload = function() {
                        window.print();
                        setTimeout(function() { window.close(); }, 500);
                    };
                </script>
            </body>
            </html>
        `);
        printWindow.document.close();
    },

    /**
     * Download a blob as file
     * @param {Blob} blob - Blob to download
     * @param {string} filename - Filename
     */
    downloadBlob(blob, filename) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    },

    /**
     * Generate full financial report
     */
    generateFullReport() {
        const lang = I18n?.currentLanguage || 'he';
        const isHebrew = lang === 'he';

        // Gather all data
        const bankAccounts = Storage.getBankAccounts();
        const creditData = Storage.getCreditCards();
        const stockData = Storage.getStocks();
        const fundsData = Storage.getFunds();
        const assetsData = Storage.getAssets();

        // Calculate totals
        const bankTotal = bankAccounts.reduce((sum, acc) => sum + acc.balance, 0);
        const creditTotal = creditData.expenses
            .filter(e => new Date(e.date).getMonth() === new Date().getMonth())
            .reduce((sum, e) => sum + e.amount, 0);
        const stocksTotal = stockData.holdings.reduce((sum, h) => sum + (h.quantity * (h.currentPrice || h.avgPrice)), 0);
        const fundsTotal = fundsData.reduce((sum, f) => sum + f.currentValue, 0);
        const assetsTotal = assetsData.reduce((sum, a) => sum + a.estimatedValue, 0);
        const netWorth = bankTotal + stocksTotal + fundsTotal + assetsTotal - creditTotal;

        // Build content
        let content = `
            <div class="summary-grid">
                <div class="summary-item">
                    <div class="label">${isHebrew ? 'שווי נקי' : 'Net Worth'}</div>
                    <div class="value">${I18n?.formatCurrency(netWorth) || netWorth.toLocaleString()}</div>
                </div>
                <div class="summary-item">
                    <div class="label">${isHebrew ? 'יתרת בנק' : 'Bank Balance'}</div>
                    <div class="value">${I18n?.formatCurrency(bankTotal) || bankTotal.toLocaleString()}</div>
                </div>
                <div class="summary-item">
                    <div class="label">${isHebrew ? 'שווי מניות' : 'Stocks Value'}</div>
                    <div class="value">${I18n?.formatCurrency(stocksTotal) || stocksTotal.toLocaleString()}</div>
                </div>
            </div>
        `;

        // Bank Accounts Section
        if (bankAccounts.length > 0) {
            content += `
                <div class="section">
                    <h2>${isHebrew ? '🏦 חשבונות בנק' : '🏦 Bank Accounts'}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>${isHebrew ? 'בנק' : 'Bank'}</th>
                                <th>${isHebrew ? 'מספר חשבון' : 'Account #'}</th>
                                <th>${isHebrew ? 'יתרה' : 'Balance'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${bankAccounts.map(acc => `
                                <tr>
                                    <td>${acc.nameHe || acc.nameEn || acc.bank}</td>
                                    <td>${acc.accountNumber || '-'}</td>
                                    <td>${I18n?.formatCurrency(acc.balance) || acc.balance.toLocaleString()}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }

        // Stocks Section
        if (stockData.holdings.length > 0) {
            content += `
                <div class="section">
                    <h2>${isHebrew ? '📈 תיק מניות' : '📈 Stock Portfolio'}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>${isHebrew ? 'סימול' : 'Symbol'}</th>
                                <th>${isHebrew ? 'שם' : 'Name'}</th>
                                <th>${isHebrew ? 'כמות' : 'Qty'}</th>
                                <th>${isHebrew ? 'מחיר ממוצע' : 'Avg Price'}</th>
                                <th>${isHebrew ? 'מחיר נוכחי' : 'Current'}</th>
                                <th>${isHebrew ? 'שווי' : 'Value'}</th>
                                <th>${isHebrew ? 'רווח/הפסד' : 'P/L'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${stockData.holdings.map(h => {
                                const currentPrice = h.currentPrice || h.avgPrice;
                                const value = h.quantity * currentPrice;
                                const cost = h.quantity * h.avgPrice;
                                const pl = value - cost;
                                const plPercent = ((pl / cost) * 100).toFixed(1);
                                return `
                                    <tr>
                                        <td>${h.symbol}</td>
                                        <td>${h.name || '-'}</td>
                                        <td>${h.quantity}</td>
                                        <td>${h.avgPrice.toFixed(2)}</td>
                                        <td>${currentPrice.toFixed(2)}</td>
                                        <td>${value.toFixed(0)}</td>
                                        <td class="${pl >= 0 ? 'positive' : 'negative'}">${pl >= 0 ? '+' : ''}${pl.toFixed(0)} (${plPercent}%)</td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }

        // Funds Section
        if (fundsData.length > 0) {
            content += `
                <div class="section">
                    <h2>${isHebrew ? '📊 קרנות ופנסיה' : '📊 Funds & Pension'}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>${isHebrew ? 'שם הקרן' : 'Fund Name'}</th>
                                <th>${isHebrew ? 'סוג' : 'Type'}</th>
                                <th>${isHebrew ? 'שווי נוכחי' : 'Current Value'}</th>
                                <th>${isHebrew ? 'הפקדה חודשית' : 'Monthly Deposit'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${fundsData.map(f => `
                                <tr>
                                    <td>${f.name}</td>
                                    <td>${f.type}</td>
                                    <td>${I18n?.formatCurrency(f.currentValue) || f.currentValue.toLocaleString()}</td>
                                    <td>${I18n?.formatCurrency(f.monthlyDeposit) || f.monthlyDeposit.toLocaleString()}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }

        // Assets Section
        if (assetsData.length > 0) {
            content += `
                <div class="section">
                    <h2>${isHebrew ? '🏠 נכסים' : '🏠 Assets'}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>${isHebrew ? 'שם הנכס' : 'Asset Name'}</th>
                                <th>${isHebrew ? 'סוג' : 'Type'}</th>
                                <th>${isHebrew ? 'שווי מוערך' : 'Estimated Value'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${assetsData.map(a => `
                                <tr>
                                    <td>${a.name}</td>
                                    <td>${a.type}</td>
                                    <td>${I18n?.formatCurrency(a.estimatedValue) || a.estimatedValue.toLocaleString()}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }

        return {
            title: isHebrew ? 'דוח פיננסי מלא' : 'Full Financial Report',
            content
        };
    },

    /**
     * Export bank accounts to CSV
     */
    exportBankAccountsCSV() {
        const lang = I18n?.currentLanguage || 'he';
        const isHebrew = lang === 'he';
        const data = Storage.getBankAccounts();

        const columns = [
            { key: 'bank', label: isHebrew ? 'בנק' : 'Bank' },
            { key: 'accountNumber', label: isHebrew ? 'מספר חשבון' : 'Account Number' },
            { key: 'balance', label: isHebrew ? 'יתרה' : 'Balance' },
            { key: 'currency', label: isHebrew ? 'מטבע' : 'Currency' }
        ];

        const exportData = data.map(acc => ({
            bank: acc.nameHe || acc.nameEn || acc.bank,
            accountNumber: acc.accountNumber || '',
            balance: acc.balance,
            currency: acc.currency || 'ILS'
        }));

        this.toCSV(exportData, columns, isHebrew ? 'חשבונות_בנק' : 'bank_accounts');
    },

    /**
     * Export stocks to CSV
     */
    exportStocksCSV() {
        const lang = I18n?.currentLanguage || 'he';
        const isHebrew = lang === 'he';
        const data = Storage.getStocks();

        const columns = [
            { key: 'symbol', label: isHebrew ? 'סימול' : 'Symbol' },
            { key: 'name', label: isHebrew ? 'שם' : 'Name' },
            { key: 'quantity', label: isHebrew ? 'כמות' : 'Quantity' },
            { key: 'avgPrice', label: isHebrew ? 'מחיר ממוצע' : 'Avg Price' },
            { key: 'currentPrice', label: isHebrew ? 'מחיר נוכחי' : 'Current Price' },
            { key: 'value', label: isHebrew ? 'שווי' : 'Value' },
            { key: 'profitLoss', label: isHebrew ? 'רווח/הפסד' : 'Profit/Loss' },
            { key: 'profitLossPercent', label: isHebrew ? 'אחוז רווח' : 'P/L %' }
        ];

        const exportData = data.holdings.map(h => {
            const currentPrice = h.currentPrice || h.avgPrice;
            const value = h.quantity * currentPrice;
            const cost = h.quantity * h.avgPrice;
            const pl = value - cost;
            return {
                symbol: h.symbol,
                name: h.name || '',
                quantity: h.quantity,
                avgPrice: h.avgPrice,
                currentPrice: currentPrice,
                value: value,
                profitLoss: pl,
                profitLossPercent: ((pl / cost) * 100).toFixed(2)
            };
        });

        this.toCSV(exportData, columns, isHebrew ? 'תיק_מניות' : 'stock_portfolio');
    },

    /**
     * Export expenses to CSV
     */
    exportExpensesCSV(month = null) {
        const lang = I18n?.currentLanguage || 'he';
        const isHebrew = lang === 'he';
        const data = Storage.getCreditCards();

        let expenses = data.expenses;

        if (month !== null) {
            expenses = expenses.filter(e => new Date(e.date).getMonth() === month);
        }

        const columns = [
            { key: 'date', label: isHebrew ? 'תאריך' : 'Date' },
            { key: 'description', label: isHebrew ? 'תיאור' : 'Description' },
            { key: 'category', label: isHebrew ? 'קטגוריה' : 'Category' },
            { key: 'amount', label: isHebrew ? 'סכום' : 'Amount' },
            { key: 'card', label: isHebrew ? 'כרטיס' : 'Card' }
        ];

        const exportData = expenses.map(e => ({
            date: e.date,
            description: e.description,
            category: e.category,
            amount: e.amount,
            card: e.cardId || ''
        }));

        this.toCSV(exportData, columns, isHebrew ? 'הוצאות' : 'expenses');
    },

    /**
     * Export full report to PDF
     */
    exportFullReportPDF() {
        const report = this.generateFullReport();
        this.toPDF(report.title, report.content);
    },

    /**
     * Show export options modal
     */
    showExportOptions() {
        const lang = I18n?.currentLanguage || 'he';
        const isHebrew = lang === 'he';

        const modal = document.createElement('div');
        modal.className = 'modal-overlay active';
        modal.id = 'exportModal';
        modal.innerHTML = `
            <div class="modal" style="max-width: 450px;">
                <div class="modal-header">
                    <h2>${isHebrew ? '📤 ייצוא נתונים' : '📤 Export Data'}</h2>
                    <button class="modal-close" onclick="ExportManager.closeExportModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="export-options">
                        <div class="export-section">
                            <h3 style="margin-bottom: 15px; color: var(--color-text-secondary);">${isHebrew ? 'ייצוא ל-Excel (CSV)' : 'Export to Excel (CSV)'}</h3>
                            <div style="display: flex; flex-direction: column; gap: 10px;">
                                <button class="btn btn-secondary" onclick="ExportManager.exportBankAccountsCSV(); ExportManager.closeExportModal();">
                                    🏦 ${isHebrew ? 'חשבונות בנק' : 'Bank Accounts'}
                                </button>
                                <button class="btn btn-secondary" onclick="ExportManager.exportStocksCSV(); ExportManager.closeExportModal();">
                                    📈 ${isHebrew ? 'תיק מניות' : 'Stock Portfolio'}
                                </button>
                                <button class="btn btn-secondary" onclick="ExportManager.exportExpensesCSV(); ExportManager.closeExportModal();">
                                    💳 ${isHebrew ? 'הוצאות אשראי' : 'Credit Expenses'}
                                </button>
                            </div>
                        </div>
                        <div class="export-section" style="margin-top: 25px; padding-top: 20px; border-top: 1px solid var(--color-border);">
                            <h3 style="margin-bottom: 15px; color: var(--color-text-secondary);">${isHebrew ? 'ייצוא ל-PDF' : 'Export to PDF'}</h3>
                            <button class="btn btn-primary" style="width: 100%;" onclick="ExportManager.exportFullReportPDF(); ExportManager.closeExportModal();">
                                📋 ${isHebrew ? 'דוח פיננסי מלא' : 'Full Financial Report'}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" onclick="ExportManager.closeExportModal()">${isHebrew ? 'סגור' : 'Close'}</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
    },

    /**
     * Close export modal
     */
    closeExportModal() {
        const modal = document.getElementById('exportModal');
        if (modal) {
            modal.remove();
        }
    }
};

// Make available globally
window.ExportManager = ExportManager;
