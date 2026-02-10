/* ============================================================
   MODULES CONFIG — Configuración central de los módulos
   Define orden, metadata, umbral y tiempos de cada módulo.
   ============================================================ */

const MODULES_CONFIG = [
    {
        id: 'lectura-critica',
        name: 'Lectura Crítica',
        description: 'Evalúa la capacidad de comprender, interpretar y analizar textos de diversa índole, identificando argumentos, supuestos y estrategias discursivas.',
        icon: '📖',
        passingScore: 70,
        timeLimit: 60, // minutos para 25-35 preguntas
        questionCount: 25,
        color: '#4F46E5'
    },
    {
        id: 'razonamiento-cuantitativo',
        name: 'Razonamiento Cuantitativo',
        description: 'Mide habilidades para interpretar datos, formular y resolver problemas usando conceptos matemáticos y estadísticos en contextos cotidianos.',
        icon: '📊',
        passingScore: 70,
        timeLimit: 60,
        questionCount: 25,
        color: '#7C3AED'
    },
    {
        id: 'competencias-ciudadanas',
        name: 'Competencias Ciudadanas',
        description: 'Evalúa conocimientos sobre la Constitución, participación democrática, convivencia y habilidades para el análisis de situaciones sociales.',
        icon: '⚖️',
        passingScore: 70,
        timeLimit: 45,
        questionCount: 25,
        color: '#2563EB'
    },
    {
        id: 'comunicacion-escrita',
        name: 'Comunicación Escrita',
        description: 'Valora la capacidad para producir textos cohesivos, coherentes y adecuados a propósitos comunicativos específicos en contextos académicos.',
        icon: '✍️',
        passingScore: 70,
        timeLimit: 45,
        questionCount: 25,
        color: '#0891B2'
    },
    {
        id: 'ingles',
        name: 'Inglés',
        description: 'Mide el nivel de dominio del idioma inglés en comprensión lectora, gramática, vocabulario y uso comunicativo del lenguaje.',
        icon: '🌎',
        passingScore: 70,
        timeLimit: 50,
        questionCount: 25,
        color: '#059669'
    },
    {
        id: 'problematicas-psicologicas',
        name: 'Análisis de Problemáticas Psicológicas',
        description: 'Evalúa la capacidad de análisis y comprensión de situaciones desde enfoques psicológicos, incluyendo diagnóstico, intervención y ética profesional.',
        icon: '🧠',
        passingScore: 70,
        timeLimit: 60,
        questionCount: 25,
        color: '#DC2626'
    }
];

/**
 * Obtiene la lista ordenada de IDs de módulos.
 * @returns {string[]}
 */
function getModulesOrder() {
    return MODULES_CONFIG.map(m => m.id);
}

/**
 * Busca un módulo por su ID.
 * @param {string} moduleId
 * @returns {Object|undefined}
 */
function getModuleById(moduleId) {
    return MODULES_CONFIG.find(m => m.id === moduleId);
}

/**
 * Obtiene el índice (1-based) de un módulo.
 * @param {string} moduleId
 * @returns {number}
 */
function getModuleNumber(moduleId) {
    return MODULES_CONFIG.findIndex(m => m.id === moduleId) + 1;
}
