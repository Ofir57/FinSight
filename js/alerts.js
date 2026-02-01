/**
 * Alerts & Budget Module - Budget limits and notifications
 */
const Alerts = {
    STORAGE_KEY: 'finance_alerts',

    /**
     * Get alerts configuration
     */
    getConfig() {
        return Storage.get(this.STORAGE_KEY) || {
            budgets: {
                total: 0, // Total monthly budget
                categories: {} // Per-category budgets
            },
            thresholds: {
                warning: 80,  // Warning at this percentage
                danger: 100   // Danger at this percentage
            },
            enabled: true,
            lastCheck: null
        };
    },

    /**
     * Set alert thresholds
     */
    setThresholds(warning, danger) {
        const config = this.getConfig();
        config.thresholds = { warning, danger };
        this.saveConfig(config);
    },

    /**
     * Get thresholds
     */
    getThresholds() {
        const config = this.getConfig();
        return config.thresholds || { warning: 80, danger: 100 };
    },

    /**
     * Save alerts configuration
     */
    saveConfig(config) {
        Storage.set(this.STORAGE_KEY, config);
    },

    /**
     * Set total monthly budget
     */
    setTotalBudget(amount) {
        const config = this.getConfig();
        config.budgets.total = amount;
        this.saveConfig(config);
    },

    /**
     * Set category budget
     */
    setCategoryBudget(category, amount) {
        const config = this.getConfig();
        config.budgets.categories[category] = amount;
        this.saveConfig(config);
    },

    /**
     * Get all budgets
     */
    getBudgets() {
        return this.getConfig().budgets;
    },

    /**
     * Check budget status and return alerts
     */
    checkBudgets() {
        const config = this.getConfig();
        const thresholds = config.thresholds || { warning: 80, danger: 100 };
        const alerts = [];
        const currentMonth = new Date().toISOString().slice(0, 7);

        // Get current month expenses
        const creditData = Storage.getCreditCards();
        const monthExpenses = creditData.expenses.filter(e => e.date.startsWith(currentMonth));

        // Calculate total spent
        const totalSpent = monthExpenses.reduce((sum, e) => sum + e.amount, 0);

        // Check total budget
        if (config.budgets.total > 0) {
            const percentage = (totalSpent / config.budgets.total) * 100;
            if (percentage >= thresholds.danger) {
                alerts.push({
                    type: 'danger',
                    icon: '🚨',
                    title: I18n.currentLanguage === 'he' ? 'חריגה מהתקציב!' : 'Budget Exceeded!',
                    message: I18n.currentLanguage === 'he'
                        ? `הוצאת ${I18n.formatCurrency(totalSpent)} מתוך ${I18n.formatCurrency(config.budgets.total)}`
                        : `Spent ${I18n.formatCurrency(totalSpent)} of ${I18n.formatCurrency(config.budgets.total)}`,
                    percentage
                });
            } else if (percentage >= thresholds.warning) {
                alerts.push({
                    type: 'warning',
                    icon: '⚠️',
                    title: I18n.currentLanguage === 'he' ? 'מתקרב לתקציב' : 'Approaching Budget',
                    message: I18n.currentLanguage === 'he'
                        ? `הוצאת ${percentage.toFixed(0)}% מהתקציב החודשי`
                        : `Spent ${percentage.toFixed(0)}% of monthly budget`,
                    percentage
                });
            }
        }

        // Check category budgets
        const categoryTotals = {};
        monthExpenses.forEach(e => {
            categoryTotals[e.category] = (categoryTotals[e.category] || 0) + e.amount;
        });

        Object.entries(config.budgets.categories).forEach(([category, budget]) => {
            if (budget > 0) {
                const spent = categoryTotals[category] || 0;
                const percentage = (spent / budget) * 100;

                if (percentage >= thresholds.danger) {
                    alerts.push({
                        type: 'danger',
                        icon: '🚨',
                        category,
                        title: I18n.currentLanguage === 'he'
                            ? `חריגה ב${I18n.t('credit.categories.' + category)}`
                            : `${I18n.t('credit.categories.' + category)} Exceeded`,
                        message: `${I18n.formatCurrency(spent)} / ${I18n.formatCurrency(budget)}`,
                        percentage
                    });
                } else if (percentage >= thresholds.warning) {
                    alerts.push({
                        type: 'warning',
                        icon: '⚠️',
                        category,
                        title: I18n.currentLanguage === 'he'
                            ? `${I18n.t('credit.categories.' + category)} - ${percentage.toFixed(0)}%`
                            : `${I18n.t('credit.categories.' + category)} - ${percentage.toFixed(0)}%`,
                        message: `${I18n.formatCurrency(spent)} / ${I18n.formatCurrency(budget)}`,
                        percentage
                    });
                }
            }
        });

        return alerts;
    },

    /**
     * Get budget progress for display
     */
    getBudgetProgress() {
        const config = this.getConfig();
        const currentMonth = new Date().toISOString().slice(0, 7);
        const creditData = Storage.getCreditCards();
        const monthExpenses = creditData.expenses.filter(e => e.date.startsWith(currentMonth));

        const totalSpent = monthExpenses.reduce((sum, e) => sum + e.amount, 0);
        const totalBudget = config.budgets.total;

        // Category breakdown
        const categoryTotals = {};
        monthExpenses.forEach(e => {
            categoryTotals[e.category] = (categoryTotals[e.category] || 0) + e.amount;
        });

        const categories = Object.entries(config.budgets.categories).map(([category, budget]) => ({
            category,
            budget,
            spent: categoryTotals[category] || 0,
            percentage: budget > 0 ? ((categoryTotals[category] || 0) / budget) * 100 : 0
        }));

        return {
            total: {
                budget: totalBudget,
                spent: totalSpent,
                remaining: totalBudget - totalSpent,
                percentage: totalBudget > 0 ? (totalSpent / totalBudget) * 100 : 0
            },
            categories
        };
    },

    /**
     * Render alerts HTML
     */
    renderAlerts(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const alerts = this.checkBudgets();

        if (alerts.length === 0) {
            container.innerHTML = '';
            return;
        }

        container.innerHTML = alerts.map(alert => `
            <div class="alert alert-${alert.type}">
                <span class="alert-icon">${alert.icon}</span>
                <div class="alert-content">
                    <strong>${alert.title}</strong>
                    <p>${alert.message}</p>
                </div>
            </div>
        `).join('');
    }
};

// Make available globally
window.Alerts = Alerts;
