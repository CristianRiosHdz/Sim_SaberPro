/* ============================================================
   QUIZ ENGINE — Motor principal del cuestionario
   Maneja selección de preguntas, barajado, puntaje y timer.
   ============================================================ */

import { pickRandom, shuffleArray, calculatePercentage } from '../utils/helpers.js';

export const QuizEngine = {
    /* ── Estado interno del quiz activo ── */
    _currentQuiz: null,

    /**
     * Inicia un nuevo quiz para un módulo específico.
     * Selecciona preguntas aleatorias, baraja opciones y prepara el estado.
     * @param {Object} moduleConfig - Configuración del módulo (de MODULES_CONFIG)
     * @param {Array} questionBank - Banco completo de preguntas del módulo
     * @returns {Object} Estado del quiz inicializado
     */
    startQuiz(moduleConfig, questionBank) {
        const questionCount = Math.min(moduleConfig.questionCount, questionBank.length);
        const selectedQuestions = pickRandom(questionBank, questionCount);

        // Barajar opciones dentro de cada pregunta
        const preparedQuestions = selectedQuestions.map(question => ({
            ...question,
            options: shuffleArray(question.options)
        }));

        this._currentQuiz = {
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

        return this.getQuizState();
    },

    /**
     * Obtiene el estado público del quiz actual (sin exponer internos).
     * @returns {Object|null}
     */
    getQuizState() {
        if (!this._currentQuiz) return null;

        return {
            moduleId: this._currentQuiz.moduleId,
            moduleName: this._currentQuiz.moduleName,
            currentQuestion: this._currentQuiz.questions[this._currentQuiz.currentIndex] || null,
            currentIndex: this._currentQuiz.currentIndex,
            totalQuestions: this._currentQuiz.questions.length,
            answeredCount: this._currentQuiz.answers.length,
            timeLimit: this._currentQuiz.timeLimit,
            elapsedSeconds: Math.floor((Date.now() - this._currentQuiz.startTime) / 1000),
            remainingSeconds: this._getRemainingSeconds(),
            isFinished: this._currentQuiz.isFinished,
            isLastQuestion: this._currentQuiz.currentIndex >= this._currentQuiz.questions.length - 1
        };
    },

    /**
     * Registra la respuesta del usuario para la pregunta actual.
     * @param {string} selectedOptionId - ID de la opción seleccionada
     * @returns {Object} - { isCorrect, correctAnswer, explanation }
     */
    submitAnswer(selectedOptionId) {
        if (!this._currentQuiz || this._currentQuiz.isFinished) return null;

        const question = this._currentQuiz.questions[this._currentQuiz.currentIndex];
        const isCorrect = question.correctAnswer === selectedOptionId;

        this._currentQuiz.answers.push({
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
    },

    /**
     * Avanza a la siguiente pregunta.
     * @returns {Object|null} - Nuevo estado del quiz, o null si era la última
     */
    nextQuestion() {
        if (!this._currentQuiz || this._currentQuiz.isFinished) return null;

        if (this._currentQuiz.currentIndex < this._currentQuiz.questions.length - 1) {
            this._currentQuiz.currentIndex++;
            return this.getQuizState();
        }

        return null;
    },

    /**
     * Finaliza el quiz y calcula el resultado.
     * @returns {Object} Resultado final del quiz
     */
    finishQuiz() {
        if (!this._currentQuiz) return null;

        this._currentQuiz.isFinished = true;

        const correctAnswers = this._currentQuiz.answers.filter(a => a.isCorrect).length;
        const totalQuestions = this._currentQuiz.questions.length;
        const score = calculatePercentage(correctAnswers, totalQuestions);
        // Aunque no lo usemos directamente para persistencia, se mantiene por compatibilidad UI
        const passed = score >= this._currentQuiz.passingScore;
        const timeTaken = Math.floor((Date.now() - this._currentQuiz.startTime) / 1000);

        const result = {
            moduleId: this._currentQuiz.moduleId,
            moduleName: this._currentQuiz.moduleName,
            score,
            totalQuestions,
            correctAnswers,
            incorrectAnswers: totalQuestions - correctAnswers,
            passed,
            passingScore: this._currentQuiz.passingScore,
            timeTaken,
            answers: this._currentQuiz.answers,
            finishedAt: new Date().toISOString()
        };

        return result;
    },

    /**
     * Calcula los segundos restantes del timer.
     * @returns {number|null} Segundos restantes, null si no hay límite
     * @private
     */
    _getRemainingSeconds() {
        if (!this._currentQuiz || !this._currentQuiz.timeLimit) return null;

        const elapsed = Math.floor((Date.now() - this._currentQuiz.startTime) / 1000);
        return Math.max(0, this._currentQuiz.timeLimit - elapsed);
    },

    /**
     * Verifica si el tiempo se ha agotado.
     * @returns {boolean}
     */
    isTimeUp() {
        if (!this._currentQuiz || !this._currentQuiz.timeLimit) return false;
        return this._getRemainingSeconds() <= 0;
    },

    /**
     * Limpia el quiz activo sin generar resultado.
     */
    clearQuiz() {
        this._currentQuiz = null;
    },

    /**
     * Verifica si la pregunta actual ya fue respondida.
     * @returns {boolean}
     */
    isCurrentAnswered() {
        if (!this._currentQuiz) return false;
        return this._currentQuiz.answers.length > this._currentQuiz.currentIndex;
    }
};
