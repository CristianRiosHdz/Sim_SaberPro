/* ============================================================
   BANCO DE PREGUNTAS — Competencias Ciudadanas (35 preguntas)
   Fuentes: ICFES Saber Pro, Constitución Política de Colombia 1991.
   ============================================================ */

const COMPETENCIAS_CIUDADANAS_QUESTIONS = [
    {
        id: 'CC-001',
        text: 'Según la Constitución Política de Colombia de 1991, el Estado colombiano se define como:',
        options: [
            { id: 'a', text: 'Un Estado federal con monarquía constitucional.' },
            { id: 'b', text: 'Un Estado social de derecho, organizado en forma de república unitaria, descentralizada, con autonomía de sus entidades territoriales.' },
            { id: 'c', text: 'Una dictadura democrática con poder centralizado.' },
            { id: 'd', text: 'Un Estado confederado con sistema parlamentario.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Artículo 1 de la Constitución de 1991 define a Colombia como un "Estado social de derecho, organizado en forma de república unitaria, descentralizada."',
        reference: 'Constitución Política de Colombia, Art. 1 / ICFES Saber Pro.'
    },
    {
        id: 'CC-002',
        text: '¿Cuáles son los mecanismos de participación ciudadana establecidos en la Constitución de 1991?',
        options: [
            { id: 'a', text: 'Solo el voto en elecciones presidenciales.' },
            { id: 'b', text: 'El voto, el plebiscito, el referendo, la consulta popular, el cabildo abierto, la iniciativa legislativa y la revocatoria del mandato.' },
            { id: 'c', text: 'Solo las protestas callejeras y las huelgas.' },
            { id: 'd', text: 'La participación en partidos políticos exclusivamente.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Artículo 103 establece siete mecanismos de participación ciudadana que permiten la intervención directa de los ciudadanos en las decisiones públicas.',
        reference: 'Constitución Política de Colombia, Art. 103 / ICFES Saber Pro.'
    },
    {
        id: 'CC-003',
        text: 'La acción de tutela en Colombia protege:',
        options: [
            { id: 'a', text: 'Únicamente el derecho a la propiedad privada.' },
            { id: 'b', text: 'Los derechos fundamentales cuando estos resultan vulnerados o amenazados por la acción u omisión de una autoridad pública o particular.' },
            { id: 'c', text: 'Solo los derechos económicos de las empresas.' },
            { id: 'd', text: 'Los derechos colectivos al medio ambiente.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Artículo 86 establece la acción de tutela como mecanismo preferente y sumario para proteger derechos fundamentales.',
        reference: 'Constitución Política de Colombia, Art. 86 / ICFES Saber Pro.'
    },
    {
        id: 'CC-004',
        context: 'En una comunidad indígena del departamento del Cauca, las autoridades tradicionales toman una decisión sobre el uso de tierras resguardadas que entra en conflicto con una ordenanza municipal.',
        text: '¿Qué principio constitucional aplica en esta situación?',
        options: [
            { id: 'a', text: 'La ordenanza municipal siempre prevalece sobre las decisiones indígenas.' },
            { id: 'b', text: 'La jurisdicción especial indígena, que reconoce el derecho de los pueblos indígenas a ejercer funciones jurisdiccionales dentro de sus territorios de acuerdo con sus normas y procedimientos.' },
            { id: 'c', text: 'Las comunidades indígenas no tienen ningún reconocimiento legal en Colombia.' },
            { id: 'd', text: 'El conflicto debe resolverse exclusivamente por vía militar.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Artículo 246 reconoce la jurisdicción especial indígena. La Corte Constitucional ha establecido que la autonomía indígena debe respetarse siempre que no viole derechos fundamentales.',
        reference: 'Constitución Política, Art. 246 / ICFES Saber Pro.'
    },
    {
        id: 'CC-005',
        text: 'La separación de poderes en Colombia se organiza en:',
        options: [
            { id: 'a', text: 'Dos ramas: ejecutiva y legislativa.' },
            { id: 'b', text: 'Tres ramas: ejecutiva, legislativa y judicial, más organismos de control y organización electoral.' },
            { id: 'c', text: 'Cuatro ramas: ejecutiva, legislativa, judicial y militar.' },
            { id: 'd', text: 'Una sola rama con poder absoluto del presidente.' }
        ],
        correctAnswer: 'b',
        explanation: 'La Constitución establece tres ramas del poder público (ejecutiva, legislativa, judicial) más organismos autónomos e independientes como la Contraloría, la Procuraduría y la organización electoral.',
        reference: 'Constitución Política, Art. 113 / ICFES Saber Pro.'
    },
    {
        id: 'CC-006',
        text: 'El principio de igualdad ante la ley (Art. 13) implica que el Estado debe:',
        options: [
            { id: 'a', text: 'Tratar a todas las personas exactamente igual sin considerar sus circunstancias.' },
            { id: 'b', text: 'Promover condiciones de igualdad real y efectiva, adoptando medidas a favor de grupos discriminados o marginados (acciones afirmativas).' },
            { id: 'c', text: 'Garantizar que todos tengan el mismo salario.' },
            { id: 'd', text: 'Eliminar todas las diferencias culturales entre comunidades.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Art. 13 no solo prohíbe la discriminación, sino que obliga al Estado a adoptar medidas para lograr igualdad real y efectiva, especialmente para grupos históricamente marginados.',
        reference: 'Constitución Política, Art. 13 / ICFES Saber Pro.'
    },
    {
        id: 'CC-007',
        text: '¿Qué es la revocatoria del mandato?',
        options: [
            { id: 'a', text: 'El derecho del presidente a disolver el Congreso.' },
            { id: 'b', text: 'Un mecanismo de participación mediante el cual los ciudadanos pueden dar por terminado el mandato de un gobernador o alcalde elegido popularmente.' },
            { id: 'c', text: 'La renuncia voluntaria de un funcionario público.' },
            { id: 'd', text: 'La destitución de un juez por la Corte Suprema.' }
        ],
        correctAnswer: 'b',
        explanation: 'La revocatoria del mandato (Art. 103, Ley 134/1994) permite a los ciudadanos revocar el mandato de alcaldes y gobernadores si incumplen su programa de gobierno.',
        reference: 'Constitución Política, Art. 103 / Ley 134 de 1994.'
    },
    {
        id: 'CC-008',
        context: 'Una empresa privada se niega a contratar a una mujer embarazada argumentando que "generará costos adicionales por la licencia de maternidad".',
        text: 'Esta situación constituye:',
        options: [
            { id: 'a', text: 'Una decisión empresarial legítima basada en criterios económicos.' },
            { id: 'b', text: 'Discriminación por razón de género y estado de embarazo, prohibida por la Constitución y las leyes laborales colombianas.' },
            { id: 'c', text: 'Un caso que no tiene relevancia jurídica en Colombia.' },
            { id: 'd', text: 'Un asunto que debe resolverse exclusivamente entre las partes sin intervención estatal.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Art. 13 prohíbe la discriminación, y el Art. 43 protege especialmente a la mujer embarazada. La Corte Constitucional ha establecido que negar empleo por embarazo es discriminación.',
        reference: 'Constitución Política, Arts. 13 y 43 / ICFES Saber Pro.'
    },
    {
        id: 'CC-009',
        text: 'Los derechos fundamentales en la Constitución de 1991 se encuentran en:',
        options: [
            { id: 'a', text: 'El Título I, Capítulo 3.' },
            { id: 'b', text: 'El Título II, Capítulo 1 (Artículos 11 a 41).' },
            { id: 'c', text: 'El preámbulo de la Constitución.' },
            { id: 'd', text: 'Los artículos transitorios.' }
        ],
        correctAnswer: 'b',
        explanation: 'Los derechos fundamentales están consagrados en el Título II ("De los derechos, las garantías y los deberes"), Capítulo 1, artículos 11 al 41.',
        reference: 'Constitución Política de Colombia / ICFES Saber Pro.'
    },
    {
        id: 'CC-010',
        text: '¿Qué es el derecho de petición?',
        options: [
            { id: 'a', text: 'El derecho a solicitar créditos bancarios.' },
            { id: 'b', text: 'El derecho de toda persona a presentar peticiones respetuosas a las autoridades y obtener pronta resolución.' },
            { id: 'c', text: 'El derecho a protestar en la vía pública.' },
            { id: 'd', text: 'El derecho a elegir representantes.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Art. 23 consagra el derecho de petición: toda persona puede dirigirse a las autoridades para obtener respuesta pronta. Es un derecho fundamental.',
        reference: 'Constitución Política, Art. 23 / ICFES Saber Pro.'
    },
    {
        id: 'CC-011',
        text: 'La Corte Constitucional de Colombia tiene como función principal:',
        options: [
            { id: 'a', text: 'Juzgar delitos comunes y sancionar a los delincuentes.' },
            { id: 'b', text: 'Guardar la integridad y supremacía de la Constitución, decidiendo sobre demandas de inconstitucionalidad y revisando acciones de tutela.' },
            { id: 'c', text: 'Administrar las finanzas del Estado.' },
            { id: 'd', text: 'Nombrar a los gobernadores de cada departamento.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Art. 241 asigna a la Corte Constitucional la guarda de la supremacía de la Constitución. Revisa tutelas y decide demandas de inconstitucionalidad.',
        reference: 'Constitución Política, Art. 241 / ICFES Saber Pro.'
    },
    {
        id: 'CC-012',
        text: '¿Cuál es la diferencia entre un derecho fundamental y un derecho colectivo?',
        options: [
            { id: 'a', text: 'No hay diferencia, ambos se protegen de la misma manera.' },
            { id: 'b', text: 'Los derechos fundamentales protegen al individuo y se tutelan mediante acción de tutela; los derechos colectivos protegen intereses de la comunidad y se defienden mediante acciones populares.' },
            { id: 'c', text: 'Los derechos colectivos son más importantes que los fundamentales.' },
            { id: 'd', text: 'Los derechos fundamentales solo se aplican a los mayores de edad.' }
        ],
        correctAnswer: 'b',
        explanation: 'Los derechos fundamentales (Cap. 1, Título II) se protegen con tutela. Los derechos colectivos (Art. 88) como el ambiente sano se protegen con acciones populares.',
        reference: 'Constitución Política, Arts. 86 y 88 / ICFES Saber Pro.'
    },
    {
        id: 'CC-013',
        text: 'El Artículo 67 de la Constitución establece que la educación es:',
        options: [
            { id: 'a', text: 'Un privilegio solo para quienes puedan pagarla.' },
            { id: 'b', text: 'Un derecho de la persona y un servicio público con función social.' },
            { id: 'c', text: 'Una responsabilidad exclusiva del sector privado.' },
            { id: 'd', text: 'Obligatoria solo para los hombres.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Art. 67 define la educación como derecho y servicio público. Es obligatoria entre los 5 y 15 años y será gratuita en las instituciones del Estado.',
        reference: 'Constitución Política, Art. 67 / ICFES Saber Pro.'
    },
    {
        id: 'CC-014',
        context: 'Un grupo de vecinos de un barrio quiere presentar una propuesta de proyecto de ley al Congreso para regular el uso de espacios públicos.',
        text: 'El mecanismo de participación que deben utilizar es:',
        options: [
            { id: 'a', text: 'Cabildo abierto.' },
            { id: 'b', text: 'Iniciativa legislativa popular.' },
            { id: 'c', text: 'Referendo.' },
            { id: 'd', text: 'Plebiscito.' }
        ],
        correctAnswer: 'b',
        explanation: 'La iniciativa legislativa popular permite a los ciudadanos presentar proyectos de ley al Congreso. Requiere la firma de al menos el 5% del censo electoral.',
        reference: 'Constitución Política, Art. 155 / Ley 134 de 1994.'
    },
    {
        id: 'CC-015',
        text: 'El concepto de "Estado social de derecho" implica que:',
        options: [
            { id: 'a', text: 'El Estado solo debe garantizar derechos civiles y políticos, sin intervenir en lo social.' },
            { id: 'b', text: 'El Estado tiene la obligación de garantizar no solo libertades, sino también condiciones materiales de vida digna (salud, educación, trabajo) para todos.' },
            { id: 'c', text: 'Todos los ciudadanos deben ganar el mismo salario.' },
            { id: 'd', text: 'El Estado administra directamente todas las empresas.' }
        ],
        correctAnswer: 'b',
        explanation: 'El "Estado social de derecho" combina la protección de libertades individuales con la garantía de derechos sociales y económicos, buscando igualdad material y vida digna.',
        reference: 'Constitución Política, Art. 1 / Corte Constitucional, Sentencia T-406/1992.'
    },
    {
        id: 'CC-016',
        text: 'La libertad de expresión en Colombia:',
        options: [
            { id: 'a', text: 'Es un derecho absoluto sin ningún límite.' },
            { id: 'b', text: 'Está protegida por la Constitución, pero tiene límites cuando colisiona con otros derechos como el buen nombre, la honra y la intimidad.' },
            { id: 'c', text: 'Solo protege a los periodistas registrados.' },
            { id: 'd', text: 'Fue eliminada por una reforma constitucional.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Art. 20 protege la libertad de expresión e información, pero la Corte Constitucional ha establecido que no es absoluta: debe balancearse con derechos como la honra (Art. 21) y la intimidad (Art. 15).',
        reference: 'Constitución Política, Arts. 20 y 21 / ICFES Saber Pro.'
    },
    {
        id: 'CC-017',
        text: '¿Qué función cumple la Procuraduría General de la Nación?',
        options: [
            { id: 'a', text: 'Investigar y sancionar penalmente a los ciudadanos.' },
            { id: 'b', text: 'Vigilar la conducta oficial de los servidores públicos, defender los derechos humanos y representar a la sociedad.' },
            { id: 'c', text: 'Administrar el presupuesto nacional.' },
            { id: 'd', text: 'Comandar las fuerzas armadas del país.' }
        ],
        correctAnswer: 'b',
        explanation: 'La Procuraduría (Art. 277) es un organismo de control que vigila la conducta de los funcionarios públicos, promueve los derechos humanos y defiende el interés público.',
        reference: 'Constitución Política, Art. 277 / ICFES Saber Pro.'
    },
    {
        id: 'CC-018',
        text: 'El Artículo 22 de la Constitución declara que "la paz es un derecho y un deber de obligatorio cumplimiento." Esto significa que:',
        options: [
            { id: 'a', text: 'Los ciudadanos pueden ser obligados a servir en el ejército en cualquier momento.' },
            { id: 'b', text: 'Tanto el Estado como los ciudadanos tienen la responsabilidad de contribuir a la construcción y mantenimiento de la paz.' },
            { id: 'c', text: 'La paz solo depende del gobierno y los ciudadanos no tienen ninguna obligación.' },
            { id: 'd', text: 'Solo se refiere a la ausencia de guerra y no tiene otras implicaciones.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Art. 22 establece la paz como derecho (exigible al Estado) y deber (obligación de todos). Implica convivencia pacífica, resolución de conflictos y no violencia.',
        reference: 'Constitución Política, Art. 22 / ICFES Saber Pro.'
    },
    {
        id: 'CC-019',
        text: 'La Defensoría del Pueblo tiene como función principal:',
        options: [
            { id: 'a', text: 'Defender al Estado contra demandas ciudadanas.' },
            { id: 'b', text: 'Velar por la promoción, ejercicio y divulgación de los derechos humanos.' },
            { id: 'c', text: 'Administrar la justicia penal.' },
            { id: 'd', text: 'Recaudar impuestos nacionales.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Art. 282 establece que el Defensor del Pueblo vela por los derechos humanos, asesora a los ciudadanos y puede interponer acciones de tutela y populares.',
        reference: 'Constitución Política, Art. 282 / ICFES Saber Pro.'
    },
    {
        id: 'CC-020',
        context: 'Una alcaldía municipal aprueba un plan de desarrollo que elimina un parque público para construir un centro comercial, sin realizar consulta ciudadana previa.',
        text: 'Esta decisión podría vulnerar:',
        options: [
            { id: 'a', text: 'El derecho de propiedad del alcalde.' },
            { id: 'b', text: 'El derecho a la participación ciudadana, al goce de un ambiente sano y al espacio público.' },
            { id: 'c', text: 'Ningún derecho, porque el alcalde tiene autoridad sobre el territorio.' },
            { id: 'd', text: 'Solo los derechos de los trabajadores del parque.' }
        ],
        correctAnswer: 'b',
        explanation: 'Se vulneran el derecho a la participación (Art. 40), al ambiente sano (Art. 79) y al espacio público (Art. 82). Las decisiones que afectan a la comunidad requieren participación.',
        reference: 'Constitución Política, Arts. 40, 79 y 82 / ICFES Saber Pro.'
    },
    {
        id: 'CC-021',
        text: '¿Qué establece el Art. 44 sobre los derechos de los niños?',
        options: [
            { id: 'a', text: 'Los niños solo tienen los mismos derechos que los adultos.' },
            { id: 'b', text: 'Los derechos de los niños prevalecen sobre los derechos de los demás.' },
            { id: 'c', text: 'Los niños no tienen derechos hasta cumplir los 18 años.' },
            { id: 'd', text: 'Los padres deciden qué derechos tienen sus hijos.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Art. 44 establece que los derechos de los niños prevalecen sobre los de los demás. Incluye vida, integridad, salud, alimentación, educación, recreación y protección.',
        reference: 'Constitución Política, Art. 44 / ICFES Saber Pro.'
    },
    {
        id: 'CC-022',
        text: '¿Qué es un referendo constitucional?',
        options: [
            { id: 'a', text: 'Una elección para elegir al presidente de la república.' },
            { id: 'b', text: 'Una convocatoria al pueblo para que apruebe o rechace un proyecto de reforma constitucional.' },
            { id: 'c', text: 'Una encuesta de opinión realizada por el Congreso.' },
            { id: 'd', text: 'Un mecanismo exclusivo del poder judicial.' }
        ],
        correctAnswer: 'b',
        explanation: 'El referendo constitucional (Art. 378) somete a aprobación del pueblo un proyecto de reforma a la Constitución.',
        reference: 'Constitución Política, Art. 378 / ICFES Saber Pro.'
    },
    {
        id: 'CC-023',
        text: 'El reconocimiento de la diversidad étnica y cultural en Colombia (Art. 7) implica que:',
        options: [
            { id: 'a', text: 'Todas las culturas deben uniformarse bajo una sola tradición nacional.' },
            { id: 'b', text: 'El Estado reconoce y protege la diversidad de etnias y culturas que conforman la nación colombiana.' },
            { id: 'c', text: 'Solo se reconoce la cultura de la mayoría.' },
            { id: 'd', text: 'Las minorías étnicas no tienen derechos especiales.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Art. 7 declara que "el Estado reconoce y protege la diversidad étnica y cultural de la Nación colombiana." Esto fundamenta los derechos de pueblos indígenas, afrodescendientes y ROM.',
        reference: 'Constitución Política, Art. 7 / ICFES Saber Pro.'
    },
    {
        id: 'CC-024',
        text: 'La objeción de conciencia es el derecho a:',
        options: [
            { id: 'a', text: 'Desobedecer cualquier ley sin consecuencias.' },
            { id: 'b', text: 'Negarse a cumplir una obligación legal por razones profundas de conciencia (religiosas, éticas o morales), cuando la Constitución lo permite.' },
            { id: 'c', text: 'Protestar violentamente contra el gobierno.' },
            { id: 'd', text: 'Renunciar a la nacionalidad colombiana.' }
        ],
        correctAnswer: 'b',
        explanation: 'La objeción de conciencia (Art. 18, libertad de conciencia) permite negarse a una obligación por razones éticas profundas. La Corte Constitucional la ha reconocido para el servicio militar.',
        reference: 'Constitución Política, Art. 18 / Corte Constitucional, Sentencia C-728/2009.'
    },
    {
        id: 'CC-025',
        text: 'La Contraloría General de la República se encarga de:',
        options: [
            { id: 'a', text: 'Juzgar a los políticos corruptos.' },
            { id: 'b', text: 'Vigilar la gestión fiscal del Estado y controlar el manejo de los recursos y bienes públicos.' },
            { id: 'c', text: 'Dirigir la política exterior del país.' },
            { id: 'd', text: 'Aprobar las leyes del Congreso.' }
        ],
        correctAnswer: 'b',
        explanation: 'La Contraloría (Art. 267) ejerce el control fiscal: vigila que los recursos públicos se gasten correctamente y conforme a la ley.',
        reference: 'Constitución Política, Art. 267 / ICFES Saber Pro.'
    },
    {
        id: 'CC-026',
        text: '¿Cuál es el periodo presidencial en Colombia según la Constitución vigente?',
        options: [
            { id: 'a', text: '6 años con reelección indefinida.' },
            { id: 'b', text: '4 años, sin posibilidad de reelección inmediata.' },
            { id: 'c', text: '5 años con una reelección.' },
            { id: 'd', text: '3 años sin reelección.' }
        ],
        correctAnswer: 'b',
        explanation: 'El periodo presidencial es de 4 años. Tras el Acto Legislativo 02 de 2015, se eliminó la posibilidad de reelección presidencial inmediata.',
        reference: 'Constitución Política, Art. 190 / Acto Legislativo 02 de 2015.'
    },
    {
        id: 'CC-027',
        context: 'Un ciudadano colombiano es detenido por la policía. No se le informa el motivo de su detención ni se le permite comunicarse con un abogado.',
        text: 'Esta situación vulnera:',
        options: [
            { id: 'a', text: 'Ningún derecho, porque la policía puede detener a cualquier persona.' },
            { id: 'b', text: 'El derecho al debido proceso (Art. 29) y a la libertad personal (Art. 28).' },
            { id: 'c', text: 'Solo el derecho a voto del ciudadano.' },
            { id: 'd', text: 'El derecho a la propiedad privada.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Art. 29 (debido proceso) garantiza la presunción de inocencia y asistencia de abogado. El Art. 28 protege la libertad personal: nadie puede ser detenido sin orden judicial o flagrancia, y debe ser informado del motivo.',
        reference: 'Constitución Política, Arts. 28 y 29 / ICFES Saber Pro.'
    },
    {
        id: 'CC-028',
        text: 'La consulta previa es un derecho de los pueblos indígenas y comunidades étnicas que implica:',
        options: [
            { id: 'a', text: 'Que el gobierno les informe después de tomar decisiones que los afectan.' },
            { id: 'b', text: 'Que deben ser consultados de manera previa, libre e informada antes de tomar decisiones que puedan afectar directamente sus territorios o cultura.' },
            { id: 'c', text: 'Que tienen derecho a vetar cualquier decisión del Estado.' },
            { id: 'd', text: 'Que las comunidades deben pagar por la información del gobierno.' }
        ],
        correctAnswer: 'b',
        explanation: 'La consulta previa (Convenio 169 de la OIT, ratificado por Colombia) obliga al Estado a consultar a las comunidades étnicas antes de adoptar medidas que las afecten directamente.',
        reference: 'Convenio 169 OIT / Art. 330 Constitución / ICFES Saber Pro.'
    },
    {
        id: 'CC-029',
        text: 'El derecho al habeas corpus garantiza:',
        options: [
            { id: 'a', text: 'El derecho a recibir educación gratuita.' },
            { id: 'b', text: 'Que toda persona privada de la libertad pueda acudir ante un juez para que este determine si su detención es legal.' },
            { id: 'c', text: 'El derecho a la propiedad intelectual.' },
            { id: 'd', text: 'El derecho a la libre circulación sin restricciones.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Art. 30 establece el habeas corpus: quien esté privado de libertad y crea estarlo ilegalmente tiene derecho a acudir ante un juez. Este debe resolver en un plazo de 36 horas.',
        reference: 'Constitución Política, Art. 30 / ICFES Saber Pro.'
    },
    {
        id: 'CC-030',
        text: '¿Cuál es la función del Congreso de la República?',
        options: [
            { id: 'a', text: 'Ejecutar las leyes y administrar el Estado.' },
            { id: 'b', text: 'Hacer las leyes, reformar la Constitución, ejercer control político sobre el gobierno y aprobar el presupuesto nacional.' },
            { id: 'c', text: 'Administrar justicia y resolver conflictos entre ciudadanos.' },
            { id: 'd', text: 'Comandar las fuerzas militares del país.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Congreso (Art. 114) tiene funciones legislativas (hacer leyes), constituyentes (reformar la Constitución), de control político y electorales.',
        reference: 'Constitución Política, Art. 114 / ICFES Saber Pro.'
    },
    {
        id: 'CC-031',
        text: 'El principio de la dignidad humana en la Constitución de 1991:',
        options: [
            { id: 'a', text: 'Es opcional y solo se aplica en ciertos casos.' },
            { id: 'b', text: 'Es el fundamento de todo el ordenamiento constitucional y de todos los derechos fundamentales.' },
            { id: 'c', text: 'Solo se aplica a los ciudadanos colombianos por nacimiento.' },
            { id: 'd', text: 'Fue eliminado en una reforma posterior.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Art. 1 establece que Colombia está fundada en "el respeto de la dignidad humana." La Corte Constitucional la define como el principio fundante de todo el orden constitucional.',
        reference: 'Constitución Política, Art. 1 / Corte Constitucional, Sentencia T-881/2002.'
    },
    {
        id: 'CC-032',
        text: 'Las acciones populares protegen:',
        options: [
            { id: 'a', text: 'Los derechos individuales de una sola persona.' },
            { id: 'b', text: 'Los derechos e intereses colectivos, como el espacio público, el medio ambiente y la moralidad administrativa.' },
            { id: 'c', text: 'Solo los intereses de los partidos políticos.' },
            { id: 'd', text: 'Los derechos de propiedad de las empresas privadas.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Art. 88 establece las acciones populares para proteger derechos colectivos como el patrimonio público, el espacio público, la seguridad y la salubridad.',
        reference: 'Constitución Política, Art. 88 / ICFES Saber Pro.'
    },
    {
        id: 'CC-033',
        text: '¿Qué se entiende por "bloque de constitucionalidad"?',
        options: [
            { id: 'a', text: 'El edificio donde funciona la Corte Constitucional.' },
            { id: 'b', text: 'El conjunto de normas constitucionales y tratados internacionales de derechos humanos ratificados por Colombia que tienen jerarquía constitucional.' },
            { id: 'c', text: 'Un grupo de senadores que bloquea proyectos de ley.' },
            { id: 'd', text: 'Los artículos transitorios de la Constitución.' }
        ],
        correctAnswer: 'b',
        explanation: 'El bloque de constitucionalidad (Art. 93) integra los tratados internacionales de DD.HH. ratificados por Colombia al corpus constitucional, sirviendo como parámetro de control.',
        reference: 'Constitución Política, Art. 93 / ICFES Saber Pro.'
    },
    {
        id: 'CC-034',
        text: 'La libertad de cultos (Art. 19) garantiza que:',
        options: [
            { id: 'a', text: 'Colombia tiene una religión oficial que todos deben profesar.' },
            { id: 'b', text: 'Toda persona tiene derecho a profesar libremente su religión y a difundirla. Todas las confesiones religiosas son igualmente libres ante la ley.' },
            { id: 'c', text: 'Solo el catolicismo tiene reconocimiento legal en Colombia.' },
            { id: 'd', text: 'Las personas ateas no tienen protección constitucional.' }
        ],
        correctAnswer: 'b',
        explanation: 'El Art. 19 garantiza libertad religiosa e igualdad de todas las confesiones. A diferencia de la Constitución de 1886, la de 1991 no establece religión oficial.',
        reference: 'Constitución Política, Art. 19 / ICFES Saber Pro.'
    },
    {
        id: 'CC-035',
        text: 'El derecho a la salud en Colombia (Art. 49) fue reconocido como derecho fundamental autónomo por:',
        options: [
            { id: 'a', text: 'Un decreto presidencial de emergencia.' },
            { id: 'b', text: 'La Ley Estatutaria 1751 de 2015, que regula el derecho fundamental a la salud.' },
            { id: 'c', text: 'La Constitución original de 1991 sin modificaciones.' },
            { id: 'd', text: 'Un fallo de la Corte Interamericana de Derechos Humanos.' }
        ],
        correctAnswer: 'b',
        explanation: 'Aunque el Art. 49 ya mencionaba la salud, la Ley 1751 de 2015 la elevó formalmente a derecho fundamental autónomo, exigible por vía de tutela.',
        reference: 'Ley Estatutaria 1751 de 2015 / ICFES Saber Pro.'
    }
];
