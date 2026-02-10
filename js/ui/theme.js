/* ============================================================
   THEME — Control de modo oscuro / claro
   ============================================================ */

const ThemeManager = (() => {
    const STORAGE_KEY = 'saberPro_theme';

    /**
     * Inicializa el tema según preferencia guardada o del sistema.
     */
    function init() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            _apply(saved);
            return;
        }

        // Respetar preferencia del sistema operativo
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        _apply(prefersDark ? 'dark' : 'light');
    }

    /**
     * Alterna entre light y dark.
     */
    function toggle() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        _apply(next);
        localStorage.setItem(STORAGE_KEY, next);
    }

    /**
     * Obtiene el tema actual.
     * @returns {string} 'light' o 'dark'
     */
    function getCurrent() {
        return document.documentElement.getAttribute('data-theme') || 'light';
    }

    /**
     * Aplica un tema al documento.
     * @param {string} theme - 'light' o 'dark'
     * @private
     */
    function _apply(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        _updateToggleIcon();
    }

    /**
     * Actualiza el ícono del toggle button.
     * @private
     */
    function _updateToggleIcon() {
        const btn = document.getElementById('theme-toggle');
        if (!btn) return;
        const isDark = getCurrent() === 'dark';
        btn.innerHTML = isDark ? '☀️' : '🌙';
        btn.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    }

    return { init, toggle, getCurrent };
})();
