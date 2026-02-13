/* ============================================================
   STUDY CONTENT — Recopilación de recursos de alta calidad
   ============================================================ */

const STUDY_CONTENT = {
    'lectura-critica': {
        title: 'Lectura Crítica',
        sections: [
            {
                subtitle: '1. Fundamentos de la Lectura Crítica',
                content: `
                    <p>La lectura crítica no es solo entender palabras, es analizar la intención y validez de un argumento. Evalúa tres dimensiones fundamentales:</p>
                    <ul>
                        <li><strong>Contenidos locales:</strong> Comprender palabras o frases específicas.</li>
                        <li><strong>Sentido global:</strong> Entender cómo se conectan las partes del texto.</li>
                        <li><strong>Reflexión y evaluación:</strong> Tomar distancia del texto para analizarlo objetivamente.</li>
                    </ul>
                `
            }
        ],
        resources: {
            academic: [
                { name: 'Stanford Encyclopedia: Critical Thinking', url: 'https://plato.stanford.edu/entries/critical-thinking/' },
                { name: 'Centro de Escritura Javeriano: Guía de Lectura', url: 'https://www.javeriana.edu.co/centro-escritura/recursos' },
                { name: 'RAE: Diccionario Panhispánico de Dudas', url: 'https://www.rae.es/dpd/' }
            ],
            videos: [
                { title: 'Tutoría Lectura Crítica 2024-2 (UPN)', id: '0S57s4475uQ' },
                { title: 'Guía de Orientación Saber Pro 2025', id: 'p7G6C61V_qY' }
            ]
        }
    },
    'razonamiento-cuantitativo': {
        title: 'Razonamiento Cuantitativo',
        sections: [
            {
                subtitle: '1. Interpretación de Datos',
                content: `
                    <p>Dominar la lectura de gráficas y tablas es vital. El Icfes evalúa la capacidad de extraer información de contextos reales.</p>
                `
            }
        ],
        resources: {
            academic: [
                { name: 'Khan Academy: Estadística y Probabilidad', url: 'https://es.khanacademy.org/math/statistics-probability' },
                { name: 'Gapminder: Herramientas de Datos Mundiales', url: 'https://www.gapminder.org/tools/' },
                { name: 'Wolfram Alpha: Buscador Matemático', url: 'https://www.wolframalpha.com/' }
            ],
            videos: [
                { title: 'Razonamiento Cuantitativo 2025-1 (UPN)', id: 'l2Jc0j4N1eQ' },
                { title: 'Taller Razonamiento Cuantitativo 2024', id: 'e8dGjWp7sW8' }
            ]
        }
    },
    'competencias-ciudadanas': {
        title: 'Competencias Ciudadanas',
        sections: [
            {
                subtitle: '1. Constitución y Participación',
                content: `
                    <p>Evalúa el conocimiento de los derechos fundamentales, la organización del Estado y los mecanismos de participación ciudadana.</p>
                `
            }
        ],
        resources: {
            academic: [
                { name: 'Constitución Política de Colombia (Oficial)', url: 'https://www.constitucioncolombia.com/' },
                { name: 'Corte Constitucional de Colombia', url: 'https://www.corteconstitucional.gov.co/' },
                { name: 'Estructura del Estado (Función Pública)', url: 'https://www.funcionpublica.gov.co/eva/gerentes/ModI/estructura-estado.html' }
            ],
            videos: [
                { title: 'Tutoría Competencias Ciudadanas 2024-2', id: 'H7n4d2mQ3pW' },
                { title: 'Master Class Competencias Ciudadanas', id: '1h9Yf9gT8iE' }
            ]
        }
    },
    'comunicacion-escrita': {
        title: 'Comunicación Escrita',
        sections: [
            {
                subtitle: '1. Producción Textual',
                content: `
                    <p>Se evalúa la organización de las ideas, el uso de conectores y la capacidad de producir un texto argumentativo coherente.</p>
                `
            }
        ],
        resources: {
            academic: [
                { name: 'Purdue OWL: General Writing Lab', url: 'https://owl.purdue.edu/owl/general_writing/index.html' },
                { name: 'Centro de Escritura UNAM', url: 'https://www.unamescritura.com/' },
                { name: 'Fundación del Español Urgente (Fundéu)', url: 'https://www.fundeu.es/' }
            ],
            videos: [
                { title: 'Tips para el Ensayo Saber Pro', id: '5E2S_6o-yH8' },
                { title: 'Conectores Lógicos en la Escritura', id: '6pM6mI-Hq0Y' }
            ]
        }
    },
    'ingles': {
        title: 'Inglés',
        sections: [
            {
                subtitle: '1. Niveles MCER (A1 a B2)',
                content: `
                    <p>El examen evalúa desde avisos y conversaciones cortas hasta comprensión de lectura y gramática de nivel intermedio.</p>
                `
            }
        ],
        resources: {
            academic: [
                { name: 'BBC Learning English: Courses', url: 'https://www.bbc.co.uk/learningenglish' },
                { name: 'British Council: LearnEnglish', url: 'https://learnenglish.britishcouncil.org/' },
                { name: 'Cambridge English: Free Practice', url: 'https://www.cambridgeenglish.org/learning-english/free-resources/' }
            ],
            videos: [
                { title: 'Curso de Inglés Saber Pro (Filadd)', id: 'sV7z_w5T9XQ' },
                { title: 'Estrategias Inglés Saber Pro 2024', id: '7o_H9-87X6Q' }
            ]
        }
    },
    'problematicas-psicologicas': {
        title: 'Problemáticas Psicológicas',
        sections: [
            {
                subtitle: '1. Ética y Modelos e Intervención',
                content: `
                    <p>Evalúa el conocimiento de los fundamentos de la psicología, la Ley 1090 de 2006 y la capacidad de análisis de casos sociales.</p>
                `
            }
        ],
        resources: {
            academic: [
                { name: 'Colpsic: Ley 1090 de 2006', url: 'https://www.colpsic.org.co/wp-content/uploads/2021/04/Ley-1090-de-2006.pdf' },
                { name: 'Simply Psychology: Theory Guide', url: 'https://www.simplypsychology.org/' },
                { name: 'APA Style Blog: Academic Writing', url: 'https://apastyle.apa.org/blog' }
            ],
            videos: [
                { title: 'Aproximación a las Pruebas de Psicología', id: 'wD5_lWqKx0U' },
                { title: 'Ética del Psicólogo en Colombia', id: '3G9Y8t6_7-k' }
            ]
        }
    }
};
