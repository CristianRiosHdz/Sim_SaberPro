/* ============================================================
   STORAGE — Wrapper inmutable sobre LocalStorage
   Capa de datos para persistencia del progreso del usuario.
   Toda interacción con LocalStorage pasa por aquí.
   ============================================================ */

const StorageManager = (() => {
    const STORAGE_KEY = 'saberPro_progress';

    /**
     * Obtiene el estado completo almacenado.
     * @returns {Object} Estado persistido
     */
    function _getState() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return _getDefaultState();
            return JSON.parse(raw);
        } catch {
            console.warn('[Storage] Error al leer localStorage, reiniciando estado.');
            return _getDefaultState();
        }
    }

    /**
     * Guarda el estado completo.
     * @param {Object} state
     */
    function _setState(state) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (error) {
            console.error('[Storage] Error al escribir en localStorage:', error);
        }
    }

    /**
     * Estado por defecto cuando no hay datos previos.
     * @returns {Object}
     */
    function _getDefaultState() {
        return {
            moduleResults: {},
            attemptHistory: [],
            totalAttempts: 0,
            settings: {
                freeMode: false // Por defecto los módulos van en orden
            },
            createdAt: new Date().toISOString()
        };
    }

    /**
     * Guarda el resultado de un intento de módulo.
     * @param {string} moduleId - ID del módulo
     * @param {Object} result - { score, totalQuestions, correctAnswers, passed, answers, timeTaken }
     */
    function saveModuleResult(moduleId, result) {
        const state = _getState();
        const attemptRecord = {
            moduleId,
            ...result,
            timestamp: new Date().toISOString()
        };

        // Guardar mejor resultado para el módulo
        const existingResult = state.moduleResults[moduleId];
        if (!existingResult || result.score > existingResult.score) {
            state.moduleResults[moduleId] = attemptRecord;
        }

        // Guardar en historial
        state.attemptHistory.push(attemptRecord);
        state.totalAttempts += 1;

        _setState(state);
    }

    /**
     * Obtiene el mejor resultado de un módulo.
     * @param {string} moduleId
     * @returns {Object|null}
     */
    function getModuleResult(moduleId) {
        const state = _getState();
        return state.moduleResults[moduleId] || null;
    }

    /**
     * Verifica si un módulo está desbloqueado.
     * El módulo N está desbloqueado si el módulo N-1 fue aprobado.
     * @param {string} moduleId
     * @param {Array} modulesOrder - Lista ordenada de IDs de módulos
     * @returns {boolean}
     */
    function isModuleUnlocked(moduleId, modulesOrder) {
        const state = _getState();

        // Si el modo libre está activado, todo está desbloqueado
        if (state.settings && state.settings.freeMode) {
            return true;
        }

        const moduleIndex = modulesOrder.indexOf(moduleId);

        // El primer módulo siempre está desbloqueado
        if (moduleIndex <= 0) return true;

        // Verificar si el módulo anterior fue aprobado
        const previousModuleId = modulesOrder[moduleIndex - 1];
        const previousResult = getModuleResult(previousModuleId);

        return previousResult !== null && previousResult.passed === true;
    }

    /**
     * Obtiene todos los resultados de módulos.
     * @returns {Object} Mapa de moduleId -> resultado
     */
    function getAllResults() {
        return _getState().moduleResults;
    }

    /**
     * Obtiene el historial completo de intentos.
     * @returns {Array}
     */
    function getAttemptHistory() {
        return _getState().attemptHistory;
    }

    /**
     * Calcula estadísticas globales del usuario.
     * @param {Array} modulesOrder - Lista ordenada de IDs de módulos
     * @returns {Object}
     */
    function getStats(modulesOrder) {
        const state = _getState();
        const results = state.moduleResults;

        const modulesCompleted = Object.keys(results).filter(
            id => results[id] && results[id].passed
        ).length;

        const totalModules = modulesOrder.length;

        const allScores = Object.values(results).map(r => r.score);
        const averageScore = allScores.length > 0
            ? Math.round(allScores.reduce((sum, s) => sum + s, 0) / allScores.length)
            : 0;

        const totalCorrect = Object.values(results)
            .reduce((sum, r) => sum + (r.correctAnswers || 0), 0);
        const totalQuestions = Object.values(results)
            .reduce((sum, r) => sum + (r.totalQuestions || 0), 0);

        return {
            modulesCompleted,
            totalModules,
            progressPercentage: calculatePercentage(modulesCompleted, totalModules),
            averageScore,
            totalAttempts: state.totalAttempts,
            totalCorrect,
            totalQuestions,
            allPassed: modulesCompleted === totalModules
        };
    }

    /**
     * Reinicia todo el progreso del usuario.
     */
    function resetProgress() {
        _setState(_getDefaultState());
    }

    /**
     * Verifica si el usuario puede reiniciar todo el simulacro.
     * Solo permitido si aprobó todos los módulos.
     * @param {Array} modulesOrder
     * @returns {boolean}
     */
    function canRestartSimulator(modulesOrder) {
        const stats = getStats(modulesOrder);
        return stats.allPassed;
    }

    /**
     * Obtiene la configuración actual del simulador.
     * @returns {Object}
     */
    function getSettings() {
        const state = _getState();
        return state.settings || _getDefaultState().settings;
    }

    /**
     * Actualiza la configuración del simulador.
     * @param {Object} newSettings
     */
    function updateSettings(newSettings) {
        const state = _getState();
        state.settings = { ...state.settings, ...newSettings };
        _setState(state);
    }

    // API pública
    return {
        saveModuleResult,
        getModuleResult,
        isModuleUnlocked,
        getAllResults,
        getAttemptHistory,
        getStats,
        resetProgress,
        canRestartSimulator,
        getSettings,
        updateSettings
    };
})();
