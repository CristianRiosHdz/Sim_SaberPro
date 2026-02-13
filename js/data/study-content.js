/* ============================================================
   STUDY CONTENT — Guía Maestra Autocontenida (Edición 2024-2025)
   ============================================================ */

/**
 * Este archivo contiene todo el material de estudio destilado.
 * No depende de enlaces externos para la teoría principal.
 * Fuentes: Guías de Orientación Icfes 2024, Constitución Política, 
 * Manuales de Estilo APA, y Textos Académicos de Referencia.
 */

const STUDY_CONTENT = {
    'lectura-critica': {
        title: 'Lectura Crítica',
        sections: [
            {
                subtitle: '1. Los Tres Niveles de Lectura',
                content: `
                    <p>Para tener éxito en este módulo, debes moverte fluidamente entre tres niveles de profundidad:</p>
                    <ul>
                        <li><strong>Nivel Literal:</strong> Identificar lo que el texto dice explícitamente (datos, nombres, fechas).</li>
                        <li><strong>Nivel Inferencial:</strong> Leer "entre líneas". Deducir conclusiones no dichas basándose en la información dada.</li>
                        <li><strong>Nivel Crítico:</strong> Evaluar la validez de los argumentos, identificar sesgos del autor y contrastar el texto con otros conocimientos.</li>
                    </ul>
                    <div class="study-example">
                        <h4>Tip de Experto</h4>
                        <p>No respondas basado en lo que tú piensas sobre el tema, sino estrictamente en lo que el autor plantea en el texto, aunque no estés de acuerdo.</p>
                    </div>
                `
            },
            {
                subtitle: '2. Textos Continuos vs. Discontinuos',
                content: `
                    <p>El examen mezcla dos formatos que requieren habilidades distintas:</p>
                    <div class="study-grid-inline" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                        <div>
                            <h4>Continuos</h4>
                            <p>Se leen de forma secuencial (párrafos). Ejemplos: Ensayos filosóficos, fragmentos de novelas, columnas de opinión.</p>
                        </div>
                        <div>
                            <h4>Discontinuos</h4>
                            <p>Requieren una lectura no lineal. Ejemplos: Infografías, tablas de datos, caricaturas políticas, mapas.</p>
                        </div>
                    </div>
                    <div class="study-example">
                        <h4>Cómo analizar una Caricatura</h4>
                        <p>Observa el lenguaje no verbal (gestos), el uso de la ironía y qué personaje representa a qué sector de la sociedad. La respuesta suele estar en la crítica social implícita.</p>
                    </div>
                `
            },
            {
                subtitle: '3. Identificación de Argumentos',
                content: `
                    <p>Un texto argumentativo se compone de:</p>
                    <ul>
                        <li><strong>Tesis:</strong> La idea central que el autor quiere defender.</li>
                        <li><strong>Premisas:</strong> Razones o evidencias que sustentan la tesis.</li>
                        <li><strong>Conclusión:</strong> Derivación lógica de las premisas.</li>
                    </ul>
                    <p><em>Fuente: Guía de Orientación Lectura Crítica, Icfes 2024.</em></p>
                `
            }
        ],
        resources: {
            academic: [
                { name: 'Portal Icfes: Guías de Orientación', url: 'https://www.icfes.gov.co/guias-de-orientacion' }
            ]
        }
    },
    'razonamiento-cuantitativo': {
        title: 'Razonamiento Cuantitativo',
        sections: [
            {
                subtitle: '1. Interpretación de Gráficas y Tablas',
                content: `
                    <p>Es el componente con más preguntas. Debes saber leer:</p>
                    <ul>
                        <li><strong>Gráficos de Barras:</strong> Útiles para comparar magnitudes entre categorías.</li>
                        <li><strong>Gráficos de Líneas o Área:</strong> Ideales para observar tendencias a través del tiempo.</li>
                        <li><strong>Gráficos Circulares (Pie):</strong> Muestran porcentajes; recuerda que siempre deben sumar 100%.</li>
                    </ul>
                    <div class="study-example">
                        <h4>Ojo con las Escalas</h4>
                        <p>A veces las gráficas parecen mostrar un crecimiento enorme, pero si miras el eje Y, la escala puede estar truncada. Siempre revisa los valores numéricos de los ejes.</p>
                    </div>
                `
            },
            {
                subtitle: '2. Conceptos Estadísticos Clave',
                content: `
                    <p>No necesitas ser un matemático puro, pero sí dominar estos conceptos:</p>
                    <ul>
                        <li><strong>Promedio (Media):</strong> Suma de todos los valores dividida por el número de valores.</li>
                        <li><strong>Mediana:</strong> El valor que queda justo en la mitad cuando organizas los datos de menor a mayor.</li>
                        <li><strong>Rango:</strong> Diferencia entre el valor máximo y el mínimo.</li>
                    </ul>
                    <div class="study-example">
                        <h4>Media vs. Mediana</h4>
                        <p>Si en un grupo de 5 personas, 4 ganan $1 millón y una gana $100 millones, el promedio será muy alto, pero la mediana seguirá siendo $1 millón. La mediana es mejor para describir la "realidad" cuando hay datos muy extremos.</p>
                    </div>
                `
            },
            {
                subtitle: '3. Proporcionalidad y Porcentajes',
                content: `
                    <p>Debes manejar con rapidez la Regla de Tres Simple y el cálculo de variaciones porcentuales.</p>
                    <p><strong>Fórmula de Variación Porcentual:</strong> ((Valor Final - Valor Inicial) / Valor Inicial) * 100.</p>
                `
            }
        ]
    },
    'competencias-ciudadanas': {
        title: 'Competencias Ciudadanas',
        sections: [
            {
                subtitle: '1. Constitución Política y Derechos',
                content: `
                    <p>Conocer la Constitución de 1991 es indispensable. Se enfoca en:</p>
                    <ul>
                        <li><strong>Derechos Fundamentales (Art. 11-41):</strong> Vida, salud, educación, libre desarrollo de la personalidad, debido proceso.</li>
                        <li><strong>Derechos Sociales, Económicos y Culturales:</strong> Trabajo, huelga, familia.</li>
                        <li><strong>Derechos Colectivos:</strong> Medio ambiente sano.</li>
                    </ul>
                `
            },
            {
                subtitle: '2. Estructura del Estado',
                content: `
                    <p>Colombia es un estado Social de Derecho organizado en:</p>
                    <ul>
                        <li><strong>Rama Legislativa:</strong> Congreso (Senado y Cámara). Hace las leyes.</li>
                        <li><strong>Rama Ejecutiva:</strong> Presidente, ministros, alcaldes. Ejecuta las leyes.</li>
                        <li><strong>Rama Judicial:</strong> Cortes y tribunales. Vela por el cumplimiento de la ley.</li>
                        <li><strong>Órganos de Control:</strong> Procuraduría, Contraloría, Defensoría del Pueblo.</li>
                    </ul>
                    <div class="study-example">
                        <h4>Mecanismos de Protección</h4>
                        <p><strong>Acción de Tutela:</strong> Para proteger derechos fundamentales vulnerados (respuesta en 10 días).<br><strong>Derecho de Petición:</strong> Para solicitar información a entidades públicas/privadas.</p>
                    </div>
                `
            },
            {
                subtitle: '3. Multiperspectivismo',
                content: `
                    <p>El examen te pondrá en situaciones de conflicto (ej. construcción de una represa). Debes identificar que:</p>
                    <ul>
                        <li>Cada actor tiene intereses legítimos pero opuestos.</li>
                        <li>La solución debe buscar el beneficio general sin pisotear derechos de minorías.</li>
                    </ul>
                `
            }
        ]
    },
    'comunicacion-escrita': {
        title: 'Comunicación Escrita',
        sections: [
            {
                subtitle: '1. Estructura del Ensayo Argumentativo',
                content: `
                    <p>En el simulacro (y el examen real), debes escribir un texto que siga este orden:</p>
                    <ol>
                        <li><strong>Introducción:</strong> Presenta el tema y tu POSTURA (tesis) de forma clara.</li>
                        <li><strong>Desarrollo:</strong> Al menos dos párrafos con argumentos que sustenten tu tesis. Usa conectores (además, sin embargo, por lo tanto).</li>
                        <li><strong>Conclusión:</strong> Resume tu postura y cierra con una reflexión final.</li>
                    </ol>
                `
            },
            {
                subtitle: '2. Qué califica el Icfes',
                content: `
                    <ul>
                        <li><strong>Planteamiento de la tesis:</strong> Que se entienda claramente si estás a favor o en contra.</li>
                        <li><strong>Organización:</strong> Que el texto fluya y no sean ideas sueltas.</li>
                        <li><strong>Lenguaje:</strong> Vocabulario preciso y buena ortografía.</li>
                    </ul>
                    <div class="study-example">
                        <h4>Uso de Conectores</h4>
                        <p><strong>Causa/Efecto:</strong> Porque, debido a, puesto que.<br><strong>Oposición:</strong> No obstante, a pesar de, por el contrario.<br><strong>Conclusión:</strong> En síntesis, finalmente, para concluir.</p>
                    </div>
                `
            }
        ]
    },
    'ingles': {
        title: 'Inglés',
        sections: [
            {
                subtitle: '1. Estructura del Módulo',
                content: `
                    <p>Se divide en 7 partes que aumentan en complejidad:</p>
                    <ul>
                        <li><strong>Parte 1 (Avisos):</strong> Identificar dónde verías un cartel (ej. 'No swimming' -> At a beach).</li>
                        <li><strong>Parte 2 (Vocabulario):</strong> Unir definiciones con palabras.</li>
                        <li><strong>Parte 3 (Conversación):</strong> Elegir la respuesta más lógica a lo que alguien dice.</li>
                        <li><strong>Parte 4 (Gramática en contexto):</strong> Llenar huecos en un texto sencillo.</li>
                        <li><strong>Partes 5, 6 y 7:</strong> Comprensión lectora de textos más largos e inferencias.</li>
                    </ul>
                `
            },
            {
                subtitle: '2. Temas Gramaticales Frecuentes',
                content: `
                    <p>Concéntrate en estos puntos para asegurar un nivel B1/B2:</p>
                    <ul>
                        <li><strong>Perfect Tenses:</strong> Have + Past Participle (I have visited).</li>
                        <li><strong>Conditionals:</strong> If I study, I will pass (1st). If I studied, I would pass (2nd).</li>
                        <li><strong>Modals:</strong> Should, must, have to, could.</li>
                        <li><strong>Passive Voice:</strong> The test was created by Icfes.</li>
                    </ul>
                    <div class="study-example">
                        <h4>Tip de Lectura Rápida</h4>
                        <p><strong>Skimming:</strong> Lee el primer y último párrafo y las primeras líneas de cada párrafo para entender la idea general.<br><strong>Scanning:</strong> Busca palabras clave solo cuando ya leíste la pregunta.</p>
                    </div>
                `
            }
        ]
    },
    'problematicas-psicologicas': {
        title: 'Problemáticas Psicológicas',
        sections: [
            {
                subtitle: '1. Ética Profesional (Ley 1090 de 2006)',
                content: `
                    <p>Es la base del ejercicio del psicólogo en Colombia. Puntos vitales:</p>
                    <ul>
                        <li><strong>Confidencialidad:</strong> El secreto profesional es inviolable, salvo en casos de riesgo inminente para el paciente o terceros, o requerimiento judicial explícito.</li>
                        <li><strong>Consentimiento Informado:</strong> Siempre debe ser obtenido antes de cualquier intervención o investigación.</li>
                        <li><strong>Competencia:</strong> No realizar diagnósticos o tratamientos para los que no se esté formado.</li>
                    </ul>
                `
            },
            {
                subtitle: '2. Modelos de Intervención',
                content: `
                    <div class="study-grid-inline" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <div class="study-example" style="margin:0">
                            <h4>Cognitivo-Conductual</h4>
                            <p>Se enfoca en modificar pensamientos irracionales y conductas desadaptativas.</p>
                        </div>
                        <div class="study-example" style="margin:0">
                            <h4>Psicodinámico</h4>
                            <p>Explora el inconsciente, los mecanismos de defensa y la historia infantil.</p>
                        </div>
                        <div class="study-example" style="margin:0">
                            <h4>Sistémico</h4>
                            <p>Ve al individuo como parte de un sistema (familia, pareja) y analiza la comunicación.</p>
                        </div>
                        <div class="study-example" style="margin:0">
                            <h4>Humanista</h4>
                            <p>Enfoque en el aquí y el ahora, la autorrealización y la empatía incondicional.</p>
                        </div>
                    </div>
                `
            },
            {
                subtitle: '3. Salud Mental y Salud Pública',
                content: `
                    <p>Comprender que el psicólogo interviene no solo en el consultorio, sino en la comunidad:</p>
                    <ul>
                        <li><strong>Prevención Primaria:</strong> Evitar que ocurran problemas (ej. talleres de manejo de estrés).</li>
                        <li><strong>Prevención Secundaria:</strong> Diagnóstico temprano.</li>
                        <li><strong>Prevención Terciaria:</strong> Rehabilitación de personas ya afectadas.</li>
                    </ul>
                `
            }
        ]
    },
    'cultura-general': {
        title: 'Cultura General',
        sections: [
            {
                subtitle: '1. ¿Qué es la Cultura General?',
                content: `
                    <p>No se trata de saberlo todo, sino de tener un mapa mental del mundo. Un profesional integral debe conectar su saber específico con el contexto global.</p>
                    <div class="study-example">
                        <h4>Áreas Principales</h4>
                        <ul>
                            <li><strong>Historia:</strong> Entender los hitos que formaron el presente (Revoluciones, Guerras Mundiales).</li>
                            <li><strong>Ciencia:</strong> Principios básicos de física, química y biología que rigen la vida.</li>
                            <li><strong>Geografía:</strong> Ubicación de países, océanos y recursos naturales.</li>
                            <li><strong>Arte y Literatura:</strong> Las grandes obras que definen nuestra identidad humana.</li>
                        </ul>
                    </div>
                `
            },
            {
                subtitle: '2. Cómo Mejorar tu Cultura General',
                content: `
                    <p>La curiosidad es tu mejor herramienta. Algunos consejos prácticos:</p>
                    <ul>
                        <li><strong>Lee noticias diariamente:</strong> Enfócate en secciones de ciencia, cultura y tecnología, no solo en política local.</li>
                        <li><strong>Cuestiona lo cotidiano:</strong> Si ves un monumento o escuchas un nombre famoso, busca su historia brevemente.</li>
                        <li><strong>Mapas interactivos:</strong> Jugar a ubicar países ayuda a entender geopolítica y economía.</li>
                    </ul>
                `
            }
        ]
    }
};
