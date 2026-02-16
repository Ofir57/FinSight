/**
 * Authentication & Cloud Sync Module
 */
const Auth = {
    currentUser: null,
    isInitialized: false,

    /**
     * Initialize auth state listener
     */
    init() {
        if (this.isInitialized) return;
        this.isInitialized = true;

        firebaseAuth.onAuthStateChanged(async (user) => {
            this.currentUser = user;
            this.updateUI();

            if (user) {
                console.log('User signed in:', user.email);
                // Sync data from cloud on login
                await this.syncFromCloud();
            } else {
                console.log('User signed out');
            }
        });
    },

    /**
     * Sign in with Google
     */
    async signInWithGoogle() {
        try {
            const result = await firebaseAuth.signInWithPopup(googleProvider);
            App.notify(`${I18n.t('auth.welcome')}, ${result.user.displayName}!`, 'success');
            return result.user;
        } catch (error) {
            console.error('Sign in error:', error);
            if (error.code === 'auth/popup-closed-by-user') {
                App.notify(I18n.t('auth.loginCancelled'), 'info');
            } else {
                App.notify(I18n.t('auth.loginError') + ': ' + error.message, 'error');
            }
            return null;
        }
    },

    /**
     * Sign in with Email/Password
     */
    async signInWithEmail(email, password) {
        try {
            const result = await firebaseAuth.signInWithEmailAndPassword(email, password);
            App.notify(`${I18n.t('auth.welcome')}, ${result.user.email}!`, 'success');
            this.closeEmailModal();
            return result.user;
        } catch (error) {
            console.error('Email sign in error:', error);
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
                App.notify(I18n.t('auth.wrongPassword'), 'error');
            } else if (error.code === 'auth/invalid-email') {
                App.notify(I18n.t('auth.invalidEmail'), 'error');
            } else {
                App.notify(I18n.t('auth.loginError') + ': ' + error.message, 'error');
            }
            return null;
        }
    },

    /**
     * Register with Email/Password
     */
    async registerWithEmail(email, password) {
        try {
            const result = await firebaseAuth.createUserWithEmailAndPassword(email, password);
            App.notify(I18n.t('auth.registered'), 'success');
            this.closeEmailModal();
            return result.user;
        } catch (error) {
            console.error('Email register error:', error);
            if (error.code === 'auth/email-already-in-use') {
                App.notify(I18n.t('auth.emailInUse'), 'error');
            } else if (error.code === 'auth/weak-password') {
                App.notify(I18n.t('auth.weakPassword'), 'error');
            } else if (error.code === 'auth/invalid-email') {
                App.notify(I18n.t('auth.invalidEmail'), 'error');
            } else {
                App.notify(I18n.t('auth.registerError') + ': ' + error.message, 'error');
            }
            return null;
        }
    },

    /**
     * Show email login modal
     */
    showEmailLogin() {
        let modal = document.getElementById('emailAuthModal');
        if (modal) {
            modal.style.display = 'flex';
            return;
        }

        modal = document.createElement('div');
        modal.id = 'emailAuthModal';
        modal.className = 'modal-overlay active';
        modal.innerHTML = `
            <div class="modal" style="max-width: 400px;">
                <div class="modal-header">
                    <h2>📧 ${I18n.t('auth.emailLogin')}</h2>
                    <button class="modal-close" onclick="Auth.closeEmailModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>${I18n.t('auth.email')}</label>
                        <input type="email" id="emailAuthInput" class="form-control" placeholder="email@example.com" dir="ltr">
                    </div>
                    <div class="form-group">
                        <label>${I18n.t('auth.password')}</label>
                        <div style="position: relative;">
                            <input type="password" id="emailAuthPassword" class="form-control" placeholder="${I18n.t('auth.passwordPlaceholder')}" dir="ltr" style="padding-left: 40px;">
                            <button type="button" id="togglePasswordBtn" onclick="Auth.togglePasswordVisibility()" style="position: absolute; left: 8px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; font-size: 1.2rem; color: var(--color-text-secondary); padding: 4px;">👁️</button>
                        </div>
                    </div>
                    <div style="text-align: center; margin-top: 5px;">
                        <a href="#" onclick="Auth.resetPassword(); return false;" style="color: var(--color-training); font-size: 0.85rem; text-decoration: none;">${I18n.t('auth.forgotPassword')}</a>
                    </div>
                    <div class="auth-buttons" style="margin-top: 15px;">
                        <button class="btn btn-primary" style="flex: 1;" onclick="Auth.signInWithEmail(document.getElementById('emailAuthInput').value, document.getElementById('emailAuthPassword').value)">
                            ${I18n.t('auth.signIn')}
                        </button>
                        <button class="btn btn-secondary" style="flex: 1;" onclick="Auth.registerWithEmail(document.getElementById('emailAuthInput').value, document.getElementById('emailAuthPassword').value)">
                            ${I18n.t('auth.register')}
                        </button>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.closeEmailModal();
        });
        document.getElementById('emailAuthInput').focus();
    },

    /**
     * Toggle password visibility
     */
    togglePasswordVisibility() {
        const input = document.getElementById('emailAuthPassword');
        const btn = document.getElementById('togglePasswordBtn');
        if (input.type === 'password') {
            input.type = 'text';
            btn.textContent = '🙈';
        } else {
            input.type = 'password';
            btn.textContent = '👁️';
        }
    },

    /**
     * Reset password via email
     */
    async resetPassword() {
        const email = document.getElementById('emailAuthInput')?.value?.trim();
        if (!email) {
            App.notify(I18n.t('auth.enterEmailFirst'), 'warning');
            return;
        }
        try {
            await firebaseAuth.sendPasswordResetEmail(email);
            App.notify(I18n.t('auth.resetSent'), 'success');
        } catch (error) {
            console.error('Password reset error:', error);
            if (error.code === 'auth/user-not-found') {
                App.notify(I18n.t('auth.userNotFound'), 'error');
            } else if (error.code === 'auth/invalid-email') {
                App.notify(I18n.t('auth.invalidEmail'), 'error');
            } else {
                App.notify(I18n.t('auth.resetError') + ': ' + error.message, 'error');
            }
        }
    },

    /**
     * Close email login modal
     */
    closeEmailModal() {
        const modal = document.getElementById('emailAuthModal');
        if (modal) modal.style.display = 'none';
    },

    /**
     * Sign out
     */
    async signOut() {
        try {
            await firebaseAuth.signOut();
            App.notify(I18n.t('auth.signedOut'), 'success');
        } catch (error) {
            console.error('Sign out error:', error);
            App.notify(I18n.t('auth.signOutError'), 'error');
        }
    },

    /**
     * Update UI based on auth state
     */
    updateUI() {
        const authButtons = document.getElementById('authButtons');
        const authLogout = document.getElementById('authLogout');
        const userInfo = document.getElementById('userInfo');
        const syncStatus = document.getElementById('syncStatus');

        if (!authButtons && !authLogout) return;

        if (this.currentUser) {
            // User is signed in - hide login buttons, show logout
            if (authButtons) authButtons.style.display = 'none';
            if (authLogout) authLogout.style.display = 'block';

            if (userInfo) {
                const photo = this.currentUser.photoURL || '';
                const name = sanitize(this.currentUser.displayName || this.currentUser.email);
                const safePhoto = photo && /^https:\/\//.test(photo) ? sanitize(photo) : '';
                userInfo.innerHTML = `
                    <div class="user-profile">
                        ${safePhoto ? `<img src="${safePhoto}" alt="profile" class="user-avatar">` : ''}
                        <span class="user-name">${name}</span>
                    </div>
                `;
                userInfo.style.display = 'flex';
            }

            if (syncStatus) {
                syncStatus.innerHTML = '☁️ ' + I18n.t('auth.cloudSynced');
                syncStatus.className = 'sync-status synced';
            }
        } else {
            // User is signed out - show login buttons, hide logout
            if (authButtons) authButtons.style.display = 'flex';
            if (authLogout) authLogout.style.display = 'none';

            if (userInfo) {
                userInfo.style.display = 'none';
            }

            if (syncStatus) {
                syncStatus.innerHTML = '💾 ' + I18n.t('auth.localOnly');
                syncStatus.className = 'sync-status local';
            }
        }
    },

    /**
     * Save all data to Firestore
     */
    async saveToCloud() {
        if (!this.currentUser) {
            console.log('Not logged in, skipping cloud save');
            return false;
        }

        try {
            const userId = this.currentUser.uid;
            const sensitiveData = {
                bankAccounts: Storage.getBankAccounts(),
                creditCards: Storage.getCreditCards(),
                stocks: Storage.getStocks(),
                assets: Storage.getAssets(),
                myFunds: Storage.getMyFunds(),
                settings: Storage.getSettings(),
                stockAlerts: Storage.get(Storage.KEYS.STOCK_ALERTS),
                tvCustomSymbols: Storage.getTVCustomSymbols(),
                notifications: Storage.getNotifications(),
                dashboardWidgets: Storage.getDashboardWidgets(),
                importTemplates: Storage.getImportTemplates()
            };

            // Encrypt sensitive data before uploading
            let data;
            if (typeof DataCrypto !== 'undefined') {
                const encrypted = await DataCrypto.encrypt(sensitiveData, userId);
                data = {
                    encryptedData: encrypted,
                    encrypted: true,
                    lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
                    lastUpdatedBy: this.currentUser.email
                };
            } else {
                data = {
                    ...sensitiveData,
                    encrypted: false,
                    lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
                    lastUpdatedBy: this.currentUser.email
                };
            }

            await firebaseDb.collection('users').doc(userId).set(data, { merge: false });
            console.log('Data saved to cloud (encrypted)');

            // Update sync status
            const syncStatus = document.getElementById('syncStatus');
            if (syncStatus) {
                syncStatus.innerHTML = '☁️ ' + I18n.t('auth.cloudSaved');
                syncStatus.className = 'sync-status synced';
                setTimeout(() => {
                    syncStatus.innerHTML = '☁️ ' + I18n.t('auth.cloudSynced');
                }, 2000);
            }

            return true;
        } catch (error) {
            console.error('Cloud save error:', error);
            App.notify(I18n.t('auth.cloudSaveError'), 'error');
            return false;
        }
    },

    /**
     * Load data from Firestore
     */
    async syncFromCloud() {
        if (!this.currentUser) {
            return false;
        }

        try {
            const userId = this.currentUser.uid;
            const doc = await firebaseDb.collection('users').doc(userId).get();

            if (doc.exists) {
                const rawData = doc.data();
                const localLastUpdate = localStorage.getItem('finance_last_update');
                const cloudLastUpdate = rawData.lastUpdated?.toDate?.()?.getTime() || 0;
                const localTime = localLastUpdate ? new Date(localLastUpdate).getTime() : 0;

                // Check if cloud data is newer or if this is first sync
                if (cloudLastUpdate > localTime || !localLastUpdate) {
                    // Decrypt if encrypted
                    let data;
                    if (rawData.encrypted && rawData.encryptedData && typeof DataCrypto !== 'undefined') {
                        data = await DataCrypto.decrypt(rawData.encryptedData, userId);
                        if (!data) {
                            console.error('Failed to decrypt cloud data');
                            App.notify(I18n.t('auth.decryptError'), 'error');
                            return false;
                        }
                    } else {
                        data = rawData;
                    }

                    // Cloud is newer, update local
                    if (data.bankAccounts) Storage.saveBankAccounts(data.bankAccounts);
                    if (data.creditCards) Storage.saveCreditCards(data.creditCards);
                    if (data.stocks) Storage.saveStocks(data.stocks);
                    if (data.assets) Storage.saveAssets(data.assets);
                    if (data.myFunds) Storage.saveMyFunds(data.myFunds);
                    if (data.settings) Storage.saveSettings(data.settings);
                    if (data.stockAlerts) Storage.set(Storage.KEYS.STOCK_ALERTS, data.stockAlerts);
                    if (data.tvCustomSymbols) Storage.saveTVCustomSymbols(data.tvCustomSymbols);
                    if (data.notifications) Storage.saveNotifications(data.notifications);
                    if (data.dashboardWidgets) Storage.saveDashboardWidgets(data.dashboardWidgets);
                    if (data.importTemplates) Storage.saveImportTemplates(data.importTemplates);

                    localStorage.setItem('finance_last_update', new Date().toISOString());
                    console.log('Data synced from cloud (decrypted)');
                    App.notify(I18n.t('auth.dataSynced'), 'success');

                    // Refresh current page
                    if (typeof loadStocks === 'function') loadStocks();
                    if (typeof loadWatchlist === 'function') loadWatchlist();
                    if (typeof rebuildTVDropdown === 'function') rebuildTVDropdown();

                    return true;
                } else {
                    console.log('Local data is newer, uploading to cloud');
                    await this.saveToCloud();
                }
            } else {
                // No cloud data, save local to cloud
                console.log('No cloud data found, saving local data');
                await this.saveToCloud();
            }

            return true;
        } catch (error) {
            console.error('Cloud sync error:', error);
            App.notify(I18n.t('auth.cloudSyncError'), 'error');
            return false;
        }
    },

    /**
     * Force sync (manual trigger)
     */
    async forceSync() {
        if (!this.currentUser) {
            App.notify(I18n.t('auth.loginFirst'), 'warning');
            return;
        }

        const syncStatus = document.getElementById('syncStatus');
        if (syncStatus) {
            syncStatus.innerHTML = '🔄 ' + I18n.t('auth.syncing');
            syncStatus.className = 'sync-status syncing';
        }

        await this.saveToCloud();
        App.notify(I18n.t('auth.syncSuccess'), 'success');
    },

    /**
     * Delete all user data from cloud and local
     */
    async deleteAllData() {
        if (!confirm(I18n.t('auth.deleteConfirm1'))) return;
        if (!confirm(I18n.t('auth.deleteConfirm2'))) return;

        try {
            // Delete from Firestore
            if (this.currentUser) {
                await firebaseDb.collection('users').doc(this.currentUser.uid).delete();
            }

            // Delete from localStorage
            const keysToDelete = Object.keys(localStorage).filter(k => k.startsWith('finance_') || k.startsWith('market_') || k.startsWith('mygemel_'));
            keysToDelete.forEach(k => localStorage.removeItem(k));

            App.notify(I18n.t('auth.allDataDeleted'), 'success');
            setTimeout(() => location.reload(), 1500);
        } catch (error) {
            console.error('Delete all data error:', error);
            App.notify(I18n.t('auth.deleteError'), 'error');
        }
    }
};

// Auto-logout after 30 minutes of inactivity
let inactivityTimer = null;
const INACTIVITY_TIMEOUT = 30 * 60 * 1000; // 30 minutes

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    if (Auth.currentUser) {
        inactivityTimer = setTimeout(() => {
            Auth.signOut();
            App.notify(I18n.t('auth.autoLogout'), 'info');
        }, INACTIVITY_TIMEOUT);
    }
}

['click', 'keydown', 'scroll', 'touchstart'].forEach(event => {
    document.addEventListener(event, resetInactivityTimer, { passive: true });
});

// Auto-save to cloud when data changes (debounced)
let saveTimeout = null;
const originalStorageSet = Storage.set.bind(Storage);
Storage.set = function(key, data) {
    originalStorageSet(key, data);
    localStorage.setItem('finance_last_update', new Date().toISOString());

    // Debounced cloud save
    if (Auth.currentUser) {
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
            Auth.saveToCloud();
        }, 2000); // Wait 2 seconds after last change before syncing
    }
};

// Make available globally
window.Auth = Auth;

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // Wait for Firebase to be ready
    if (typeof firebase !== 'undefined' && typeof firebaseAuth !== 'undefined') {
        Auth.init();
    }
});
