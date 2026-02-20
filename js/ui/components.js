/* ============================================================
   COMPONENTS — Funciones puras de UI que retornan HTML strings
   La UI es "tonta": solo muestra datos, sin lógica de negocio.
   ============================================================ */

import {
  escapeHtml,
  formatTime,
  getOptionLetter,
  calculatePercentage
} from '../utils/helpers.js';

export const Components = {

  /**
   * Renderiza la tarjeta de un módulo.
   */
  moduleCard(module, index, isUnlocked, result) {
    const number = index + 1;
    const isCompleted = result && result.score >= 60; // Ajustado a score
    const isFailed = result && result.score < 60;

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
  },

  /**
   * Renderiza la barra de progreso global.
   */
  progressBar(completed, total, label = 'Progreso General') {
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
  },

  /**
   * Renderiza la pregunta actual del quiz.
   */
  questionCard(quizState, feedbackData) {
    const q = quizState.currentQuestion;
    if (!q) return '<div class="empty-state"><p>No hay pregunta disponible.</p></div>';

    const contextHtml = q.context
      ? `<div class="question-context">${q.context}</div>`
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
          <div class="option-content">
            <span class="option-text">${escapeHtml(opt.text)}</span>
            ${opt.imageUrl ? `<img src="${opt.imageUrl}" class="option-image" alt="Imagen opción ${opt.id}">` : ''}
          </div>
        </button>
      `;
    }).join('');

    const explanationHtml = hasAnswered
      ? `<div class="explanation-box ${feedbackData.isCorrect ? 'explanation-correct' : 'explanation-incorrect'}">
           <div class="explanation-title">
             ${feedbackData.isCorrect ? '✅ ¡Correcto!' : '❌ Incorrecto'}
           </div>
           <p>${feedbackData.explanation}</p>
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
        <div class="question-body">
          <p class="question-text">${q.text}</p>
          ${q.imageUrl ? `<div class="question-image-wrapper"><img src="${q.imageUrl}" class="question-image" alt="Imagen de la pregunta"></div>` : ''}
        </div>
        <div class="question-options">${optionsHtml}</div>
        ${explanationHtml}
        <div class="quiz-nav">
          <button class="btn btn-ghost" id="btn-quit-quiz">✕ Abandonar</button>
          ${hasAnswered ? `<button class="btn btn-primary btn-lg" id="btn-next-question">${navButtonText}</button>` : ''}
        </div>
      </div>
    `;
  },

  /**
   * Renderiza la pantalla de resultados.
   */
  resultsScreen(result) {
    const scoreVal = result.score || 0;
    const isPassed = scoreVal >= 60;
    const strokeColor = isPassed ? 'var(--color-success)' : 'var(--color-danger)';
    const circumference = 2 * Math.PI * 72;
    const offset = circumference - (scoreVal / 100) * circumference;

    const recommendations = this._getRecommendations(result);
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
            <span class="results-score-value" style="color: ${strokeColor}">${scoreVal}</span>
            <span class="results-score-label">Puntos</span>
          </div>
        </div>

        <p class="results-status ${isPassed ? 'results-status-passed' : 'results-status-failed'}">
          ${isPassed ? '¡Aprobado! 🎉' : 'No Aprobado'}
        </p>
        <p class="results-summary">
          ${isPassed
        ? `Has aprobado el módulo de <strong>${escapeHtml(result.moduleName || result.module)}</strong>. ¡Puedes continuar al siguiente módulo!`
        : `Necesitas 60 puntos para aprobar. Puedes intentarlo de nuevo con nuevas preguntas.`
      }
        </p>

        <div class="results-details">
          <div class="results-detail-row">
            <span class="results-detail-label">Módulo</span>
            <span class="results-detail-value">${escapeHtml(result.moduleName || result.module)}</span>
          </div>
          <div class="results-detail-row">
            <span class="results-detail-label">Respuestas correctas</span>
            <span class="results-detail-value" style="color: var(--color-success)">
              ${result.correctAnswers !== undefined ? result.correctAnswers : '—'} / ${result.totalQuestions || '—'}
            </span>
          </div>
          <div class="results-detail-row">
            <span class="results-detail-label">Puntaje mínimo</span>
            <span class="results-detail-value">60/100</span>
          </div>
          <div class="results-detail-row">
            <span class="results-detail-label">Tiempo empleado</span>
            <span class="results-detail-value">${formatTime(result.timeTaken || 0)}</span>
          </div>
        </div>

        <div class="results-actions">
          <button class="btn btn-secondary" id="btn-go-home">← Volver al Inicio</button>
          ${!isPassed ? `<button class="btn btn-primary" id="btn-retry-module">🔄 Reintentar</button>` : ''}
          ${isPassed ? `<button class="btn btn-primary" id="btn-next-module">Siguiente Módulo →</button>` : ''}
        </div>

        ${recommendations.length > 0 ? `
          <div class="recommendations">
            <h3 class="recommendations-title">💡 Recomendaciones</h3>
            ${recsHtml}
          </div>
        ` : ''}
      </div>
    `;
  },

  /**
   * Renderiza el panel de estadísticas.
   */
  statsPanel(stats) {
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
        </div>

        ${this.progressBar(stats.modulesCompleted, stats.totalModules)}

        <div style="margin-top: var(--spacing-8); text-align: center;">
          <button class="btn btn-secondary" id="btn-go-home">← Volver al Inicio</button>
          ${stats.allPassed ? `<button class="btn btn-danger" id="btn-reset-all" style="margin-left: var(--spacing-3)">🔄 Reiniciar Todo</button>` : ''}
        </div>
      </div>
    `;
  },

  /**
   * Genera recomendaciones según el resultado.
   * @private
   */
  _getRecommendations(result) {
    const recs = [];
    const score = result.score || 0;
    if (score < 50) {
      recs.push({ icon: '📚', text: 'Repasa los fundamentos del módulo antes de intentar de nuevo.' });
      recs.push({ icon: '🔍', text: 'Presta atención a las explicaciones de cada respuesta para entender la lógica.' });
    } else if (score < 70) {
      recs.push({ icon: '📝', text: 'Estás cerca del umbral. Enfócate en las áreas donde fallaste.' });
      recs.push({ icon: '⏱️', text: 'Tómate más tiempo para analizar cada pregunta antes de responder.' });
    } else if (score < 90) {
      recs.push({ icon: '🌟', text: '¡Buen desempeño! Refuerza los temas donde tuviste errores.' });
    } else {
      recs.push({ icon: '🏆', text: '¡Excelente! Dominas este módulo. Sigue así.' });
    }
    return recs;
  },

  /**
   * Renderiza la vista de biblioteca de estudio.
   */
  studyLayout(modules, activeModuleId, content) {
    const activeModule = modules.find(m => m.id === activeModuleId) || modules[0];

    // Si no hay contenido aún para este módulo
    if (!content) {
      content = {
        title: activeModule.name,
        sections: [{ subtitle: 'Próximamente', content: 'El administrador aún no ha agregado contenido de estudio para este módulo.' }],
        resources: { pdfs: [], academic: [], videos: [] }
      };
    }

    const menuHtml = modules.map(mod => `
            <button class="study-menu-item ${mod.id === activeModuleId ? 'active' : ''}" data-study-id="${mod.id}">
                <span class="study-menu-icon">${mod.icon}</span>
                <span class="study-menu-text">${escapeHtml(mod.name)}</span>
            </button>
        `).join('');

    // Combinar el nuevo campo 'body' con las secciones antiguas si existen
    let sectionsHtml = '';

    // 1. Mostrar el 'body' nuevo si existe (es HTML de Quill)
    if (content.body) {
      sectionsHtml += `<div class="study-content-body">${content.body}</div>`;
    }

    // 2. Mostrar secciones antiguas (legacy)
    if (content.sections && content.sections.length > 0) {
      sectionsHtml += content.sections.map(sec => `
              <section class="study-section">
                  <h3 class="study-section-title">${escapeHtml(sec.subtitle)}</h3>
                  <div class="study-section-body">${sec.content}</div>
              </section>
          `).join('');
    }

    // Si no hay contenido ni secciones
    if (!sectionsHtml) {
      sectionsHtml = `
          <section class="study-section">
              <h3 class="study-section-title">Próximamente</h3>
              <div class="study-section-body">El administrador aún no ha agregado contenido de estudio para este módulo.</div>
          </section>
      `;
    }

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
                ${(academicHtml || pdfsHtml || videosHtml) ? `<h3 class="study-section-title">🔗 Material Complementario</h3>` : ''}
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
                                <h2 class="study-module-title">${escapeHtml(content.title || activeModule.name)}</h2>
                                <p class="study-module-desc">${escapeHtml(content.summary || activeModule.description)}</p>
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
  },

  /**
   * Renderiza el formulario de configuración de perfil.
   */
  profileForm(email, existingProfile = {}) {
    return `
      <div class="auth-container fade-in">
        <div class="auth-card card" style="max-width: 550px">
          <div class="auth-header">
            <div class="auth-logo">👤</div>
            <h2>Completa tu Perfil</h2>
            <p>Queremos conocerte mejor para personalizar tu experiencia.</p>
          </div>
          <form id="profile-setup-form" class="auth-form">
            <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4)">
              <div class="form-group">
                <label for="full_name">Nombre(s)</label>
                <input type="text" id="full_name" required value="${escapeHtml(existingProfile.full_name || '')}" placeholder="Ej: Juan">
              </div>
              <div class="form-group">
                <label for="last_name">Apellido(s)</label>
                <input type="text" id="last_name" required value="${escapeHtml(existingProfile.last_name || '')}" placeholder="Ej: Pérez">
              </div>
            </div>
            <div class="form-group">
              <label for="university">Universidad / Institución</label>
              <input type="text" id="university" required value="${escapeHtml(existingProfile.university || '')}" placeholder="Nombre de tu universidad">
            </div>
            <div class="form-group">
              <label>Correo Electrónico (Solo lectura)</label>
              <input type="text" value="${escapeHtml(email)}" disabled style="opacity: 0.7; cursor: not-allowed">
            </div>
            <div id="profile-error" class="auth-error-msg hidden"></div>
            <button type="submit" class="btn btn-primary btn-block">Guardar y Continuar</button>
          </form>
        </div>
      </div>
    `;
  },

  /**
   * Tabla de estadísticas de usuarios para el admin.
   */
  userStatsTable(users, modules) {
    const rows = users.map(user => `
      <tr style="border-bottom: 1px solid var(--color-border-light)">
        <td style="padding: var(--spacing-3)">
          <div style="font-weight: bold">${escapeHtml(user.full_name || 'Sin nombre')} ${escapeHtml(user.last_name || '')}</div>
          <div style="font-size: 10px; color: var(--color-text-muted)">${escapeHtml(user.email || 'Sin email')}</div>
        </td>
        <td style="padding: var(--spacing-3); font-size: var(--font-size-xs)">
          ${escapeHtml(user.university || 'N/A')}
        </td>
        <td style="padding: var(--spacing-3); text-align: center">
          ${user.totalAttempts}
        </td>
        <td style="padding: var(--spacing-3)">
          <div style="display: flex; gap: var(--spacing-2); flex-wrap: wrap">
            ${modules.map(mod => {
      const best = user.bestResults[mod.id];
      return `
                <div class="stat-pill" style="font-size: 10px; padding: 2px 6px; background: var(--color-bg-base); border-radius: 4px; border: 1px solid ${best >= (mod.passingScore || 60) ? 'var(--color-success)' : 'var(--color-border)'}">
                  <span title="${escapeHtml(mod.name)}">${mod.icon}</span>
                  <strong>${best !== undefined ? best + '%' : '-'}</strong>
                  <button class="btn-reset-mini" data-reset-user="${user.id}" data-reset-mod="${mod.id}" title="Reiniciar progreso en ${mod.name}" 
                          style="background: none; border: none; cursor: pointer; color: var(--color-danger); padding: 0 0 0 4px; font-size: 8px">✕</button>
                </div>
              `;
    }).join('')}
          </div>
        </td>
      </tr>
    `).join('');

    return `
      <div class="card" style="margin-top: var(--spacing-8); overflow: hidden; padding: 0">
        <div style="padding: var(--spacing-6); border-bottom: 1px solid var(--color-border)">
          <h3 style="margin: 0">Estudiantes Registrados</h3>
          <p style="font-size: var(--font-size-sm); color: var(--color-text-muted); margin: var(--spacing-1) 0 0 0">Progreso y mejores resultados por módulo.</p>
        </div>
        <div style="overflow-x: auto">
          <table style="width: 100%; border-collapse: collapse; text-align: left">
            <thead style="background: var(--color-bg-alt); font-size: var(--font-size-xs); text-transform: uppercase; color: var(--color-text-muted)">
              <tr>
                <th style="padding: var(--spacing-3)">Usuario</th>
                <th style="padding: var(--spacing-3)">Universidad</th>
                <th style="padding: var(--spacing-3); text-align: center">Tests</th>
                <th style="padding: var(--spacing-3)">Mejores Resultados / Acción</th>
              </tr>
            </thead>
            <tbody>
              ${users.length === 0 ? '<tr><td colspan="4" style="padding: 40px; text-align: center">No hay estudiantes registrados aún.</td></tr>' : rows}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  /**
   * Tabla de estadísticas de usuarios para el admin (pestaña separada).
   */
  userStatsTab(users, modules) {
    const rows = users.map(user => {
      const moduleCells = modules.map(mod => {
        const best = user.bestResults[mod.id];
        const hasPassed = best !== undefined && best >= (mod.passingScore || 60);
        const scoreColor = best !== undefined
          ? (hasPassed ? 'var(--color-success)' : 'var(--color-danger)')
          : 'var(--color-text-muted)';
        return `
          <td style="padding: var(--spacing-2) var(--spacing-3); text-align: center; border-bottom: 1px solid var(--color-border-light); white-space: nowrap">
            <span style="color: ${scoreColor}; font-weight: bold; font-size: var(--font-size-sm)">
              ${best !== undefined ? best + '%' : '—'}
            </span>
            ${best !== undefined ? `
              <button class="btn-reset-mini" data-reset-user="${user.id}" data-reset-mod="${mod.id}"
                title="Reiniciar progreso de ${escapeHtml(mod.name)}"
                style="background:none;border:none;cursor:pointer;color:var(--color-danger);font-size:9px;padding:0 0 0 4px">&#x2715;</button>
            ` : ''}
          </td>`;
      }).join('');

      return `
        <tr>
          <td style="padding: var(--spacing-3); border-bottom: 1px solid var(--color-border-light); white-space: nowrap">
            <div style="font-weight: bold">${escapeHtml(user.full_name || 'Sin nombre')} ${escapeHtml(user.last_name || '')}</div>
            <div style="font-size: 10px; color: var(--color-text-muted)">${escapeHtml(user.email || '')}</div>
          </td>
          <td style="padding: var(--spacing-3); border-bottom: 1px solid var(--color-border-light); font-size: var(--font-size-xs); white-space: nowrap">
            ${escapeHtml(user.university || 'N/A')}
          </td>
          <td style="padding: var(--spacing-3); border-bottom: 1px solid var(--color-border-light); text-align: center">${user.totalAttempts}</td>
          ${moduleCells}
        </tr>`;
    }).join('');

    const moduleHeaders = modules.map(mod =>
      `<th style="padding: var(--spacing-2) var(--spacing-3); text-align: center; max-width: 90px; word-break: break-word; font-size: 10px" title="${escapeHtml(mod.name)}">${escapeHtml(mod.name)}</th>`
    ).join('');

    return `
      <div id="tab-students" style="overflow-x: auto">
        <table style="width: 100%; border-collapse: collapse; text-align: left; min-width: 600px">
          <thead style="background: var(--color-bg-alt); font-size: var(--font-size-xs); text-transform: uppercase; color: var(--color-text-muted)">
            <tr>
              <th style="padding: var(--spacing-3)">Usuario</th>
              <th style="padding: var(--spacing-3)">Universidad</th>
              <th style="padding: var(--spacing-3); text-align: center">Tests</th>
              ${moduleHeaders}
            </tr>
          </thead>
          <tbody>
            ${users.length === 0
        ? '<tr><td colspan="100" style="padding: 40px; text-align: center">No hay estudiantes registrados aún.</td></tr>'
        : rows}
          </tbody>
        </table>
      </div>
    `;
  },

  /**
   * Renderiza el panel de administración con pestañas.
   */
  adminDashboard(modules, users = []) {
    const modulesHtml = modules.map(mod => `
      <div class="admin-module-item card">
        <div class="admin-module-info">
          <span class="admin-module-icon">${mod.icon}</span>
          <div>
            <h4 class="admin-module-name">${escapeHtml(mod.name)}</h4>
            <p class="admin-module-meta">${mod.id} | ${mod.question_count} preguntas | Orden: ${mod.order}</p>
          </div>
        </div>
        <div class="admin-module-actions">
          <button class="btn btn-ghost btn-sm" style="color: #ef4444" data-delete-module="${mod.id}">&#x1F5D1; Borrar</button>
          <button class="btn btn-ghost btn-sm" data-edit-module="${mod.id}">&#x270F; Editar</button>
          <button class="btn btn-ghost btn-sm" data-edit-study="${mod.id}">&#x1F4DA; Contenido</button>
          <button class="btn btn-ghost btn-sm" data-view-bank="${mod.id}">&#x1F4C1; Banco</button>
          <button class="btn btn-primary btn-sm" data-add-q="${mod.id}">&#x2795; Pregunta</button>
        </div>
      </div>
    `).join('');

    return `
      <div class="admin-container fade-in">
        <div class="page-header" style="flex-direction: row; justify-content: space-between; align-items: center">
          <div>
            <h1 class="page-title">&#x1F6E0; Panel de Control</h1>
            <p class="page-description">Gestiona los módulos, preguntas y contenido del simulador.</p>
          </div>
          <button class="btn btn-primary" id="btn-new-module">&#x2728; Nuevo Módulo</button>
        </div>

        <!-- TABS -->
        <div style="display: flex; gap: var(--spacing-2); margin-top: var(--spacing-6); border-bottom: 2px solid var(--color-border); padding-bottom: 0">
          <button class="admin-tab active" data-tab="modules"
            style="background:none;border:none;cursor:pointer;padding: var(--spacing-2) var(--spacing-4);font-weight:bold;border-bottom: 3px solid var(--color-primary);color:var(--color-primary);margin-bottom:-2px">
            &#x1F4CB; Módulos
          </button>
          <button class="admin-tab" data-tab="students"
            style="background:none;border:none;cursor:pointer;padding: var(--spacing-2) var(--spacing-4);color:var(--color-text-muted);border-bottom: 3px solid transparent;margin-bottom:-2px">
            &#x1F464; Estudiantes (${users.length})
          </button>
        </div>

        <!-- TAB: MÓDULOS -->
        <div id="tab-modules" style="margin-top: var(--spacing-6)">
          <div class="admin-grid" style="display: grid; grid-template-columns: 1fr 320px; gap: var(--spacing-8)">
            <div class="admin-main">
              <div class="admin-modules-list" style="display: flex; flex-direction: column; gap: var(--spacing-3)">
                ${modulesHtml}
              </div>
            </div>
            <aside class="admin-sidebar">
              <div class="card">
                <h3 style="margin-bottom: var(--spacing-4)">Resumen General</h3>
                <div class="admin-stat-row" style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-2)">
                  <span>Total Módulos:</span><strong>${modules.length}</strong>
                </div>
                <div class="admin-stat-row" style="display: flex; justify-content: space-between; margin-bottom: var(--spacing-2)">
                  <span>Estudiantes:</span><strong>${users.length}</strong>
                </div>
                <hr style="margin: var(--spacing-4) 0; opacity: 0.1">
                <p style="font-size: var(--font-size-sm); color: var(--color-text-muted)">
                  Como administrador, tus cambios impactarán a todos los estudiantes registrados.
                </p>
              </div>
            </aside>
          </div>
        </div>

        <!-- TAB: ESTUDIANTES -->
        <div id="tab-students-wrapper" style="margin-top: var(--spacing-6); display: none">
          <div class="card" style="overflow: hidden; padding: 0">
            <div style="padding: var(--spacing-5); border-bottom: 1px solid var(--color-border)">
              <h3 style="margin:0">Estudiantes Registrados</h3>
              <p style="font-size: var(--font-size-sm); color: var(--color-text-muted); margin: 4px 0 0">
                Progreso y mejor puntaje por módulo. Haz clic en &#x2715; para reiniciar el progreso de un módulo específico.
              </p>
            </div>
            ${this.userStatsTab(users, modules)}
          </div>
        </div>

        <div style="margin-top: var(--spacing-8)">
          <button class="btn btn-ghost" id="btn-go-home">← Volver al Simulador</button>
        </div>
      </div>
    `;
  },

  /**
   * Formulario para editar el contenido de la Biblioteca de Estudio de un módulo.
   */
  studyContentForm(module, existingContent = null) {
    const sections = existingContent?.sections || [];

    return `
      <div class="admin-modal card fade-in" style="max-width: 900px; margin: 40px auto">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-6)">
          <div>
            <h2 style="margin-bottom: var(--spacing-1)">📚 Biblioteca de Estudio</h2>
            <p style="color: var(--color-text-muted)">Módulo: <strong>${escapeHtml(module.name)}</strong></p>
          </div>
          <button type="button" class="btn btn-secondary" id="btn-add-section">➕ Nueva Sección / Tema</button>
        </div>

        <form id="study-content-form" class="auth-form">
          <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4); margin-bottom: var(--spacing-6)">
            <div class="form-group">
              <label for="sc-title">Título Principal del Módulo</label>
              <input type="text" id="sc-title" placeholder="Ej: Fundamentos de ${escapeHtml(module.name)}"
                value="${escapeHtml(existingContent?.title || '')}"
                style="width: 100%; padding: 10px; border: 2px solid var(--color-border); border-radius: 8px">
            </div>
            <div class="form-group">
              <label for="sc-summary">Resumen de Introducción</label>
              <input type="text" id="sc-summary" placeholder="Una breve descripción..."
                value="${escapeHtml(existingContent?.summary || '')}"
                style="width: 100%; padding: 10px; border: 2px solid var(--color-border); border-radius: 8px">
            </div>
          </div>

          <div id="sections-container" style="display: flex; flex-direction: column; gap: var(--spacing-8)">
            ${sections.length === 0
        ? `<div id="no-sections-msg" style="padding: 40px; text-align: center; background: var(--color-bg-alt); border-radius: var(--radius-lg); border: 2px dashed var(--color-border)">
                   <p style="color: var(--color-text-muted)">Aún no hay temas creados. Haz clic en "Nueva Sección" para empezar.</p>
                 </div>`
        : sections.map((sec, idx) => this.studySectionItem(idx, sec)).join('')
      }
          </div>

          <div style="display: flex; gap: var(--spacing-3); justify-content: flex-end; margin-top: var(--spacing-10); padding-top: var(--spacing-6); border-top: 1px solid var(--color-border)">
            <button type="button" class="btn btn-ghost" id="btn-cancel-admin">Cancelar</button>
            <button type="submit" class="btn btn-primary btn-lg">💾 Guardar Todos los Cambios</button>
          </div>
        </form>
      </div>
    `;
  },

  /**
   * Renderiza una sección individual dentro del formulario de contenido.
   */
  studySectionItem(index, section = null) {
    const sectionId = `section-${index}-${Date.now()}`;
    return `
      <div class="study-section-edit card" data-section-index="${index}" style="position: relative; border-left: 4px solid var(--color-primary); background: var(--color-bg-base)">
        <button type="button" class="btn-remove-section" style="position: absolute; top: 10px; right: 10px; background: none; border: none; color: var(--color-danger); cursor: pointer; font-size: 18px" title="Eliminar sección">✕</button>
        
        <div class="form-group" style="margin-bottom: var(--spacing-4)">
          <label style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-primary); font-weight: bold">Título del Tema / Subtítulo</label>
          <input type="text" class="section-subtitle" placeholder="Ej: Conceptos Básicos" 
            value="${escapeHtml(section?.subtitle || '')}"
            style="width: 100%; border: none; border-bottom: 2px solid var(--color-border); padding: 8px 0; font-size: 18px; font-weight: bold; background: transparent; border-radius: 0; outline: none">
        </div>

        <div class="form-group" style="margin-bottom: 0">
          <label style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-text-muted)">Contenido del Tema</label>
          <div class="section-editor" id="editor-${sectionId}" style="height: 300px; background: white; margin-top: 8px">
            ${section?.content || ''}
          </div>
        </div>
      </div>
    `;
  },

  /**
   * Formulario para agregar/editar preguntas.
   */
  questionForm(moduleId, existingQuestion = null) {
    const isEdit = !!existingQuestion;
    const options = existingQuestion?.options || [
      { id: 'A', text: '' },
      { id: 'B', text: '' },
      { id: 'C', text: '' },
      { id: 'D', text: '' }
    ];

    return `
      <div class="admin-modal card fade-in" style="max-width: 800px; margin: 40px auto">
        <h2 style="margin-bottom: var(--spacing-6)">${isEdit ? 'Editar' : 'Nueva'} Pregunta — ${moduleId}</h2>
        <form id="admin-question-form" class="auth-form">
          <div class="form-group">
            <label for="q-context">Contexto / Texto de Lectura (Opcional)</label>
            <div id="q-context-editor" style="height: 200px; background: white;">${existingQuestion?.context || ''}</div>
          </div>
          <div class="form-group">
            <label for="q-text">Enunciado de la Pregunta</label>
            <div id="q-text-editor" style="height: 150px; background: white;">${existingQuestion?.text || ''}</div>
          </div>
          <div class="form-group">
            <label>Imagen de la Pregunta (Opcional)</label>
            <div class="image-upload-wrapper">
              <input type="file" id="q-image-input" accept="image/*" style="margin-bottom: var(--spacing-2)">
              <input type="hidden" id="q-image-data" value="${existingQuestion?.imageUrl || ''}">
              <div id="q-image-preview" class="image-preview ${existingQuestion?.imageUrl ? '' : 'hidden'}">
                <img src="${existingQuestion?.imageUrl || ''}" style="max-height: 150px; border-radius: 8px">
                <button type="button" class="btn btn-sm btn-ghost" id="btn-remove-q-img" style="color: var(--color-danger)">Quitar</button>
              </div>
            </div>
          </div>
          
          <div class="options-editor" style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4)">
            ${options.map(opt => `
              <div class="form-group card" style="padding: var(--spacing-3); background: var(--color-bg-base)">
                <label style="font-weight: bold; margin-bottom: var(--spacing-2); display: block">Opción ${opt.id}</label>
                <div style="display: flex; flex-direction: column; gap: var(--spacing-2)">
                  <input type="text" data-opt-id="${opt.id}" required value="${escapeHtml(opt.text)}" placeholder="Texto de la opción">
                  <div class="opt-image-control">
                    <input type="file" data-opt-img-input="${opt.id}" accept="image/*" style="font-size: 10px">
                    <input type="hidden" data-opt-img-data="${opt.id}" value="${opt.imageUrl || ''}">
                    <div id="preview-opt-${opt.id}" class="image-preview ${opt.imageUrl ? '' : 'hidden'}" style="margin-top: 5px; display: flex; align-items: center; gap: 10px">
                      <img src="${opt.imageUrl || ''}" style="height: 40px; border-radius: 4px">
                      <button type="button" class="btn btn-sm btn-ghost" data-remove-opt-img="${opt.id}" style="padding: 0; color: var(--color-danger)">✕</button>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-4)">
            <div class="form-group">
              <label for="q-correct">Respuesta Correcta</label>
              <select id="q-correct" required style="width: 100%; padding: 10px; border: 2px solid var(--color-border); border-radius: 8px">
                <option value="A" ${existingQuestion?.correct_answer === 'A' ? 'selected' : ''}>Opción A</option>
                <option value="B" ${existingQuestion?.correct_answer === 'B' ? 'selected' : ''}>Opción B</option>
                <option value="C" ${existingQuestion?.correct_answer === 'C' ? 'selected' : ''}>Opción C</option>
                <option value="D" ${existingQuestion?.correct_answer === 'D' ? 'selected' : ''}>Opción D</option>
              </select>
            </div>
            <div class="form-group" style="grid-column: span 2">
              <label for="q-explanation">Explicación de la Respuesta</label>
              <div id="q-explanation-editor" style="height: 120px; background: white;">${existingQuestion?.explanation || ''}</div>
            </div>
          </div>

          <div class="admin-actions" style="display: flex; gap: var(--spacing-3); margin-top: var(--spacing-6)">
            <button type="button" class="btn btn-ghost" id="btn-cancel-admin">Cancelar</button>
            <button type="submit" class="btn btn-primary">Guardar Pregunta</button>
          </div>
        </form>
      </div>
    `;
  },

  /**
   * Formulario para crear/editar módulos.
   */
  moduleForm(existingModule = null) {
    const isEdit = !!existingModule;
    return `
      <div class="admin-modal card fade-in" style="max-width: 650px; margin: 40px auto; border: 1px solid var(--color-border); padding: var(--spacing-8)">
        <div style="margin-bottom: var(--spacing-8); padding: 0 var(--spacing-2)">
          <h2 style="font-size: var(--font-size-2xl); color: var(--color-text-base)">${isEdit ? 'Editar' : 'Nuevo'} Módulo</h2>
          <p style="color: var(--color-text-muted); font-size: var(--font-size-sm)">Configura las reglas y apariencia del módulo.</p>
        </div>

        <form id="admin-module-form" class="auth-form" style="padding: 0 var(--spacing-2)">
          <div class="form-group">
            <label for="m-id">ID Único (URL)</label>
            <input type="text" id="m-id" required ${isEdit ? 'disabled' : ''} value="${escapeHtml(existingModule?.id || '')}" placeholder="ej: lectura-critica" 
                   style="background: ${isEdit ? 'var(--color-bg-base)' : 'transparent'}; cursor: ${isEdit ? 'not-allowed' : 'text'}">
          </div>

          <div class="form-group">
            <label for="m-name">Nombre del Módulo</label>
            <input type="text" id="m-name" required value="${escapeHtml(existingModule?.name || '')}" placeholder="Nombre visible">
          </div>

          <div class="form-group">
            <label for="m-desc">Descripción</label>
            <textarea id="m-desc" rows="3" style="width: 100%; border: 2px solid var(--color-border); border-radius: 8px; background: transparent; color: var(--color-text-base); padding: 12px; font-family: inherit; font-size: inherit">${escapeHtml(existingModule?.description || '')}</textarea>
          </div>

          <div class="form-grid" style="display: grid; grid-template-columns: 2fr 1fr; gap: var(--spacing-6); margin-bottom: var(--spacing-6)">
            <div class="form-group" style="margin-bottom: 0">
              <label for="m-icon">Icono (Emoji)</label>
              <input type="text" id="m-icon" required value="${escapeHtml(existingModule?.icon || '📚')}" placeholder="📚">
            </div>
            <div class="form-group" style="margin-bottom: 0">
              <label for="m-color">Color Tema</label>
              <div style="display: flex; gap: 8px; align-items: center">
                <input type="color" id="m-color" value="${existingModule?.color || '#4f46e5'}" 
                       style="width: 100%; height: 44px; padding: 2px; background: transparent; border: 2px solid var(--color-border); border-radius: 8px; cursor: pointer">
              </div>
            </div>
          </div>

          <div class="form-grid" style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: var(--spacing-6); margin-bottom: var(--spacing-6)">
            <div class="form-group" style="margin-bottom: 0">
              <label for="m-q-count">Preguntas / Test</label>
              <input type="number" id="m-q-count" required value="${existingModule?.questionCount || 25}" style="width: 100%; box-sizing: border-box">
            </div>
            <div class="form-group" style="margin-bottom: 0">
              <label for="m-time">Tiempo (Min)</label>
              <input type="number" id="m-time" required value="${existingModule?.timeLimit || 40}" style="width: 100%; box-sizing: border-box">
            </div>
            <div class="form-group" style="margin-bottom: 0">
              <label for="m-pass">Meta (%)</label>
              <input type="number" id="m-pass" required value="${existingModule?.passingScore || 60}" style="width: 100%; box-sizing: border-box">
            </div>
          </div>

          <div class="form-group">
            <label for="m-order">Orden en la Lista</label>
            <input type="number" id="m-order" required value="${existingModule?.order || 0}" placeholder="Ej: 1, 2, 3...">
          </div>

          <div class="admin-actions" style="display: flex; gap: var(--spacing-4); margin-top: var(--spacing-8); border-top: 1px solid var(--color-border); padding-top: var(--spacing-6)">
            <button type="button" class="btn btn-ghost" id="btn-cancel-admin" style="flex: 1">Cancelar</button>
            <button type="submit" class="btn btn-primary" style="flex: 2">Guardar Cambios</button>
          </div>
        </form>
      </div>
    `;
  },

  /**
   * Vista de lista de preguntas para un módulo.
   */
  questionList(module, questions) {
    const questionsHtml = questions.map((q, i) => `
      <div class="admin-question-item card" style="margin-bottom: var(--spacing-3); padding: var(--spacing-4)">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: var(--spacing-4)">
          <div style="flex: 1">
            <strong>#${i + 1}</strong>
            <p style="font-size: var(--font-size-sm); margin: var(--spacing-2) 0">${escapeHtml(q.text)}</p>
            <div style="display: flex; gap: var(--spacing-2); flex-wrap: wrap">
              ${q.options.map(opt => `
                <span style="font-size: 10px; padding: 2px 6px; background: var(--color-bg-base); border-radius: 4px; border: 1px solid ${opt.id === q.correctAnswer ? 'var(--color-success)' : 'var(--color-border)'}">
                  ${opt.id}: ${escapeHtml(opt.text)}
                </span>
              `).join('')}
            </div>
          </div>
          <div style="display: flex; gap: var(--spacing-2)">
            <button class="btn btn-ghost btn-sm" data-edit-q-id="${q.id}">✏️</button>
            <button class="btn btn-ghost btn-sm" style="color: #ef4444; background: rgba(239, 68, 68, 0.1);" data-delete-q-id="${q.id}">🗑️</button>
          </div>
        </div>
      </div>
    `).join('');

    return `
      <div class="admin-container fade-in">
        <div class="page-header" style="flex-direction: row; justify-content: space-between; align-items: center">
          <div>
            <h1 class="page-title">📂 Banco de Preguntas</h1>
            <p class="page-description">${escapeHtml(module.name)} — ${questions.length} preguntas encontradas.</p>
          </div>
          <button class="btn btn-primary" data-add-q="${module.id}">➕ Nueva Pregunta</button>
        </div>

        <div style="margin-top: var(--spacing-6)">
          ${questions.length === 0 ? '<p>No hay preguntas en este módulo.</p>' : questionsHtml}
        </div>

        <div style="margin-top: var(--spacing-8)">
          <button class="btn btn-ghost" id="btn-cancel-admin">← Volver al Panel</button>
        </div>
      </div>
    `;
  }
};
