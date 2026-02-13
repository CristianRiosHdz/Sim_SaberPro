/* ============================================================
   RENDERER — Router SPA y renderizado de vistas
   ============================================================ */

const Renderer = (() => {
    const QUESTION_BANKS = {
        'lectura-critica': () => LECTURA_CRITICA_QUESTIONS,
        'razonamiento-cuantitativo': () => RAZONAMIENTO_CUANTITATIVO_QUESTIONS,
        'competencias-ciudadanas': () => COMPETENCIAS_CIUDADANAS_QUESTIONS,
        'comunicacion-escrita': () => COMUNICACION_ESCRITA_QUESTIONS,
        'ingles': () => INGLES_QUESTIONS,
        'problematicas-psicologicas': () => PROBLEMATICAS_PSICOLOGICAS_QUESTIONS,
        'cultura-general': () => CULTURA_GENERAL_QUESTIONS
    };

    let _timerInterval = null;
    let _currentFeedback = null;

    /**
     * Inicializa el router hash-based.
     */
    function init() {
        window.addEventListener('hashchange', _handleRoute);
        _handleRoute();
    }

    /**
     * Navega a una ruta hash.
     * @param {string} hash
     */
    function navigateTo(hash) {
        window.location.hash = hash;
    }

    // ────────────────────────────────────────────────
    // ROUTING
    // ────────────────────────────────────────────────

    function _handleRoute() {
        const hash = window.location.hash || '#home';
        const [route, param] = hash.substring(1).split('/');
        _clearTimer();
        _currentFeedback = null;

        switch (route) {
            case 'quiz':
                _renderQuiz(param);
                break;
            case 'results':
                _renderResults(param);
                break;
            case 'stats':
                _renderStats();
                break;
            case 'study':
                _renderStudy(param);
                break;
            case 'home':
            default:
                _renderHome();
                break;
        }
    }

    // ────────────────────────────────────────────────
    // HOME VIEW
    // ────────────────────────────────────────────────

    function _renderHome() {
        const main = document.getElementById('app');
        const modulesOrder = getModulesOrder();
        const stats = StorageManager.getStats(modulesOrder);
        const settings = StorageManager.getSettings();
        const isFreeMode = settings.freeMode;

        const cardsHtml = MODULES_CONFIG.map((mod, i) => {
            const isUnlocked = StorageManager.isModuleUnlocked(mod.id, modulesOrder);
            const result = StorageManager.getModuleResult(mod.id);
            return Components.moduleCard(mod, i, isUnlocked, result);
        }).join('');

        const description = isFreeMode
            ? 'Modo Libre activo: Puedes practicar en cualquier módulo sin restricciones de orden.'
            : 'Modo Secuencial activo: Completa cada módulo para desbloquear el siguiente y avanzar en tu preparación.';

        main.innerHTML = `
      <div class="slide-up">
        <div class="page-header">
          <h1 class="page-title">Simulador Saber Pro</h1>
          <p class="page-description">${description}</p>
        </div>

        <div class="mode-selector-wrapper" style="margin-bottom: var(--spacing-8)">
            <label class="mode-selector-label">Modo de Práctica:</label>
            <div class="mode-selector">
                <button class="mode-btn ${!isFreeMode ? 'active' : ''}" id="mode-sequential">
                    <span class="mode-icon">🔗</span>
                    <span class="mode-text">Secuencial</span>
                </button>
                <button class="mode-btn ${isFreeMode ? 'active' : ''}" id="mode-free">
                    <span class="mode-icon">🔓</span>
                    <span class="mode-text">Libre</span>
                </button>
            </div>
        </div>

        ${Components.progressBar(stats.modulesCompleted, stats.totalModules)}

        <div class="modules-grid" style="margin-top: var(--spacing-8)">
          ${cardsHtml}
        </div>

        <div style="text-align: center; margin-top: var(--spacing-8)">
          <button class="btn btn-primary" id="btn-go-study" style="margin-bottom: var(--spacing-4); width: 100%; max-width: 400px;">📚 Biblioteca de Estudio</button>
          <br>
          <button class="btn btn-ghost" id="btn-view-stats">📊 Ver Estadísticas</button>
          ${stats.allPassed ? `<button class="btn btn-danger btn-sm" id="btn-reset-all" style="margin-left: var(--spacing-3)">🔄 Reiniciar Todo</button>` : ''}
        </div>
      </div>
    `;

        _bindHomeEvents();
    }

    function _bindHomeEvents() {
        // Selector de modo
        document.getElementById('mode-sequential')?.addEventListener('click', () => {
            StorageManager.updateSettings({ freeMode: false });
            _renderHome();
        });
        document.getElementById('mode-free')?.addEventListener('click', () => {
            StorageManager.updateSettings({ freeMode: true });
            _renderHome();
        });

        // Click en tarjetas de módulos
        document.querySelectorAll('[data-module-id]').forEach(card => {
            const handler = () => {
                const moduleId = card.getAttribute('data-module-id');
                const modulesOrder = getModulesOrder();
                const isUnlocked = StorageManager.isModuleUnlocked(moduleId, modulesOrder);

                if (!isUnlocked) {
                    const moduleIndex = modulesOrder.indexOf(moduleId);
                    const prevModule = getModuleById(modulesOrder[moduleIndex - 1]);
                    const currentModule = getModuleById(moduleId);
                    ModalManager.showBlocked(currentModule.name, prevModule.name);
                    return;
                }

                navigateTo(`#quiz/${moduleId}`);
            };
            card.addEventListener('click', handler);
            card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handler(); } });
        });

        // Estadísticas
        const statsBtn = document.getElementById('btn-view-stats');
        if (statsBtn) statsBtn.addEventListener('click', () => navigateTo('#stats'));

        // Biblioteca de estudio
        const studyBtn = document.getElementById('btn-go-study');
        if (studyBtn) studyBtn.addEventListener('click', () => navigateTo('#study'));

        // Reiniciar
        const resetBtn = document.getElementById('btn-reset-all');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                ModalManager.showConfirm(
                    'Reiniciar Simulacro',
                    '¿Estás seguro de que quieres reiniciar todo tu progreso? Esta acción no se puede deshacer.',
                    () => { StorageManager.resetProgress(); _renderHome(); }
                );
            });
        }
    }

    // ────────────────────────────────────────────────
    // QUIZ VIEW
    // ────────────────────────────────────────────────

    function _renderQuiz(moduleId) {
        const module = getModuleById(moduleId);
        if (!module) { navigateTo('#home'); return; }

        const modulesOrder = getModulesOrder();
        if (!StorageManager.isModuleUnlocked(moduleId, modulesOrder)) {
            navigateTo('#home');
            return;
        }

        // Iniciar quiz si no hay uno activo o es otro módulo
        const currentState = QuizEngine.getQuizState();
        if (!currentState || currentState.moduleId !== moduleId || currentState.isFinished) {
            const bank = QUESTION_BANKS[moduleId]();
            QuizEngine.startQuiz(module, bank);
        }

        _currentFeedback = null;
        _renderCurrentQuestion();
        _startTimer();
    }

    function _renderCurrentQuestion() {
        const state = QuizEngine.getQuizState();
        if (!state) { navigateTo('#home'); return; }

        const main = document.getElementById('app');
        main.innerHTML = Components.questionCard(state, _currentFeedback);
        _bindQuizEvents();
    }

    function _bindQuizEvents() {
        // Click en opciones
        document.querySelectorAll('.option-btn:not(.option-disabled)').forEach(btn => {
            btn.addEventListener('click', () => {
                const optionId = btn.getAttribute('data-option-id');
                const feedback = QuizEngine.submitAnswer(optionId);
                if (!feedback) return;

                _currentFeedback = {
                    selectedId: optionId,
                    isCorrect: feedback.isCorrect,
                    explanation: feedback.explanation
                };

                _renderCurrentQuestion();
            });
        });

        // Botón siguiente / finalizar
        const nextBtn = document.getElementById('btn-next-question');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                const state = QuizEngine.getQuizState();
                if (state.isLastQuestion) {
                    _finishQuiz();
                    return;
                }
                QuizEngine.nextQuestion();
                _currentFeedback = null;
                _renderCurrentQuestion();
            });
        }

        // Abandonar
        const quitBtn = document.getElementById('btn-quit-quiz');
        if (quitBtn) {
            quitBtn.addEventListener('click', () => {
                ModalManager.showConfirm(
                    'Abandonar Quiz',
                    '¿Seguro que quieres abandonar? Perderás tu progreso en este intento.',
                    () => { QuizEngine.clearQuiz(); _clearTimer(); navigateTo('#home'); }
                );
            });
        }
    }

    function _finishQuiz() {
        _clearTimer();
        const result = QuizEngine.finishQuiz();
        if (!result) { navigateTo('#home'); return; }

        StorageManager.saveModuleResult(result.moduleId, result);
        navigateTo(`#results/${result.moduleId}`);
    }

    function _startTimer() {
        _clearTimer();
        const state = QuizEngine.getQuizState();
        if (!state || !state.timeLimit) return;

        _timerInterval = setInterval(() => {
            if (QuizEngine.isTimeUp()) {
                _clearTimer();
                ModalManager.showTimeUp(() => _finishQuiz());
                return;
            }

            const timerEl = document.getElementById('quiz-timer');
            if (timerEl) {
                const remaining = QuizEngine.getQuizState()?.remainingSeconds;
                if (remaining != null) {
                    timerEl.textContent = `⏱️ ${formatTime(remaining)}`;
                    if (remaining <= 60) {
                        timerEl.classList.add('question-timer-warning');
                    }
                }
            }
        }, 1000);
    }

    function _clearTimer() {
        if (_timerInterval) {
            clearInterval(_timerInterval);
            _timerInterval = null;
        }
    }

    // ────────────────────────────────────────────────
    // RESULTS VIEW
    // ────────────────────────────────────────────────

    function _renderResults(moduleId) {
        const result = StorageManager.getModuleResult(moduleId);
        if (!result) { navigateTo('#home'); return; }

        const main = document.getElementById('app');
        main.innerHTML = Components.resultsScreen(result);
        _bindResultsEvents(moduleId, result);
    }

    function _bindResultsEvents(moduleId, result) {
        document.getElementById('btn-go-home')?.addEventListener('click', () => navigateTo('#home'));

        document.getElementById('btn-retry-module')?.addEventListener('click', () => {
            QuizEngine.clearQuiz();
            navigateTo(`#quiz/${moduleId}`);
        });

        document.getElementById('btn-next-module')?.addEventListener('click', () => {
            const modulesOrder = getModulesOrder();
            const currentIndex = modulesOrder.indexOf(moduleId);
            if (currentIndex < modulesOrder.length - 1) {
                navigateTo(`#quiz/${modulesOrder[currentIndex + 1]}`);
            } else {
                navigateTo('#stats');
            }
        });
    }

    // ────────────────────────────────────────────────
    // STATS VIEW
    // ────────────────────────────────────────────────

    function _renderStats() {
        const modulesOrder = getModulesOrder();
        const stats = StorageManager.getStats(modulesOrder);
        const main = document.getElementById('app');
        main.innerHTML = Components.statsPanel(stats);

        document.getElementById('btn-go-home')?.addEventListener('click', () => navigateTo('#home'));

        document.getElementById('btn-reset-all')?.addEventListener('click', () => {
            ModalManager.showConfirm(
                'Reiniciar Simulacro',
                '¿Estás seguro de que quieres reiniciar todo tu progreso? Esta acción no se puede deshacer.',
                () => { StorageManager.resetProgress(); navigateTo('#home'); }
            );
        });
    }

    // ────────────────────────────────────────────────
    // STUDY VIEW
    // ────────────────────────────────────────────────

    function _renderStudy(moduleId) {
        const activeId = moduleId || 'lectura-critica';
        const main = document.getElementById('app');
        main.innerHTML = Components.studyLayout(MODULES_CONFIG, activeId);
        _bindStudyEvents();
    }

    function _bindStudyEvents() {
        // Switch de módulos en el menú
        document.querySelectorAll('[data-study-id]').forEach(btn => {
            btn.addEventListener('click', () => {
                const studyId = btn.getAttribute('data-study-id');
                navigateTo(`#study/${studyId}`);
            });
        });

        // Volver al inicio
        document.getElementById('btn-study-close')?.addEventListener('click', () => navigateTo('#home'));

        // Practicar módulo directamente
        document.getElementById('btn-start-quiz-from-study')?.addEventListener('click', (e) => {
            const moduleId = e.currentTarget.getAttribute('data-module-id');
            navigateTo(`#quiz/${moduleId}`);
        });
    }

    return { init, navigateTo };
})();
