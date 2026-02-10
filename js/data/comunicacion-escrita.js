/* ============================================================
   BANCO DE PREGUNTAS — Comunicación Escrita (35 preguntas)
   Fuentes: ICFES Saber Pro, RAE, manuales de redacción académica.
   ============================================================ */

const COMUNICACION_ESCRITA_QUESTIONS = [
    {
        id: 'CE-001',
        context: 'Lea la siguiente oración:\n\n"El proyecto fue aprobado _____ los resultados preliminares demostraron su viabilidad económica."',
        text: '¿Cuál conector completa correctamente la oración?',
        options: [
            { id: 'a', text: 'sin embargo' },
            { id: 'b', text: 'porque' },
            { id: 'c', text: 'aunque' },
            { id: 'd', text: 'no obstante' }
        ],
        correctAnswer: 'b',
        explanation: 'Se necesita un conector causal: la aprobación es consecuencia de la viabilidad demostrada. "Porque" establece esa relación causa-efecto.',
        reference: 'ICFES – Módulo Comunicación Escrita, Saber Pro. icfes.gov.co'
    },
    {
        id: 'CE-002',
        context: 'Lea el siguiente párrafo:\n\n"La deforestación del Amazonas ha alcanzado niveles alarmantes. _____, las consecuencias para la biodiversidad global podrían ser irreversibles."',
        text: '¿Qué conector es más adecuado para vincular ambas oraciones?',
        options: [
            { id: 'a', text: 'En cambio' },
            { id: 'b', text: 'Por ejemplo' },
            { id: 'c', text: 'En consecuencia' },
            { id: 'd', text: 'A pesar de ello' }
        ],
        correctAnswer: 'c',
        explanation: '"En consecuencia" expresa que la segunda oración es resultado directo de la primera, estableciendo una relación de causa-efecto.',
        reference: 'ICFES – Comunicación Escrita, Saber Pro. icfes.gov.co'
    },
    {
        id: 'CE-003',
        text: '¿Cuál de las siguientes oraciones presenta un error de concordancia?',
        options: [
            { id: 'a', text: '"La mayoría de los estudiantes aprobó el examen."' },
            { id: 'b', text: '"Hubieron muchas personas en el evento."' },
            { id: 'c', text: '"Se necesitan voluntarios para el proyecto."' },
            { id: 'd', text: '"Los resultados del estudio fueron publicados."' }
        ],
        correctAnswer: 'b',
        explanation: '"Haber" como impersonal no se pluraliza. Lo correcto es "Hubo muchas personas", no "hubieron". Este es uno de los errores gramaticales más frecuentes en español.',
        reference: 'RAE – Diccionario panhispánico de dudas / ICFES Saber Pro.'
    },
    {
        id: 'CE-004',
        context: 'Considere el siguiente texto:\n\n"(1) La contaminación del aire causa miles de muertes prematuras cada año. (2) Los gobiernos han implementado regulaciones más estrictas. (3) Las emisiones vehiculares son la principal fuente de contaminación urbana. (4) La plantación de árboles contribuye a purificar el aire."',
        text: '¿Cuál es el orden más coherente para organizar este párrafo en una estructura problema-causa-solución?',
        options: [
            { id: 'a', text: '1, 3, 2, 4' },
            { id: 'b', text: '3, 1, 4, 2' },
            { id: 'c', text: '4, 2, 3, 1' },
            { id: 'd', text: '2, 4, 1, 3' }
        ],
        correctAnswer: 'a',
        explanation: 'Problema (1: muertes prematuras) → Causa (3: emisiones vehiculares) → Soluciones (2: regulaciones + 4: árboles). Esta secuencia lógica problema-causa-solución es la más coherente.',
        reference: 'ICFES – Módulo Comunicación Escrita, Saber Pro. icfes.gov.co'
    },
    {
        id: 'CE-005',
        text: '¿En cuál de las siguientes oraciones se usa correctamente el gerundio?',
        options: [
            { id: 'a', text: '"Se aprobó un decreto regulando el comercio electrónico."' },
            { id: 'b', text: '"Estudiando todos los días, logró aprobar el examen."' },
            { id: 'c', text: '"Envío una caja conteniendo los documentos."' },
            { id: 'd', text: '"Se encontró un libro explicando la teoría."' }
        ],
        correctAnswer: 'b',
        explanation: 'El gerundio es correcto cuando expresa una acción simultánea o anterior a la del verbo principal, o indica modo/causa. "Estudiando todos los días" indica la causa del logro. Las demás opciones usan el gerundio como adjetivo, lo cual es incorrecto en español.',
        reference: 'RAE – Nueva gramática de la lengua española / ICFES Saber Pro.'
    },
    {
        id: 'CE-006',
        context: 'Lea el siguiente fragmento de un ensayo académico:\n\n"La inteligencia emocional, concepto desarrollado por Daniel Goleman, ha ganado relevancia en el ámbito organizacional. Diversos estudios demuestran que los líderes con alta inteligencia emocional logran mejores resultados en sus equipos de trabajo. _____, las empresas están incorporando esta competencia en sus procesos de selección."',
        text: '¿Qué conector completa mejor el texto?',
        options: [
            { id: 'a', text: 'Sin embargo' },
            { id: 'b', text: 'Por esta razón' },
            { id: 'c', text: 'En contraste' },
            { id: 'd', text: 'A pesar de esto' }
        ],
        correctAnswer: 'b',
        explanation: 'La última oración es una consecuencia lógica de las premisas anteriores (la IE mejora resultados → las empresas la incorporan). "Por esta razón" establece la relación consecutiva correcta.',
        reference: 'ICFES – Comunicación Escrita, Saber Pro. icfes.gov.co'
    },
    {
        id: 'CE-007',
        text: '¿Cuál de las siguientes oraciones utiliza correctamente los signos de puntuación?',
        options: [
            { id: 'a', text: '"Los países; que firmaron el acuerdo, se comprometieron a reducir emisiones."' },
            { id: 'b', text: '"Los países, que firmaron el acuerdo, se comprometieron a reducir emisiones."' },
            { id: 'c', text: '"Los países que firmaron el acuerdo; se comprometieron a reducir emisiones."' },
            { id: 'd', text: '"Los países que, firmaron el acuerdo se comprometieron, a reducir emisiones."' }
        ],
        correctAnswer: 'b',
        explanation: 'Las comas encierran una oración subordinada explicativa (no restrictiva). Si se eliminara "que firmaron el acuerdo", la oración principal seguiría teniendo sentido.',
        reference: 'RAE – Ortografía de la lengua española / ICFES Saber Pro.'
    },
    {
        id: 'CE-008',
        text: 'Identifique la oración que presenta un error de redundancia (pleonasmo innecesario):',
        options: [
            { id: 'a', text: '"Subió arriba por las escaleras para buscar el documento."' },
            { id: 'b', text: '"El informe fue entregado antes de la fecha límite."' },
            { id: 'c', text: '"El nuevo empleado se adaptó rápidamente al equipo."' },
            { id: 'd', text: '"La reunión se programó para el próximo viernes."' }
        ],
        correctAnswer: 'a',
        explanation: '"Subió arriba" es redundante porque "subir" ya implica dirección hacia arriba. Lo correcto es simplemente "subió por las escaleras".',
        reference: 'ICFES – Comunicación Escrita / RAE.'
    },
    {
        id: 'CE-009',
        context: 'Un estudiante escribe la siguiente tesis para un ensayo:\n\n"Las redes sociales son malas para la sociedad."',
        text: '¿Cuál es la principal debilidad de esta tesis desde el punto de vista de la escritura académica?',
        options: [
            { id: 'a', text: 'Es demasiado corta para ser una tesis de ensayo.' },
            { id: 'b', text: 'Utiliza un juicio de valor absoluto ("malas") sin delimitación, matización ni criterios específicos de evaluación.' },
            { id: 'c', text: 'No menciona el nombre del autor del ensayo.' },
            { id: 'd', text: 'Está escrita en español y debería estar en inglés.' }
        ],
        correctAnswer: 'b',
        explanation: 'Una tesis académica debe ser específica, argumentable y delimitada. "Son malas" es un juicio vago que no define para quién, en qué contexto ni bajo qué criterios. Una versión mejor sería: "El uso excesivo de redes sociales afecta la salud mental de adolescentes colombianos".',
        reference: 'ICFES – Módulo Comunicación Escrita, Saber Pro. icfes.gov.co'
    },
    {
        id: 'CE-010',
        context: '"El cambio climático _____ un fenómeno global que afecta a todos los ecosistemas; _____, es necesario tomar medidas urgentes."',
        text: 'Complete el texto con los conectores adecuados:',
        options: [
            { id: 'a', text: 'es / por lo tanto' },
            { id: 'b', text: 'siendo / en cambio' },
            { id: 'c', text: 'fue / sin embargo' },
            { id: 'd', text: 'será / no obstante' }
        ],
        correctAnswer: 'a',
        explanation: '"Es" en presente indica un hecho vigente. "Por lo tanto" introduce la conclusión lógica derivada de la premisa anterior.',
        reference: 'ICFES – Comunicación Escrita, Saber Pro. icfes.gov.co'
    },
    {
        id: 'CE-011',
        text: '¿Cuál de las siguientes opciones es una paráfrasis adecuada de "La educación es la base del desarrollo socioeconómico"?',
        options: [
            { id: 'a', text: '"La educación es la base del desarrollo socioeconómico de un país."' },
            { id: 'b', text: '"El progreso económico y social de las naciones se fundamenta en la formación de su población."' },
            { id: 'c', text: '"Hay que invertir más en educación."' },
            { id: 'd', text: '"Los países desarrollados tienen mejores universidades."' }
        ],
        correctAnswer: 'b',
        explanation: 'Una paráfrasis reformula la idea original con palabras diferentes pero manteniendo el mismo significado. La opción B lo logra: "progreso económico y social" reformula "desarrollo socioeconómico" y "formación de su población" reformula "educación".',
        reference: 'ICFES – Módulo Comunicación Escrita, Saber Pro. icfes.gov.co'
    },
    {
        id: 'CE-012',
        context: 'Lea el siguiente párrafo:\n\n"Los avances en medicina genómica permiten diagnósticos más precisos. La terapia génica ofrece cura potencial para enfermedades hereditarias. Los costos de secuenciación genómica han disminuido considerablemente."',
        text: '¿Cuál sería la oración temática (topic sentence) más adecuada para introducir este párrafo?',
        options: [
            { id: 'a', text: '"La medicina ha evolucionado a lo largo de la historia humana."' },
            { id: 'b', text: '"La genómica está revolucionando el campo de la medicina moderna."' },
            { id: 'c', text: '"Los hospitales necesitan más financiación estatal."' },
            { id: 'd', text: '"Los médicos estudian muchos años para ejercer su profesión."' }
        ],
        correctAnswer: 'b',
        explanation: 'La oración temática debe contener la idea central que las demás oraciones desarrollan. Las tres oraciones del párrafo tratan sobre avances de la genómica en medicina, por lo que B es la introducción más pertinente.',
        reference: 'ICFES – Comunicación Escrita, Saber Pro. icfes.gov.co'
    },
    {
        id: 'CE-013',
        text: '¿Cuál oración utiliza correctamente el modo subjuntivo?',
        options: [
            { id: 'a', text: '"Es importante que los estudiantes asistan a clase."' },
            { id: 'b', text: '"Es importante que los estudiantes asisten a clase."' },
            { id: 'c', text: '"Es importante que los estudiantes asistieron a clase."' },
            { id: 'd', text: '"Es importante que los estudiantes asistirán a clase."' }
        ],
        correctAnswer: 'a',
        explanation: 'Después de expresiones de deseo, necesidad u opinión valorativa ("es importante que"), se usa el subjuntivo: "asistan" (presente de subjuntivo), no el indicativo.',
        reference: 'RAE / ICFES – Comunicación Escrita, Saber Pro.'
    },
    {
        id: 'CE-014',
        text: '¿Cuál de las siguientes expresiones es un ejemplo de lenguaje inclusivo adecuado en un texto académico?',
        options: [
            { id: 'a', text: '"Los alumnos y las alumnas y les alumnes deben presentar el trabajo."' },
            { id: 'b', text: '"El estudiantado debe presentar el trabajo antes de la fecha establecida."' },
            { id: 'c', text: '"Tod@s l@s alumn@s deben presentar."' },
            { id: 'd', text: '"Lxs alumnxs deben presentar el trabajo."' }
        ],
        correctAnswer: 'b',
        explanation: '"El estudiantado" es un sustantivo colectivo que incluye a todas las personas sin necesidad de desdoblar ni usar signos no reconocidos por la norma académica. Es la forma más aceptada en textos académicos formales.',
        reference: 'RAE – Informe sobre lenguaje inclusivo / ICFES Saber Pro.'
    },
    {
        id: 'CE-015',
        context: '"Los resultados del estudio _____ que el 60% de los encuestados prefiere el trabajo remoto."',
        text: 'Complete con la forma verbal correcta:',
        options: [
            { id: 'a', text: 'indican' },
            { id: 'b', text: 'indica' },
            { id: 'c', text: 'indicando' },
            { id: 'd', text: 'indicó' }
        ],
        correctAnswer: 'a',
        explanation: 'El sujeto "los resultados" es plural, por lo que el verbo debe concordar en plural: "indican". "Indica" sería correcto si el sujeto fuera singular.',
        reference: 'ICFES – Comunicación Escrita, Saber Pro. icfes.gov.co'
    },
    {
        id: 'CE-016',
        text: '¿Cuál de las siguientes oraciones contiene un error de queísmo?',
        options: [
            { id: 'a', text: '"Estoy seguro de que vendrá mañana."' },
            { id: 'b', text: '"Me alegro de que hayas aprobado."' },
            { id: 'c', text: '"Estoy seguro que vendrá mañana."' },
            { id: 'd', text: '"Dudo de que sea posible terminarlo hoy."' }
        ],
        correctAnswer: 'c',
        explanation: '"Estar seguro" rige la preposición "de": lo correcto es "estoy seguro DE que". Omitir el "de" es un queísmo. La prueba es sustituir la subordinada: "Estoy seguro de eso" (no "estoy seguro eso").',
        reference: 'RAE – Diccionario panhispánico de dudas / ICFES Saber Pro.'
    },
    {
        id: 'CE-017',
        text: '¿Cuál de las siguientes oraciones contiene un error de dequeísmo?',
        options: [
            { id: 'a', text: '"Pienso de que deberíamos cambiar la estrategia."' },
            { id: 'b', text: '"Me convencí de que era la mejor opción."' },
            { id: 'c', text: '"Se acordó de que tenía una cita."' },
            { id: 'd', text: '"Estoy seguro de que es correcto."' }
        ],
        correctAnswer: 'a',
        explanation: '"Pensar" no rige preposición "de": lo correcto es "pienso que". Agregar "de" innecesariamente es un dequeísmo. La prueba: "Pienso eso" (no "pienso de eso").',
        reference: 'RAE – Diccionario panhispánico de dudas / ICFES Saber Pro.'
    },
    {
        id: 'CE-018',
        context: 'Un estudiante debe escribir una introducción para un ensayo sobre la pobreza en Colombia. Tiene las siguientes opciones:',
        text: '¿Cuál introducción es más efectiva para un ensayo académico?',
        options: [
            { id: 'a', text: '"La pobreza es muy mala y hay que acabar con ella de una vez por todas."' },
            { id: 'b', text: '"En este ensayo voy a hablar de la pobreza porque es un tema importante."' },
            { id: 'c', text: '"Según el DANE, en 2023 el 36% de la población colombiana vivía en condición de pobreza monetaria. Este dato revela una problemática estructural que exige un análisis de sus causas y posibles soluciones."' },
            { id: 'd', text: '"La pobreza existe desde que el mundo es mundo y siempre va a existir."' }
        ],
        correctAnswer: 'c',
        explanation: 'Una buena introducción académica contextualiza con datos concretos (DANE, 36%), define el alcance del problema y anuncia el propósito del ensayo (analizar causas y soluciones). Las demás son vagas, opinativas o fatalistas.',
        reference: 'ICFES – Módulo Comunicación Escrita, Saber Pro. icfes.gov.co'
    },
    {
        id: 'CE-019',
        text: 'Identifique la oración que presenta un anacoluto (quiebre en la estructura gramatical):',
        options: [
            { id: 'a', text: '"Las universidades colombianas han mejorado significativamente sus programas académicos."' },
            { id: 'b', text: '"Los estudiantes que estudian en la biblioteca, sus notas son más altas."' },
            { id: 'c', text: '"El gobierno presentó el nuevo plan de desarrollo económico."' },
            { id: 'd', text: '"La investigación demostró que la hipótesis era correcta."' }
        ],
        correctAnswer: 'b',
        explanation: 'El anacoluto es un quiebre sintáctico: "los estudiantes que estudian…" inicia un sujeto que no completa su predicado, y cambia a otra estructura con "sus notas son más altas". Lo correcto sería: "Las notas de los estudiantes que estudian en la biblioteca son más altas."',
        reference: 'ICFES – Comunicación Escrita / RAE.'
    },
    {
        id: 'CE-020',
        context: 'Lea el siguiente texto:\n\n"En primer lugar, el acceso a internet debería ser un derecho fundamental. _____, permite acceder a educación, salud y oportunidades laborales. _____, la conectividad reduce las brechas sociales entre zonas urbanas y rurales."',
        text: 'Complete con los conectores adecuados:',
        options: [
            { id: 'a', text: 'Sin embargo / No obstante' },
            { id: 'b', text: 'Por un lado / Por otro lado' },
            { id: 'c', text: 'En cambio / A pesar de ello' },
            { id: 'd', text: 'Por una parte / Además' }
        ],
        correctAnswer: 'd',
        explanation: '"En primer lugar" introduce el primer argumento. "Por una parte" presenta la primera razón y "Además" añade una segunda razón que refuerza la misma idea. Son conectores aditivos coherentes con la estructura.',
        reference: 'ICFES – Comunicación Escrita, Saber Pro. icfes.gov.co'
    },
    {
        id: 'CE-021',
        text: '¿Cuál es la función de una cita textual en un ensayo académico?',
        options: [
            { id: 'a', text: 'Aumentar la extensión del texto para cumplir con el número mínimo de páginas.' },
            { id: 'b', text: 'Respaldar una idea con la voz de un autor experto, aportando autoridad y evidencia al argumento propio.' },
            { id: 'c', text: 'Reemplazar las ideas propias del autor del ensayo para facilitar la escritura.' },
            { id: 'd', text: 'Decorar el texto con frases célebres sin relación directa con la argumentación.' }
        ],
        correctAnswer: 'b',
        explanation: 'La cita textual cumple una función argumentativa: respalda la idea del ensayista con evidencia de una fuente experta. Debe integrarse al argumento propio, no reemplazarlo.',
        reference: 'ICFES – Guía Comunicación Escrita / APA 7ma edición.'
    },
    {
        id: 'CE-022',
        text: '¿Cuál de las siguientes expresiones es la más adecuada para un texto académico formal?',
        options: [
            { id: 'a', text: '"Los resultados están rebuenos y muestran cosas chéveres."' },
            { id: 'b', text: '"Los hallazgos del estudio evidencian una tendencia significativa."' },
            { id: 'c', text: '"Yo creo que los datos como que muestran algo interesante."' },
            { id: 'd', text: '"Básicamente, o sea, los datos confirman la hipótesis."' }
        ],
        correctAnswer: 'b',
        explanation: 'El registro académico requiere vocabulario preciso, construcciones formales y evita coloquialismos, muletillas y expresiones ambiguas. "Hallazgos evidencian una tendencia significativa" es propio del registro formal.',
        reference: 'ICFES – Módulo Comunicación Escrita, Saber Pro. icfes.gov.co'
    },
    {
        id: 'CE-023',
        context: '"El desempleo juvenil en Colombia supera el 20%. _____ el gobierno ha implementado programas de empleo; _____ los resultados aún no son suficientes."',
        text: 'Seleccione los conectores que completan coherentemente el texto:',
        options: [
            { id: 'a', text: 'Ante esta situación / sin embargo' },
            { id: 'b', text: 'Igualmente / además' },
            { id: 'c', text: 'En cambio / por lo tanto' },
            { id: 'd', text: 'Así mismo / en conclusión' }
        ],
        correctAnswer: 'a',
        explanation: '"Ante esta situación" introduce la respuesta al problema planteado. "Sin embargo" señala la insuficiencia de esa respuesta, creando una concesión-refutación.',
        reference: 'ICFES – Comunicación Escrita, Saber Pro. icfes.gov.co'
    },
    {
        id: 'CE-024',
        text: '¿Cuál oración presenta un error de uso del pronombre relativo?',
        options: [
            { id: 'a', text: '"El libro que compré ayer es muy interesante."' },
            { id: 'b', text: '"La ciudad donde nací queda en la costa."' },
            { id: 'c', text: '"Fue un evento el cual participaron muchas personas."' },
            { id: 'd', text: '"La profesora cuya investigación ganó el premio es colombiana."' }
        ],
        correctAnswer: 'c',
        explanation: 'Falta la preposición "en": debería ser "un evento EN el cual participaron muchas personas." Sin la preposición, la oración es agramatical.',
        reference: 'RAE / ICFES – Comunicación Escrita, Saber Pro.'
    },
    {
        id: 'CE-025',
        context: 'Un párrafo argumentativo tiene la siguiente estructura:\n\n1. Oración temática\n2. Desarrollo con evidencias\n3. Ejemplo o dato de apoyo\n4. Oración de cierre o transición',
        text: '¿Cuál de los siguientes fragmentos funciona mejor como oración de cierre de un párrafo sobre contaminación del agua?',
        options: [
            { id: 'a', text: '"En conclusión, la contaminación del agua es muy mala para todos."' },
            { id: 'b', text: '"Por lo tanto, la implementación de políticas de tratamiento de aguas residuales resulta indispensable para garantizar este recurso a las generaciones futuras."' },
            { id: 'c', text: '"Y eso es lo que pienso sobre el agua contaminada."' },
            { id: 'd', text: '"Los ríos de Colombia son muy bonitos."' }
        ],
        correctAnswer: 'b',
        explanation: 'La oración de cierre debe sintetizar la idea central del párrafo y/o plantear una proyección. La opción B recoge el tema (contaminación), propone una acción (tratamiento de aguas) y proyecta hacia el futuro.',
        reference: 'ICFES – Módulo Comunicación Escrita, Saber Pro. icfes.gov.co'
    },
    {
        id: 'CE-026',
        text: 'Identifique la oración que contiene un solecismo (error de construcción sintáctica):',
        options: [
            { id: 'a', text: '"Le informo que su solicitud fue aprobada."' },
            { id: 'b', text: '"Hubieron problemas durante la implementación del proyecto."' },
            { id: 'c', text: '"Es necesario que revisemos los datos antes de publicar."' },
            { id: 'd', text: '"El comité decidió postergar la reunión."' }
        ],
        correctAnswer: 'b',
        explanation: '"Hubieron" es un solecismo: el verbo "haber" en uso impersonal siempre va en singular. Lo correcto es "Hubo problemas".',
        reference: 'RAE / ICFES – Comunicación Escrita, Saber Pro.'
    },
    {
        id: 'CE-027',
        text: '¿Cuál es la diferencia entre "por qué", "porque", "porqué" y "por que"?',
        options: [
            { id: 'a', text: 'Son sinónimos intercambiables según la preferencia del autor.' },
            { id: 'b', text: '"Por qué" es interrogativo, "porque" es causal, "porqué" es sustantivo (el motivo), y "por que" es preposición + pronombre relativo.' },
            { id: 'c', text: 'Solo existen "porque" y "por qué"; las otras formas son incorrectas.' },
            { id: 'd', text: '"Porqué" es la única forma correcta y las demás son errores ortográficos.' }
        ],
        correctAnswer: 'b',
        explanation: 'Cada forma tiene un uso distinto: "¿Por qué no viniste?" (pregunta), "Porque estaba enfermo" (causa), "Desconozco el porqué" (sustantivo = razón), "La razón por que se fue" (preposición + relativo).',
        reference: 'RAE – Ortografía / ICFES – Comunicación Escrita, Saber Pro.'
    },
    {
        id: 'CE-028',
        context: 'Un estudiante escribe:\n\n"El profesor dijo de que todos debíamos entregar el trabajo el viernes, y también mencionó de que habría un examen la próxima semana."',
        text: '¿Qué error recurrente presenta este texto?',
        options: [
            { id: 'a', text: 'Uso incorrecto de tiempos verbales.' },
            { id: 'b', text: 'Dequeísmo: uso indebido de "de que" después de verbos que no rigen preposición "de".' },
            { id: 'c', text: 'Falta de signos de puntuación.' },
            { id: 'd', text: 'Uso incorrecto del estilo indirecto.' }
        ],
        correctAnswer: 'b',
        explanation: '"Decir" y "mencionar" son verbos transitivos que no requieren "de": lo correcto es "dijo que" y "mencionó que". Agregar "de" es dequeísmo.',
        reference: 'RAE / ICFES – Comunicación Escrita, Saber Pro.'
    },
    {
        id: 'CE-029',
        text: '¿Cuál de las siguientes opciones representa una referencia bibliográfica correcta según normas APA?',
        options: [
            { id: 'a', text: 'García Márquez, Gabriel. Cien años de soledad. Sudamericana, 1967.' },
            { id: 'b', text: 'García Márquez, G. (1967). Cien años de soledad. Editorial Sudamericana.' },
            { id: 'c', text: 'Cien años de soledad, escrito por García Márquez en el año 1967, publicado por Sudamericana.' },
            { id: 'd', text: 'G. García M., "Cien años de soledad", Buenos Aires: 1967.' }
        ],
        correctAnswer: 'b',
        explanation: 'Formato APA 7ª edición: Apellido, Inicial. (Año). Título en cursiva. Editorial. La opción B sigue correctamente esta estructura.',
        reference: 'APA 7ma edición / ICFES – Comunicación Escrita, Saber Pro.'
    },
    {
        id: 'CE-030',
        text: '¿Cuál de las siguientes oraciones contiene una ambigüedad sintáctica?',
        options: [
            { id: 'a', text: '"Vi al hombre con el telescopio."' },
            { id: 'b', text: '"La casa es grande y tiene jardín."' },
            { id: 'c', text: '"María estudia medicina en la Universidad Nacional."' },
            { id: 'd', text: '"El examen fue calificado con nota sobresaliente."' }
        ],
        correctAnswer: 'a',
        explanation: '"Vi al hombre con el telescopio" es ambigua: ¿usé el telescopio para verlo, o el hombre tenía un telescopio? La preposición "con" puede modificar al verbo o al sustantivo, creando dos interpretaciones válidas.',
        reference: 'ICFES – Módulo Comunicación Escrita / Curso de lingüística general.'
    },
    {
        id: 'CE-031',
        context: '"La investigación científica es fundamental para el desarrollo de una nación. Por eso, Colombia debería invertir más en ciencia y tecnología."',
        text: '¿Qué tipo de argumento se utiliza en este fragmento?',
        options: [
            { id: 'a', text: 'Argumento de autoridad, porque cita a un experto reconocido.' },
            { id: 'b', text: 'Argumento causal, porque establece una relación causa-efecto entre investigación y desarrollo.' },
            { id: 'c', text: 'Argumento por analogía, porque compara Colombia con otro país.' },
            { id: 'd', text: 'Argumento ad hominem, porque ataca a la persona en lugar de la idea.' }
        ],
        correctAnswer: 'b',
        explanation: 'El fragmento establece: premisa causal (la investigación produce desarrollo) → conclusión (Colombia debe invertir en ciencia). Es un argumento de tipo causal-consecutivo.',
        reference: 'ICFES – Comunicación Escrita, Saber Pro. icfes.gov.co'
    },
    {
        id: 'CE-032',
        text: '¿Cuál de las siguientes opciones usa correctamente la tilde diacrítica?',
        options: [
            { id: 'a', text: '"Él no sabe si él quiere ir."' },
            { id: 'b', text: '"El no sabe sí el quiere ir."' },
            { id: 'c', text: '"Él no sabe sí él quiere ir."' },
            { id: 'd', text: '"El no sabe si el quiere ir."' }
        ],
        correctAnswer: 'a',
        explanation: '"Él" con tilde = pronombre personal. "El" sin tilde = artículo. "Si" sin tilde = condicional. "Sí" con tilde = afirmación. Así: "Él (pronombre) no sabe si (condicional) él (pronombre) quiere ir."',
        reference: 'RAE – Ortografía / ICFES – Comunicación Escrita.'
    },
    {
        id: 'CE-033',
        context: 'Un ensayo presenta la siguiente conclusión:\n\n"En síntesis, el acceso a agua potable es un derecho humano fundamental que requiere la acción coordinada de gobiernos, organizaciones y ciudadanía. Solo mediante políticas integrales que aborden infraestructura, educación y sostenibilidad ambiental será posible garantizar este recurso vital para las futuras generaciones."',
        text: '¿Qué elementos hacen de esta una conclusión efectiva?',
        options: [
            { id: 'a', text: 'Introduce un tema completamente nuevo que no se trató en el ensayo.' },
            { id: 'b', text: 'Sintetiza la idea central, identifica actores responsables y proyecta hacia el futuro sin repetir textualmente la introducción.' },
            { id: 'c', text: 'Utiliza exclusivamente datos numéricos y estadísticas.' },
            { id: 'd', text: 'Repite textualmente los mismos párrafos de la introducción.' }
        ],
        correctAnswer: 'b',
        explanation: 'Una conclusión efectiva recoge la tesis (agua como derecho), señala responsables (gobiernos, organizaciones, ciudadanía), propone una vía (políticas integrales) y proyecta (generaciones futuras), sin repetir la introducción ni introducir temas nuevos.',
        reference: 'ICFES – Módulo Comunicación Escrita, Saber Pro. icfes.gov.co'
    },
    {
        id: 'CE-034',
        text: '¿Cuál de las siguientes opciones presenta un uso correcto del punto y coma?',
        options: [
            { id: 'a', text: '"Me gusta el café; y también el té."' },
            { id: 'b', text: '"Los participantes fueron: estudiantes de medicina; ingeniería; y derecho."' },
            { id: 'c', text: '"El primer grupo presentó resultados positivos; el segundo, resultados negativos."' },
            { id: 'd', text: '"Compré; pan, leche y huevos."' }
        ],
        correctAnswer: 'c',
        explanation: 'El punto y coma separa oraciones relacionadas que comparten estructura. Aquí, la segunda oración omite el verbo ("presentó") por elipsis, y el punto y coma marca esa relación paralela.',
        reference: 'RAE – Ortografía / ICFES – Comunicación Escrita.'
    },
    {
        id: 'CE-035',
        context: 'Un estudiante debe elegir un título para su ensayo sobre el impacto de la minería en los páramos colombianos.',
        text: '¿Cuál título es más adecuado para un ensayo académico?',
        options: [
            { id: 'a', text: '"La minería es horrible y está destruyendo todo"' },
            { id: 'b', text: '"Impacto ambiental de la actividad minera en los ecosistemas de páramo en Colombia: una revisión crítica"' },
            { id: 'c', text: '"Los páramos y cosas de la minería"' },
            { id: 'd', text: '"¿Sabías que la minería es muy mala para los páramos?"' }
        ],
        correctAnswer: 'b',
        explanation: 'Un título académico debe ser preciso, descriptivo e informativo. La opción B delimita el tema (minería), el objeto (páramos), el lugar (Colombia) y el tipo de análisis (revisión crítica).',
        reference: 'ICFES – Módulo Comunicación Escrita, Saber Pro. icfes.gov.co'
    }
];
