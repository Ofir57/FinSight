/**
 * Internationalization Module - Hebrew and English translations
 */
const I18n = {
    currentLanguage: 'he',

    translations: {
        he: {
            // Navigation
            nav: {
                dashboard: 'דאשבורד',
                bankAccounts: 'חשבונות בנק',
                creditCards: 'כרטיסי אשראי',
                stocks: 'מניות',
                fundsAndPension: 'קרנות ופנסיה',
                trainingFunds: 'קרנות השתלמות',
                pension: 'פנסיה',
                gemel: 'קופות גמל',
                assets: 'נכסים',
                settings: 'הגדרות'
            },
            // Dashboard
            dashboard: {
                title: 'ניהול פיננסי אישי',
                subtitle: 'סקירה כללית של הנכסים שלך',
                netWorth: 'שווי נקי',
                totalAssets: 'סה״כ נכסים',
                bankBalance: 'יתרת בנק',
                creditExpenses: 'הוצאות אשראי',
                stocksValue: 'שווי מניות',
                fundsValue: 'שווי קרנות',
                assetsValue: 'שווי נכסים',
                assetDistribution: 'חלוקת נכסים',
                monthlyExpenses: 'הוצאות חודשיות',
                recentTransactions: 'פעולות אחרונות'
            },
            // Bank
            bank: {
                title: 'חשבונות בנק',
                addAccount: 'הוסף חשבון',
                accountName: 'שם החשבון',
                bankName: 'שם הבנק',
                accountNumber: 'מספר חשבון',
                balance: 'יתרה',
                currency: 'מטבע',
                updateBalance: 'עדכן יתרה',
                balanceHistory: 'היסטוריית יתרות',
                noAccounts: 'אין חשבונות בנק',
                banks: {
                    leumi: 'בנק לאומי',
                    hapoalim: 'בנק הפועלים',
                    discount: 'בנק דיסקונט',
                    mizrahi: 'בנק מזרחי טפחות',
                    international: 'הבנק הבינלאומי',
                    mercantile: 'בנק מרכנתיל',
                    otsar: 'אוצר החייל',
                    yahav: 'בנק יהב',
                    massad: 'בנק מסד',
                    other: 'אחר'
                }
            },
            // Credit
            credit: {
                title: 'כרטיסי אשראי',
                addCard: 'הוסף כרטיס',
                addExpense: 'הוסף הוצאה',
                cardName: 'שם הכרטיס',
                lastFour: '4 ספרות אחרונות',
                creditLimit: 'מסגרת אשראי',
                monthlyTotal: 'סה״כ חודשי',
                expenseDate: 'תאריך',
                expenseAmount: 'סכום',
                expenseCategory: 'קטגוריה',
                expenseDescription: 'תיאור',
                recurring: 'הוצאה קבועה',
                noCards: 'אין כרטיסי אשראי',
                noExpenses: 'אין הוצאות',
                categories: {
                    food: 'מזון ומסעדות',
                    transport: 'תחבורה ודלק',
                    shopping: 'קניות',
                    entertainment: 'בילויים',
                    bills: 'חשבונות קבועים',
                    health: 'בריאות',
                    education: 'חינוך',
                    other: 'אחר'
                }
            },
            // Stocks
            stocks: {
                title: 'תיק מניות',
                addStock: 'הוסף מניה',
                symbol: 'סימול',
                companyName: 'שם החברה',
                quantity: 'כמות',
                avgPrice: 'מחיר ממוצע',
                currentPrice: 'מחיר נוכחי',
                totalValue: 'שווי כולל',
                profitLoss: 'רווח/הפסד',
                updatePrice: 'עדכן מחיר',
                sell: 'מכור',
                transactions: 'היסטוריית פעולות',
                buy: 'קנייה',
                portfolioDistribution: 'חלוקת תיק',
                noStocks: 'אין מניות בתיק'
            },
            // Funds
            funds: {
                title: 'הקרנות שלי',
                addFund: 'הוסף קרן',
                fundName: 'שם הקרן',
                fundType: 'סוג קרן',
                currentValue: 'שווי נוכחי',
                monthlyDeposit: 'הפקדה חודשית',
                types: {
                    training: 'קרן השתלמות',
                    pension: 'פנסיה',
                    gemel: 'קופת גמל'
                },
                noFunds: 'לא נבחרו קרנות'
            },
            // Assets
            assets: {
                title: 'נכסים נוספים',
                addAsset: 'הוסף נכס',
                assetName: 'שם הנכס',
                assetType: 'סוג נכס',
                estimatedValue: 'שווי מוערך',
                purchaseDate: 'תאריך רכישה',
                purchasePrice: 'מחיר רכישה',
                types: {
                    car: 'רכב',
                    property: 'נדל״ן',
                    savings: 'חסכונות',
                    jewelry: 'תכשיטים',
                    electronics: 'אלקטרוניקה',
                    other: 'אחר'
                },
                noAssets: 'אין נכסים'
            },
            // Common
            common: {
                save: 'שמור',
                cancel: 'ביטול',
                delete: 'מחק',
                edit: 'ערוך',
                add: 'הוסף',
                update: 'עדכן',
                close: 'סגור',
                confirm: 'אישור',
                yes: 'כן',
                no: 'לא',
                loading: 'טוען...',
                noData: 'אין נתונים',
                total: 'סה״כ',
                currency: '₪',
                currencyCode: 'ILS',
                date: 'תאריך',
                amount: 'סכום',
                name: 'שם',
                type: 'סוג',
                actions: 'פעולות',
                export: 'ייצוא נתונים',
                import: 'ייבוא נתונים',
                backup: 'גיבוי',
                confirmDelete: 'האם אתה בטוח שברצונך למחוק?'
            },
            // Months
            months: ['ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני', 'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר']
        },
        en: {
            // Navigation
            nav: {
                dashboard: 'Dashboard',
                bankAccounts: 'Bank Accounts',
                creditCards: 'Credit Cards',
                stocks: 'Stocks',
                fundsAndPension: 'Funds & Pension',
                trainingFunds: 'Training Funds',
                pension: 'Pension',
                gemel: 'Provident Funds',
                assets: 'Assets',
                settings: 'Settings'
            },
            // Dashboard
            dashboard: {
                title: 'Personal Finance Manager',
                subtitle: 'Overview of your assets',
                netWorth: 'Net Worth',
                totalAssets: 'Total Assets',
                bankBalance: 'Bank Balance',
                creditExpenses: 'Credit Expenses',
                stocksValue: 'Stocks Value',
                fundsValue: 'Funds Value',
                assetsValue: 'Assets Value',
                assetDistribution: 'Asset Distribution',
                monthlyExpenses: 'Monthly Expenses',
                recentTransactions: 'Recent Transactions'
            },
            // Bank
            bank: {
                title: 'Bank Accounts',
                addAccount: 'Add Account',
                accountName: 'Account Name',
                bankName: 'Bank Name',
                accountNumber: 'Account Number',
                balance: 'Balance',
                currency: 'Currency',
                updateBalance: 'Update Balance',
                balanceHistory: 'Balance History',
                noAccounts: 'No bank accounts',
                banks: {
                    leumi: 'Bank Leumi',
                    hapoalim: 'Bank Hapoalim',
                    discount: 'Discount Bank',
                    mizrahi: 'Mizrahi Tefahot',
                    international: 'First International',
                    mercantile: 'Mercantile Bank',
                    otsar: 'Otsar Hahayal',
                    yahav: 'Bank Yahav',
                    massad: 'Bank Massad',
                    other: 'Other'
                }
            },
            // Credit
            credit: {
                title: 'Credit Cards',
                addCard: 'Add Card',
                addExpense: 'Add Expense',
                cardName: 'Card Name',
                lastFour: 'Last 4 Digits',
                creditLimit: 'Credit Limit',
                monthlyTotal: 'Monthly Total',
                expenseDate: 'Date',
                expenseAmount: 'Amount',
                expenseCategory: 'Category',
                expenseDescription: 'Description',
                recurring: 'Recurring',
                noCards: 'No credit cards',
                noExpenses: 'No expenses',
                categories: {
                    food: 'Food & Restaurants',
                    transport: 'Transportation & Gas',
                    shopping: 'Shopping',
                    entertainment: 'Entertainment',
                    bills: 'Bills',
                    health: 'Health',
                    education: 'Education',
                    other: 'Other'
                }
            },
            // Stocks
            stocks: {
                title: 'Stock Portfolio',
                addStock: 'Add Stock',
                symbol: 'Symbol',
                companyName: 'Company Name',
                quantity: 'Quantity',
                avgPrice: 'Avg Price',
                currentPrice: 'Current Price',
                totalValue: 'Total Value',
                profitLoss: 'Profit/Loss',
                updatePrice: 'Update Price',
                sell: 'Sell',
                transactions: 'Transaction History',
                buy: 'Buy',
                portfolioDistribution: 'Portfolio Distribution',
                noStocks: 'No stocks in portfolio'
            },
            // Funds
            funds: {
                title: 'My Funds',
                addFund: 'Add Fund',
                fundName: 'Fund Name',
                fundType: 'Fund Type',
                currentValue: 'Current Value',
                monthlyDeposit: 'Monthly Deposit',
                types: {
                    training: 'Training Fund',
                    pension: 'Pension',
                    gemel: 'Provident Fund'
                },
                noFunds: 'No funds selected'
            },
            // Assets
            assets: {
                title: 'Other Assets',
                addAsset: 'Add Asset',
                assetName: 'Asset Name',
                assetType: 'Asset Type',
                estimatedValue: 'Estimated Value',
                purchaseDate: 'Purchase Date',
                purchasePrice: 'Purchase Price',
                types: {
                    car: 'Car',
                    property: 'Property',
                    savings: 'Savings',
                    jewelry: 'Jewelry',
                    electronics: 'Electronics',
                    other: 'Other'
                },
                noAssets: 'No assets'
            },
            // Common
            common: {
                save: 'Save',
                cancel: 'Cancel',
                delete: 'Delete',
                edit: 'Edit',
                add: 'Add',
                update: 'Update',
                close: 'Close',
                confirm: 'Confirm',
                yes: 'Yes',
                no: 'No',
                loading: 'Loading...',
                noData: 'No data',
                total: 'Total',
                currency: '₪',
                currencyCode: 'ILS',
                date: 'Date',
                amount: 'Amount',
                name: 'Name',
                type: 'Type',
                actions: 'Actions',
                export: 'Export Data',
                import: 'Import Data',
                backup: 'Backup',
                confirmDelete: 'Are you sure you want to delete?'
            },
            // Months
            months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        },
        pt: {
            // Navigation
            nav: {
                dashboard: 'Painel',
                bankAccounts: 'Contas Bancárias',
                creditCards: 'Cartões de Crédito',
                stocks: 'Ações',
                fundsAndPension: 'Fundos e Previdência',
                trainingFunds: 'Fundos de Capacitação',
                pension: 'Previdência',
                gemel: 'Fundos de Investimento',
                assets: 'Ativos',
                settings: 'Configurações'
            },
            // Dashboard
            dashboard: {
                title: 'Gerenciador Financeiro Pessoal',
                subtitle: 'Visão geral dos seus ativos',
                netWorth: 'Patrimônio Líquido',
                totalAssets: 'Total de Ativos',
                bankBalance: 'Saldo Bancário',
                creditExpenses: 'Despesas de Crédito',
                stocksValue: 'Valor das Ações',
                fundsValue: 'Valor dos Fundos',
                assetsValue: 'Valor dos Ativos',
                assetDistribution: 'Distribuição de Ativos',
                monthlyExpenses: 'Despesas Mensais',
                recentTransactions: 'Transações Recentes'
            },
            // Bank
            bank: {
                title: 'Contas Bancárias',
                addAccount: 'Adicionar Conta',
                accountName: 'Nome da Conta',
                bankName: 'Nome do Banco',
                accountNumber: 'Número da Conta',
                balance: 'Saldo',
                currency: 'Moeda',
                updateBalance: 'Atualizar Saldo',
                balanceHistory: 'Histórico de Saldo',
                noAccounts: 'Nenhuma conta bancária',
                banks: {
                    leumi: 'Banco Leumi',
                    hapoalim: 'Banco Hapoalim',
                    discount: 'Banco Discount',
                    mizrahi: 'Mizrahi Tefahot',
                    international: 'First International',
                    mercantile: 'Banco Mercantile',
                    otsar: 'Otsar Hahayal',
                    yahav: 'Banco Yahav',
                    massad: 'Banco Massad',
                    other: 'Outro'
                }
            },
            // Credit
            credit: {
                title: 'Cartões de Crédito',
                addCard: 'Adicionar Cartão',
                addExpense: 'Adicionar Despesa',
                cardName: 'Nome do Cartão',
                lastFour: 'Últimos 4 Dígitos',
                creditLimit: 'Limite de Crédito',
                monthlyTotal: 'Total Mensal',
                expenseDate: 'Data',
                expenseAmount: 'Valor',
                expenseCategory: 'Categoria',
                expenseDescription: 'Descrição',
                recurring: 'Recorrente',
                noCards: 'Nenhum cartão de crédito',
                noExpenses: 'Nenhuma despesa',
                categories: {
                    food: 'Alimentação e Restaurantes',
                    transport: 'Transporte e Combustível',
                    shopping: 'Compras',
                    entertainment: 'Entretenimento',
                    bills: 'Contas',
                    health: 'Saúde',
                    education: 'Educação',
                    other: 'Outro'
                }
            },
            // Stocks
            stocks: {
                title: 'Carteira de Ações',
                addStock: 'Adicionar Ação',
                symbol: 'Símbolo',
                companyName: 'Nome da Empresa',
                quantity: 'Quantidade',
                avgPrice: 'Preço Médio',
                currentPrice: 'Preço Atual',
                totalValue: 'Valor Total',
                profitLoss: 'Lucro/Prejuízo',
                updatePrice: 'Atualizar Preço',
                sell: 'Vender',
                transactions: 'Histórico de Transações',
                buy: 'Comprar',
                portfolioDistribution: 'Distribuição da Carteira',
                noStocks: 'Nenhuma ação na carteira'
            },
            // Funds
            funds: {
                title: 'Meus Fundos',
                addFund: 'Adicionar Fundo',
                fundName: 'Nome do Fundo',
                fundType: 'Tipo de Fundo',
                currentValue: 'Valor Atual',
                monthlyDeposit: 'Depósito Mensal',
                types: {
                    training: 'Fundo de Capacitação',
                    pension: 'Previdência',
                    gemel: 'Fundo de Investimento'
                },
                noFunds: 'Nenhum fundo selecionado'
            },
            // Assets
            assets: {
                title: 'Outros Ativos',
                addAsset: 'Adicionar Ativo',
                assetName: 'Nome do Ativo',
                assetType: 'Tipo de Ativo',
                estimatedValue: 'Valor Estimado',
                purchaseDate: 'Data da Compra',
                purchasePrice: 'Preço de Compra',
                types: {
                    car: 'Carro',
                    property: 'Imóvel',
                    savings: 'Poupança',
                    jewelry: 'Joias',
                    electronics: 'Eletrônicos',
                    other: 'Outro'
                },
                noAssets: 'Nenhum ativo'
            },
            // Common
            common: {
                save: 'Salvar',
                cancel: 'Cancelar',
                delete: 'Excluir',
                edit: 'Editar',
                add: 'Adicionar',
                update: 'Atualizar',
                close: 'Fechar',
                confirm: 'Confirmar',
                yes: 'Sim',
                no: 'Não',
                loading: 'Carregando...',
                noData: 'Sem dados',
                total: 'Total',
                currency: 'R$',
                currencyCode: 'BRL',
                date: 'Data',
                amount: 'Valor',
                name: 'Nome',
                type: 'Tipo',
                actions: 'Ações',
                export: 'Exportar Dados',
                import: 'Importar Dados',
                backup: 'Backup',
                confirmDelete: 'Tem certeza que deseja excluir?'
            },
            // Months
            months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
        }
    },

    /**
     * Initialize i18n with saved language
     */
    init() {
        const settings = Storage.getSettings();
        this.currentLanguage = settings.language || 'he';
        this.updatePageDirection();
        this.translatePage();
    },

    /**
     * Get translation by key path
     * @param {string} path - Dot notation path (e.g., 'nav.dashboard')
     * @returns {string} Translated text
     */
    t(path) {
        const keys = path.split('.');
        let result = this.translations[this.currentLanguage];
        for (const key of keys) {
            result = result?.[key];
        }
        return result || path;
    },

    /**
     * Available languages
     */
    languages: ['he', 'en', 'pt'],
    languageNames: { he: 'עברית', en: 'English', pt: 'Português' },

    /**
     * Toggle between languages (Hebrew -> English -> Portuguese -> Hebrew)
     */
    toggleLanguage() {
        var currentIdx = this.languages.indexOf(this.currentLanguage);
        var nextIdx = (currentIdx + 1) % this.languages.length;
        this.currentLanguage = this.languages[nextIdx];
        Storage.saveSettings({ ...Storage.getSettings(), language: this.currentLanguage });
        this.updatePageDirection();
        this.translatePage();
    },

    /**
     * Set specific language
     * @param {string} lang - 'he', 'en', or 'pt'
     */
    setLanguage(lang) {
        if (this.languages.includes(lang)) {
            this.currentLanguage = lang;
            Storage.saveSettings({ ...Storage.getSettings(), language: lang });
            this.updatePageDirection();
            this.translatePage();
        }
    },

    /**
     * Update page direction based on language
     */
    updatePageDirection() {
        document.documentElement.lang = this.currentLanguage;
        document.documentElement.dir = this.currentLanguage === 'he' ? 'rtl' : 'ltr';
        document.body.classList.toggle('ltr', this.currentLanguage !== 'he');
    },

    /**
     * Translate all elements with data-i18n attribute
     */
    translatePage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = this.t(key);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.t(key);
        });
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            el.title = this.t(key);
        });
        // Update language toggle buttons - show NEXT language in cycle
        var currentIdx = this.languages.indexOf(this.currentLanguage);
        var nextIdx = (currentIdx + 1) % this.languages.length;
        var nextLang = this.languageNames[this.languages[nextIdx]];
        const langBtn = document.querySelector('.lang-toggle');
        if (langBtn) {
            langBtn.textContent = nextLang;
        }
        const langBtnHeader = document.querySelector('.lang-toggle-header');
        if (langBtnHeader) {
            langBtnHeader.textContent = '🌐 ' + nextLang;
        }
    },

    /**
     * Get locale code for Intl formatting
     */
    getLocale() {
        const locales = { he: 'he-IL', en: 'en-US', pt: 'pt-BR' };
        return locales[this.currentLanguage] || 'en-US';
    },

    /**
     * Format currency
     * @param {number} amount - Amount to format
     * @param {string} currency - Currency code (default: ILS)
     * @returns {string} Formatted currency string
     */
    formatCurrency(amount, currency = 'ILS') {
        const formatter = new Intl.NumberFormat(this.getLocale(), {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        return formatter.format(amount);
    },

    /**
     * Format number with locale
     * @param {number} num - Number to format
     * @returns {string} Formatted number
     */
    formatNumber(num) {
        return new Intl.NumberFormat(this.getLocale()).format(num);
    },

    /**
     * Format date
     * @param {string|Date} date - Date to format
     * @returns {string} Formatted date
     */
    formatDate(date) {
        const d = new Date(date);
        return new Intl.DateTimeFormat(this.getLocale()).format(d);
    },

    /**
     * Get current month name
     * @returns {string} Month name
     */
    getCurrentMonthName() {
        return this.translations[this.currentLanguage].months[new Date().getMonth()];
    }
};

// Make available globally
window.I18n = I18n;
