/* ============================================================
   QUIZ ENGINE — Motor principal del cuestionario
   Maneja selección de preguntas, barajado, puntaje y timer.
   ============================================================ */

const QuizEngine = (() => {
    /* ── Estado interno del quiz activo ── */
    let _currentQuiz = null;

    /**
     * Inicia un nuevo quiz para un módulo específico.
     * Selecciona preguntas aleatorias, baraja opciones y prepara el estado.
     * @param {Object} moduleConfig - Configuración del módulo (de MODULES_CONFIG)
     * @param {Array} questionBank - Banco completo de preguntas del módulo
     * @returns {Object} Estado del quiz inicializado
     */
    function startQuiz(moduleConfig, questionBank) {
        const questionCount = Math.min(moduleConfig.questionCount, questionBank.length);
        const selectedQuestions = pickRandom(questionBank, questionCount);

        // Barajar opciones dentro de cada pregunta
        const preparedQuestions = selectedQuestions.map(question => ({
            ...question,
            options: shuffleArray(question.options)
        }));

        _currentQuiz = {
            moduleId: moduleConfig.id,
            moduleName: moduleConfig.name,
            passingScore: moduleConfig.passingScore,
            questions: preparedQuestions,
            currentIndex: 0,
            answers: [],           // { questionId, selectedOptionId, isCorrect }
            startTime: Date.now(),
            timeLimit: moduleConfig.timeLimit ? moduleConfig.timeLimit * 60 : null, // en segundos
            isFinished: false
        };

        return getQuizState();
    }

    /**
     * Obtiene el estado público del quiz actual (sin exponer internos).
     * @returns {Object|null}
     */
    function getQuizState() {
        if (!_currentQuiz) return null;

        return {
            moduleId: _currentQuiz.moduleId,
            moduleName: _currentQuiz.moduleName,
            currentQuestion: _currentQuiz.questions[_currentQuiz.currentIndex] || null,
            currentIndex: _currentQuiz.currentIndex,
            totalQuestions: _currentQuiz.questions.length,
            answeredCount: _currentQuiz.answers.length,
            timeLimit: _currentQuiz.timeLimit,
            elapsedSeconds: Math.floor((Date.now() - _currentQuiz.startTime) / 1000),
            remainingSeconds: _getRemainingSeconds(),
            isFinished: _currentQuiz.isFinished,
            isLastQuestion: _currentQuiz.currentIndex >= _currentQuiz.questions.length - 1
        };
    }

    /**
     * Registra la respuesta del usuario para la pregunta actual.
     * @param {string} selectedOptionId - ID de la opción seleccionada
     * @returns {Object} - { isCorrect, correctAnswer, explanation }
     */
    function submitAnswer(selectedOptionId) {
        if (!_currentQuiz || _currentQuiz.isFinished) return null;

        const question = _currentQuiz.questions[_currentQuiz.currentIndex];
        const isCorrect = question.correctAnswer === selectedOptionId;

        _currentQuiz.answers.push({
            questionId: question.id,
            selectedOptionId,
            correctOptionId: question.correctAnswer,
            isCorrect
        });

        return {
            isCorrect,
            correctAnswer: question.correctAnswer,
            explanation: question.explanation || 'Sin explicación disponible.'
        };
    }

    /**
     * Avanza a la siguiente pregunta.
     * @returns {Object|null} - Nuevo estado del quiz, o null si era la última
     */
    function nextQuestion() {
        if (!_currentQuiz || _currentQuiz.isFinished) return null;

        if (_currentQuiz.currentIndex < _currentQuiz.questions.length - 1) {
            _currentQuiz.currentIndex++;
            return getQuizState();
        }

        return null;
    }

    /**
     * Finaliza el quiz y calcula el resultado.
     * @returns {Object} Resultado final del quiz
     */
    function finishQuiz() {
        if (!_currentQuiz) return null;

        _currentQuiz.isFinished = true;

        const correctAnswers = _currentQuiz.answers.filter(a => a.isCorrect).length;
        const totalQuestions = _currentQuiz.questions.length;
        const score = calculatePercentage(correctAnswers, totalQuestions);
        const passed = score >= _currentQuiz.passingScore;
        const timeTaken = Math.floor((Date.now() - _currentQuiz.startTime) / 1000);

        const result = {
            moduleId: _currentQuiz.moduleId,
            moduleName: _currentQuiz.moduleName,
            score,
            totalQuestions,
            correctAnswers,
            incorrectAnswers: totalQuestions - correctAnswers,
            passed,
            passingScore: _currentQuiz.passingScore,
            timeTaken,
            answers: _currentQuiz.answers,
            finishedAt: new Date().toISOString()
        };

        return result;
    }

    /**
     * Calcula los segundos restantes del timer.
     * @returns {number|null} Segundos restantes, null si no hay límite
     * @private
     */
    function _getRemainingSeconds() {
        if (!_currentQuiz || !_currentQuiz.timeLimit) return null;

        const elapsed = Math.floor((Date.now() - _currentQuiz.startTime) / 1000);
        return Math.max(0, _currentQuiz.timeLimit - elapsed);
    }

    /**
     * Verifica si el tiempo se ha agotado.
     * @returns {boolean}
     */
    function isTimeUp() {
        if (!_currentQuiz || !_currentQuiz.timeLimit) return false;
        return _getRemainingSeconds() <= 0;
    }

    /**
     * Limpia el quiz activo sin generar resultado.
     */
    function clearQuiz() {
        _currentQuiz = null;
    }

    /**
     * Verifica si la pregunta actual ya fue respondida.
     * @returns {boolean}
     */
    function isCurrentAnswered() {
        if (!_currentQuiz) return false;
        return _currentQuiz.answers.length > _currentQuiz.currentIndex;
    }

    // API pública
    return {
        startQuiz,
        getQuizState,
        submitAnswer,
        nextQuestion,
        finishQuiz,
        isTimeUp,
        clearQuiz,
        isCurrentAnswered
    };
})();
