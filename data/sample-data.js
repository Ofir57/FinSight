/**
 * Sample Data - Load this to populate the app with demo data
 */
const SampleData = {
    bankAccounts: [
        {
            id: 'bank-1',
            nameHe: 'חשבון עו"ש ראשי',
            nameEn: 'Main Checking Account',
            bank: 'leumi',
            accountNumber: '****1234',
            balance: 45000,
            currency: 'ILS',
            history: [
                { date: '2024-10-01', balance: 38000 },
                { date: '2024-11-01', balance: 42000 },
                { date: '2024-12-01', balance: 40000 },
                { date: '2025-01-01', balance: 45000 }
            ]
        },
        {
            id: 'bank-2',
            nameHe: 'חשבון חיסכון',
            nameEn: 'Savings Account',
            bank: 'hapoalim',
            accountNumber: '****5678',
            balance: 120000,
            currency: 'ILS',
            history: [
                { date: '2024-10-01', balance: 100000 },
                { date: '2024-11-01', balance: 110000 },
                { date: '2024-12-01', balance: 115000 },
                { date: '2025-01-01', balance: 120000 }
            ]
        }
    ],

    creditCards: {
        cards: [
            {
                id: 'card-1',
                name: 'ויזה כאל',
                lastFour: '1234',
                creditLimit: 15000
            },
            {
                id: 'card-2',
                name: 'מאסטרקארד לאומי',
                lastFour: '5678',
                creditLimit: 10000
            }
        ],
        expenses: [
            { id: 'exp-1', cardId: 'card-1', date: '2025-01-05', amount: 450, category: 'food', description: 'רמי לוי', isRecurring: false },
            { id: 'exp-2', cardId: 'card-1', date: '2025-01-08', amount: 180, category: 'transport', description: 'דלק', isRecurring: false },
            { id: 'exp-3', cardId: 'card-1', date: '2025-01-10', amount: 350, category: 'shopping', description: 'H&M', isRecurring: false },
            { id: 'exp-4', cardId: 'card-2', date: '2025-01-12', amount: 200, category: 'entertainment', description: 'נטפליקס + ספוטיפיי', isRecurring: true },
            { id: 'exp-5', cardId: 'card-2', date: '2025-01-15', amount: 850, category: 'bills', description: 'חשמל', isRecurring: false },
            { id: 'exp-6', cardId: 'card-1', date: '2025-01-18', amount: 120, category: 'health', description: 'בית מרקחת', isRecurring: false },
            { id: 'exp-7', cardId: 'card-1', date: '2025-01-20', amount: 380, category: 'food', description: 'מסעדה', isRecurring: false },
            { id: 'exp-8', cardId: 'card-2', date: '2025-01-22', amount: 550, category: 'shopping', description: 'איקאה', isRecurring: false }
        ]
    },

    stocks: {
        holdings: [
            {
                id: 'stock-1',
                symbol: 'AAPL',
                name: 'Apple Inc.',
                quantity: 15,
                avgPrice: 150,
                currentPrice: 185,
                currency: 'USD'
            },
            {
                id: 'stock-2',
                symbol: 'MSFT',
                name: 'Microsoft Corp.',
                quantity: 10,
                avgPrice: 280,
                currentPrice: 420,
                currency: 'USD'
            },
            {
                id: 'stock-3',
                symbol: 'GOOGL',
                name: 'Alphabet Inc.',
                quantity: 5,
                avgPrice: 120,
                currentPrice: 175,
                currency: 'USD'
            },
            {
                id: 'stock-4',
                symbol: 'TEVA',
                name: 'Teva Pharmaceutical',
                quantity: 100,
                avgPrice: 45,
                currentPrice: 52,
                currency: 'ILS'
            }
        ],
        transactions: [
            { id: 'tx-1', symbol: 'AAPL', type: 'buy', quantity: 10, price: 145, date: '2024-03-15' },
            { id: 'tx-2', symbol: 'AAPL', type: 'buy', quantity: 5, price: 160, date: '2024-08-20' },
            { id: 'tx-3', symbol: 'MSFT', type: 'buy', quantity: 10, price: 280, date: '2024-05-10' },
            { id: 'tx-4', symbol: 'GOOGL', type: 'buy', quantity: 5, price: 120, date: '2024-06-25' },
            { id: 'tx-5', symbol: 'TEVA', type: 'buy', quantity: 100, price: 45, date: '2024-09-01' }
        ]
    },

    assets: [
        {
            id: 'asset-1',
            type: 'car',
            nameHe: 'טויוטה קורולה 2022',
            nameEn: 'Toyota Corolla 2022',
            value: 95000,
            purchaseDate: '2022-03-15',
            purchasePrice: 140000
        },
        {
            id: 'asset-2',
            type: 'electronics',
            nameHe: 'מחשב ומסכים',
            nameEn: 'Computer and Monitors',
            value: 12000,
            purchaseDate: '2023-06-01',
            purchasePrice: 15000
        }
    ],

    myFunds: [
        {
            id: 'fund-1',
            type: 'training',
            fundName: 'אינפיניטי השתלמות משולב סחיר',
            currentValue: 85000,
            monthlyDeposit: 2000
        },
        {
            id: 'fund-2',
            type: 'pension',
            fundName: 'מיטב דש פנסיה מקיפה',
            currentValue: 150000,
            monthlyDeposit: 3500
        },
        {
            id: 'fund-3',
            type: 'gemel',
            fundName: 'הלמן אלדובי גמל להשקעה',
            currentValue: 45000,
            monthlyDeposit: 1000
        }
    ],

    settings: {
        language: 'he',
        currency: 'ILS'
    },

    /**
     * Load sample data into localStorage
     */
    load() {
        Storage.saveBankAccounts(this.bankAccounts);
        Storage.saveCreditCards(this.creditCards);
        Storage.saveStocks(this.stocks);
        Storage.saveAssets(this.assets);
        Storage.saveMyFunds(this.myFunds);
        Storage.saveSettings(this.settings);
        console.log('Sample data loaded successfully!');
        location.reload();
    },

    /**
     * Clear all data
     */
    clear() {
        Object.values(Storage.KEYS).forEach(key => Storage.remove(key));
        console.log('All data cleared!');
        location.reload();
    }
};

// Make available globally
window.SampleData = SampleData;

// Log instructions
console.log('📊 Finance Dashboard - Sample Data');
console.log('To load sample data, run: SampleData.load()');
console.log('To clear all data, run: SampleData.clear()');
