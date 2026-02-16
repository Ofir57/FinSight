#!/usr/bin/env node
/**
 * Market Data Auto-Updater
 *
 * Scrapes fund data from:
 * 1. TheMarker SuperMarker → data/market-funds.js
 * 2. iGemel-Net → data/mygemel-funds.js
 *
 * Run: node scripts/update-market-data.js
 */

const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// ─── Config ───────────────────────────────────────────────────────────────────

const HEBREW_MONTHS = {
    'ינואר': '01', 'פברואר': '02', 'מרץ': '03', 'אפריל': '04',
    'מאי': '05', 'יוני': '06', 'יולי': '07', 'אוגוסט': '08',
    'ספטמבר': '09', 'אוקטובר': '10', 'נובמבר': '11', 'דצמבר': '12'
};

const ROOT = path.resolve(__dirname, '..');
const MARKET_FUNDS_PATH = path.join(ROOT, 'data', 'market-funds.js');
const MYGEMEL_FUNDS_PATH = path.join(ROOT, 'data', 'mygemel-funds.js');

const THEMARKER_URLS = {
    training: 'https://www.supermarker.themarker.com/Gemel/CompareHishtalmutFunds.aspx',
    pension: 'https://www.supermarker.themarker.com/pension/ComparePensionFunds.aspx',
    gemel: 'https://www.supermarker.themarker.com/Gemel/CompareKupotGemel.aspx'
};

const IGEMEL_URLS = {
    training: 'https://www.igemel-net.co.il/%D7%A7%D7%A8%D7%A0%D7%95%D7%AA-%D7%94%D7%A9%D7%AA%D7%9C%D7%9E%D7%95%D7%AA/',
    pension: 'https://www.igemel-net.co.il/%D7%A7%D7%A8%D7%A0%D7%95%D7%AA-%D7%A4%D7%A0%D7%A1%D7%99%D7%94/',
    gemel: 'https://www.igemel-net.co.il/%D7%92%D7%9E%D7%9C-%D7%9C%D7%94%D7%A9%D7%A7%D7%A2%D7%94/'
};

// Summary output for PR body
const summary = [];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function parseHebrewDate(text) {
    // Build a single regex that matches any Hebrew month followed by a year
    const monthNames = Object.keys(HEBREW_MONTHS).join('|');
    const regex = new RegExp(`(${monthNames})\\s+(\\d{4})`, 'g');
    let match;
    const candidates = [];
    while ((match = regex.exec(text)) !== null) {
        const month = HEBREW_MONTHS[match[1]];
        const year = match[2];
        candidates.push({ period: `${year}-${month}`, year: parseInt(year) });
    }
    if (candidates.length === 0) return null;
    // Return the most recent period found (highest year-month)
    candidates.sort((a, b) => b.period.localeCompare(a.period));
    return candidates[0].period;
}

function parsePercent(text) {
    if (!text || text.trim() === '' || text.trim() === '-') return null;
    const cleaned = text.replace(/%/g, '').replace(/,/g, '').trim();
    const num = parseFloat(cleaned);
    return isNaN(num) ? null : num;
}

function parseNumber(text) {
    if (!text || text.trim() === '' || text.trim() === '-') return null;
    const cleaned = text.replace(/,/g, '').trim();
    const num = parseFloat(cleaned);
    return isNaN(num) ? null : num;
}

function getCurrentPeriod(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const match = content.match(/lastUpdate:\s*'(\d{4}-\d{2})'/);
    return match ? match[1] : null;
}

function periodIsNewer(newPeriod, currentPeriod) {
    if (!currentPeriod) return true;
    return newPeriod > currentPeriod;
}

function periodIsNotFuture(period) {
    const now = new Date();
    const [y, m] = period.split('-').map(Number);
    const periodDate = new Date(y, m - 1); // first of that month
    return periodDate <= now;
}

// ─── Validation ───────────────────────────────────────────────────────────────

function validateFunds(funds, typeName, currentPeriod, newPeriod) {
    const errors = [];

    if (funds.length < 5) {
        errors.push(`${typeName}: only ${funds.length} entries (need ≥5)`);
    }

    for (let i = 0; i < funds.length; i++) {
        const f = funds[i];
        if (!f.nameHe || f.nameHe.trim() === '') {
            errors.push(`${typeName}[${i}]: empty nameHe`);
        }
        if (!f.companyHe || f.companyHe.trim() === '') {
            errors.push(`${typeName}[${i}]: empty companyHe`);
        }

        // Validate numeric ranges
        const checks = [
            ['month', -30, 30],
            ['year1', -60, 100],
            ['year3', -80, 200],
            ['year5', -80, 300]
        ];
        for (const [field, min, max] of checks) {
            const val = f[field];
            if (val !== null && val !== undefined) {
                if (typeof val !== 'number' || isNaN(val)) {
                    errors.push(`${typeName}[${i}].${field}: not a number (${val})`);
                } else if (val < min || val > max) {
                    errors.push(`${typeName}[${i}].${field}: ${val} out of range [${min},${max}]`);
                }
            }
        }

        if (f.fee !== null && f.fee !== undefined) {
            if (typeof f.fee !== 'number' || isNaN(f.fee)) {
                errors.push(`${typeName}[${i}].fee: not a number`);
            }
        }
    }

    if (!periodIsNotFuture(newPeriod)) {
        errors.push(`${typeName}: period ${newPeriod} is in the future`);
    }

    if (currentPeriod && newPeriod < currentPeriod) {
        errors.push(`${typeName}: new period ${newPeriod} < current ${currentPeriod}`);
    }

    return errors;
}

// ─── TheMarker SuperMarker Scraper ────────────────────────────────────────────

async function fetchTheMarkerPage(url) {
    const resp = await axios.get(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; FinSight-Updater/1.0)',
            'Accept-Language': 'he-IL,he;q=0.9'
        },
        timeout: 30000
    });
    return cheerio.load(resp.data);
}

function extractTheMarkerDate($) {
    // Look for the specific date indicator: "נתוני ... מעודכנים נכון לחודש <month> <year>"
    const bodyText = $.text();
    const datePattern = /נכון\s+לחודש\s+([\u0590-\u05FF]+)\s+(\d{4})/;
    const match = bodyText.match(datePattern);
    if (match) {
        const month = HEBREW_MONTHS[match[1]];
        if (month) return `${match[2]}-${month}`;
    }
    // Fallback to generic parsing
    return parseHebrewDate(bodyText);
}

/**
 * Parse the combined company+name cell in TheMarker tables.
 * td[1] contains both the company name (plain text) and fund name (inside <a>).
 * Example: "אינפיניטי ניהול השתלמות וגמל בע"מ" + <a>אינפיניטי השתלמות משולב סחיר</a>
 */
function parseTheMarkerNameCell($, td) {
    const link = $(td).find('a');
    const nameHe = link.length ? link.text().trim() : '';

    // Get the full cell text and remove the fund name to isolate the company
    const fullText = $(td).text().trim();
    let companyHe = fullText.replace(nameHe, '').trim();
    // Clean up company suffixes
    companyHe = companyHe
        .replace(/\s*ניהול\s+.*$/g, '')
        .replace(/\s*בע[\u0022\u05F4"״]מ.*$/g, '')
        .replace(/\s*חברה.*$/g, '')
        .replace(/\s*ביטוח.*$/g, '')
        .replace(/\s*פנסיה.*$/g, '')
        .trim();
    if (!companyHe) companyHe = guessCompany(nameHe);

    return { nameHe, companyHe };
}

function scrapeTheMarkerTraining($) {
    const funds = [];
    // Structure: td[0]=checkbox, td[1]=company+name, td[2]=month, td[3]=year1,
    //            td[4]=year3, td[5]=year5, td[6]=sharpe, td[7]=fee, td[8]=assets
    $('#gvKupot tr').each((i, row) => {
        const tds = $(row).find('td');
        if (tds.length < 8) return;

        const { nameHe, companyHe } = parseTheMarkerNameCell($, tds[1]);
        const month = parsePercent($(tds[2]).text());
        const year1 = parsePercent($(tds[3]).text());
        const year3 = parsePercent($(tds[4]).text());
        const year5 = parsePercent($(tds[5]).text());
        // tds[6] = sharpe (skip)
        const fee = parsePercent($(tds[7]).text());
        const assets = parseNumber($(tds[8])?.text());

        if (nameHe) {
            funds.push({ nameHe, companyHe, month, year1, year3, year5, fee, assets });
        }
    });
    return funds;
}

function scrapeTheMarkerPension($) {
    const funds = [];
    // Pension table ID is gvKranotPensia
    // Structure: td[0]=checkbox, td[1]=company+name, td[2]=month, td[3]=year1,
    //            td[4]=year3, td[5]=year5, td[6]=sharpe, td[7]=fee(deposits), td[8]=fee(assets)
    $('#gvKranotPensia tr').each((i, row) => {
        const tds = $(row).find('td');
        if (tds.length < 8) return;

        const { nameHe, companyHe } = parseTheMarkerNameCell($, tds[1]);
        const month = parsePercent($(tds[2]).text());
        const year1 = parsePercent($(tds[3]).text());
        const year3 = parsePercent($(tds[4]).text());
        const year5 = parsePercent($(tds[5]).text());
        // tds[6] = sharpe (skip)
        const feeDeposits = parsePercent($(tds[7]).text());
        const feeAssets = parsePercent($(tds[8]).text());
        const fee = feeAssets ?? feeDeposits;

        if (nameHe) {
            funds.push({ nameHe, companyHe, month, year1, year3, year5, fee });
        }
    });
    return funds;
}

function scrapeTheMarkerGemel($) {
    const funds = [];
    // Same structure as training: td[0]=checkbox, td[1]=company+name, td[2]=month, ...
    $('#gvKupot tr').each((i, row) => {
        const tds = $(row).find('td');
        if (tds.length < 8) return;

        const { nameHe, companyHe } = parseTheMarkerNameCell($, tds[1]);
        const month = parsePercent($(tds[2]).text());
        const year1 = parsePercent($(tds[3]).text());
        const year3 = parsePercent($(tds[4]).text());
        const year5 = parsePercent($(tds[5]).text());
        // tds[6] = sharpe (skip)
        const fee = parsePercent($(tds[7]).text());
        const assets = parseNumber($(tds[8])?.text());

        if (nameHe) {
            funds.push({ nameHe, companyHe, month, year1, year3, year5, fee, assets });
        }
    });
    return funds;
}

async function updateTheMarker() {
    console.log('\n📊 TheMarker SuperMarker');
    console.log('─'.repeat(40));

    const currentPeriod = getCurrentPeriod(MARKET_FUNDS_PATH);
    console.log(`Current period: ${currentPeriod}`);

    // Fetch training page to check date
    const $training = await fetchTheMarkerPage(THEMARKER_URLS.training);
    const newPeriod = extractTheMarkerDate($training);

    if (!newPeriod) {
        console.log('⚠️  Could not extract date from TheMarker page');
        summary.push('TheMarker: could not extract date — skipped');
        return false;
    }

    console.log(`Source period: ${newPeriod}`);

    if (!periodIsNewer(newPeriod, currentPeriod)) {
        console.log('✅ No update needed — data is current');
        summary.push(`TheMarker: no update (${currentPeriod} is current)`);
        return false;
    }

    console.log(`🔄 New data available: ${currentPeriod} → ${newPeriod}`);

    // Scrape all 3 types
    console.log('Scraping training funds...');
    const training = scrapeTheMarkerTraining($training);
    console.log(`  → ${training.length} funds`);

    console.log('Scraping pension funds...');
    const $pension = await fetchTheMarkerPage(THEMARKER_URLS.pension);
    const pension = scrapeTheMarkerPension($pension);
    console.log(`  → ${pension.length} funds`);

    console.log('Scraping gemel funds...');
    const $gemel = await fetchTheMarkerPage(THEMARKER_URLS.gemel);
    const gemel = scrapeTheMarkerGemel($gemel);
    console.log(`  → ${gemel.length} funds`);

    // Validate
    const errors = [
        ...validateFunds(training, 'training', currentPeriod, newPeriod),
        ...validateFunds(pension, 'pension', currentPeriod, newPeriod),
        ...validateFunds(gemel, 'gemel', currentPeriod, newPeriod)
    ];

    if (errors.length > 0) {
        console.log('❌ Validation failed:');
        errors.forEach(e => console.log(`   ${e}`));
        summary.push(`TheMarker: validation failed (${errors.length} errors)`);
        return false;
    }

    // Write file
    writeMarketFundsFile(newPeriod, training, pension, gemel);
    console.log(`✅ Written to ${MARKET_FUNDS_PATH}`);
    summary.push(`TheMarker: updated ${currentPeriod} → ${newPeriod} (${training.length}+${pension.length}+${gemel.length} funds)`);
    return true;
}

// ─── iGemel-Net Scraper (Puppeteer) ───────────────────────────────────────────

async function fetchIGemelPage(browser, url) {
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (compatible; FinSight-Updater/1.0)');
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    // Wait for table data to render
    await page.waitForSelector('table tbody tr, .fund-row, .table-row', { timeout: 30000 }).catch(() => {});
    // Extra wait for JS rendering
    await new Promise(r => setTimeout(r, 3000));
    const html = await page.content();
    await page.close();
    return cheerio.load(html);
}

function extractIGemelDate($) {
    const bodyText = $.text();
    // Pattern: 'תקופת הדו"ח: דצמבר 2025' or 'תקופת הדו״ח: דצמבר 2025'
    const datePattern = /תקופת\s+הדו[\u0022\u05F4"״]ח[:\s]+([\u0590-\u05FF]+)\s+(\d{4})/;
    const match = bodyText.match(datePattern);
    if (match) {
        const month = HEBREW_MONTHS[match[1]];
        if (month) return `${match[2]}-${month}`;
    }
    // Fallback to generic parsing
    return parseHebrewDate(bodyText);
}

function scrapeIGemelFunds($) {
    const funds = [];

    // Try multiple table selectors since the site may use different structures
    const tableSelectors = [
        'table.tablepress tbody tr',
        'table.funds-table tbody tr',
        'table tbody tr',
        '.fund-table tr',
        '#tablepress-1 tbody tr',
        '#tablepress-2 tbody tr',
        '#tablepress-3 tbody tr'
    ];

    let rows = $([]);
    for (const sel of tableSelectors) {
        const found = $(sel);
        if (found.length > 3) {
            rows = found;
            break;
        }
    }

    rows.each((i, row) => {
        const tds = $(row).find('td');
        if (tds.length < 5) return;

        // iGemel structure: fund name, month%, year%, 3y%, 5y%, fee%, ...
        // The managing company is sometimes in the last columns or embedded in the name
        let nameHe, companyHe, month, year1, year3, year5, fee;

        if (tds.length >= 11) {
            // Full table: name, month, year, 3y, 5y, fee, assets, sharpe, liquidity, specialization, company
            nameHe = $(tds[0]).text().trim();
            month = parsePercent($(tds[1]).text());
            year1 = parsePercent($(tds[2]).text());
            year3 = parsePercent($(tds[3]).text());
            year5 = parsePercent($(tds[4]).text());
            fee = parsePercent($(tds[5]).text());
            companyHe = $(tds[tds.length - 1]).text().trim();
        } else if (tds.length >= 6) {
            // Compact: name, month, year, 3y, 5y, fee
            nameHe = $(tds[0]).text().trim();
            month = parsePercent($(tds[1]).text());
            year1 = parsePercent($(tds[2]).text());
            year3 = parsePercent($(tds[3]).text());
            year5 = parsePercent($(tds[4]).text());
            fee = parsePercent($(tds[5]).text());
            companyHe = '';
        } else {
            return;
        }

        // Try to extract company from name if not available
        if (!companyHe) {
            companyHe = guessCompany(nameHe);
        }

        if (nameHe && nameHe.length > 1) {
            funds.push({ nameHe, companyHe, month, year1, year3, year5, fee });
        }
    });

    return funds;
}

function guessCompany(nameHe) {
    const companies = [
        'אינפיניטי', 'משפטנים', 'רעות', 'רום ספיר', 'רום',
        'ילין לפידות', 'אנליסט', 'אומגה', 'מגדל', 'מיטב',
        'מנורה מבטחים', 'מנורה', 'הראל', 'הפניקס', 'אקדמאים',
        'קרן החיסכון', 'יחד רופאים', 'מינהל', 'הנדסאים', 'כלל',
        'אלטשולר שחם', 'מור', 'הלמן אלדובי'
    ];
    for (const c of companies) {
        if (nameHe.includes(c)) return c;
    }
    return nameHe.split(' ')[0];
}

async function updateIGemel() {
    console.log('\n📊 iGemel-Net');
    console.log('─'.repeat(40));

    const currentPeriod = getCurrentPeriod(MYGEMEL_FUNDS_PATH);
    console.log(`Current period: ${currentPeriod}`);

    let browser;
    try {
        browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        // Fetch training page to check date
        const $training = await fetchIGemelPage(browser, IGEMEL_URLS.training);
        const newPeriod = extractIGemelDate($training);

        if (!newPeriod) {
            console.log('⚠️  Could not extract date from iGemel-Net page');
            summary.push('iGemel-Net: could not extract date — skipped');
            return false;
        }

        console.log(`Source period: ${newPeriod}`);

        if (!periodIsNewer(newPeriod, currentPeriod)) {
            console.log('✅ No update needed — data is current');
            summary.push(`iGemel-Net: no update (${currentPeriod} is current)`);
            return false;
        }

        console.log(`🔄 New data available: ${currentPeriod} → ${newPeriod}`);

        // Scrape all 3 types
        console.log('Scraping training funds...');
        const training = scrapeIGemelFunds($training);
        console.log(`  → ${training.length} funds`);

        console.log('Scraping pension funds...');
        const $pension = await fetchIGemelPage(browser, IGEMEL_URLS.pension);
        const pension = scrapeIGemelFunds($pension);
        console.log(`  → ${pension.length} funds`);

        console.log('Scraping gemel funds...');
        const $gemel = await fetchIGemelPage(browser, IGEMEL_URLS.gemel);
        const gemel = scrapeIGemelFunds($gemel);
        console.log(`  → ${gemel.length} funds`);

        // Validate
        const errors = [
            ...validateFunds(training, 'training', currentPeriod, newPeriod),
            ...validateFunds(pension, 'pension', currentPeriod, newPeriod),
            ...validateFunds(gemel, 'gemel', currentPeriod, newPeriod)
        ];

        if (errors.length > 0) {
            console.log('❌ Validation failed:');
            errors.forEach(e => console.log(`   ${e}`));
            summary.push(`iGemel-Net: validation failed (${errors.length} errors)`);
            return false;
        }

        // Write file
        writeMyGemelFundsFile(newPeriod, training, pension, gemel);
        console.log(`✅ Written to ${MYGEMEL_FUNDS_PATH}`);
        summary.push(`iGemel-Net: updated ${currentPeriod} → ${newPeriod} (${training.length}+${pension.length}+${gemel.length} funds)`);
        return true;

    } finally {
        if (browser) await browser.close();
    }
}

// ─── File Writers ─────────────────────────────────────────────────────────────

function fundToJS(fund, indent = '        ') {
    const lines = [];
    lines.push(`${indent}{`);

    const fields = ['nameHe', 'companyHe', 'month', 'year1', 'year3', 'year5', 'fee', 'assets'];
    const lastField = fund.assets !== undefined ? 'assets' : 'fee';

    for (const key of fields) {
        if (fund[key] === undefined) continue;
        const val = fund[key];
        const comma = key === lastField ? '' : ',';
        if (typeof val === 'string') {
            lines.push(`${indent}    ${key}: "${val.replace(/"/g, '\\"')}"${comma}`);
        } else if (val === null) {
            lines.push(`${indent}    ${key}: null${comma}`);
        } else {
            lines.push(`${indent}    ${key}: ${val}${comma}`);
        }
    }

    lines.push(`${indent}}`);
    return lines.join('\n');
}

function fundsArrayToJS(funds, indent = '        ') {
    return funds.map(f => fundToJS(f, indent)).join(',\n');
}

function writeMarketFundsFile(period, training, pension, gemel) {
    const content = `/**
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
        lastUpdate: '${period}',
        source: 'TheMarker SuperMarker',
        sourceUrls: {
            training: 'https://www.supermarker.themarker.com/Gemel/CompareHishtalmutFunds.aspx',
            pension: 'https://www.supermarker.themarker.com/pension/ComparePensionFunds.aspx',
            gemel: 'https://www.supermarker.themarker.com/Gemel/CompareKupotGemel.aspx'
        }
    },

    // Training Funds Data (קרנות השתלמות)
    training: [
${fundsArrayToJS(training)}
    ],

    // Pension Funds Data (קרנות פנסיה)
    pension: [
${fundsArrayToJS(pension)}
    ],

    // Gemel Funds Data (קופות גמל)
    gemel: [
${fundsArrayToJS(gemel)}
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
        const storageKey = \`market_funds_\${type}\`;
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
            const storageKey = \`market_funds_\${type}\`;
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
`;

    fs.writeFileSync(MARKET_FUNDS_PATH, content, 'utf-8');
}

function writeMyGemelFundsFile(period, training, pension, gemel) {
    const content = `/**
 * MyGemel Fund Data - Real data from igemel-net.co.il
 * Data source: https://www.igemel-net.co.il/
 * Last update: ${periodToHebrew(period)}
 */

const MyGemelFunds = {
    meta: {
        lastUpdate: '${period}',
        source: 'iGemel-Net',
        sourceUrls: {
            training: 'https://www.igemel-net.co.il/%D7%A7%D7%A8%D7%A0%D7%95%D7%AA-%D7%94%D7%A9%D7%AA%D7%9C%D7%9E%D7%95%D7%AA/',
            pension: 'https://www.igemel-net.co.il/%D7%A7%D7%A8%D7%A0%D7%95%D7%AA-%D7%A4%D7%A0%D7%A1%D7%99%D7%94/',
            gemel: 'https://www.igemel-net.co.il/%D7%92%D7%9E%D7%9C-%D7%9C%D7%94%D7%A9%D7%A7%D7%A2%D7%94/'
        }
    },

    // Training Funds - קרנות השתלמות (Real data from igemel-net.co.il)
    training: [
${fundsArrayToJS(training)}
    ],

    // Pension Funds - קרנות פנסיה (Real data from igemel-net.co.il)
    pension: [
${fundsArrayToJS(pension)}
    ],

    // Gemel Funds - קופות גמל להשקעה (Real data from igemel-net.co.il)
    gemel: [
${fundsArrayToJS(gemel)}
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
`;

    fs.writeFileSync(MYGEMEL_FUNDS_PATH, content, 'utf-8');
}

function periodToHebrew(period) {
    const [year, month] = period.split('-');
    const months = {
        '01': 'January', '02': 'February', '03': 'March', '04': 'April',
        '05': 'May', '06': 'June', '07': 'July', '08': 'August',
        '09': 'September', '10': 'October', '11': 'November', '12': 'December'
    };
    return `${months[month]} ${year}`;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
    console.log('🚀 Market Data Updater');
    console.log('='.repeat(40));
    console.log(`Date: ${new Date().toISOString().slice(0, 10)}`);

    let updated = false;

    try {
        const marketUpdated = await updateTheMarker();
        updated = updated || marketUpdated;
    } catch (err) {
        console.error('❌ TheMarker scraping failed:', err.message);
        summary.push(`TheMarker: ERROR — ${err.message}`);
    }

    try {
        const igemelUpdated = await updateIGemel();
        updated = updated || igemelUpdated;
    } catch (err) {
        console.error('❌ iGemel-Net scraping failed:', err.message);
        summary.push(`iGemel-Net: ERROR — ${err.message}`);
    }

    // Output summary (for GitHub Actions PR body)
    console.log('\n' + '='.repeat(40));
    console.log('Summary:');
    summary.forEach(s => console.log(`  ${s}`));

    // Write summary to file for GitHub Actions to pick up
    const summaryPath = path.join(ROOT, 'scripts', 'update-summary.txt');
    fs.writeFileSync(summaryPath, summary.join('\n'), 'utf-8');

    if (updated) {
        console.log('\n✅ Data files updated. Ready for PR.');
        process.exit(0);
    } else {
        console.log('\nℹ️  No updates needed.');
        process.exit(0);
    }
}

main().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
