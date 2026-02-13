/* ============================================================
   STUDY CONTENT — Material de estudio con recursos multimedia
   ============================================================ */

const STUDY_CONTENT = {
    'lectura-critica': {
        title: 'Lectura Crítica',
        sections: [
            {
                subtitle: '1. Competencias del Lector Crítico',
                content: `
                    <p>La prueba evalúa tres dimensiones fundamentales de la lectura:</p>
                    <ul>
                        <li><strong>Identificar contenidos locales:</strong> Capacidad de entender palabras, frases o expresiones dentro de un texto.</li>
                        <li><strong>Seguimiento de la estructura:</strong> Entender cómo se conectan las partes del texto para darle un sentido global.</li>
                        <li><strong>Reflexión y evaluación:</strong> Tomar distancia del texto para analizarlo objetivamente e identificar sesgos.</li>
                    </ul>
                `
            },
            {
                subtitle: '2. Tipos de Textos',
                content: `
                    <div class="study-example">
                        <h4>Textos Continuos</h4>
                        <p>Ensayos, columnas de opinión, noticias (lectura secuencial).</p>
                    </div>
                    <div class="study-example">
                        <h4>Textos Discontinuos</h4>
                        <p>Infografías, caricaturas y tablas (no secuenciales).</p>
                    </div>
                `
            }
        ],
        resources: {
            pdfs: [
                { name: 'Guía de Orientación - Lectura Crítica (ICFES)', url: 'https://www.icfes.gov.co/documents/39242/1321592/Guia+de+orientacion+modulo+lectura+critica-saber-pro.pdf' },
                { name: 'Cuadernillo de Ejemplos de Preguntas', url: 'https://www.icfes.gov.co/documents/39242/1321592/Cuadernillo+de+preguntas+Lectura+Critica+Saber+Pro.pdf' }
            ],
            videos: [
                { title: 'Cómo mejorar en Lectura Crítica', id: 'mD2C7AEvOaw' },
                { title: 'Análisis de textos discontinuos (Caricaturas)', id: 'vA6qL-3w6X8' }
            ]
        }
    },
    'razonamiento-cuantitativo': {
        title: 'Razonamiento Cuantitativo',
        sections: [
            {
                subtitle: '1. Interpretación de Datos',
                content: `
                    <p>Dominar la lectura de gráficas es vital. Debes saber diferenciar:</p>
                    <ul>
                        <li><strong>Barras:</strong> Comparación de categorías.</li>
                        <li><strong>Líneas:</strong> Tendencias en el tiempo.</li>
                        <li><strong>Circulares:</strong> Proporciones (siempre suman 100%).</li>
                    </ul>
                `
            },
            {
                subtitle: '2. Probabilidad y Estadística',
                content: `
                    <p>Media, mediana, moda y probabilidad básica son los pilares de este módulo.</p>
                `
            }
        ],
        resources: {
            pdfs: [
                { name: 'Guía de Orientación - Razonamiento Cuantitativo', url: 'https://www.icfes.gov.co/documents/39242/1321592/Guia+de+orientacion+modulo+razonamiento+cuantitativo-saber-pro.pdf' },
                { name: 'Ejemplos de Preguntas Explicadas', url: 'https://www.icfes.gov.co/documents/39242/1321592/Cuadernillo+de+preguntas+Razonamiento+Cuantitativo+Saber+Pro.pdf' }
            ],
            videos: [
                { title: 'Razonamiento Cuantitativo desde Cero', id: 'qS_2v_15X88' },
                { title: 'Resolución de problemas de regla de 3 y porcentajes', id: '4F9M7JvR1_4' }
            ]
        }
    },
    'competencias-ciudadanas': {
        title: 'Competencias Ciudadanas',
        sections: [
            {
                subtitle: '1. Constitución y Estado',
                content: `
                    <p>Conocer los fundamentos del Estado Social de Derecho y las ramas del poder público.</p>
                `
            },
            {
                subtitle: '2. Multiperspectivismo',
                content: `
                    <p>Capacidad de analizar conflictos desde los intereses de diferentes actores sociales.</p>
                `
            }
        ],
        resources: {
            pdfs: [
                { name: 'Guía de Orientación - Competencias Ciudadanas', url: 'https://www.icfes.gov.co/documents/39242/1321592/Guia+de+orientacion+modulo+competencias+ciudadanas-saber-pro.pdf' },
                { name: 'Constitución Política de Colombia (PDF)', url: 'https://www.corteconstitucional.gov.co/inicio/Constitucion%20politica%20de%20Colombia.pdf' }
            ],
            videos: [
                { title: 'Resumen Constitución Política de Colombia', id: 'N_f78nIiv6Y' },
                { title: 'Multiperspectivismo y Pensamiento Sistémico', id: '85VbX9Yy0_w' }
            ]
        }
    },
    'comunicacion-escrita': {
        title: 'Comunicación Escrita',
        sections: [
            {
                subtitle: '1. Estructura del Ensayo',
                content: `
                    <p>Introducción (Tesis), Desarrollo (Argumentos) y Conclusión (Cierre).</p>
                `
            }
        ],
        resources: {
            pdfs: [
                { name: 'Guía de Orientación - Comunicación Escrita', url: 'https://www.icfes.gov.co/documents/39242/1321592/Guia+de+orientacion+modulo+comunicacion+escrita-saber-pro.pdf' },
                { name: 'Rúbrica de Calificación de Ensayos', url: 'https://www.icfes.gov.co/documents/39242/1321592/Rubrica+de+calificacion+Comunicacion+Escrita.pdf' }
            ],
            videos: [
                { title: 'Cómo escribir un ensayo argumentativo', id: '6pM6mI-Hq0Y' },
                { title: 'Tips para Comunicación Escrita Saber Pro', id: '5E2S_6o-yH8' }
            ]
        }
    },
    'ingles': {
        title: 'Inglés',
        sections: [
            {
                subtitle: '1. Partes del Examen',
                content: `
                    <p>Desde avisos (A1) hasta comprensión de lectura compleja (B2).</p>
                `
            }
        ],
        resources: {
            pdfs: [
                { name: 'Guía de Orientación - Inglés Saber Pro', url: 'https://www.icfes.gov.co/documents/39242/1321592/Guia+de+orientacion+modulo+ingles-saber-pro.pdf' },
                { name: 'Vocabulario Esencial por Niveles', url: 'https://www.icfes.gov.co/documents/39242/1321592/Listado+de+vocabulario+Ingles.pdf' }
            ],
            videos: [
                { title: 'Estrategias para el componente de Inglés', id: '7o_H9-87X6Q' },
                { title: 'Simulacro de Inglés Explicado', id: 'v_XqGj6_Q-E' }
            ]
        }
    },
    'problematicas-psicologicas': {
        title: 'Problemáticas Psicológicas',
        sections: [
            {
                subtitle: '1. Ética y Deontología',
                content: `
                    <p>Ley 1090 de 2006 y el ejercicio profesional del psicólogo en Colombia.</p>
                `
            }
        ],
        resources: {
            pdfs: [
                { name: 'Módulo de Análisis de Problemáticas Psicológicas', url: 'https://www.icfes.gov.co/documents/39242/1321592/Guia+de+orientacion+analisis+problematicas+psicologicas.pdf' },
                { name: 'Código Ético y Deontológico del Psicólogo', url: 'https://www.uniremington.edu.co/wp-content/uploads/2021/08/Ley-1090-de-2006.pdf' }
            ],
            videos: [
                { title: 'Ley 1090 de 2006 explicada', id: '9X-w8G_1Xq8' },
                { title: 'Enfoques Psicológicos para el Saber Pro', id: '3G9Y8t6_7-k' }
            ]
        }
    }
};
