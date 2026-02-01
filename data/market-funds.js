/**
 * Market Funds Data - Centralized data for all fund comparisons
 * Source: TheMarker SuperMarker
 *
 * This file contains market data for:
 * - Training Funds (קרנות השתלמות)
 * - Pension Funds (קרנות פנסיה)
 * - Gemel Funds (קופות גמל)
 */

const MarketFunds = {
    // Metadata
    meta: {
        lastUpdate: '2025-11',
        source: 'TheMarker SuperMarker',
        sourceUrls: {
            training: 'https://www.supermarker.themarker.com/Gemel/CompareHishtalmutFunds.aspx',
            pension: 'https://www.supermarker.themarker.com/pension/ComparePensionFunds.aspx',
            gemel: 'https://www.supermarker.themarker.com/Gemel/CompareGemelFunds.aspx'
        }
    },

    // Training Funds Data (קרנות השתלמות)
    training: [
        {
            nameHe: "אינפיניטי השתלמות משולב סחיר",
            nameEn: "Infiniti Mixed Tradable",
            companyHe: "אינפיניטי",
            companyEn: "Infiniti",
            month: 2.86,
            year1: 48.74,
            year3: 110.99,
            year5: 128.34,
            fee: 0.62,
            assets: 102.97
        },
        {
            nameHe: "אינפיניטי השתלמות מניות",
            nameEn: "Infiniti Stocks",
            companyHe: "אינפיניטי",
            companyEn: "Infiniti",
            month: 0.95,
            year1: 24.18,
            year3: 90.83,
            year5: 106.21,
            fee: 0.58,
            assets: 717.00
        },
        {
            nameHe: "השתלמות משפטנים מניות",
            nameEn: "Lawyers Fund Stocks",
            companyHe: "משפטנים",
            companyEn: "Lawyers Fund",
            month: 0.06,
            year1: 30.72,
            year3: 87.29,
            year5: 103.96,
            fee: 0.43,
            assets: 10.64
        },
        {
            nameHe: "רעות - מניות",
            nameEn: "Reut Stocks",
            companyHe: "רעות",
            companyEn: "Reut",
            month: 1.10,
            year1: 25.30,
            year3: 77.97,
            year5: 103.14,
            fee: 0.47,
            assets: 56.33
        },
        {
            nameHe: "רום ספיר מניות",
            nameEn: "Rom Sapir Stocks",
            companyHe: "רום ספיר",
            companyEn: "Rom Sapir",
            month: 1.24,
            year1: 23.29,
            year3: 82.08,
            year5: 99.11,
            fee: 0.31,
            assets: 93.13
        },
        {
            nameHe: "כלל השתלמות מניות סחיר",
            nameEn: "Clal Stocks Tradable",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 4.89,
            year1: 45.00,
            year3: 70.00,
            year5: 97.50,
            fee: 0.45,
            assets: null
        },
        {
            nameHe: "הראל השתלמות מניות סחיר",
            nameEn: "Harel Stocks Tradable",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 4.74,
            year1: 52.32,
            year3: 69.00,
            year5: 96.80,
            fee: 0.48,
            assets: null
        },
        {
            nameHe: "קרן החיסכון לצבא הקבע - מניות",
            nameEn: "IDF Savings Stocks",
            companyHe: "צבא הקבע",
            companyEn: "IDF Savings",
            month: 4.73,
            year1: 52.54,
            year3: 68.00,
            year5: 95.00,
            fee: 0.19,
            assets: null
        },
        {
            nameHe: "מגדל השתלמות מניות סחיר",
            nameEn: "Migdal Stocks Tradable",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 4.13,
            year1: 44.00,
            year3: 67.00,
            year5: 92.30,
            fee: 0.51,
            assets: null
        },
        {
            nameHe: "ילין לפידות מניות סחיר",
            nameEn: "Yelin Lapidot Stocks Tradable",
            companyHe: "ילין לפידות",
            companyEn: "Yelin Lapidot",
            month: 4.05,
            year1: 43.00,
            year3: 66.00,
            year5: 90.50,
            fee: 0.55,
            assets: null
        },
        {
            nameHe: "מיטב השתלמות משולב סחיר",
            nameEn: "Meitav Mixed Tradable",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 3.93,
            year1: 52.02,
            year3: 65.00,
            year5: 94.00,
            fee: 0.52,
            assets: null
        },
        {
            nameHe: "הפניקס השתלמות מניות סחיר",
            nameEn: "Phoenix Stocks Tradable",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 3.75,
            year1: 47.58,
            year3: 64.00,
            year5: 89.00,
            fee: 0.50,
            assets: null
        }
    ],

    // Pension Funds Data (קרנות פנסיה)
    pension: [
        {
            nameHe: "הלמן אלדובי פנסיה מקיפה",
            nameEn: "Halman Aldubi Comprehensive",
            companyHe: "הלמן אלדובי",
            companyEn: "Halman Aldubi",
            month: 2.45,
            year1: 22.80,
            year3: 45.20,
            year5: 68.50,
            fee: 0.22
        },
        {
            nameHe: "מיטב דש פנסיה מקיפה",
            nameEn: "Meitav Dash Comprehensive",
            companyHe: "מיטב דש",
            companyEn: "Meitav Dash",
            month: 2.38,
            year1: 21.50,
            year3: 43.80,
            year5: 65.20,
            fee: 0.25
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה",
            nameEn: "Altshuler Shaham Comprehensive",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: 2.32,
            year1: 20.90,
            year3: 42.50,
            year5: 63.80,
            fee: 0.24
        },
        {
            nameHe: "הראל פנסיה מקיפה",
            nameEn: "Harel Comprehensive",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 2.28,
            year1: 19.80,
            year3: 40.20,
            year5: 61.50,
            fee: 0.28
        },
        {
            nameHe: "מגדל פנסיה מקיפה",
            nameEn: "Migdal Comprehensive",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 2.15,
            year1: 18.50,
            year3: 38.90,
            year5: 59.20,
            fee: 0.30
        },
        {
            nameHe: "כלל פנסיה מקיפה",
            nameEn: "Clal Comprehensive",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 2.10,
            year1: 17.90,
            year3: 37.50,
            year5: 57.80,
            fee: 0.29
        },
        {
            nameHe: "הפניקס פנסיה מקיפה",
            nameEn: "Phoenix Comprehensive",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 2.05,
            year1: 17.20,
            year3: 36.80,
            year5: 56.50,
            fee: 0.27
        },
        {
            nameHe: "מנורה פנסיה מקיפה",
            nameEn: "Menora Comprehensive",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 1.98,
            year1: 16.80,
            year3: 35.20,
            year5: 54.80,
            fee: 0.31
        }
    ],

    // Gemel Funds Data (קופות גמל)
    gemel: [
        {
            nameHe: "אלטשולר שחם גמל להשקעה",
            nameEn: "Altshuler Shaham Investment",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: 3.12,
            year1: 28.50,
            year3: 55.80,
            year5: 82.30,
            fee: 0.35
        },
        {
            nameHe: "הלמן אלדובי גמל להשקעה",
            nameEn: "Halman Aldubi Investment",
            companyHe: "הלמן אלדובי",
            companyEn: "Halman Aldubi",
            month: 2.95,
            year1: 26.80,
            year3: 52.40,
            year5: 78.60,
            fee: 0.38
        },
        {
            nameHe: "מיטב דש גמל להשקעה",
            nameEn: "Meitav Dash Investment",
            companyHe: "מיטב דש",
            companyEn: "Meitav Dash",
            month: 2.88,
            year1: 25.20,
            year3: 50.10,
            year5: 75.40,
            fee: 0.40
        },
        {
            nameHe: "הראל גמל להשקעה",
            nameEn: "Harel Investment",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 2.75,
            year1: 23.90,
            year3: 48.50,
            year5: 72.80,
            fee: 0.42
        },
        {
            nameHe: "כלל גמל להשקעה",
            nameEn: "Clal Investment",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 2.68,
            year1: 22.50,
            year3: 46.20,
            year5: 70.50,
            fee: 0.45
        },
        {
            nameHe: "מגדל גמל להשקעה",
            nameEn: "Migdal Investment",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 2.55,
            year1: 21.30,
            year3: 44.80,
            year5: 68.20,
            fee: 0.43
        },
        {
            nameHe: "הפניקס גמל להשקעה",
            nameEn: "Phoenix Investment",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 2.48,
            year1: 20.10,
            year3: 42.50,
            year5: 65.80,
            fee: 0.44
        },
        {
            nameHe: "מנורה גמל להשקעה",
            nameEn: "Menora Investment",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 2.35,
            year1: 18.80,
            year3: 40.20,
            year5: 62.50,
            fee: 0.46
        }
    ],

    /**
     * Get data by fund type
     * @param {string} type - 'training', 'pension', or 'gemel'
     */
    getData(type) {
        return this[type] || [];
    },

    /**
     * Get top performers by period
     * @param {string} type - Fund type
     * @param {string} period - 'month', 'year1', 'year3', 'year5'
     * @param {number} limit - Number of results
     */
    getTopByPeriod(type, period, limit = 5) {
        const data = this.getData(type);
        return [...data]
            .filter(f => f[period] !== null && f[period] !== undefined)
            .sort((a, b) => b[period] - a[period])
            .slice(0, limit);
    },

    /**
     * Get last update info
     */
    getLastUpdate() {
        return this.meta.lastUpdate;
    },

    /**
     * Get source URL for fund type
     */
    getSourceUrl(type) {
        return this.meta.sourceUrls[type] || this.meta.sourceUrls.training;
    },

    /**
     * Update fund data (called from update page)
     * @param {string} type - Fund type
     * @param {Array} newData - New fund data
     */
    updateData(type, newData) {
        if (!['training', 'pension', 'gemel'].includes(type)) {
            console.error('Invalid fund type:', type);
            return false;
        }

        // Save to localStorage for persistence
        const storageKey = `market_funds_${type}`;
        const updateKey = 'market_funds_last_update';

        localStorage.setItem(storageKey, JSON.stringify(newData));
        localStorage.setItem(updateKey, new Date().toISOString().slice(0, 7));

        // Update in-memory data
        this[type] = newData;
        this.meta.lastUpdate = new Date().toISOString().slice(0, 7);

        return true;
    },

    /**
     * Load data from localStorage if available
     */
    loadFromStorage() {
        ['training', 'pension', 'gemel'].forEach(type => {
            const storageKey = `market_funds_${type}`;
            const stored = localStorage.getItem(storageKey);
            if (stored) {
                try {
                    this[type] = JSON.parse(stored);
                } catch (e) {
                    console.error('Error loading stored fund data:', e);
                }
            }
        });

        const updateKey = 'market_funds_last_update';
        const lastUpdate = localStorage.getItem(updateKey);
        if (lastUpdate) {
            this.meta.lastUpdate = lastUpdate;
        }
    },

    /**
     * Check if data needs update (older than 1 month)
     */
    needsUpdate() {
        const lastUpdate = this.meta.lastUpdate;
        if (!lastUpdate) return true;

        const [year, month] = lastUpdate.split('-').map(Number);
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;

        // Needs update if more than 1 month old
        if (currentYear > year) return true;
        if (currentYear === year && currentMonth > month) return true;

        return false;
    }
};

// Load from storage on init
MarketFunds.loadFromStorage();

// Make available globally
window.MarketFunds = MarketFunds;
