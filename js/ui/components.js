/* ============================================================
   COMPONENTS — Funciones puras de UI que retornan HTML strings
   La UI es "tonta": solo muestra datos, sin lógica de negocio.
   ============================================================ */

const Components = (() => {

  /**
   * Renderiza la tarjeta de un módulo.
   */
  function moduleCard(module, index, isUnlocked, result) {
    const number = index + 1;
    const isCompleted = result && result.passed;
    const isFailed = result && !result.passed;

    let statusClass = 'status-locked';
    let statusText = '🔒 Bloqueado';
    let cardClass = 'card card-interactive module-card';

    if (isCompleted) {
      statusClass = 'status-completed';
      statusText = '✅ Aprobado';
      cardClass += ' module-card-completed';
    } else if (isFailed) {
      statusClass = 'status-failed';
      statusText = '❌ No aprobado';
    } else if (isUnlocked) {
      statusClass = 'status-available';
      statusText = '▶️ Disponible';
    } else {
      cardClass += ' module-card-locked';
    }

    const scoreHtml = result
      ? `<span class="module-card-score">${result.score}/100</span>`
      : '';

    return `
      <div class="${cardClass}" data-module-id="${module.id}" role="button" tabindex="0" aria-label="Módulo ${number}: ${escapeHtml(module.name)}">
        <span class="module-card-number">${isCompleted ? '✓' : number}</span>
        <div class="module-card-icon">${module.icon}</div>
        <h3 class="module-card-title">${escapeHtml(module.name)}</h3>
        <p class="module-card-description">${escapeHtml(module.description)}</p>
        <div class="module-card-footer">
          <span class="module-card-status ${statusClass}">${statusText}</span>
          ${scoreHtml}
        </div>
      </div>
    `;
  }

  /**
   * Renderiza la barra de progreso global.
   */
  function progressBar(completed, total, label = 'Progreso General') {
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    return `
      <div class="progress-bar-wrapper">
        <div class="progress-bar-label">
          <span>${escapeHtml(label)}</span>
          <span>${completed}/${total} módulos (${percentage}%)</span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" style="width: ${percentage}%"></div>
        </div>
      </div>
    `;
  }

  /**
   * Renderiza la pregunta actual del quiz.
   */
  function questionCard(quizState, feedbackData) {
    const q = quizState.currentQuestion;
    if (!q) return '<div class="empty-state"><p>No hay pregunta disponible.</p></div>';

    const contextHtml = q.context
      ? `<div class="question-context">${escapeHtml(q.context)}</div>`
      : '';

    const timerHtml = quizState.timeLimit
      ? `<div class="question-timer ${quizState.remainingSeconds <= 60 ? 'question-timer-warning' : ''}" id="quiz-timer">
           ⏱️ ${formatTime(quizState.remainingSeconds)}
         </div>`
      : '';

    const hasAnswered = feedbackData !== null;

    const optionsHtml = q.options.map((opt, i) => {
      let optClass = 'option-btn';
      if (hasAnswered) {
        optClass += ' option-disabled';
        if (opt.id === q.correctAnswer) {
          optClass += ' option-btn-correct';
        } else if (opt.id === feedbackData?.selectedId && !feedbackData.isCorrect) {
          optClass += ' option-btn-incorrect';
        }
      }

      return `
        <button class="${optClass}" data-option-id="${opt.id}" ${hasAnswered ? 'disabled' : ''}>
          <span class="option-letter">${getOptionLetter(i)}</span>
          <span class="option-text">${escapeHtml(opt.text)}</span>
        </button>
      `;
    }).join('');

    const explanationHtml = hasAnswered
      ? `<div class="explanation-box ${feedbackData.isCorrect ? 'explanation-correct' : 'explanation-incorrect'}">
           <div class="explanation-title">
             ${feedbackData.isCorrect ? '✅ ¡Correcto!' : '❌ Incorrecto'}
           </div>
           <p>${escapeHtml(feedbackData.explanation)}</p>
         </div>`
      : '';

    const navButtonText = quizState.isLastQuestion ? 'Finalizar' : 'Siguiente →';

    return `
      <div class="question-container fade-in">
        <div class="question-header">
          <span class="question-counter">Pregunta ${quizState.currentIndex + 1} de ${quizState.totalQuestions}</span>
          ${timerHtml}
        </div>
        <div class="progress-bar-wrapper" style="margin-bottom: var(--spacing-6)">
          <div class="progress-bar-track" style="height: 6px">
            <div class="progress-bar-fill" style="width: ${calculatePercentage(quizState.currentIndex + 1, quizState.totalQuestions)}%"></div>
          </div>
        </div>
        ${contextHtml}
        <p class="question-text">${escapeHtml(q.text)}</p>
        <div class="question-options">${optionsHtml}</div>
        ${explanationHtml}
        <div class="quiz-nav">
          <button class="btn btn-ghost" id="btn-quit-quiz">✕ Abandonar</button>
          ${hasAnswered ? `<button class="btn btn-primary btn-lg" id="btn-next-question">${navButtonText}</button>` : ''}
        </div>
      </div>
    `;
  }

  /**
   * Renderiza la pantalla de resultados.
   */
  function resultsScreen(result) {
    const strokeColor = result.passed ? 'var(--color-success)' : 'var(--color-danger)';
    const circumference = 2 * Math.PI * 72;
    const offset = circumference - (result.score / 100) * circumference;

    const recommendations = _getRecommendations(result);
    const recsHtml = recommendations.map(r =>
      `<div class="recommendation-item"><span class="recommendation-icon">${r.icon}</span><span>${escapeHtml(r.text)}</span></div>`
    ).join('');

    return `
      <div class="results-container slide-up">
        <div class="results-score-ring">
          <svg width="180" height="180" viewBox="0 0 180 180">
            <circle cx="90" cy="90" r="72" fill="none" stroke="var(--color-border)" stroke-width="12"/>
            <circle cx="90" cy="90" r="72" fill="none" stroke="${strokeColor}" stroke-width="12"
                    stroke-dasharray="${circumference}" stroke-dashoffset="${offset}"
                    stroke-linecap="round" style="transition: stroke-dashoffset 1s ease"/>
          </svg>
          <div class="results-score-ring-text">
            <span class="results-score-value" style="color: ${strokeColor}">${result.score}</span>
            <span class="results-score-label">Puntos</span>
          </div>
        </div>

        <p class="results-status ${result.passed ? 'results-status-passed' : 'results-status-failed'}">
          ${result.passed ? '¡Aprobado! 🎉' : 'No Aprobado'}
        </p>
        <p class="results-summary">
          ${result.passed
        ? `Has aprobado el módulo de <strong>${escapeHtml(result.moduleName)}</strong>. ¡Puedes continuar al siguiente módulo!`
        : `Necesitas ${result.passingScore} puntos para aprobar. Puedes intentarlo de nuevo con nuevas preguntas.`
      }
        </p>

        <div class="results-details">
          <div class="results-detail-row">
            <span class="results-detail-label">Módulo</span>
            <span class="results-detail-value">${escapeHtml(result.moduleName)}</span>
          </div>
          <div class="results-detail-row">
            <span class="results-detail-label">Respuestas correctas</span>
            <span class="results-detail-value" style="color: var(--color-success)">${result.correctAnswers} / ${result.totalQuestions}</span>
          </div>
          <div class="results-detail-row">
            <span class="results-detail-label">Respuestas incorrectas</span>
            <span class="results-detail-value" style="color: var(--color-danger)">${result.incorrectAnswers}</span>
          </div>
          <div class="results-detail-row">
            <span class="results-detail-label">Puntaje mínimo</span>
            <span class="results-detail-value">${result.passingScore}/100</span>
          </div>
          <div class="results-detail-row">
            <span class="results-detail-label">Tiempo empleado</span>
            <span class="results-detail-value">${formatTime(result.timeTaken)}</span>
          </div>
        </div>

        <div class="results-actions">
          <button class="btn btn-secondary" id="btn-go-home">← Volver al Inicio</button>
          ${!result.passed ? `<button class="btn btn-primary" id="btn-retry-module">🔄 Reintentar</button>` : ''}
          ${result.passed ? `<button class="btn btn-primary" id="btn-next-module">Siguiente Módulo →</button>` : ''}
        </div>

        ${recommendations.length > 0 ? `
          <div class="recommendations">
            <h3 class="recommendations-title">💡 Recomendaciones</h3>
            ${recsHtml}
          </div>
        ` : ''}
      </div>
    `;
  }

  /**
   * Renderiza el panel de estadísticas.
   */
  function statsPanel(stats) {
    return `
      <div class="slide-up">
        <div class="page-header">
          <h1 class="page-title">📊 Estadísticas</h1>
          <p class="page-description">Resumen de tu desempeño en los simulacros.</p>
        </div>

        <div class="stats-grid" style="margin-bottom: var(--spacing-8)">
          <div class="stat-card">
            <div class="stat-value">${stats.modulesCompleted}/${stats.totalModules}</div>
            <div class="stat-label">Módulos Aprobados</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${stats.averageScore}%</div>
            <div class="stat-label">Puntaje Promedio</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${stats.totalAttempts}</div>
            <div class="stat-label">Intentos Totales</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">${stats.totalCorrect}</div>
            <div class="stat-label">Respuestas Correctas</div>
          </div>
        </div>

        ${progressBar(stats.modulesCompleted, stats.totalModules)}

        <div style="margin-top: var(--spacing-8); text-align: center;">
          <button class="btn btn-secondary" id="btn-go-home">← Volver al Inicio</button>
          ${stats.allPassed ? `<button class="btn btn-danger" id="btn-reset-all" style="margin-left: var(--spacing-3)">🔄 Reiniciar Todo</button>` : ''}
        </div>
      </div>
    `;
  }

  /**
   * Genera recomendaciones según el resultado.
   * @private
   */
  function _getRecommendations(result) {
    const recs = [];
    if (result.score < 50) {
      recs.push({ icon: '📚', text: 'Repasa los fundamentos del módulo antes de intentar de nuevo.' });
      recs.push({ icon: '🔍', text: 'Presta atención a las explicaciones de cada respuesta para entender la lógica.' });
    } else if (result.score < 70) {
      recs.push({ icon: '📝', text: 'Estás cerca del umbral. Enfócate en las áreas donde fallaste.' });
      recs.push({ icon: '⏱️', text: 'Tómate más tiempo para analizar cada pregunta antes de responder.' });
    } else if (result.score < 90) {
      recs.push({ icon: '🌟', text: '¡Buen desempeño! Refuerza los temas donde tuviste errores.' });
    } else {
      recs.push({ icon: '🏆', text: '¡Excelente! Dominas este módulo. Sigue así.' });
    }
    return recs;
  }

  /**
   * Renderiza la vista de biblioteca de estudio.
   */
  function studyLayout(modules, activeModuleId) {
    const activeModule = modules.find(m => m.id === activeModuleId) || modules[0];
    const content = STUDY_CONTENT[activeModule.id];

    const menuHtml = modules.map(mod => `
            <button class="study-menu-item ${mod.id === activeModuleId ? 'active' : ''}" data-study-id="${mod.id}">
                <span class="study-menu-icon">${mod.icon}</span>
                <span class="study-menu-text">${escapeHtml(mod.name)}</span>
            </button>
        `).join('');

    const sectionsHtml = content.sections.map(sec => `
            <section class="study-section">
                <h3 class="study-section-title">${escapeHtml(sec.subtitle)}</h3>
                <div class="study-section-body">${sec.content}</div>
            </section>
        `).join('');

    const resources = content.resources;
    let resourcesHtml = '';
    if (resources) {
      const pdfsHtml = (resources.pdfs || []).map(pdf => `
            <a href="${pdf.url}" target="_blank" class="resource-item pdf-item">
                <span class="resource-icon">📄</span>
                <div class="resource-info">
                    <span class="resource-name">${escapeHtml(pdf.name)}</span>
                    <span class="resource-type">Guía PDF Oficial</span>
                </div>
            </a>
        `).join('');

      const academicHtml = (resources.academic || []).map(item => `
            <a href="${item.url}" target="_blank" class="resource-item academic-item">
                <span class="resource-icon">🎓</span>
                <div class="resource-info">
                    <span class="resource-name">${escapeHtml(item.name)}</span>
                    <span class="resource-type">Recurso Académico / Blog</span>
                </div>
            </a>
        `).join('');

      const videosHtml = (resources.videos || []).map(vid => `
            <a href="https://www.youtube.com/watch?v=${vid.id}" target="_blank" class="resource-item video-item">
                <span class="resource-icon">🎬</span>
                <div class="resource-info">
                    <span class="resource-name">${escapeHtml(vid.title)}</span>
                    <span class="resource-type">Video de Apoyo</span>
                </div>
            </a>
        `).join('');

      resourcesHtml = `
            <div class="study-resources-section">
                <h3 class="study-section-title">🔗 Material Complementario</h3>
                <div class="study-resources-grid">
                    ${academicHtml}
                    ${pdfsHtml}
                    ${videosHtml}
                </div>
            </div>
        `;
    }

    return `
            <div class="study-container slide-up">
                <div class="page-header">
                    <h1 class="page-title">📚 Biblioteca de Estudio</h1>
                    <p class="page-description">Consulta conceptos clave y tips para cada módulo del examen.</p>
                </div>

                <div class="study-grid">
                    <aside class="study-sidebar">
                        <nav class="study-menu">
                            ${menuHtml}
                        </nav>
                        <button class="btn btn-ghost btn-block" id="btn-study-close" style="margin-top: var(--spacing-4)">← Volver al Inicio</button>
                    </aside>

                    <article class="study-main card">
                        <div class="study-header" style="border-bottom: 2px solid ${activeModule.color}20">
                            <div class="study-header-icon" style="background: ${activeModule.color}10; color: ${activeModule.color}">${activeModule.icon}</div>
                            <div>
                                <h2 class="study-module-title">${escapeHtml(content.title)}</h2>
                                <p class="study-module-desc">${escapeHtml(activeModule.description)}</p>
                            </div>
                        </div>
                        <div class="study-body">
                            ${sectionsHtml}
                            ${resourcesHtml}
                        </div>
                        <div class="study-footer">
                            <button class="btn btn-primary" id="btn-start-quiz-from-study" data-module-id="${activeModule.id}"> Practicar este módulo ▶️</button>
                        </div>
                    </article>
                </div>
            </div>
        `;
  }

  return { moduleCard, progressBar, questionCard, resultsScreen, statsPanel, studyLayout };
})();
