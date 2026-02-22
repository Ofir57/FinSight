/**
 * MyGemel Fund Data - Comprehensive data from igemel-net.co.il
 * Data source: https://www.igemel-net.co.il/
 * Last update: February 2026
 * Total funds: 223 training + 245 pension + 11 gemel + 178 savings = 657
 */

const MyGemelFunds = {
    meta: {
        lastUpdate: '2026-02',
        dataVersion: 6,
        source: 'iGemel-Net',
        sourceUrls: {
            training: 'https://www.igemel-net.co.il/%D7%A7%D7%A8%D7%A0%D7%95%D7%AA-%D7%94%D7%A9%D7%AA%D7%9C%D7%9E%D7%95%D7%AA/',
            pension: 'https://www.igemel-net.co.il/%D7%A7%D7%A8%D7%A0%D7%95%D7%AA-%D7%A4%D7%A0%D7%A1%D7%99%D7%94/',
            gemel: 'https://www.igemel-net.co.il/%D7%92%D7%9E%D7%9C-%D7%9C%D7%94%D7%A9%D7%A7%D7%A2%D7%94/',
            savings: 'https://www.igemel-net.co.il/%D7%A4%D7%95%D7%9C%D7%99%D7%A1%D7%95%D7%AA-%D7%97%D7%99%D7%A1%D7%9B%D7%95%D7%9F/'
        }
    },

    // Training Funds - קרנות השתלמות
    training: [
        {
            nameHe: "הראל השתלמות כללי",
            nameEn: "הראל השתלמות כללי",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.91,
            year1: 14.47,
            year3: 37.36,
            year5: 45.6,
            fee: 0.6
        },
        {
            nameHe: "מגדל השתלמות אשראי ואג״ח",
            nameEn: "מגדל השתלמות אשראי ואג״ח",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.28,
            year1: 6.23,
            year3: 17.82,
            year5: 14.59,
            fee: 0.56
        },
        {
            nameHe: "קרן השתלמות למורים כללי",
            nameEn: "קרן השתלמות למורים כללי",
            companyHe: "עגור",
            companyEn: "Agur",
            month: 1.22,
            year1: 14.99,
            year3: 45.76,
            year5: 56.1,
            fee: 0.19
        },
        {
            nameHe: "מורים וגננות - כללי",
            nameEn: "מורים וגננות - כללי",
            companyHe: "מורים וגננות",
            companyEn: "Teachers",
            month: 0.91,
            year1: 14.32,
            year3: 43.65,
            year5: 46.4,
            fee: 0.12
        },
        {
            nameHe: "מורים תיכוניים - כללי",
            nameEn: "מורים תיכוניים - כללי",
            companyHe: "מורים תיכוניים",
            companyEn: "High School Teachers",
            month: 0.92,
            year1: 14.83,
            year3: 44.33,
            year5: 48.3,
            fee: 0.12
        },
        {
            nameHe: "אומגה השתלמות כללי",
            nameEn: "אומגה השתלמות כללי",
            companyHe: "אומגה",
            companyEn: "Omega",
            month: 1.2,
            year1: 16.0,
            year3: 43.72,
            year5: 49.81,
            fee: 0.54
        },
        {
            nameHe: "קרן לאקדמאים כללי",
            nameEn: "קרן לאקדמאים כללי",
            companyHe: "אקדמאים",
            companyEn: "Academics",
            month: 1.06,
            year1: 14.2,
            year3: 42.02,
            year5: 43.55,
            fee: 0.28
        },
        {
            nameHe: "קרן עובדי בנק ישראל",
            nameEn: "קרן עובדי בנק ישראל",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 1.07,
            year1: 15.05,
            year3: 44.36,
            year5: 50.58,
            fee: 0.38
        },
        {
            nameHe: "הנדסאים השתלמות - כללי",
            nameEn: "הנדסאים השתלמות - כללי",
            companyHe: "הנדסאים",
            companyEn: "Engineers",
            month: 0.78,
            year1: 14.65,
            year3: 44.84,
            year5: 44.56,
            fee: 0.35
        },
        {
            nameHe: "השתלמות משפטנים כללי",
            nameEn: "השתלמות משפטנים כללי",
            companyHe: "משפטנים",
            companyEn: "Lawyers Fund",
            month: 1.63,
            year1: 18.4,
            year3: 54.1,
            year5: 59.67,
            fee: 0.42
        },
        {
            nameHe: "ק.ס.מ - ביוכימאים",
            nameEn: "ק.ס.מ - ביוכימאים",
            companyHe: "ק.ס.מ",
            companyEn: "KSM",
            month: 0.84,
            year1: 12.69,
            year3: 40.84,
            year5: 40.67,
            fee: 0.51
        },
        {
            nameHe: "ק.ה.ר - רוקחים",
            nameEn: "ק.ה.ר - רוקחים",
            companyHe: "ק.ה.ר",
            companyEn: "KHR",
            month: 1.55,
            year1: 19.01,
            year3: 56.56,
            year5: 56.21,
            fee: 1.02
        },
        {
            nameHe: "מינהל-השתלמות - כללי",
            nameEn: "מינהל-השתלמות - כללי",
            companyHe: "מינהל",
            companyEn: "Minhal",
            month: 0.88,
            year1: 14.6,
            year3: 43.99,
            year5: 40.87,
            fee: 0.56
        },
        {
            nameHe: "ק.ל.ע כללי",
            nameEn: "ק.ל.ע כללי",
            companyHe: "ק.ל.ע",
            companyEn: "KLA",
            month: 1.42,
            year1: 15.12,
            year3: 43.97,
            year5: 47.64,
            fee: 0.49
        },
        {
            nameHe: "עובדי מדינה - כללי",
            nameEn: "עובדי מדינה - כללי",
            companyHe: "עובדי מדינה",
            companyEn: "Civil Servants",
            month: 1.18,
            year1: 15.66,
            year3: 47.04,
            year5: 54.12,
            fee: 0.38
        },
        {
            nameHe: "רעות - כללי",
            nameEn: "רעות - כללי",
            companyHe: "רעות",
            companyEn: "Reut",
            month: 1.02,
            year1: 14.7,
            year3: 42.73,
            year5: 44.68,
            fee: 0.46
        },
        {
            nameHe: "קרן השתלמות עוצ״מ",
            nameEn: "קרן השתלמות עוצ״מ",
            companyHe: "עוצ״מ",
            companyEn: "Otzma",
            month: 1.34,
            year1: 18.49,
            year3: 52.18,
            year5: 46.28,
            fee: 0.6
        },
        {
            nameHe: "רום קלאסי כללי",
            nameEn: "רום קלאסי כללי",
            companyHe: "רום",
            companyEn: "Rom",
            month: 1.46,
            year1: 15.66,
            year3: 45.95,
            year5: 50.28,
            fee: 0.31
        },
        {
            nameHe: "הראל השתלמות אשראי ואג״ח עם מניות",
            nameEn: "הראל השתלמות אשראי ואג״ח עם מניות",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.17,
            year1: 6.8,
            year3: 19.71,
            year5: 24.64,
            fee: 0.55
        },
        {
            nameHe: "אחים ואחיות - כללי",
            nameEn: "אחים ואחיות - כללי",
            companyHe: "אחים ואחיות",
            companyEn: "Nurses",
            month: 1.14,
            year1: 14.76,
            year3: 42.11,
            year5: 43.05,
            fee: 0.27
        },
        {
            nameHe: "יחד רופאים - כללי",
            nameEn: "יחד רופאים - כללי",
            companyHe: "יחד רופאים",
            companyEn: "Doctors Together",
            month: 0.72,
            year1: 13.44,
            year3: 37.64,
            year5: 45.09,
            fee: 0.38
        },
        {
            nameHe: "פ.ר.ח - כללי",
            nameEn: "פ.ר.ח - כללי",
            companyHe: "פ.ר.ח",
            companyEn: "PRCH",
            month: 0.63,
            year1: 14.32,
            year3: 41.14,
            year5: 36.44,
            fee: 0.76
        },
        {
            nameHe: "קרן השתלמות עובדי חברת חשמל",
            nameEn: "קרן השתלמות עובדי חברת חשמל",
            companyHe: "חברת חשמל",
            companyEn: "IEC",
            month: 1.2,
            year1: 16.55,
            year3: 46.16,
            year5: 49.73,
            fee: 0.34
        },
        {
            nameHe: "קרן החיסכון לצבא הקבע כללי",
            nameEn: "קרן החיסכון לצבא הקבע כללי",
            companyHe: "צבא הקבע",
            companyEn: "IDF Regular",
            month: 0.95,
            year1: 14.28,
            year3: 38.45,
            year5: 46.45,
            fee: 0.21
        },
        {
            nameHe: "כלל השתלמות כללי",
            nameEn: "כלל השתלמות כללי",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.23,
            year1: 16.77,
            year3: 40.99,
            year5: 49.98,
            fee: 0.54
        },
        {
            nameHe: "מיטב השתלמות עוקב מדדים גמיש",
            nameEn: "מיטב השתלמות עוקב מדדים גמיש",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: -0.92,
            year1: 5.38,
            year3: 41.23,
            year5: 38.45,
            fee: 0.63
        },
        {
            nameHe: "השתלמות שופטים",
            nameEn: "השתלמות שופטים",
            companyHe: "שופטים",
            companyEn: "Judges",
            month: 1.39,
            year1: 17.49,
            year3: 51.14,
            year5: 57.22,
            fee: 0.33
        },
        {
            nameHe: "אלטשולר שחם השתלמות אשראי ואג״ח עם מניות",
            nameEn: "אלטשולר שחם השתלמות אשראי ואג״ח עם מניות",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: -0.06,
            year1: 8.11,
            year3: 21.98,
            year5: 22.91,
            fee: 0.7
        },
        {
            nameHe: "מגדל השתלמות כללי",
            nameEn: "מגדל השתלמות כללי",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.11,
            year1: 14.82,
            year3: 40.12,
            year5: 49.26,
            fee: 0.54
        },
        {
            nameHe: "שיבולת - השתלמות",
            nameEn: "שיבולת - השתלמות",
            companyHe: "שיבולת",
            companyEn: "Shibolet",
            month: -0.56,
            year1: 4.24,
            year3: 16.14,
            year5: 18.7,
            fee: 0.21
        },
        {
            nameHe: "הפניקס השתלמות כספי",
            nameEn: "הפניקס השתלמות כספי",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.41,
            year1: 4.68,
            year3: 13.36,
            year5: 14.25,
            fee: 0.6
        },
        {
            nameHe: "הפניקס השתלמות אשראי ואג״ח",
            nameEn: "הפניקס השתלמות אשראי ואג״ח",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.13,
            year1: 5.97,
            year3: 17.57,
            year5: 16.38,
            fee: 0.64
        },
        {
            nameHe: "הראל השתלמות מניות",
            nameEn: "הראל השתלמות מניות",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.93,
            year1: 26.4,
            year3: 72.28,
            year5: 84.05,
            fee: 0.53
        },
        {
            nameHe: "מיטב השתלמות כהלכה",
            nameEn: "מיטב השתלמות כהלכה",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 0.69,
            year1: 14.08,
            year3: 39.76,
            year5: 40.96,
            fee: 0.72
        },
        {
            nameHe: "מנורה השתלמות כללי",
            nameEn: "מנורה השתלמות כללי",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.16,
            year1: 16.31,
            year3: 40.79,
            year5: 48.1,
            fee: 0.63
        },
        {
            nameHe: "מגדל השתלמות כספי",
            nameEn: "מגדל השתלמות כספי",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.47,
            year1: 4.71,
            year3: 13.54,
            year5: 13.26,
            fee: 0.5
        },
        {
            nameHe: "מגדל השתלמות אג״ח ממשלות",
            nameEn: "מגדל השתלמות אג״ח ממשלות",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.11,
            year1: 5.18,
            year3: 9.59,
            year5: 2.66,
            fee: 0.61
        },
        {
            nameHe: "מגדל השתלמות מניות",
            nameEn: "מגדל השתלמות מניות",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.8,
            year1: 25.48,
            year3: 76.24,
            year5: 85.32,
            fee: 0.49
        },
        {
            nameHe: "מיטב השתלמות כללי",
            nameEn: "מיטב השתלמות כללי",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 1.2,
            year1: 15.19,
            year3: 44.18,
            year5: 53.15,
            fee: 0.6
        },
        {
            nameHe: "מיטב השתלמות מניות",
            nameEn: "מיטב השתלמות מניות",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 2.14,
            year1: 26.46,
            year3: 79.5,
            year5: 84.79,
            fee: 0.55
        },
        {
            nameHe: "אנליסט השתלמות מניות",
            nameEn: "אנליסט השתלמות מניות",
            companyHe: "אנליסט",
            companyEn: "Analyst",
            month: 1.01,
            year1: 20.74,
            year3: 83.27,
            year5: 88.72,
            fee: 0.63
        },
        {
            nameHe: "אנליסט השתלמות כללי",
            nameEn: "אנליסט השתלמות כללי",
            companyHe: "אנליסט",
            companyEn: "Analyst",
            month: 0.76,
            year1: 15.1,
            year3: 47.75,
            year5: 56.77,
            fee: 0.62
        },
        {
            nameHe: "אנליסט השתלמות אשראי ואג״ח",
            nameEn: "אנליסט השתלמות אשראי ואג״ח",
            companyHe: "אנליסט",
            companyEn: "Analyst",
            month: 0.35,
            year1: 6.23,
            year3: 16.98,
            year5: 15.01,
            fee: 0.61
        },
        {
            nameHe: "אנליסט השתלמות אג״ח ממשלות",
            nameEn: "אנליסט השתלמות אג״ח ממשלות",
            companyHe: "אנליסט",
            companyEn: "Analyst",
            month: 0.31,
            year1: 6.0,
            year3: 13.87,
            year5: 9.6,
            fee: 0.58
        },
        {
            nameHe: "אנליסט השתלמות כספי",
            nameEn: "אנליסט השתלמות כספי",
            companyHe: "אנליסט",
            companyEn: "Analyst",
            month: 0.37,
            year1: 4.39,
            year3: 13.49,
            year5: 13.76,
            fee: 0.58
        },
        {
            nameHe: "אנליסט השתלמות אשראי ואג״ח עד 25% מניות",
            nameEn: "אנליסט השתלמות אשראי ואג״ח עד 25% מניות",
            companyHe: "אנליסט",
            companyEn: "Analyst",
            month: 0.48,
            year1: 10.05,
            year3: 28.1,
            year5: 26.4,
            fee: 0.5
        },
        {
            nameHe: "הפניקס השתלמות כללי",
            nameEn: "הפניקס השתלמות כללי",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.37,
            year1: 15.75,
            year3: 43.28,
            year5: 51.01,
            fee: 0.65
        },
        {
            nameHe: "הפניקס השתלמות מניות",
            nameEn: "הפניקס השתלמות מניות",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 2.0,
            year1: 25.89,
            year3: 74.65,
            year5: 84.02,
            fee: 0.58
        },
        {
            nameHe: "הפניקס השתלמות אשראי ואג״ח עם מניות",
            nameEn: "הפניקס השתלמות אשראי ואג״ח עם מניות",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.8,
            year1: 8.27,
            year3: 24.16,
            year5: 26.07,
            fee: 0.63
        },
        {
            nameHe: "הפניקס השתלמות עוקב מדדים גמיש",
            nameEn: "הפניקס השתלמות עוקב מדדים גמיש",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: -1.49,
            year1: 2.18,
            year3: 26.92,
            year5: 27.84,
            fee: 0.61
        },
        {
            nameHe: "הפניקס השתלמות שריעה",
            nameEn: "הפניקס השתלמות שריעה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: -2.46,
            year1: 4.21,
            year3: 51.95,
            year5: 41.53,
            fee: 0.67
        },
        {
            nameHe: "מנורה השתלמות כספי",
            nameEn: "מנורה השתלמות כספי",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 0.35,
            year1: 4.42,
            year3: 13.34,
            year5: 13.24,
            fee: 0.51
        },
        {
            nameHe: "מנורה השתלמות מניות",
            nameEn: "מנורה השתלמות מניות",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 2.12,
            year1: 27.94,
            year3: 75.72,
            year5: 84.54,
            fee: 0.49
        },
        {
            nameHe: "מנורה השתלמות מניות סחיר",
            nameEn: "מנורה השתלמות מניות סחיר",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: -0.45,
            year1: 13.04,
            year3: 62.44,
            year5: 66.13,
            fee: 0.5
        },
        {
            nameHe: "מור השתלמות - כללי",
            nameEn: "מור השתלמות - כללי",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.53,
            year1: 14.73,
            year3: 42.35,
            year5: 53.28,
            fee: 0.7
        },
        {
            nameHe: "מור השתלמות - מניות",
            nameEn: "מור השתלמות - מניות",
            companyHe: "מור",
            companyEn: "Mor",
            month: 1.46,
            year1: 25.86,
            year3: 74.08,
            year5: 87.76,
            fee: 0.71
        },
        {
            nameHe: "מור השתלמות - כספי",
            nameEn: "מור השתלמות - כספי",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.38,
            year1: 4.39,
            year3: 13.43,
            year5: 14.47,
            fee: 0.68
        },
        {
            nameHe: "ילין לפידות השתלמות כללי",
            nameEn: "ילין לפידות השתלמות כללי",
            companyHe: "ילין לפידות",
            companyEn: "Yelin Lapidot",
            month: 0.64,
            year1: 13.38,
            year3: 43.47,
            year5: 50.06,
            fee: 0.68
        },
        {
            nameHe: "ילין לפידות השתלמות מניות",
            nameEn: "ילין לפידות השתלמות מניות",
            companyHe: "ילין לפידות",
            companyEn: "Yelin Lapidot",
            month: 1.42,
            year1: 21.84,
            year3: 79.75,
            year5: 93.1,
            fee: 0.67
        },
        {
            nameHe: "ילין לפידות השתלמות אג״ח עם מניות",
            nameEn: "ילין לפידות השתלמות אג״ח עם מניות",
            companyHe: "ילין לפידות",
            companyEn: "Yelin Lapidot",
            month: 0.24,
            year1: 9.01,
            year3: 28.74,
            year5: 33.21,
            fee: 0.7
        },
        {
            nameHe: "ילין לפידות השתלמות אשראי ואג״ח",
            nameEn: "ילין לפידות השתלמות אשראי ואג״ח",
            companyHe: "ילין לפידות",
            companyEn: "Yelin Lapidot",
            month: 0.12,
            year1: 6.87,
            year3: 17.84,
            year5: 19.89,
            fee: 0.68
        },
        {
            nameHe: "ילין לפידות השתלמות אג״ח ממשלות",
            nameEn: "ילין לפידות השתלמות אג״ח ממשלות",
            companyHe: "ילין לפידות",
            companyEn: "Yelin Lapidot",
            month: 0.25,
            year1: 5.06,
            year3: 10.89,
            year5: 6.44,
            fee: 0.7
        },
        {
            nameHe: "אינפיניטי השתלמות משולב סחיר",
            nameEn: "אינפיניטי השתלמות משולב סחיר",
            companyHe: "אינפיניטי",
            companyEn: "Infiniti",
            month: 4.95,
            year1: 47.87,
            year3: 127.49,
            year5: 133.57,
            fee: 0.59
        },
        {
            nameHe: "אינפיניטי השתלמות מניות",
            nameEn: "אינפיניטי השתלמות מניות",
            companyHe: "אינפיניטי",
            companyEn: "Infiniti",
            month: 1.5,
            year1: 24.52,
            year3: 94.32,
            year5: 106.72,
            fee: 0.59
        },
        {
            nameHe: "אינפיניטי השתלמות אשראי ואג״ח",
            nameEn: "אינפיניטי השתלמות אשראי ואג״ח",
            companyHe: "אינפיניטי",
            companyEn: "Infiniti",
            month: 0.3,
            year1: 6.98,
            year3: 23.57,
            year5: 21.74,
            fee: 0.68
        },
        {
            nameHe: "אינפיניטי השתלמות אג״ח ממשלות",
            nameEn: "אינפיניטי השתלמות אג״ח ממשלות",
            companyHe: "אינפיניטי",
            companyEn: "Infiniti",
            month: 0.42,
            year1: 5.28,
            year3: 12.19,
            year5: 7.47,
            fee: 0.35
        },
        {
            nameHe: "אלטשולר שחם השתלמות כללי",
            nameEn: "אלטשולר שחם השתלמות כללי",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: 0.05,
            year1: 12.87,
            year3: 38.73,
            year5: 36.11,
            fee: 0.69
        },
        {
            nameHe: "אלטשולר שחם השתלמות מניות",
            nameEn: "אלטשולר שחם השתלמות מניות",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: 0.18,
            year1: 21.02,
            year3: 70.06,
            year5: 59.08,
            fee: 0.68
        },
        {
            nameHe: "אלטשולר שחם השתלמות אשראי ואג״ח",
            nameEn: "אלטשולר שחם השתלמות אשראי ואג״ח",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: -0.21,
            year1: 5.24,
            year3: 15.37,
            year5: 15.74,
            fee: 0.66
        },
        {
            nameHe: "אלטשולר שחם השתלמות כספי",
            nameEn: "אלטשולר שחם השתלמות כספי",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: 0.31,
            year1: 5.21,
            year3: 14.82,
            year5: 15.88,
            fee: 0.66
        },
        {
            nameHe: "אלטשולר שחם השתלמות אג״ח ממשלות",
            nameEn: "אלטשולר שחם השתלמות אג״ח ממשלות",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: 0.08,
            year1: 6.23,
            year3: 14.93,
            year5: 15.23,
            fee: 0.7
        },
        {
            nameHe: "כלל השתלמות מניות",
            nameEn: "כלל השתלמות מניות",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 2.09,
            year1: 27.45,
            year3: 69.76,
            year5: 75.98,
            fee: 0.53
        },
        {
            nameHe: "כלל השתלמות אשראי ואג״ח",
            nameEn: "כלל השתלמות אשראי ואג״ח",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.36,
            year1: 6.76,
            year3: 18.33,
            year5: 18.45,
            fee: 0.54
        },
        {
            nameHe: "כלל השתלמות כספי",
            nameEn: "כלל השתלמות כספי",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.39,
            year1: 5.21,
            year3: 15.22,
            year5: 16.22,
            fee: 0.52
        },
        {
            nameHe: "כלל השתלמות הלכה",
            nameEn: "כלל השתלמות הלכה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.1,
            year1: 15.22,
            year3: 39.43,
            year5: 39.41,
            fee: 0.56
        },
        {
            nameHe: "מיטב השתלמות אשראי ואג״ח",
            nameEn: "מיטב השתלמות אשראי ואג״ח",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 0.47,
            year1: 6.8,
            year3: 19.49,
            year5: 25.18,
            fee: 0.59
        },
        {
            nameHe: "מיטב השתלמות אג״ח ממשלות",
            nameEn: "מיטב השתלמות אג״ח ממשלות",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 0.22,
            year1: 6.02,
            year3: 15.4,
            year5: 15.78,
            fee: 0.62
        },
        {
            nameHe: "מיטב השתלמות כספי",
            nameEn: "מיטב השתלמות כספי",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 0.36,
            year1: 4.64,
            year3: 13.98,
            year5: 14.2,
            fee: 0.52
        },
        {
            nameHe: "מיטב השתלמות אשראי ואג״ח עם מניות",
            nameEn: "מיטב השתלמות אשראי ואג״ח עם מניות",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 0.81,
            year1: 11.16,
            year3: 31.98,
            year5: 33.66,
            fee: 0.57
        },
        {
            nameHe: "הראל השתלמות אשראי ואג״ח",
            nameEn: "הראל השתלמות אשראי ואג״ח",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.2,
            year1: 7.01,
            year3: 15.06,
            year5: 13.11,
            fee: 0.6
        },
        {
            nameHe: "הראל השתלמות משולב סחיר",
            nameEn: "הראל השתלמות משולב סחיר",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -2.06,
            year1: 2.34,
            year3: 32.7,
            year5: 32.7,
            fee: 0.54
        },
        {
            nameHe: "הראל השתלמות הלכה",
            nameEn: "הראל השתלמות הלכה",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.21,
            year1: 14.81,
            year3: 39.4,
            year5: 41.96,
            fee: 0.67
        },
        {
            nameHe: "מגדל השתלמות הלכה",
            nameEn: "מגדל השתלמות הלכה",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.04,
            year1: 14.74,
            year3: 40.34,
            year5: 40.94,
            fee: 0.59
        },
        {
            nameHe: "מגדל השתלמות עוקב מדדים גמיש",
            nameEn: "מגדל השתלמות עוקב מדדים גמיש",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: -1.1,
            year1: 0.35,
            year3: 16.42,
            year5: 17.24,
            fee: 0.54
        },
        {
            nameHe: "רעות - מניות",
            nameEn: "רעות - מניות",
            companyHe: "רעות",
            companyEn: "Reut",
            month: 1.87,
            year1: 26.18,
            year3: 89.54,
            year5: 100.21,
            fee: 0.45
        },
        {
            nameHe: "רעות - אשראי ואג״ח",
            nameEn: "רעות - אשראי ואג״ח",
            companyHe: "רעות",
            companyEn: "Reut",
            month: 0.16,
            year1: 4.65,
            year3: 10.14,
            year5: 14.4,
            fee: 0.46
        },
        {
            nameHe: "רעות - כספי",
            nameEn: "רעות - כספי",
            companyHe: "רעות",
            companyEn: "Reut",
            month: 0.37,
            year1: 4.26,
            year3: 13.09,
            year5: 7.9,
            fee: 0.46
        },
        {
            nameHe: "רום ספיר מניות",
            nameEn: "רום ספיר מניות",
            companyHe: "רום",
            companyEn: "Rom",
            month: 2.32,
            year1: 24.98,
            year3: 93.3,
            year5: 97.41,
            fee: 0.3
        },
        {
            nameHe: "רום רביד אשראי ואג״ח",
            nameEn: "רום רביד אשראי ואג״ח",
            companyHe: "רום",
            companyEn: "Rom",
            month: 0.44,
            year1: 5.85,
            year3: 16.39,
            year5: 18.11,
            fee: 0.31
        },
        {
            nameHe: "הנדסאים השתלמות - מניות",
            nameEn: "הנדסאים השתלמות - מניות",
            companyHe: "הנדסאים",
            companyEn: "Engineers",
            month: 1.77,
            year1: 21.7,
            year3: 75.6,
            year5: 79.24,
            fee: 0.35
        },
        {
            nameHe: "הנדסאים השתלמות - אשראי ואג״ח",
            nameEn: "הנדסאים השתלמות - אשראי ואג״ח",
            companyHe: "הנדסאים",
            companyEn: "Engineers",
            month: 0.41,
            year1: 8.42,
            year3: 26.18,
            year5: 21.42,
            fee: 0.35
        },
        {
            nameHe: "השתלמות משפטנים מניות",
            nameEn: "השתלמות משפטנים מניות",
            companyHe: "משפטנים",
            companyEn: "Lawyers Fund",
            month: 2.6,
            year1: 31.3,
            year3: 103.43,
            year5: 102.13,
            fee: 0.41
        },
        {
            nameHe: "השתלמות משפטנים אשראי ואג״ח",
            nameEn: "השתלמות משפטנים אשראי ואג״ח",
            companyHe: "משפטנים",
            companyEn: "Lawyers Fund",
            month: 0.75,
            year1: 11.58,
            year3: 21.16,
            year5: 18.03,
            fee: 0.42
        },
        {
            nameHe: "מינהל - מניות",
            nameEn: "מינהל - מניות",
            companyHe: "מינהל",
            companyEn: "Minhal",
            month: 1.84,
            year1: 22.91,
            year3: 84.42,
            year5: 79.95,
            fee: 0.55
        },
        {
            nameHe: "מינהל - אשראי ואג״ח",
            nameEn: "מינהל - אשראי ואג״ח",
            companyHe: "מינהל",
            companyEn: "Minhal",
            month: 0.23,
            year1: 4.95,
            year3: 14.94,
            year5: 19.46,
            fee: 0.56
        },
        {
            nameHe: "אומגה קרן מניות",
            nameEn: "אומגה קרן מניות",
            companyHe: "אומגה",
            companyEn: "Omega",
            month: 2.15,
            year1: 28.2,
            year3: 78.06,
            year5: 86.57,
            fee: 0.44
        },
        {
            nameHe: "אומגה אשראי ואג״ח",
            nameEn: "אומגה אשראי ואג״ח",
            companyHe: "אומגה",
            companyEn: "Omega",
            month: 0.4,
            year1: 8.61,
            year3: 15.88,
            year5: 10.41,
            fee: 0.53
        },
        {
            nameHe: "קרן החיסכון לצבא מניות",
            nameEn: "קרן החיסכון לצבא מניות",
            companyHe: "צבא הקבע",
            companyEn: "IDF Regular",
            month: 1.96,
            year1: 26.73,
            year3: 71.96,
            year5: 81.4,
            fee: 0.19
        },
        {
            nameHe: "קרן החיסכון לצבא אשראי ואג״ח",
            nameEn: "קרן החיסכון לצבא אשראי ואג״ח",
            companyHe: "צבא הקבע",
            companyEn: "IDF Regular",
            month: 0.07,
            year1: 5.91,
            year3: 10.77,
            year5: 8.45,
            fee: 0.19
        },
        {
            nameHe: "עובדי מדינה - אג״ח ממשלות",
            nameEn: "עובדי מדינה - אג״ח ממשלות",
            companyHe: "עובדי מדינה",
            companyEn: "Civil Servants",
            month: 0.25,
            year1: 5.26,
            year3: 13.06,
            year5: 12.14,
            fee: 0.38
        },
        {
            nameHe: "עובדי מדינה - אג״ח עד 25% מניות",
            nameEn: "עובדי מדינה - אג״ח עד 25% מניות",
            companyHe: "עובדי מדינה",
            companyEn: "Civil Servants",
            month: 0.56,
            year1: 8.49,
            year3: 24.75,
            year5: 24.25,
            fee: 0.38
        },
        {
            nameHe: "אנליסט השתלמות משולב סחיר",
            nameEn: "אנליסט השתלמות משולב סחיר",
            companyHe: "אנליסט",
            companyEn: "Analyst",
            month: -2.04,
            year1: -1.6,
            year3: 29.49,
            year5: 31.14,
            fee: 0.62
        },
        {
            nameHe: "אקדמאים - מניות",
            nameEn: "אקדמאים - מניות",
            companyHe: "אקדמאים",
            companyEn: "Academics",
            month: 1.95,
            year1: 24.62,
            year3: 80.51,
            year5: 82.02,
            fee: 0.28
        },
        {
            nameHe: "אקדמאים - אשראי ואג״ח",
            nameEn: "אקדמאים - אשראי ואג״ח",
            companyHe: "אקדמאים",
            companyEn: "Academics",
            month: 0.42,
            year1: 6.44,
            year3: 14.45,
            year5: 12.41,
            fee: 0.28
        },
        {
            nameHe: "אחים ואחיות - אשראי ואג״ח",
            nameEn: "אחים ואחיות - אשראי ואג״ח",
            companyHe: "אחים ואחיות",
            companyEn: "Nurses",
            month: 0.4,
            year1: 5.58,
            year3: 16.28,
            year5: 15.35,
            fee: 0.27
        },
        {
            nameHe: "יחד רופאים - אג״ח ממשלות",
            nameEn: "יחד רופאים - אג״ח ממשלות",
            companyHe: "יחד רופאים",
            companyEn: "Doctors Together",
            month: 0.26,
            year1: 4.68,
            year3: 12.02,
            year5: 10.34,
            fee: 0.38
        },
        {
            nameHe: "קרן האוניברסיטה העברית כללי",
            nameEn: "קרן האוניברסיטה העברית כללי",
            companyHe: "האוניברסיטה העברית",
            companyEn: "האוניברסיטה העברית",
            month: 0.75,
            year1: 11.32,
            year3: 34.93,
            year5: 43.55,
            fee: 0.44
        },
        {
            nameHe: "ק.ל.ע אג״ח עד 25% מניות",
            nameEn: "ק.ל.ע אג״ח עד 25% מניות",
            companyHe: "ק.ל.ע",
            companyEn: "KLA",
            month: 0.46,
            year1: 8.09,
            year3: 24.84,
            year5: 23.89,
            fee: 0.49
        }
,
        {
            nameHe: "מגדל מקפת קרנות פנסיה וקופות גמל בע״מ",
            nameEn: "מגדל מקפת קרנות פנסיה וקופות גמל בע״מ",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.28,
            year1: 6.23,
            year3: 17.82,
            year5: 14.59
        },
        {
            nameHe: "קרן השתלמות למורים בבתיה״ס העי״ס במכללות ובסמינרים מסלול כללי",
            nameEn: "קרן השתלמות למורים בבתיה״ס העי״ס במכללות ובסמינרים מסלול כללי",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.22,
            year1: 14.99,
            year3: 45.76,
            year5: 56.1
        },
        {
            nameHe: "קרנות השתלמות למורים ולגננות - חברה מנהלת בע״מ",
            nameEn: "קרנות השתלמות למורים ולגננות - חברה מנהלת בע״מ",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.91,
            year1: 14.32,
            year3: 43.65,
            year5: 46.4
        },
        {
            nameHe: "קרנות השתלמות למורים תיכוניים, מורי סמינרים ומפקחים - חברה מנהלת בע״מ",
            nameEn: "קרנות השתלמות למורים תיכוניים, מורי סמינרים ומפקחים - חברה מנהלת בע״מ",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.92,
            year1: 14.83,
            year3: 44.33,
            year5: 48.3
        },
        {
            nameHe: "מנורה מבטחים והסתדרות המהנדסים ניהול קופות גמל בע״מ",
            nameEn: "מנורה מבטחים והסתדרות המהנדסים ניהול קופות גמל בע״מ",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 1.2,
            year1: 16.0,
            year3: 43.72,
            year5: 49.81
        },
        {
            nameHe: "החברה לניהול קרן השתלמות לאקדמאים במדעי החברה והרוח בע״מ",
            nameEn: "החברה לניהול קרן השתלמות לאקדמאים במדעי החברה והרוח בע״מ",
            companyHe: "אחר",
            companyEn: "Other",
            month: 1.06,
            year1: 14.2,
            year3: 42.02,
            year5: 43.55
        },
        {
            nameHe: "החברה לניהול קרן ההשתלמות להנדסאים וטכנאים בע״מ",
            nameEn: "החברה לניהול קרן ההשתלמות להנדסאים וטכנאים בע״מ",
            companyHe: "אחר",
            companyEn: "Other",
            month: 0.78,
            year1: 14.65,
            year3: 44.84,
            year5: 44.56
        },
        {
            nameHe: "החברה לניהול קרן השתלמות למשפטנים בע״מ",
            nameEn: "החברה לניהול קרן השתלמות למשפטנים בע״מ",
            companyHe: "אחר",
            companyEn: "Other",
            month: 1.63,
            year1: 18.4,
            year3: 54.1,
            year5: 59.67
        },
        {
            nameHe: "החברה לניהול קרן השתלמות לביוכימאים ומקרוביולוגים בע״מ",
            nameEn: "החברה לניהול קרן השתלמות לביוכימאים ומקרוביולוגים בע״מ",
            companyHe: "אחר",
            companyEn: "Other",
            month: 0.84,
            year1: 12.69,
            year3: 40.84,
            year5: 40.67
        },
        {
            nameHe: "הראל פנסיה וגמל בע״מ",
            nameEn: "הראל פנסיה וגמל בע״מ",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.91,
            year1: 14.47,
            year3: 37.36,
            year5: 45.6
        },
        {
            nameHe: "עוצ״מ חברה לניהול קופות גמל והשתלמות בע״מ",
            nameEn: "עוצ״מ חברה לניהול קופות גמל והשתלמות בע״מ",
            companyHe: "אחר",
            companyEn: "Other",
            month: 1.34,
            year1: 18.49,
            year3: 52.18,
            year5: 46.28
        },
        {
            nameHe: "החברה המנהלת של רום קרן ההשתלמות לעובדי הרשויות המקומיות בע״מ",
            nameEn: "החברה המנהלת של רום קרן ההשתלמות לעובדי הרשויות המקומיות בע״מ",
            companyHe: "אחר",
            companyEn: "Other",
            month: 1.46,
            year1: 15.66,
            year3: 45.95,
            year5: 50.28
        },
        {
            nameHe: "יהב אחים ואחיות - חברה לניהול קופות גמל בע״מ",
            nameEn: "יהב אחים ואחיות - חברה לניהול קופות גמל בע״מ",
            companyHe: "אחר",
            companyEn: "Other",
            month: 1.14,
            year1: 14.76,
            year3: 42.11,
            year5: 43.05
        },
        {
            nameHe: "יחד רופאים - חברה לניהול קופות גמל בע״מ",
            nameEn: "יחד רופאים - חברה לניהול קופות גמל בע״מ",
            companyHe: "אחר",
            companyEn: "Other",
            month: 0.72,
            year1: 13.44,
            year3: 37.64,
            year5: 45.09
        },
        {
            nameHe: "יהב - פ.ר.ח. - חברה לניהול קופות גמל בע״מ",
            nameEn: "יהב - פ.ר.ח. - חברה לניהול קופות גמל בע״מ",
            companyHe: "אחר",
            companyEn: "Other",
            month: 0.63,
            year1: 14.32,
            year3: 41.14,
            year5: 36.44
        },
        {
            nameHe: "החברה המנהלת של קרן השתלמות של עובדי חברת החשמל לישראל בע״מ",
            nameEn: "החברה המנהלת של קרן השתלמות של עובדי חברת החשמל לישראל בע״מ",
            companyHe: "אחר",
            companyEn: "Other",
            month: 1.2,
            year1: 16.55,
            year3: 46.16,
            year5: 49.73
        },
        {
            nameHe: "קרן החסכון לצבא הקבע - חברה לניהול קופות גמל בע״מ",
            nameEn: "קרן החסכון לצבא הקבע - חברה לניהול קופות גמל בע״מ",
            companyHe: "אחר",
            companyEn: "Other",
            month: 0.95,
            year1: 14.28,
            year3: 38.45,
            year5: 46.45
        },
        {
            nameHe: "כלל פנסיה וגמל בע״מ",
            nameEn: "כלל פנסיה וגמל בע״מ",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.23,
            year1: 16.77,
            year3: 40.99,
            year5: 49.98
        },
        {
            nameHe: "החברה לניהול קרן השתלמות לשופטים בע״מ",
            nameEn: "החברה לניהול קרן השתלמות לשופטים בע״מ",
            companyHe: "אחר",
            companyEn: "Other",
            month: 1.39,
            year1: 17.49,
            year3: 51.14,
            year5: 57.22
        },
        {
            nameHe: "קרן השתלמות למורים בבתי הספר העי״ס במכללות ובסמינרים מסלול כללי",
            nameEn: "קרן השתלמות למורים בבתי הספר העי״ס במכללות ובסמינרים מסלול כללי",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.24,
            year1: 14.76,
            year3: 45.51,
            year5: 54.58
        },
        {
            nameHe: "ק.ה.ר - קרן השתלמות לרוקחים בע״מ",
            nameEn: "ק.ה.ר - קרן השתלמות לרוקחים בע״מ",
            companyHe: "אחר",
            companyEn: "Other",
            month: 1.55,
            year1: 19.01,
            year3: 56.56,
            year5: 56.21
        },
        {
            nameHe: "החברה המנהלת של מינהל קרן ההשתלמות לפקידים עובדי המנהל והשירותים בע״מ",
            nameEn: "החברה המנהלת של מינהל קרן ההשתלמות לפקידים עובדי המנהל והשירותים בע״מ",
            companyHe: "אחר",
            companyEn: "Other",
            month: 0.88,
            year1: 14.6,
            year3: 43.99,
            year5: 40.87
        },
        {
            nameHe: "ק.ל.ע. - חברה לניהול קרן השתלמות לעובדים סוציאליים בע״מ",
            nameEn: "ק.ל.ע. - חברה לניהול קרן השתלמות לעובדים סוציאליים בע״מ",
            companyHe: "אחר",
            companyEn: "Other",
            month: 1.42,
            year1: 15.12,
            year3: 43.97,
            year5: 47.64
        },
        {
            nameHe: "החברה לניהול קרן ההשתלמות לעובדי המדינה בע״מ",
            nameEn: "החברה לניהול קרן ההשתלמות לעובדי המדינה בע״מ",
            companyHe: "אחר",
            companyEn: "Other",
            month: 1.18,
            year1: 15.66,
            year3: 47.04,
            year5: 54.12
        },
        {
            nameHe: "רעות חברה לניהול קופות גמל בע״מ",
            nameEn: "רעות חברה לניהול קופות גמל בע״מ",
            companyHe: "אחר",
            companyEn: "Other",
            month: 1.02,
            year1: 14.7,
            year3: 42.73,
            year5: 44.68
        },
        {
            nameHe: "שיבולת - חברה לניהול קופות גמל בע״מ",
            nameEn: "שיבולת - חברה לניהול קופות גמל בע״מ",
            companyHe: "אחר",
            companyEn: "Other",
            month: -0.56,
            year1: 4.24,
            year3: 16.14,
            year5: 18.7
        },
        {
            nameHe: "מיטב גמל ופנסיה בע״מ",
            nameEn: "מיטב גמל ופנסיה בע״מ",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 0.69,
            year1: 14.08,
            year3: 39.76,
            year5: 40.96
        },
        {
            nameHe: "מנורה מבטחים פנסיה וגמל בע״מ",
            nameEn: "מנורה מבטחים פנסיה וגמל בע״מ",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 1.16,
            year1: 16.31,
            year3: 40.79,
            year5: 48.1
        },
        {
            nameHe: "אינפיניטי השתלמות, גמל ופנסיה בע״מ",
            nameEn: "אינפיניטי השתלמות, גמל ופנסיה בע״מ",
            companyHe: "אינפיניטי",
            companyEn: "Infinity",
            month: 0.3,
            year1: 6.98,
            year3: 23.57,
            year5: 21.74
        },
        {
            nameHe: "אלטשולר שחם גמל ופנסיה בע״מ",
            nameEn: "אלטשולר שחם גמל ופנסיה בע״מ",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: 0.05,
            year1: 12.87,
            year3: 38.73,
            year5: 36.11
        },
        {
            nameHe: "אנליסט קופות גמל בע״מ",
            nameEn: "אנליסט קופות גמל בע״מ",
            companyHe: "אנליסט",
            companyEn: "Analyst",
            month: 0.76,
            year1: 15.1,
            year3: 47.75,
            year5: 56.77
        },
        {
            nameHe: "הפניקס פנסיה וגמל בע״מ",
            nameEn: "הפניקס פנסיה וגמל בע״מ",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.37,
            year1: 15.75,
            year3: 43.28,
            year5: 51.01
        },
        {
            nameHe: "אלטשולר שחם השתלמות כללי ב'",
            nameEn: "אלטשולר שחם השתלמות כללי ב'",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.18,
            year1: 14.4,
            year3: 43.76,
            year5: 40.06
        },
        {
            nameHe: "קרן השתלמות לאקדמאים במדעי החברה והרוח מסלול אשראי ואג״ח",
            nameEn: "קרן השתלמות לאקדמאים במדעי החברה והרוח מסלול אשראי ואג״ח",
            companyHe: "אחר",
            companyEn: "Other",
            month: 0.42,
            year1: 6.44,
            year3: 14.45,
            year5: 12.41
        },
        {
            nameHe: "סלייס השתלמות בניהול אישי",
            nameEn: "סלייס השתלמות בניהול אישי",
            companyHe: "אחר",
            companyEn: "Other",
            month: 0.0,
            year1: 0.0,
            year3: 0.0,
            year5: 0.34
        },
        {
            nameHe: "גלובלנט ניהול קופות גמל בע״מ",
            nameEn: "גלובלנט ניהול קופות גמל בע״מ",
            companyHe: "אחר",
            companyEn: "Other",
            month: 0.0,
            year1: 0.0,
            year3: 10.81,
            year5: 0.29
        },
        {
            nameHe: "הפניקס השתלמות בניהול אישי",
            nameEn: "הפניקס השתלמות בניהול אישי",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.0,
            year1: 0.0,
            year3: 0.0,
            year5: 0.24
        },
        {
            nameHe: "מיטב השתלמות בניהול אישי",
            nameEn: "מיטב השתלמות בניהול אישי",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 0.0,
            year1: 0.0,
            year3: 0.0,
            year5: 0.3
        },
        {
            nameHe: "גלובל נט השתלמות בניהול אישי",
            nameEn: "גלובל נט השתלמות בניהול אישי",
            companyHe: "אחר",
            companyEn: "Other",
            month: 0.0,
            year1: 0.0,
            year3: 0.0,
            year5: 0.31
        },
        {
            nameHe: "קרן השתלמות למורים בבתי הספר העי״ס במכללות ובסמינרים מסלול אשראי ואג״ח",
            nameEn: "קרן השתלמות למורים בבתי הספר העי״ס במכללות ובסמינרים מסלול אשראי ואג״ח",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.14,
            year1: 4.58,
            year3: 13.24,
            year5: 8.44
        },
        {
            nameHe: "קרן השתלמות למורים בבתיה״ס העי״ס במכללות ובסמינרים מסלול הלכה",
            nameEn: "קרן השתלמות למורים בבתיה״ס העי״ס במכללות ובסמינרים מסלול הלכה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.31,
            year1: 12.1,
            year3: 37.21,
            year5: 38.48
        },
        {
            nameHe: "קרן השתלמות למורים בבתי הספר העי״ס במכללות ובסמינרים מסלול הלכה",
            nameEn: "קרן השתלמות למורים בבתי הספר העי״ס במכללות ובסמינרים מסלול הלכה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.4,
            year1: 12.76,
            year3: 37.75,
            year5: 39.31
        },
        {
            nameHe: "רעות - אשראי ואג״ח עד 25% מניות",
            nameEn: "רעות - אשראי ואג״ח עד 25% מניות",
            companyHe: "אחר",
            companyEn: "Other",
            month: 0.63,
            year1: 10.44,
            year3: 24.83,
            year5: 24.6
        },
        {
            nameHe: "מור השתלמות -עוקב מדד S&P 500",
            nameEn: "מור השתלמות -עוקב מדד S&P 500",
            companyHe: "מור",
            companyEn: "Mor",
            month: -1.68,
            year1: 2.84,
            year3: 64.77,
            year5: 82.84
        },
        {
            nameHe: "מור השתלמות -כספי (שקלי)",
            nameEn: "מור השתלמות -כספי (שקלי)",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.38,
            year1: 4.39,
            year3: 13.43,
            year5: 14.47
        },
        {
            nameHe: "מנורה השתלמות אג״ח עד 25% מניות",
            nameEn: "מנורה השתלמות אג״ח עד 25% מניות",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.23,
            year1: 5.55,
            year3: 17.22,
            year5: 16.96
        },
        {
            nameHe: "מנורה השתלמות עוקב מדדים גמיש",
            nameEn: "מנורה השתלמות עוקב מדדים גמיש",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 1.06,
            year1: 12.77,
            year3: 38.95,
            year5: 39.1
        },
        {
            nameHe: "מור גמל ופנסיה בע״מ",
            nameEn: "מור גמל ופנסיה בע״מ",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.53,
            year1: 14.73,
            year3: 42.35,
            year5: 53.28
        },
        {
            nameHe: "מנורה השתלמות עוקב מדדי אגח עד 25% מניות",
            nameEn: "מנורה השתלמות עוקב מדדי אגח עד 25% מניות",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.74,
            year1: 9.9,
            year3: 23.84,
            year5: 19.43
        },
        {
            nameHe: "סלייס השתלמות כללי",
            nameEn: "סלייס השתלמות כללי",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -0.68,
            year1: 0.5,
            year3: 11926.0,
            year5: null
        },
        {
            nameHe: "סלייס השתלמות אג״ח אג״ח",
            nameEn: "סלייס השתלמות אג״ח אג״ח",
            companyHe: "אחר",
            companyEn: "Other",
            month: -0.48,
            year1: -0.82,
            year3: null,
            year5: 11928.0
        },
        {
            nameHe: "סלייס השתלמות מניות פאסיבי",
            nameEn: "סלייס השתלמות מניות פאסיבי",
            companyHe: "אחר",
            companyEn: "Other",
            month: 2.04,
            year1: 7.78,
            year3: 11931.0,
            year5: null
        },
        {
            nameHe: "סלייס השתלמות מדד חו״ל",
            nameEn: "סלייס השתלמות מדד חו״ל",
            companyHe: "אחר",
            companyEn: "Other",
            month: -2.32,
            year1: -2.13,
            year3: null,
            year5: 11934.0
        },
        {
            nameHe: "אינפיניטי השתלמות אשראי ואג״ח עם מניות (עד 25% מניות)",
            nameEn: "אינפיניטי השתלמות אשראי ואג״ח עם מניות (עד 25% מניות)",
            companyHe: "אינפיניטי",
            companyEn: "Infinity",
            month: 0.5,
            year1: 9.33,
            year3: 30.82,
            year5: 24.7
        },
        {
            nameHe: "כלל השתלמות אשראי ואג״ח עם מניות(עד 25% מניות)",
            nameEn: "כלל השתלמות אשראי ואג״ח עם מניות(עד 25% מניות)",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.63,
            year1: 9.94,
            year3: 26.45,
            year5: 24.51
        },
        {
            nameHe: "מור השתלמות - אשראי ואג״ח עם מניות (עד 25% מניות)",
            nameEn: "מור השתלמות - אשראי ואג״ח עם מניות (עד 25% מניות)",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.2,
            year1: 9.21,
            year3: 29.97,
            year5: 36.09
        },
        {
            nameHe: "מיטב השתלמות עוקב מדד S&P500",
            nameEn: "מיטב השתלמות עוקב מדד S&P500",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: -2.06,
            year1: 3.01,
            year3: 67.98,
            year5: 92.39
        },
        {
            nameHe: "הפניקס השתלמות עוקב מדד s&p500",
            nameEn: "הפניקס השתלמות עוקב מדד s&p500",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: -1.97,
            year1: 2.94,
            year3: 67.36,
            year5: 92.79
        },
        {
            nameHe: "כלל השתלמות עוקב מדד s&p 500",
            nameEn: "כלל השתלמות עוקב מדד s&p 500",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -1.83,
            year1: 2.51,
            year3: 65.58,
            year5: 89.41
        },
        {
            nameHe: "הראל השתלמות - עוקב מדד s&p 500",
            nameEn: "הראל השתלמות - עוקב מדד s&p 500",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -1.86,
            year1: 2.64,
            year3: 67.66,
            year5: 0.5
        },
        {
            nameHe: "אנליסט השתלמות עוקב מדד S&P500",
            nameEn: "אנליסט השתלמות עוקב מדד S&P500",
            companyHe: "אנליסט",
            companyEn: "Analyst",
            month: -1.84,
            year1: 2.55,
            year3: 64.83,
            year5: 0.62
        },
        {
            nameHe: "מור השתלמות - אשראי ואג״ח",
            nameEn: "מור השתלמות - אשראי ואג״ח",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.54,
            year1: 8.73,
            year3: 0.64,
            year5: 398.29
        },
        {
            nameHe: "ילין לפידות קרן השתלמות מסלול עוקב מדדים גמיש",
            nameEn: "ילין לפידות קרן השתלמות מסלול עוקב מדדים גמיש",
            companyHe: "ילין לפידות",
            companyEn: "Yelin Lapidot",
            month: -1.15,
            year1: 2.86,
            year3: 0.66,
            year5: 461.87
        },
        {
            nameHe: "כלל השתלמות עוקב מדדים גמיש",
            nameEn: "כלל השתלמות עוקב מדדים גמיש",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -1.95,
            year1: 0.08,
            year3: 0.49,
            year5: 197.3
        },
        {
            nameHe: "הראל השתלמות מסלול כספי (שקלי)",
            nameEn: "הראל השתלמות מסלול כספי (שקלי)",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.37,
            year1: 4.55,
            year3: 0.5,
            year5: 110.12
        },
        {
            nameHe: "קרן השתלמות של עובדי האוניברסיטה העברית מניות מניות",
            nameEn: "קרן השתלמות של עובדי האוניברסיטה העברית מניות מניות",
            companyHe: "אחר",
            companyEn: "Other",
            month: 1.39,
            year1: 18.64,
            year3: 0.42,
            year5: 31.88
        },
        {
            nameHe: "כלל השתלמות עוקב מדדי מניות",
            nameEn: "כלל השתלמות עוקב מדדי מניות",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -1.2,
            year1: 1.95,
            year3: 0.52,
            year5: 255.87
        },
        {
            nameHe: "ילין לפידות קרן השתלמות מסלול עוקב מדד s&p 500",
            nameEn: "ילין לפידות קרן השתלמות מסלול עוקב מדד s&p 500",
            companyHe: "ילין לפידות",
            companyEn: "Yelin Lapidot",
            month: -1.73,
            year1: 2.54,
            year3: 0.68,
            year5: 1072.35
        },
        {
            nameHe: "אלטשולר שחם השתלמות עוקב מדד S&P 500",
            nameEn: "אלטשולר שחם השתלמות עוקב מדד S&P 500",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: -1.62,
            year1: 2.88,
            year3: 0.66,
            year5: 1248.4
        },
        {
            nameHe: "אלטשולר שחם השתלמות עוקב מדדי מניות",
            nameEn: "אלטשולר שחם השתלמות עוקב מדדי מניות",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: -1.88,
            year1: 8.66,
            year3: 0.59,
            year5: 1174.45
        },
        {
            nameHe: "אינפיניטי השתלמות עוקב מדד s&p 500",
            nameEn: "אינפיניטי השתלמות עוקב מדד s&p 500",
            companyHe: "אינפיניטי",
            companyEn: "Infinity",
            month: -1.77,
            year1: 5.97,
            year3: 0.6,
            year5: 36.14
        },
        {
            nameHe: "הפניקס השתלמות עוקב מדדי מניות",
            nameEn: "הפניקס השתלמות עוקב מדדי מניות",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: -2.1,
            year1: 3.02,
            year3: 0.58,
            year5: 272.57
        },
        {
            nameHe: "אלטשולר שחם השתלמות עוקב מדדים גמיש",
            nameEn: "אלטשולר שחם השתלמות עוקב מדדים גמיש",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: 0.18,
            year1: 14.02,
            year3: 0.61,
            year5: 175.48
        },
        {
            nameHe: "קרן השתלמות לאקדמאים במדעי החברה והרוח מסלול כללי עוקבי מדדים עוקב מדד s&p 500",
            nameEn: "קרן השתלמות לאקדמאים במדעי החברה והרוח מסלול כללי עוקבי מדדים עוקב מדד s&p 500",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -1.79,
            year1: 2.29,
            year3: 0.28,
            year5: 66.32
        },
        {
            nameHe: "יחד קרן השתלמות לרופאים- עוקב מדד S&P 500",
            nameEn: "יחד קרן השתלמות לרופאים- עוקב מדד S&P 500",
            companyHe: "אחר",
            companyEn: "Other",
            month: -1.62,
            year1: 3.65,
            year3: 0.39,
            year5: 10.27
        },
        {
            nameHe: "הפניקס השתלמות משולב סחיר",
            nameEn: "הפניקס השתלמות משולב סחיר",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.07,
            year1: 15.88,
            year3: 0.55,
            year5: 82.13
        },
        {
            nameHe: "הפניקס השתלמות אג״ח סחיר",
            nameEn: "הפניקס השתלמות אג״ח סחיר",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.21,
            year1: 6.17,
            year3: 0.55,
            year5: 40.88
        },
        {
            nameHe: "הפניקס השתלמות מניות סחיר",
            nameEn: "הפניקס השתלמות מניות סחיר",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 4.51,
            year1: 46.43,
            year3: 0.49,
            year5: 796.07
        },
        {
            nameHe: "מור השתלמות משולב סחיר",
            nameEn: "מור השתלמות משולב סחיר",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.85,
            year1: 15.76,
            year3: 0.65,
            year5: 803.05
        },
        {
            nameHe: "מור השתלמות אג״ח עם מניות (עד 25% מניות) סחיר",
            nameEn: "מור השתלמות אג״ח עם מניות (עד 25% מניות) סחיר",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.49,
            year1: 12.41,
            year3: 0.67,
            year5: 75.7
        },
        {
            nameHe: "מור השתלמות עוקב מדדי אג״ח",
            nameEn: "מור השתלמות עוקב מדדי אג״ח",
            companyHe: "מור",
            companyEn: "Mor",
            month: -2.79,
            year1: -4.98,
            year3: 0.7,
            year5: 55.61
        },
        {
            nameHe: "מור השתלמות אג״ח סחיר",
            nameEn: "מור השתלמות אג״ח סחיר",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.56,
            year1: 9.24,
            year3: 0.67,
            year5: 39.0
        },
        {
            nameHe: "מור השתלמות מניות סחיר",
            nameEn: "מור השתלמות מניות סחיר",
            companyHe: "מור",
            companyEn: "Mor",
            month: 1.73,
            year1: 27.06,
            year3: 0.65,
            year5: 1237.47
        },
        {
            nameHe: "מור השתלמות עוקב מדדים גמיש",
            nameEn: "מור השתלמות עוקב מדדים גמיש",
            companyHe: "מור",
            companyEn: "Mor",
            month: -2.24,
            year1: -0.72,
            year3: 0.69,
            year5: 78.28
        },
        {
            nameHe: "מור השתלמות עוקב מדדים אג״ח עם מניות (עד 25% מניות)",
            nameEn: "מור השתלמות עוקב מדדים אג״ח עם מניות (עד 25% מניות)",
            companyHe: "מור",
            companyEn: "Mor",
            month: -2.27,
            year1: -3.6,
            year3: 0.69,
            year5: 17.55
        },
        {
            nameHe: "מור השתלמות עוקב מדדי מניות",
            nameEn: "מור השתלמות עוקב מדדי מניות",
            companyHe: "מור",
            companyEn: "Mor",
            month: -1.48,
            year1: 4.98,
            year3: 0.69,
            year5: 283.2
        },
        {
            nameHe: "מגדל השתלמות אשראי ואג״ח עם מניות (עד 25% מניות)",
            nameEn: "מגדל השתלמות אשראי ואג״ח עם מניות (עד 25% מניות)",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.59,
            year1: 10.62,
            year3: 0.46,
            year5: 113.4
        },
        {
            nameHe: "הראל השתלמות עוקב מדדים - גמיש",
            nameEn: "הראל השתלמות עוקב מדדים - גמיש",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.35,
            year1: 15.24,
            year3: 0.47,
            year5: 291.28
        },
        {
            nameHe: "הראל השתלמות עוקב מדדי אג״ח",
            nameEn: "הראל השתלמות עוקב מדדי אג״ח",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -1.84,
            year1: -5.12,
            year3: 0.52,
            year5: 31.96
        },
        {
            nameHe: "הראל השתלמות עוקב מדדים- אג״ח עם מניות (עד 25% מניות)",
            nameEn: "הראל השתלמות עוקב מדדים- אג״ח עם מניות (עד 25% מניות)",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.68,
            year1: 9.53,
            year3: 0.47,
            year5: 29.63
        },
        {
            nameHe: "הראל השתלמות עוקב מדדי מניות",
            nameEn: "הראל השתלמות עוקב מדדי מניות",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -1.24,
            year1: 6.31,
            year3: 0.51,
            year5: 343.99
        },
        {
            nameHe: "הראל השתלמות אג״ח סחיר",
            nameEn: "הראל השתלמות אג״ח סחיר",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.58,
            year1: 6.78,
            year3: 0.5,
            year5: 106.59
        },
        {
            nameHe: "הראל השתלמות מניות סחיר",
            nameEn: "הראל השתלמות מניות סחיר",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 4.71,
            year1: 50.89,
            year3: 0.49,
            year5: 919.41
        },
        {
            nameHe: "הראל השתלמות מסלול סחיר- אג״ח עם מניות (עד 25% מניות)",
            nameEn: "הראל השתלמות מסלול סחיר- אג״ח עם מניות (עד 25% מניות)",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.51,
            year1: 11.32,
            year3: 0.41,
            year5: 77.58
        },
        {
            nameHe: "אנליסט השתלמות עוקב מדדים - גמיש",
            nameEn: "אנליסט השתלמות עוקב מדדים - גמיש",
            companyHe: "אנליסט",
            companyEn: "Analyst",
            month: 4.54,
            year1: 45.59,
            year3: 0.61,
            year5: 1064.98
        },
        {
            nameHe: "אנליסט השתלמות עוקב מדדי מניות",
            nameEn: "אנליסט השתלמות עוקב מדדי מניות",
            companyHe: "אנליסט",
            companyEn: "Analyst",
            month: -1.44,
            year1: 8.92,
            year3: 0.62,
            year5: 283.94
        },
        {
            nameHe: "מיטב השתלמות מניות סחיר",
            nameEn: "מיטב השתלמות מניות סחיר",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: -0.79,
            year1: 3.51,
            year3: 0.57,
            year5: 376.57
        },
        {
            nameHe: "מיטב השתלמות אג״ח סחיר",
            nameEn: "מיטב השתלמות אג״ח סחיר",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: -1.82,
            year1: -4.93,
            year3: 0.57,
            year5: 26.69
        },
        {
            nameHe: "מיטב השתלמות סחיר - אג״ח עם מניות (עד 25% מניות)",
            nameEn: "מיטב השתלמות סחיר - אג״ח עם מניות (עד 25% מניות)",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 1.22,
            year1: 13.14,
            year3: 0.53,
            year5: 92.25
        },
        {
            nameHe: "מיטב השתלמות משולב סחיר",
            nameEn: "מיטב השתלמות משולב סחיר",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 5.41,
            year1: 51.39,
            year3: 0.52,
            year5: 1518.21
        },
        {
            nameHe: "מיטב השתלמות עוקב מדדי מניות",
            nameEn: "מיטב השתלמות עוקב מדדי מניות",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 1.27,
            year1: 20.02,
            year3: 0.56,
            year5: 1292.25
        },
        {
            nameHe: "מיטב השתלמות עוקב מדדי אג״ח עם מניות (עד 25% מניות)",
            nameEn: "מיטב השתלמות עוקב מדדי אג״ח עם מניות (עד 25% מניות)",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: -1.88,
            year1: -3.32,
            year3: 0.58,
            year5: 38.68
        },
        {
            nameHe: "מנורה השתלמות עוקב S&P500",
            nameEn: "מנורה השתלמות עוקב S&P500",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: -1.82,
            year1: 2.91,
            year3: 66.12,
            year5: null
        },
        {
            nameHe: "מגדל השתלמות עוקב מדד S&P 500",
            nameEn: "מגדל השתלמות עוקב מדד S&P 500",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: -1.75,
            year1: 2.73,
            year3: null,
            year5: null
        },
        {
            nameHe: "מנורה השתלמות אשראי ואג״ח",
            nameEn: "מנורה השתלמות אשראי ואג״ח",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.39,
            year1: 8.7,
            year3: 32.18,
            year5: null
        },
        {
            nameHe: "אינפיניטי השתלמות כללי",
            nameEn: "אינפיניטי השתלמות כללי",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.29,
            year1: 15.39,
            year3: 50.97,
            year5: 54.01
        },
        {
            nameHe: "הפניקס השתלמות הלכה",
            nameEn: "הפניקס השתלמות הלכה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.91,
            year1: 14.58,
            year3: 42.83,
            year5: 44.19
        },
        {
            nameHe: "מנורה מבטחים השתלמות הלכה",
            nameEn: "מנורה מבטחים השתלמות הלכה",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.63,
            year1: 13.04,
            year3: 29.35,
            year5: null
        },
        {
            nameHe: "אלטשולר שחם השתלמות הלכה",
            nameEn: "אלטשולר שחם השתלמות הלכה",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: -0.07,
            year1: 12.32,
            year3: 39.07,
            year5: 33.23
        },
        {
            nameHe: "אינפיניטי השתלמות הלכה",
            nameEn: "אינפיניטי השתלמות הלכה",
            companyHe: "אינפיניטי",
            companyEn: "Infinity",
            month: -0.44,
            year1: 10.14,
            year3: null,
            year5: null
        },
        {
            nameHe: "מנורה השתלמות מדדי מניות",
            nameEn: "מנורה השתלמות מדדי מניות",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 1.57,
            year1: 18.13,
            year3: null,
            year5: null
        },
        {
            nameHe: "אינפיניטי השתלמות עוקב מדדי מניות",
            nameEn: "אינפיניטי השתלמות עוקב מדדי מניות",
            companyHe: "אינפיניטי",
            companyEn: "Infinity",
            month: -1.21,
            year1: 14.01,
            year3: null,
            year5: null
        },
        {
            nameHe: "מגדל השתלמות מסלול עוקב מדדי מניות",
            nameEn: "מגדל השתלמות מסלול עוקב מדדי מניות",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: -0.35,
            year1: 6.35,
            year3: null,
            year5: null
        },
        {
            nameHe: "מיטב השתלמות קיימות",
            nameEn: "מיטב השתלמות קיימות",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 0.57,
            year1: 15.39,
            year3: null,
            year5: null
        },
        {
            nameHe: "הראל השתלמות קיימות",
            nameEn: "הראל השתלמות קיימות",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -1.0,
            year1: 14.0,
            year3: null,
            year5: null
        }
    ],

    // Pension Funds - קרנות פנסיה
    pension: [
        {
            nameHe: "מנורה מבטחים פנסיה - כללי",
            nameEn: "מנורה מבטחים פנסיה - כללי",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.11,
            year1: 16.63,
            year3: 44.91,
            year5: 63.42,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה - מניות",
            nameEn: "מנורה מבטחים פנסיה - מניות",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.52,
            year1: 21.8,
            year3: 62.53,
            year5: 81.38,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה - אג״ח",
            nameEn: "מנורה מבטחים פנסיה - אג״ח",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 0.37,
            year1: 4.48,
            year3: 9.81,
            year5: 14.44,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה - הלכה",
            nameEn: "מנורה מבטחים פנסיה - הלכה",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 0.66,
            year1: 14.71,
            year3: 38.38,
            year5: 43.41,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה - יעד 2060",
            nameEn: "מנורה מבטחים פנסיה - יעד 2060",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.35,
            year1: 19.15,
            year3: 51.59,
            year5: 68.12,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה - יעד 2055",
            nameEn: "מנורה מבטחים פנסיה - יעד 2055",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.33,
            year1: 18.99,
            year3: 51.01,
            year5: 69.52,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה - יעד 2050",
            nameEn: "מנורה מבטחים פנסיה - יעד 2050",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.25,
            year1: 17.83,
            year3: 48.16,
            year5: 66.12,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה - יעד 2045",
            nameEn: "מנורה מבטחים פנסיה - יעד 2045",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.22,
            year1: 17.15,
            year3: 46.56,
            year5: 64.93,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה - יעד 2040",
            nameEn: "מנורה מבטחים פנסיה - יעד 2040",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.12,
            year1: 16.47,
            year3: 44.42,
            year5: 61.49,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה - יעד 2035",
            nameEn: "מנורה מבטחים פנסיה - יעד 2035",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 0.94,
            year1: 14.11,
            year3: 39.88,
            year5: 55.2,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה - יעד 2030",
            nameEn: "מנורה מבטחים פנסיה - יעד 2030",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 0.73,
            year1: 11.95,
            year3: 32.99,
            year5: 47.86,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה - יעד 2025",
            nameEn: "מנורה מבטחים פנסיה - יעד 2025",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 0.73,
            year1: 11.31,
            year3: 31.09,
            year5: 41.2,
            fee: 1.73
        },
        {
            nameHe: "מנורה משלימה - יעד 2060",
            nameEn: "מנורה משלימה - יעד 2060",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.33,
            year1: 19.01,
            year3: 48.9,
            year5: 56.99,
            fee: 1.06
        },
        {
            nameHe: "מנורה משלימה - יעד 2055",
            nameEn: "מנורה משלימה - יעד 2055",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.28,
            year1: 18.85,
            year3: 48.42,
            year5: 56.82,
            fee: 1.06
        },
        {
            nameHe: "מנורה משלימה - יעד 2050",
            nameEn: "מנורה משלימה - יעד 2050",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.3,
            year1: 18.13,
            year3: 47.16,
            year5: 54.83,
            fee: 1.06
        },
        {
            nameHe: "מנורה משלימה - יעד 2045",
            nameEn: "מנורה משלימה - יעד 2045",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.22,
            year1: 17.48,
            year3: 45.99,
            year5: 55.66,
            fee: 1.06
        },
        {
            nameHe: "מנורה משלימה - יעד 2040",
            nameEn: "מנורה משלימה - יעד 2040",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.06,
            year1: 15.52,
            year3: 40.88,
            year5: 49.12,
            fee: 1.06
        },
        {
            nameHe: "מנורה משלימה - יעד 2035",
            nameEn: "מנורה משלימה - יעד 2035",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 1.03,
            year1: 14.22,
            year3: 36.74,
            year5: 43.66,
            fee: 1.06
        },
        {
            nameHe: "מנורה משלימה - יעד 2030",
            nameEn: "מנורה משלימה - יעד 2030",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 0.85,
            year1: 12.63,
            year3: 32.18,
            year5: 38.81,
            fee: 1.06
        },
        {
            nameHe: "מנורה משלימה - יעד 2025",
            nameEn: "מנורה משלימה - יעד 2025",
            companyHe: "מנורה מבטחים",
            companyEn: "Menora Mivtachim",
            month: 0.8,
            year1: 10.95,
            year3: 28.5,
            year5: 30.85,
            fee: 1.06
        },
        {
            nameHe: "הראל פנסיה - גילעד כללי",
            nameEn: "הראל פנסיה - גילעד כללי",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.89,
            year1: 14.47,
            year3: 39.66,
            year5: 55.03,
            fee: 1.51
        },
        {
            nameHe: "הראל פנסיה - מניות",
            nameEn: "הראל פנסיה - מניות",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.22,
            year1: 20.09,
            year3: 57.68,
            year5: 73.78,
            fee: 1.51
        },
        {
            nameHe: "הראל פנסיה - הלכה",
            nameEn: "הראל פנסיה - הלכה",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.12,
            year1: 15.25,
            year3: 45.25,
            year5: 55.8,
            fee: 1.51
        },
        {
            nameHe: "הראל פנסיה - אשראי ואג״ח",
            nameEn: "הראל פנסיה - אשראי ואג״ח",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.18,
            year1: 7.02,
            year3: 17.31,
            year5: 22.22,
            fee: 1.51
        },
        {
            nameHe: "הראל פנסיה - כספי",
            nameEn: "הראל פנסיה - כספי",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.25,
            year1: 5.31,
            year3: 16.87,
            year5: 22.66,
            fee: 1.51
        },
        {
            nameHe: "הראל פנסיה - גילאי 50 ומטה",
            nameEn: "הראל פנסיה - גילאי 50 ומטה",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.1,
            year1: 16.69,
            year3: 43.7,
            year5: 58.82,
            fee: 1.51
        },
        {
            nameHe: "הראל פנסיה - גילאי 50 עד 60",
            nameEn: "הראל פנסיה - גילאי 50 עד 60",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.88,
            year1: 14.6,
            year3: 39.52,
            year5: 53.22,
            fee: 1.51
        },
        {
            nameHe: "הראל פנסיה - גילאי 60 ומעלה",
            nameEn: "הראל פנסיה - גילאי 60 ומעלה",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.48,
            year1: 11.26,
            year3: 29.71,
            year5: 39.19,
            fee: 1.51
        },
        {
            nameHe: "הראל פנסיה כללית - כללי",
            nameEn: "הראל פנסיה כללית - כללי",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.89,
            year1: 14.01,
            year3: 35.71,
            year5: 42.73,
            fee: 1.13
        },
        {
            nameHe: "מיטב פנסיה מקיפה מניות",
            nameEn: "מיטב פנסיה מקיפה מניות",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 1.4,
            year1: 20.21,
            year3: 61.87,
            year5: 75.72,
            fee: 1.31
        },
        {
            nameHe: "מיטב פנסיה מקיפה עוקב מדדי מניות",
            nameEn: "מיטב פנסיה מקיפה עוקב מדדי מניות",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 0.91,
            year1: 16.74,
            year3: 90.66,
            year5: 96.12,
            fee: 1.31
        },
        {
            nameHe: "מיטב פנסיה מקיפה אשראי ואג״ח",
            nameEn: "מיטב פנסיה מקיפה אשראי ואג״ח",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 0.24,
            year1: 7.17,
            year3: 22.7,
            year5: 29.66,
            fee: 1.31
        },
        {
            nameHe: "מיטב פנסיה מקיפה לבני 50 ומטה",
            nameEn: "מיטב פנסיה מקיפה לבני 50 ומטה",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 1.25,
            year1: 17.32,
            year3: 52.41,
            year5: 67.45,
            fee: 1.31
        },
        {
            nameHe: "מיטב פנסיה מקיפה הלכה",
            nameEn: "מיטב פנסיה מקיפה הלכה",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 0.72,
            year1: 14.78,
            year3: 44.0,
            year5: 52.96,
            fee: 1.31
        },
        {
            nameHe: "מיטב פנסיה כללית מניות",
            nameEn: "מיטב פנסיה כללית מניות",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 2.11,
            year1: 26.27,
            year3: 78.48,
            year5: 84.08,
            fee: 1.11
        },
        {
            nameHe: "מיטב פנסיה כללית אשראי ואג״ח",
            nameEn: "מיטב פנסיה כללית אשראי ואג״ח",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 0.35,
            year1: 7.03,
            year3: 21.26,
            year5: 21.09,
            fee: 1.11
        },
        {
            nameHe: "מיטב פנסיה כללית לבני 50 ומטה",
            nameEn: "מיטב פנסיה כללית לבני 50 ומטה",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 1.38,
            year1: 17.49,
            year3: 50.19,
            year5: 53.78,
            fee: 1.11
        },
        {
            nameHe: "מיטב פנסיה כללית הלכה",
            nameEn: "מיטב פנסיה כללית הלכה",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 1.15,
            year1: 14.59,
            year3: 36.85,
            year5: 44.43,
            fee: 1.11
        },
        {
            nameHe: "מגדל מקפת אישית כללי",
            nameEn: "מגדל מקפת אישית כללי",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.08,
            year1: 15.56,
            year3: 43.62,
            year5: 61.58,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת אישית מניות",
            nameEn: "מגדל מקפת אישית מניות",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.28,
            year1: 20.26,
            year3: 61.53,
            year5: 75.74,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת אישית אשראי ואג״ח",
            nameEn: "מגדל מקפת אישית אשראי ואג״ח",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.15,
            year1: 6.46,
            year3: 20.63,
            year5: 22.97,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת אישית הלכה",
            nameEn: "מגדל מקפת אישית הלכה",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.93,
            year1: 15.49,
            year3: 44.84,
            year5: 55.06,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת אישית כספי",
            nameEn: "מגדל מקפת אישית כספי",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.33,
            year1: 5.44,
            year3: 16.84,
            year5: 22.27,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת אישית לבני 50 ומטה",
            nameEn: "מגדל מקפת אישית לבני 50 ומטה",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.09,
            year1: 17.17,
            year3: 48.89,
            year5: 63.33,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת אישית לבני 50 עד 60",
            nameEn: "מגדל מקפת אישית לבני 50 עד 60",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.87,
            year1: 15.13,
            year3: 43.8,
            year5: 56.52,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת אישית לבני 60 ומעלה",
            nameEn: "מגדל מקפת אישית לבני 60 ומעלה",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.58,
            year1: 11.24,
            year3: 32.62,
            year5: 42.28,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת משלימה כללי",
            nameEn: "מגדל מקפת משלימה כללי",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.04,
            year1: 15.04,
            year3: 42.34,
            year5: 47.22,
            fee: 1.02
        },
        {
            nameHe: "מגדל מקפת משלימה מניות",
            nameEn: "מגדל מקפת משלימה מניות",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.83,
            year1: 25.89,
            year3: 76.79,
            year5: 85.15,
            fee: 1.02
        },
        {
            nameHe: "מגדל מקפת משלימה הלכה",
            nameEn: "מגדל מקפת משלימה הלכה",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.13,
            year1: 15.14,
            year3: 41.31,
            year5: 41.39,
            fee: 1.02
        },
        {
            nameHe: "מגדל מקפת משלימה אשראי ואג״ח",
            nameEn: "מגדל מקפת משלימה אשראי ואג״ח",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.25,
            year1: 6.29,
            year3: 17.77,
            year5: 13.22,
            fee: 1.02
        },
        {
            nameHe: "מגדל מקפת משלימה כספי",
            nameEn: "מגדל מקפת משלימה כספי",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.45,
            year1: 4.68,
            year3: 13.5,
            year5: 13.24,
            fee: 1.02
        },
        {
            nameHe: "מגדל מקפת משלימה לבני 50 ומטה",
            nameEn: "מגדל מקפת משלימה לבני 50 ומטה",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.16,
            year1: 16.76,
            year3: 47.12,
            year5: 51.83,
            fee: 1.02
        },
        {
            nameHe: "מגדל מקפת משלימה לבני 50 עד 60",
            nameEn: "מגדל מקפת משלימה לבני 50 עד 60",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.0,
            year1: 15.0,
            year3: 41.26,
            year5: 44.09,
            fee: 1.02
        },
        {
            nameHe: "מגדל מקפת משלימה לבני 60 ומעלה",
            nameEn: "מגדל מקפת משלימה לבני 60 ומעלה",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.67,
            year1: 11.14,
            year3: 30.75,
            year5: 30.86,
            fee: 1.02
        },
        {
            nameHe: "כלל פנסיה כללי",
            nameEn: "כלל פנסיה כללי",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.17,
            year1: 16.55,
            year3: 42.73,
            year5: 60.28,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה מניות",
            nameEn: "כלל פנסיה מניות",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.48,
            year1: 21.04,
            year3: 56.8,
            year5: 70.56,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה הלכה",
            nameEn: "כלל פנסיה הלכה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.08,
            year1: 15.67,
            year3: 44.3,
            year5: 52.1,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה אשראי ואג״ח",
            nameEn: "כלל פנסיה אשראי ואג״ח",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.27,
            year1: 7.2,
            year3: 23.19,
            year5: 27.25,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה לבני 50 ומטה",
            nameEn: "כלל פנסיה לבני 50 ומטה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.28,
            year1: 18.38,
            year3: 48.7,
            year5: 65.54,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה לבני 50-60",
            nameEn: "כלל פנסיה לבני 50-60",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.03,
            year1: 16.07,
            year3: 43.76,
            year5: 58.2,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה לבני 60 ומעלה",
            nameEn: "כלל פנסיה לבני 60 ומעלה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.83,
            year1: 12.03,
            year3: 32.54,
            year5: 44.57,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה משלימה - כללי",
            nameEn: "כלל פנסיה משלימה - כללי",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.38,
            year1: 16.67,
            year3: 39.94,
            year5: 46.61,
            fee: 0.98
        },
        {
            nameHe: "כלל פנסיה משלימה לבני 50 ומטה",
            nameEn: "כלל פנסיה משלימה לבני 50 ומטה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.25,
            year1: 18.35,
            year3: 46.58,
            year5: 51.46,
            fee: 1.02
        },
        {
            nameHe: "כלל פנסיה משלימה לבני 50 עד 60",
            nameEn: "כלל פנסיה משלימה לבני 50 עד 60",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.05,
            year1: 15.62,
            year3: 40.71,
            year5: 44.67,
            fee: 0.98
        },
        {
            nameHe: "כלל פנסיה משלימה לבני 60 ומעלה",
            nameEn: "כלל פנסיה משלימה לבני 60 ומעלה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.75,
            year1: 11.73,
            year3: 29.99,
            year5: 31.35,
            fee: 0.98
        },
        {
            nameHe: "הפניקס פנסיה מקיפה - מניות",
            nameEn: "הפניקס פנסיה מקיפה - מניות",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.5,
            year1: 21.16,
            year3: 61.26,
            year5: 75.47,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה מקיפה אשראי ואג״ח",
            nameEn: "הפניקס פנסיה מקיפה אשראי ואג״ח",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.1,
            year1: 6.6,
            year3: 22.49,
            year5: 29.09,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה מקיפה כספי",
            nameEn: "הפניקס פנסיה מקיפה כספי",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.25,
            year1: 5.29,
            year3: 16.59,
            year5: 22.75,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה מקיפה - הלכה",
            nameEn: "הפניקס פנסיה מקיפה - הלכה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.12,
            year1: 15.63,
            year3: 46.15,
            year5: 56.91,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה מקיפה - לבני 60 ומעלה",
            nameEn: "הפניקס פנסיה מקיפה - לבני 60 ומעלה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.62,
            year1: 11.67,
            year3: 34.35,
            year5: 44.28,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה משלימה - לבני 50 ומטה",
            nameEn: "הפניקס פנסיה משלימה - לבני 50 ומטה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.37,
            year1: 17.4,
            year3: 48.19,
            year5: 53.55,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה משלימה - לבני 50 עד 60",
            nameEn: "הפניקס פנסיה משלימה - לבני 50 עד 60",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.06,
            year1: 15.6,
            year3: 42.14,
            year5: 43.53,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה משלימה - לבני 60 ומעלה",
            nameEn: "הפניקס פנסיה משלימה - לבני 60 ומעלה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.51,
            year1: 10.63,
            year3: 30.0,
            year5: 29.84,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה משלימה - מניות",
            nameEn: "הפניקס פנסיה משלימה - מניות",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 2.02,
            year1: 26.27,
            year3: 76.64,
            year5: 86.01,
            fee: 1.29
        },
        {
            nameHe: "הפניקס פנסיה משלימה - אשראי ואג״ח",
            nameEn: "הפניקס פנסיה משלימה - אשראי ואג״ח",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.12,
            year1: 5.82,
            year3: 16.38,
            year5: 13.93,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה משלימה - כספי",
            nameEn: "הפניקס פנסיה משלימה - כספי",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.38,
            year1: 4.49,
            year3: 13.05,
            year5: 13.73,
            fee: 1.55
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה לבני 50 ומטה",
            nameEn: "אלטשולר שחם פנסיה מקיפה לבני 50 ומטה",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: 0.09,
            year1: 15.46,
            year3: 51.03,
            year5: 52.94,
            fee: 1.3
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה לבני 50-60",
            nameEn: "אלטשולר שחם פנסיה מקיפה לבני 50-60",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: -0.03,
            year1: 13.96,
            year3: 46.22,
            year5: 48.12,
            fee: 1.3
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה לבני 60 ומעלה",
            nameEn: "אלטשולר שחם פנסיה מקיפה לבני 60 ומעלה",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: -0.23,
            year1: 9.11,
            year3: 31.22,
            year5: 35.18,
            fee: 1.3
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה הלכה",
            nameEn: "אלטשולר שחם פנסיה מקיפה הלכה",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: -0.08,
            year1: 12.6,
            year3: 44.36,
            year5: 45.72,
            fee: 1.3
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית לבני 50 ומטה",
            nameEn: "אלטשולר שחם פנסיה כללית לבני 50 ומטה",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: 0.03,
            year1: 15.59,
            year3: 47.5,
            year5: 39.96,
            fee: 1.34
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית לבני 50 עד 60",
            nameEn: "אלטשולר שחם פנסיה כללית לבני 50 עד 60",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: 0.0,
            year1: 13.49,
            year3: 42.25,
            year5: 37.03,
            fee: 1.34
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית לבני 60 ומעלה",
            nameEn: "אלטשולר שחם פנסיה כללית לבני 60 ומעלה",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: -0.15,
            year1: 9.27,
            year3: 27.69,
            year5: 24.1,
            fee: 1.34
        }
,
        {
            nameHe: "מיטב פנסיה מקיפה פאסיבי- מדדי אג״ח עד 25% במדדי מניות",
            nameEn: "מיטב פנסיה מקיפה פאסיבי- מדדי אג״ח עד 25% במדדי מניות",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 2.24,
            year1: 10.06,
            year3: 13.82,
            year5: 25.28
        },
        {
            nameHe: "כלל פנסיה וגמל בע״מ",
            nameEn: "כלל פנסיה וגמל בע״מ",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.17,
            year1: 16.55,
            year3: 42.73,
            year5: 60.28
        },
        {
            nameHe: "מנורה מבטחים משלימה -יעד לפרישה 2050",
            nameEn: "מנורה מבטחים משלימה -יעד לפרישה 2050",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 1.3,
            year1: 18.13,
            year3: 47.16,
            year5: 54.83
        },
        {
            nameHe: "מגדל מקפת קרנות פנסיה וקופות גמל בע״מ",
            nameEn: "מגדל מקפת קרנות פנסיה וקופות גמל בע״מ",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.93,
            year1: 15.49,
            year3: 44.84,
            year5: 55.06
        },
        {
            nameHe: "הראל פנסיה וגמל בע״מ",
            nameEn: "הראל פנסיה וגמל בע״מ",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.12,
            year1: 15.25,
            year3: 45.25,
            year5: 55.8
        },
        {
            nameHe: "הראל פנסיה - מנוף כללי",
            nameEn: "הראל פנסיה - מנוף כללי",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.87,
            year1: 14.45,
            year3: 39.79,
            year5: 54.75
        },
        {
            nameHe: "מיטב פנסיה כללית מקבלי קצבה קיימים",
            nameEn: "מיטב פנסיה כללית מקבלי קצבה קיימים",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -9.0,
            year1: 5.27,
            year3: 6.08,
            year5: 0.12
        },
        {
            nameHe: "מיטב פנסיה מקיפה מקבלי קצבה קיימים",
            nameEn: "מיטב פנסיה מקיפה מקבלי קצבה קיימים",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: -9.0,
            year1: 6.75,
            year3: 18.45,
            year5: 28.42
        },
        {
            nameHe: "מנורה מבטחים פנסיה מקבלי קצבה קיימים",
            nameEn: "מנורה מבטחים פנסיה מקבלי קצבה קיימים",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: -12.0,
            year1: 6.38,
            year3: 16.25,
            year5: 25.84
        },
        {
            nameHe: "מנורה מבטחים משלימה - מקבלי קצבה קיימים",
            nameEn: "מנורה מבטחים משלימה - מקבלי קצבה קיימים",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: -33.0,
            year1: 5.01,
            year3: 6.11,
            year5: 1.87
        },
        {
            nameHe: "מיטב מקיפה אג״ח עד 25% במנית",
            nameEn: "מיטב מקיפה אג״ח עד 25% במנית",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 0.68,
            year1: 7.14,
            year3: 11.98,
            year5: 22.21
        },
        {
            nameHe: "כלל פנסיה משלימה למקבלי קצבה קיימים",
            nameEn: "כלל פנסיה משלימה למקבלי קצבה קיימים",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -1.0,
            year1: 5.36,
            year3: 7.45,
            year5: 3.43
        },
        {
            nameHe: "כלל פנסיה למקבלי קצבה קיימים",
            nameEn: "כלל פנסיה למקבלי קצבה קיימים",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -9.0,
            year1: 6.9,
            year3: 18.42,
            year5: 30.13
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה למקבלי קצבה קיימים",
            nameEn: "אלטשולר שחם פנסיה מקיפה למקבלי קצבה קיימים",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: -16.0,
            year1: 8.86,
            year3: 32.46,
            year5: 49.87
        },
        {
            nameHe: "הפניקס פנסיה מקיפה - מסלול מקבלי קצבה קיימים",
            nameEn: "הפניקס פנסיה מקיפה - מסלול מקבלי קצבה קיימים",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: -21.0,
            year1: 6.43,
            year3: 17.79,
            year5: 28.29
        },
        {
            nameHe: "הפניקס פנסיה כללית - מסלול מקבלי קצבה קיימים",
            nameEn: "הפניקס פנסיה כללית - מסלול מקבלי קצבה קיימים",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: -31.0,
            year1: 4.77,
            year3: 7.04,
            year5: 3.89
        },
        {
            nameHe: "הראל פנסיה - מקבלי קצבה קיימים",
            nameEn: "הראל פנסיה - מקבלי קצבה קיימים",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -16.0,
            year1: 6.78,
            year3: 19.22,
            year5: 30.52
        },
        {
            nameHe: "הראל פנסיה כללית - מקבלי קצבה קיימים",
            nameEn: "הראל פנסיה כללית - מקבלי קצבה קיימים",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -12.0,
            year1: 5.51,
            year3: 8.65,
            year5: 5.15
        },
        {
            nameHe: "הראל פנסיה- הלכה למקבלי קצבה קיימים",
            nameEn: "הראל פנסיה- הלכה למקבלי קצבה קיימים",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -21.0,
            year1: 6.06,
            year3: 16.67,
            year5: 27.54
        },
        {
            nameHe: "כלל פנסיה מסלול אג״ח עד 15% מניות",
            nameEn: "כלל פנסיה מסלול אג״ח עד 15% מניות",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.47,
            year1: 6.46,
            year3: 10.67,
            year5: 23.79
        },
        {
            nameHe: "מנורה מבטחים פנסיה קצבה לזכאים קיימים",
            nameEn: "מנורה מבטחים פנסיה קצבה לזכאים קיימים",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: -2.0,
            year1: 7.23,
            year3: 23.84,
            year5: 41.67
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית למקבלי קצבה קיימים",
            nameEn: "אלטשולר שחם פנסיה כללית למקבלי קצבה קיימים",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -22.0,
            year1: 6.87,
            year3: 13.41,
            year5: 7.05
        },
        {
            nameHe: "הראל פנסיה - קצבה לזכאים קיימים",
            nameEn: "הראל פנסיה - קצבה לזכאים קיימים",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -11.0,
            year1: 7.12,
            year3: 21.5,
            year5: 34.99
        },
        {
            nameHe: "מגדל מקפת אישית הלכה למקבלי קצבה קיימים",
            nameEn: "מגדל מקפת אישית הלכה למקבלי קצבה קיימים",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: -4.0,
            year1: 7.01,
            year3: 20.54,
            year5: 31.28
        },
        {
            nameHe: "מיטב פנסיה מקיפה קצבה לזכאים קיימים",
            nameEn: "מיטב פנסיה מקיפה קצבה לזכאים קיימים",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: -16.0,
            year1: 6.86,
            year3: 19.94,
            year5: 32.57
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית מסלול לבני 60 ומעלה",
            nameEn: "אלטשולר שחם פנסיה כללית מסלול לבני 60 ומעלה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -15.0,
            year1: 9.27,
            year3: 27.69,
            year5: 24.1
        },
        {
            nameHe: "הראל פנסיה כללית - גילאי 60 ומעלה",
            nameEn: "הראל פנסיה כללית - גילאי 60 ומעלה",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.49,
            year1: 11.22,
            year3: 28.82,
            year5: 27.55
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה מסלול לבני 60 ומעלה",
            nameEn: "אלטשולר שחם פנסיה מקיפה מסלול לבני 60 ומעלה",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: -23.0,
            year1: 9.11,
            year3: 31.22,
            year5: 35.18
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה מסלול לבני 50-60",
            nameEn: "אלטשולר שחם פנסיה מקיפה מסלול לבני 50-60",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: -3.0,
            year1: 13.96,
            year3: 46.22,
            year5: 48.12
        },
        {
            nameHe: "כלל פנסיה קצבה לזכאים קיימים",
            nameEn: "כלל פנסיה קצבה לזכאים קיימים",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -9.0,
            year1: 7.18,
            year3: 24.32,
            year5: 40.51
        },
        {
            nameHe: "כלל פנסיה מסלול הלכה למקבלי קצבה קיימים",
            nameEn: "כלל פנסיה מסלול הלכה למקבלי קצבה קיימים",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -2.0,
            year1: 6.72,
            year3: 18.98,
            year5: 29.15
        },
        {
            nameHe: "הפניקס מסלול אג״ח עד 25% מניות",
            nameEn: "הפניקס מסלול אג״ח עד 25% מניות",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.44,
            year1: 7.78,
            year3: 13.17,
            year5: 29.44
        },
        {
            nameHe: "מסלול קצבה לזכאים קיימים",
            nameEn: "מסלול קצבה לזכאים קיימים",
            companyHe: "אחר",
            companyEn: "Other",
            month: -9.0,
            year1: 5.46,
            year3: 21.22,
            year5: 34.93
        },
        {
            nameHe: "הראל פנסיה - בסיסי למקבלי קצבה",
            nameEn: "הראל פנסיה - בסיסי למקבלי קצבה",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.24,
            year1: 9.76,
            year3: 29.65,
            year5: 45.13
        },
        {
            nameHe: "הראל פנסיה - הלכה למקבלי קצבה",
            nameEn: "הראל פנסיה - הלכה למקבלי קצבה",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.47,
            year1: 10.39,
            year3: 31.68,
            year5: 48.47
        },
        {
            nameHe: "הפניקס פנסיה מקיפה מסלול פאסיבי לבני 50 ומטה",
            nameEn: "הפניקס פנסיה מקיפה מסלול פאסיבי לבני 50 ומטה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.16,
            year1: 12.94,
            year3: 20.68,
            year5: 41.82
        },
        {
            nameHe: "הפניקס פנסיה מקיפה מסלול פאסיבי לבני 50 עד 60",
            nameEn: "הפניקס פנסיה מקיפה מסלול פאסיבי לבני 50 עד 60",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.98,
            year1: 11.43,
            year3: 18.73,
            year5: 36.5
        },
        {
            nameHe: "הפניקס פנסיה מקיפה מסלול פאסיבי לבני 60 ומעלה",
            nameEn: "הפניקס פנסיה מקיפה מסלול פאסיבי לבני 60 ומעלה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.74,
            year1: 8.35,
            year3: 13.8,
            year5: 26.92
        },
        {
            nameHe: "הפניקס פנסיה מקיפה -מסלול עוקב מדדי אג״ח",
            nameEn: "הפניקס פנסיה מקיפה -מסלול עוקב מדדי אג״ח",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: -1.71,
            year1: -1.05,
            year3: 14.54,
            year5: 12.14
        },
        {
            nameHe: "הראל פנסיה כללית - גילאי 50 עד 60",
            nameEn: "הראל פנסיה כללית - גילאי 50 עד 60",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.96,
            year1: 14.72,
            year3: 38.86,
            year5: 40.61
        },
        {
            nameHe: "הראל פנסיה כללית - גילאי 50 ומטה",
            nameEn: "הראל פנסיה כללית - גילאי 50 ומטה",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.6,
            year1: 18.31,
            year3: 45.07,
            year5: 49.87
        },
        {
            nameHe: "מיטב פנסיה מקיפה לבני 50 עד 60",
            nameEn: "מיטב פנסיה מקיפה לבני 50 עד 60",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 1.09,
            year1: 15.58,
            year3: 47.37,
            year5: 63.88
        },
        {
            nameHe: "מיטב פנסיה מקיפה לבני 60 ומעלה",
            nameEn: "מיטב פנסיה מקיפה לבני 60 ומעלה",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 0.71,
            year1: 11.93,
            year3: 36.29,
            year5: 45.93
        },
        {
            nameHe: "מיטב פנסיה כללית לבני 50 עד 60",
            nameEn: "מיטב פנסיה כללית לבני 50 עד 60",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.16,
            year1: 15.46,
            year3: 44.58,
            year5: 47.78
        },
        {
            nameHe: "מיטב פנסיה כללית לבני 60 ומעלה",
            nameEn: "מיטב פנסיה כללית לבני 60 ומעלה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.82,
            year1: 11.66,
            year3: 32.98,
            year5: 34.75
        },
        {
            nameHe: "הפניקס פנסיה מקיפה - מסלול לבני 50 ומטה",
            nameEn: "הפניקס פנסיה מקיפה - מסלול לבני 50 ומטה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.45,
            year1: 17.97,
            year3: 52.39,
            year5: 71.48
        },
        {
            nameHe: "הפניקס פנסיה מקיפה - מסלול לבני 50 עד 60",
            nameEn: "הפניקס פנסיה מקיפה - מסלול לבני 50 עד 60",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.12,
            year1: 16.13,
            year3: 47.13,
            year5: 61.87
        },
        {
            nameHe: "מנורה מבטחים פנסיה בסיסי למקבלי קצבה",
            nameEn: "מנורה מבטחים פנסיה בסיסי למקבלי קצבה",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.43,
            year1: 10.42,
            year3: 32.3,
            year5: 49.23
        },
        {
            nameHe: "מיטב פנסיה מקיפה בסיסי למקבלי קצבה",
            nameEn: "מיטב פנסיה מקיפה בסיסי למקבלי קצבה",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 0.31,
            year1: 9.77,
            year3: 33.44,
            year5: 48.97
        },
        {
            nameHe: "מיטב פנסיה כללית בסיסי למקבלי קצבה",
            nameEn: "מיטב פנסיה כללית בסיסי למקבלי קצבה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.86,
            year1: 12.36,
            year3: 37.88,
            year5: 38.17
        },
        {
            nameHe: "כלל פנסיה מסלול הלכה למקבלי קצבה",
            nameEn: "כלל פנסיה מסלול הלכה למקבלי קצבה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.33,
            year1: 9.83,
            year3: 32.52,
            year5: 47.95
        },
        {
            nameHe: "כלל פנסיה מסלול בסיסי למקבלי קצבה",
            nameEn: "כלל פנסיה מסלול בסיסי למקבלי קצבה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.36,
            year1: 9.6,
            year3: 30.14,
            year5: 48.71
        },
        {
            nameHe: "כלל פנסיה משלימה בסיסי למקבלי קצבה",
            nameEn: "כלל פנסיה משלימה בסיסי למקבלי קצבה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.86,
            year1: 13.59,
            year3: 36.33,
            year5: 39.27
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה מניות",
            nameEn: "אלטשולר שחם פנסיה מקיפה מניות",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: 0.14,
            year1: 17.53,
            year3: 60.27,
            year5: 60.24
        },
        {
            nameHe: "מיטב פנסיה מקיפה הלכה למקבלי קצבה",
            nameEn: "מיטב פנסיה מקיפה הלכה למקבלי קצבה",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 0.54,
            year1: 11.03,
            year3: 34.36,
            year5: 50.52
        },
        {
            nameHe: "מנורה מבטחים משלימה - בסיסי למקבלי קצבה",
            nameEn: "מנורה מבטחים משלימה - בסיסי למקבלי קצבה",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.57,
            year1: 9.92,
            year3: 27.79,
            year5: 30.29
        },
        {
            nameHe: "הפניקס פנסיה מקיפה - מסלול בסיסי למקבלי קצבה",
            nameEn: "הפניקס פנסיה מקיפה - מסלול בסיסי למקבלי קצבה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.34,
            year1: 10.24,
            year3: 32.89,
            year5: 49.5
        },
        {
            nameHe: "הפניקס פנסיה משלימה - מסלול בסיסי למקבלי קצבה",
            nameEn: "הפניקס פנסיה משלימה - מסלול בסיסי למקבלי קצבה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.32,
            year1: 9.18,
            year3: 25.45,
            year5: 25.45
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה בסיסי למקבלי קצבה",
            nameEn: "אלטשולר שחם פנסיה מקיפה בסיסי למקבלי קצבה",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: -6.0,
            year1: 8.69,
            year3: 31.43,
            year5: 47.5
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית בסיסי למקבלי קצבה",
            nameEn: "אלטשולר שחם פנסיה כללית בסיסי למקבלי קצבה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -2.0,
            year1: 8.96,
            year3: 14.94,
            year5: 10.08
        },
        {
            nameHe: "הראל פנסיה כללית - בסיסי למקבלי קצבה",
            nameEn: "הראל פנסיה כללית - בסיסי למקבלי קצבה",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.73,
            year1: 12.52,
            year3: 37.46,
            year5: 38.07
        },
        {
            nameHe: "מגדל מקפת אישית עוקב מדדים למקבלי קצבה",
            nameEn: "מגדל מקפת אישית עוקב מדדים למקבלי קצבה",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.7,
            year1: 13.74,
            year3: 43.03,
            year5: 61.48
        },
        {
            nameHe: "מנורה מבטחים פנסיה יעד לפרישה 2065",
            nameEn: "מנורה מבטחים פנסיה יעד לפרישה 2065",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 1.41,
            year1: 19.58,
            year3: 52.5,
            year5: 60.48
        },
        {
            nameHe: "מנורה מבטחים משלימה יעד לפרישה 2065",
            nameEn: "מנורה מבטחים משלימה יעד לפרישה 2065",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 1.35,
            year1: 19.03,
            year3: 49.66,
            year5: 47.15
        },
        {
            nameHe: "הפניקס פנסיה מקיפה עוקב מדד S&P500",
            nameEn: "הפניקס פנסיה מקיפה עוקב מדד S&P500",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: -1.46,
            year1: 4.23,
            year3: 55.06,
            year5: 80.9
        },
        {
            nameHe: "כלל פנסיה עוקב מדד s&p 500",
            nameEn: "כלל פנסיה עוקב מדד s&p 500",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -1.35,
            year1: 3.93,
            year3: 55.41,
            year5: 1.54
        },
        {
            nameHe: "מנורה מבטחים פנסיה אשראי ואג״ח",
            nameEn: "מנורה מבטחים פנסיה אשראי ואג״ח",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.19,
            year1: 8.65,
            year3: 32.5,
            year5: 38.69
        },
        {
            nameHe: "מנורה מבטחים פנסיה עוקב מדדי מניות",
            nameEn: "מנורה מבטחים פנסיה עוקב מדדי מניות",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.54,
            year1: 7.91,
            year3: 43.05,
            year5: 54.41
        },
        {
            nameHe: "מנורה מבטחים משלימה אשראי ואג״ח",
            nameEn: "מנורה מבטחים משלימה אשראי ואג״ח",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.22,
            year1: 7.8,
            year3: 32.14,
            year5: 27.72
        },
        {
            nameHe: "מיטב פנסיה כללית הלכה למקבלי קצבה",
            nameEn: "מיטב פנסיה כללית הלכה למקבלי קצבה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.6,
            year1: 15.62,
            year3: 21.94,
            year5: 1.11
        },
        {
            nameHe: "מיטב פנסיה כללית עוקב מדד S&P500",
            nameEn: "מיטב פנסיה כללית עוקב מדד S&P500",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -2.05,
            year1: 2.98,
            year3: 67.89,
            year5: 88.21
        },
        {
            nameHe: "הראל פנסיה כללית כספי (שקלי)",
            nameEn: "הראל פנסיה כללית כספי (שקלי)",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.37,
            year1: 4.57,
            year3: 13.74,
            year5: 13.96
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית מניות",
            nameEn: "אלטשולר שחם פנסיה כללית מניות",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.17,
            year1: 20.78,
            year3: 72.07,
            year5: 55.19
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית הלכה",
            nameEn: "אלטשולר שחם פנסיה כללית הלכה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -12.0,
            year1: 11.39,
            year3: 40.61,
            year5: 41.54
        },
        {
            nameHe: "כלל פנסיה כספי (שקלי)",
            nameEn: "כלל פנסיה כספי (שקלי)",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.27,
            year1: 5.82,
            year3: 18.09,
            year5: 24.66
        },
        {
            nameHe: "כלל פנסיה משלימה כספי(שקלי)",
            nameEn: "כלל פנסיה משלימה כספי(שקלי)",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.39,
            year1: 5.21,
            year3: 14.99,
            year5: 15.71
        },
        {
            nameHe: "כלל פנסיה משלימה מסלול למקבלי קצבה אג״ח עד 20% מניות",
            nameEn: "כלל פנסיה משלימה מסלול למקבלי קצבה אג״ח עד 20% מניות",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.36,
            year1: 4.29,
            year3: 1.85,
            year5: 1.59
        },
        {
            nameHe: "מיטב פנסיה מקיפה עוקב מדד S&P500",
            nameEn: "מיטב פנסיה מקיפה עוקב מדד S&P500",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: -1.47,
            year1: 4.43,
            year3: 54.94,
            year5: 84.98
        },
        {
            nameHe: "הראל פנסיה כללית מניות",
            nameEn: "הראל פנסיה כללית מניות",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.93,
            year1: 26.16,
            year3: 73.02,
            year5: 78.61
        },
        {
            nameHe: "מנורה מבטחים משלימה עוקב מדד S&P500",
            nameEn: "מנורה מבטחים משלימה עוקב מדד S&P500",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: -1.81,
            year1: 2.87,
            year3: 65.48,
            year5: 1.06
        },
        {
            nameHe: "מנורה מבטחים פנסיה עוקב מדד S&P500",
            nameEn: "מנורה מבטחים פנסיה עוקב מדד S&P500",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: -1.36,
            year1: 4.26,
            year3: 54.11,
            year5: 1.73
        },
        {
            nameHe: "מור פנסיה מקיפה - מסלול לבני 50 ומטה",
            nameEn: "מור פנסיה מקיפה - מסלול לבני 50 ומטה",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.9,
            year1: 17.58,
            year3: 55.6,
            year5: 1.0
        },
        {
            nameHe: "מור פנסיה מקיפה - מסלול לבני 50 עד 60",
            nameEn: "מור פנסיה מקיפה - מסלול לבני 50 עד 60",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.57,
            year1: 14.95,
            year3: 49.07,
            year5: 1.0
        },
        {
            nameHe: "מור פנסיה מקיפה - מסלול לבני 60 ומעלה",
            nameEn: "מור פנסיה מקיפה - מסלול לבני 60 ומעלה",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.3,
            year1: 10.54,
            year3: 35.91,
            year5: 1.0
        },
        {
            nameHe: "מור פנסיה מקיפה - מניות",
            nameEn: "מור פנסיה מקיפה - מניות",
            companyHe: "מור",
            companyEn: "Mor",
            month: 1.42,
            year1: 21.75,
            year3: 66.52,
            year5: 1.0
        },
        {
            nameHe: "מור פנסיה מקיפה - אשראי ואג״ח",
            nameEn: "מור פנסיה מקיפה - אשראי ואג״ח",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.24,
            year1: 8.28,
            year3: 28.23,
            year5: 1.0
        },
        {
            nameHe: "מור פנסיה מקיפה - כספי (שקלי)",
            nameEn: "מור פנסיה מקיפה - כספי (שקלי)",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.28,
            year1: 5.08,
            year3: 17.08,
            year5: 1.0
        },
        {
            nameHe: "מור פנסיה מקיפה - עוקב מדדי מניות",
            nameEn: "מור פנסיה מקיפה - עוקב מדדי מניות",
            companyHe: "מור",
            companyEn: "Mor",
            month: -1.08,
            year1: 5.81,
            year3: 43.38,
            year5: 1.0
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית עוקב מדדי מניות",
            nameEn: "אלטשולר שחם פנסיה כללית עוקב מדדי מניות",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -1.79,
            year1: 9.02,
            year3: 63.8,
            year5: 1.34
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה עוקב מדדי מניות",
            nameEn: "אלטשולר שחם פנסיה מקיפה עוקב מדדי מניות",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: -1.33,
            year1: 8.92,
            year3: 50.37,
            year5: 1.3
        },
        {
            nameHe: "מנורה מבטחים משלימה עוקב מדדי מניות",
            nameEn: "מנורה מבטחים משלימה עוקב מדדי מניות",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.75,
            year1: 7.82,
            year3: 49.46,
            year5: 57.75
        },
        {
            nameHe: "הראל פנסיה עוקב מדד s&p 500",
            nameEn: "הראל פנסיה עוקב מדד s&p 500",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -1.37,
            year1: 3.96,
            year3: 55.84,
            year5: 1.13
        },
        {
            nameHe: "הראל פנסיה כללית עוקב מדד s&p",
            nameEn: "הראל פנסיה כללית עוקב מדד s&p",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -1.85,
            year1: 2.61,
            year3: 67.53,
            year5: 1.13
        },
        {
            nameHe: "הפניקס פנסיה משלימה עוקב מדד S&P500",
            nameEn: "הפניקס פנסיה משלימה עוקב מדד S&P500",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: -1.97,
            year1: 2.78,
            year3: 67.45,
            year5: 1.55
        },
        {
            nameHe: "הראל פנסיה כללית הלכה",
            nameEn: "הראל פנסיה כללית הלכה",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.26,
            year1: 14.47,
            year3: 34.89,
            year5: 1.13
        },
        {
            nameHe: "הראל פנסיה כללית- הלכה למקבלי קצבה",
            nameEn: "הראל פנסיה כללית- הלכה למקבלי קצבה",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.33,
            year1: 14.22,
            year3: 28.82,
            year5: 1.13
        },
        {
            nameHe: "כלל פנסיה משלימה מניות",
            nameEn: "כלל פנסיה משלימה מניות",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 2.05,
            year1: 27.09,
            year3: 70.51,
            year5: 0.98
        },
        {
            nameHe: "אינפיניטי מקיפה מסלול לבני 50 ומטה",
            nameEn: "אינפיניטי מקיפה מסלול לבני 50 ומטה",
            companyHe: "אינפיניטי",
            companyEn: "Infinity",
            month: 0.95,
            year1: 16.5,
            year3: 54.93,
            year5: 1.0
        },
        {
            nameHe: "אינפיניטי מקיפה מסלול לבני 50 עד 60",
            nameEn: "אינפיניטי מקיפה מסלול לבני 50 עד 60",
            companyHe: "אינפיניטי",
            companyEn: "Infinity",
            month: 0.92,
            year1: 14.35,
            year3: 52.09,
            year5: 1.0
        },
        {
            nameHe: "אינפיניטי מקיפה מסלול לבני 60 ומעלה",
            nameEn: "אינפיניטי מקיפה מסלול לבני 60 ומעלה",
            companyHe: "אינפיניטי",
            companyEn: "Infinity",
            month: 0.57,
            year1: 11.3,
            year3: 37.02,
            year5: 1.0
        },
        {
            nameHe: "אינפיניטי כללית מסלול לבני 50 ומטה",
            nameEn: "אינפיניטי כללית מסלול לבני 50 ומטה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.73,
            year1: 17.94,
            year3: 53.93,
            year5: 1.01
        },
        {
            nameHe: "אינפיניטי כללית מסלול לבני 50 עד 60",
            nameEn: "אינפיניטי כללית מסלול לבני 50 עד 60",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.12,
            year1: 14.68,
            year3: 48.11,
            year5: 1.01
        },
        {
            nameHe: "אינפיניטי כללית מסלול לבני 60 ומעלה",
            nameEn: "אינפיניטי כללית מסלול לבני 60 ומעלה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.14,
            year1: 11.02,
            year3: 34.78,
            year5: 1.01
        },
        {
            nameHe: "מור פנסיה כללית - מסלול בסיסי למקבלי קצבה",
            nameEn: "מור פנסיה כללית - מסלול בסיסי למקבלי קצבה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.7,
            year1: 11.93,
            year3: 28.1,
            year5: 1.0
        },
        {
            nameHe: "מור פנסיה כללית - כספי (שקלי)",
            nameEn: "מור פנסיה כללית - כספי (שקלי)",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.45,
            year1: 4.49,
            year3: 13.72,
            year5: 1.0
        },
        {
            nameHe: "מור פנסיה מקיפה - מסלול בסיסי למקבלי קצבה",
            nameEn: "מור פנסיה מקיפה - מסלול בסיסי למקבלי קצבה",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.45,
            year1: 10.19,
            year3: 31.18,
            year5: 1.0
        },
        {
            nameHe: "מור פנסיה מקיפה - אג״ח עד 25% מניות",
            nameEn: "מור פנסיה מקיפה - אג״ח עד 25% מניות",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.75,
            year1: 9.09,
            year3: 1.0,
            year5: 0.2
        },
        {
            nameHe: "מור פנסיה כללית - מסלול לבני 50 ומטה",
            nameEn: "מור פנסיה כללית - מסלול לבני 50 ומטה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.79,
            year1: 16.72,
            year3: 52.57,
            year5: 1.0
        },
        {
            nameHe: "מור פנסיה כללית - מסלול לבני 50 עד 60",
            nameEn: "מור פנסיה כללית - מסלול לבני 50 עד 60",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.8,
            year1: 14.65,
            year3: 46.64,
            year5: 1.0
        },
        {
            nameHe: "מור פנסיה כללית - מסלול לבני 60 ומעלה",
            nameEn: "מור פנסיה כללית - מסלול לבני 60 ומעלה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.45,
            year1: 10.98,
            year3: 33.21,
            year5: 1.0
        },
        {
            nameHe: "מור פנסיה כללית - מניות",
            nameEn: "מור פנסיה כללית - מניות",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.83,
            year1: 26.37,
            year3: 77.62,
            year5: 1.0
        },
        {
            nameHe: "מור פנסיה כללית - אשראי ואג״ח",
            nameEn: "מור פנסיה כללית - אשראי ואג״ח",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.39,
            year1: 7.62,
            year3: 20.46,
            year5: 1.0
        },
        {
            nameHe: "מור פנסיה כללית - אג״ח עד 25% מניות",
            nameEn: "מור פנסיה כללית - אג״ח עד 25% מניות",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.5,
            year1: 6.71,
            year3: 1.0,
            year5: 0.2
        },
        {
            nameHe: "מור פנסיה כללית - עוקב מדדי מניות",
            nameEn: "מור פנסיה כללית - עוקב מדדי מניות",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -1.27,
            year1: 5.75,
            year3: 37.95,
            year5: 1.0
        },
        {
            nameHe: "כלל פנסיה משלימה משולב סחיר",
            nameEn: "כלל פנסיה משלימה משולב סחיר",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 2.67,
            year1: 29.89,
            year3: 0.98,
            year5: 0.23
        },
        {
            nameHe: "כלל פנסיה משולב סחיר",
            nameEn: "כלל פנסיה משולב סחיר",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 2.59,
            year1: 30.12,
            year3: 69.22,
            year5: 1.54
        },
        {
            nameHe: "כלל פנסיה עוקב מדדים גמיש",
            nameEn: "כלל פנסיה עוקב מדדים גמיש",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -1.42,
            year1: 3.57,
            year3: 25.92,
            year5: 1.54
        },
        {
            nameHe: "כלל פנסיה משלימה עוקב מדדים גמיש",
            nameEn: "כלל פנסיה משלימה עוקב מדדים גמיש",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -1.96,
            year1: 0.05,
            year3: 17.66,
            year5: 0.98
        },
        {
            nameHe: "הראל פנסיה- משולב סחיר",
            nameEn: "הראל פנסיה- משולב סחיר",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -1.14,
            year1: 5.62,
            year3: 21.48,
            year5: 1.51
        },
        {
            nameHe: "הראל פנסיה- עוקב מדדים גמיש",
            nameEn: "הראל פנסיה- עוקב מדדים גמיש",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.31,
            year1: 16.04,
            year3: 44.24,
            year5: 1.51
        },
        {
            nameHe: "הפניקס פנסיה משלימה- שריעה",
            nameEn: "הפניקס פנסיה משלימה- שריעה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: -2.41,
            year1: 4.61,
            year3: 57.02,
            year5: 1.55
        },
        {
            nameHe: "הראל פנסיה כללית עוקב מדדים גמיש",
            nameEn: "הראל פנסיה כללית עוקב מדדים גמיש",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.35,
            year1: 15.28,
            year3: 43.02,
            year5: 1.13
        },
        {
            nameHe: "הראל פנסיה כללית משולב סחיר",
            nameEn: "הראל פנסיה כללית משולב סחיר",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -2.04,
            year1: 2.57,
            year3: 16.27,
            year5: 1.13
        },
        {
            nameHe: "הראל פנסיה כללית קיימות",
            nameEn: "הראל פנסיה כללית קיימות",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -8.0,
            year1: 14.29,
            year3: 1.13,
            year5: 0.17
        },
        {
            nameHe: "הפניקס פנסיה משלימה עוקב מדדים גמיש",
            nameEn: "הפניקס פנסיה משלימה עוקב מדדים גמיש",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: -1.57,
            year1: 0.35,
            year3: 13.05,
            year5: 1.55
        },
        {
            nameHe: "הפניקס פנסיה משלימה משולב סחיר",
            nameEn: "הפניקס פנסיה משלימה משולב סחיר",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.89,
            year1: 14.61,
            year3: 1.55,
            year5: 0.15
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה משולב סחיר",
            nameEn: "אלטשולר שחם פנסיה מקיפה משולב סחיר",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: 0.05,
            year1: 13.97,
            year3: 44.05,
            year5: 1.3
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה עוקב מדדים גמיש",
            nameEn: "אלטשולר שחם פנסיה מקיפה עוקב מדדים גמיש",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: -1.1,
            year1: 5.92,
            year3: 33.5,
            year5: 1.3
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית משולב סחיר",
            nameEn: "אלטשולר שחם פנסיה כללית משולב סחיר",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.01,
            year1: 13.34,
            year3: 35.79,
            year5: 1.34
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית עוקב מדדים גמיש",
            nameEn: "אלטשולר שחם פנסיה כללית עוקב מדדים גמיש",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -2.09,
            year1: 2.51,
            year3: 21.28,
            year5: 1.34
        },
        {
            nameHe: "מנורה מבטחים משלימה עוקב מדדים גמיש",
            nameEn: "מנורה מבטחים משלימה עוקב מדדים גמיש",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.98,
            year1: 12.56,
            year3: 33.96,
            year5: 1.78
        },
        {
            nameHe: "אינפיניטי פנסיה מקיפה עוקב מדדים גמיש",
            nameEn: "אינפיניטי פנסיה מקיפה עוקב מדדים גמיש",
            companyHe: "אינפיניטי",
            companyEn: "Infinity",
            month: 0.35,
            year1: 15.92,
            year3: 1.0,
            year5: 0.18
        },
        {
            nameHe: "הפניקס פנסיה מקיפה משולב סחיר",
            nameEn: "הפניקס פנסיה מקיפה משולב סחיר",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.74,
            year1: 14.73,
            year3: 1.55,
            year5: 0.15
        },
        {
            nameHe: "מיטב פנסיה מקיפה משולב סחיר",
            nameEn: "מיטב פנסיה מקיפה משולב סחיר",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 3.77,
            year1: 36.61,
            year3: 91.23,
            year5: 1.31
        },
        {
            nameHe: "מיטב פנסיה מקיפה קיימות",
            nameEn: "מיטב פנסיה מקיפה קיימות",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 0.4,
            year1: 13.59,
            year3: 27.02,
            year5: 1.31
        },
        {
            nameHe: "מיטב פנסיה כללית משולב סחיר",
            nameEn: "מיטב פנסיה כללית משולב סחיר",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 5.4,
            year1: 50.26,
            year3: 1.11,
            year5: 0.16
        },
        {
            nameHe: "מיטב פנסיה כללית עוקב מדדים גמיש",
            nameEn: "מיטב פנסיה כללית עוקב מדדים גמיש",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -8.0,
            year1: 5.5,
            year3: 1.11,
            year5: 0.16
        },
        {
            nameHe: "מיטב פנסיה כללית קיימות",
            nameEn: "מיטב פנסיה כללית קיימות",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.57,
            year1: 16.3,
            year3: 1.11,
            year5: 0.16
        },
        {
            nameHe: "מנורה מבטחים פנסיה עוקב מדדים גמיש",
            nameEn: "מנורה מבטחים פנסיה עוקב מדדים גמיש",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.92,
            year1: 13.05,
            year3: 35.88,
            year5: 1.73
        },
        {
            nameHe: "מור פנסיה מקיפה - עוקב מדדים גמיש",
            nameEn: "מור פנסיה מקיפה - עוקב מדדים גמיש",
            companyHe: "מור",
            companyEn: "Mor",
            month: -1.53,
            year1: 2.77,
            year3: 1.0,
            year5: 0.2
        },
        {
            nameHe: "מור פנסיה מקיפה - משולב סחיר",
            nameEn: "מור פנסיה מקיפה - משולב סחיר",
            companyHe: "מור",
            companyEn: "Mor",
            month: 0.66,
            year1: 16.27,
            year3: 1.0,
            year5: 0.2
        },
        {
            nameHe: "מור פנסיה כללית - עוקב מדדים גמיש",
            nameEn: "מור פנסיה כללית - עוקב מדדים גמיש",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -1.87,
            year1: -0.74,
            year3: 1.0,
            year5: 0.2
        },
        {
            nameHe: "מור פנסיה כללית - משולב סחיר",
            nameEn: "מור פנסיה כללית - משולב סחיר",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.92,
            year1: 15.98,
            year3: 1.0,
            year5: 0.2
        },
        {
            nameHe: "כלל פנסיה משלימה שקלי טווח קצר",
            nameEn: "כלל פנסיה משלימה שקלי טווח קצר",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.5,
            year1: 4.25,
            year3: 4.68,
            year5: 0.98
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה עוקב מדד S&P500",
            nameEn: "אלטשולר שחם פנסיה מקיפה עוקב מדד S&P500",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: -1.14,
            year1: 4.1,
            year3: 1.3,
            year5: 0.14
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית עוקב מדד S&P 500",
            nameEn: "אלטשולר שחם פנסיה כללית עוקב מדד S&P 500",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -1.63,
            year1: 2.88,
            year3: 1.34,
            year5: 0.2
        },
        {
            nameHe: "כלל פנסיה משלימה עוקב מדד s&p500",
            nameEn: "כלל פנסיה משלימה עוקב מדד s&p500",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -1.83,
            year1: 2.49,
            year3: 1.54,
            year5: 0.15
        },
        {
            nameHe: "הראל פנסיה כללית עוקב מדדי מניות",
            nameEn: "הראל פנסיה כללית עוקב מדדי מניות",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -1.23,
            year1: 6.21,
            year3: 1.13,
            year5: 0.17
        },
        {
            nameHe: "כלל פנסיה משלימה עוקב מדדי מניות",
            nameEn: "כלל פנסיה משלימה עוקב מדדי מניות",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -1.23,
            year1: 1.97,
            year3: 0.98,
            year5: 0.23
        },
        {
            nameHe: "כלל פנסיה עוקב מדדי מניות",
            nameEn: "כלל פנסיה עוקב מדדי מניות",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -9.0,
            year1: 3.57,
            year3: 1.54,
            year5: 0.15
        },
        {
            nameHe: "מנורה מבטחים משלימה מניות",
            nameEn: "מנורה מבטחים משלימה מניות",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 2.11,
            year1: 27.95,
            year3: null,
            year5: null
        },
        {
            nameHe: "מסלול בסיסי למקבלי קצבה",
            nameEn: "מסלול בסיסי למקבלי קצבה",
            companyHe: "אחר",
            companyEn: "Other",
            month: 0.83,
            year1: 11.79,
            year3: 37.96,
            year5: null
        },
        {
            nameHe: "מגדל מקפת משלימה בסיסי למקבלי קצבה",
            nameEn: "מגדל מקפת משלימה בסיסי למקבלי קצבה",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.65,
            year1: 10.84,
            year3: 29.07,
            year5: 27.77
        },
        {
            nameHe: "מגדל מקפת אישית הלכה למקבלי קצבה",
            nameEn: "מגדל מקפת אישית הלכה למקבלי קצבה",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.36,
            year1: 10.63,
            year3: 33.7,
            year5: 49.47
        },
        {
            nameHe: "אינפיניטי מקיפה עוקב מדד S&P 500",
            nameEn: "אינפיניטי מקיפה עוקב מדד S&P 500",
            companyHe: "אינפיניטי",
            companyEn: "Infinity",
            month: -1.1,
            year1: 5.5,
            year3: 54.01,
            year5: null
        },
        {
            nameHe: "מגדל מקפת אישית עוקב מדד S&P500",
            nameEn: "מגדל מקפת אישית עוקב מדד S&P500",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: -1.25,
            year1: 4.15,
            year3: 56.18,
            year5: null
        },
        {
            nameHe: "אינפיניטי כללית עוקב מדד S&P 500",
            nameEn: "אינפיניטי כללית עוקב מדד S&P 500",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -1.58,
            year1: 3.17,
            year3: 66.94,
            year5: null
        },
        {
            nameHe: "מגדל מקפת משלימה משולב סחיר",
            nameEn: "מגדל מקפת משלימה משולב סחיר",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.98,
            year1: 15.84,
            year3: null,
            year5: null
        },
        {
            nameHe: "מגדל מקפת אישית משולב סחיר",
            nameEn: "מגדל מקפת אישית משולב סחיר",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.86,
            year1: 15.72,
            year3: 42.29,
            year5: null
        },
        {
            nameHe: "הראל פנסיה- קיימות",
            nameEn: "הראל פנסיה- קיימות",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -7.0,
            year1: 12.27,
            year3: 7.21,
            year5: null
        },
        {
            nameHe: "מנורה מבטחים משלימה קיימות",
            nameEn: "מנורה מבטחים משלימה קיימות",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 1.27,
            year1: 11.43,
            year3: null,
            year5: null
        },
        {
            nameHe: "מנורה מבטחים פנסיה קיימות",
            nameEn: "מנורה מבטחים פנסיה קיימות",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: -1.98,
            year1: 5.92,
            year3: null,
            year5: null
        }
    ],

    // Gemel Funds - קופות גמל להשקעה
    gemel: [
        {
            nameHe: "הראל גמל להשקעה מניות",
            nameEn: "הראל גמל להשקעה מניות",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 3.04,
            year1: 33.35,
            year3: 98.68,
            year5: 107.1,
            fee: 0.55
        },
        {
            nameHe: "כלל גמל לעתיד מניות",
            nameEn: "כלל גמל לעתיד מניות",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 2.11,
            year1: 27.3,
            year3: 69.78,
            year5: 74.3,
            fee: 0.64
        },
        {
            nameHe: "מגדל גמל להשקעה מניות",
            nameEn: "מגדל גמל להשקעה מניות",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.97,
            year1: 26.73,
            year3: 77.77,
            year5: 86.48,
            fee: 0.59
        },
        {
            nameHe: "מור גמל להשקעה - מניות",
            nameEn: "מור גמל להשקעה - מניות",
            companyHe: "מור",
            companyEn: "Mor",
            month: 1.35,
            year1: 26.72,
            year3: 75.06,
            year5: 82.2,
            fee: 0.73
        },
        {
            nameHe: "מיטב גמל להשקעה מניות",
            nameEn: "מיטב גמל להשקעה מניות",
            companyHe: "מיטב",
            companyEn: "Meitav",
            month: 2.12,
            year1: 26.49,
            year3: 80.04,
            year5: 84.59,
            fee: 0.59
        },
        {
            nameHe: "הפניקס גמל להשקעה מניות",
            nameEn: "הפניקס גמל להשקעה מניות",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.94,
            year1: 25.89,
            year3: 76.51,
            year5: 81.07,
            fee: 0.59
        },
        {
            nameHe: "אינפיניטי גמל להשקעה מניות",
            nameEn: "אינפיניטי גמל להשקעה מניות",
            companyHe: "אינפיניטי",
            companyEn: "Infiniti",
            month: 1.44,
            year1: 22.3,
            year3: 89.34,
            year5: 102.77,
            fee: 0.6
        },
        {
            nameHe: "ילין לפידות גמל להשקעה מניות",
            nameEn: "ילין לפידות גמל להשקעה מניות",
            companyHe: "ילין לפידות",
            companyEn: "Yelin Lapidot",
            month: 1.41,
            year1: 22.01,
            year3: 80.0,
            year5: 92.55,
            fee: 0.67
        },
        {
            nameHe: "ילין לפידות גמל להשקעה כללי",
            nameEn: "ילין לפידות גמל להשקעה כללי",
            companyHe: "ילין לפידות",
            companyEn: "Yelin Lapidot",
            month: 0.62,
            year1: 13.52,
            year3: 44.7,
            year5: 49.05,
            fee: 0.68
        },
        {
            nameHe: "אלטשולר שחם חיסכון פלוס מניות",
            nameEn: "אלטשולר שחם חיסכון פלוס מניות",
            companyHe: "אלטשולר שחם",
            companyEn: "Altshuler Shaham",
            month: 0.14,
            year1: 20.86,
            year3: 70.3,
            year5: 59.01,
            fee: 0.59
        },
        {
            nameHe: "אנליסט גמל להשקעה מניות",
            nameEn: "אנליסט גמל להשקעה מניות",
            companyHe: "אנליסט",
            companyEn: "Analyst",
            month: 0.99,
            year1: 20.7,
            year3: 82.66,
            year5: 87.42,
            fee: 0.61
        }
    ],

    // Savings Policies - פוליסות חיסכון
    savings: [
        {
            nameHe: "מגדל מנוהל עי מגדל שוקי הון עוקב מדד s&p 500",
            nameEn: "מגדל מנוהל עי מגדל שוקי הון עוקב מדד s&p 500",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.49,
            year1: 15.2,
            year3: 1.09,
            year5: null
        },
        {
            nameHe: "מגדל-מנוהל מגדל שוקי הון-מסלול עוקב מדדי מניות",
            nameEn: "מגדל-מנוהל מגדל שוקי הון-מסלול עוקב מדדי מניות",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.54,
            year1: 24.09,
            year3: 1.09,
            year5: null
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ עוקב מדד S&P500",
            nameEn: "מנורה מבטחים ביטוח בע״מ עוקב מדד S&P500",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: -1.81,
            year1: 3.01,
            year3: 0.59,
            year5: null
        },
        {
            nameHe: "איילון חברה לביטוח בע״מ משולב סחיר",
            nameEn: "איילון חברה לביטוח בע״מ משולב סחיר",
            companyHe: "איילון",
            companyEn: "Ayalon",
            month: -1.27,
            year1: 0.19,
            year3: 0.71,
            year5: null
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ עוקב מדדי אג״ח",
            nameEn: "מנורה מבטחים ביטוח בע״מ עוקב מדדי אג״ח",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.26,
            year1: 5.25,
            year3: 0.69,
            year5: null
        },
        {
            nameHe: "הראל מסלול עוקב מדדי מניות",
            nameEn: "הראל מסלול עוקב מדדי מניות",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -1.22,
            year1: 6.39,
            year3: 0.64,
            year5: null
        },
        {
            nameHe: "מגדל מסלול עוקב מדדי מניות",
            nameEn: "מגדל מסלול עוקב מדדי מניות",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: -0.32,
            year1: 6.46,
            year3: 1.0,
            year5: null
        },
        {
            nameHe: "הפניקס עוקב מדדי אג״ח",
            nameEn: "הפניקס עוקב מדדי אג״ח",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.48,
            year1: 5.05,
            year3: 0.76,
            year5: null
        },
        {
            nameHe: "מגדל מסלול אשראי ואג״ח עם מניות (עד 25% מניות)",
            nameEn: "מגדל מסלול אשראי ואג״ח עם מניות (עד 25% מניות)",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.6,
            year1: 10.83,
            year3: 1.01,
            year5: null
        },
        {
            nameHe: "איילון-קרן י'",
            nameEn: "איילון-קרן י'",
            companyHe: "איילון",
            companyEn: "Ayalon",
            month: 1.77,
            year1: 19.51,
            year3: 47.75,
            year5: 56.45
        },
        {
            nameHe: "איילון-קרן י' חדשה",
            nameEn: "איילון-קרן י' חדשה",
            companyHe: "איילון",
            companyEn: "Ayalon",
            month: 1.78,
            year1: 19.44,
            year3: 47.35,
            year5: 55.68
        },
        {
            nameHe: "הראל-קרן ט'",
            nameEn: "הראל-קרן ט'",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.93,
            year1: 13.63,
            year3: 35.85,
            year5: 45.83
        },
        {
            nameHe: "הראל-קרן י'",
            nameEn: "הראל-קרן י'",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.99,
            year1: 14.28,
            year3: 37.81,
            year5: 48.23
        },
        {
            nameHe: "הראל-קרן י' חדשה",
            nameEn: "הראל-קרן י' חדשה",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.99,
            year1: 14.28,
            year3: 37.81,
            year5: 48.23
        },
        {
            nameHe: "הראל-קרן ח'",
            nameEn: "הראל-קרן ח'",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.91,
            year1: 13.2,
            year3: 35.05,
            year5: 44.12
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ קיימות",
            nameEn: "מנורה מבטחים ביטוח בע״מ קיימות",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: -1.99,
            year1: 5.84,
            year3: 0.75,
            year5: null
        },
        {
            nameHe: "כלל חברה לביטוח בע״מ כללי פאסיבי",
            nameEn: "כלל חברה לביטוח בע״מ כללי פאסיבי",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 3.33,
            year1: 3.33,
            year3: null,
            year5: null
        },
        {
            nameHe: "כלל חברה לביטוח בע״מ עוקב מדדי מניות",
            nameEn: "כלל חברה לביטוח בע״מ עוקב מדדי מניות",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -1.21,
            year1: 1.99,
            year3: 0.76,
            year5: null
        },
        {
            nameHe: "מגדל-קרן ט'",
            nameEn: "מגדל-קרן ט'",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.92,
            year1: 12.86,
            year3: 34.34,
            year5: 43.77
        },
        {
            nameHe: "מגדל-קרן י'",
            nameEn: "מגדל-קרן י'",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.11,
            year1: 14.92,
            year3: 40.95,
            year5: 52.48
        },
        {
            nameHe: "מגדל - כללי",
            nameEn: "מגדל - כללי",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.12,
            year1: 15.16,
            year3: 40.66,
            year5: 48.25
        },
        {
            nameHe: "מנורה-קרן ט'",
            nameEn: "מנורה-קרן ט'",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 1.21,
            year1: 17.45,
            year3: 47.38,
            year5: 55.9
        },
        {
            nameHe: "איילון-קרן ט'",
            nameEn: "איילון-קרן ט'",
            companyHe: "איילון",
            companyEn: "Ayalon",
            month: 1.66,
            year1: 19.02,
            year3: 50.38,
            year5: 58.5
        },
        {
            nameHe: "הכשרה חברה לביטוח בע״מ - קרן י'",
            nameEn: "הכשרה חברה לביטוח בע״מ - קרן י'",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 0.66,
            year1: 11.63,
            year3: 35.13,
            year5: 46.36
        },
        {
            nameHe: "הכשרה חברה לביטוח בע״מ - קרן ט'",
            nameEn: "הכשרה חברה לביטוח בע״מ - קרן ט'",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 0.75,
            year1: 11.95,
            year3: 34.11,
            year5: 34.31
        },
        {
            nameHe: "מנורה-קרן י' חדשה",
            nameEn: "מנורה-קרן י' חדשה",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 1.16,
            year1: 16.18,
            year3: 41.29,
            year5: 48.27
        },
        {
            nameHe: "מגדל-קרן ח'",
            nameEn: "מגדל-קרן ח'",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.95,
            year1: 13.23,
            year3: 35.99,
            year5: 46.92
        },
        {
            nameHe: "מנורה-קרן י'",
            nameEn: "מנורה-קרן י'",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 1.16,
            year1: 16.18,
            year3: 41.29,
            year5: 48.27
        },
        {
            nameHe: "כלל חברה לביטוח בע״מ עוקב מדדים - גמיש",
            nameEn: "כלל חברה לביטוח בע״מ עוקב מדדים - גמיש",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -1.97,
            year1: 0.11,
            year3: 11.99,
            year5: null
        },
        {
            nameHe: "כלל חברה לביטוח בע״מ משולב סחיר",
            nameEn: "כלל חברה לביטוח בע״מ משולב סחיר",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 2.69,
            year1: 30.38,
            year3: null,
            year5: null
        },
        {
            nameHe: "מגדל מסלול עוקב מדדים - גמיש",
            nameEn: "מגדל מסלול עוקב מדדים - גמיש",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: -0.94,
            year1: 0.27,
            year3: 11.98,
            year5: null
        },
        {
            nameHe: "מגדל מסלול משולב סחיר",
            nameEn: "מגדל מסלול משולב סחיר",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.97,
            year1: 15.54,
            year3: 39.06,
            year5: null
        },
        {
            nameHe: "הראל מסלול קיימות",
            nameEn: "הראל מסלול קיימות",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -1.04,
            year1: 13.54,
            year3: null,
            year5: null
        },
        {
            nameHe: "הראל מסלול משולב סחיר",
            nameEn: "הראל מסלול משולב סחיר",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -1.99,
            year1: 2.75,
            year3: 16.05,
            year5: null
        },
        {
            nameHe: "הפניקס משולב סחיר",
            nameEn: "הפניקס משולב סחיר",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 3.3,
            year1: 17.67,
            year3: null,
            year5: null
        },
        {
            nameHe: "הפניקס עוקב מדדים גמיש",
            nameEn: "הפניקס עוקב מדדים גמיש",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: -1.46,
            year1: 1.96,
            year3: 18.88,
            year5: null
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ משולב סחיר",
            nameEn: "מנורה מבטחים ביטוח בע״מ משולב סחיר",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: -0.89,
            year1: 5.09,
            year3: null,
            year5: null
        },
        {
            nameHe: "הכשרה חברה לביטוח בע״מ - אשראי ואג״ח",
            nameEn: "הכשרה חברה לביטוח בע״מ - אשראי ואג״ח",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 0.35,
            year1: 5.95,
            year3: 0.87,
            year5: null
        },
        {
            nameHe: "הראל מסלול עוקב מדדים גמיש",
            nameEn: "הראל מסלול עוקב מדדים גמיש",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.36,
            year1: 15.2,
            year3: 40.28,
            year5: null
        },
        {
            nameHe: "הכשרה חברה לביטוח בע״מ - עוקב מדדים גמיש",
            nameEn: "הכשרה חברה לביטוח בע״מ - עוקב מדדים גמיש",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 0.5,
            year1: 9.88,
            year3: null,
            year5: null
        },
        {
            nameHe: "הכשרה חברה לביטוח בע״מ - משולב סחיר",
            nameEn: "הכשרה חברה לביטוח בע״מ - משולב סחיר",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 2.53,
            year1: 21.15,
            year3: null,
            year5: null
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ עוקב מדדי מניות",
            nameEn: "מנורה מבטחים ביטוח בע״מ עוקב מדדי מניות",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 1.71,
            year1: 18.94,
            year3: 0.68,
            year5: null
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ עוקב מדדים גמיש",
            nameEn: "מנורה מבטחים ביטוח בע״מ עוקב מדדים גמיש",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 1.04,
            year1: 12.71,
            year3: 0.69,
            year5: null
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ בסיסי למקבלי קצבה (משת)",
            nameEn: "מנורה מבטחים ביטוח בע״מ בסיסי למקבלי קצבה (משת)",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.71,
            year1: 10.58,
            year3: 23.44,
            year5: null
        },
        {
            nameHe: "הכשרה חברה לביטוח בע״מ - מנוהל באמצעות אנליסט ניהול תיקי השקעות בע״מ - אג״ח ממשלות",
            nameEn: "הכשרה חברה לביטוח בע״מ - מנוהל באמצעות אנליסט ניהול תיקי השקעות בע״מ - אג״ח ממשלות",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 0.28,
            year1: 5.53,
            year3: 13.04,
            year5: null
        },
        {
            nameHe: "הפניקס BlackRock מניות",
            nameEn: "הפניקס BlackRock מניות",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: -0.81,
            year1: 7.65,
            year3: 56.72,
            year5: null
        },
        {
            nameHe: "הפניקס BlackRock כללי",
            nameEn: "הפניקס BlackRock כללי",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: -1.14,
            year1: 1.99,
            year3: 32.95,
            year5: null
        },
        {
            nameHe: "מגדל מסלול עוקב מדד s&p 500",
            nameEn: "מגדל מסלול עוקב מדד s&p 500",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: -1.7,
            year1: 2.82,
            year3: 68.17,
            year5: null
        },
        {
            nameHe: "הכשרה - מנוהל באמצעות אנליסט ניהול תיקי השקעות בע״מ - מניות",
            nameEn: "הכשרה - מנוהל באמצעות אנליסט ניהול תיקי השקעות בע״מ - מניות",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 1.26,
            year1: 21.9,
            year3: 74.58,
            year5: null
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ בסיסי למקבלי קצבה (2) (משת)",
            nameEn: "מנורה מבטחים ביטוח בע״מ בסיסי למקבלי קצבה (2) (משת)",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.7,
            year1: 11.01,
            year3: 27.15,
            year5: null
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ לבני 50 ומטה (משת)",
            nameEn: "מנורה מבטחים ביטוח בע״מ לבני 50 ומטה (משת)",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 1.5,
            year1: 18.74,
            year3: 47.12,
            year5: null
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ לבני 60 ומעלה (משת)",
            nameEn: "מנורה מבטחים ביטוח בע״מ לבני 60 ומעלה (משת)",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.89,
            year1: 11.33,
            year3: 28.08,
            year5: null
        },
        {
            nameHe: "איילון חברה לביטוח בע״מ עוקבי מדדים עוקב מדד s&p 500",
            nameEn: "איילון חברה לביטוח בע״מ עוקבי מדדים עוקב מדד s&p 500",
            companyHe: "איילון",
            companyEn: "Ayalon",
            month: -1.97,
            year1: 3.29,
            year3: null,
            year5: null
        },
        {
            nameHe: "איילון חברה לביטוח בע״מ עוקב מדדים - גמיש",
            nameEn: "איילון חברה לביטוח בע״מ עוקב מדדים - גמיש",
            companyHe: "איילון",
            companyEn: "Ayalon",
            month: 3.86,
            year1: 55.42,
            year3: null,
            year5: null
        },
        {
            nameHe: "כלל-קרן י'",
            nameEn: "כלל-קרן י'",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.38,
            year1: 16.54,
            year3: 39.78,
            year5: 52.11
        },
        {
            nameHe: "כלל-קרן ט'",
            nameEn: "כלל-קרן ט'",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.38,
            year1: 16.22,
            year3: 39.46,
            year5: 52.94
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ לבני 50-60 (משת)",
            nameEn: "מנורה מבטחים ביטוח בע״מ לבני 50-60 (משת)",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 1.25,
            year1: 16.22,
            year3: 41.0,
            year5: null
        },
        {
            nameHe: "הראל מסלול הוני ללא אג״ח",
            nameEn: "הראל מסלול הוני ללא אג״ח",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.78,
            year1: null,
            year3: null,
            year5: null
        },
        {
            nameHe: "הכשרה מנוהל באמצעות מור בית השקעות ניהול תיקים בע״מ - מניות",
            nameEn: "הכשרה מנוהל באמצעות מור בית השקעות ניהול תיקים בע״מ - מניות",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 2.29,
            year1: 23.2,
            year3: 69.24,
            year5: 69.23
        },
        {
            nameHe: "הכשרה- מור בית השקעות ניהול תיקים בע״מ- כללי",
            nameEn: "הכשרה- מור בית השקעות ניהול תיקים בע״מ- כללי",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 1.29,
            year1: 14.27,
            year3: 40.74,
            year5: 40.13
        },
        {
            nameHe: "הכשרה - מנוהל באמצעות מור בית השקעות ניהול תיקים בע״מ - אג״ח ממשלות",
            nameEn: "הכשרה - מנוהל באמצעות מור בית השקעות ניהול תיקים בע״מ - אג״ח ממשלות",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 0.14,
            year1: 5.29,
            year3: 13.95,
            year5: 9.8
        },
        {
            nameHe: "איילון חברה לביטוח בע״מ מניות סחיר",
            nameEn: "איילון חברה לביטוח בע״מ מניות סחיר",
            companyHe: "איילון",
            companyEn: "Ayalon",
            month: -0.49,
            year1: 12.54,
            year3: 72.58,
            year5: 60.53
        },
        {
            nameHe: "איי. די. איי. מסלול מניות",
            nameEn: "איי. די. איי. מסלול מניות",
            companyHe: "אי.ד.י",
            companyEn: "IDI",
            month: 2.35,
            year1: 25.73,
            year3: 77.31,
            year5: null
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ אשראי ואג״ח עם מניות (עד 25% מניות)",
            nameEn: "מנורה מבטחים ביטוח בע״מ אשראי ואג״ח עם מניות (עד 25% מניות)",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.44,
            year1: 9.59,
            year3: 27.09,
            year5: 26.59
        },
        {
            nameHe: "כלל חברה לביטוח בע״מ כספי (שקלי)",
            nameEn: "כלל חברה לביטוח בע״מ כספי (שקלי)",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.39,
            year1: 5.19,
            year3: 15.12,
            year5: 15.84
        },
        {
            nameHe: "כלל חברה לביטוח בע״מ עוקב מדד s&p 500",
            nameEn: "כלל חברה לביטוח בע״מ עוקב מדד s&p 500",
            companyHe: "כלל",
            companyEn: "Clal",
            month: -1.84,
            year1: 2.5,
            year3: 66.49,
            year5: 79.67
        },
        {
            nameHe: "הכשרה- אנליסט ניהול תיקי השקעות בע״מ- כללי",
            nameEn: "הכשרה- אנליסט ניהול תיקי השקעות בע״מ- כללי",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 0.8,
            year1: 13.28,
            year3: 40.04,
            year5: null
        },
        {
            nameHe: "הראל מסלול מחקה מדד תל אביב 35",
            nameEn: "הראל מסלול מחקה מדד תל אביב 35",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -0.63,
            year1: null,
            year3: null,
            year5: null
        },
        {
            nameHe: "הראל מסלול עוקב מדדי אג״ח",
            nameEn: "הראל מסלול עוקב מדדי אג״ח",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -1.83,
            year1: -5.01,
            year3: 2.36,
            year5: null
        },
        {
            nameHe: "הראל מסלול מחקה מדד ממשלתי צמוד 5-10",
            nameEn: "הראל מסלול מחקה מדד ממשלתי צמוד 5-10",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.26,
            year1: null,
            year3: null,
            year5: null
        },
        {
            nameHe: "הראל מסלול עוקב מדד S&P 500",
            nameEn: "הראל מסלול עוקב מדד S&P 500",
            companyHe: "הראל",
            companyEn: "Harel",
            month: -1.85,
            year1: 2.69,
            year3: 67.9,
            year5: null
        },
        {
            nameHe: "הראל מסלול מחקה מדד ממשלתי שקלי ריבית קבועה",
            nameEn: "הראל מסלול מחקה מדד ממשלתי שקלי ריבית קבועה",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.86,
            year1: null,
            year3: null,
            year5: null
        },
        {
            nameHe: "הראל מסלול לגילאי 50 עד 60",
            nameEn: "הראל מסלול לגילאי 50 עד 60",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.93,
            year1: 14.35,
            year3: 36.63,
            year5: 42.67
        },
        {
            nameHe: "הראל מסלול לגילאי 60 ומעלה",
            nameEn: "הראל מסלול לגילאי 60 ומעלה",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.59,
            year1: 10.09,
            year3: 24.52,
            year5: 27.59
        },
        {
            nameHe: "הפניקס - מסלול השקעה פאסיבי למבוטחים בני 50 ומטה",
            nameEn: "הפניקס - מסלול השקעה פאסיבי למבוטחים בני 50 ומטה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.24,
            year1: null,
            year3: null,
            year5: null
        },
        {
            nameHe: "הפניקס - מסלול השקעה פאסיבי לבני 50 עד 60",
            nameEn: "הפניקס - מסלול השקעה פאסיבי לבני 50 עד 60",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.99,
            year1: null,
            year3: null,
            year5: null
        },
        {
            nameHe: "הפניקס - מסלול השקעה פאסיבי לבני 60 ומעלה",
            nameEn: "הפניקס - מסלול השקעה פאסיבי לבני 60 ומעלה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.72,
            year1: null,
            year3: null,
            year5: null
        },
        {
            nameHe: "הפניקס עוקב מדדים גמיש (ותיקה)",
            nameEn: "הפניקס עוקב מדדים גמיש (ותיקה)",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.28,
            year1: 17.4,
            year3: 51.12,
            year5: 52.88
        },
        {
            nameHe: "הפניקס מניות סחיר",
            nameEn: "הפניקס מניות סחיר",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: -1.07,
            year1: 5.98,
            year3: 53.95,
            year5: 57.9
        },
        {
            nameHe: "הפניקס אג״ח סחיר",
            nameEn: "הפניקס אג״ח סחיר",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: -1.87,
            year1: -6.33,
            year3: 21.37,
            year5: 23.44
        },
        {
            nameHe: "הכשרה מנוהל באמצעות מיטב ניהול תיקים בע״מ - מניות",
            nameEn: "הכשרה מנוהל באמצעות מיטב ניהול תיקים בע״מ - מניות",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 1.54,
            year1: 20.74,
            year3: 79.77,
            year5: 90.31
        },
        {
            nameHe: "הכשרה חברה לביטוח בע״מ - מנוהל באמצעות מיטב ניהול תיקים בע״מ - כללי",
            nameEn: "הכשרה חברה לביטוח בע״מ - מנוהל באמצעות מיטב ניהול תיקים בע״מ - כללי",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 1.25,
            year1: 16.03,
            year3: 47.99,
            year5: 51.55
        },
        {
            nameHe: "איילון מסלול לבני 60 ומעלה",
            nameEn: "איילון מסלול לבני 60 ומעלה",
            companyHe: "איילון",
            companyEn: "Ayalon",
            month: 1.13,
            year1: 13.66,
            year3: 32.37,
            year5: 34.16
        },
        {
            nameHe: "איילון מסלול לבני 50 עד 60",
            nameEn: "איילון מסלול לבני 50 עד 60",
            companyHe: "איילון",
            companyEn: "Ayalon",
            month: 1.77,
            year1: 18.83,
            year3: 45.97,
            year5: 49.46
        },
        {
            nameHe: "כלל חברה לביטוח בע״מ מסלול לבני 60 ומעלה",
            nameEn: "כלל חברה לביטוח בע״מ מסלול לבני 60 ומעלה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.98,
            year1: 11.89,
            year3: 29.62,
            year5: 32.31
        },
        {
            nameHe: "כלל חברה לביטוח בע״מ מסלול לבני 50 עד 60",
            nameEn: "כלל חברה לביטוח בע״מ מסלול לבני 50 עד 60",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.33,
            year1: 15.5,
            year3: 39.93,
            year5: 45.22
        },
        {
            nameHe: "כלל חברה לביטוח בע״מ מסלול לבני 50 ומטה",
            nameEn: "כלל חברה לביטוח בע״מ מסלול לבני 50 ומטה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.74,
            year1: 18.33,
            year3: 44.76,
            year5: 54.06
        },
        {
            nameHe: "הכשרה - מנוהל באמצעות מיטב ניהול תיקים בע״מ - אג״ח ממשלות",
            nameEn: "הכשרה - מנוהל באמצעות מיטב ניהול תיקים בע״מ - אג״ח ממשלות",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 0.3,
            year1: 5.46,
            year3: 12.15,
            year5: 10.46
        },
        {
            nameHe: "מגדל מסלול לבני 60 ומעלה",
            nameEn: "מגדל מסלול לבני 60 ומעלה",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.73,
            year1: 10.91,
            year3: 29.78,
            year5: 32.43
        },
        {
            nameHe: "כלל חברה לביטוח בע״מ מסלול בסיסי למקבלי קצבה",
            nameEn: "כלל חברה לביטוח בע״מ מסלול בסיסי למקבלי קצבה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.68,
            year1: 10.11,
            year3: 27.11,
            year5: 32.75
        },
        {
            nameHe: "הכשרה חברה לביטוח בע״מ מסלול בסיסי למקבלי קצבה",
            nameEn: "הכשרה חברה לביטוח בע״מ מסלול בסיסי למקבלי קצבה",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 0.54,
            year1: 9.39,
            year3: 25.15,
            year5: 26.88
        },
        {
            nameHe: "כלל חברה לביטוח בע״מ מסלול לבני 50 ומטה פוליסות לפני 2004",
            nameEn: "כלל חברה לביטוח בע״מ מסלול לבני 50 ומטה פוליסות לפני 2004",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.13,
            year1: 16.91,
            year3: 43.48,
            year5: 48.78
        },
        {
            nameHe: "כלל חברה לביטוח בע״מ מסלול לבני 50-60 פוליסות לפני 2004",
            nameEn: "כלל חברה לביטוח בע״מ מסלול לבני 50-60 פוליסות לפני 2004",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.17,
            year1: 15.36,
            year3: 39.88,
            year5: 44.75
        },
        {
            nameHe: "כלל חברה לביטוח בע״מ מסלול לבני 60 ומעלה פוליסות לפני 2004",
            nameEn: "כלל חברה לביטוח בע״מ מסלול לבני 60 ומעלה פוליסות לפני 2004",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.02,
            year1: 11.85,
            year3: 29.28,
            year5: 32.92
        },
        {
            nameHe: "כלל חברה לביטוח בע״מ מסלול בסיסי למקבלי קצבה פוליסות לפני 2004",
            nameEn: "כלל חברה לביטוח בע״מ מסלול בסיסי למקבלי קצבה פוליסות לפני 2004",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.74,
            year1: 11.07,
            year3: 31.61,
            year5: 35.25
        },
        {
            nameHe: "הראל חברה לביטוח בע״מ מסלול לגילאי עד 50",
            nameEn: "הראל חברה לביטוח בע״מ מסלול לגילאי עד 50",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.19,
            year1: 16.34,
            year3: 40.22,
            year5: 47.43
        },
        {
            nameHe: "איילון מסלול לבני 50 ומטה",
            nameEn: "איילון מסלול לבני 50 ומטה",
            companyHe: "איילון",
            companyEn: "Ayalon",
            month: 1.85,
            year1: 21.17,
            year3: 51.8,
            year5: 57.92
        },
        {
            nameHe: "הכשרה חברה לביטוח בע״מ לבני 60 ומעלה",
            nameEn: "הכשרה חברה לביטוח בע״מ לבני 60 ומעלה",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 0.5,
            year1: 9.24,
            year3: 25.24,
            year5: 28.7
        },
        {
            nameHe: "מגדל מסלול לבני 50 ומטה",
            nameEn: "מגדל מסלול לבני 50 ומטה",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.15,
            year1: 16.15,
            year3: 45.76,
            year5: 51.87
        },
        {
            nameHe: "הפניקס-אקסלנס אינווסט מסלול כללי",
            nameEn: "הפניקס-אקסלנס אינווסט מסלול כללי",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.7,
            year1: 14.7,
            year3: 46.09,
            year5: 47.35
        },
        {
            nameHe: "אקסלנס אינווסט מניות",
            nameEn: "אקסלנס אינווסט מניות",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.85,
            year1: 23.15,
            year3: 82.32,
            year5: 92.6
        },
        {
            nameHe: "אקסלנס אינווסט הלכה",
            nameEn: "אקסלנס אינווסט הלכה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.85,
            year1: 13.2,
            year3: 38.03,
            year5: 38.14
        },
        {
            nameHe: "אקסלנס אינווסט כספי (שקלי)",
            nameEn: "אקסלנס אינווסט כספי (שקלי)",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.36,
            year1: 4.27,
            year3: 13.01,
            year5: 12.77
        },
        {
            nameHe: "מגדל מסלול לבני 50 עד 60",
            nameEn: "מגדל מסלול לבני 50 עד 60",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.02,
            year1: 14.96,
            year3: 41.32,
            year5: 45.93
        },
        {
            nameHe: "מגדל מסלול בסיסי למקבלי קצבה",
            nameEn: "מגדל מסלול בסיסי למקבלי קצבה",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.64,
            year1: 10.11,
            year3: 27.21,
            year5: 27.92
        },
        {
            nameHe: "הכשרה חברה לביטוח בע״מ מסלול לבני 50 ומטה",
            nameEn: "הכשרה חברה לביטוח בע״מ מסלול לבני 50 ומטה",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 1.05,
            year1: 13.1,
            year3: 36.54,
            year5: 36.85
        },
        {
            nameHe: "הכשרה חברה לביטוח בע״מ מסלול לבני 50-60",
            nameEn: "הכשרה חברה לביטוח בע״מ מסלול לבני 50-60",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 0.68,
            year1: 12.51,
            year3: 35.4,
            year5: 36.31
        },
        {
            nameHe: "הפניקס אשראי אג״ח עם מניות (עד 25% מניות)",
            nameEn: "הפניקס אשראי אג״ח עם מניות (עד 25% מניות)",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.61,
            year1: 9.76,
            year3: 29.74,
            year5: 31.15
        },
        {
            nameHe: "הפניקס מניות",
            nameEn: "הפניקס מניות",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 2.08,
            year1: 26.56,
            year3: 76.21,
            year5: 85.65
        },
        {
            nameHe: "הראל מסלול אג״ח עד 20% במניות למקבלי קצבה",
            nameEn: "הראל מסלול אג״ח עד 20% במניות למקבלי קצבה",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.35,
            year1: null,
            year3: null,
            year5: null
        },
        {
            nameHe: "הראל מסלול בסיסי למקבלי קצבה",
            nameEn: "הראל מסלול בסיסי למקבלי קצבה",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.51,
            year1: 11.56,
            year3: 34.03,
            year5: 37.95
        },
        {
            nameHe: "הפניקס הלכה",
            nameEn: "הפניקס הלכה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.15,
            year1: 15.29,
            year3: 43.59,
            year5: 44.96
        },
        {
            nameHe: "הפניקס בסיסי למקבלי קצבה",
            nameEn: "הפניקס בסיסי למקבלי קצבה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.72,
            year1: 9.34,
            year3: 25.24,
            year5: 28.53
        },
        {
            nameHe: "הפניקס מסלול השקעה מתמחה אג״ח למקבלי קצבה",
            nameEn: "הפניקס מסלול השקעה מתמחה אג״ח למקבלי קצבה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.18,
            year1: null,
            year3: null,
            year5: null
        },
        {
            nameHe: "הפניקס לבני 60 ומעלה",
            nameEn: "הפניקס לבני 60 ומעלה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.98,
            year1: 12.05,
            year3: 31.92,
            year5: 37.28
        },
        {
            nameHe: "הפניקס לבני 50 עד 60",
            nameEn: "הפניקס לבני 50 עד 60",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.54,
            year1: 16.32,
            year3: 44.79,
            year5: 53.32
        },
        {
            nameHe: "הפניקס כספי (שקלי)",
            nameEn: "הפניקס כספי (שקלי)",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.38,
            year1: 4.51,
            year3: 13.04,
            year5: 13.77
        },
        {
            nameHe: "הפניקס הלכה למקבלי קצבה",
            nameEn: "הפניקס הלכה למקבלי קצבה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.63,
            year1: 11.21,
            year3: 29.03,
            year5: 25.73
        },
        {
            nameHe: "הפניקס מסלול השקעה מתמחה מניות למקבלי קצבה",
            nameEn: "הפניקס מסלול השקעה מתמחה מניות למקבלי קצבה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.49,
            year1: null,
            year3: null,
            year5: null
        },
        {
            nameHe: "הפניקס מסלול השקעה מתמחה משולב אג״ח עד 25% מניות למקבלי קצבה",
            nameEn: "הפניקס מסלול השקעה מתמחה משולב אג״ח עד 25% מניות למקבלי קצבה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.3,
            year1: null,
            year3: null,
            year5: null
        },
        {
            nameHe: "הכשרה חברה לביטוח בע״מ - ילין לפידות ניהול תיקי השקעות בע״מ - כללי",
            nameEn: "הכשרה חברה לביטוח בע״מ - ילין לפידות ניהול תיקי השקעות בע״מ - כללי",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 0.6,
            year1: 12.53,
            year3: 38.9,
            year5: 44.37
        },
        {
            nameHe: "הכשרה - מנוהל באמצעות ילין לפידות ניהול תיקי השקעות בע״מ - מניות",
            nameEn: "הכשרה - מנוהל באמצעות ילין לפידות ניהול תיקי השקעות בע״מ - מניות",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 1.33,
            year1: 21.07,
            year3: 71.96,
            year5: 88.2
        },
        {
            nameHe: "הכשרה - מנוהל באמצעות ילין לפידות ניהול תיקי השקעות בע״מ - אג״ח ממשלות",
            nameEn: "הכשרה - מנוהל באמצעות ילין לפידות ניהול תיקי השקעות בע״מ - אג״ח ממשלות",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 0.14,
            year1: 4.74,
            year3: 12.99,
            year5: 10.76
        },
        {
            nameHe: "הכשרה חברה לביטוח בע״מ כללי פאסיבי",
            nameEn: "הכשרה חברה לביטוח בע״מ כללי פאסיבי",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 5.46,
            year1: 5.46,
            year3: null,
            year5: null
        },
        {
            nameHe: "מגדל מסלול אשראי ואג״ח",
            nameEn: "מגדל מסלול אשראי ואג״ח",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.24,
            year1: 5.64,
            year3: 16.34,
            year5: 11.92
        },
        {
            nameHe: "איילון חברה לביטוח בע״מ אשראי ואג״ח עם מניות (עד 25%)",
            nameEn: "איילון חברה לביטוח בע״מ אשראי ואג״ח עם מניות (עד 25%)",
            companyHe: "איילון",
            companyEn: "Ayalon",
            month: 1.22,
            year1: 12.39,
            year3: 30.01,
            year5: 25.32
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ בסיסי למקבלי קצבה",
            nameEn: "מנורה מבטחים ביטוח בע״מ בסיסי למקבלי קצבה",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.71,
            year1: 10.58,
            year3: 23.44,
            year5: 23.8
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ בסיסי למקבלי קצבה (2)",
            nameEn: "מנורה מבטחים ביטוח בע״מ בסיסי למקבלי קצבה (2)",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.7,
            year1: 11.01,
            year3: 27.15,
            year5: 30.73
        },
        {
            nameHe: "הראל מסלול לבני 50 ומטה",
            nameEn: "הראל מסלול לבני 50 ומטה",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.19,
            year1: 16.34,
            year3: 40.23,
            year5: 47.45
        },
        {
            nameHe: "הראל מסלול פאסיבי - כללי",
            nameEn: "הראל מסלול פאסיבי - כללי",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.61,
            year1: null,
            year3: null,
            year5: null
        },
        {
            nameHe: "הפניקס עוקב מדד s&p 500",
            nameEn: "הפניקס עוקב מדד s&p 500",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: -1.98,
            year1: 2.93,
            year3: 67.45,
            year5: 92.95
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ לבני 60 ומעלה",
            nameEn: "מנורה מבטחים ביטוח בע״מ לבני 60 ומעלה",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.89,
            year1: 11.33,
            year3: 28.08,
            year5: 32.9
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ לבני 50-60",
            nameEn: "מנורה מבטחים ביטוח בע״מ לבני 50-60",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 1.25,
            year1: 16.22,
            year3: 41.0,
            year5: 48.3
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ לבני 50 ומטה",
            nameEn: "מנורה מבטחים ביטוח בע״מ לבני 50 ומטה",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 1.5,
            year1: 18.74,
            year3: 47.12,
            year5: 54.56
        },
        {
            nameHe: "הפניקס לבני 50 ומטה",
            nameEn: "הפניקס לבני 50 ומטה",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.66,
            year1: 19.51,
            year3: 54.46,
            year5: 63.73
        }
,
        {
            nameHe: "הראל מסלול משתתף ברווחים אשראי ואג״ח",
            nameEn: "הראל מסלול משתתף ברווחים אשראי ואג״ח",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.17,
            year1: 7.23,
            year3: 15.88,
            year5: 13.64
        },
        {
            nameHe: "הראל מסלול משתתף ברווחים כספי (שקלי)",
            nameEn: "הראל מסלול משתתף ברווחים כספי (שקלי)",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.36,
            year1: 4.52,
            year3: 13.61,
            year5: 13.82
        },
        {
            nameHe: "איילון חברה לביטוח בע״מ עוקבי מדדים עוקב מדדי מניות",
            nameEn: "איילון חברה לביטוח בע״מ עוקבי מדדים עוקב מדדי מניות",
            companyHe: "איילון",
            companyEn: "Ayalon",
            month: 2.3,
            year1: 30.26,
            year3: 88.14,
            year5: 94.02
        },
        {
            nameHe: "הכשרה חברה לביטוח בע״מ - כספי (שקלי)",
            nameEn: "הכשרה חברה לביטוח בע״מ - כספי (שקלי)",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 0.36,
            year1: 4.34,
            year3: 13.32,
            year5: 13.63
        },
        {
            nameHe: "הכשרה חברה לביטוח בע״מ - מנוהל באמצעות אלטשולר שחם בע״מ - אג״ח ממשלות",
            nameEn: "הכשרה חברה לביטוח בע״מ - מנוהל באמצעות אלטשולר שחם בע״מ - אג״ח ממשלות",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: -0.09,
            year1: 5.96,
            year3: 14.82,
            year5: 13.61
        },
        {
            nameHe: "איילון חברה לביטוח בע״מ אשראי ואג״ח",
            nameEn: "איילון חברה לביטוח בע״מ אשראי ואג״ח",
            companyHe: "איילון",
            companyEn: "Ayalon",
            month: 0.43,
            year1: 6.88,
            year3: 17.3,
            year5: 13.71
        },
        {
            nameHe: "אקסלנס אינווסט אשראי ואג״ח (עד 25% מניות)",
            nameEn: "אקסלנס אינווסט אשראי ואג״ח (עד 25% מניות)",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.5,
            year1: 9.7,
            year3: 31.36,
            year5: 31.92
        },
        {
            nameHe: "הכשרה - מנוהל באמצעות אלטשולר שחם בע״מ - מניות",
            nameEn: "הכשרה - מנוהל באמצעות אלטשולר שחם בע״מ - מניות",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: -0.03,
            year1: 19.8,
            year3: 69.61,
            year5: 58.69
        },
        {
            nameHe: "הכשרה - אלטשולר שחם בע״מ - כללי",
            nameEn: "הכשרה - אלטשולר שחם בע״מ - כללי",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: -0.08,
            year1: 12.52,
            year3: 39.47,
            year5: 34.06
        },
        {
            nameHe: "איילון חברה לביטוח בע״מ כספי (שקלי)",
            nameEn: "איילון חברה לביטוח בע״מ כספי (שקלי)",
            companyHe: "איילון",
            companyEn: "Ayalon",
            month: 0.44,
            year1: 4.96,
            year3: 14.13,
            year5: 5.58
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ אג״ח ממשלתי סחיר",
            nameEn: "מנורה מבטחים ביטוח בע״מ אג״ח ממשלתי סחיר",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.1,
            year1: 6.64,
            year3: 10.94,
            year5: 3.42
        },
        {
            nameHe: "הראל מסלול אשראי ואג״ח עם מניות (עד 25% מניות)",
            nameEn: "הראל מסלול אשראי ואג״ח עם מניות (עד 25% מניות)",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.04,
            year1: 4.19,
            year3: 15.42,
            year5: 19.27
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ מניות סחיר",
            nameEn: "מנורה מבטחים ביטוח בע״מ מניות סחיר",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: -0.68,
            year1: 12.64,
            year3: 62.87,
            year5: 68.28
        },
        {
            nameHe: "הפניקס-אקסלנס אינווסט תיק מנוהל אג״ח 2",
            nameEn: "הפניקס-אקסלנס אינווסט תיק מנוהל אג״ח 2",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 0.5,
            year1: 8.05,
            year3: 25.68,
            year5: 24.95
        },
        {
            nameHe: "כלל חברה לביטוח בע״מ אשראי ואג״ח עם מניות (עד 25% מניות)",
            nameEn: "כלל חברה לביטוח בע״מ אשראי ואג״ח עם מניות (עד 25% מניות)",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 0.41,
            year1: 4.62,
            year3: 16.84,
            year5: 19.07
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ כספי (שקלי)",
            nameEn: "מנורה מבטחים ביטוח בע״מ כספי (שקלי)",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.35,
            year1: 4.42,
            year3: 13.31,
            year5: 13.11
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ אשראי ואג״ח",
            nameEn: "מנורה מבטחים ביטוח בע״מ אשראי ואג״ח",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 0.19,
            year1: 5.86,
            year3: 17.26,
            year5: 15.94
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ אג״ח ממשלות",
            nameEn: "מנורה מבטחים ביטוח בע״מ אג״ח ממשלות",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: -0.23,
            year1: 3.62,
            year3: 20.53,
            year5: 27.2
        },
        {
            nameHe: "איי. די. איי. חברה לביטוח בע״מ מסלול אג״ח ממשלות",
            nameEn: "איי. די. איי. חברה לביטוח בע״מ מסלול אג״ח ממשלות",
            companyHe: "אי.ד.י",
            companyEn: "IDI",
            month: 0.18,
            year1: 4.75,
            year3: 15.79,
            year5: 18.41
        },
        {
            nameHe: "הכשרה חברה לביטוח בע״מ - אג״ח ממשלות",
            nameEn: "הכשרה חברה לביטוח בע״מ - אג״ח ממשלות",
            companyHe: "הכשרה",
            companyEn: "Hachshara",
            month: 0.34,
            year1: 5.03,
            year3: 12.03,
            year5: 13.2
        },
        {
            nameHe: "איילון- כללי",
            nameEn: "איילון- כללי",
            companyHe: "איילון",
            companyEn: "Ayalon",
            month: 1.68,
            year1: 18.97,
            year3: 46.98,
            year5: 53.52
        },
        {
            nameHe: "כלל חברה לביטוח בע״מ כללי",
            nameEn: "כלל חברה לביטוח בע״מ כללי",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.4,
            year1: 16.34,
            year3: 39.63,
            year5: 48.33
        },
        {
            nameHe: "אי.די.אי.-כללי",
            nameEn: "אי.די.אי.-כללי",
            companyHe: "אי.ד.י",
            companyEn: "IDI",
            month: 1.22,
            year1: 15.71,
            year3: 42.98,
            year5: 40.41
        },
        {
            nameHe: "הפניקס מסלול השקעה כללי",
            nameEn: "הפניקס מסלול השקעה כללי",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.32,
            year1: 14.83,
            year3: 42.24,
            year5: 53.15
        },
        {
            nameHe: "הראל מסלול כללי",
            nameEn: "הראל מסלול כללי",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.91,
            year1: 13.86,
            year3: 36.09,
            year5: 44.7
        },
        {
            nameHe: "איילון חברה לביטוח בע״מ מניות",
            nameEn: "איילון חברה לביטוח בע״מ מניות",
            companyHe: "איילון",
            companyEn: "Ayalon",
            month: 2.92,
            year1: 30.93,
            year3: 81.9,
            year5: 89.44
        },
        {
            nameHe: "כלל חברה לביטוח בע״מ מניות",
            nameEn: "כלל חברה לביטוח בע״מ מניות",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 2.18,
            year1: 28.23,
            year3: 70.92,
            year5: 78.2
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ מניות",
            nameEn: "מנורה מבטחים ביטוח בע״מ מניות",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 2.02,
            year1: 27.77,
            year3: 75.31,
            year5: 85.24
        },
        {
            nameHe: "הראל מסלול מניות",
            nameEn: "הראל מסלול מניות",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.94,
            year1: 26.72,
            year3: 72.25,
            year5: 83.5
        },
        {
            nameHe: "הראל מסלול משתתף ברווחים מניות",
            nameEn: "הראל מסלול משתתף ברווחים מניות",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.94,
            year1: 26.72,
            year3: 72.23,
            year5: 83.48
        },
        {
            nameHe: "מגדל מסלול מניות",
            nameEn: "מגדל מסלול מניות",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.81,
            year1: 25.79,
            year3: 77.23,
            year5: 86.1
        },
        {
            nameHe: "הפניקס -קרן י'",
            nameEn: "הפניקס -קרן י'",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.72,
            year1: 15.98,
            year3: 42.98,
            year5: 58.3
        },
        {
            nameHe: "הפניקס -קרן ט'",
            nameEn: "הפניקס -קרן ט'",
            companyHe: "הפניקס",
            companyEn: "Phoenix",
            month: 1.05,
            year1: 15.07,
            year3: 40.8,
            year5: 47.51
        },
        {
            nameHe: "מגדל אג״ח ממשלות",
            nameEn: "מגדל אג״ח ממשלות",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.1,
            year1: 5.12,
            year3: 9.57,
            year5: 2.83
        },
        {
            nameHe: "מגדל מסלול כספי (שקלי)",
            nameEn: "מגדל מסלול כספי (שקלי)",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.45,
            year1: 4.66,
            year3: 13.46,
            year5: 13.18
        },
        {
            nameHe: "הראל מסלול כספי (שקלי)",
            nameEn: "הראל מסלול כספי (שקלי)",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 0.36,
            year1: 4.52,
            year3: 13.61,
            year5: 13.82
        },
        {
            nameHe: "איילון חברה לביטוח בע״מ הלכה",
            nameEn: "איילון חברה לביטוח בע״מ הלכה",
            companyHe: "איילון",
            companyEn: "Ayalon",
            month: 1.43,
            year1: 16.79,
            year3: 38.99,
            year5: 33.72
        },
        {
            nameHe: "כלל חברה לביטוח בע״מ הלכה",
            nameEn: "כלל חברה לביטוח בע״מ הלכה",
            companyHe: "כלל",
            companyEn: "Clal",
            month: 1.2,
            year1: 15.35,
            year3: 40.09,
            year5: 40.0
        },
        {
            nameHe: "מגדל מסלול הלכה",
            nameEn: "מגדל מסלול הלכה",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 1.02,
            year1: 15.21,
            year3: 41.58,
            year5: 42.43
        },
        {
            nameHe: "מנורה מבטחים ביטוח בע״מ הלכה",
            nameEn: "מנורה מבטחים ביטוח בע״מ הלכה",
            companyHe: "מנורה",
            companyEn: "Menora",
            month: 1.01,
            year1: 14.31,
            year3: 40.81,
            year5: 40.42
        },
        {
            nameHe: "הראל מסלול חו״ל",
            nameEn: "הראל מסלול חו״ל",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 2.28,
            year1: 2.28,
            year3: null,
            year5: null
        },
        {
            nameHe: "מגדל מסלול חו״ל",
            nameEn: "מגדל מסלול חו״ל",
            companyHe: "מגדל",
            companyEn: "Migdal",
            month: 0.0,
            year1: null,
            year3: null,
            year5: null
        },
        {
            nameHe: "הראל מסלול אג״ח חו״ל",
            nameEn: "הראל מסלול אג״ח חו״ל",
            companyHe: "הראל",
            companyEn: "Harel",
            month: 1.64,
            year1: 1.64,
            year3: null,
            year5: null
        }
    ],

    // Get data by type
    getData(type) {
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
        if (!['training', 'pension', 'gemel', 'savings'].includes(type)) return false;

        this[type] = newData;
        this.meta.lastUpdate = new Date().toISOString().slice(0, 7);
        if (!this.meta.dataVersion) this.meta.dataVersion = 2;
        this.saveToStorage();
        return true;
    },

    // Save to localStorage
    saveToStorage() {
        const dataToSave = {
            meta: this.meta,
            training: this.training,
            pension: this.pension,
            gemel: this.gemel,
            savings: this.savings
        };
        localStorage.setItem('mygemel_fund_data', JSON.stringify(dataToSave));
    },

    // Load from localStorage (only if version matches or is newer)
    loadFromStorage() {
        try {
            const stored = localStorage.getItem('mygemel_fund_data');
            if (stored) {
                const data = JSON.parse(stored);
                const storedVersion = (data.meta && data.meta.dataVersion) || 0;
                const builtInVersion = 6;
                if (storedVersion < builtInVersion) {
                    // Old data in localStorage — remove it so built-in data is used
                    localStorage.removeItem('mygemel_fund_data');
                    return;
                }
                if (data.meta) this.meta = data.meta;
                if (data.training) this.training = data.training;
                if (data.pension) this.pension = data.pension;
                if (data.gemel) this.gemel = data.gemel;
                if (data.savings) this.savings = data.savings;
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
