/* ============================================================
   THEME — Control de modo oscuro / claro
   ============================================================ */

const STORAGE_KEY = 'saberPro_theme';

export const ThemeManager = {
    /**
     * Inicializa el tema según preferencia guardada o del sistema.
     */
    init() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            this._apply(saved);
            return;
        }

        // Respetar preferencia del sistema operativo
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this._apply(prefersDark ? 'dark' : 'light');
    },

    /**
     * Alterna entre light y dark.
     */
    toggle() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        this._apply(next);
        localStorage.setItem(STORAGE_KEY, next);
    },

    /**
     * Obtiene el tema actual.
     * @returns {string} 'light' o 'dark'
     */
    getCurrent() {
        return document.documentElement.getAttribute('data-theme') || 'light';
    },

    /**
     * Aplica un tema al documento.
     * @param {string} theme - 'light' o 'dark'
     * @private
     */
    _apply(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this._updateToggleIcon();
    },

    /**
     * Actualiza el ícono del toggle button.
     * @private
     */
    _updateToggleIcon() {
        const btn = document.getElementById('theme-toggle');
        if (!btn) return;
        const isDark = this.getCurrent() === 'dark';
        btn.innerHTML = isDark ? '☀️' : '🌙';
        btn.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    }
};
