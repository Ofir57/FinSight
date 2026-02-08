/**
 * Storage Module - Manages localStorage operations for the finance app
 */
const Storage = {
    KEYS: {
        BANK_ACCOUNTS: 'finance_bank_accounts',
        CREDIT_CARDS: 'finance_credit_cards',
        STOCKS: 'finance_stocks',
        ASSETS: 'finance_assets',
        MY_FUNDS: 'finance_my_funds',
        SETTINGS: 'finance_settings',
        STOCK_ALERTS: 'finance_stock_alerts'
    },

    /**
     * Get data from localStorage
     * @param {string} key - Storage key
     * @returns {any} Parsed data or null
     */
    get(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Storage get error:', error);
            return null;
        }
    },

    /**
     * Set data in localStorage
     * @param {string} key - Storage key
     * @param {any} data - Data to store
     */
    set(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error('Storage set error:', error);
        }
    },

    /**
     * Remove data from localStorage
     * @param {string} key - Storage key
     */
    remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Storage remove error:', error);
        }
    },

    /**
     * Generate a unique ID
     * @returns {string} UUID
     */
    generateId() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
            const r = Math.random() * 16 | 0;
            const v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    },

    // Bank Accounts
    getBankAccounts() {
        return this.get(this.KEYS.BANK_ACCOUNTS) || [];
    },

    saveBankAccounts(accounts) {
        this.set(this.KEYS.BANK_ACCOUNTS, accounts);
    },

    addBankAccount(account) {
        const accounts = this.getBankAccounts();
        account.id = this.generateId();
        account.history = account.history || [{ date: new Date().toISOString().split('T')[0], balance: account.balance }];
        accounts.push(account);
        this.saveBankAccounts(accounts);
        return account;
    },

    updateBankAccount(id, updates) {
        const accounts = this.getBankAccounts();
        const index = accounts.findIndex(a => a.id === id);
        if (index !== -1) {
            // Add balance to history if changed
            if (updates.balance !== undefined && updates.balance !== accounts[index].balance) {
                accounts[index].history = accounts[index].history || [];
                accounts[index].history.push({ date: new Date().toISOString().split('T')[0], balance: updates.balance });
            }
            accounts[index] = { ...accounts[index], ...updates };
            this.saveBankAccounts(accounts);
            return accounts[index];
        }
        return null;
    },

    deleteBankAccount(id) {
        const accounts = this.getBankAccounts().filter(a => a.id !== id);
        this.saveBankAccounts(accounts);
    },

    // Credit Cards
    getCreditCards() {
        return this.get(this.KEYS.CREDIT_CARDS) || { cards: [], expenses: [] };
    },

    saveCreditCards(data) {
        this.set(this.KEYS.CREDIT_CARDS, data);
    },

    addCreditCard(card) {
        const data = this.getCreditCards();
        card.id = this.generateId();
        data.cards.push(card);
        this.saveCreditCards(data);
        return card;
    },

    addExpense(expense) {
        const data = this.getCreditCards();
        expense.id = this.generateId();
        data.expenses.push(expense);
        this.saveCreditCards(data);
        return expense;
    },

    updateExpense(id, updates) {
        const data = this.getCreditCards();
        const index = data.expenses.findIndex(e => e.id === id);
        if (index !== -1) {
            data.expenses[index] = { ...data.expenses[index], ...updates };
            this.saveCreditCards(data);
            return data.expenses[index];
        }
        return null;
    },

    deleteExpense(id) {
        const data = this.getCreditCards();
        data.expenses = data.expenses.filter(e => e.id !== id);
        this.saveCreditCards(data);
    },

    deleteCreditCard(id) {
        const data = this.getCreditCards();
        data.cards = data.cards.filter(c => c.id !== id);
        data.expenses = data.expenses.filter(e => e.cardId !== id);
        this.saveCreditCards(data);
    },

    // Stocks
    getStocks() {
        return this.get(this.KEYS.STOCKS) || { holdings: [], transactions: [] };
    },

    saveStocks(data) {
        this.set(this.KEYS.STOCKS, data);
    },

    addStock(holding) {
        const data = this.getStocks();
        const existing = data.holdings.find(h => h.symbol === holding.symbol);
        if (existing) {
            // Update existing holding
            const totalQuantity = existing.quantity + holding.quantity;
            existing.avgPrice = ((existing.avgPrice * existing.quantity) + (holding.avgPrice * holding.quantity)) / totalQuantity;
            existing.quantity = totalQuantity;
            existing.currentPrice = holding.currentPrice || existing.currentPrice;
        } else {
            holding.id = this.generateId();
            data.holdings.push(holding);
        }
        // Add transaction
        data.transactions.push({
            id: this.generateId(),
            symbol: holding.symbol,
            type: 'buy',
            quantity: holding.quantity,
            price: holding.avgPrice,
            date: new Date().toISOString().split('T')[0]
        });
        this.saveStocks(data);
        return holding;
    },

    // Import stock directly without creating a transaction (for broker imports)
    importStock(holding) {
        const data = this.getStocks();
        const existing = data.holdings.find(h => h.symbol === holding.symbol);
        if (existing) {
            const totalQuantity = existing.quantity + holding.quantity;
            existing.avgPrice = ((existing.avgPrice * existing.quantity) + (holding.avgPrice * holding.quantity)) / totalQuantity;
            existing.quantity = totalQuantity;
            existing.currentPrice = holding.currentPrice || existing.currentPrice;
            // Preserve imported ILS values
            existing.valueILS = (existing.valueILS || 0) + (holding.valueILS || 0);
            existing.profitILS = (existing.profitILS || 0) + (holding.profitILS || 0);
            existing.currency = holding.currency || existing.currency;
            existing.market = holding.market || existing.market;
        } else {
            holding.id = this.generateId();
            data.holdings.push(holding);
        }
        this.saveStocks(data);
        return holding;
    },

    updateStockPrice(symbol, currentPrice) {
        const data = this.getStocks();
        const holding = data.holdings.find(h => h.symbol === symbol);
        if (holding) {
            holding.currentPrice = currentPrice;
            this.saveStocks(data);
            return holding;
        }
        return null;
    },

    sellStock(symbol, quantity, price) {
        const data = this.getStocks();
        const holding = data.holdings.find(h => h.symbol === symbol);
        if (holding && holding.quantity >= quantity) {
            holding.quantity -= quantity;
            if (holding.quantity === 0) {
                data.holdings = data.holdings.filter(h => h.symbol !== symbol);
            }
            data.transactions.push({
                id: this.generateId(),
                symbol,
                type: 'sell',
                quantity,
                price,
                date: new Date().toISOString().split('T')[0]
            });
            this.saveStocks(data);
            return true;
        }
        return false;
    },

    deleteStock(symbol) {
        const data = this.getStocks();
        data.holdings = data.holdings.filter(h => h.symbol !== symbol);
        this.saveStocks(data);
    },

    // Assets
    getAssets() {
        return this.get(this.KEYS.ASSETS) || [];
    },

    saveAssets(assets) {
        this.set(this.KEYS.ASSETS, assets);
    },

    addAsset(asset) {
        const assets = this.getAssets();
        asset.id = this.generateId();
        assets.push(asset);
        this.saveAssets(assets);
        return asset;
    },

    updateAsset(id, updates) {
        const assets = this.getAssets();
        const index = assets.findIndex(a => a.id === id);
        if (index !== -1) {
            assets[index] = { ...assets[index], ...updates };
            this.saveAssets(assets);
            return assets[index];
        }
        return null;
    },

    deleteAsset(id) {
        const assets = this.getAssets().filter(a => a.id !== id);
        this.saveAssets(assets);
    },

    // My Funds (Training, Pension, Gemel)
    getMyFunds() {
        return this.get(this.KEYS.MY_FUNDS) || [];
    },

    saveMyFunds(funds) {
        this.set(this.KEYS.MY_FUNDS, funds);
    },

    addMyFund(fund) {
        const funds = this.getMyFunds();
        fund.id = this.generateId();
        funds.push(fund);
        this.saveMyFunds(funds);
        return fund;
    },

    updateMyFund(id, updates) {
        const funds = this.getMyFunds();
        const index = funds.findIndex(f => f.id === id);
        if (index !== -1) {
            funds[index] = { ...funds[index], ...updates };
            this.saveMyFunds(funds);
            return funds[index];
        }
        return null;
    },

    deleteMyFund(id) {
        const funds = this.getMyFunds().filter(f => f.id !== id);
        this.saveMyFunds(funds);
    },

    // Settings
    getSettings() {
        return this.get(this.KEYS.SETTINGS) || { language: 'he', currency: 'ILS' };
    },

    saveSettings(settings) {
        this.set(this.KEYS.SETTINGS, settings);
    },

    // Export/Import
    exportData() {
        return {
            bankAccounts: this.getBankAccounts(),
            creditCards: this.getCreditCards(),
            stocks: this.getStocks(),
            assets: this.getAssets(),
            myFunds: this.getMyFunds(),
            settings: this.getSettings(),
            exportDate: new Date().toISOString()
        };
    },

    importData(data) {
        if (data.bankAccounts) this.saveBankAccounts(data.bankAccounts);
        if (data.creditCards) this.saveCreditCards(data.creditCards);
        if (data.stocks) this.saveStocks(data.stocks);
        if (data.assets) this.saveAssets(data.assets);
        if (data.myFunds) this.saveMyFunds(data.myFunds);
        if (data.settings) this.saveSettings(data.settings);
    },

    // Summary calculations
    getTotalBankBalance() {
        return this.getBankAccounts().reduce((sum, acc) => sum + (acc.balance || 0), 0);
    },

    getTotalCreditExpenses(month = null) {
        const data = this.getCreditCards();
        let expenses = data.expenses;
        if (month) {
            expenses = expenses.filter(e => e.date.startsWith(month));
        }
        return expenses.reduce((sum, exp) => sum + (exp.amount || 0), 0);
    },

    getTotalStocksValue() {
        const data = this.getStocks();
        return data.holdings.reduce((sum, h) => {
            // Use valueILS if available (from broker import), otherwise calculate
            if (h.valueILS && h.valueILS > 0) {
                return sum + h.valueILS;
            }
            return sum + (h.quantity * (h.currentPrice || h.avgPrice));
        }, 0);
    },

    getTotalAssetsValue() {
        return this.getAssets().reduce((sum, a) => sum + (a.value || 0), 0);
    },

    getTotalFundsValue() {
        return this.getMyFunds().reduce((sum, f) => sum + (f.currentValue || 0), 0);
    },

    getNetWorth() {
        return this.getTotalBankBalance() +
               this.getTotalStocksValue() +
               this.getTotalAssetsValue() +
               this.getTotalFundsValue();
    }
};

// Make available globally
window.Storage = Storage;
