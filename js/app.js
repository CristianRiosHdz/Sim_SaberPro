/* ============================================================
   APP — Punto de entrada de la aplicación
   Creado por: Cristian Rios (2026)
   Inicializa tema, renderer y vincula evento del toggle.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar tema (dark/light)
    ThemeManager.init();

    // Vincular toggle de tema
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => ThemeManager.toggle());
    }

    // Inicializar router SPA
    Renderer.init();
});
