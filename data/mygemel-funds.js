/**
 * MyGemel Fund Data - Real data from igemel-net.co.il
 * Data source: https://www.igemel-net.co.il/
 * Last update: February 2025
 */

const MyGemelFunds = {
    meta: {
        lastUpdate: '2025-02',
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
            nameHe: "הראל השתלמות כללי",
            companyHe: "הראל",
            month: 2.43,
            year1: 15.96,
            year3: 37.64,
            year5: 47.91,
            fee: 0.6
        },
        {
            nameHe: "מגדל השתלמות אשראי ואג\"ח",
            companyHe: "מגדל",
            month: 0.52,
            year1: 6.5,
            year3: 16.84,
            year5: 14.48,
            fee: 0.56
        },
        {
            nameHe: "קרן השתלמות למורים בבתיה\"ס העי\"ס במכללות ובסמינרים מסלול כללי",
            companyHe: "עגור",
            month: 1.99,
            year1: 16.13,
            year3: 45.97,
            year5: 57.5,
            fee: 0.19
        },
        {
            nameHe: "מורים וגננות - מסלול כללי",
            companyHe: "מור",
            month: 1.62,
            year1: 14.42,
            year3: 41.85,
            year5: 47.01,
            fee: 0.12
        },
        {
            nameHe: "מורים תיכוניים - מסלול כללי",
            companyHe: "מור",
            month: 1.66,
            year1: 14.94,
            year3: 42.48,
            year5: 49.05,
            fee: 0.12
        },
        {
            nameHe: "אומגה השתלמות מסלול כללי",
            companyHe: "מנורה מבטחים",
            month: 2.55,
            year1: 17.08,
            year3: 43.88,
            year5: 52.01,
            fee: 0.54
        },
        {
            nameHe: "קרן השתלמות לאקדמאים במדעי החברה והרוח מסלול כללי",
            companyHe: "אקדמאים",
            month: 2.22,
            year1: 15.29,
            year3: 42.4,
            year5: 44.99,
            fee: 0.28
        },
        {
            nameHe: "קרן השתלמות לעובדי בנק ישראל",
            companyHe: "מיטב",
            month: 2.09,
            year1: 15.9,
            year3: 43.57,
            year5: 52.07,
            fee: 0.38
        },
        {
            nameHe: "הנדסאים השתלמות - מסלול כללי",
            companyHe: "הנדסאים",
            month: 2.1,
            year1: 15.76,
            year3: 43.91,
            year5: 46.25,
            fee: 0.35
        },
        {
            nameHe: "השתלמות משפטנים",
            companyHe: "משפטנים",
            month: 2.89,
            year1: 20,
            year3: 54.27,
            year5: 62.65,
            fee: 0.42
        },
        {
            nameHe: "ק.ס.מ",
            companyHe: "החברה",
            month: 2.23,
            year1: 13.84,
            year3: 39.58,
            year5: 42.62,
            fee: 0.51
        },
        {
            nameHe: "רעות-כללי",
            companyHe: "רעות",
            month: 2.6,
            year1: 16.05,
            year3: 42.62,
            year5: 46.65,
            fee: 0.46
        },
        {
            nameHe: "קרן השתלמות עוצ\"מ",
            companyHe: "עוצ\"מ",
            month: 3.71,
            year1: 20.43,
            year3: 50.35,
            year5: 49.1,
            fee: 0.6
        },
        {
            nameHe: "רום קלאסי כללי",
            companyHe: "רום",
            month: 2.22,
            year1: 16.97,
            year3: 45.95,
            year5: 51.75,
            fee: 0.31
        },
        {
            nameHe: "הראל השתלמות אשראי ואג\"ח עם מניות (עד 25% מניות)",
            companyHe: "הראל",
            month: 0.64,
            year1: 7.25,
            year3: 18.71,
            year5: 24.43,
            fee: 0.55
        },
        {
            nameHe: "אחים ואחיות - מסלול כללי",
            companyHe: "יהב",
            month: 2.61,
            year1: 16.17,
            year3: 41.79,
            year5: 44.78,
            fee: 0.27
        },
        {
            nameHe: "יחד קרן השתלמות לרופאים- כללי",
            companyHe: "יחד רופאים",
            month: 1.59,
            year1: 13.79,
            year3: 36.58,
            year5: 45.45,
            fee: 0.38
        },
        {
            nameHe: "פ.ר.ח - כללי",
            companyHe: "יהב",
            month: 1.54,
            year1: 14.24,
            year3: 38.94,
            year5: 37.06,
            fee: 0.76
        },
        {
            nameHe: "קרן השתלמות עובדי חברת חשמל",
            companyHe: "החברה",
            month: 2.19,
            year1: 17.58,
            year3: 46.98,
            year5: 50.93,
            fee: 0.34
        },
        {
            nameHe: "קרן החיסכון לצבא הקבע כללי",
            companyHe: "קרן",
            month: 2.42,
            year1: 15.77,
            year3: 38.6,
            year5: 48.66,
            fee: 0.21
        },
        {
            nameHe: "כלל השתלמות כללי",
            companyHe: "כלל",
            month: 2.66,
            year1: 18.29,
            year3: 42.17,
            year5: 51.76,
            fee: 0.54
        },
        {
            nameHe: "מיטב השתלמות עוקב מדדים גמיש",
            companyHe: "מיטב",
            month: -0.46,
            year1: 5.18,
            year3: 36.06,
            year5: 36.11,
            fee: 0.63
        },
        {
            nameHe: "השתלמות שופטים",
            companyHe: "החברה",
            month: 2.61,
            year1: 18.81,
            year3: 51.03,
            year5: 59.52,
            fee: 0.33
        },
        {
            nameHe: "קרן השתלמות למורים בבתי הספר העי\"ס במכללות ובסמינרים מסלול כללי",
            companyHe: "עגור",
            month: 1.96,
            year1: 15.82,
            year3: 45.68,
            year5: 55.97,
            fee: 0.2
        },
        {
            nameHe: "ק.ה.ר",
            companyHe: "ק.ה.ר",
            month: 2.52,
            year1: 20.51,
            year3: 57.17,
            year5: 58.54,
            fee: 1.02
        },
        {
            nameHe: "מורים וגננות - מסלול כללי",
            companyHe: "מור",
            month: 1.62,
            year1: 14.34,
            year3: 42.17,
            year5: 48.21,
            fee: 0.12
        },
        {
            nameHe: "מינהל-השתלמות - כללי",
            companyHe: "מינהל",
            month: 2.2,
            year1: 15.8,
            year3: 43.48,
            year5: 41.93,
            fee: 0.56
        },
        {
            nameHe: "מורים תיכוניים - מסלול כללי",
            companyHe: "מור",
            month: 1.68,
            year1: 14.77,
            year3: 42.38,
            year5: 49.13,
            fee: 0.12
        },
        {
            nameHe: "ק.ל.ע מסלול כללי",
            companyHe: "ק.ל.ע.",
            month: 3.02,
            year1: 16.93,
            year3: 45.4,
            year5: 50.28,
            fee: 0.49
        },
        {
            nameHe: "עובדי מדינה - כללי",
            companyHe: "החברה",
            month: 2.22,
            year1: 16.76,
            year3: 47.37,
            year5: 55.6,
            fee: 0.38
        },
        {
            nameHe: "שיבולת - השתלמות",
            companyHe: "שיבולת",
            month: 0.41,
            year1: 4.7,
            year3: 14.95,
            year5: 18.83,
            fee: 0.21
        },
        {
            nameHe: "הפניקס השתלמות כספי (שקלי)",
            companyHe: "הפניקס",
            month: 0.3,
            year1: 4.59,
            year3: 13.58,
            year5: 14.58,
            fee: 0.6
        },
        {
            nameHe: "הפניקס השתלמות אשראי ואג\"ח",
            companyHe: "הפניקס",
            month: 0.21,
            year1: 5.83,
            year3: 16.35,
            year5: 15.79,
            fee: 0.64
        },
        {
            nameHe: "הראל השתלמות מסלול מניות",
            companyHe: "הראל",
            month: 5.06,
            year1: 29.37,
            year3: 74.23,
            year5: 91.7,
            fee: 0.53
        },
        {
            nameHe: "אלטשולר שחם השתלמות אשראי ואג\"ח עם מניות (עד 25% מניות)",
            companyHe: "אלטשולר שחם",
            month: 0.83,
            year1: 8.3,
            year3: 21.46,
            year5: 23.06,
            fee: 0.7
        },
        {
            nameHe: "מגדל השתלמות כללי",
            companyHe: "מגדל",
            month: 2.2,
            year1: 15.92,
            year3: 40.29,
            year5: 50.89,
            fee: 0.54
        },
        {
            nameHe: "מיטב השתלמות כהלכה",
            companyHe: "מיטב",
            month: 2.18,
            year1: 14.95,
            year3: 39.1,
            year5: 42.72,
            fee: 0.72
        },
        {
            nameHe: "מנורה השתלמות כללי",
            companyHe: "מנורה מבטחים",
            month: 2.26,
            year1: 17.2,
            year3: 41.25,
            year5: 49.76,
            fee: 0.63
        },
        {
            nameHe: "מגדל השתלמות כספי (שקלי)",
            companyHe: "מגדל",
            month: 0.39,
            year1: 4.79,
            year3: 13.65,
            year5: 13.66,
            fee: 0.5
        },
        {
            nameHe: "מגדל השתלמות אג\"ח ממשלות",
            companyHe: "מגדל",
            month: 0.31,
            year1: 5.31,
            year3: 8.71,
            year5: 2.84,
            fee: 0.61
        },
        {
            nameHe: "מגדל השתלמות מניות",
            companyHe: "מגדל",
            month: 4.74,
            year1: 27.93,
            year3: 77.42,
            year5: 91.3,
            fee: 0.49
        },
        {
            nameHe: "מיטב השתלמות כללי",
            companyHe: "מיטב",
            month: 2.05,
            year1: 16.05,
            year3: 43.63,
            year5: 54.85,
            fee: 0.6
        },
        {
            nameHe: "מיטב השתלמות מניות",
            companyHe: "מיטב",
            month: 4.29,
            year1: 28.63,
            year3: 79.55,
            year5: 90.89,
            fee: 0.55
        },
        {
            nameHe: "אנליסט השתלמות אג\"ח ממשלות",
            companyHe: "אנליסט",
            month: 0.77,
            year1: 6.53,
            year3: 13.73,
            year5: 10.13,
            fee: 0.58
        },
        {
            nameHe: "הראל השתלמות משולב סחיר",
            companyHe: "הראל",
            month: -0.72,
            year1: 1.16,
            year3: 27.87,
            year5: 29.46,
            fee: 0.54
        },
        {
            nameHe: "ילין לפידות קרן השתלמות מסלול אג\"ח עם מניות (עד 25% מניות)",
            companyHe: "ילין לפידות",
            month: 0.77,
            year1: 9.04,
            year3: 27.63,
            year5: 33.11,
            fee: 0.7
        },
        {
            nameHe: "אינפיניטי השתלמות אשראי ואג\"ח",
            companyHe: "אינפיניטי",
            month: 0.72,
            year1: 7.28,
            year3: 22.61,
            year5: 21.99,
            fee: 0.68
        },
        {
            nameHe: "אלטשולר שחם השתלמות כללי",
            companyHe: "אלטשולר שחם",
            month: 1.65,
            year1: 13.24,
            year3: 37.93,
            year5: 36.76,
            fee: 0.69
        },
        {
            nameHe: "הפניקס השתלמות אשראי ואג\"ח עם מניות (עד 25% מניות)",
            companyHe: "הפניקס",
            month: 0.2,
            year1: 7.97,
            year3: 22.68,
            year5: 25.21,
            fee: 0.63
        },
        {
            nameHe: "מנורה השתלמות כספי (שקלי)",
            companyHe: "מנורה מבטחים",
            month: 0.34,
            year1: 4.38,
            year3: 13.45,
            year5: 13.57,
            fee: 0.51
        },
        {
            nameHe: "ילין לפידות קרן השתלמות מסלול כללי",
            companyHe: "ילין לפידות",
            month: 1.4,
            year1: 13.5,
            year3: 41.81,
            year5: 50.93,
            fee: 0.68
        },
        {
            nameHe: "אנליסט השתלמות כללי",
            companyHe: "אנליסט",
            month: 1.73,
            year1: 14.89,
            year3: 46.6,
            year5: 57.62,
            fee: 0.62
        },
        {
            nameHe: "אנליסט השתלמות מניות",
            companyHe: "אנליסט",
            month: 3.31,
            year1: 21,
            year3: 80.87,
            year5: 93.57,
            fee: 0.63
        },
        {
            nameHe: "הפניקס השתלמות כללי",
            companyHe: "הפניקס",
            month: 2.09,
            year1: 16.53,
            year3: 43.3,
            year5: 52.31,
            fee: 0.65
        },
        {
            nameHe: "הפניקס השתלמות מניות",
            companyHe: "הפניקס",
            month: 4.57,
            year1: 28.13,
            year3: 75.98,
            year5: 88.88,
            fee: 0.58
        },
        {
            nameHe: "אנליסט השתלמות אשראי ואג\"ח",
            companyHe: "אנליסט",
            month: 0.65,
            year1: 6.68,
            year3: 16.09,
            year5: 15.01,
            fee: 0.61
        },
        {
            nameHe: "רעות - אשראי ואג\"ח",
            companyHe: "רעות",
            month: 0.44,
            year1: 4.85,
            year3: 9.99,
            year5: 14.34,
            fee: 0.46
        },
        {
            nameHe: "רעות - מניות",
            companyHe: "רעות",
            month: 4.45,
            year1: 27.37,
            year3: 87.67,
            year5: 107.16,
            fee: 0.45
        },
        {
            nameHe: "הנדסאים השתלמות - מסלול מניות",
            companyHe: "הנדסאים",
            month: 3.6,
            year1: 23.43,
            year3: 75.57,
            year5: 81.99,
            fee: 0.35
        },
        {
            nameHe: "ילין לפידות קרן השתלמות מסלול אשראי ואג\"ח",
            companyHe: "ילין לפידות",
            month: 0.53,
            year1: 7.02,
            year3: 17.63,
            year5: 19.58,
            fee: 0.68
        },
        {
            nameHe: "כלל השתלמות אשראי ואג\"ח",
            companyHe: "כלל",
            month: 0.57,
            year1: 7.08,
            year3: 17.77,
            year5: 18.51,
            fee: 0.54
        },
        {
            nameHe: "קרן השתלמות של עובדי האוניברסיטה העברית כללי",
            companyHe: "חברת",
            month: 1.6,
            year1: 11.92,
            year3: 34.23,
            year5: 43.65,
            fee: 0.44
        },
        {
            nameHe: "אינפיניטי השתלמות אג\"ח ממשלות",
            companyHe: "אינפיניטי",
            month: 0.62,
            year1: 5.6,
            year3: 11.96,
            year5: 7.88,
            fee: 0.35
        },
        {
            nameHe: "מיטב השתלמות אשראי ואג\"ח",
            companyHe: "מיטב",
            month: 0.48,
            year1: 6.98,
            year3: 18.86,
            year5: 24.91,
            fee: 0.59
        },
        {
            nameHe: "מנורה השתלמות מניות",
            companyHe: "מנורה מבטחים",
            month: 4.58,
            year1: 29.67,
            year3: 76.9,
            year5: 89.73,
            fee: 0.49
        },
        {
            nameHe: "רום רביד אשראי ואג\"ח",
            companyHe: "רום",
            month: 0.63,
            year1: 6.3,
            year3: 16.46,
            year5: 18.38,
            fee: 0.31
        },
        {
            nameHe: "רום ספיר מניות",
            companyHe: "רום",
            month: 4.14,
            year1: 27.2,
            year3: 92.89,
            year5: 102.78,
            fee: 0.3
        },
        {
            nameHe: "מינהל - השתלמות - מניות",
            companyHe: "מינהל",
            month: 3.89,
            year1: 25.4,
            year3: 83.83,
            year5: 80.76,
            fee: 0.55
        },
        {
            nameHe: "אלטשולר שחם השתלמות כללי ב'",
            companyHe: "אלטשולר שחם",
            month: 2.04,
            year1: 14.81,
            year3: 43,
            year5: 40.91,
            fee: 0.69
        },
        {
            nameHe: "עובדי המדינה - אג\"ח ממשלות",
            companyHe: "החברה",
            month: 0.52,
            year1: 5.58,
            year3: 13.43,
            year5: 12.51,
            fee: 0.38
        },
        {
            nameHe: "כלל השתלמות מניות",
            companyHe: "כלל",
            month: 5.41,
            year1: 30.38,
            year3: 73.6,
            year5: 81.78,
            fee: 0.53
        },
        {
            nameHe: "כלל השתלמות כספי(שקלי)",
            companyHe: "כלל",
            month: 0.45,
            year1: 5.05,
            year3: 15.41,
            year5: 16.67,
            fee: 0.52
        },
        {
            nameHe: "ילין לפידות קרן השתלמות מסלול אג\"ח ממשלות",
            companyHe: "ילין לפידות",
            month: 0.61,
            year1: 5.44,
            year3: 10.55,
            year5: 6.87,
            fee: 0.7
        },
        {
            nameHe: "מיטב השתלמות כספי (שקלי)",
            companyHe: "מיטב",
            month: 0.37,
            year1: 4.57,
            year3: 14.18,
            year5: 14.58,
            fee: 0.52
        },
        {
            nameHe: "אלטשולר שחם השתלמות מניות",
            companyHe: "אלטשולר שחם",
            month: 2.92,
            year1: 21.39,
            year3: 68.34,
            year5: 60.45,
            fee: 0.68
        },
        {
            nameHe: "אלטשולר שחם השתלמות אשראי ואג\"ח",
            companyHe: "אלטשולר שחם",
            month: 0.2,
            year1: 5.31,
            year3: 14.67,
            year5: 15.36,
            fee: 0.66
        },
        {
            nameHe: "הנדסאים השתלמות - מסלול אשראי ואג\"ח",
            companyHe: "הנדסאים",
            month: 1.1,
            year1: 8.81,
            year3: 25.08,
            year5: 22.14,
            fee: 0.35
        },
        {
            nameHe: "מינהל - השתלמות - אשראי ואג\"ח",
            companyHe: "מינהל",
            month: 0.34,
            year1: 5.23,
            year3: 15.01,
            year5: 19.36,
            fee: 0.56
        },
        {
            nameHe: "מיטב השתלמות אג\"ח ממשלות",
            companyHe: "מיטב",
            month: 0.44,
            year1: 6.23,
            year3: 14.74,
            year5: 15.79,
            fee: 0.62
        },
        {
            nameHe: "אלטשולר שחם השתלמות כספי (שקלי)",
            companyHe: "אלטשולר שחם",
            month: 0.54,
            year1: 5.29,
            year3: 15.14,
            year5: 16.46,
            fee: 0.66
        },
        {
            nameHe: "אלטשולר שחם השתלמות  אג\"ח ממשלות",
            companyHe: "אלטשולר שחם",
            month: 0.6,
            year1: 6.46,
            year3: 14.95,
            year5: 15.59,
            fee: 0.7
        },
        {
            nameHe: "מנורה השתלמות מניות סחיר",
            companyHe: "מנורה מבטחים",
            month: 1.53,
            year1: 11.81,
            year3: 55.93,
            year5: 64.44,
            fee: 0.5
        },
        {
            nameHe: "קרן החיסכון לצבא הקבע אשראי ואג\"ח",
            companyHe: "קרן",
            month: 0.5,
            year1: 6.09,
            year3: 9.76,
            year5: 8.51,
            fee: 0.19
        },
        {
            nameHe: "קרן החיסכון לצבא הקבע מניות",
            companyHe: "קרן",
            month: 5.01,
            year1: 29.66,
            year3: 73.75,
            year5: 88.89,
            fee: 0.19
        },
        {
            nameHe: "רעות - כספי (שקלי)",
            companyHe: "רעות",
            month: 0.38,
            year1: 4.32,
            year3: 13.2,
            year5: 8.18,
            fee: 0.46
        },
        {
            nameHe: "ק.ל.ע אג\"ח עד 25% מניות",
            companyHe: "ק.ל.ע.",
            month: 1.22,
            year1: 8.69,
            year3: 24.21,
            year5: 24.51,
            fee: 0.49
        },
        {
            nameHe: "אומגה השתלמות אשראי ואג\"ח",
            companyHe: "מנורה מבטחים",
            month: 1.03,
            year1: 9.48,
            year3: 15.62,
            year5: 11.26,
            fee: 0.53
        },
        {
            nameHe: "אומגה קרן השתלמות מסלול מניות",
            companyHe: "מנורה מבטחים",
            month: 4.74,
            year1: 30.1,
            year3: 79.36,
            year5: 92.01,
            fee: 0.44
        },
        {
            nameHe: "קרן השתלמות לאקדמאים במדעי החברה והרוח מסלול אשראי ואג\"ח",
            companyHe: "אקדמאים",
            month: 0.71,
            year1: 6.92,
            year3: 14.1,
            year5: 12.93,
            fee: 0.28
        },
        {
            nameHe: "קרן השתלמות לאקדמאים במדעי החברה והרוח מסלול מניות",
            companyHe: "אקדמאים",
            month: 4.25,
            year1: 26.64,
            year3: 83.27,
            year5: 86.84,
            fee: 0.28
        },
        {
            nameHe: "השתלמות משפטנים מניות",
            companyHe: "משפטנים",
            month: 6.31,
            year1: 36.01,
            year3: 107.45,
            year5: 111.29,
            fee: 0.41
        },
        {
            nameHe: "השתלמות משפטנים אשראי ואג\"ח",
            companyHe: "משפטנים",
            month: 1.38,
            year1: 12.32,
            year3: 21.93,
            year5: 19.38,
            fee: 0.42
        },
        {
            nameHe: "אחים ואחיות - מסלול אשראי ואג\"ח",
            companyHe: "יהב",
            month: 0.53,
            year1: 5.92,
            year3: 15.74,
            year5: 15.64,
            fee: 0.27
        },
        {
            nameHe: "פ.ר.ח אשראי ואג\"ח",
            companyHe: "יהב",
            month: 0.48,
            year1: 5.72,
            year3: 14.14,
            year5: 11.49,
            fee: 0.75
        },
        {
            nameHe: "יחד קרן השתלמות לרופאים- אג\"ח ממשלות",
            companyHe: "יחד רופאים",
            month: 0.45,
            year1: 4.96,
            year3: 11.58,
            year5: 10.31,
            fee: 0.38
        },
        {
            nameHe: "מיטב השתלמות בניהול אישי",
            companyHe: "מיטב",
            month: 0,
            year1: null,
            year3: 0,
            year5: 0,
            fee: 0.3
        },
        {
            nameHe: "סלייס השתלמות בניהול אישי",
            companyHe: "סלייס",
            month: 0,
            year1: null,
            year3: 0,
            year5: 0,
            fee: 0.34
        },
        {
            nameHe: "הראל השתלמות מסלול הלכה",
            companyHe: "הראל",
            month: 2.9,
            year1: 16.41,
            year3: 40.49,
            year5: 44.58,
            fee: 0.67
        },
        {
            nameHe: "כלל השתלמות הלכה",
            companyHe: "כלל",
            month: 2.73,
            year1: 16.85,
            year3: 40.18,
            year5: 41.47,
            fee: 0.56
        },
        {
            nameHe: "אנליסט השתלמות כספי (שקלי)",
            companyHe: "אנליסט",
            month: 0.39,
            year1: 4.43,
            year3: 13.62,
            year5: 14.15,
            fee: 0.58
        },
        {
            nameHe: "אינפיניטי השתלמות מניות",
            companyHe: "אינפיניטי",
            month: 4.09,
            year1: 26.67,
            year3: 92.95,
            year5: 110.94,
            fee: 0.59
        },
        {
            nameHe: "גלובל נט השתלמות IRA",
            companyHe: "גלובלנט",
            month: 0,
            year1: null,
            year3: 0,
            year5: 6.52,
            fee: 0.29
        },
        {
            nameHe: "הפניקס השתלמות בניהול אישי",
            companyHe: "הפניקס",
            month: 0,
            year1: null,
            year3: 0,
            year5: 0,
            fee: 0.24
        },
        {
            nameHe: "מורים וגננות - מסלול הלכה",
            companyHe: "מור",
            month: 1.93,
            year1: 13.52,
            year3: 39.55,
            year5: 38.64,
            fee: 0.12
        },
        {
            nameHe: "הראל השתלמות אשראי ואג\"ח",
            companyHe: "הראל",
            month: 0.49,
            year1: 7.04,
            year3: 14.16,
            year5: 13.1,
            fee: 0.6
        },
        {
            nameHe: "מגדל השתלמות  הלכה",
            companyHe: "מגדל",
            month: 2.11,
            year1: 15.82,
            year3: 40.13,
            year5: 42.19,
            fee: 0.59
        },
        {
            nameHe: "הפניקס השתלמות שריעה",
            companyHe: "הפניקס",
            month: -2.06,
            year1: 1.89,
            year3: 46,
            year5: 37.42,
            fee: 0.67
        },
        {
            nameHe: "גלובל נט השתלמות בניהול אישי",
            companyHe: "גלובלנט",
            month: 0,
            year1: null,
            year3: 0,
            year5: 0,
            fee: 0.31
        },
        {
            nameHe: "אינפיניטי השתלמות משולב סחיר",
            companyHe: "אינפיניטי",
            month: 7.63,
            year1: 53.8,
            year3: 138.71,
            year5: 148.56,
            fee: 0.59
        },
        {
            nameHe: "מורים וגננות - מסלול אשראי ואג\"ח",
            companyHe: "מור",
            month: 0.5,
            year1: 6.4,
            year3: 14.25,
            year5: 12.22,
            fee: 0.11
        },
        {
            nameHe: "מורים תיכוניים - מסלול הלכה",
            companyHe: "מור",
            month: 1.98,
            year1: 13.6,
            year3: 38.76,
            year5: 38.32,
            fee: 0.12
        },
        {
            nameHe: "מורים תיכוניים - מסלול אשראי ואג\"ח",
            companyHe: "מור",
            month: 0.5,
            year1: 6.37,
            year3: 14.34,
            year5: 12.24,
            fee: 0.11
        },
        {
            nameHe: "מורים וגננות - מסלול הלכה",
            companyHe: "מור",
            month: 1.98,
            year1: 13.72,
            year3: 40.02,
            year5: 39.86,
            fee: 0.12
        },
        {
            nameHe: "מורים וגננות - מסלול אשראי ואג\"ח",
            companyHe: "מור",
            month: 0.5,
            year1: 6.44,
            year3: 13.89,
            year5: 11.66,
            fee: 0.12
        },
        {
            nameHe: "מורים תיכוניים - מסלול הלכה",
            companyHe: "מור",
            month: 1.95,
            year1: 13.84,
            year3: 39.66,
            year5: 38.81,
            fee: 0.12
        },
        {
            nameHe: "מורים תיכוניים - מסלול אשראי ואג\"ח",
            companyHe: "מור",
            month: 0.53,
            year1: 6.35,
            year3: 13.97,
            year5: 11.35,
            fee: 0.12
        },
        {
            nameHe: "מגדל השתלמות עוקב מדדים - גמיש",
            companyHe: "מגדל",
            month: -1.6,
            year1: -1.18,
            year3: 11.96,
            year5: 14.02,
            fee: 0.54
        },
        {
            nameHe: "עובדי מדינה - משולב-אג\"ח עד 25 אחוז מניות",
            companyHe: "החברה",
            month: 0.98,
            year1: 9.03,
            year3: 24.64,
            year5: 24.79,
            fee: 0.38
        },
        {
            nameHe: "קרן השתלמות למורים בבתי הספר העי\"ס במכללות ובסמינרים מסלול אשראי ואג\"ח",
            companyHe: "עגור",
            month: 0.37,
            year1: 4.85,
            year3: 12.87,
            year5: 8.69,
            fee: 0.21
        },
        {
            nameHe: "קרן השתלמות למורים בבתי הספר העי\"ס במכללות ובסמינרים  מסלול אשראי ואג\"ח",
            companyHe: "עגור",
            month: 0.36,
            year1: 4.89,
            year3: 12.91,
            year5: 9.36,
            fee: 0.17
        },
        {
            nameHe: "קרן השתלמות למורים בבתיה\"ס העי\"ס במכללות ובסמינרים מסלול הלכה",
            companyHe: "עגור",
            month: 2.16,
            year1: 13.48,
            year3: 37.94,
            year5: 39.85,
            fee: 0.2
        },
        {
            nameHe: "קרן השתלמות למורים בבתי הספר העי\"ס במכללות ובסמינרים מסלול הלכה",
            companyHe: "עגור",
            month: 2.31,
            year1: 14.27,
            year3: 38.85,
            year5: 40.91,
            fee: 0.17
        },
        {
            nameHe: "ילין לפידות קרן השתלמות מסלול מניות",
            companyHe: "ילין לפידות",
            month: 2.84,
            year1: 22.37,
            year3: 76.58,
            year5: 96.5,
            fee: 0.67
        },
        {
            nameHe: "הפניקס השתלמות עוקב מדדים גמיש",
            companyHe: "הפניקס",
            month: -1.58,
            year1: 0.24,
            year3: 21.44,
            year5: 24.32,
            fee: 0.61
        },
        {
            nameHe: "אנליסט השתלמות אשראי ואג\"ח עד 25% מניות",
            companyHe: "אנליסט",
            month: 1.19,
            year1: 10.32,
            year3: 27.69,
            year5: 27.42,
            fee: 0.5
        },
        {
            nameHe: "מגדל השתלמות בניהול אישי IRA",
            companyHe: "מגדל",
            month: 0,
            year1: null,
            year3: 0,
            year5: 0,
            fee: 0.36
        },
        {
            nameHe: "רעות - אשראי ואג\"ח עד 25% מניות",
            companyHe: "רעות",
            month: 1.4,
            year1: 11.12,
            year3: 25.17,
            year5: 25.63,
            fee: 0.46
        },
        {
            nameHe: "מור השתלמות -עוקב מדד S&P 500",
            companyHe: "מור",
            month: -1.73,
            year1: 0.02,
            year3: 54.49,
            year5: 75.59,
            fee: 0.7
        },
        {
            nameHe: "עובדי מדינה - מניות",
            companyHe: "החברה",
            month: 4.28,
            year1: 26.9,
            year3: 86.4,
            year5: 97.76,
            fee: 0.38
        },
        {
            nameHe: "הפניקס השתלמות הלכה",
            companyHe: "הפניקס",
            month: 2.16,
            year1: 15.36,
            year3: 42.15,
            year5: 45.64,
            fee: 0.66
        },
        {
            nameHe: "מור השתלמות -כספי (שקלי)",
            companyHe: "מור",
            month: 0.39,
            year1: 4.44,
            year3: 13.54,
            year5: 14.92,
            fee: 0.68
        },
        {
            nameHe: "אנליסט השתלמות משולב סחיר",
            companyHe: "אנליסט",
            month: -2.41,
            year1: -4.1,
            year3: 22.95,
            year5: 26.38,
            fee: 0.62
        },
        {
            nameHe: "מיטב השתלמות אשראי ואג\"ח עם מניות (עד 25% מניות)",
            companyHe: "מיטב",
            month: 1.1,
            year1: 11.37,
            year3: 30.78,
            year5: 33.99,
            fee: 0.57
        },
        {
            nameHe: "מנורה השתלמות אג\"ח עד 25% מניות",
            companyHe: "מנורה מבטחים",
            month: -0.14,
            year1: 5.35,
            year3: 15.02,
            year5: 15.89,
            fee: 0.62
        },
        {
            nameHe: "אומגה השתלמות עד 25% מניות",
            companyHe: "מנורה מבטחים",
            month: 0.69,
            year1: 8.23,
            year3: 24.06,
            year5: 24.49,
            fee: 0.48
        },
        {
            nameHe: "מנורה השתלמות עוקב מדדים גמיש",
            companyHe: "מנורה מבטחים",
            month: 2.25,
            year1: 13.4,
            year3: 38.53,
            year5: 40.26,
            fee: 0.62
        },
        {
            nameHe: "יחד קרן השתלמות לרופאים-מניות",
            companyHe: "יחד רופאים",
            month: 2.63,
            year1: 21.96,
            year3: 61.83,
            year5: 68.11,
            fee: 0.38
        },
        {
            nameHe: "מור השתלמות - כללי",
            companyHe: "מור",
            month: 2.11,
            year1: 15.34,
            year3: 42.66,
            year5: 54.87,
            fee: 0.7
        },
        {
            nameHe: "מור השתלמות - מניות",
            companyHe: "מור",
            month: 4.71,
            year1: 27.57,
            year3: 76.51,
            year5: 93.03,
            fee: 0.71
        },
        {
            nameHe: "מנורה השתלמות עוקב מדדי אגח עד 25% מניות",
            companyHe: "מנורה מבטחים",
            month: 1.21,
            year1: 10.47,
            year3: 23.05,
            year5: 20.06,
            fee: 0.54
        },
        {
            nameHe: "עובדי המדינה הלכתי הלכה יהודית",
            companyHe: "החברה",
            month: 2.09,
            year1: 14.32,
            year3: 39.5,
            year5: 43.75,
            fee: 0.38
        },
        {
            nameHe: "סלייס השתלמות כללי",
            companyHe: "סלייס",
            month: -0.68,
            year1: -0.68,
            year3: null,
            year5: null,
            fee: null
        },
        {
            nameHe: "סלייס השתלמות אג\"ח אג\"ח",
            companyHe: "סלייס",
            month: -0.48,
            year1: -0.48,
            year3: null,
            year5: null,
            fee: null
        },
        {
            nameHe: "סלייס השתלמות מניות פאסיבי",
            companyHe: "סלייס",
            month: 2.04,
            year1: 2.04,
            year3: null,
            year5: null,
            fee: null
        },
        {
            nameHe: "סלייס השתלמות מדד חו\"ל",
            companyHe: "סלייס",
            month: -2.32,
            year1: -2.32,
            year3: null,
            year5: null,
            fee: null
        },
        {
            nameHe: "אינפיניטי השתלמות אשראי ואג\"ח עם מניות (עד 25% מניות)",
            companyHe: "אינפיניטי",
            month: 1.37,
            year1: 9.82,
            year3: 30.81,
            year5: 26.54,
            fee: 0.34
        },
        {
            nameHe: "אלטשולר שחם השתלמות הלכה",
            companyHe: "אלטשולר שחם",
            month: 1.84,
            year1: 13.06,
            year3: 38.55,
            year5: 34.44,
            fee: 0.74
        },
        {
            nameHe: "כלל השתלמות אשראי ואג\"ח עם מניות(עד 25% מניות)",
            companyHe: "כלל",
            month: 1.21,
            year1: 10.49,
            year3: 25.94,
            year5: 25.14,
            fee: 0.51
        },
        {
            nameHe: "מור השתלמות - אשראי ואג\"ח עם מניות (עד 25% מניות)",
            companyHe: "מור",
            month: 0.98,
            year1: 9.33,
            year3: 29.56,
            year5: 35.99,
            fee: 0.68
        },
        {
            nameHe: "אינפיניטי השתלמות  כללי",
            companyHe: "אינפיניטי",
            month: 2.1,
            year1: 16.39,
            year3: 50.19,
            year5: 56.99,
            fee: 0.6
        },
        {
            nameHe: "רום הלכה",
            companyHe: "רום",
            month: 2.12,
            year1: 13.36,
            year3: 38.09,
            year5: 41.69,
            fee: 0.31
        },
        {
            nameHe: "מיטב השתלמות עוקב מדד S&P500",
            companyHe: "מיטב",
            month: -1.41,
            year1: 0.21,
            year3: 59.1,
            year5: 86.33,
            fee: 0.54
        },
        {
            nameHe: "הפניקס השתלמות עוקב  מדד s&p500",
            companyHe: "הפניקס",
            month: -1.78,
            year1: -0.15,
            year3: 56.77,
            year5: 85.92,
            fee: 0.57
        },
        {
            nameHe: "כלל השתלמות עוקב  מדד s&p 500",
            companyHe: "כלל",
            month: -2.04,
            year1: -0.45,
            year3: 56.07,
            year5: 82.46,
            fee: 0.48
        },
        {
            nameHe: "מנורה השתלמות אשראי ואג\"ח",
            companyHe: "מנורה מבטחים",
            month: 1.04,
            year1: 10,
            year3: 30.42,
            year5: 27.72,
            fee: 0.47
        },
        {
            nameHe: "מינהל-השתלמות - הלכה",
            companyHe: "מינהל",
            month: 2.63,
            year1: 14.89,
            year3: null,
            year5: null,
            fee: 0.55
        },
        {
            nameHe: "הראל השתלמות - עוקב מדד s&p 500",
            companyHe: "הראל",
            month: -1.62,
            year1: -0.1,
            year3: 59.26,
            year5: null,
            fee: 0.5
        },
        {
            nameHe: "קרן החיסכון לצבא הקבע - עוקב מדד s&p500",
            companyHe: "קרן",
            month: -1.64,
            year1: -0.07,
            year3: 59.42,
            year5: null,
            fee: 0.19
        },
        {
            nameHe: "אנליסט השתלמות עוקב מדד S&P500",
            companyHe: "אנליסט",
            month: -1.86,
            year1: -0.4,
            year3: 55.72,
            year5: null,
            fee: 0.62
        },
        {
            nameHe: "מנורה מבטחים השתלמות הלכה",
            companyHe: "מנורה מבטחים",
            month: 2.17,
            year1: 14.02,
            year3: 28.91,
            year5: null,
            fee: 0.63
        },
        {
            nameHe: "מנורה השתלמות עוקב S&P500",
            companyHe: "מנורה מבטחים",
            month: -1.85,
            year1: 0.14,
            year3: 57.52,
            year5: null,
            fee: 0.49
        },
        {
            nameHe: "קרן החיסכון לצבא הקבע - קיימות",
            companyHe: "קרן",
            month: 3.15,
            year1: 16.34,
            year3: 2.85,
            year5: null,
            fee: 0.19
        },
        {
            nameHe: "אומגה השתלמות מדדי מניות",
            companyHe: "מנורה מבטחים",
            month: 2.96,
            year1: 12,
            year3: null,
            year5: null,
            fee: 0.46
        },
        {
            nameHe: "אינפיניטי השתלמות עוקב מדדי מניות",
            companyHe: "אינפיניטי",
            month: 2.14,
            year1: 16.56,
            year3: null,
            year5: null,
            fee: 0.62
        },
        {
            nameHe: "אינפיניטי השתלמות הלכה",
            companyHe: "אינפיניטי",
            month: -0.44,
            year1: 7.72,
            year3: null,
            year5: null,
            fee: 0.54
        },
        {
            nameHe: "מור השתלמות - אשראי ואג\"ח",
            companyHe: "מור",
            month: 1.03,
            year1: 8.88,
            year3: null,
            year5: null,
            fee: 0.64
        },
        {
            nameHe: "ילין לפידות קרן השתלמות מסלול עוקב מדדים גמיש",
            companyHe: "ילין לפידות",
            month: -1.36,
            year1: 0.95,
            year3: null,
            year5: null,
            fee: 0.66
        },
        {
            nameHe: "מגדל השתלמות עוקב מדד S&P 500",
            companyHe: "מגדל",
            month: -2.31,
            year1: -0.36,
            year3: null,
            year5: null,
            fee: 0.5
        },
        {
            nameHe: "מנורה השתלמות מדדי מניות",
            companyHe: "מנורה מבטחים",
            month: 3.95,
            year1: 19.1,
            year3: null,
            year5: null,
            fee: 0.6
        },
        {
            nameHe: "כלל השתלמות עוקב מדדים גמיש",
            companyHe: "כלל",
            month: -1.7,
            year1: -1.94,
            year3: null,
            year5: null,
            fee: 0.49
        },
        {
            nameHe: "הראל השתלמות מסלול כספי (שקלי)",
            companyHe: "הראל",
            month: 0.37,
            year1: 4.56,
            year3: null,
            year5: null,
            fee: 0.5
        },
        {
            nameHe: "קרן השתלמות של עובדי האוניברסיטה העברית מניות מניות",
            companyHe: "חברת",
            month: 4.22,
            year1: 21.44,
            year3: null,
            year5: null,
            fee: 0.42
        },
        {
            nameHe: "כלל השתלמות עוקב מדדי מניות",
            companyHe: "כלל",
            month: -0.12,
            year1: 0.15,
            year3: null,
            year5: null,
            fee: 0.52
        },
        {
            nameHe: "רעות - עוקב מדד S&P 500",
            companyHe: "רעות",
            month: -2.17,
            year1: -0.5,
            year3: null,
            year5: null,
            fee: 0.46
        },
        {
            nameHe: "ילין לפידות קרן השתלמות מסלול עוקב מדד s&p 500",
            companyHe: "ילין לפידות",
            month: -1.97,
            year1: -0.67,
            year3: null,
            year5: null,
            fee: 0.68
        },
        {
            nameHe: "אלטשולר שחם השתלמות עוקב מדד S&P 500",
            companyHe: "אלטשולר שחם",
            month: -2.34,
            year1: -0.38,
            year3: null,
            year5: null,
            fee: 0.66
        },
        {
            nameHe: "אלטשולר שחם השתלמות עוקב מדדי מניות",
            companyHe: "אלטשולר שחם",
            month: 0.73,
            year1: 8.39,
            year3: null,
            year5: null,
            fee: 0.59
        },
        {
            nameHe: "אינפיניטי השתלמות עוקב מדד s&p 500",
            companyHe: "אינפיניטי",
            month: -1.89,
            year1: 2.54,
            year3: null,
            year5: null,
            fee: 0.6
        },
        {
            nameHe: "מגדל השתלמות מסלול עוקב מדדי מניות",
            companyHe: "מגדל",
            month: -2.86,
            year1: 2.91,
            year3: null,
            year5: null,
            fee: 0.54
        },
        {
            nameHe: "הפניקס השתלמות עוקב מדדי מניות",
            companyHe: "הפניקס",
            month: -2.36,
            year1: 0.52,
            year3: null,
            year5: null,
            fee: 0.58
        },
        {
            nameHe: "אלטשולר שחם השתלמות עוקב מדדים גמיש",
            companyHe: "אלטשולר שחם",
            month: 1.63,
            year1: 14.61,
            year3: null,
            year5: null,
            fee: 0.61
        },
        {
            nameHe: "קרן השתלמות לאקדמאים במדעי החברה והרוח מסלול כללי עוקבי מדדים עוקב מדד s&p 500",
            companyHe: "אקדמאים",
            month: -1.53,
            year1: -0.24,
            year3: null,
            year5: null,
            fee: 0.28
        },
        {
            nameHe: "יחד קרן השתלמות לרופאים- עוקב מדד S&P 500",
            companyHe: "יחד רופאים",
            month: -2.23,
            year1: 0.62,
            year3: null,
            year5: null,
            fee: 0.39
        },
        {
            nameHe: "הפניקס השתלמות משולב סחיר",
            companyHe: "הפניקס",
            month: 2.58,
            year1: 16.87,
            year3: null,
            year5: null,
            fee: 0.55
        },
        {
            nameHe: "הפניקס השתלמות אג\"ח סחיר",
            companyHe: "הפניקס",
            month: 0.3,
            year1: 6.23,
            year3: null,
            year5: null,
            fee: 0.55
        },
        {
            nameHe: "הפניקס השתלמות מניות סחיר",
            companyHe: "הפניקס",
            month: 7.69,
            year1: 53.28,
            year3: null,
            year5: null,
            fee: 0.49
        },
        {
            nameHe: "מור השתלמות משולב סחיר",
            companyHe: "מור",
            month: 2.61,
            year1: 16.47,
            year3: null,
            year5: null,
            fee: 0.65
        },
        {
            nameHe: "מור השתלמות אג\"ח עם מניות (עד 25% מניות) סחיר",
            companyHe: "מור",
            month: 1.18,
            year1: 11.76,
            year3: null,
            year5: null,
            fee: 0.67
        },
        {
            nameHe: "מור השתלמות עוקב מדדי מניות",
            companyHe: "מור",
            month: 0.9,
            year1: 4.34,
            year3: null,
            year5: null,
            fee: 0.69
        },
        {
            nameHe: "מור השתלמות עוקב מדדי אג\"ח",
            companyHe: "מור",
            month: -2.77,
            year1: -7.39,
            year3: null,
            year5: null,
            fee: 0.7
        },
        {
            nameHe: "מור השתלמות אג\"ח סחיר",
            companyHe: "מור",
            month: 0.94,
            year1: 9.49,
            year3: null,
            year5: null,
            fee: 0.67
        },
        {
            nameHe: "מור השתלמות מניות סחיר",
            companyHe: "מור",
            month: 5.77,
            year1: 29.59,
            year3: null,
            year5: null,
            fee: 0.65
        },
        {
            nameHe: "מור השתלמות עוקב מדדים גמיש",
            companyHe: "מור",
            month: -1.1,
            year1: -1.87,
            year3: null,
            year5: null,
            fee: 0.69
        },
        {
            nameHe: "מור השתלמות עוקב מדדים אג\"ח עם מניות (עד 25% מניות)",
            companyHe: "מור",
            month: -2.34,
            year1: -5.3,
            year3: null,
            year5: null,
            fee: 0.69
        },
        {
            nameHe: "אנליסט השתלמות עוקב מדדי מניות",
            companyHe: "אנליסט",
            month: 0.84,
            year1: 9.9,
            year3: null,
            year5: null,
            fee: 0.62
        },
        {
            nameHe: "מגדל השתלמות אשראי ואג\"ח עם מניות (עד 25% מניות)",
            companyHe: "מגדל",
            month: 1.35,
            year1: 11.21,
            year3: null,
            year5: null,
            fee: 0.46
        },
        {
            nameHe: "הראל השתלמות קיימות",
            companyHe: "הראל",
            month: 3.22,
            year1: 16.58,
            year3: null,
            year5: null,
            fee: 0.57
        },
        {
            nameHe: "הראל השתלמות עוקב מדדים - גמיש",
            companyHe: "הראל",
            month: 2.29,
            year1: 16.44,
            year3: null,
            year5: null,
            fee: 0.47
        },
        {
            nameHe: "הראל השתלמות עוקב מדדי אג\"ח",
            companyHe: "הראל",
            month: -3.16,
            year1: -7.18,
            year3: null,
            year5: null,
            fee: 0.52
        },
        {
            nameHe: "הראל השתלמות עוקב מדדים- אג\"ח עם מניות (עד 25% מניות)",
            companyHe: "הראל",
            month: 1.19,
            year1: 10.1,
            year3: null,
            year5: null,
            fee: 0.47
        },
        {
            nameHe: "הראל השתלמות עוקב מדדי מניות",
            companyHe: "הראל",
            month: -0.27,
            year1: 4.65,
            year3: null,
            year5: null,
            fee: 0.51
        },
        {
            nameHe: "הראל השתלמות אג\"ח סחיר",
            companyHe: "הראל",
            month: 0.4,
            year1: 6.95,
            year3: null,
            year5: null,
            fee: 0.5
        },
        {
            nameHe: "הראל השתלמות מניות סחיר",
            companyHe: "הראל",
            month: 7.85,
            year1: 58.38,
            year3: null,
            year5: null,
            fee: 0.49
        },
        {
            nameHe: "הראל השתלמות מסלול סחיר- אג\"ח עם מניות (עד 25% מניות)",
            companyHe: "הראל",
            month: 1.42,
            year1: 11.91,
            year3: null,
            year5: null,
            fee: 0.41
        },
        {
            nameHe: "קרן החיסכון לצבא הקבע - כספי (שקלי)",
            companyHe: "קרן",
            month: 0.37,
            year1: 4.6,
            year3: null,
            year5: null,
            fee: 0.19
        },
        {
            nameHe: "קרן החיסכון לצבא הקבע - מניות סחיר",
            companyHe: "קרן",
            month: 7.84,
            year1: 58.54,
            year3: null,
            year5: null,
            fee: 0.18
        },
        {
            nameHe: "קרן החיסכון לצבא הקבע -משולב סחיר",
            companyHe: "קרן",
            month: -0.7,
            year1: 0.77,
            year3: null,
            year5: null,
            fee: 0.18
        },
        {
            nameHe: "קרן החיסכון לצבא הקבע - עוקב מדדים - גמיש",
            companyHe: "קרן",
            month: 2.3,
            year1: 16.41,
            year3: null,
            year5: null,
            fee: 0.18
        },
        {
            nameHe: "קרן החיסכון לצבא הקבע -עוקב מדדי מניות",
            companyHe: "קרן",
            month: -0.28,
            year1: 4.71,
            year3: null,
            year5: null,
            fee: 0.18
        },
        {
            nameHe: "אנליסט השתלמות עוקב מדדים - גמיש",
            companyHe: "אנליסט",
            month: 6.98,
            year1: 51.3,
            year3: null,
            year5: null,
            fee: 0.61
        },
        {
            nameHe: "מיטב השתלמות מניות סחיר",
            companyHe: "מיטב",
            month: -0.95,
            year1: 0.61,
            year3: null,
            year5: null,
            fee: 0.57
        },
        {
            nameHe: "מיטב השתלמות אג\"ח סחיר",
            companyHe: "מיטב",
            month: -2.59,
            year1: -6.52,
            year3: null,
            year5: null,
            fee: 0.57
        },
        {
            nameHe: "מיטב השתלמות סחיר - אג\"ח עם מניות (עד 25% מניות)",
            companyHe: "מיטב",
            month: 2.13,
            year1: 14.87,
            year3: null,
            year5: null,
            fee: 0.53
        },
        {
            nameHe: "מיטב השתלמות משולב סחיר",
            companyHe: "מיטב",
            month: 8.3,
            year1: 59.22,
            year3: null,
            year5: null,
            fee: 0.52
        },
        {
            nameHe: "מיטב השתלמות עוקב מדדי מניות",
            companyHe: "מיטב",
            month: 3.46,
            year1: 20.66,
            year3: null,
            year5: null,
            fee: 0.56
        },
        {
            nameHe: "מיטב השתלמות עוקב מדדי אג\"ח עם מניות (עד 25% מניות)",
            companyHe: "מיטב",
            month: -2.53,
            year1: -5.11,
            year3: null,
            year5: null,
            fee: 0.58
        },
        {
            nameHe: "מיטב השתלמות קיימות",
            companyHe: "מיטב",
            month: 2.14,
            year1: 15.42,
            year3: null,
            year5: null,
            fee: 0.55
        },
        {
            nameHe: "הנדסאיםהשתלמות -  מסלול s&p 500",
            companyHe: "הנדסאים",
            month: -2.41,
            year1: -0.67,
            year3: null,
            year5: null,
            fee: 0.34
        },
        {
            nameHe: "רום עוקב מדד s&p 500",
            companyHe: "רום",
            month: -2.26,
            year1: -0.44,
            year3: null,
            year5: null,
            fee: 0.31
        },
        {
            nameHe: "מינהל-השתלמות עוקב מדד s&p 500",
            companyHe: "מינהל",
            month: -2.27,
            year1: -0.53,
            year3: null,
            year5: null,
            fee: 0.55
        }
    ],

    // Pension Funds - קרנות פנסיה (Real data from igemel-net.co.il)
    pension: [
        {
            nameHe: "מיטב פנסיה מקיפה פאסיבי- מדדי אג\"ח עד 25% במדדי מניות",
            companyHe: "מיטב",
            month: 2.24,
            year1: 10.06,
            year3: 13.82,
            year5: 25.28,
            fee: 1.31
        },
        {
            nameHe: "כלל פנסיה כללי",
            companyHe: "כלל",
            month: 1.18,
            year1: 18.97,
            year3: 47.15,
            year5: 61.66,
            fee: 1.54
        },
        {
            nameHe: "מנורה מבטחים משלימה - יעד לפרישה 2060",
            companyHe: "מנורה מבטחים",
            month: 0.72,
            year1: 21.75,
            year3: 53.25,
            year5: 58.61,
            fee: 1.06
        },
        {
            nameHe: "מנורה מבטחים משלימה - יעד לפרישה 2055",
            companyHe: "מנורה מבטחים",
            month: 0.69,
            year1: 21.44,
            year3: 52.8,
            year5: 58.36,
            fee: 1.06
        },
        {
            nameHe: "מנורה מבטחים משלימה -יעד לפרישה 2050",
            companyHe: "מנורה מבטחים",
            month: 0.69,
            year1: 20.78,
            year3: 51.16,
            year5: 56.43,
            fee: 1.06
        },
        {
            nameHe: "מנורה מבטחים משלימה - יעד לפרישה 2045",
            companyHe: "מנורה מבטחים",
            month: 0.68,
            year1: 19.98,
            year3: 49.72,
            year5: 57.16,
            fee: 1.06
        },
        {
            nameHe: "מנורה מבטחים משלימה - יעד לפרישה 2040",
            companyHe: "מנורה מבטחים",
            month: 0.62,
            year1: 17.6,
            year3: 44.07,
            year5: 49.93,
            fee: 1.06
        },
        {
            nameHe: "מנורה מבטחים משלימה - יעד לפרישה 2035",
            companyHe: "מנורה מבטחים",
            month: 0.6,
            year1: 16.19,
            year3: 40.11,
            year5: 44.72,
            fee: 1.06
        },
        {
            nameHe: "מנורה מבטחים משלימה - יעד לפרישה 2030",
            companyHe: "מנורה מבטחים",
            month: 0.52,
            year1: 14.02,
            year3: 35.23,
            year5: 39.52,
            fee: 1.06
        },
        {
            nameHe: "מנורה מבטחים משלימה - יעד לפרישה 2025",
            companyHe: "מנורה מבטחים",
            month: 0.8,
            year1: 10.95,
            year3: 28.5,
            year5: 30.85,
            fee: 1.06
        },
        {
            nameHe: "מיטב פנסיה מקיפה עוקב מדדי מניות",
            companyHe: "מיטב",
            month: -1.77,
            year1: 19.31,
            year3: 79.9,
            year5: 91.64,
            fee: 1.31
        },
        {
            nameHe: "מיטב פנסיה מקיפה מניות",
            companyHe: "מיטב",
            month: 0.86,
            year1: 23.36,
            year3: 64.72,
            year5: 78.11,
            fee: 1.31
        },
        {
            nameHe: "מיטב פנסיה כללית אשראי ואג\"ח",
            companyHe: "מיטב",
            month: 0.32,
            year1: 6.93,
            year3: 22.36,
            year5: 21.63,
            fee: 1.11
        },
        {
            nameHe: "מיטב פנסיה כללית מניות",
            companyHe: "מיטב",
            month: 1.05,
            year1: 30.92,
            year3: 84.04,
            year5: 88.7,
            fee: 1.11
        },
        {
            nameHe: "מגדל מקפת אישית הלכה",
            companyHe: "מגדל",
            month: 0.87,
            year1: 17.01,
            year3: 47.3,
            year5: 57.45,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת אישית מניות",
            companyHe: "מגדל",
            month: 1.14,
            year1: 23.39,
            year3: 66.05,
            year5: 78.71,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת אישית כספי (שקלי)",
            companyHe: "מגדל",
            month: 0.17,
            year1: 5.24,
            year3: 17.07,
            year5: 22.71,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת אישית אשראי ואג\"ח",
            companyHe: "מגדל",
            month: 0.17,
            year1: 6,
            year3: 21.56,
            year5: 23.73,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת משלימה כללי",
            companyHe: "מגדל",
            month: 0.81,
            year1: 16.76,
            year3: 45.61,
            year5: 49.19,
            fee: 1.02
        },
        {
            nameHe: "מגדל מקפת משלימה מניות",
            companyHe: "מגדל",
            month: 1.52,
            year1: 30.78,
            year3: 84.7,
            year5: 89.58,
            fee: 1.02
        },
        {
            nameHe: "מיטב פנסיה מקיפה אשראי ואג\"ח",
            companyHe: "מיטב",
            month: 0.32,
            year1: 6.93,
            year3: 23.38,
            year5: 29.84,
            fee: 1.31
        },
        {
            nameHe: "מגדל מקפת אישית כללי",
            companyHe: "מגדל",
            month: 0.95,
            year1: 17.55,
            year3: 46.32,
            year5: 63.39,
            fee: 1.61
        },
        {
            nameHe: "כלל פנסיה הלכה",
            companyHe: "כלל",
            month: 0.79,
            year1: 17.76,
            year3: 46.82,
            year5: 54.58,
            fee: 1.54
        },
        {
            nameHe: "מנורה מבטחים פנסיה - כללי",
            companyHe: "מנורה מבטחים",
            month: 0.73,
            year1: 19.05,
            year3: 48.13,
            year5: 64.96,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה - מסלול יעד לפרישה 2025",
            companyHe: "מנורה מבטחים",
            month: 0.73,
            year1: 11.31,
            year3: 31.09,
            year5: 41.2,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה - מסלול יעד לפרישה 2030",
            companyHe: "מנורה מבטחים",
            month: 0.55,
            year1: 13.28,
            year3: 34.79,
            year5: 48.22,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה - מסלול יעד לפרישה 2035",
            companyHe: "מנורה מבטחים",
            month: 0.64,
            year1: 16.08,
            year3: 42,
            year5: 56,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה - מסלול יעד לפרישה 2040",
            companyHe: "מנורה מבטחים",
            month: 0.72,
            year1: 18.8,
            year3: 47.34,
            year5: 62.56,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה - מסלול יעד לפרישה 2045",
            companyHe: "מנורה מבטחים",
            month: 0.76,
            year1: 19.95,
            year3: 49.64,
            year5: 66.47,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה - מסלול מניות",
            companyHe: "מנורה מבטחים",
            month: 0.89,
            year1: 25.3,
            year3: 67.06,
            year5: 82.91,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה - מסלול אג\"ח",
            companyHe: "מנורה מבטחים",
            month: 0.37,
            year1: 4.48,
            year3: 9.81,
            year5: 14.44,
            fee: 1.73
        },
        {
            nameHe: "הראל  פנסיה - גילעד כללי",
            companyHe: "הראל",
            month: 0.64,
            year1: 16.87,
            year3: 41.95,
            year5: 57.06,
            fee: 1.51
        },
        {
            nameHe: "הראל פנסיה - הלכה",
            companyHe: "הראל",
            month: 1.14,
            year1: 18.77,
            year3: 49.13,
            year5: 60.47,
            fee: 1.51
        },
        {
            nameHe: "הראל פנסיה - אשראי ואג\"ח",
            companyHe: "הראל",
            month: 0.39,
            year1: 7,
            year3: 18.23,
            year5: 23.18,
            fee: 1.51
        },
        {
            nameHe: "הראל פנסיה - מניות",
            companyHe: "הראל",
            month: 0.83,
            year1: 23.74,
            year3: 61.42,
            year5: 77.43,
            fee: 1.51
        },
        {
            nameHe: "כלל פנסיה משלימה - כללי",
            companyHe: "כלל",
            month: 1.19,
            year1: 18.98,
            year3: 45.3,
            year5: 48.57,
            fee: 0.98
        },
        {
            nameHe: "הראל פנסיה - מנוף כללי",
            companyHe: "הראל",
            month: 0.65,
            year1: 16.84,
            year3: 42.12,
            year5: 56.87,
            fee: 1.51
        },
        {
            nameHe: "מנורה מבטחים פנסיה - מסלול הלכה",
            companyHe: "מנורה מבטחים",
            month: 0.79,
            year1: 16.73,
            year3: 41.82,
            year5: 46.12,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה - מסלול יעד לפרישה 2050",
            companyHe: "מנורה מבטחים",
            month: 0.81,
            year1: 20.65,
            year3: 51.49,
            year5: 67.7,
            fee: 1.73
        },
        {
            nameHe: "הראל פנסיה כללית - כללי",
            companyHe: "הראל",
            month: 0.71,
            year1: 16.51,
            year3: 38.71,
            year5: 44.96,
            fee: 1.13
        },
        {
            nameHe: "מיטב פנסיה כללית מקבלי קצבה קיימים",
            companyHe: "מיטב",
            month: -4,
            year1: 4.14,
            year3: 7.64,
            year5: 1.42,
            fee: 1.11
        },
        {
            nameHe: "מגדל מקפת משלימה כספי (שקלי)",
            companyHe: "מגדל",
            month: 0.22,
            year1: 4.7,
            year3: 14.29,
            year5: 13.96,
            fee: 1.02
        },
        {
            nameHe: "מגדל מקפת משלימה אשראי ואג\"ח",
            companyHe: "מגדל",
            month: 0.15,
            year1: 5.87,
            year3: 19.45,
            year5: 14.31,
            fee: 1.02
        },
        {
            nameHe: "מגדל מקפת משלימה הלכה",
            companyHe: "מגדל",
            month: 0.87,
            year1: 16.87,
            year3: 44.74,
            year5: 44.08,
            fee: 1.02
        },
        {
            nameHe: "מיטב פנסיה מקיפה לבני 50 ומטה",
            companyHe: "מיטב",
            month: 0.76,
            year1: 19.55,
            year3: 54.46,
            year5: 69.63,
            fee: 1.31
        },
        {
            nameHe: "מיטב פנסיה מקיפה הלכה",
            companyHe: "מיטב",
            month: 0.62,
            year1: 16.7,
            year3: 45.97,
            year5: 55.38,
            fee: 1.31
        },
        {
            nameHe: "מיטב פנסיה מקיפה מקבלי קצבה קיימים",
            companyHe: "מיטב",
            month: -15,
            year1: 5.88,
            year3: 18.23,
            year5: 28.93,
            fee: 1.31
        },
        {
            nameHe: "מיטב פנסיה כללית לבני 50 ומטה",
            companyHe: "מיטב",
            month: 0.79,
            year1: 19.75,
            year3: 53.39,
            year5: 56.36,
            fee: 1.11
        },
        {
            nameHe: "מיטב פנסיה כללית הלכה",
            companyHe: "מיטב",
            month: 0.82,
            year1: 15.71,
            year3: 39.42,
            year5: 46.65,
            fee: 1.11
        },
        {
            nameHe: "מגדל מקפת משלימה למקבלי קצבה קיימים",
            companyHe: "מגדל",
            month: null,
            year1: 5.03,
            year3: 11.16,
            year5: 8.99,
            fee: 1.68
        },
        {
            nameHe: "מנורה מבטחים פנסיה מקבלי קצבה קיימים",
            companyHe: "מנורה מבטחים",
            month: -17,
            year1: 5.69,
            year3: 15.73,
            year5: 26.46,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים משלימה - מקבלי קצבה קיימים",
            companyHe: "מנורה מבטחים",
            month: null,
            year1: 4.37,
            year3: 6.63,
            year5: 3.04,
            fee: 1.06
        },
        {
            nameHe: "מיטב מקיפה אג\"ח עד 25% במנית",
            companyHe: "מיטב",
            month: 0.68,
            year1: 7.14,
            year3: 11.98,
            year5: 22.21,
            fee: 1.31
        },
        {
            nameHe: "הפניקס פנסיה משלימה - מסלול לבני 50 ומטה",
            companyHe: "הפניקס",
            month: 0.68,
            year1: 19.07,
            year3: 52.33,
            year5: 55.08,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה משלימה - מסלול לבני 50 עד 60",
            companyHe: "הפניקס",
            month: 0.58,
            year1: 16.65,
            year3: 45.93,
            year5: 45.15,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה משלימה - מסלול לבני 60 ומעלה",
            companyHe: "הפניקס",
            month: 0.48,
            year1: 11.35,
            year3: 32.24,
            year5: 30.55,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה משלימה - מניות",
            companyHe: "הפניקס",
            month: 0.92,
            year1: 29.82,
            year3: 84.16,
            year5: 88.87,
            fee: 1.29
        },
        {
            nameHe: "הפניקס פנסיה משלימה - אשראי ואג\"ח",
            companyHe: "הפניקס",
            month: 0.2,
            year1: 5.06,
            year3: 17.83,
            year5: 14.06,
            fee: 1.55
        },
        {
            nameHe: "מגדל מקפת אישית  למקבלי קצבה קיימים",
            companyHe: "מגדל",
            month: -19,
            year1: 6.08,
            year3: 18.21,
            year5: 30.64,
            fee: 1.61
        },
        {
            nameHe: "כלל פנסיה משלימה למקבלי קצבה קיימים",
            companyHe: "כלל",
            month: null,
            year1: 4.25,
            year3: 7.94,
            year5: 4.06,
            fee: 0.98
        },
        {
            nameHe: "כלל פנסיה למקבלי קצבה קיימים",
            companyHe: "כלל",
            month: -15,
            year1: 5.9,
            year3: 18.25,
            year5: 30.09,
            fee: 1.54
        },
        {
            nameHe: "מנורה מבטחים פנסיה - מסלול יעד לפרישה 2055",
            companyHe: "מנורה מבטחים",
            month: 0.84,
            year1: 21.81,
            year3: 54.61,
            year5: 71.15,
            fee: 1.73
        },
        {
            nameHe: "הפניקס פנסיה מקיפה - מניות",
            companyHe: "הפניקס",
            month: 0.7,
            year1: 23.41,
            year3: 66.03,
            year5: 77.42,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה מקיפה אשראי ואג\"ח",
            companyHe: "הפניקס",
            month: 0.16,
            year1: 5.94,
            year3: 22.73,
            year5: 28.64,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה מקיפה -כספי (שקלי)",
            companyHe: "הפניקס",
            month: 0.25,
            year1: 5.17,
            year3: 17.01,
            year5: 23.3,
            fee: 1.55
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה למקבלי קצבה קיימים",
            companyHe: "אלטשולר שחם",
            month: 0.05,
            year1: 8.83,
            year3: 31.24,
            year5: 49.77,
            fee: 1.37
        },
        {
            nameHe: "הפניקס פנסיה מקיפה - מסלול מקבלי קצבה קיימים",
            companyHe: "הפניקס",
            month: -22,
            year1: 5.57,
            year3: 16.8,
            year5: 28.59,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה כללית - מסלול מקבלי קצבה קיימים",
            companyHe: "הפניקס",
            month: null,
            year1: 3.83,
            year3: 7.02,
            year5: 4.6,
            fee: 1.29
        },
        {
            nameHe: "הראל  פנסיה - מקבלי קצבה קיימים",
            companyHe: "הראל",
            month: -18,
            year1: 5.86,
            year3: 18.88,
            year5: 30.62,
            fee: 1.51
        },
        {
            nameHe: "הראל פנסיה כללית - מקבלי קצבה קיימים",
            companyHe: "הראל",
            month: null,
            year1: 4.52,
            year3: 9.17,
            year5: 5.98,
            fee: 1.13
        },
        {
            nameHe: "מגדל מקפת אישית לבני 60 ומעלה",
            companyHe: "מגדל",
            month: 0.59,
            year1: 12.06,
            year3: 34.41,
            year5: 43.37,
            fee: 1.61
        },
        {
            nameHe: "הראל פנסיה- הלכה למקבלי קצבה קיימים",
            companyHe: "הראל",
            month: -17,
            year1: 5.3,
            year3: 15.84,
            year5: 27.85,
            fee: 1.13
        },
        {
            nameHe: "מנורה מבטחים פנסיה - מסלול יעד לפרישה 2060",
            companyHe: "מנורה מבטחים",
            month: 0.9,
            year1: 22.23,
            year3: 55.3,
            year5: 69.94,
            fee: 1.73
        },
        {
            nameHe: "הראל פנסיה - כספי (שקלי)",
            companyHe: "הראל",
            month: 0.25,
            year1: 5.16,
            year3: 17.07,
            year5: 23.21,
            fee: 1.51
        },
        {
            nameHe: "מגדל מקפת משלימה לבני 50 ומטה",
            companyHe: "מגדל",
            month: 0.92,
            year1: 19.07,
            year3: 51.2,
            year5: 54.15,
            fee: 1.02
        },
        {
            nameHe: "מגדל מקפת משלימה לבני 50 עד 60",
            companyHe: "מגדל",
            month: 0.8,
            year1: 16.68,
            year3: 44.68,
            year5: 46.22,
            fee: 1.02
        },
        {
            nameHe: "מגדל מקפת משלימה לבני 60 ומעלה",
            companyHe: "מגדל",
            month: 0.52,
            year1: 11.89,
            year3: 33.42,
            year5: 32.34,
            fee: 1.02
        },
        {
            nameHe: "כלל פנסיה משלימה לבני 50 ומטה",
            companyHe: "כלל",
            month: 1.14,
            year1: 20.92,
            year3: 52.08,
            year5: 53.7,
            fee: 1.02
        },
        {
            nameHe: "כלל פנסיה משלימה לבני 50 עד 60",
            companyHe: "כלל",
            month: 0.98,
            year1: 17.6,
            year3: 45.35,
            year5: 46.57,
            fee: 0.98
        },
        {
            nameHe: "מגדל מקפת אישית לבני 50 עד 60",
            companyHe: "מגדל",
            month: 0.85,
            year1: 16.79,
            year3: 46.34,
            year5: 58.17,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת אישית לבני 50 ומטה",
            companyHe: "מגדל",
            month: 0.98,
            year1: 19.49,
            year3: 52.16,
            year5: 65.42,
            fee: 1.61
        },
        {
            nameHe: "הפניקס פנסיה משלימה - כספי (שקלי)",
            companyHe: "הפניקס",
            month: 0.27,
            year1: 4.51,
            year3: 13.91,
            year5: 14.51,
            fee: 1.55
        },
        {
            nameHe: "כלל פנסיה מסלול אג\"ח עד 15% מניות",
            companyHe: "כלל",
            month: 0.47,
            year1: 6.46,
            year3: 10.67,
            year5: 23.79,
            fee: 1.54
        },
        {
            nameHe: "מנורה מבטחים פנסיה קצבה לזכאים קיימים",
            companyHe: "מנורה מבטחים",
            month: -1,
            year1: 6.38,
            year3: 22.72,
            year5: 41.27,
            fee: 1.73
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית למקבלי קצבה קיימים",
            companyHe: "אלטשולר שחם",
            month: 0.17,
            year1: 7.61,
            year3: 15.24,
            year5: 9.89,
            fee: 1.34
        },
        {
            nameHe: "הראל פנסיה  - קצבה לזכאים קיימים",
            companyHe: "הראל",
            month: -12,
            year1: 6.23,
            year3: 20.82,
            year5: 35.27,
            fee: 1.51
        },
        {
            nameHe: "מגדל מקפת אישית קצבה לזכאים קיימים",
            companyHe: "מגדל",
            month: -6,
            year1: 6.57,
            year3: 21.5,
            year5: 37.54,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת אישית הלכה למקבלי קצבה קיימים",
            companyHe: "מגדל",
            month: -11,
            year1: 6.2,
            year3: 20.17,
            year5: 31.55,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת משלימה הלכה למקבלי קצבה",
            companyHe: "מגדל",
            month: 0.23,
            year1: 10.38,
            year3: 28.66,
            year5: null,
            fee: 1.02
        },
        {
            nameHe: "מיטב פנסיה מקיפה קצבה לזכאים קיימים",
            companyHe: "מיטב",
            month: -11,
            year1: 5.96,
            year3: 19.65,
            year5: 32.91,
            fee: 1.31
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה הלכה",
            companyHe: "אלטשולר שחם",
            month: -25,
            year1: 14,
            year3: 43.37,
            year5: 45.31,
            fee: 1.3
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית מסלול לבני 50 ומטה",
            companyHe: "אלטשולר שחם",
            month: -24,
            year1: 17.08,
            year3: 47.24,
            year5: 39.9,
            fee: 1.34
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית מסלול לבני 50 עד 60",
            companyHe: "אלטשולר שחם",
            month: -15,
            year1: 14.79,
            year3: 42.19,
            year5: 37.13,
            fee: 1.34
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית מסלול לבני 60 ומעלה",
            companyHe: "אלטשולר שחם",
            month: 0.19,
            year1: 9.75,
            year3: 28.12,
            year5: 24.79,
            fee: 1.34
        },
        {
            nameHe: "הראל פנסיה - גילאי 50 ומטה",
            companyHe: "הראל",
            month: 0.73,
            year1: 19.65,
            year3: 46.8,
            year5: 61.87,
            fee: 1.51
        },
        {
            nameHe: "הראל פנסיה - גילאי 50 עד 60",
            companyHe: "הראל",
            month: 0.66,
            year1: 16.93,
            year3: 41.93,
            year5: 55.66,
            fee: 1.51
        },
        {
            nameHe: "הראל פנסיה - גילאי 60 ומעלה",
            companyHe: "הראל",
            month: 0.58,
            year1: 12.45,
            year3: 31.51,
            year5: 40.72,
            fee: 1.51
        },
        {
            nameHe: "הראל פנסיה כללית - גילאי 60 ומעלה",
            companyHe: "הראל",
            month: 0.6,
            year1: 12.37,
            year3: 31.29,
            year5: 29.38,
            fee: 1.13
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה מסלול לבני 60 ומעלה",
            companyHe: "אלטשולר שחם",
            month: 0.17,
            year1: 9.5,
            year3: 30.71,
            year5: 35.32,
            fee: 1.3
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה מסלול לבני 50-60",
            companyHe: "אלטשולר שחם",
            month: -21,
            year1: 14.96,
            year3: 45.28,
            year5: 47.76,
            fee: 1.3
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה מסלול לבני 50 ומטה",
            companyHe: "אלטשולר שחם",
            month: -24,
            year1: 16.92,
            year3: 49.9,
            year5: 52.27,
            fee: 1.3
        },
        {
            nameHe: "כלל פנסיה משלימה לבני 60 ומעלה",
            companyHe: "כלל",
            month: 0.61,
            year1: 12.56,
            year3: 33.29,
            year5: 32.51,
            fee: 0.98
        },
        {
            nameHe: "כלל פנסיה מניות",
            companyHe: "כלל",
            month: 1.52,
            year1: 24.7,
            year3: 63.5,
            year5: 73.4,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה אשראי ואג\"ח",
            companyHe: "כלל",
            month: 0.13,
            year1: 6.46,
            year3: 23.47,
            year5: 27.44,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה קצבה לזכאים קיימים",
            companyHe: "כלל",
            month: 0.08,
            year1: 6.54,
            year3: 23.68,
            year5: 41.05,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה מסלול הלכה למקבלי קצבה קיימים",
            companyHe: "כלל",
            month: -15,
            year1: 5.79,
            year3: 18.63,
            year5: 29.32,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה לבני 50 ומטה",
            companyHe: "כלל",
            month: 1.28,
            year1: 21.2,
            year3: 53.2,
            year5: 67.38,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה לבני 50-60",
            companyHe: "כלל",
            month: 1.09,
            year1: 18.28,
            year3: 47.47,
            year5: 59.72,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה לבני 60 ומעלה",
            companyHe: "כלל",
            month: 0.72,
            year1: 13.15,
            year3: 34.86,
            year5: 45.28,
            fee: 1.54
        },
        {
            nameHe: "הפניקס מסלול אג\"ח עד 25% מניות",
            companyHe: "הפניקס",
            month: 0.44,
            year1: 7.78,
            year3: 13.17,
            year5: 29.44,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה מקיפה - מסלול הלכה",
            companyHe: "הפניקס",
            month: 0.91,
            year1: 17.35,
            year3: 48.26,
            year5: 59.4,
            fee: 1.55
        },
        {
            nameHe: "מסלול קצבה לזכאים קיימים",
            companyHe: "הפניקס",
            month: -3,
            year1: 5.58,
            year3: 20.31,
            year5: 35.27,
            fee: 1.6
        },
        {
            nameHe: "הראל  פנסיה - בסיסי למקבלי קצבה",
            companyHe: "הראל",
            month: 0.41,
            year1: 10.31,
            year3: 29.82,
            year5: 46.14,
            fee: 1.51
        },
        {
            nameHe: "הראל פנסיה -  הלכה למקבלי קצבה",
            companyHe: "הראל",
            month: 0.4,
            year1: 11.26,
            year3: 32.1,
            year5: 49.81,
            fee: 1.51
        },
        {
            nameHe: "הפניקס פנסיה מקיפה מסלול פאסיבי לבני 50 ומטה",
            companyHe: "הפניקס",
            month: 1.16,
            year1: 12.94,
            year3: 20.68,
            year5: 41.82,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה מקיפה מסלול פאסיבי לבני 50 עד 60",
            companyHe: "הפניקס",
            month: 0.98,
            year1: 11.43,
            year3: 18.73,
            year5: 36.5,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה מקיפה מסלול פאסיבי לבני  60 ומעלה",
            companyHe: "הפניקס",
            month: 0.74,
            year1: 8.35,
            year3: 13.8,
            year5: 26.92,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה מקיפה -מסלול עוקב מדדי אג\"ח",
            companyHe: "הפניקס",
            month: 1.51,
            year1: -2.49,
            year3: 9.65,
            year5: 12.99,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה מקיפה - מסלול לבני 60 ומעלה",
            companyHe: "הפניקס",
            month: 0.49,
            year1: 11.94,
            year3: 35.84,
            year5: 44.59,
            fee: 1.55
        },
        {
            nameHe: "הראל פנסיה כללית - גילאי 50 עד 60",
            companyHe: "הראל",
            month: 0.73,
            year1: 17.16,
            year3: 41.95,
            year5: 43.4,
            fee: 1.13
        },
        {
            nameHe: "הראל פנסיה כללית - גילאי 50 ומטה",
            companyHe: "הראל",
            month: 0.74,
            year1: 21.38,
            year3: 48.92,
            year5: 53.07,
            fee: 1.13
        },
        {
            nameHe: "מיטב פנסיה מקיפה לבני 50 עד 60",
            companyHe: "מיטב",
            month: 0.67,
            year1: 17.24,
            year3: 49.01,
            year5: 65.23,
            fee: 1.31
        },
        {
            nameHe: "מיטב פנסיה מקיפה לבני 60 ומעלה",
            companyHe: "מיטב",
            month: 0.5,
            year1: 12.67,
            year3: 37.44,
            year5: 46.78,
            fee: 1.31
        },
        {
            nameHe: "מיטב פנסיה כללית לבני 50 עד 60",
            companyHe: "מיטב",
            month: 0.7,
            year1: 17.15,
            year3: 47.42,
            year5: 49.75,
            fee: 1.11
        },
        {
            nameHe: "מיטב פנסיה כללית לבני 60 ומעלה",
            companyHe: "מיטב",
            month: 0.53,
            year1: 12.49,
            year3: 35.17,
            year5: 35.9,
            fee: 1.11
        },
        {
            nameHe: "הפניקס פנסיה מקיפה  - מסלול לבני 50 ומטה",
            companyHe: "הפניקס",
            month: 0.59,
            year1: 19.49,
            year3: 55.45,
            year5: 72.75,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה מקיפה - מסלול לבני 50 עד 60",
            companyHe: "הפניקס",
            month: 0.68,
            year1: 17.41,
            year3: 49.91,
            year5: 63.28,
            fee: 1.55
        },
        {
            nameHe: "מנורה מבטחים פנסיה בסיסי למקבלי קצבה",
            companyHe: "מנורה מבטחים",
            month: 0.37,
            year1: 10.84,
            year3: 32.48,
            year5: 49.72,
            fee: 1.73
        },
        {
            nameHe: "מיטב פנסיה מקיפה בסיסי למקבלי קצבה",
            companyHe: "מיטב",
            month: 0.39,
            year1: 9.93,
            year3: 33.01,
            year5: 49.14,
            fee: 1.31
        },
        {
            nameHe: "מיטב פנסיה כללית בסיסי למקבלי קצבה",
            companyHe: "מיטב",
            month: 0.58,
            year1: 13.48,
            year3: 39.96,
            year5: 39.08,
            fee: 1.11
        },
        {
            nameHe: "כלל פנסיה מסלול הלכה למקבלי קצבה",
            companyHe: "כלל",
            month: 0.4,
            year1: 10.13,
            year3: 32.5,
            year5: 48.5,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה מסלול בסיסי למקבלי קצבה",
            companyHe: "כלל",
            month: 0.51,
            year1: 10.05,
            year3: 30.42,
            year5: 48.53,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה משלימה בסיסי למקבלי קצבה",
            companyHe: "כלל",
            month: 0.77,
            year1: 14.9,
            year3: 40.12,
            year5: 40.05,
            fee: 0.98
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה מניות",
            companyHe: "אלטשולר שחם",
            month: null,
            year1: 19.38,
            year3: 58.74,
            year5: 57.93,
            fee: 1.3
        },
        {
            nameHe: "מיטב פנסיה מקיפה הלכה למקבלי קצבה",
            companyHe: "מיטב",
            month: 0.51,
            year1: 11.83,
            year3: 35.03,
            year5: 51.61,
            fee: 1.31
        },
        {
            nameHe: "מנורה מבטחים משלימה - בסיסי למקבלי קצבה",
            companyHe: "מנורה מבטחים",
            month: 0.42,
            year1: 10.47,
            year3: 29.68,
            year5: 30.45,
            fee: 1.06
        },
        {
            nameHe: "מגדל מקפת משלימה בסיסי למקבלי קצבה",
            companyHe: "מגדל",
            month: 0.53,
            year1: 11.58,
            year3: 31.84,
            year5: 29.74,
            fee: 1.02
        },
        {
            nameHe: "מגדל מקפת אישית אג\"ח למקבלי קצבה",
            companyHe: "מגדל",
            month: 0.47,
            year1: 6.29,
            year3: 17.34,
            year5: 27.43,
            fee: 1.61
        },
        {
            nameHe: "הפניקס פנסיה מקיפה - מסלול בסיסי למקבלי קצבה",
            companyHe: "הפניקס",
            month: 0.97,
            year1: 10.19,
            year3: 33.09,
            year5: 49.24,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה משלימה - מסלול בסיסי למקבלי קצבה",
            companyHe: "הפניקס",
            month: 0.38,
            year1: 9.03,
            year3: 27.36,
            year5: 25.82,
            fee: 1.29
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה בסיסי למקבלי קצבה",
            companyHe: "אלטשולר שחם",
            month: 0.07,
            year1: 8.82,
            year3: 30.48,
            year5: 47.46,
            fee: 1.3
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית בסיסי למקבלי קצבה",
            companyHe: "אלטשולר שחם",
            month: 0.26,
            year1: 9.49,
            year3: 17.49,
            year5: 12.29,
            fee: 1.34
        },
        {
            nameHe: "הראל פנסיה כללית - בסיסי למקבלי קצבה",
            companyHe: "הראל",
            month: 0.59,
            year1: 13.56,
            year3: 39.22,
            year5: 39.55,
            fee: 1.13
        },
        {
            nameHe: "מגדל מקפת אישית בסיסי למקבלי קצבה",
            companyHe: "מגדל",
            month: 0.45,
            year1: 10.05,
            year3: 32.07,
            year5: 49.54,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת אישית הלכה למקבלי קצבה",
            companyHe: "מגדל",
            month: 0.51,
            year1: 11.1,
            year3: 34.25,
            year5: 50.71,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת אישית עוקב מדדים למקבלי קצבה",
            companyHe: "מגדל",
            month: 0.56,
            year1: 14.46,
            year3: 43.7,
            year5: 62.42,
            fee: 1.61
        },
        {
            nameHe: "מנורה מבטחים פנסיה יעד לפרישה 2065",
            companyHe: "מנורה מבטחים",
            month: 0.81,
            year1: 22.57,
            year3: 56.54,
            year5: 65.94,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים משלימה יעד לפרישה 2065",
            companyHe: "מנורה מבטחים",
            month: 0.71,
            year1: 21.75,
            year3: 54.35,
            year5: 54.27,
            fee: 1.06
        },
        {
            nameHe: "הפניקס פנסיה מקיפה עוקב מדד S&P500",
            companyHe: "הפניקס",
            month: 0.13,
            year1: 3.26,
            year3: 44.33,
            year5: 73.19,
            fee: 1.55
        },
        {
            nameHe: "כלל פנסיה עוקב מדד s&p 500",
            companyHe: "כלל",
            month: 0.23,
            year1: 3.46,
            year3: 44.56,
            year5: null,
            fee: 1.54
        },
        {
            nameHe: "מנורה מבטחים פנסיה אשראי ואג\"ח",
            companyHe: "מנורה מבטחים",
            month: 0.31,
            year1: 9.43,
            year3: 28.76,
            year5: 36.69,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה עוקב מדדי מניות",
            companyHe: "מנורה מבטחים",
            month: 0.98,
            year1: 9.28,
            year3: 39.93,
            year5: 56.02,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים משלימה אשראי ואג\"ח",
            companyHe: "מנורה מבטחים",
            month: 0.33,
            year1: 8.86,
            year3: 27.71,
            year5: 27.97,
            fee: 1.06
        },
        {
            nameHe: "מיטב פנסיה כללית הלכה למקבלי קצבה",
            companyHe: "מיטב",
            month: 0.51,
            year1: 17.02,
            year3: 25.41,
            year5: null,
            fee: 1.11
        },
        {
            nameHe: "מיטב פנסיה כללית עוקב מדד S&P500",
            companyHe: "מיטב",
            month: 0.01,
            year1: 4.13,
            year3: 54.03,
            year5: 78.08,
            fee: 1.11
        },
        {
            nameHe: "הראל פנסיה כללית כספי (שקלי)",
            companyHe: "הראל",
            month: 0.3,
            year1: 4.55,
            year3: 14.34,
            year5: 14.66,
            fee: 1.13
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית מניות",
            companyHe: "אלטשולר שחם",
            month: null,
            year1: 23.52,
            year3: 70.49,
            year5: 56.68,
            fee: 1.34
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית הלכה",
            companyHe: "אלטשולר שחם",
            month: -19,
            year1: 12.79,
            year3: 39.56,
            year5: 40.84,
            fee: 1.34
        },
        {
            nameHe: "כלל פנסיה כספי (שקלי)",
            companyHe: "כלל",
            month: 0.33,
            year1: 5.54,
            year3: 18.34,
            year5: 25.41,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה משלימה כספי(שקלי)",
            companyHe: "כלל",
            month: 0.39,
            year1: 5.04,
            year3: 15.72,
            year5: 16.71,
            fee: 0.98
        },
        {
            nameHe: "כלל פנסיה משלימה מסלול למקבלי קצבה   אג\"ח עד 20% מניות",
            companyHe: "כלל",
            month: 0.36,
            year1: 4.29,
            year3: 1.85,
            year5: null,
            fee: 1.59
        },
        {
            nameHe: "מיטב פנסיה מקיפה עוקב מדד S&P500",
            companyHe: "מיטב",
            month: 0.06,
            year1: 5.08,
            year3: 45.12,
            year5: 77.15,
            fee: 1.31
        },
        {
            nameHe: "הראל פנסיה כללית מניות",
            companyHe: "הראל",
            month: 1,
            year1: 31.93,
            year3: 80.3,
            year5: 84.92,
            fee: 1.13
        },
        {
            nameHe: "מנורה מבטחים משלימה עוקב מדד S&P500",
            companyHe: "מנורה מבטחים",
            month: 0.23,
            year1: 3.58,
            year3: 51.12,
            year5: null,
            fee: 1.06
        },
        {
            nameHe: "מנורה מבטחים פנסיה עוקב מדד S&P500",
            companyHe: "מנורה מבטחים",
            month: 0.22,
            year1: 4.57,
            year3: 43.98,
            year5: null,
            fee: 1.73
        },
        {
            nameHe: "מור פנסיה מקיפה - מסלול לבני 50 ומטה",
            companyHe: "מור",
            month: 1.62,
            year1: 20.07,
            year3: 59.89,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מור פנסיה מקיפה - מסלול לבני 50 עד 60",
            companyHe: "מור",
            month: 1.27,
            year1: 16.57,
            year3: 51.98,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מור פנסיה מקיפה - מסלול לבני 60 ומעלה",
            companyHe: "מור",
            month: 0.86,
            year1: 11.14,
            year3: 37.71,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מור פנסיה מקיפה - מניות",
            companyHe: "מור",
            month: 1.91,
            year1: 25.26,
            year3: 73.09,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מור פנסיה מקיפה - אשראי ואג\"ח",
            companyHe: "מור",
            month: 0.3,
            year1: 7.67,
            year3: 29.31,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מור פנסיה מקיפה - כספי (שקלי)",
            companyHe: "מור",
            month: 0.3,
            year1: 5,
            year3: 17.03,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מור פנסיה מקיפה - עוקב מדדי מניות",
            companyHe: "מור",
            month: 1.46,
            year1: 9.13,
            year3: 39.77,
            year5: null,
            fee: 1
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית עוקב מדדי מניות",
            companyHe: "אלטשולר שחם",
            month: -1.56,
            year1: 12.62,
            year3: 57.99,
            year5: null,
            fee: 1.34
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה עוקב מדדי מניות",
            companyHe: "אלטשולר שחם",
            month: null,
            year1: 11.2,
            year3: 46.39,
            year5: null,
            fee: 1.3
        },
        {
            nameHe: "מנורה מבטחים משלימה עוקב מדדי מניות",
            companyHe: "מנורה מבטחים",
            month: 1.28,
            year1: 10.01,
            year3: 45.33,
            year5: 56.95,
            fee: 1.06
        },
        {
            nameHe: "הראל פנסיה עוקב מדד s&p 500",
            companyHe: "הראל",
            month: 0.11,
            year1: 4.44,
            year3: 45.08,
            year5: 68.85,
            fee: 1.13
        },
        {
            nameHe: "הראל פנסיה כללית עוקב מדד s&p",
            companyHe: "הראל",
            month: 0.12,
            year1: 3.49,
            year3: 52.49,
            year5: 75.68,
            fee: 1.13
        },
        {
            nameHe: "הפניקס פנסיה משלימה עוקב מדד S&P500",
            companyHe: "הפניקס",
            month: 0.13,
            year1: 1.84,
            year3: 52.26,
            year5: null,
            fee: 1.55
        },
        {
            nameHe: "מגדל מקפת אישית עוקב מדד S&P500",
            companyHe: "מגדל",
            month: 0.08,
            year1: 3.66,
            year3: 44.74,
            year5: null,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת משלימה עוקב מדד S&P500",
            companyHe: "מגדל",
            month: 0.05,
            year1: 2.35,
            year3: 51.69,
            year5: null,
            fee: 1.02
        },
        {
            nameHe: "הראל פנסיה כללית הלכה",
            companyHe: "הראל",
            month: 1.16,
            year1: 17.16,
            year3: 38.79,
            year5: null,
            fee: 1.13
        },
        {
            nameHe: "הראל פנסיה כללית- הלכה למקבלי קצבה",
            companyHe: "הראל",
            month: 0.91,
            year1: 16.03,
            year3: 32.91,
            year5: null,
            fee: 1.13
        },
        {
            nameHe: "כלל פנסיה משלימה מניות",
            companyHe: "כלל",
            month: 1.92,
            year1: 32.57,
            year3: 81.79,
            year5: null,
            fee: 0.98
        },
        {
            nameHe: "אינפיניטי מקיפה  מסלול לבני 50 ומטה",
            companyHe: "אינפיניטי",
            month: 0.75,
            year1: 17.94,
            year3: 57.44,
            year5: null,
            fee: 1
        },
        {
            nameHe: "אינפיניטי מקיפה מסלול לבני 50 עד 60",
            companyHe: "אינפיניטי",
            month: 1,
            year1: 16.63,
            year3: 53.82,
            year5: null,
            fee: 1
        },
        {
            nameHe: "אינפיניטי מקיפה מסלול לבני 60 ומעלה",
            companyHe: "אינפיניטי",
            month: 1.04,
            year1: 12.69,
            year3: 40.64,
            year5: null,
            fee: 1
        },
        {
            nameHe: "אינפיניטי מקיפה עוקב מדדי מניות",
            companyHe: "אינפיניטי",
            month: null,
            year1: 17.65,
            year3: 50.69,
            year5: null,
            fee: 1
        },
        {
            nameHe: "אינפיניטי מקיפה הלכה",
            companyHe: "אינפיניטי",
            month: 1.45,
            year1: 8.67,
            year3: 37.99,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מסלול בסיסי למקבלי קצבה",
            companyHe: "אינפיניטי",
            month: 0.85,
            year1: 13.44,
            year3: 41.46,
            year5: null,
            fee: 1
        },
        {
            nameHe: "אינפיניטי כללית מסלול לבני 50 ומטה",
            companyHe: "אינפיניטי",
            month: 1.4,
            year1: 21.28,
            year3: 60.45,
            year5: null,
            fee: 1.01
        },
        {
            nameHe: "אינפיניטי כללית מסלול לבני 50 עד 60",
            companyHe: "אינפיניטי",
            month: 1.51,
            year1: 18.16,
            year3: 54.09,
            year5: null,
            fee: 1.01
        },
        {
            nameHe: "אינפיניטי כללית מסלול לבני 60 ומעלה",
            companyHe: "אינפיניטי",
            month: 1.35,
            year1: 14.1,
            year3: 40.11,
            year5: null,
            fee: 1.01
        },
        {
            nameHe: "מור פנסיה כללית - מסלול בסיסי למקבלי קצבה",
            companyHe: "מור",
            month: 0.55,
            year1: 11.9,
            year3: 31.59,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מור פנסיה כללית - כספי (שקלי)",
            companyHe: "מור",
            month: 0.33,
            year1: 4.58,
            year3: 14.22,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מור פנסיה מקיפה - מסלול בסיסי למקבלי קצבה",
            companyHe: "מור",
            month: 0.32,
            year1: 10.45,
            year3: 32.06,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מור פנסיה מקיפה - אג\"ח עד 25% מניות",
            companyHe: "מור",
            month: 0.75,
            year1: 9.09,
            year3: null,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מור פנסיה כללית - מסלול לבני 50 ומטה",
            companyHe: "מור",
            month: 1.25,
            year1: 18.33,
            year3: 58.08,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מור פנסיה כללית - מסלול לבני 50 עד 60",
            companyHe: "מור",
            month: 1.07,
            year1: 15.82,
            year3: 51.49,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מור פנסיה כללית - מסלול לבני 60 ומעלה",
            companyHe: "מור",
            month: 0.85,
            year1: 11.83,
            year3: 36.58,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מור פנסיה כללית - מניות",
            companyHe: "מור",
            month: 1.48,
            year1: 30.03,
            year3: 89.41,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מור פנסיה כללית - אשראי ואג\"ח",
            companyHe: "מור",
            month: 0.2,
            year1: 7.02,
            year3: 21.02,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מור פנסיה כללית - אג\"ח עד 25% מניות",
            companyHe: "מור",
            month: 0.5,
            year1: 6.71,
            year3: null,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מור פנסיה כללית - עוקב מדדי מניות",
            companyHe: "מור",
            month: 2.25,
            year1: 9.69,
            year3: 41.76,
            year5: null,
            fee: 1
        },
        {
            nameHe: "הראל  פנסיה- קיימות",
            companyHe: "הראל",
            month: 1.37,
            year1: 15.69,
            year3: 12.89,
            year5: null,
            fee: 1.51
        },
        {
            nameHe: "כלל פנסיה משלימה משולב סחיר",
            companyHe: "כלל",
            month: 1.63,
            year1: 34.17,
            year3: null,
            year5: null,
            fee: 0.98
        },
        {
            nameHe: "כלל פנסיה משולב סחיר",
            companyHe: "כלל",
            month: 1.67,
            year1: 34.24,
            year3: 81.68,
            year5: null,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה עוקב מדדים גמיש",
            companyHe: "כלל",
            month: 1.56,
            year1: 3.26,
            year3: 27.94,
            year5: null,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה משלימה עוקב מדדים גמיש",
            companyHe: "כלל",
            month: 2.14,
            year1: -0.23,
            year3: 19.95,
            year5: null,
            fee: 0.98
        },
        {
            nameHe: "מגדל מקפת אישית משולב סחיר",
            companyHe: "מגדל",
            month: 0.99,
            year1: 18.02,
            year3: 48.04,
            year5: null,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת אישית עוקב מדדים - גמיש",
            companyHe: "מגדל",
            month: 1.2,
            year1: 4.22,
            year3: 24.26,
            year5: null,
            fee: 1.61
        },
        {
            nameHe: "מגדל מקפת משלימה משולב סחיר",
            companyHe: "מגדל",
            month: 0.94,
            year1: 18.15,
            year3: 47.05,
            year5: null,
            fee: 1.02
        },
        {
            nameHe: "הראל  פנסיה- משולב סחיר",
            companyHe: "הראל",
            month: 1.38,
            year1: 7.77,
            year3: 23.05,
            year5: null,
            fee: 1.51
        },
        {
            nameHe: "הראל  פנסיה- עוקב מדדים גמיש",
            companyHe: "הראל",
            month: 0.88,
            year1: 18.02,
            year3: 49.27,
            year5: null,
            fee: 1.51
        },
        {
            nameHe: "אינפיניטי כללית עוקב מדדי מניות",
            companyHe: "אינפיניטי",
            month: -2.4,
            year1: 25.07,
            year3: 69.04,
            year5: null,
            fee: 1.01
        },
        {
            nameHe: "אינפיניטי כללית הלכה",
            companyHe: "אינפיניטי",
            month: 2.03,
            year1: 9.28,
            year3: null,
            year5: null,
            fee: 1.01
        },
        {
            nameHe: "אינפיניטי מקיפה עוקב מדד S&P 500",
            companyHe: "אינפיניטי",
            month: 0.41,
            year1: 5.49,
            year3: 44.46,
            year5: null,
            fee: 1
        },
        {
            nameHe: "אינפיניטי כללית עוקב מדד S&P 500",
            companyHe: "אינפיניטי",
            month: 0.46,
            year1: 4.12,
            year3: 52.83,
            year5: null,
            fee: 1.01
        },
        {
            nameHe: "הפניקס פנסיה משלימה- שריעה",
            companyHe: "הפניקס",
            month: 0.11,
            year1: 5.53,
            year3: 45.31,
            year5: null,
            fee: 1.55
        },
        {
            nameHe: "הראל פנסיה כללית עוקב מדדים גמיש",
            companyHe: "הראל",
            month: 0.84,
            year1: 17.19,
            year3: 48.39,
            year5: null,
            fee: 1.13
        },
        {
            nameHe: "הראל פנסיה כללית משולב סחיר",
            companyHe: "הראל",
            month: 2.69,
            year1: 5.31,
            year3: 19.06,
            year5: null,
            fee: 1.13
        },
        {
            nameHe: "הראל פנסיה כללית קיימות",
            companyHe: "הראל",
            month: 1.89,
            year1: 19.48,
            year3: 8.77,
            year5: null,
            fee: 1.13
        },
        {
            nameHe: "הפניקס פנסיה משלימה עוקב מדדים גמיש",
            companyHe: "הפניקס",
            month: 1.74,
            year1: -0.36,
            year3: 15.16,
            year5: null,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה משלימה משולב סחיר",
            companyHe: "הפניקס",
            month: 0.52,
            year1: 15.44,
            year3: 45.02,
            year5: null,
            fee: 1.55
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה משולב סחיר",
            companyHe: "אלטשולר שחם",
            month: -25,
            year1: 15,
            year3: 44.69,
            year5: null,
            fee: 1.3
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה עוקב מדדים גמיש",
            companyHe: "אלטשולר שחם",
            month: 0.8,
            year1: 8.35,
            year3: 33.81,
            year5: null,
            fee: 1.3
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית משולב סחיר",
            companyHe: "אלטשולר שחם",
            month: -14,
            year1: 13.99,
            year3: 40.05,
            year5: null,
            fee: 1.34
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית עוקב מדדים גמיש",
            companyHe: "אלטשולר שחם",
            month: 1.47,
            year1: 4.38,
            year3: 23.94,
            year5: null,
            fee: 1.34
        },
        {
            nameHe: "מנורה מבטחים משלימה משולב סחיר",
            companyHe: "מנורה מבטחים",
            month: 1.29,
            year1: 6.95,
            year3: null,
            year5: null,
            fee: 1.06
        },
        {
            nameHe: "מנורה מבטחים משלימה עוקב מדדים גמיש",
            companyHe: "מנורה מבטחים",
            month: 0.42,
            year1: 12.82,
            year3: 40.65,
            year5: null,
            fee: 1.78
        },
        {
            nameHe: "אינפיניטי פנסיה מקיפה עוקב מדדים גמיש",
            companyHe: "אינפיניטי",
            month: 0.89,
            year1: 16.7,
            year3: null,
            year5: null,
            fee: 1
        },
        {
            nameHe: "הפניקס פנסיה מקיפה עוקב מדדים גמיש",
            companyHe: "הפניקס",
            month: 1.08,
            year1: 4.86,
            year3: 25.95,
            year5: null,
            fee: 1.55
        },
        {
            nameHe: "הפניקס פנסיה מקיפה  משולב סחיר",
            companyHe: "הפניקס",
            month: 0.55,
            year1: 15.57,
            year3: 46.32,
            year5: null,
            fee: 1.55
        },
        {
            nameHe: "מגדל מקפת משלימה עוקב מדדים - גמיש",
            companyHe: "מגדל",
            month: 1.55,
            year1: 0.43,
            year3: 14.58,
            year5: null,
            fee: 1.02
        },
        {
            nameHe: "מיטב פנסיה מקיפה משולב סחיר",
            companyHe: "מיטב",
            month: 1.25,
            year1: 41.56,
            year3: 105.12,
            year5: null,
            fee: 1.31
        },
        {
            nameHe: "מיטב פנסיה מקיפה עוקב מדדים גמיש",
            companyHe: "מיטב",
            month: 0.19,
            year1: 8.4,
            year3: 46.33,
            year5: null,
            fee: 1.31
        },
        {
            nameHe: "מיטב פנסיה מקיפה קיימות",
            companyHe: "מיטב",
            month: -4,
            year1: 15.73,
            year3: 30.62,
            year5: null,
            fee: 1.31
        },
        {
            nameHe: "מיטב פנסיה כללית משולב סחיר",
            companyHe: "מיטב",
            month: 1.78,
            year1: 59.05,
            year3: 141.35,
            year5: null,
            fee: 1.11
        },
        {
            nameHe: "מיטב פנסיה כללית עוקב מדדים גמיש",
            companyHe: "מיטב",
            month: 0.54,
            year1: 6.43,
            year3: 53.56,
            year5: null,
            fee: 1.11
        },
        {
            nameHe: "מיטב פנסיה כללית קיימות",
            companyHe: "מיטב",
            month: null,
            year1: 19.59,
            year3: 37.32,
            year5: null,
            fee: 1.11
        },
        {
            nameHe: "מנורה מבטחים פנסיה משולב סחיר",
            companyHe: "מנורה מבטחים",
            month: 1.26,
            year1: 7.76,
            year3: 34.6,
            year5: null,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים פנסיה עוקב מדדים גמיש",
            companyHe: "מנורה מבטחים",
            month: 0.46,
            year1: 13.33,
            year3: 42.36,
            year5: null,
            fee: 1.73
        },
        {
            nameHe: "מנורה מבטחים משלימה קיימות",
            companyHe: "מנורה מבטחים",
            month: 1.27,
            year1: 11.43,
            year3: null,
            year5: null,
            fee: 1.06
        },
        {
            nameHe: "מנורה מבטחים פנסיה קיימות",
            companyHe: "מנורה מבטחים",
            month: 1.85,
            year1: 10.99,
            year3: null,
            year5: null,
            fee: 1.73
        },
        {
            nameHe: "מור פנסיה מקיפה - עוקב מדדים גמיש",
            companyHe: "מור",
            month: 1.37,
            year1: 3.71,
            year3: 16.75,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מור פנסיה מקיפה - משולב סחיר",
            companyHe: "מור",
            month: 1.22,
            year1: 17.28,
            year3: 50.14,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מור פנסיה כללית - עוקב מדדים גמיש",
            companyHe: "מור",
            month: 1.62,
            year1: 0.19,
            year3: null,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מור פנסיה כללית - משולב סחיר",
            companyHe: "מור",
            month: 1.1,
            year1: 17.03,
            year3: null,
            year5: null,
            fee: 1
        },
        {
            nameHe: "מנורה מבטחים משלימה מניות",
            companyHe: "מנורה מבטחים",
            month: 1.09,
            year1: 33.2,
            year3: null,
            year5: null,
            fee: 1.06
        },
        {
            nameHe: "כלל פנסיה משלימה למקבלי קצבה קיימים",
            companyHe: "כלל",
            month: 5.18,
            year1: -3.79,
            year3: -4.83,
            year5: 7.23,
            fee: 0.98
        },
        {
            nameHe: "כלל פנסיה משלימה שקלי טווח קצר",
            companyHe: "כלל",
            month: 0.5,
            year1: 4.25,
            year3: 4.68,
            year5: null,
            fee: 0.98
        },
        {
            nameHe: "אלטשולר שחם פנסיה מקיפה עוקב מדד S&P500",
            companyHe: "אלטשולר שחם",
            month: 0.43,
            year1: 4.17,
            year3: null,
            year5: null,
            fee: 1.3
        },
        {
            nameHe: "אלטשולר שחם פנסיה כללית עוקב מדד S&P 500",
            companyHe: "אלטשולר שחם",
            month: 0.57,
            year1: 3.16,
            year3: null,
            year5: null,
            fee: 1.34
        },
        {
            nameHe: "אינפיניטי פנסיה מקיפה משולב סחיר",
            companyHe: "אינפיניטי",
            month: 1.16,
            year1: 36.56,
            year3: null,
            year5: null,
            fee: 1
        },
        {
            nameHe: "כלל פנסיה משלימה עוקב מדד  s&p500",
            companyHe: "כלל",
            month: 0.27,
            year1: 2.06,
            year3: null,
            year5: null,
            fee: 1.54
        },
        {
            nameHe: "הראל פנסיה כללית עוקב מדדי מניות",
            companyHe: "הראל",
            month: -2.02,
            year1: 8.7,
            year3: null,
            year5: null,
            fee: 1.13
        },
        {
            nameHe: "הראל  פנסיה עוקב מדדי מניות",
            companyHe: "הראל",
            month: -1.41,
            year1: 8.33,
            year3: null,
            year5: null,
            fee: 1.51
        },
        {
            nameHe: "מגדל מקפת משלימה עוקב מדדי מניות",
            companyHe: "מגדל",
            month: -2.09,
            year1: 3.45,
            year3: null,
            year5: null,
            fee: 1.02
        },
        {
            nameHe: "מגדל מקפת אישית עוקב מדדי מניות",
            companyHe: "מגדל",
            month: -1.48,
            year1: 4.49,
            year3: null,
            year5: null,
            fee: 1.61
        },
        {
            nameHe: "כלל פנסיה כללי",
            companyHe: "כלל",
            month: 2.15,
            year1: 9.46,
            year3: 20.26,
            year5: 42.46,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה הלכה",
            companyHe: "כלל",
            month: 1.86,
            year1: 11.22,
            year3: 17.1,
            year5: 30.7,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה למקבלי קצבה קיימים",
            companyHe: "כלל",
            month: 0.51,
            year1: 4.53,
            year3: 14.99,
            year5: 26.99,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה קצבה לזכאים קיימים",
            companyHe: "כלל",
            month: 0.44,
            year1: 6.8,
            year3: 21.79,
            year5: 34.96,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה אשראי ואג\"ח",
            companyHe: "כלל",
            month: 0.34,
            year1: 7.28,
            year3: 10.74,
            year5: 19.39,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה כספי (שקלי)",
            companyHe: "כלל",
            month: 0.36,
            year1: 5.83,
            year3: 12.15,
            year5: null,
            fee: 1.54
        },
        {
            nameHe: "כלל פנסיה משלימה עוקב מדדי מניות",
            companyHe: "כלל",
            month: null,
            year1: 1.29,
            year3: null,
            year5: null,
            fee: 0.98
        },
        {
            nameHe: "כלל פנסיה עוקב מדדי מניות",
            companyHe: "כלל",
            month: null,
            year1: 2.99,
            year3: null,
            year5: null,
            fee: 1.54
        }
    ],

    // Gemel Funds - קופות גמל להשקעה (Real data from igemel-net.co.il)
    gemel: [
        {
            nameHe: "4.56%",
            companyHe: "4.56%",
            month: null,
            year1: null,
            year3: 114.83,
            year5: 0.55,
            fee: null
        },
        {
            nameHe: "5.49%",
            companyHe: "5.49%",
            month: null,
            year1: 73.54,
            year3: 80.21,
            year5: 0.64,
            fee: null
        },
        {
            nameHe: "4.87%",
            companyHe: "4.87%",
            month: 29.45,
            year1: 79.14,
            year3: 92.75,
            year5: 0.59,
            fee: null
        },
        {
            nameHe: "4.34%",
            companyHe: "4.34%",
            month: 28.73,
            year1: 80.15,
            year3: 90.69,
            year5: 0.59,
            fee: null
        },
        {
            nameHe: "4.61%",
            companyHe: "4.61%",
            month: 28.25,
            year1: 77.36,
            year3: 87.99,
            year5: 0.73,
            fee: null
        },
        {
            nameHe: "4.65%",
            companyHe: "4.65%",
            month: 28.11,
            year1: 77.75,
            year3: 86.97,
            year5: 0.59,
            fee: null
        },
        {
            nameHe: "3.87%",
            companyHe: "3.87%",
            month: 24.31,
            year1: 90.95,
            year3: 107.88,
            year5: 0.6,
            fee: null
        },
        {
            nameHe: "2.8%",
            companyHe: "2.8%",
            month: 22.47,
            year1: 76.79,
            year3: 96.1,
            year5: 0.67,
            fee: null
        },
        {
            nameHe: "2.99%",
            companyHe: "2.99%",
            month: 21.28,
            year1: 68.63,
            year3: 60.61,
            year5: 0.59,
            fee: null
        },
        {
            nameHe: "3.32%",
            companyHe: "3.32%",
            month: 20.94,
            year1: 80.54,
            year3: 92.56,
            year5: 0.61,
            fee: null
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
