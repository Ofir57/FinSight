/**
 * IndexedDB Module - Large data storage + localStorage quota monitoring
 * Handles large fund comparison data that can exceed localStorage 5MB limit.
 */
const IDB = {
    DB_NAME: 'finsight',
    DB_VERSION: 1,
    STORE: 'large_data',
    _db: null,
    // Keys large enough to justify IDB storage (fund comparison data)
    LARGE_KEYS: ['mygemel_fund_data', 'market_funds_training', 'market_funds_pension', 'market_funds_gemel'],

    async open() {
        if (this._db) return this._db;
        return new Promise((resolve, reject) => {
            const req = indexedDB.open(this.DB_NAME, this.DB_VERSION);
            req.onupgradeneeded = (e) => {
                const db = e.target.result;
                if (!db.objectStoreNames.contains(this.STORE)) {
                    db.createObjectStore(this.STORE);
                }
            };
            req.onsuccess  = (e) => { this._db = e.target.result; resolve(this._db); };
            req.onerror    = ()  => reject(req.error);
        });
    },

    async get(key) {
        try {
            const db = await this.open();
            return new Promise((resolve) => {
                const req = db.transaction(this.STORE, 'readonly').objectStore(this.STORE).get(key);
                req.onsuccess = () => resolve(req.result ?? null);
                req.onerror   = () => resolve(null);
            });
        } catch { return null; }
    },

    async set(key, data) {
        try {
            const db = await this.open();
            return new Promise((resolve, reject) => {
                const tx = db.transaction(this.STORE, 'readwrite');
                tx.objectStore(this.STORE).put(data, key);
                tx.oncomplete = () => resolve(true);
                tx.onerror    = () => reject(tx.error);
            });
        } catch { return false; }
    },

    async remove(key) {
        try {
            const db = await this.open();
            return new Promise((resolve) => {
                const tx = db.transaction(this.STORE, 'readwrite');
                tx.objectStore(this.STORE).delete(key);
                tx.oncomplete = () => resolve(true);
                tx.onerror    = () => resolve(false);
            });
        } catch { return false; }
    },

    // ── Quota monitoring ──────────────────────────────────────────────────────

    getUsageBytes() {
        let total = 0;
        try {
            for (const key in localStorage) {
                if (Object.prototype.hasOwnProperty.call(localStorage, key)) {
                    total += (key.length + (localStorage.getItem(key) || '').length) * 2; // UTF-16
                }
            }
        } catch {}
        return total;
    },

    getUsageMB() {
        return (this.getUsageBytes() / (1024 * 1024)).toFixed(2);
    },

    isNearLimit() {
        return this.getUsageBytes() > 3.5 * 1024 * 1024; // > 3.5 MB
    },

    // ── Migration: move large fund keys from localStorage → IDB ──────────────

    async migrateIfNeeded() {
        if (!('indexedDB' in window)) return;
        for (const key of this.LARGE_KEYS) {
            const raw = localStorage.getItem(key);
            if (raw && raw.length > 50_000) { // > ~50 KB
                try {
                    await this.set(key, JSON.parse(raw));
                    localStorage.removeItem(key);
                    console.log(`IDB: migrated "${key}" (${(raw.length / 1024).toFixed(0)} KB)`);
                } catch (e) {
                    console.warn(`IDB: migration failed for "${key}"`, e);
                }
            }
        }
    },

    // Get a large-data value: check IDB first, fall back to localStorage
    async getLarge(key) {
        const idbVal = await this.get(key);
        if (idbVal !== null) return idbVal;
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : null;
        } catch { return null; }
    },

    // Set a large-data value: store in IDB, remove from localStorage
    async setLarge(key, data) {
        const ok = await this.set(key, data);
        if (ok) localStorage.removeItem(key);
        else {
            // Fallback to localStorage if IDB fails
            try { localStorage.setItem(key, JSON.stringify(data)); } catch {}
        }
        return ok;
    }
};

window.IDB = IDB;

// Run migration in the background after page load
window.addEventListener('load', () => {
    setTimeout(() => IDB.migrateIfNeeded(), 2000);
});
