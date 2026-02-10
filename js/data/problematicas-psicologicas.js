/* ============================================================
   BANCO DE PREGUNTAS — Análisis de Problemáticas Psicológicas (35)
   Fuentes: ICFES Saber Pro, APA, DSM-5, Ley 1090/2006.
   ============================================================ */

const PROBLEMATICAS_PSICOLOGICAS_QUESTIONS = [
    {
        id: 'PP-001',
        text: 'Según el modelo biopsicosocial, la comprensión de un trastorno mental requiere considerar:',
        options: [
            { id: 'a', text: 'Únicamente factores biológicos y genéticos.' },
            { id: 'b', text: 'Solo factores psicológicos individuales.' },
            { id: 'c', text: 'La interacción de factores biológicos, psicológicos y sociales.' },
            { id: 'd', text: 'Exclusivamente las experiencias de la infancia.' }
        ],
        correctAnswer: 'c',
        explanation: 'El modelo biopsicosocial (Engel, 1977) propone que la salud mental se comprende como la interacción de factores biológicos, psicológicos y socioculturales.',
        reference: 'ICFES – Problemáticas Psicológicas, Saber Pro / APA.'
    },
    {
        id: 'PP-002',
        context: 'Un psicólogo clínico atiende a un paciente que presenta tristeza persistente, pérdida de interés en actividades, insomnio, fatiga y dificultad para concentrarse durante más de dos semanas.',
        text: 'Estos síntomas son consistentes con el diagnóstico de:',
        options: [
            { id: 'a', text: 'Trastorno de ansiedad generalizada.' },
            { id: 'b', text: 'Episodio depresivo mayor.' },
            { id: 'c', text: 'Trastorno bipolar tipo I.' },
            { id: 'd', text: 'Trastorno de estrés postraumático.' }
        ],
        correctAnswer: 'b',
        explanation: 'Según el DSM-5, un episodio depresivo mayor requiere al menos 5 síntomas durante 2+ semanas, incluyendo ánimo deprimido o pérdida de interés.',
        reference: 'ICFES – Problemáticas Psicológicas, Saber Pro / DSM-5 (APA).'
    },
    {
        id: 'PP-003',
        text: 'En el código deontológico del psicólogo colombiano (Ley 1090 de 2006), el principio de confidencialidad puede romperse cuando:',
        options: [
            { id: 'a', text: 'La familia del paciente solicita información.' },
            { id: 'b', text: 'El paciente resulta antipático para el profesional.' },
            { id: 'c', text: 'Existe riesgo inminente para la vida del paciente o de terceros.' },
            { id: 'd', text: 'El paciente no paga las sesiones.' }
        ],
        correctAnswer: 'c',
        explanation: 'La confidencialidad tiene excepciones legales: riesgo inminente al paciente o terceros, abuso de menores, o requerimiento judicial.',
        reference: 'Ley 1090 de 2006 / ICFES – Problemáticas Psicológicas, Saber Pro.'
    },
    {
        id: 'PP-004',
        text: 'La teoría del apego de Bowlby propone que el vínculo temprano entre el niño y su cuidador principal:',
        options: [
            { id: 'a', text: 'No tiene relación con el desarrollo emocional posterior.' },
            { id: 'b', text: 'Influye en la formación de modelos internos de relación que afectan las relaciones a lo largo de la vida.' },
            { id: 'c', text: 'Solo es relevante durante el primer año de vida.' },
            { id: 'd', text: 'Depende exclusivamente del temperamento genético del niño.' }
        ],
        correctAnswer: 'b',
        explanation: 'Bowlby propuso que las experiencias de apego temprano generan "modelos operativos internos" que funcionan como esquemas para relaciones futuras.',
        reference: 'ICFES – Problemáticas Psicológicas, Saber Pro / Bowlby (1969).'
    },
    {
        id: 'PP-005',
        context: 'Un estudiante universitario reporta ataques de pánico frecuentes, miedo constante a otro ataque y evitación de lugares donde ha experimentado pánico.',
        text: 'El enfoque terapéutico con mayor evidencia para este cuadro es:',
        options: [
            { id: 'a', text: 'Psicoanálisis clásico.' },
            { id: 'b', text: 'Terapia cognitivo-conductual con exposición interoceptiva.' },
            { id: 'c', text: 'Hipnosis clínica.' },
            { id: 'd', text: 'Arteterapia exclusivamente.' }
        ],
        correctAnswer: 'b',
        explanation: 'La TCC con exposición interoceptiva tiene la mayor evidencia científica para el trastorno de pánico (APA, NICE guidelines).',
        reference: 'ICFES – Problemáticas Psicológicas, Saber Pro / APA Clinical Practice Guidelines.'
    },
    {
        id: 'PP-006',
        text: 'En la evaluación psicológica, la validez de una prueba se refiere a:',
        options: [
            { id: 'a', text: 'Que la prueba produce los mismos resultados en aplicaciones repetidas.' },
            { id: 'b', text: 'Que la prueba mide efectivamente lo que pretende medir.' },
            { id: 'c', text: 'Que la prueba es fácil de aplicar.' },
            { id: 'd', text: 'Que la prueba es aceptada por todos los profesionales.' }
        ],
        correctAnswer: 'b',
        explanation: 'La validez indica que un instrumento mide lo que dice medir. La consistencia en resultados repetidos es la confiabilidad.',
        reference: 'ICFES – Problemáticas Psicológicas, Saber Pro / APA Standards for Testing.'
    },
    {
        id: 'PP-007',
        text: 'La zona de desarrollo próximo (ZDP) de Vygotsky describe:',
        options: [
            { id: 'a', text: 'Lo que un niño puede hacer sin ayuda.' },
            { id: 'b', text: 'La distancia entre lo que puede hacer solo y lo que puede hacer con ayuda de un adulto o par más capaz.' },
            { id: 'c', text: 'El nivel máximo de desarrollo cognitivo.' },
            { id: 'd', text: 'Las etapas universales del desarrollo.' }
        ],
        correctAnswer: 'b',
        explanation: 'La ZDP es la brecha entre el nivel de desarrollo real y el potencial con guía. Es la zona óptima para el aprendizaje.',
        reference: 'ICFES – Problemáticas Psicológicas, Saber Pro / Vygotsky (1978).'
    },
    {
        id: 'PP-008',
        context: 'Un psicólogo organizacional nota que los empleados presentan altos niveles de estrés, ausentismo y baja motivación.',
        text: 'La intervención más integral sería:',
        options: [
            { id: 'a', text: 'Despedir a los empleados con menor rendimiento.' },
            { id: 'b', text: 'Evaluar el clima organizacional e implementar un programa de bienestar que aborde factores individuales y organizacionales.' },
            { id: 'c', text: 'Aumentar únicamente los salarios.' },
            { id: 'd', text: 'Dar charlas motivacionales una vez al año.' }
        ],
        correctAnswer: 'b',
        explanation: 'Una intervención integral evalúa el sistema organizacional completo e implementa cambios tanto estructurales como individuales.',
        reference: 'ICFES – Problemáticas Psicológicas, Saber Pro / Colegio Colombiano de Psicólogos.'
    },
    {
        id: 'PP-009',
        text: 'El concepto de "resiliencia" en psicología se refiere a:',
        options: [
            { id: 'a', text: 'La ausencia total de problemas emocionales.' },
            { id: 'b', text: 'La capacidad de adaptarse positivamente ante la adversidad y recuperarse de experiencias difíciles.' },
            { id: 'c', text: 'Una característica genética inmutable.' },
            { id: 'd', text: 'La negación de las dificultades vividas.' }
        ],
        correctAnswer: 'b',
        explanation: 'La resiliencia es un proceso dinámico de adaptación positiva frente a la adversidad. Puede desarrollarse y fortalecerse.',
        reference: 'ICFES – Problemáticas Psicológicas, Saber Pro / APA.'
    },
    {
        id: 'PP-010',
        text: '¿Cuál dilema ético involucra un conflicto de roles?',
        options: [
            { id: 'a', text: 'Un psicólogo que atiende como paciente a su vecino cercano.' },
            { id: 'b', text: 'Un psicólogo que asiste a un congreso.' },
            { id: 'c', text: 'Un psicólogo que publica un artículo.' },
            { id: 'd', text: 'Un psicólogo que supervisa a un colega.' }
        ],
        correctAnswer: 'a',
        explanation: 'Atender a un vecino genera relación dual/múltiple que puede comprometer la objetividad y confidencialidad.',
        reference: 'Ley 1090 de 2006 / ICFES – Problemáticas Psicológicas, Saber Pro.'
    },
    {
        id: 'PP-011',
        text: 'La técnica de reestructuración cognitiva de Aaron Beck busca:',
        options: [
            { id: 'a', text: 'Eliminar completamente los pensamientos negativos.' },
            { id: 'b', text: 'Identificar y modificar pensamientos distorsionados por otros más adaptativos.' },
            { id: 'c', text: 'Reprimir las emociones negativas.' },
            { id: 'd', text: 'Analizar únicamente los sueños del paciente.' }
        ],
        correctAnswer: 'b',
        explanation: 'La reestructuración cognitiva identifica distorsiones cognitivas y las reemplaza por interpretaciones más realistas y funcionales.',
        reference: 'ICFES – Problemáticas Psicológicas, Saber Pro / Beck (1979).'
    },
    {
        id: 'PP-012',
        context: 'Una comunidad rural presenta altas tasas de violencia intrafamiliar, consumo de sustancias y deserción escolar.',
        text: 'Desde la psicología comunitaria, la intervención más adecuada sería:',
        options: [
            { id: 'a', text: 'Atender individualmente a todos los afectados.' },
            { id: 'b', text: 'Diseñar una intervención participativa que empodere a la comunidad y aborde los determinantes sociales.' },
            { id: 'c', text: 'Trasladar a toda la comunidad a zona urbana.' },
            { id: 'd', text: 'Aplicar tests psicológicos a toda la población.' }
        ],
        correctAnswer: 'b',
        explanation: 'La psicología comunitaria privilegia intervenciones participativas que fortalezcan el tejido social y aborden factores estructurales.',
        reference: 'ICFES – Problemáticas Psicológicas, Saber Pro / Montero (2004).'
    },
    {
        id: 'PP-013',
        text: 'Según la jerarquía de necesidades de Maslow, ¿cuál necesidad debe satisfacerse primero?',
        options: [
            { id: 'a', text: 'Necesidades de autorrealización.' },
            { id: 'b', text: 'Necesidades de estima y reconocimiento.' },
            { id: 'c', text: 'Necesidades fisiológicas (alimento, agua, sueño).' },
            { id: 'd', text: 'Necesidades de pertenencia y afecto.' }
        ],
        correctAnswer: 'c',
        explanation: 'Maslow propone que las necesidades fisiológicas son la base de la pirámide y deben satisfacerse antes que las demás.',
        reference: 'ICFES – Problemáticas Psicológicas / Maslow (1943).'
    },
    {
        id: 'PP-014',
        text: 'El condicionamiento operante de B.F. Skinner se diferencia del condicionamiento clásico de Pavlov en que:',
        options: [
            { id: 'a', text: 'El operante se basa en las consecuencias de la conducta (refuerzo/castigo), mientras que el clásico se basa en la asociación de estímulos.' },
            { id: 'b', text: 'El operante solo funciona con animales, no con humanos.' },
            { id: 'c', text: 'El clásico fue propuesto después del operante.' },
            { id: 'd', text: 'No hay diferencia real entre ambos tipos de condicionamiento.' }
        ],
        correctAnswer: 'a',
        explanation: 'En el operante, la conducta es modificada por sus consecuencias (refuerzo positivo/negativo, castigo). En el clásico, se asocia un estímulo neutro con uno incondicionado.',
        reference: 'ICFES – Problemáticas Psicológicas / Skinner (1938).'
    },
    {
        id: 'PP-015',
        text: 'El concepto de "inconsciente" en la teoría freudiana se refiere a:',
        options: [
            { id: 'a', text: 'El estado de estar dormido o sedado.' },
            { id: 'b', text: 'Contenidos mentales (deseos, recuerdos, conflictos) que no están accesibles a la conciencia pero influyen en la conducta.' },
            { id: 'c', text: 'La incapacidad de pensar racionalmente.' },
            { id: 'd', text: 'Un estado patológico exclusivo de pacientes psiquiátricos.' }
        ],
        correctAnswer: 'b',
        explanation: 'Para Freud, el inconsciente contiene material reprimido (deseos, traumas, conflictos) que influye en la conducta, los sueños y los síntomas.',
        reference: 'ICFES – Problemáticas Psicológicas / Freud (1900).'
    },
    {
        id: 'PP-016',
        text: '¿Qué es el "consentimiento informado" en la práctica psicológica?',
        options: [
            { id: 'a', text: 'Un formulario legal que protege solo al psicólogo de demandas.' },
            { id: 'b', text: 'El proceso por el cual el paciente recibe información clara sobre el tratamiento, sus riesgos y beneficios, y acepta voluntariamente participar.' },
            { id: 'c', text: 'Un requisito opcional que solo se usa en investigación.' },
            { id: 'd', text: 'La firma de un contrato económico entre paciente y terapeuta.' }
        ],
        correctAnswer: 'b',
        explanation: 'El consentimiento informado es un derecho del paciente y una obligación ética del profesional. Implica información completa, comprensión y voluntariedad.',
        reference: 'Ley 1090 de 2006 / APA Ethics Code.'
    },
    {
        id: 'PP-017',
        text: 'Las funciones ejecutivas, localizadas principalmente en el lóbulo frontal, incluyen:',
        options: [
            { id: 'a', text: 'Solo la capacidad de mover las extremidades.' },
            { id: 'b', text: 'Planificación, toma de decisiones, inhibición de impulsos y memoria de trabajo.' },
            { id: 'c', text: 'Únicamente el procesamiento visual.' },
            { id: 'd', text: 'La regulación de la temperatura corporal.' }
        ],
        correctAnswer: 'b',
        explanation: 'Las funciones ejecutivas son procesos cognitivos de orden superior: planificación, flexibilidad cognitiva, inhibición, memoria de trabajo y toma de decisiones.',
        reference: 'ICFES – Problemáticas Psicológicas / Luria (1966).'
    },
    {
        id: 'PP-018',
        context: 'Un adolescente de 15 años es llevado a consulta por sus padres. El joven se niega a hablar con el psicólogo y manifiesta que no quiere estar allí.',
        text: 'La actuación más ética del psicólogo sería:',
        options: [
            { id: 'a', text: 'Obligar al menor a hablar, ya que los padres pagan la consulta.' },
            { id: 'b', text: 'Respetar su negativa y explicarle que la confidencialidad protege lo que diga, buscando construir un vínculo de confianza sin presionarlo.' },
            { id: 'c', text: 'Informar a los padres todo lo que el adolescente diga en sesión.' },
            { id: 'd', text: 'Recetar medicación para la ansiedad sin evaluación previa.' }
        ],
        correctAnswer: 'b',
        explanation: 'El principio de autonomía y el respeto por el consultante exigen construir un vínculo de confianza sin coerción. La confidencialidad con menores tiene matices, pero el primer paso es generar alianza terapéutica.',
        reference: 'Ley 1090 de 2006 / APA Ethics Code.'
    },
    {
        id: 'PP-019',
        text: 'La diferencia entre un psicólogo clínico y un psiquiatra es que:',
        options: [
            { id: 'a', text: 'No hay ninguna diferencia, ambos hacen exactamente lo mismo.' },
            { id: 'b', text: 'El psiquiatra es médico y puede prescribir medicamentos; el psicólogo usa intervenciones psicoterapéuticas y evaluación psicológica.' },
            { id: 'c', text: 'El psicólogo puede recetar medicamentos y el psiquiatra no.' },
            { id: 'd', text: 'El psiquiatra solo trata pacientes hospitalizados.' }
        ],
        correctAnswer: 'b',
        explanation: 'El psiquiatra tiene formación médica y puede prescribir psicofármacos. El psicólogo clínico utiliza psicoterapia, evaluación e intervención psicológica.',
        reference: 'ICFES – Problemáticas Psicológicas / Colegio Colombiano de Psicólogos.'
    },
    {
        id: 'PP-020',
        text: 'El síndrome de burnout se caracteriza por:',
        options: [
            { id: 'a', text: 'Un estado temporal de estrés que se resuelve con descanso de fin de semana.' },
            { id: 'b', text: 'Agotamiento emocional, despersonalización y baja realización personal, generalmente asociado al contexto laboral.' },
            { id: 'c', text: 'Una enfermedad viral que afecta el sistema nervioso.' },
            { id: 'd', text: 'Un trastorno de la personalidad según el DSM-5.' }
        ],
        correctAnswer: 'b',
        explanation: 'Maslach definió el burnout con tres dimensiones: agotamiento emocional, despersonalización (actitud cínica) y baja realización personal.',
        reference: 'ICFES – Problemáticas Psicológicas / Maslach & Jackson (1981).'
    },
    {
        id: 'PP-021',
        text: 'El enfoque humanista de Carl Rogers se fundamenta en:',
        options: [
            { id: 'a', text: 'El análisis de los sueños y el inconsciente.' },
            { id: 'b', text: 'La modificación de la conducta mediante estímulos y respuestas.' },
            { id: 'c', text: 'La consideración positiva incondicional, la empatía y la congruencia del terapeuta.' },
            { id: 'd', text: 'La prescripción de medicamentos para el equilibrio neuroquímico.' }
        ],
        correctAnswer: 'c',
        explanation: 'Rogers propuso tres condiciones necesarias y suficientes para el cambio: consideración positiva incondicional, comprensión empática y congruencia del terapeuta.',
        reference: 'ICFES – Problemáticas Psicológicas / Rogers (1957).'
    },
    {
        id: 'PP-022',
        text: 'El concepto de "autoeficacia" de Albert Bandura se refiere a:',
        options: [
            { id: 'a', text: 'La capacidad física de una persona para realizar actividades deportivas.' },
            { id: 'b', text: 'La creencia de una persona en su propia capacidad para organizar y ejecutar acciones necesarias para lograr resultados.' },
            { id: 'c', text: 'La autoestima general de una persona.' },
            { id: 'd', text: 'La eficacia de los medicamentos psiquiátricos.' }
        ],
        correctAnswer: 'b',
        explanation: 'La autoeficacia es la percepción de competencia personal: la creencia de que uno puede ejecutar las conductas necesarias para producir resultados deseados.',
        reference: 'ICFES – Problemáticas Psicológicas / Bandura (1977).'
    },
    {
        id: 'PP-023',
        context: 'Una investigación psicológica utiliza a participantes menores de edad sin obtener el consentimiento de sus padres o acudientes legales.',
        text: 'Esta situación viola el principio ético de:',
        options: [
            { id: 'a', text: 'Confidencialidad.' },
            { id: 'b', text: 'Beneficencia.' },
            { id: 'c', text: 'Consentimiento informado.' },
            { id: 'd', text: 'Justicia.' }
        ],
        correctAnswer: 'c',
        explanation: 'La investigación con menores requiere consentimiento informado de los padres/acudientes y asentimiento del menor. Es una obligación ética y legal.',
        reference: 'Ley 1090 de 2006 / APA Ethics Code / Resolución 8430 de 1993.'
    },
    {
        id: 'PP-024',
        text: 'La disonancia cognitiva (Festinger) se produce cuando:',
        options: [
            { id: 'a', text: 'Una persona tiene dos creencias o actitudes contradictorias simultáneamente, generando malestar psicológico.' },
            { id: 'b', text: 'Una persona olvida información importante.' },
            { id: 'c', text: 'Una persona sufre un trastorno de la percepción.' },
            { id: 'd', text: 'Dos personas tienen opiniones diferentes sobre un tema.' }
        ],
        correctAnswer: 'a',
        explanation: 'La disonancia cognitiva es la tensión entre cogniciones inconsistentes. Para reducirla, la persona cambia una creencia, añade nuevas cogniciones o minimiza la importancia del conflicto.',
        reference: 'ICFES – Problemáticas Psicológicas / Festinger (1957).'
    },
    {
        id: 'PP-025',
        text: '¿Cuál de las siguientes es una característica del trastorno del espectro autista (TEA) según el DSM-5?',
        options: [
            { id: 'a', text: 'Alucinaciones auditivas y visuales frecuentes.' },
            { id: 'b', text: 'Déficits persistentes en la comunicación e interacción social, y patrones restrictivos y repetitivos de comportamiento.' },
            { id: 'c', text: 'Episodios alternos de manía y depresión.' },
            { id: 'd', text: 'Miedo intenso a situaciones sociales específicas.' }
        ],
        correctAnswer: 'b',
        explanation: 'El DSM-5 define el TEA con dos criterios: déficits en comunicación/interacción social y patrones restrictivos/repetitivos de conducta, intereses o actividades.',
        reference: 'DSM-5 / ICFES – Problemáticas Psicológicas, Saber Pro.'
    },
    {
        id: 'PP-026',
        text: 'El efecto Hawthorne en investigación psicológica se refiere a:',
        options: [
            { id: 'a', text: 'La tendencia de los participantes a modificar su comportamiento cuando saben que están siendo observados.' },
            { id: 'b', text: 'El efecto placebo en tratamientos farmacológicos.' },
            { id: 'c', text: 'La influencia de la temperatura ambiental en la productividad.' },
            { id: 'd', text: 'El sesgo del investigador al interpretar resultados.' }
        ],
        correctAnswer: 'a',
        explanation: 'El efecto Hawthorne describe cómo las personas cambian su comportamiento por el simple hecho de saber que son observadas o que participan en un estudio.',
        reference: 'ICFES – Problemáticas Psicológicas / Mayo (1933).'
    },
    {
        id: 'PP-027',
        text: '¿Qué concepto psicoanalítico describe el mecanismo por el cual una persona atribuye a otros sus propios sentimientos inaceptables?',
        options: [
            { id: 'a', text: 'Sublimación.' },
            { id: 'b', text: 'Proyección.' },
            { id: 'c', text: 'Negación.' },
            { id: 'd', text: 'Racionalización.' }
        ],
        correctAnswer: 'b',
        explanation: 'La proyección es un mecanismo de defensa donde el individuo atribuye a otros sus propios impulsos o sentimientos inaceptables (ejemplo: "yo no estoy enojado, tú estás enojado").',
        reference: 'ICFES – Problemáticas Psicológicas / Freud, A. (1936).'
    },
    {
        id: 'PP-028',
        text: 'En la terapia familiar sistémica, el "paciente identificado" se refiere a:',
        options: [
            { id: 'a', text: 'El miembro de la familia que tiene el diagnóstico psiquiátrico más grave.' },
            { id: 'b', text: 'El miembro que la familia señala como "el problema", pero que desde el enfoque sistémico refleja una disfunción del sistema familiar completo.' },
            { id: 'c', text: 'El terapeuta que dirige la sesión familiar.' },
            { id: 'd', text: 'El miembro más sano de la familia.' }
        ],
        correctAnswer: 'b',
        explanation: 'En el enfoque sistémico, el "paciente identificado" es síntoma de un sistema familiar disfuncional. El foco terapéutico está en las interacciones del sistema, no solo en el individuo.',
        reference: 'ICFES – Problemáticas Psicológicas / Minuchin (1974).'
    },
    {
        id: 'PP-029',
        text: 'Las etapas del desarrollo psicosocial de Erik Erikson proponen que la crisis central de la adolescencia es:',
        options: [
            { id: 'a', text: 'Confianza vs. desconfianza.' },
            { id: 'b', text: 'Identidad vs. confusión de roles.' },
            { id: 'c', text: 'Generatividad vs. estancamiento.' },
            { id: 'd', text: 'Intimidad vs. aislamiento.' }
        ],
        correctAnswer: 'b',
        explanation: 'Erikson propone que la adolescencia se caracteriza por la búsqueda de identidad. El fracaso en esta tarea lleva a la confusión de roles.',
        reference: 'ICFES – Problemáticas Psicológicas / Erikson (1968).'
    },
    {
        id: 'PP-030',
        context: 'Un psicólogo recibe en consulta a una mujer de 35 años que relata episodios recurrentes de atracones de comida seguidos de conductas compensatorias (vómito autoprovocado y uso excesivo de laxantes).',
        text: 'El cuadro clínico descrito es consistente con:',
        options: [
            { id: 'a', text: 'Anorexia nerviosa tipo restrictivo.' },
            { id: 'b', text: 'Bulimia nerviosa.' },
            { id: 'c', text: 'Trastorno por atracón.' },
            { id: 'd', text: 'Trastorno de evitación/restricción de la ingesta.' }
        ],
        correctAnswer: 'b',
        explanation: 'La bulimia nerviosa se caracteriza por episodios recurrentes de atracones seguidos de conductas compensatorias inapropiadas (purga, ejercicio excesivo, ayuno).',
        reference: 'DSM-5 / ICFES – Problemáticas Psicológicas, Saber Pro.'
    },
    {
        id: 'PP-031',
        text: 'El sesgo de confirmación se refiere a:',
        options: [
            { id: 'a', text: 'La tendencia a buscar, interpretar y recordar información que confirma las creencias preexistentes.' },
            { id: 'b', text: 'La capacidad de confirmar hipótesis mediante el método científico.' },
            { id: 'c', text: 'El proceso de verificar la identidad de un paciente.' },
            { id: 'd', text: 'La tendencia a rechazar toda información nueva.' }
        ],
        correctAnswer: 'a',
        explanation: 'El sesgo de confirmación lleva a buscar evidencia que apoye nuestras creencias e ignorar la que las contradice, afectando el juicio clínico y la investigación.',
        reference: 'ICFES – Problemáticas Psicológicas / Kahneman (2011).'
    },
    {
        id: 'PP-032',
        text: 'La plasticidad cerebral se refiere a:',
        options: [
            { id: 'a', text: 'La rigidez del cerebro adulto que impide todo aprendizaje nuevo.' },
            { id: 'b', text: 'La capacidad del cerebro para reorganizarse formando nuevas conexiones neuronales a lo largo de la vida.' },
            { id: 'c', text: 'La consistencia blanda del tejido cerebral.' },
            { id: 'd', text: 'Un tipo de cirugía cerebral experimental.' }
        ],
        correctAnswer: 'b',
        explanation: 'La neuroplasticidad es la capacidad del cerebro para modificar su estructura y funciones en respuesta a la experiencia, el aprendizaje, las lesiones o el entrenamiento.',
        reference: 'ICFES – Problemáticas Psicológicas / Kandel (2000).'
    },
    {
        id: 'PP-033',
        text: '¿Cuál de las siguientes es una técnica propia de la terapia de aceptación y compromiso (ACT)?',
        options: [
            { id: 'a', text: 'Asociación libre y análisis de sueños.' },
            { id: 'b', text: 'Desensibilización sistemática y relajación progresiva.' },
            { id: 'c', text: 'Defusión cognitiva y aceptación experiencial.' },
            { id: 'd', text: 'Reestructuración cognitiva y registro de pensamientos.' }
        ],
        correctAnswer: 'c',
        explanation: 'La ACT utiliza defusión cognitiva (distanciarse de los pensamientos), aceptación experiencial, presencia en el momento y compromiso con valores. No busca cambiar los pensamientos sino cambiar la relación con ellos.',
        reference: 'ICFES – Problemáticas Psicológicas / Hayes (1999).'
    },
    {
        id: 'PP-034',
        text: 'Según Piaget, en la etapa de operaciones concretas (7-11 años), los niños adquieren la capacidad de:',
        options: [
            { id: 'a', text: 'Pensamiento abstracto e hipotético-deductivo.' },
            { id: 'b', text: 'Realizar operaciones lógicas sobre objetos concretos, incluyendo conservación, seriación y clasificación.' },
            { id: 'c', text: 'Solo imitar conductas observadas.' },
            { id: 'd', text: 'Hablar y caminar de forma independiente.' }
        ],
        correctAnswer: 'b',
        explanation: 'En operaciones concretas, los niños pueden pensar lógicamente sobre objetos concretos: conservación (la cantidad no cambia al cambiar la forma), seriación y clasificación.',
        reference: 'ICFES – Problemáticas Psicológicas / Piaget (1952).'
    },
    {
        id: 'PP-035',
        text: 'La Ley 1616 de 2013 en Colombia establece:',
        options: [
            { id: 'a', text: 'La regulación del ejercicio de la medicina general.' },
            { id: 'b', text: 'El derecho a la salud mental como prioritario, y la atención integral e integrada en salud mental.' },
            { id: 'c', text: 'La obligatoriedad de la psicoterapia para todos los ciudadanos.' },
            { id: 'd', text: 'La creación de hospitales psiquiátricos exclusivamente.' }
        ],
        correctAnswer: 'b',
        explanation: 'La Ley 1616 de 2013 (Ley de Salud Mental) garantiza el derecho a la salud mental como prioridad nacional y establece la atención integral en todos los niveles del sistema de salud.',
        reference: 'Ley 1616 de 2013 / ICFES – Problemáticas Psicológicas, Saber Pro.'
    }
];
