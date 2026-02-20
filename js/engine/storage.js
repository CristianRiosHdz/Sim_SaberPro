/* ============================================================
   STORAGE — Capa de persistencia con Supabase
   Reemplaza el uso de LocalStorage por llamadas a Supabase.
   ============================================================ */

import { ExamService } from '../services/exam-service.js';
import { AuthService } from '../services/auth-service.js';
import { ContentService } from '../services/content-service.js';
import { calculatePercentage } from '../utils/helpers.js';

export const StorageManager = {
    // Cache local para evitar llamadas excesivas y mantener sincronía UI
    _state: {
        modules: [],
        moduleResults: {},
        attemptHistory: [],
        totalAttempts: 0,
        settings: {
            freeMode: false
        }
    },

    /**
     * Inicializa el estado cargando datos desde Supabase.
     */
    async init() {
        const user = await AuthService.getCurrentUser();
        // Cargar módulos siempre (son públicos)
        try {
            this._state.modules = await ContentService.getModules();
        } catch (e) {
            console.error('Error cargando módulos de DB:', e);
        }

        if (user) {
            await this.refreshState(user.id);
        }
    },

    /**
     * Refresca el estado local desde el servidor.
     * @param {string} userId 
     */
    async refreshState(userId) {
        try {
            const attempts = await ExamService.getUserExamAttempts(userId);
            const bestResults = await ExamService.getBestResults(userId);

            this._state.attemptHistory = attempts;
            this._state.totalAttempts = attempts.length;
            this._state.moduleResults = bestResults;

            // Nota: Las settings podrían guardarse en una tabla aparte.
            // Por ahora las mantenemos en memoria o podrías usar metadata de usuario.
            const sessionSettings = localStorage.getItem('saberPro_settings');
            if (sessionSettings) {
                this._state.settings = JSON.parse(sessionSettings);
            }
        } catch (error) {
            console.error('[Storage] Error al refrescar estado:', error);
        }
    },

    /**
     * Guarda el resultado de un intento de módulo.
     * @param {string} moduleId - ID del módulo
     * @param {Object} result - { score, total_questions, answers, ... }
     */
    async saveModuleResult(moduleId, result) {
        const attemptData = {
            module: moduleId,
            score: result.score,
            total_questions: result.totalQuestions || result.total_questions,
            answers: result.answers
        };

        // 1. Guardar en Supabase
        await ExamService.saveExamAttempt(attemptData);

        // 2. Actualizar cache local
        const user = await AuthService.getCurrentUser();
        if (user) {
            await this.refreshState(user.id);
        }
    },

    /**
     * Obtiene el mejor resultado de un módulo.
     * @param {string} moduleId
     * @returns {Object|null}
     */
    getModuleResult(moduleId) {
        return this._state.moduleResults[moduleId] || null;
    },

    /**
     * Verifica si un módulo está desbloqueado.
     * @param {string} moduleId
     * @param {Array} modulesOrder
     * @returns {boolean}
     */
    isModuleUnlocked(moduleId, modulesOrder) {
        if (this._state.settings.freeMode) return true;

        const moduleIndex = modulesOrder.indexOf(moduleId);
        if (moduleIndex <= 0) return true;

        const previousModuleId = modulesOrder[moduleIndex - 1];
        const previousResult = this.getModuleResult(previousModuleId);

        // Consideramos aprobado si tiene un resultado y superó el umbral (p.e. 60%)
        // En el sistema original se usaba previousResult.passed
        return previousResult !== null && previousResult.score >= 60;
    },

    /**
     * Obtiene estadísticas globales.
     * @param {Array} modulesOrder
     */
    getStats() {
        const modulesOrder = this.getModulesOrder();
        const results = this._state.moduleResults;
        const totalModules = modulesOrder.length;

        const modulesCompleted = Object.keys(results).filter(
            id => results[id] && results[id].score >= 60
        ).length;

        const allScores = Object.values(results).map(r => r.score);
        const averageScore = allScores.length > 0
            ? Math.round(allScores.reduce((sum, s) => sum + s, 0) / allScores.length)
            : 0;

        return {
            modulesCompleted,
            totalModules,
            progressPercentage: calculatePercentage(modulesCompleted, totalModules),
            averageScore,
            totalAttempts: this._state.totalAttempts,
            allPassed: modulesCompleted === totalModules && totalModules > 0
        };
    },

    /**
     * Métodos dinámicos de módulos (reemplazan modules-config.js)
     */
    getModules() {
        return this._state.modules;
    },

    getModulesOrder() {
        return this._state.modules.map(m => m.id);
    },

    getModuleById(moduleId) {
        return this._state.modules.find(m => m.id === moduleId);
    },

    /**
     * Obtiene la configuración.
     */
    getSettings() {
        return this._state.settings;
    },

    /**
     * Actualiza la configuración.
     */
    updateSettings(newSettings) {
        this._state.settings = { ...this._state.settings, ...newSettings };
        // Las settings las mantenemos en localStorage por ahora por ser locales al dispositivo
        // o podrías crear una tabla 'user_settings' en Supabase.
        localStorage.setItem('saberPro_settings', JSON.stringify(this._state.settings));
    },

    /**
     * Limpia el progreso (Solo cache local, en Supabase se mantiene por seguridad 
     * a menos que se implemente un delete masivo).
     */
    resetProgress() {
        this._state.moduleResults = {};
        this._state.attemptHistory = [];
        this._state.totalAttempts = 0;
    }
};
