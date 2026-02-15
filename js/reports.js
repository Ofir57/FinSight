/**
 * Reports Module - Generate financial reports
 */
const Reports = {
    /**
     * Generate monthly report
     */
    generateMonthly(year, month) {
        const monthStr = `${year}-${String(month).padStart(2, '0')}`;
        const prevMonthStr = month === 1
            ? `${year - 1}-12`
            : `${year}-${String(month - 1).padStart(2, '0')}`;

        // Expenses data
        const creditData = Storage.getCreditCards();
        const monthExpenses = creditData.expenses.filter(e => e.date.startsWith(monthStr));
        const prevMonthExpenses = creditData.expenses.filter(e => e.date.startsWith(prevMonthStr));

        const totalExpenses = monthExpenses.reduce((sum, e) => sum + e.amount, 0);
        const prevTotalExpenses = prevMonthExpenses.reduce((sum, e) => sum + e.amount, 0);

        // Category breakdown
        const categoryBreakdown = {};
        monthExpenses.forEach(e => {
            categoryBreakdown[e.category] = (categoryBreakdown[e.category] || 0) + e.amount;
        });

        // Sort categories by amount
        const sortedCategories = Object.entries(categoryBreakdown)
            .sort((a, b) => b[1] - a[1])
            .map(([category, amount]) => ({
                category,
                amount,
                percentage: totalExpenses > 0 ? (amount / totalExpenses) * 100 : 0
            }));

        // Top expenses
        const topExpenses = [...monthExpenses]
            .sort((a, b) => b.amount - a.amount)
            .slice(0, 5);

        // Bank balance change
        const bankAccounts = Storage.getBankAccounts();
        let startBalance = 0;
        let endBalance = 0;

        bankAccounts.forEach(acc => {
            if (acc.history) {
                const monthHistory = acc.history.filter(h => h.date.startsWith(monthStr));
                const prevHistory = acc.history.filter(h => h.date < monthStr);

                if (prevHistory.length > 0) {
                    startBalance += prevHistory[prevHistory.length - 1].balance;
                }
                if (monthHistory.length > 0) {
                    endBalance += monthHistory[monthHistory.length - 1].balance;
                } else {
                    endBalance += acc.balance;
                }
            } else {
                endBalance += acc.balance;
            }
        });

        // Stocks performance
        const stocksData = Storage.getStocks();
        const stocksValue = stocksData.holdings.reduce((sum, h) =>
            sum + (h.quantity * (h.currentPrice || h.avgPrice)), 0);
        const stocksCost = stocksData.holdings.reduce((sum, h) =>
            sum + (h.quantity * h.avgPrice), 0);

        // Net worth
        const netWorth = Storage.getNetWorth();

        return {
            period: { year, month, monthStr },
            expenses: {
                total: totalExpenses,
                prevMonth: prevTotalExpenses,
                change: totalExpenses - prevTotalExpenses,
                changePercent: prevTotalExpenses > 0
                    ? ((totalExpenses - prevTotalExpenses) / prevTotalExpenses) * 100
                    : 0,
                count: monthExpenses.length,
                avgPerDay: totalExpenses / new Date(year, month, 0).getDate(),
                byCategory: sortedCategories,
                topExpenses
            },
            bank: {
                startBalance,
                endBalance,
                change: endBalance - startBalance
            },
            stocks: {
                value: stocksValue,
                cost: stocksCost,
                profitLoss: stocksValue - stocksCost,
                profitLossPercent: stocksCost > 0
                    ? ((stocksValue - stocksCost) / stocksCost) * 100
                    : 0
            },
            summary: {
                netWorth,
                totalAssets: Storage.getTotalBankBalance() + stocksValue + Storage.getTotalAssetsValue() + Storage.getTotalFundsValue(),
                totalExpenses
            }
        };
    },

    /**
     * Generate yearly report
     */
    generateYearly(year) {
        const months = [];
        let totalExpenses = 0;
        let totalIncome = 0;

        for (let month = 1; month <= 12; month++) {
            const monthReport = this.generateMonthly(year, month);
            months.push({
                month,
                expenses: monthReport.expenses.total,
                bankChange: monthReport.bank.change
            });
            totalExpenses += monthReport.expenses.total;
        }

        // Category totals for year
        const creditData = Storage.getCreditCards();
        const yearExpenses = creditData.expenses.filter(e => e.date.startsWith(String(year)));

        const categoryTotals = {};
        yearExpenses.forEach(e => {
            categoryTotals[e.category] = (categoryTotals[e.category] || 0) + e.amount;
        });

        return {
            year,
            months,
            totalExpenses,
            avgMonthlyExpenses: totalExpenses / 12,
            categoryTotals: Object.entries(categoryTotals)
                .sort((a, b) => b[1] - a[1])
                .map(([category, amount]) => ({ category, amount }))
        };
    },

    /**
     * Get expense trends (last N months)
     */
    getExpenseTrends(numMonths = 6) {
        const trends = [];
        const now = new Date();

        for (let i = numMonths - 1; i >= 0; i--) {
            const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const monthStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

            const creditData = Storage.getCreditCards();
            const monthExpenses = creditData.expenses.filter(e => e.date.startsWith(monthStr));
            const total = monthExpenses.reduce((sum, e) => sum + e.amount, 0);

            trends.push({
                month: monthStr,
                label: I18n.translations[I18n.currentLanguage].months[date.getMonth()],
                total,
                count: monthExpenses.length
            });
        }

        return trends;
    },

    /**
     * Get category trends (last N months)
     */
    getCategoryTrends(category, numMonths = 6) {
        const trends = [];
        const now = new Date();

        for (let i = numMonths - 1; i >= 0; i--) {
            const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const monthStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

            const creditData = Storage.getCreditCards();
            const monthExpenses = creditData.expenses.filter(e =>
                e.date.startsWith(monthStr) && e.category === category
            );
            const total = monthExpenses.reduce((sum, e) => sum + e.amount, 0);

            trends.push({
                month: monthStr,
                label: I18n.translations[I18n.currentLanguage].months[date.getMonth()],
                total
            });
        }

        return trends;
    },

    /**
     * Get net worth history
     */
    getNetWorthHistory(numMonths = 12) {
        const history = [];
        const now = new Date();

        // This is an approximation based on bank history
        const bankAccounts = Storage.getBankAccounts();

        for (let i = numMonths - 1; i >= 0; i--) {
            const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
            const monthStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

            let bankTotal = 0;
            bankAccounts.forEach(acc => {
                if (acc.history) {
                    const monthHistory = acc.history.filter(h => h.date.startsWith(monthStr));
                    if (monthHistory.length > 0) {
                        bankTotal += monthHistory[monthHistory.length - 1].balance;
                    }
                }
            });

            history.push({
                month: monthStr,
                label: I18n.translations[I18n.currentLanguage].months[date.getMonth()],
                value: bankTotal // Simplified - just bank balance
            });
        }

        return history;
    },

    // ========== Feature 6: Benchmark Comparison ==========

    /**
     * Fetch benchmark data (TA-125 or S&P 500)
     * @param {string} benchmark - 'TA125' or 'SP500'
     * @returns {Promise<Object>} Benchmark data with returns
     */
    async fetchBenchmarkData(benchmark) {
        const symbols = {
            'TA125': '^TA125.TA',
            'SP500': '^GSPC'
        };

        const symbol = symbols[benchmark];
        if (!symbol) return null;

        try {
            const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?interval=1d&range=1y`;
            const response = await fetch(url);

            if (!response.ok) throw new Error('Failed to fetch benchmark');

            const data = await response.json();
            const result = data.chart.result[0];
            const quotes = result.indicators.quote[0];
            const closePrices = quotes.close.filter(p => p !== null);
            const timestamps = result.timestamp;

            if (closePrices.length < 2) return null;

            // Calculate returns for different periods
            const currentPrice = closePrices[closePrices.length - 1];
            const returns = {
                current: currentPrice,
                day: this.calculateReturn(closePrices, 1),
                week: this.calculateReturn(closePrices, 5),
                month: this.calculateReturn(closePrices, 22),
                threeMonths: this.calculateReturn(closePrices, 66),
                sixMonths: this.calculateReturn(closePrices, 132),
                year: this.calculateReturn(closePrices, closePrices.length - 1),
                history: closePrices.slice(-180) // Last 6 months
            };

            return {
                symbol,
                benchmark,
                name: benchmark === 'TA125' ? 'ת"א 125' : 'S&P 500',
                returns,
                lastUpdate: new Date().toISOString()
            };
        } catch (error) {
            console.error(`Error fetching ${benchmark}:`, error);
            return null;
        }
    },

    /**
     * Calculate return percentage
     */
    calculateReturn(prices, daysBack) {
        if (prices.length < daysBack + 1) return null;
        const currentPrice = prices[prices.length - 1];
        const pastPrice = prices[prices.length - 1 - daysBack];
        return ((currentPrice - pastPrice) / pastPrice) * 100;
    },

    /**
     * Calculate portfolio returns for comparison
     * @returns {Object} Portfolio returns for different periods
     */
    calculatePortfolioReturns() {
        const stocksData = Storage.getStocks();
        const holdings = stocksData.holdings;

        if (holdings.length === 0) {
            return { hasData: false };
        }

        // Current portfolio value and cost
        const currentValue = holdings.reduce((sum, h) =>
            sum + (h.quantity * (h.currentPrice || h.avgPrice)), 0);
        const totalCost = holdings.reduce((sum, h) =>
            sum + (h.quantity * h.avgPrice), 0);

        // Overall return
        const totalReturn = totalCost > 0 ? ((currentValue - totalCost) / totalCost) * 100 : 0;

        return {
            hasData: true,
            currentValue,
            totalCost,
            profitLoss: currentValue - totalCost,
            totalReturn,
            holdingsCount: holdings.length
        };
    },

    /**
     * Compare portfolio to benchmarks
     * @returns {Promise<Object>} Comparison data
     */
    async compareToMarket() {
        const portfolio = this.calculatePortfolioReturns();

        // Fetch benchmarks in parallel
        const [ta125, sp500] = await Promise.all([
            this.fetchBenchmarkData('TA125'),
            this.fetchBenchmarkData('SP500')
        ]);

        return {
            portfolio,
            benchmarks: {
                TA125: ta125,
                SP500: sp500
            },
            comparison: {
                vsTA125: ta125 ? {
                    difference: portfolio.totalReturn - (ta125.returns.year || 0),
                    outperforming: portfolio.totalReturn > (ta125.returns.year || 0)
                } : null,
                vsSP500: sp500 ? {
                    difference: portfolio.totalReturn - (sp500.returns.year || 0),
                    outperforming: portfolio.totalReturn > (sp500.returns.year || 0)
                } : null
            }
        };
    },

    // ========== Feature 7: Expense Analysis ==========

    /**
     * Detect unusual expenses (anomalies)
     * @param {number} threshold - Standard deviations from mean to consider unusual (default 2)
     * @returns {Array} List of unusual expenses
     */
    detectUnusualExpenses(threshold = 2) {
        const creditData = Storage.getCreditCards();
        const expenses = creditData.expenses;

        if (expenses.length < 10) return []; // Need enough data

        // Group by category
        const categoryStats = {};
        expenses.forEach(exp => {
            if (!categoryStats[exp.category]) {
                categoryStats[exp.category] = { amounts: [], expenses: [] };
            }
            categoryStats[exp.category].amounts.push(exp.amount);
            categoryStats[exp.category].expenses.push(exp);
        });

        const unusual = [];

        // Calculate stats for each category
        Object.keys(categoryStats).forEach(category => {
            const stats = categoryStats[category];
            if (stats.amounts.length < 3) return; // Need enough samples

            const mean = stats.amounts.reduce((a, b) => a + b, 0) / stats.amounts.length;
            const variance = stats.amounts.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / stats.amounts.length;
            const stdDev = Math.sqrt(variance);

            // Find unusual expenses in this category
            stats.expenses.forEach(exp => {
                const zScore = stdDev > 0 ? (exp.amount - mean) / stdDev : 0;
                if (zScore > threshold) {
                    unusual.push({
                        ...exp,
                        category,
                        zScore,
                        mean,
                        stdDev,
                        deviation: exp.amount - mean,
                        deviationPercent: ((exp.amount - mean) / mean) * 100
                    });
                }
            });
        });

        // Sort by z-score (most unusual first)
        return unusual.sort((a, b) => b.zScore - a.zScore);
    },

    /**
     * Get expense analysis with trends and insights
     * @param {number} numMonths - Number of months to analyze
     * @returns {Object} Comprehensive expense analysis
     */
    getExpenseAnalysis(numMonths = 12) {
        const creditData = Storage.getCreditCards();
        const now = new Date();

        // Get expenses for the period
        const startDate = new Date(now.getFullYear(), now.getMonth() - numMonths + 1, 1);
        const expenses = creditData.expenses.filter(e => new Date(e.date) >= startDate);

        if (expenses.length === 0) {
            return { hasData: false };
        }

        // Monthly totals
        const monthlyTotals = {};
        const categoryMonthly = {};

        expenses.forEach(exp => {
            const monthKey = exp.date.substring(0, 7);
            monthlyTotals[monthKey] = (monthlyTotals[monthKey] || 0) + exp.amount;

            if (!categoryMonthly[exp.category]) {
                categoryMonthly[exp.category] = {};
            }
            categoryMonthly[exp.category][monthKey] =
                (categoryMonthly[exp.category][monthKey] || 0) + exp.amount;
        });

        const monthKeys = Object.keys(monthlyTotals).sort();
        const monthlyValues = monthKeys.map(k => monthlyTotals[k]);

        // Calculate statistics
        const avgMonthly = monthlyValues.reduce((a, b) => a + b, 0) / monthlyValues.length;
        const maxMonth = Math.max(...monthlyValues);
        const minMonth = Math.min(...monthlyValues);

        // Trend analysis (simple linear regression)
        const trend = this.calculateTrend(monthlyValues);

        // Year over year comparison
        const yoyComparison = this.calculateYearOverYear(creditData.expenses);

        // Category trends
        const categoryTrends = {};
        Object.keys(categoryMonthly).forEach(category => {
            const catMonths = categoryMonthly[category];
            const catValues = monthKeys.map(k => catMonths[k] || 0);
            const catTotal = catValues.reduce((a, b) => a + b, 0);
            const catAvg = catTotal / monthKeys.length;
            const catTrend = this.calculateTrend(catValues);

            categoryTrends[category] = {
                total: catTotal,
                average: catAvg,
                trend: catTrend,
                trendDirection: catTrend.slope > 0 ? 'increasing' : catTrend.slope < 0 ? 'decreasing' : 'stable'
            };
        });

        // Unusual expenses
        const unusualExpenses = this.detectUnusualExpenses();

        return {
            hasData: true,
            period: {
                months: numMonths,
                from: monthKeys[0],
                to: monthKeys[monthKeys.length - 1]
            },
            totals: {
                total: monthlyValues.reduce((a, b) => a + b, 0),
                average: avgMonthly,
                max: maxMonth,
                min: minMonth,
                maxMonth: monthKeys[monthlyValues.indexOf(maxMonth)],
                minMonth: monthKeys[monthlyValues.indexOf(minMonth)]
            },
            trend: {
                ...trend,
                direction: trend.slope > 50 ? 'increasing' : trend.slope < -50 ? 'decreasing' : 'stable',
                monthlyChange: trend.slope
            },
            yearOverYear: yoyComparison,
            categoryTrends,
            unusualExpenses: unusualExpenses.slice(0, 10), // Top 10
            monthlyData: monthKeys.map((key, i) => ({
                month: key,
                total: monthlyTotals[key],
                label: this.formatMonthLabel(key)
            }))
        };
    },

    /**
     * Calculate linear trend
     */
    calculateTrend(values) {
        const n = values.length;
        if (n < 2) return { slope: 0, intercept: 0, r2: 0 };

        let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;

        values.forEach((y, x) => {
            sumX += x;
            sumY += y;
            sumXY += x * y;
            sumX2 += x * x;
            sumY2 += y * y;
        });

        const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;

        // R-squared
        const meanY = sumY / n;
        let ssRes = 0, ssTot = 0;
        values.forEach((y, x) => {
            const predicted = slope * x + intercept;
            ssRes += Math.pow(y - predicted, 2);
            ssTot += Math.pow(y - meanY, 2);
        });
        const r2 = ssTot > 0 ? 1 - (ssRes / ssTot) : 0;

        return { slope, intercept, r2 };
    },

    /**
     * Calculate year over year comparison
     */
    calculateYearOverYear(allExpenses) {
        const now = new Date();
        const thisYear = now.getFullYear();
        const thisMonth = now.getMonth();

        // This year until current month
        const thisYearExpenses = allExpenses.filter(e => {
            const d = new Date(e.date);
            return d.getFullYear() === thisYear && d.getMonth() <= thisMonth;
        });

        // Last year same period
        const lastYearExpenses = allExpenses.filter(e => {
            const d = new Date(e.date);
            return d.getFullYear() === thisYear - 1 && d.getMonth() <= thisMonth;
        });

        const thisYearTotal = thisYearExpenses.reduce((sum, e) => sum + e.amount, 0);
        const lastYearTotal = lastYearExpenses.reduce((sum, e) => sum + e.amount, 0);

        return {
            thisYear: thisYearTotal,
            lastYear: lastYearTotal,
            change: thisYearTotal - lastYearTotal,
            changePercent: lastYearTotal > 0 ? ((thisYearTotal - lastYearTotal) / lastYearTotal) * 100 : 0
        };
    },

    /**
     * Format month label
     */
    formatMonthLabel(monthKey) {
        const [year, month] = monthKey.split('-');
        const monthNames = I18n.t('monthsShort');
        return `${monthNames[parseInt(month) - 1]} ${year.slice(2)}`;
    },

    /**
     * Get budget status with warnings
     * @returns {Array} Budget categories with status
     */
    getBudgetStatus() {
        const budgets = Storage.getBudgets ? Storage.getBudgets() : [];
        const now = new Date();
        const monthStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

        const creditData = Storage.getCreditCards();
        const monthExpenses = creditData.expenses.filter(e => e.date.startsWith(monthStr));

        // Group expenses by category
        const categoryTotals = {};
        monthExpenses.forEach(e => {
            categoryTotals[e.category] = (categoryTotals[e.category] || 0) + e.amount;
        });

        return budgets.map(budget => {
            const spent = categoryTotals[budget.category] || 0;
            const percentage = budget.limit > 0 ? (spent / budget.limit) * 100 : 0;

            return {
                ...budget,
                spent,
                remaining: budget.limit - spent,
                percentage,
                status: percentage >= 100 ? 'exceeded' : percentage >= 80 ? 'warning' : 'ok'
            };
        });
    }
};

// Make available globally
window.Reports = Reports;
