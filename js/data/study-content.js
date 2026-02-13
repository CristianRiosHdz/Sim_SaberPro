/* ============================================================
   STUDY CONTENT — Material de estudio extendido para los módulos
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
                        <li><strong>Identificar contenidos locales:</strong> Capacidad de entender palabras, frases o expresiones dentro de un texto. 
                            <br><em>Ejemplo:</em> En la frase "La austeridad es el mejor adorno", entender que "austeridad" se refiere a la sencillez o falta de excesos.</li>
                        <li><strong>Seguimiento de la estructura:</strong> Entender cómo se conectan las partes del texto para darle un sentido global. 
                            <br><em>Ejemplo:</em> Identificar que el segundo párrafo es una prueba que sustenta la tesis del primero.</li>
                        <li><strong>Reflexión y evaluación:</strong> Tomar distancia del texto para analizarlo objetivamente, identificar sesgos y evaluar la validez de los argumentos.</li>
                    </ul>
                `
            },
            {
                subtitle: '2. Tipos de Textos con Ejemplos',
                content: `
                    <div class="study-example">
                        <h4>Textos Continuos</h4>
                        <p>Son expositivos, argumentativos o descriptivos. Ejemplos: Ensayos, columnas de opinión, noticias.</p>
                        <p><strong>Ejemplo de análisis:</strong> En una columna de opinión, busca siempre los <em>conectores de contraste</em> (sin embargo, no obstante) para detectar el cambio de perspectiva del autor.</p>
                    </div>
                    <div class="study-example" style="margin-top: 15px">
                        <h4>Textos Discontinuos</h4>
                        <p>Infografías, caricaturas y tablas. No se leen de arriba a abajo.</p>
                        <p><strong>Clave:</strong> En una caricatura, el sentido suele estar en la <em>ironía</em>. Observa el lenguaje corporal de los personajes tanto como el texto.</p>
                    </div>
                `
            },
            {
                subtitle: '3. Identificación de Falacias Comunes',
                content: `
                    <p>Para la lectura crítica es vital detectar argumentos inválidos:</p>
                    <ul>
                        <li><strong>Ad Hominem:</strong> Atacar a la persona en lugar de su argumento ("Él dice que el clima cambia, pero él no terminó el colegio").</li>
                        <li><strong>Hombre de Paja:</strong> Distorsionar el argumento del oponente para hacerlo más fácil de atacar.</li>
                        <li><strong>Apelación a la autoridad:</strong> Dar por cierto algo solo porque lo dijo alguien famoso.</li>
                    </ul>
                `
            }
        ]
    },
    'razonamiento-cuantitativo': {
        title: 'Razonamiento Cuantitativo',
        sections: [
            {
                subtitle: '1. Interpretación de Datos (Gráficas)',
                content: `
                    <p>Dominar la lectura de gráficas es el 40% de la prueba. Debes saber diferenciar:</p>
                    <ul>
                        <li><strong>Gráficas de Barras:</strong> Comparan cantidades entre categorías.</li>
                        <li><strong>Gráficas de Líneas:</strong> Muestran tendencias o cambios a través del tiempo.</li>
                        <li><strong>Gráficas Circulares (Pie):</strong> Muestran la proporción de partes respecto a un todo (siempre suman 100%).</li>
                    </ul>
                    <p><strong>Ejercicio rápido:</strong> Si en un "pie chart" el 25% representa a 50 personas, ¿cuántas personas hay en total? 
                    <br><em>Resolución:</em> Si 25% (un cuarto) es 50, el 100% es 50 x 4 = 200.</p>
                `
            },
            {
                subtitle: '2. Conceptos de Probabilidad y Estadística',
                content: `
                    <div class="study-example">
                        <h4>Medidas de Tendencia Central</h4>
                        <ul>
                            <li><strong>Media (Promedio):</strong> Suma de todos los datos entre la cantidad total.</li>
                            <li><strong>Mediana:</strong> El valor central cuando los datos están ordenados.</li>
                            <li><strong>Moda:</strong> El valor que más veces se repite.</li>
                        </ul>
                    </div>
                    <p><strong>Ejemplo:</strong> En una empresa donde 4 empleados ganan $1M y el jefe gana $20M, la <em>media</em> ($4.8M) no es representativa, por lo que la <em>mediana</em> ($1M) explicaría mejor la realidad salarial.</p>
                `
            },
            {
                subtitle: '3. Geometría y Magnitudes',
                content: `
                    <p>Fórmulas esenciales que debes memorizar:</p>
                    <ul>
                        <li><strong>Área Círculo:</strong> π × r²</li>
                        <li><strong>Área Triángulo:</strong> (base × altura) / 2</li>
                        <li><strong>Perímetro Círculo:</strong> 2 × π × r</li>
                    </ul>
                    <p><strong>Tip:</strong> Si te piden el volumen de un cilindro, recuerda que es el <em>área de la base</em> (círculo) multiplicado por la <em>altura</em>.</p>
                `
            }
        ]
    },
    'competencias-ciudadanas': {
        title: 'Competencias Ciudadanas',
        sections: [
            {
                subtitle: '1. El Estado Social de Derecho',
                content: `
                    <p>Colombia no es solo un Estado de Derecho, es un <strong>Estado Social de Derecho</strong>. Esto significa que el Estado tiene la obligación de garantizar condiciones mínimas de vida digna para todos.</p>
                    <ul>
                        <li><strong>Dignidad Humana:</strong> El valor central de la Constitución.</li>
                        <li><strong>Ramas del Poder:</strong>
                            <ul>
                                <li><em>Ejecutiva:</em> (Presidente/Alcaldes) Administra el presupuesto y ejecuta leyes.</li>
                                <li><em>Legislativa:</em> (Congreso) Crea las leyes y reforma la Constitución.</li>
                                <li><em>Judicial:</em> (Cortes/Jueces) Resuelve conflictos y protege derechos.</li>
                            </ul>
                        </li>
                    </ul>
                `
            },
            {
                subtitle: '2. Multiperspectivismo',
                content: `
                    <p>Esta competencia mide tu capacidad de ver un mismo problema desde distintos ángulos.</p>
                    <div class="study-example">
                        <strong>Escenario de conflicto:</strong> El gobierno quiere construir una represa en tierras indígenas.
                        <ul>
                            <li><em>Visión Gobierno:</em> Necesidad de energía barata para el desarrollo nacional.</li>
                            <li><em>Visión Indígena:</em> Protección del territorio sagrado y el medio ambiente.</li>
                            <li><em>Visión Constructores:</em> Generación de empleo y beneficios económicos.</li>
                        </ul>
                        <p><strong>Clave:</strong> La respuesta correcta suele ser la que identifica las contradicciones entre visiones o busca una mediación constitucional.</p>
                    </div>
                `
            },
            {
                subtitle: '3. Mecanismos de Protección de Derechos',
                content: `
                    <p>Debes saber cuándo usar cada uno:</p>
                    <ul>
                        <li><strong>Acción de Tutela:</strong> Cuando un derecho fundamental (vida, salud, libertad) es vulnerado y no hay otro medio de defensa. Se resuelve en 10 días.</li>
                        <li><strong>Derecho de Petición:</strong> Para solicitar información o respuestas a entidades públicas o privadas.</li>
                        <li><strong>Acción Popular:</strong> Para proteger derechos colectivos (medio ambiente, espacio público).</li>
                    </ul>
                `
            }
        ]
    },
    'comunicacion-escrita': {
        title: 'Comunicación Escrita',
        sections: [
            {
                subtitle: '1. Cómo crear una Tesis Sólida',
                content: `
                    <p>La tesis es la <strong>columna vertebral</strong> de tu ensayo. No es un tema, es una postura.</p>
                    <p><strong>Incorrecto (Tema):</strong> "Hoy hablaré sobre el impacto de las redes sociales."</p>
                    <p><strong>Correcto (Tesis):</strong> "Aunque las redes sociales facilitan la comunicación, su uso excesivo está erosionando la capacidad de atención en los jóvenes, lo que requiere una regulación educativa urgente."</p>
                    <p><em>Tip:</em> Una buena tesis suele incluir una palabra que denote oposición o condición (aunque, si bien, debido a).</p>
                `
            },
            {
                subtitle: '2. Conectores Lógicos por Función',
                content: `
                    <p>Usa estos términos para mejorar la puntuación en cohesión:</p>
                    <table>
                        <tr>
                            <th>Función</th>
                            <th>Conectores</th>
                        </tr>
                        <tr>
                            <td>Adición</td>
                            <td>Además, asimismo, por otra parte.</td>
                        </tr>
                        <tr>
                            <td>Oposición</td>
                            <td>Sin embargo, no obstante, por el contrario.</td>
                        </tr>
                        <tr>
                            <td>Causa-Efecto</td>
                            <td>Por lo tanto, en consecuencia, debido a.</td>
                        </tr>
                        <tr>
                            <td>Conclusión</td>
                            <td>En suma, finalmente, para concluir.</td>
                        </tr>
                    </table>
                `
            },
            {
                subtitle: '3. Estructura de un Párrafo Argumentativo',
                content: `
                    <p>Cada párrafo de desarrollo debe tener:</p>
                    <ol>
                        <li><strong>Idea principal:</strong> Tu argumento.</li>
                        <li><strong>Sustento:</strong> Datos, ejemplos o razonamientos lógicos.</li>
                        <li><strong>Mini-conclusión:</strong> Cómo ese argumento apoya tu tesis general.</li>
                    </ol>
                `
            }
        ]
    },
    'ingles': {
        title: 'Inglés',
        sections: [
            {
                subtitle: '1. Guía por Partes del Examen',
                content: `
                    <ul>
                        <li><strong>Partes 1-2 (Vocabulario):</strong> Relacionar avisos con lugares o palabras con definiciones. <em>Truco:</em> Busca palabras clave (Ej: "Ticket" -> "Station").</li>
                        <li><strong>Parte 3 (Conversación):</strong> Responder diálogos cotidianos. <em>Tip:</em> La respuesta más simple suele ser la correcta.</li>
                        <li><strong>Parte 4 (Gramática):</strong> Completar textos con la palabra correcta. Evalúa preposiciones y verbos.</li>
                        <li><strong>Partes 5-7 (Comprensión):</strong> Lectura de textos largos. Debes aplicar <em>Skimming</em> (idea general) y <em>Scanning</em> (buscar nombres o fechas específicas).</li>
                    </ul>
                `
            },
            {
                subtitle: '2. Gramática Crítica para Saber Pro',
                content: `
                    <div class="study-example">
                        <h4>Condicionales</h4>
                        <p><strong>First Conditional:</strong> Situaciones reales. "If it rains, I will stay home."</p>
                        <p><strong>Second Conditional:</strong> Situaciones imaginarias. "If I won the lottery, I would travel the world."</p>
                    </div>
                    <div class="study-example" style="margin-top: 10px">
                        <h4>Passive Voice</h4>
                        <p>Muy común en textos científicos. "The experiment was conducted" vs "They conducted the experiment."</p>
                    </div>
                `
            },
            {
                subtitle: '3. Vocabulario de Transición',
                content: `
                    <p>Palabras que cambiarán tu nivel de B1 a B2:</p>
                    <ul>
                        <li><strong>Despite / In spite of:</strong> A pesar de.</li>
                        <li><strong>Furthermore / Moreover:</strong> Además (más formal que 'also').</li>
                        <li><strong>Therefore:</strong> Por lo tanto / Por consiguiente.</li>
                        <li><strong>However:</strong> Sin embargo.</li>
                    </ul>
                `
            }
        ]
    },
    'problematicas-psicologicas': {
        title: 'Problemáticas Psicológicas',
        sections: [
            {
                subtitle: '1. Enfoques y sus Técnicas Principalmente',
                content: `
                    <p>Diferencia los modelos de intervención para saber cuál aplicar en cada caso:</p>
                    <ul>
                        <li><strong>Cognitivo-Conductual:</strong> Reestructuración cognitiva, desensibilización sistemática, economía de fichas. <em>Enfoque:</em> El presente y la conducta.</li>
                        <li><strong>Psicodinámico:</strong> Asociación libre, transferencia, análisis de sueños. <em>Enfoque:</em> El inconsciente y la historia infantil.</li>
                        <li><strong>Humanista-Existencial:</strong> Empatía, escucha activa, autorrealización. <em>Enfoque:</em> El "aquí y ahora" y la voluntad del cliente.</li>
                        <li><strong>Sistémico:</strong> Terapia familiar, análisis de roles, comunicación. <em>Enfoque:</em> Las relaciones y el sistema.</li>
                    </ul>
                `
            },
            {
                subtitle: '2. Ética Deontológica (Ley 1090)',
                content: `
                    <p>Muchos problemas se resuelven con ética. Puntos clave:</p>
                    <ul>
                        <li><strong>Consentimiento Informado:</strong> Es obligatorio antes de cualquier intervención. En menores, lo firman los padres, pero el menor debe dar su "asentimiento".</li>
                        <li><strong>Secreto Profesional:</strong> Solo se puede romper si hay riesgo para la vida del consultante o de terceros, o ante requerimiento judicial explícito bajo reserva.</li>
                        <li><strong>Competencia Profesional:</strong> No intervenir en áreas donde no se tiene formación específica.</li>
                    </ul>
                `
            },
            {
                subtitle: '3. Proceso de Evaluación Psicológica',
                content: `
                    <p>Pasos lógicos en un caso clínico:</p>
                    <ol>
                        <li>Motivo de consulta (Demanda inicial).</li>
                        <li>Anamnesis (Historia de vida).</li>
                        <li>Aplicación de instrumentos (Tests, entrevistas).</li>
                        <li>Impresión diagnóstica.</li>
                        <li>Plan de intervención y seguimiento.</li>
                    </ol>
                    <p><strong>Ejemplo:</strong> Ante una sospecha de TDAH, no se interviene de inmediato; primero se realiza evaluación neuropsicológica y reporte escolar.</p>
                `
            }
        ]
    }
};
