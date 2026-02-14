/**
 * Data Encryption Module
 * Encrypts sensitive data before cloud sync using AES-GCM
 */
const DataCrypto = {
    /**
     * Derive encryption key from user UID
     */
    async getKey(uid) {
        const encoder = new TextEncoder();
        const keyMaterial = await crypto.subtle.importKey(
            'raw',
            encoder.encode(uid + '-finzilla-secure-2024'),
            'PBKDF2',
            false,
            ['deriveKey']
        );

        return crypto.subtle.deriveKey(
            {
                name: 'PBKDF2',
                salt: encoder.encode('finzilla-salt-v1'),
                iterations: 100000,
                hash: 'SHA-256'
            },
            keyMaterial,
            { name: 'AES-GCM', length: 256 },
            false,
            ['encrypt', 'decrypt']
        );
    },

    /**
     * Encrypt data object
     */
    async encrypt(data, uid) {
        try {
            const key = await this.getKey(uid);
            const encoder = new TextEncoder();
            const iv = crypto.getRandomValues(new Uint8Array(12));
            const plaintext = encoder.encode(JSON.stringify(data));

            const ciphertext = await crypto.subtle.encrypt(
                { name: 'AES-GCM', iv: iv },
                key,
                plaintext
            );

            // Combine IV + ciphertext and encode as base64
            const combined = new Uint8Array(iv.length + ciphertext.byteLength);
            combined.set(iv);
            combined.set(new Uint8Array(ciphertext), iv.length);

            return btoa(String.fromCharCode(...combined));
        } catch (e) {
            console.error('Encryption error:', e);
            return null;
        }
    },

    /**
     * Decrypt data string back to object
     */
    async decrypt(encryptedBase64, uid) {
        try {
            const key = await this.getKey(uid);

            const combined = Uint8Array.from(atob(encryptedBase64), c => c.charCodeAt(0));
            const iv = combined.slice(0, 12);
            const ciphertext = combined.slice(12);

            const plaintext = await crypto.subtle.decrypt(
                { name: 'AES-GCM', iv: iv },
                key,
                ciphertext
            );

            const decoder = new TextDecoder();
            return JSON.parse(decoder.decode(plaintext));
        } catch (e) {
            console.error('Decryption error:', e);
            return null;
        }
    }
};

window.DataCrypto = DataCrypto;
