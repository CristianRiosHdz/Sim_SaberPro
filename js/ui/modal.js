/* ============================================================
   MODAL — Sistema de modales con overlay
   ============================================================ */

import { escapeHtml } from '../utils/helpers.js';

export const ModalManager = {
    /**
     * Muestra un modal genérico.
     * @param {Object} config
     * @param {string} config.iconClass - Clase del ícono (modal-icon-success, etc.)
     * @param {string} config.icon - Emoji del ícono
     * @param {string} config.title - Título del modal
     * @param {string} config.body - HTML del cuerpo
     * @param {Array<{text, class, onClick}>} config.actions - Botones de acción
     */
    show({ iconClass, icon, title, body, actions = [] }) {
        // Remover modal existente si hay uno
        this.close();

        const actionsHtml = actions.map((action, i) =>
            `<button class="btn ${action.class || 'btn-primary'}" data-modal-action="${i}">${action.text}</button>`
        ).join('');

        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.id = 'modal-overlay';
        overlay.innerHTML = `
      <div class="modal-content">
        <div class="modal-icon ${iconClass || ''}">${icon || ''}</div>
        <h2 class="modal-title">${title}</h2>
        <div class="modal-body">${body}</div>
        <div class="modal-actions">${actionsHtml}</div>
      </div>
    `;

        document.body.appendChild(overlay);

        // Vincular eventos a botones
        actions.forEach((action, i) => {
            const btn = overlay.querySelector(`[data-modal-action="${i}"]`);
            if (btn) {
                btn.addEventListener('click', async () => {
                    try {
                        if (action.onClick) await action.onClick();
                    } finally {
                        this.close();
                    }
                });
            }
        });

        // Cerrar al hacer clic fuera del modal
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) this.close();
        });

        // Cerrar con Escape
        this._escHandler = (e) => {
            if (e.key === 'Escape') this.close();
        };
        document.addEventListener('keydown', this._escHandler);
    },

    /**
     * Muestra modal de módulo bloqueado.
     * @param {string} moduleName - Nombre del módulo bloqueado
     * @param {string} previousModuleName - Nombre del módulo previo que debe aprobarse
     */
    showBlocked(moduleName, previousModuleName) {
        this.show({
            iconClass: 'modal-icon-warning',
            icon: '🔒',
            title: 'Módulo Bloqueado',
            body: `<p>Para acceder a <strong>${escapeHtml(moduleName)}</strong>, primero debes aprobar <strong>${escapeHtml(previousModuleName)}</strong>.</p>
             <p style="margin-top: var(--spacing-2);">Completa los módulos en orden secuencial para avanzar.</p>`,
            actions: [
                { text: 'Entendido', class: 'btn-primary', onClick: () => { } }
            ]
        });
    },

    /**
     * Muestra modal de confirmación.
     * @param {string} title
     * @param {string} message
     * @param {Function} onConfirm
     */
    showConfirm(title, message, onConfirm) {
        this.show({
            iconClass: 'modal-icon-warning',
            icon: '⚠️',
            title,
            body: `<p>${message}</p>`,
            actions: [
                { text: 'Cancelar', class: 'btn-secondary', onClick: () => { } },
                { text: 'Confirmar', class: 'btn-danger', onClick: onConfirm }
            ]
        });
    },

    /**
     * Muestra modal de tiempo agotado.
     * @param {Function} onFinish
     */
    showTimeUp(onFinish) {
        this.show({
            iconClass: 'modal-icon-danger',
            icon: '⏰',
            title: '¡Tiempo Agotado!',
            body: '<p>El tiempo para completar este módulo se ha terminado. Las preguntas no respondidas se contarán como incorrectas.</p>',
            actions: [
                { text: 'Ver Resultados', class: 'btn-primary', onClick: onFinish }
            ]
        });
    },

    /**
     * Cierra el modal activo.
     */
    close() {
        const overlay = document.getElementById('modal-overlay');
        if (overlay) {
            overlay.remove();
        }
        if (this._escHandler) {
            document.removeEventListener('keydown', this._escHandler);
            this._escHandler = null;
        }
    }
};
