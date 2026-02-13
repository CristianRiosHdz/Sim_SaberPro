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
                { name: 'Portal Oficial de Guías ICFES', url: 'https://www.icfes.gov.co/guias-de-orientacion' },
                { name: 'Buscar Guía Lectura Crítica (Google)', url: 'https://www.google.com/search?q=site:icfes.gov.co+Guia+de+orientacion+Lectura+Critica+Saber+Pro+pdf' }
            ],
            videos: [
                { title: 'Filadd: Preparación Lectura Crítica', id: 'S_E3LToP_vI' },
                { title: 'Taller de Lectura - Martha Carrillo', id: 'mD2C7AEvOaw' }
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
            }
        ],
        resources: {
            pdfs: [
                { name: 'Repositorio de Guías Saber Pro', url: 'https://www.icfes.gov.co/guias-de-orientacion' },
                { name: 'Buscar Guía Razonamiento (Google)', url: 'https://www.google.com/search?q=site:icfes.gov.co+Guia+de+orientacion+Razonamiento+Cuantitativo+Saber+Pro+pdf' }
            ],
            videos: [
                { title: 'Razonamiento Cuantitativo desde Cero', id: 'qS_2v_15X88' },
                { title: 'Clase Magistral de Matemáticas', id: '4F9M7JvR1_4' }
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
            }
        ],
        resources: {
            pdfs: [
                { name: 'Guías de Orientación ICFES', url: 'https://www.icfes.gov.co/guias-de-orientacion' },
                { name: 'Constitución Política (Corte)', url: 'https://www.corteconstitucional.gov.co/inicio/Constitucion%20politica%20de%20Colombia.pdf' }
            ],
            videos: [
                { title: 'Competencias Ciudadanas - Filadd', id: '85VbX9Yy0_w' },
                { title: 'Estructura del Estado Colombiano', id: 'N_f78nIiv6Y' }
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
                { name: 'Guía Comunicación Escrita ICFES', url: 'https://www.icfes.gov.co/guias-de-orientacion' },
                { name: 'Buscar Rúbrica de Calificación (Google)', url: 'https://www.google.com/search?q=site:icfes.gov.co+Rubrica+Calificacion+Comunicacion+Escrita+Saber+Pro+pdf' }
            ],
            videos: [
                { title: 'Cómo escribir el ensayo perfecto', id: '5E2S_6o-yH8' },
                { title: 'Clase de Escritura Argumentativa', id: '6pM6mI-Hq0Y' }
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
                { name: 'Guía de Componente Inglés', url: 'https://www.icfes.gov.co/guias-de-orientacion' },
                { name: 'Simulacro Inglés ICFES (Search)', url: 'https://www.google.com/search?q=site:icfes.gov.co+Simulacro+Ingles+Saber+Pro+pdf' }
            ],
            videos: [
                { title: 'Estrategias Inglés Saber Pro', id: '7o_H9-87X6Q' },
                { title: 'Repaso Inglés B1/B2', id: 'v_XqGj6_Q-E' }
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
                { name: 'Módulos Específicos ICFES', url: 'https://www.icfes.gov.co/guias-de-orientacion' },
                { name: 'Ley 1090 de 2006 (Colpsic)', url: 'https://www.colpsic.org.co/wp-content/uploads/2021/04/Ley-1090-de-2006-actualizada.pdf' }
            ],
            videos: [
                { title: 'Análisis de Casos Psicológicos', id: '9X-w8G_1Xq8' },
                { title: 'Ética del Psicólogo en Colombia', id: '3G9Y8t6_7-k' }
            ]
        }
    }
};
