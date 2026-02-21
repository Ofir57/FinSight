/**
 * Smart Tips Engine - Generates personalized financial tips
 * based on user profile and existing financial data
 */
const SmartTips = {

    /**
     * Generate all applicable tips
     * @returns {Array} Array of tip objects, filtered by dismissed
     */
    generateTips() {
        const profile = Storage.getUserProfile();
        const dismissed = Storage.getDismissedTips();

        const tips = [
            ...this.checkSpendingRules(profile),
            ...this.checkSavingsRules(profile),
            ...this.checkInvestmentRules(profile),
            ...this.checkPensionRules(profile),
            ...this.checkFamilyRules(profile),
            ...this.checkGeneralRules(profile),
            ...this.checkCreditScoreRules(profile),
            ...this.checkRecurringRules(profile),
            ...this.checkDataCompleteness(profile)
        ];

        return tips.filter(tip => !dismissed.includes(tip.id));
    },

    // ─── Helpers ──────────────────────────────────────────

    getCurrentMonth() {
        const now = new Date();
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    },

    getPreviousMonth() {
        const now = new Date();
        now.setMonth(now.getMonth() - 1);
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    },

    getMonthlyExpenses(month) {
        const data = Storage.getCreditCards();
        return data.expenses
            .filter(e => e.date && e.date.startsWith(month))
            .reduce((sum, e) => sum + (e.amount || 0), 0);
    },

    getExpensesByCategory(month) {
        const data = Storage.getCreditCards();
        const totals = {};
        data.expenses
            .filter(e => e.date && e.date.startsWith(month))
            .forEach(e => {
                const cat = e.category || 'other';
                totals[cat] = (totals[cat] || 0) + (e.amount || 0);
            });
        return totals;
    },

    fmt(amount) {
        if (typeof I18n !== 'undefined' && I18n.formatCurrency) {
            return I18n.formatCurrency(amount);
        }
        return '₪' + Math.round(amount).toLocaleString();
    },

    // ─── Spending Rules ───────────────────────────────────

    checkSpendingRules(profile) {
        const tips = [];
        const month = this.getCurrentMonth();
        const expenses = this.getMonthlyExpenses(month);

        // Rule 1: Expenses > 80% of income
        if (profile?.monthlyIncome && expenses > 0) {
            const ratio = expenses / profile.monthlyIncome;
            if (ratio > 0.8) {
                tips.push({
                    id: 'spending-high-ratio',
                    category: 'spending', icon: '⚠️', severity: 'red', priority: 1,
                    title: {
                        he: 'הוצאות גבוהות ביחס להכנסה',
                        en: 'Expenses are high relative to income'
                    },
                    description: {
                        he: `ההוצאות החודשיות (${this.fmt(expenses)}) מהוות ${Math.round(ratio * 100)}% מההכנסה. נסה לצמצם`,
                        en: `Monthly expenses (${this.fmt(expenses)}) are ${Math.round(ratio * 100)}% of income. Try to reduce`
                    }
                });
            }
        }

        // Rule 2: Single category > 30% of total
        if (expenses > 0) {
            const byCategory = this.getExpensesByCategory(month);
            for (const [cat, total] of Object.entries(byCategory)) {
                if (total / expenses > 0.3) {
                    const catName = (typeof I18n !== 'undefined')
                        ? (I18n.t('credit.categories.' + cat) || cat)
                        : cat;
                    tips.push({
                        id: `spending-category-${cat}`,
                        category: 'spending', icon: '📊', severity: 'yellow', priority: 4,
                        title: {
                            he: `הוצאות ${catName} גבוהות יחסית`,
                            en: `${cat} expenses are relatively high`
                        },
                        description: {
                            he: `קטגוריית ${catName} תופסת ${Math.round(total / expenses * 100)}% מההוצאות החודשיות`,
                            en: `${cat} makes up ${Math.round(total / expenses * 100)}% of monthly expenses`
                        }
                    });
                }
            }
        }

        // Rule 3: Expenses increased >20% vs last month
        const prevExpenses = this.getMonthlyExpenses(this.getPreviousMonth());
        if (prevExpenses > 0 && expenses > 0) {
            const change = (expenses - prevExpenses) / prevExpenses;
            if (change > 0.2) {
                tips.push({
                    id: 'spending-increase',
                    category: 'spending', icon: '📈', severity: 'yellow', priority: 3,
                    title: {
                        he: 'עלייה חדה בהוצאות החודש',
                        en: 'Sharp increase in expenses this month'
                    },
                    description: {
                        he: `ההוצאות עלו ב-${Math.round(change * 100)}% לעומת החודש הקודם`,
                        en: `Expenses increased by ${Math.round(change * 100)}% compared to last month`
                    }
                });
            }
        }

        // Rule 4: No budget set
        if (typeof Alerts !== 'undefined') {
            const budgets = Alerts.getBudgets();
            if (!budgets.total || budgets.total === 0) {
                tips.push({
                    id: 'spending-no-budget',
                    category: 'spending', icon: '📝', severity: 'blue', priority: 7,
                    title: {
                        he: 'כדאי להגדיר תקציב חודשי',
                        en: 'Consider setting a monthly budget'
                    },
                    description: {
                        he: 'תקציב חודשי עוזר לשלוט בהוצאות. הגדר בעמוד ההגדרות',
                        en: 'A monthly budget helps control spending. Set it in Settings'
                    }
                });
            }
        }

        return tips;
    },

    // ─── Savings Rules ────────────────────────────────────

    checkSavingsRules(profile) {
        const tips = [];
        const bankBalance = Storage.getTotalBankBalance();
        const monthExpenses = this.getMonthlyExpenses(this.getCurrentMonth());

        // Rule 5: Emergency fund < 3x monthly expenses
        if (monthExpenses > 0 && bankBalance < monthExpenses * 3) {
            tips.push({
                id: 'savings-emergency-fund',
                category: 'savings', icon: '🛡️', severity: 'yellow', priority: 2,
                title: {
                    he: 'כדאי לבנות חיסכון חירום',
                    en: 'Consider building an emergency fund'
                },
                description: {
                    he: 'מומלץ לשמור 3-6 חודשי הוצאות בחשבון הבנק כרשת ביטחון',
                    en: 'Keep 3-6 months of expenses in your bank account as a safety net'
                }
            });
        }

        // Rule 6: No savings goals
        let goalsCount = 0;
        try {
            const goals = JSON.parse(localStorage.getItem('finance_goals') || '[]');
            goalsCount = goals.length;
        } catch (e) {}

        if (goalsCount === 0) {
            tips.push({
                id: 'savings-no-goals',
                category: 'savings', icon: '🎯', severity: 'blue', priority: 7,
                title: {
                    he: 'שווה להגדיר יעדי חיסכון',
                    en: 'Consider setting savings goals'
                },
                description: {
                    he: 'יעדים עוזרים לשמור מוטיבציה ולעקוב אחרי ההתקדמות',
                    en: 'Goals help maintain motivation and track progress'
                }
            });
        }

        // Rule 7: Saving < 20% of income
        if (profile?.monthlyIncome && monthExpenses > 0) {
            const savingRate = (profile.monthlyIncome - monthExpenses) / profile.monthlyIncome;
            if (savingRate < 0.2 && savingRate >= 0) {
                tips.push({
                    id: 'savings-low-rate',
                    category: 'savings', icon: '💰', severity: 'yellow', priority: 3,
                    title: {
                        he: 'שיעור החיסכון נמוך',
                        en: 'Savings rate is low'
                    },
                    description: {
                        he: `אתה חוסך ${Math.round(savingRate * 100)}% מההכנסה. נסה להגיע ל-20% לפחות`,
                        en: `You're saving ${Math.round(savingRate * 100)}% of income. Try to reach at least 20%`
                    }
                });
            }
        }

        return tips;
    },

    // ─── Investment Rules ─────────────────────────────────

    checkInvestmentRules(profile) {
        const tips = [];
        const stockData = Storage.getStocks();
        const stocksTotal = Storage.getTotalStocksValue();
        const netWorth = Storage.getNetWorth();

        // Rule 8: Stocks > 70% of net worth and age > 50
        if (profile?.age > 50 && netWorth > 0 && stocksTotal / netWorth > 0.7) {
            tips.push({
                id: 'invest-high-stock-age',
                category: 'investment', icon: '📉', severity: 'yellow', priority: 2,
                title: {
                    he: 'שקול להקטין חשיפה למניות',
                    en: 'Consider reducing stock exposure'
                },
                description: {
                    he: 'בגיל שלך מומלץ לגוון השקעות ולהקטין סיכון. מניות מהוות מעל 70% מהשווי הנקי',
                    en: 'At your age, diversifying and reducing risk is recommended. Stocks are over 70% of net worth'
                }
            });
        }

        // Rule 9: No stocks and age < 40
        if (profile?.age && profile.age < 40 && stockData.holdings.length === 0) {
            tips.push({
                id: 'invest-start-stocks',
                category: 'investment', icon: '📈', severity: 'blue', priority: 5,
                title: {
                    he: 'שקול להתחיל להשקיע במניות',
                    en: 'Consider starting to invest in stocks'
                },
                description: {
                    he: 'בגיל צעיר יש יתרון של זמן. השקעה לטווח ארוך יכולה לבנות הון משמעותי',
                    en: 'At a young age, time is your advantage. Long-term investing can build significant wealth'
                }
            });
        }

        // Rule 10: Single stock > 30% of portfolio
        if (stocksTotal > 0) {
            for (const h of stockData.holdings) {
                const val = h.valueILS || (h.quantity * (h.currentPrice || h.avgPrice));
                if (val / stocksTotal > 0.3) {
                    tips.push({
                        id: `invest-concentration-${h.symbol}`,
                        category: 'investment', icon: '⚖️', severity: 'yellow', priority: 3,
                        title: {
                            he: `ריכוז גבוה ב-${h.symbol}`,
                            en: `High concentration in ${h.symbol}`
                        },
                        description: {
                            he: `מניה אחת תופסת יותר מ-30% מהתיק. פיזור סיכונים יכול להגן עליך`,
                            en: `One stock makes up over 30% of your portfolio. Diversification can protect you`
                        }
                    });
                }
            }
        }

        // Rule 11: Portfolio in the red (compare per-holding in same currency)
        if (stockData.holdings.length > 0) {
            let totalCost = 0;
            let totalValue = 0;
            for (const h of stockData.holdings) {
                if (h.valueILS && h.valueILS > 0) {
                    // ILS-based: use valueILS vs costILS, or skip if no cost basis in ILS
                    if (h.costILS) {
                        totalValue += h.valueILS;
                        totalCost += h.costILS;
                    }
                } else {
                    // Same currency comparison (both in original currency)
                    totalCost += h.quantity * h.avgPrice;
                    totalValue += h.quantity * (h.currentPrice || h.avgPrice);
                }
            }
            if (totalCost > 0 && totalValue < totalCost) {
                const loss = Math.round((1 - totalValue / totalCost) * 100);
                tips.push({
                    id: 'invest-portfolio-loss',
                    category: 'investment', icon: '📊', severity: 'blue', priority: 5,
                    title: {
                        he: 'תיק המניות בירידה',
                        en: 'Stock portfolio is down'
                    },
                    description: {
                        he: `התיק ירד ב-${loss}%. שקול אם לממש הפסדים לצרכי מס (tax loss harvesting)`,
                        en: `Portfolio is down ${loss}%. Consider tax loss harvesting if applicable`
                    }
                });
            }
        }

        return tips;
    },

    // ─── Pension & Funds Rules ────────────────────────────

    checkPensionRules(profile) {
        const tips = [];
        if (!profile) return tips;

        // Rule 12: No pension and age > 25
        if (profile.age > 25 && !profile.hasPension) {
            tips.push({
                id: 'pension-none',
                category: 'pension', icon: '🏦', severity: 'red', priority: 1,
                title: {
                    he: 'חשוב להתחיל לחסוך לפנסיה',
                    en: 'Important to start saving for retirement'
                },
                description: {
                    he: 'פנסיה היא הבסיס לביטחון כלכלי בגיל מבוגר. כל שנה שעוברת עולה ביוקר',
                    en: 'Pension is the foundation of financial security in old age. Every year that passes costs more'
                }
            });
        }

        // Rule 13: Has pension but no training fund
        if (profile.hasPension && !profile.hasTrainingFund) {
            tips.push({
                id: 'pension-no-training',
                category: 'pension', icon: '🎓', severity: 'blue', priority: 4,
                title: {
                    he: 'שקול לפתוח קרן השתלמות',
                    en: 'Consider opening a training fund'
                },
                description: {
                    he: 'קרן השתלמות מעניקה הטבת מס משמעותית ונזילות אחרי 6 שנים',
                    en: 'Training fund provides significant tax benefits and liquidity after 6 years'
                }
            });
        }

        // Rule 14: Fund deposits < 10% of income
        if (profile.monthlyIncome) {
            const funds = Storage.getMyFunds();
            const totalDeposit = funds.reduce((sum, f) => sum + (f.monthlyDeposit || 0), 0);
            if (funds.length > 0 && totalDeposit < profile.monthlyIncome * 0.1) {
                tips.push({
                    id: 'pension-low-deposit',
                    category: 'pension', icon: '💸', severity: 'yellow', priority: 3,
                    title: {
                        he: 'ההפרשה לקרנות נמוכה',
                        en: 'Fund contributions are low'
                    },
                    description: {
                        he: `מפריש ${this.fmt(totalDeposit)} בחודש (${Math.round(totalDeposit / profile.monthlyIncome * 100)}% מההכנסה). מומלץ להגדיל`,
                        en: `Contributing ${this.fmt(totalDeposit)}/month (${Math.round(totalDeposit / profile.monthlyIncome * 100)}% of income). Consider increasing`
                    }
                });
            }
        }

        return tips;
    },

    // ─── Family Rules ─────────────────────────────────────

    checkFamilyRules(profile) {
        const tips = [];
        if (!profile) return tips;

        // Rule 15: Married with kids, no emergency fund
        if (profile.familyStatus === 'married' && profile.numChildren > 0) {
            const bankBalance = Storage.getTotalBankBalance();
            const monthExpenses = this.getMonthlyExpenses(this.getCurrentMonth());
            if (monthExpenses > 0 && bankBalance < monthExpenses * 3) {
                tips.push({
                    id: 'family-emergency-fund',
                    category: 'family', icon: '👨‍👩‍👧‍👦', severity: 'yellow', priority: 2,
                    title: {
                        he: 'חיסכון חירום חשוב במיוחד עם משפחה',
                        en: 'Emergency fund is especially important with a family'
                    },
                    description: {
                        he: 'עם ילדים, חיסכון חירום של 3-6 חודשי הוצאות הוא קריטי לשקט נפשי',
                        en: 'With children, an emergency fund of 3-6 months of expenses is critical for peace of mind'
                    }
                });
            }
        }

        // Rule 16: Has kids, no education savings
        if (profile.numChildren > 0) {
            let hasEducationGoal = false;
            try {
                const goals = JSON.parse(localStorage.getItem('finance_goals') || '[]');
                hasEducationGoal = goals.some(g =>
                    (g.name || '').includes('חינוך') ||
                    (g.name || '').includes('לימודים') ||
                    (g.name || '').includes('education')
                );
            } catch (e) {}

            if (!hasEducationGoal) {
                tips.push({
                    id: 'family-education-savings',
                    category: 'family', icon: '🎓', severity: 'blue', priority: 5,
                    title: {
                        he: 'שקול לחסוך לחינוך הילדים',
                        en: 'Consider saving for children\'s education'
                    },
                    description: {
                        he: 'חיסכון מוקדם לחינוך יכול להקל מאוד כשהילדים גדלים',
                        en: 'Early education savings can ease the burden significantly as children grow'
                    }
                });
            }
        }

        return tips;
    },

    // ─── General Rules ────────────────────────────────────

    checkGeneralRules(profile) {
        const tips = [];

        // Rule 17: Positive reinforcement if net worth is substantial
        const netWorth = Storage.getNetWorth();
        if (netWorth > 0 && profile) {
            const bankBalance = Storage.getTotalBankBalance();
            const stocksValue = Storage.getTotalStocksValue();
            const fundsValue = Storage.getTotalFundsValue();
            const diversified = [bankBalance, stocksValue, fundsValue].filter(v => v > 0).length;

            if (diversified >= 3) {
                tips.push({
                    id: 'general-diversified',
                    category: 'general', icon: '⭐', severity: 'green', priority: 8,
                    title: {
                        he: 'כל הכבוד! הנכסים שלך מפוזרים יפה',
                        en: 'Great job! Your assets are well diversified'
                    },
                    description: {
                        he: 'יש לך נכסים בבנק, מניות וקרנות — זה פיזור חכם',
                        en: 'You have assets in bank, stocks and funds — that\'s smart diversification'
                    }
                });
            }
        }

        return tips;
    },

    // ─── Credit Score Rules ────────────────────────────────

    checkCreditScoreRules(profile) {
        const tips = [];
        if (!profile) return tips;

        const creditData = Storage.getCreditCards();
        const monthExpenses = this.getMonthlyExpenses(this.getCurrentMonth());

        // Rule: High credit utilization (>50% of income)
        if (profile.monthlyIncome && monthExpenses > profile.monthlyIncome * 0.5) {
            const utilPct = Math.round(monthExpenses / profile.monthlyIncome * 100);
            tips.push({
                id: 'credit-high-utilization',
                category: 'spending', icon: '💳', severity: 'yellow', priority: 2,
                title: {
                    he: 'ניצול אשראי גבוה',
                    en: 'High credit utilization'
                },
                description: {
                    he: `ניצול האשראי שלך עומד על ${utilPct}% מההכנסה. מומלץ להישאר מתחת ל-30%`,
                    en: `Your credit utilization is ${utilPct}% of income. Try to stay below 30%`
                }
            });
        }

        // Rule: No external credit score
        const scoreData = Storage.getCreditScore();
        if (!scoreData.external) {
            tips.push({
                id: 'credit-no-external',
                category: 'general', icon: '📋', severity: 'blue', priority: 6,
                title: {
                    he: 'כדאי לבדוק דירוג אשראי חיצוני',
                    en: 'Check your external credit score'
                },
                description: {
                    he: 'בדוק את הדירוג שלך ב-BDI או CreditInfo והזן אותו בעמוד הפרופיל',
                    en: 'Check your score at BDI or CreditInfo and enter it in your profile page'
                }
            });
        }

        // Rule: Stale external score (>6 months old)
        if (scoreData.external && scoreData.external.date) {
            const scoreDate = new Date(scoreData.external.date);
            const monthsAgo = (Date.now() - scoreDate.getTime()) / (1000 * 60 * 60 * 24 * 30);
            if (monthsAgo > 6) {
                tips.push({
                    id: 'credit-stale-score',
                    category: 'general', icon: '🔄', severity: 'yellow', priority: 5,
                    title: {
                        he: 'הדירוג החיצוני לא עודכן מעל 6 חודשים',
                        en: 'External credit score is over 6 months old'
                    },
                    description: {
                        he: 'מומלץ לעדכן את דירוג האשראי החיצוני שלך אחת לחצי שנה',
                        en: 'Update your external credit score at least every 6 months'
                    }
                });
            }
        }

        return tips;
    },

    // ─── Recurring Expenses Rules ─────────────────────────

    checkRecurringRules(profile) {
        const tips = [];
        if (!profile?.monthlyIncome) return tips;

        const recurringTotal = Storage.getMonthlyRecurringTotal();
        if (recurringTotal > 0 && recurringTotal / profile.monthlyIncome > 0.3) {
            tips.push({
                id: 'spending-recurring-high',
                category: 'spending', icon: '🔄', severity: 'yellow', priority: 3,
                title: {
                    he: 'הוצאות קבועות גבוהות',
                    en: 'High recurring expenses'
                },
                description: {
                    he: `ההוצאות הקבועות (${this.fmt(recurringTotal)}) מהוות ${Math.round(recurringTotal / profile.monthlyIncome * 100)}% מההכנסה. שווה לבדוק אילו מנויים אפשר לבטל`,
                    en: `Recurring expenses (${this.fmt(recurringTotal)}) are ${Math.round(recurringTotal / profile.monthlyIncome * 100)}% of income. Consider reviewing subscriptions`
                }
            });
        }

        return tips;
    },

    // ─── Data Completeness ────────────────────────────────

    checkDataCompleteness(profile) {
        const tips = [];

        // No profile at all
        if (!profile) {
            tips.push({
                id: 'data-no-profile',
                category: 'general', icon: '👤', severity: 'blue', priority: 0,
                title: {
                    he: 'מלא את הפרופיל שלך',
                    en: 'Fill in your profile'
                },
                description: {
                    he: 'פרופיל מלא מאפשר טיפים מדויקים יותר המותאמים למצבך',
                    en: 'A complete profile enables more accurate tips tailored to your situation'
                }
            });
            return tips; // Don't show other data completeness tips without profile
        }

        // Missing bank data
        if (Storage.getBankAccounts().length === 0) {
            tips.push({
                id: 'data-no-bank',
                category: 'general', icon: '🏦', severity: 'blue', priority: 9,
                title: { he: 'הוסף חשבונות בנק', en: 'Add bank accounts' },
                description: {
                    he: 'הוסף את חשבונות הבנק שלך לתמונה פיננסית מלאה',
                    en: 'Add your bank accounts for a complete financial picture'
                }
            });
        }

        // Missing credit data
        const creditData = Storage.getCreditCards();
        if (creditData.expenses.length === 0) {
            tips.push({
                id: 'data-no-expenses',
                category: 'general', icon: '💳', severity: 'blue', priority: 9,
                title: { he: 'הוסף הוצאות אשראי', en: 'Add credit expenses' },
                description: {
                    he: 'מעקב אחרי הוצאות עוזר לזהות דפוסי הוצאה ולחסוך',
                    en: 'Tracking expenses helps identify spending patterns and save'
                }
            });
        }

        // Missing funds data
        if (Storage.getMyFunds().length === 0 && (profile.hasPension || profile.hasTrainingFund)) {
            tips.push({
                id: 'data-no-funds',
                category: 'general', icon: '📊', severity: 'blue', priority: 9,
                title: { he: 'הוסף את הקרנות שלך', en: 'Add your funds' },
                description: {
                    he: 'ציינת שיש לך קרנות — הוסף אותן לעמוד "המוצרים שלי"',
                    en: 'You mentioned having funds — add them to "My Products"'
                }
            });
        }

        return tips;
    }
};

window.SmartTips = SmartTips;
