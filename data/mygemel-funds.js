/**
 * MyGemel Fund Data - Real data from igemel-net.co.il
 * Data source: https://www.igemel-net.co.il/
 * Last update: December 2025
 */

const MyGemelFunds = {
    meta: {
        lastUpdate: '2025-12',
        source: 'iGemel-Net',
        sourceUrls: {
            training: 'https://www.igemel-net.co.il/%D7%A7%D7%A8%D7%A0%D7%95%D7%AA-%D7%94%D7%A9%D7%AA%D7%9C%D7%9E%D7%95%D7%AA/',
            pension: 'https://www.igemel-net.co.il/%D7%A7%D7%A8%D7%A0%D7%95%D7%AA-%D7%A4%D7%A0%D7%A1%D7%99%D7%94/',
            gemel: 'https://www.igemel-net.co.il/%D7%92%D7%9E%D7%9C-%D7%9C%D7%94%D7%A9%D7%A7%D7%A2%D7%94/'
        }
    },

    // Training Funds - קרנות השתלמות (Real data from igemel-net.co.il)
    training: [
        {
            nameHe: "אינפיניטי משולב סחיר",
            nameEn: "Infiniti Mixed Tradable",
            companyHe: "אינפיניטי",
            companyEn: "Infiniti",
            month: 4.95,
            year1: 47.87,
            year3: 127.49,
            year5: 133.57,
            fee: 0.59
        },
        {
            nameHe: "אינפיניטי מניות",
            nameEn: "Infiniti Stocks",
            companyHe: "אינפיניטי",
            companyEn: "Infiniti",
            month: 1.50,
            year1: 24.52,
            year3: 94.32,
            year5: 106.72,
            fee: 0.59
        },
        {
            nameHe: "השתלמות משפטנים מניות",
            nameEn: "Lawyers Training Stocks",
            companyHe: "משפטנים",
            companyEn: "Lawyers Fund",
            month: 2.60,
            year1: 31.30,
            year3: 103.43,
            year5: 102.13,
            fee: 0.41
        },
        {
            nameHe: "רעות מניות",
            nameEn: "Reut Stocks",
            companyHe: "רעות",
            companyEn: "Reut",
            month: 1.87,
            year1: 26.18,
            year3: 89.54,
            year5: 100.21,
            fee: 0.45
        },
        {
            nameHe: "רום ספיר מניות",
            nameEn: "Rom Sapir Stocks",
            companyHe: "רום",
            companyEn: "Rom",
            month: 2.32,
            year1: 24.98,
            year3: 93.30,
            year5: 97.41,
            fee: 0.30
        },
        {
            nameHe: "ילין לפידות מניות",
            nameEn: "Yelin Lapidot Stocks",
            companyHe: "ילין לפידות",
            companyEn: "Yelin Lapidot",
            month: 1.42,
            year1: 21.84,
            year3: 79.75,
            year5: 93.10,
            fee: 0.67
        },
        {
            nameHe: "אנליסט מניות",
            nameEn: "Analyst Stocks",
            companyHe: "אנליסט",
            companyEn: "Analyst",
            month: 1.01,
            year1: 20.74,
            year3: 83.27,
            year5: 88.72,
            fee: 0.63
        },
        {
            nameHe: "מור השתלמות - כללי",
            nameEn: "Mor Training - General",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.53,
            year1: 14.73,
            year3: 42.35,
            year5: 53.28,
            fee: 0.70
        },
        {
            nameHe: "מור השתלמות - מניות",
            nameEn: "Mor Training - Stocks",
            companyHe: "מור",
            companyEn: "Mor",
            month: 1.46,
            year1: 25.86,
            year3: 74.08,
            year5: 87.76,
            fee: 0.71
        },
        {
            nameHe: "אומגה קרן מניות",
            nameEn: "Omega Fund Stocks",
            companyHe: "אומגה",
            companyEn: "Omega",
            month: 2.15,
            year1: 28.20,
            year3: 78.06,
            year5: 86.57,
            fee: 0.44
        },
        {
            nameHe: "מגדל השתלמות מניות",
            nameEn: "Migdal Training Stocks",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.80,
            year1: 25.48,
            year3: 76.24,
            year5: 85.32,
            fee: 0.49
        },
        {
            nameHe: "מיטב השתלמות מניות",
            nameEn: "Meitav Training Stocks",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 2.14,
            year1: 26.46,
            year3: 79.50,
            year5: 84.79,
            fee: 0.55
        },
        {
            nameHe: "מנורה מניות",
            nameEn: "Menora Stocks",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 2.12,
            year1: 27.94,
            year3: 75.72,
            year5: 84.54,
            fee: 0.49
        },
        {
            nameHe: "הראל מסלול מניות",
            nameEn: "Harel Stocks Track",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.93,
            year1: 26.40,
            year3: 72.28,
            year5: 84.05,
            fee: 0.53
        },
        {
            nameHe: "הפניקס מניות",
            nameEn: "Phoenix Stocks",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 2.00,
            year1: 25.89,
            year3: 74.65,
            year5: 84.02,
            fee: 0.58
        },
        {
            nameHe: "קרן אקדמאים מניות",
            nameEn: "Academics Fund Stocks",
            companyHe: "אקדמאים",
            companyEn: "Academics",
            month: 1.95,
            year1: 24.62,
            year3: 80.51,
            year5: 82.02,
            fee: 0.28
        },
        {
            nameHe: "קרן החיסכון צבא מניות",
            nameEn: "IDF Savings Fund Stocks",
            companyHe: "קרן החיסכון",
            companyEn: "IDF Savings",
            month: 1.96,
            year1: 26.73,
            year3: 71.96,
            year5: 81.40,
            fee: 0.19
        },
        {
            nameHe: "יחד רופאים מניות",
            nameEn: "Doctors Together Stocks",
            companyHe: "יחד רופאים",
            companyEn: "Doctors Together",
            month: 1.73,
            year1: 23.97,
            year3: 76.48,
            year5: 80.31,
            fee: 0.36
        },
        {
            nameHe: "מינהל מניות",
            nameEn: "Minhal Stocks",
            companyHe: "מינהל",
            companyEn: "Minhal",
            month: 1.84,
            year1: 22.91,
            year3: 84.42,
            year5: 79.95,
            fee: 0.55
        },
        {
            nameHe: "הנדסאים מניות",
            nameEn: "Engineers Stocks",
            companyHe: "הנדסאים",
            companyEn: "Engineers",
            month: 1.77,
            year1: 21.70,
            year3: 75.60,
            year5: 79.24,
            fee: 0.35
        },
        {
            nameHe: "כלל השתלמות מניות",
            nameEn: "Clal Training Stocks",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 2.09,
            year1: 27.45,
            year3: 69.76,
            year5: 75.98,
            fee: 0.53
        },
        {
            nameHe: "אלטשולר שחם מניות",
            nameEn: "Altshuler Shaham Stocks",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: 0.18,
            year1: 21.02,
            year3: 70.06,
            year5: 59.08,
            fee: 0.68
        }
    ],

    // Pension Funds - קרנות פנסיה (Real data from igemel-net.co.il)
    pension: [
        {
            nameHe: "מיטב מקיפה - עוקב מדדי מניות",
            nameEn: "Meitav Comprehensive - Index Tracking",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 0.91,
            year1: 16.74,
            year3: 90.66,
            year5: 96.12,
            fee: 1.31
        },
        {
            nameHe: "הפניקס משלימה - מניות",
            nameEn: "Phoenix Supplementary - Stocks",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 2.02,
            year1: 26.27,
            year3: 76.64,
            year5: 86.01,
            fee: 1.29
        },
        {
            nameHe: "מגדל משלימה - מניות",
            nameEn: "Migdal Supplementary - Stocks",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.83,
            year1: 25.89,
            year3: 76.79,
            year5: 85.15,
            fee: 1.02
        },
        {
            nameHe: "מיטב כללית - מניות",
            nameEn: "Meitav General - Stocks",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 2.11,
            year1: 26.27,
            year3: 78.48,
            year5: 84.08,
            fee: 1.11
        },
        {
            nameHe: "מנורה פנסיה - מניות",
            nameEn: "Menora Pension - Stocks",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.52,
            year1: 21.80,
            year3: 62.53,
            year5: 81.38,
            fee: 1.73
        },
        {
            nameHe: "מיטב מקיפה - מניות",
            nameEn: "Meitav Comprehensive - Stocks",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 1.40,
            year1: 20.21,
            year3: 61.87,
            year5: 75.72,
            fee: 1.31
        },
        {
            nameHe: "מגדל אישית - מניות",
            nameEn: "Migdal Personal - Stocks",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.28,
            year1: 20.26,
            year3: 61.53,
            year5: 75.74,
            fee: 1.61
        },
        {
            nameHe: "הפניקס מקיפה - מניות",
            nameEn: "Phoenix Comprehensive - Stocks",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.50,
            year1: 21.16,
            year3: 61.26,
            year5: 75.47,
            fee: 1.55
        },
        {
            nameHe: "הראל פנסיה - מניות",
            nameEn: "Harel Pension - Stocks",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.22,
            year1: 20.09,
            year3: 57.68,
            year5: 73.78,
            fee: 1.51
        },
        {
            nameHe: "כלל פנסיה - מניות",
            nameEn: "Clal Pension - Stocks",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.48,
            year1: 21.04,
            year3: 56.80,
            year5: 70.56,
            fee: 1.54
        },
        {
            nameHe: "מנורה פנסיה - יעד 2055",
            nameEn: "Menora Pension - Target 2055",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.33,
            year1: 18.99,
            year3: 51.01,
            year5: 69.52,
            fee: 1.73
        },
        {
            nameHe: "מנורה פנסיה - יעד 2060",
            nameEn: "Menora Pension - Target 2060",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.35,
            year1: 19.15,
            year3: 51.59,
            year5: 68.12,
            fee: 1.73
        },
        {
            nameHe: "מנורה פנסיה - יעד 2050",
            nameEn: "Menora Pension - Target 2050",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.25,
            year1: 17.83,
            year3: 48.16,
            year5: 66.12,
            fee: 1.73
        },
        {
            nameHe: "כלל פנסיה - יעד 50 ומטה",
            nameEn: "Clal Pension - Target 50 and below",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.28,
            year1: 18.38,
            year3: 48.70,
            year5: 65.54,
            fee: 1.54
        },
        {
            nameHe: "מנורה פנסיה - יעד 2045",
            nameEn: "Menora Pension - Target 2045",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.22,
            year1: 17.15,
            year3: 46.56,
            year5: 64.93,
            fee: 1.73
        },
        {
            nameHe: "מנורה משלימה - יעד 2060",
            nameEn: "Menora Supplementary - Target 2060",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.33,
            year1: 19.01,
            year3: 48.90,
            year5: 56.99,
            fee: 1.06
        },
        {
            nameHe: "מנורה משלימה - יעד 2055",
            nameEn: "Menora Supplementary - Target 2055",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.28,
            year1: 18.85,
            year3: 48.42,
            year5: 56.82,
            fee: 1.06
        },
        {
            nameHe: "מנורה משלימה - יעד 2045",
            nameEn: "Menora Supplementary - Target 2045",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.22,
            year1: 17.48,
            year3: 45.99,
            year5: 55.66,
            fee: 1.06
        },
        {
            nameHe: "הראל פנסיה - גילעד כללי",
            nameEn: "Harel Pension - Gilad General",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.89,
            year1: 14.47,
            year3: 39.66,
            year5: 55.03,
            fee: 1.51
        },
        {
            nameHe: "מנורה משלימה - יעד 2050",
            nameEn: "Menora Supplementary - Target 2050",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.30,
            year1: 18.13,
            year3: 47.16,
            year5: 54.83,
            fee: 1.06
        }
    ],

    // Gemel Funds - קופות גמל להשקעה (Real data from igemel-net.co.il)
    gemel: [
        {
            nameHe: "הראל גמל להשקעה מניות",
            nameEn: "Harel Gemel Stocks",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 3.04,
            year1: 33.35,
            year3: 98.68,
            year5: 107.10,
            fee: 0.55
        },
        {
            nameHe: "אינפיניטי גמל להשקעה מניות",
            nameEn: "Infiniti Gemel Stocks",
            companyHe: "אינפיניטי",
            companyEn: "Infiniti",
            month: 1.44,
            year1: 22.30,
            year3: 89.34,
            year5: 102.77,
            fee: 0.60
        },
        {
            nameHe: "ילין לפידות קופת גמל להשקעה מסלול מניות",
            nameEn: "Yelin Lapidot Gemel Stocks Track",
            companyHe: "ילין לפידות",
            companyEn: "Yelin Lapidot",
            month: 1.41,
            year1: 22.01,
            year3: 80.00,
            year5: 92.55,
            fee: 0.67
        },
        {
            nameHe: "אנליסט קופת גמל להשקעה מניות",
            nameEn: "Analyst Gemel Stocks",
            companyHe: "אנליסט",
            companyEn: "Analyst",
            month: 0.99,
            year1: 20.70,
            year3: 82.66,
            year5: 87.42,
            fee: 0.61
        },
        {
            nameHe: "מגדל גמל להשקעה מניות",
            nameEn: "Migdal Gemel Stocks",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.97,
            year1: 26.73,
            year3: 77.77,
            year5: 86.48,
            fee: 0.59
        },
        {
            nameHe: "מיטב גמל להשקעה מניות",
            nameEn: "Meitav Gemel Stocks",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 2.12,
            year1: 26.49,
            year3: 80.04,
            year5: 84.59,
            fee: 0.59
        },
        {
            nameHe: "מור גמל להשקעה - מניות",
            nameEn: "Mor Gemel Stocks",
            companyHe: "מור",
            companyEn: "Mor",
            month: 1.35,
            year1: 26.72,
            year3: 75.06,
            year5: 82.20,
            fee: 0.73
        },
        {
            nameHe: "ילין לפידות קופת גמל להשקעה כללי",
            nameEn: "Yelin Lapidot Gemel General",
            companyHe: "ילין לפידות",
            companyEn: "Yelin Lapidot",
            month: 0.62,
            year1: 13.52,
            year3: 44.70,
            year5: 49.05,
            fee: 0.68
        },
        {
            nameHe: "הפניקס גמל להשקעה מניות",
            nameEn: "Phoenix Gemel Stocks",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.94,
            year1: 25.89,
            year3: 76.51,
            year5: 81.07,
            fee: 0.59
        },
        {
            nameHe: "כלל גמל לעתיד מניות",
            nameEn: "Clal Gemel Future Stocks",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 2.11,
            year1: 27.30,
            year3: 69.78,
            year5: 74.30,
            fee: 0.64
        },
        {
            nameHe: "אלטשולר שחם חיסכון פלוס מניות",
            nameEn: "Altshuler Shaham Savings Plus Stocks",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: 0.14,
            year1: 20.86,
            year3: 70.30,
            year5: 59.01,
            fee: 0.59
        }
    ],

    // Get data by type
    getData(type) {
        // Try to load from localStorage first (for user updates)
        this.loadFromStorage();
        return this[type] || [];
    },

    // Get last update date
    getLastUpdate() {
        this.loadFromStorage();
        return this.meta.lastUpdate;
    },

    // Update data for a specific type
    updateData(type, newData) {
        if (!['training', 'pension', 'gemel'].includes(type)) return false;

        this[type] = newData;
        this.meta.lastUpdate = new Date().toISOString().slice(0, 7);
        this.saveToStorage();
        return true;
    },

    // Save to localStorage
    saveToStorage() {
        const dataToSave = {
            meta: this.meta,
            training: this.training,
            pension: this.pension,
            gemel: this.gemel
        };
        localStorage.setItem('mygemel_fund_data', JSON.stringify(dataToSave));
    },

    // Load from localStorage
    loadFromStorage() {
        try {
            const stored = localStorage.getItem('mygemel_fund_data');
            if (stored) {
                const data = JSON.parse(stored);
                if (data.meta) this.meta = data.meta;
                if (data.training) this.training = data.training;
                if (data.pension) this.pension = data.pension;
                if (data.gemel) this.gemel = data.gemel;
            }
        } catch (e) {
            console.warn('Failed to load MyGemel data from storage:', e);
        }
    },

    // Check if data needs update (older than 1 month)
    needsUpdate() {
        if (!this.meta.lastUpdate) return true;
        const lastUpdate = new Date(this.meta.lastUpdate + '-01');
        const now = new Date();
        const monthsDiff = (now.getFullYear() - lastUpdate.getFullYear()) * 12 +
                          (now.getMonth() - lastUpdate.getMonth());
        return monthsDiff >= 1;
    }
};

// Initialize by loading from storage
MyGemelFunds.loadFromStorage();
