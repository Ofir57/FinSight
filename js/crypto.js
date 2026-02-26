/**
 * Data Encryption Module
 * Encrypts sensitive data before cloud sync using AES-GCM
 */
const DataCrypto = {
    /**
     * Derive encryption key from user UID
     */
    async getKey(uid, useLegacySalt = false) {
        const encoder = new TextEncoder();
        const keyMaterial = await crypto.subtle.importKey(
            'raw',
            encoder.encode(uid + '-finzilla-secure-2024'),
            'PBKDF2',
            false,
            ['deriveKey']
        );

        const salt = useLegacySalt
            ? 'finzilla-salt-v1'
            : uid + '-finsight-salt-v2';

        return crypto.subtle.deriveKey(
            {
                name: 'PBKDF2',
                salt: encoder.encode(salt),
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

            let binary = '';
            for (let i = 0; i < combined.length; i++) {
                binary += String.fromCharCode(combined[i]);
            }
            return btoa(binary);
        } catch (e) {
            console.error('Encryption error:', e);
            return null;
        }
    },

    /**
     * Decrypt data string back to object
     * Tries new per-user salt first, falls back to legacy salt for backward compatibility
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
            // Fall back to legacy salt for data encrypted before per-user salt migration
            try {
                const legacyKey = await this.getKey(uid, true);
                const combined = Uint8Array.from(atob(encryptedBase64), c => c.charCodeAt(0));
                const iv = combined.slice(0, 12);
                const ciphertext = combined.slice(12);

                const plaintext = await crypto.subtle.decrypt(
                    { name: 'AES-GCM', iv: iv },
                    legacyKey,
                    ciphertext
                );

                const decoder = new TextDecoder();
                return JSON.parse(decoder.decode(plaintext));
            } catch (legacyErr) {
                console.error('Decryption error:', e);
                return null;
            }
        }
    }
};

window.DataCrypto = DataCrypto;
