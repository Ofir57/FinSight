/**
 * Custom Tags Module - User-defined categories and tags
 */
const Tags = {
    STORAGE_KEY: 'finance_custom_tags',

    defaultCategories: [
        { id: 'food', nameHe: 'מזון ומסעדות', nameEn: 'Food & Restaurants', icon: '🍕', color: '#ef4444' },
        { id: 'transport', nameHe: 'תחבורה ודלק', nameEn: 'Transportation', icon: '🚗', color: '#3b82f6' },
        { id: 'shopping', nameHe: 'קניות', nameEn: 'Shopping', icon: '🛍️', color: '#8b5cf6' },
        { id: 'entertainment', nameHe: 'בילויים', nameEn: 'Entertainment', icon: '🎬', color: '#f59e0b' },
        { id: 'bills', nameHe: 'חשבונות קבועים', nameEn: 'Bills', icon: '📄', color: '#10b981' },
        { id: 'health', nameHe: 'בריאות', nameEn: 'Health', icon: '💊', color: '#ec4899' },
        { id: 'education', nameHe: 'חינוך', nameEn: 'Education', icon: '📚', color: '#6366f1' },
        { id: 'other', nameHe: 'אחר', nameEn: 'Other', icon: '📦', color: '#6b7280' }
    ],

    /**
     * Get all categories (default + custom)
     */
    getCategories() {
        const custom = Storage.get(this.STORAGE_KEY) || { categories: [], tags: [] };
        return [...this.defaultCategories, ...custom.categories];
    },

    /**
     * Get custom data
     */
    getCustomData() {
        return Storage.get(this.STORAGE_KEY) || { categories: [], tags: [] };
    },

    /**
     * Save custom data
     */
    saveCustomData(data) {
        Storage.set(this.STORAGE_KEY, data);
    },

    /**
     * Add custom category
     */
    addCategory(category) {
        const data = this.getCustomData();
        category.id = category.id || Storage.generateId();
        category.isCustom = true;
        data.categories.push(category);
        this.saveCustomData(data);
        return category;
    },

    /**
     * Update category
     */
    updateCategory(id, updates) {
        const data = this.getCustomData();
        const index = data.categories.findIndex(c => c.id === id);
        if (index !== -1) {
            data.categories[index] = { ...data.categories[index], ...updates };
            this.saveCustomData(data);
            return data.categories[index];
        }
        return null;
    },

    /**
     * Delete custom category
     */
    deleteCategory(id) {
        const data = this.getCustomData();
        data.categories = data.categories.filter(c => c.id !== id);
        this.saveCustomData(data);
    },

    /**
     * Get category by ID
     */
    getCategory(id) {
        return this.getCategories().find(c => c.id === id);
    },

    /**
     * Get category name
     */
    getCategoryName(id) {
        const category = this.getCategory(id);
        if (!category) return id;
        return I18n.currentLanguage === 'he' ? category.nameHe : category.nameEn;
    },

    /**
     * Get category color
     */
    getCategoryColor(id) {
        const category = this.getCategory(id);
        return category?.color || '#6b7280';
    },

    /**
     * Get category icon
     */
    getCategoryIcon(id) {
        const category = this.getCategory(id);
        return category?.icon || '📦';
    },

    // Tags (for additional labeling)
    /**
     * Get all tags
     */
    getTags() {
        const data = this.getCustomData();
        return data.tags || [];
    },

    /**
     * Add tag
     */
    addTag(tag) {
        const data = this.getCustomData();
        data.tags = data.tags || [];
        tag.id = tag.id || Storage.generateId();
        data.tags.push(tag);
        this.saveCustomData(data);
        return tag;
    },

    /**
     * Delete tag
     */
    deleteTag(id) {
        const data = this.getCustomData();
        data.tags = (data.tags || []).filter(t => t.id !== id);
        this.saveCustomData(data);
    },

    /**
     * Render category select options
     */
    renderCategoryOptions(selectedId = null) {
        const categories = this.getCategories();
        return categories.map(cat => {
            const name = I18n.currentLanguage === 'he' ? cat.nameHe : cat.nameEn;
            const selected = cat.id === selectedId ? 'selected' : '';
            return `<option value="${cat.id}" ${selected}>${cat.icon} ${name}</option>`;
        }).join('');
    },

    /**
     * Render category badge
     */
    renderCategoryBadge(id) {
        const category = this.getCategory(id);
        if (!category) return id;

        const name = I18n.currentLanguage === 'he' ? category.nameHe : category.nameEn;
        return `<span class="category-badge" style="background: ${category.color}20; color: ${category.color}; border: 1px solid ${category.color};">
            ${category.icon} ${name}
        </span>`;
    }
};

// Make available globally
window.Tags = Tags;
