/**
 * Stock API Module - Fetches stock data from Yahoo Finance
 */
const StockAPI = {
    YAHOO_URL: 'https://query2.finance.yahoo.com/v8/finance/chart',
    PROXY_URL: 'https://api.allorigins.win/raw?url=',

    /**
     * Format symbol for Yahoo Finance API
     * @param {string} symbol - Stock symbol
     * @param {string} market - Market code ('US' or 'IL')
     * @returns {string} Formatted symbol
     */
    formatSymbol(symbol, market = 'US') {
        const upperSymbol = symbol.toUpperCase().trim();
        // Israeli stocks need .TA suffix
        if (market === 'IL' && !upperSymbol.endsWith('.TA')) {
            return `${upperSymbol}.TA`;
        }
        // Remove .TA for US stocks if accidentally added
        if (market === 'US' && upperSymbol.endsWith('.TA')) {
            return upperSymbol.replace('.TA', '');
        }
        return upperSymbol;
    },

    /**
     * Detect market from symbol
     * @param {string} symbol - Stock symbol
     * @returns {string} Market code ('US' or 'IL')
     */
    detectMarket(symbol) {
        return symbol.toUpperCase().endsWith('.TA') ? 'IL' : 'US';
    },

    /**
     * Fetch stock data including historical prices for MA150 calculation
     * @param {string} symbol - Stock symbol
     * @param {string} market - Market code ('US' or 'IL')
     * @returns {Promise<Object>} Stock data with price and MA150
     */
    async fetchStockData(symbol, market = null) {
        const detectedMarket = market || this.detectMarket(symbol);
        const formattedSymbol = this.formatSymbol(symbol, detectedMarket);

        try {
            const yahooUrl = `${this.YAHOO_URL}/${encodeURIComponent(formattedSymbol)}?interval=1d&range=1y&includePrePost=false`;
            const url = `${this.PROXY_URL}${encodeURIComponent(yahooUrl)}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (!data.chart || !data.chart.result || data.chart.result.length === 0) {
                throw new Error('No data found for symbol');
            }

            const result = data.chart.result[0];
            const meta = result.meta;
            const quotes = result.indicators.quote[0];
            const timestamps = result.timestamp || [];

            // Build historical data with timestamps
            const historicalData = [];
            for (let i = 0; i < timestamps.length; i++) {
                if (quotes.close[i] !== null) {
                    historicalData.push({
                        date: new Date(timestamps[i] * 1000),
                        close: quotes.close[i]
                    });
                }
            }

            const closePrices = historicalData.map(d => d.close);

            const currentPrice = meta.regularMarketPrice;
            const previousClose = meta.previousClose || meta.chartPreviousClose;
            const currency = meta.currency || 'USD';
            const ma150 = this.calculateMA150(closePrices);

            // Calculate MA150 series for charting
            const ma150Series = this.calculateMA150Series(historicalData);

            // Calculate price change
            const priceChange = currentPrice - previousClose;
            const priceChangePercent = previousClose ? ((priceChange / previousClose) * 100) : 0;

            // Calculate position relative to MA150
            let ma150Position = null;
            let ma150PositionPercent = null;
            if (ma150 !== null) {
                ma150Position = currentPrice > ma150 ? 'above' : 'below';
                ma150PositionPercent = ((currentPrice - ma150) / ma150) * 100;
            }

            return {
                symbol: formattedSymbol,
                originalSymbol: symbol,
                market: detectedMarket,
                currentPrice,
                previousClose,
                priceChange,
                priceChangePercent,
                currency,
                ma150,
                ma150Position,
                ma150PositionPercent,
                historicalPrices: closePrices,
                historicalData,
                ma150Series,
                lastUpdate: new Date().toISOString(),
                success: true
            };
        } catch (error) {
            console.error(`Error fetching data for ${symbol}:`, error);
            return {
                symbol: formattedSymbol,
                originalSymbol: symbol,
                market: detectedMarket,
                error: error.message,
                success: false,
                lastUpdate: new Date().toISOString()
            };
        }
    },

    /**
     * Calculate 150-day Moving Average
     * @param {number[]} closePrices - Array of closing prices
     * @returns {number|null} MA150 value or null if insufficient data
     */
    calculateMA150(closePrices) {
        if (!closePrices || closePrices.length < 150) {
            return null;
        }
        const last150 = closePrices.slice(-150);
        const sum = last150.reduce((acc, price) => acc + price, 0);
        return sum / 150;
    },

    /**
     * Calculate MA150 series over time for charting
     * @param {Array<{date: Date, close: number}>} historicalData - Array of historical data points
     * @returns {Array<{date: Date, value: number}>} MA150 values over time
     */
    calculateMA150Series(historicalData) {
        if (!historicalData || historicalData.length < 150) {
            return [];
        }

        const ma150Series = [];
        for (let i = 149; i < historicalData.length; i++) {
            let sum = 0;
            for (let j = i - 149; j <= i; j++) {
                sum += historicalData[j].close;
            }
            ma150Series.push({
                date: historicalData[i].date,
                value: sum / 150
            });
        }
        return ma150Series;
    },

    /**
     * Fetch data for multiple symbols
     * @param {Array<{symbol: string, market?: string}>} symbols - Array of symbol objects
     * @returns {Promise<Object>} Map of symbol to stock data
     */
    async fetchMultiple(symbols) {
        const results = {};

        // Process in batches to avoid rate limiting
        const batchSize = 5;
        const batches = [];

        for (let i = 0; i < symbols.length; i += batchSize) {
            batches.push(symbols.slice(i, i + batchSize));
        }

        for (const batch of batches) {
            const promises = batch.map(item => {
                const symbol = typeof item === 'string' ? item : item.symbol;
                const market = typeof item === 'string' ? null : item.market;
                return this.fetchStockData(symbol, market);
            });

            const batchResults = await Promise.all(promises);

            batchResults.forEach(result => {
                results[result.symbol] = result;
            });

            // Small delay between batches to be respectful of rate limits
            if (batches.indexOf(batch) < batches.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 200));
            }
        }

        return results;
    },

    /**
     * Search for stock by name/symbol (basic implementation)
     * @param {string} query - Search query
     * @returns {Promise<Array>} Array of matching stocks
     */
    async searchStock(query) {
        try {
            // Yahoo Finance search endpoint via CORS proxy
            const yahooUrl = `https://query2.finance.yahoo.com/v1/finance/search?q=${encodeURIComponent(query)}&quotesCount=6&newsCount=0`;
            const url = `${this.PROXY_URL}${encodeURIComponent(yahooUrl)}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            if (!data.quotes) {
                return [];
            }

            return data.quotes
                .filter(q => q.quoteType === 'EQUITY')
                .map(q => ({
                    symbol: q.symbol,
                    name: q.shortname || q.longname || q.symbol,
                    exchange: q.exchange,
                    market: q.symbol.endsWith('.TA') ? 'IL' : 'US'
                }));
        } catch (error) {
            console.error('Error searching stocks:', error);
            return [];
        }
    }
};

// Make available globally
window.StockAPI = StockAPI;
