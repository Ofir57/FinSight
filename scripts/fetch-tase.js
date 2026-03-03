#!/usr/bin/env node
/**
 * Fetches daily NAV/price data for Israeli securities from Maya API.
 * Runs server-side via GitHub Actions — no CORS restrictions.
 *
 * Config:  data/tase-ids.json   — list of TASE security IDs to track
 * Output:  data/tase-prices.json — cached prices read by the browser app
 */

const { readFileSync, writeFileSync, existsSync } = require('fs');

const MAYA_BASE = 'https://mayaapi.tase.co.il/api';
const HEADERS = {
    'X-Maya-With': 'allow',
    'User-Agent': 'Mozilla/5.0 (compatible; FinSightBot/1.0)',
    'Accept': 'application/json'
};

// Load existing prices
let prices = {};
if (existsSync('data/tase-prices.json')) {
    try { prices = JSON.parse(readFileSync('data/tase-prices.json', 'utf8')); } catch {}
}

// Load IDs to fetch
let ids = [];
try {
    ids = JSON.parse(readFileSync('data/tase-ids.json', 'utf8'));
} catch {
    console.error('Could not read data/tase-ids.json');
    process.exit(1);
}

function parsePrice(data) {
    const d = data?.tradeData || data?.TradeData
           || data?.fundDetails || data?.FundDetails
           || data;

    const raw = d?.lastPrice ?? d?.LastPrice ?? d?.tradePrice ?? d?.TradePrice
             ?? d?.navPerUnit ?? d?.NavPerUnit ?? d?.unitPrice ?? d?.UnitPrice
             ?? d?.currentNAV ?? d?.CurrentNAV;
    if (raw == null) return null;

    // TASE prices are in agora (1/100 ILS); values > 100000 are already in ILS
    const currentPrice = raw > 100000 ? raw : raw / 100;

    const rawPrev = d?.basePrice ?? d?.BasePrice
                 ?? d?.previousClose ?? d?.PreviousClose
                 ?? d?.previousNavPerUnit ?? d?.PreviousNavPerUnit;
    const previousClose = rawPrev != null ? (rawPrev > 100000 ? rawPrev : rawPrev / 100) : null;

    const priceChange = previousClose != null ? currentPrice - previousClose : 0;
    const priceChangePercent = previousClose ? (priceChange / previousClose) * 100 : 0;

    return { currentPrice, previousClose, priceChange, priceChangePercent, currency: 'ILS' };
}

async function fetchId(id) {
    const endpoints = [
        `${MAYA_BASE}/fund/details?fundId=${id}`,       // קרנות נאמנות
        `${MAYA_BASE}/company/tradedata?companyId=${id}` // מניות
    ];

    for (const url of endpoints) {
        try {
            const res = await fetch(url, { headers: HEADERS });
            if (!res.ok) {
                console.log(`  ${url} → HTTP ${res.status}`);
                continue;
            }
            const data = await res.json();
            const parsed = parsePrice(data);
            if (parsed) {
                const sign = parsed.priceChangePercent >= 0 ? '+' : '';
                console.log(`✓ ${id}: ₪${parsed.currentPrice.toFixed(2)} (${sign}${parsed.priceChangePercent.toFixed(2)}%)`);
                return parsed;
            }
            console.warn(`⚠ ${id}: response OK but no price found. Keys: ${Object.keys(data).join(', ')}`);
            console.warn(`  Raw response snippet:`, JSON.stringify(data).slice(0, 300));
        } catch (e) {
            console.warn(`  ${url}: ${e.message}`);
        }
    }
    return null;
}

async function main() {
    console.log(`Fetching ${ids.length} Israeli securities...`);

    for (const id of ids) {
        process.stdout.write(`Fetching ${id}... `);
        const result = await fetchId(id);
        if (result) {
            prices[String(id)] = { ...result, lastUpdate: new Date().toISOString() };
        } else {
            console.error(`✗ ${id}: all endpoints failed`);
        }
    }

    writeFileSync('data/tase-prices.json', JSON.stringify(prices, null, 2));
    console.log(`\nDone. Saved ${Object.keys(prices).length} prices to data/tase-prices.json`);
}

main().catch(e => { console.error(e); process.exit(1); });
