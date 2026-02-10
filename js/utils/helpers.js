/* ============================================================
   HELPERS — Utilidades genéricas
   Funciones puras sin side-effects.
   ============================================================ */

/**
 * Baraja un array usando el algoritmo Fisher-Yates.
 * Retorna una nueva copia barajada (inmutable).
 * @param {Array} array - Array a barajar
 * @returns {Array} - Nuevo array barajado
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Selecciona N elementos aleatorios de un array.
 * @param {Array} array - Array fuente
 * @param {number} count - Cantidad a seleccionar
 * @returns {Array} - Subconjunto aleatorio
 */
function pickRandom(array, count) {
  const clampedCount = Math.min(count, array.length);
  return shuffleArray(array).slice(0, clampedCount);
}

/**
 * Formatea segundos a "MM:SS".
 * @param {number} totalSeconds
 * @returns {string}
 */
function formatTime(totalSeconds) {
  if (totalSeconds < 0) return '00:00';
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

/**
 * Genera un ID único simple.
 * @returns {string}
 */
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
}

/**
 * Escapa HTML para prevenir XSS al insertar texto dinámico.
 * @param {string} text
 * @returns {string}
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Retrasa la ejecución (promesa para use con async/await).
 * @param {number} ms - Milisegundos
 * @returns {Promise<void>}
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Calcula porcentaje redondeado.
 * @param {number} value
 * @param {number} total
 * @returns {number}
 */
function calculatePercentage(value, total) {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
}

/**
 * Obtiene las letras para las opciones de pregunta.
 * @param {number} index - Índice de la opción (0-based)
 * @returns {string} - Letra (A, B, C, D...)
 */
function getOptionLetter(index) {
  return String.fromCharCode(65 + index);
}
