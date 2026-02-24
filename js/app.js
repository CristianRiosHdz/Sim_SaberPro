/* ============================================================
   APP — Punto de entrada de la aplicación
   Versión: 1.1.0 - Sincronizada con correcciones de sesión
   ============================================================ */

import { ThemeManager } from './ui/theme.js';
import { Renderer } from './ui/renderer.js';

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
