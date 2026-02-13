/* ============================================================
   BANCO DE PREGUNTAS — Cultura General
   Un módulo transversal que abarca historia, ciencia, artes,
   geografía y actualidad.
   ============================================================ */

const CULTURA_GENERAL_QUESTIONS = [
    {
        id: 'CG-001',
        context: 'La carrera espacial fue uno de los ejes centrales de la Guerra Fría, representando no solo un avance tecnológico, sino una competencia ideológica entre Estados Unidos y la Unión Soviética.',
        text: '¿Cuál fue el primer ser vivo en orbitar la Tierra a bordo de una nave espacial?',
        options: [
            { id: 'a', text: 'Yuri Gagarin' },
            { id: 'b', text: 'La perra Laika' },
            { id: 'c', text: 'El chimpancé Ham' },
            { id: 'd', text: 'Neil Armstrong' }
        ],
        correctAnswer: 'b',
        explanation: 'La perra Laika fue enviada al espacio a bordo del Sputnik 2 por la Unión Soviética el 3 de noviembre de 1957. Fue el primer ser vivo en orbitar la Tierra, aunque lamentablemente falleció durante la misión.',
        reference: 'NASA - History of Space Exploration / Britannica.'
    },
    {
        id: 'CG-002',
        context: 'El Renacimiento fue un periodo de gran florecimiento cultural y artístico en Europa, marcando la transición entre la Edad Media y la Edad Moderna.',
        text: '¿Quién pintó el famoso fresco "La escuela de Atenas", ubicado en las estancias del Vaticano?',
        options: [
            { id: 'a', text: 'Leonardo da Vinci' },
            { id: 'b', text: 'Miguel Ángel' },
            { id: 'c', text: 'Rafael Sanzio' },
            { id: 'd', text: 'Donatello' }
        ],
        correctAnswer: 'c',
        explanation: 'Rafael Sanzio pintó "La escuela de Atenas" entre 1509 y 1511. La obra es una de las cimas del Renacimiento y representa a los grandes filósofos de la antigüedad clásica como Platón y Aristóteles.',
        reference: 'Museos Vaticanos - Guía de Arte Renacentista.'
    },
    {
        id: 'CG-003',
        context: 'La teoría de la relatividad cambió para siempre nuestra comprensión del universo, el tiempo y el espacio.',
        text: '¿Cuál es el científico autor de la famosa ecuación E=mc²?',
        options: [
            { id: 'a', text: 'Isaac Newton' },
            { id: 'b', text: 'Albert Einstein' },
            { id: 'c', text: 'Stephen Hawking' },
            { id: 'd', text: 'Marie Curie' }
        ],
        correctAnswer: 'b',
        explanation: 'Albert Einstein publicó la teoría de la relatividad especial en 1905, de la cual deriva la ecuación E=mc², que establece la equivalencia entre masa (m) y energía (E).',
        reference: 'Nobel Prize - Physics Heritage.'
    },
    {
        id: 'CG-004',
        context: 'La geografía política de América Latina es el resultado de complejos procesos de independencia y tratados fronterizos.',
        text: '¿Cuál es el único país de Sudamérica que tiene costas tanto en el Océano Pacífico como en el Océano Atlántico (Mar Caribe)?',
        options: [
            { id: 'a', text: 'Brasil' },
            { id: 'b', text: 'Panamá' },
            { id: 'c', text: 'Colombia' },
            { id: 'd', text: 'Venezuela' }
        ],
        correctAnswer: 'c',
        explanation: 'Colombia es el único país de América del Sur con acceso a ambos océanos. Panamá también tiene acceso a ambos, pero geográficamente es parte de América Central.',
        reference: 'Instituto Geográfico Agustín Codazzi (IGAC).'
    },
    {
        id: 'CG-005',
        context: 'La literatura universal nos ha legado obras que exploran la condición humana en situaciones extremas y fantásticas.',
        text: '¿En qué novela de 1949 de George Orwell aparece el concepto del "Gran Hermano" (Big Brother)?',
        options: [
            { id: 'a', text: 'Rebelión en la granja' },
            { id: 'b', text: 'Un mundo feliz' },
            { id: 'c', text: 'Fahrenheit 451' },
            { id: 'd', text: '1984' }
        ],
        correctAnswer: 'd',
        explanation: 'En la novela distópica "1984", Orwell presenta una sociedad vigilada constantemente por el "Gran Hermano", símbolo del poder totalitario y la pérdida de la privacidad.',
        reference: 'Oxford World\'s Classics - Literature Guides.'
    },
    {
        id: 'CG-006',
        context: 'El sistema solar está compuesto por una amplia variedad de cuerpos celestes, desde planetas gigantes gaseosos hasta pequeños asteroides.',
        text: '¿Cuál es el planeta más grande de nuestro sistema solar?',
        options: [
            { id: 'a', text: 'Saturno' },
            { id: 'b', text: 'Urano' },
            { id: 'c', text: 'Júpiter' },
            { id: 'd', text: 'Neptuno' }
        ],
        correctAnswer: 'c',
        explanation: 'Júpiter es el planeta de mayor dimensión y masa en el sistema solar. Es un gigante gaseoso con una masa 318 veces mayor que la de la Tierra.',
        reference: 'NASA Science - Solar System Exploration.'
    },
    {
        id: 'CG-007',
        context: 'La Revolución Industrial marcó un hito en la historia de la humanidad al transformar los métodos de producción y la estructura social.',
        text: '¿En qué país se originó la Revolución Industrial a finales del siglo XVIII?',
        options: [
            { id: 'a', text: 'Francia' },
            { id: 'b', text: 'Estados Unidos' },
            { id: 'c', text: 'Alemania' },
            { id: 'd', text: 'Gran Bretaña (Reino Unido)' }
        ],
        correctAnswer: 'd',
        explanation: 'La Revolución Industrial comenzó en Gran Bretaña gracias a la combinación de recursos naturales (carbón y hierro), avances tecnológicos (máquina de vapor) y un sistema financiero sólido.',
        reference: 'History Channel - Industrial Revolution Archives.'
    },
    {
        id: 'CG-008',
        context: 'El cuerpo humano es una máquina biológica compleja coordinada por el sistema nervioso.',
        text: '¿Cuál es el órgano responsable del bombeo de sangre a todo el cuerpo?',
        options: [
            { id: 'a', text: 'Los pulmones' },
            { id: 'b', text: 'El hígado' },
            { id: 'c', text: 'El corazón' },
            { id: 'd', text: 'El cerebro' }
        ],
        correctAnswer: 'c',
        explanation: 'El corazón actúa como una bomba muscular que impulsa la sangre a través del sistema circulatorio, suministrando oxígeno y nutrientes a todos los tejidos.',
        reference: 'Mayo Clinic - Human Anatomy Guide.'
    },
    {
        id: 'CG-009',
        context: 'La música clásica ha pasado por diversos periodos, siendo el Barroco uno de los más ornamentados y complejos.',
        text: '¿Quién es el compositor de las famosas "Cuatro Estaciones"?',
        options: [
            { id: 'a', text: 'Johann Sebastian Bach' },
            { id: 'b', text: 'Wolfgang Amadeus Mozart' },
            { id: 'c', text: 'Ludwig van Beethoven' },
            { id: 'd', text: 'Antonio Vivaldi' }
        ],
        correctAnswer: 'd',
        explanation: 'Antonio Vivaldi, compositor barroco italiano, escribió "Las Cuatro Estaciones" (una serie de cuatro conciertos para violín) en 1723.',
        reference: 'Classic FM - Composer Biographies.'
    },
    {
        id: 'CG-010',
        context: 'La Segunda Guerra Mundial fue el conflicto bélico más extenso y costoso de la historia humana.',
        text: '¿En qué año terminó oficialmente la Segunda Guerra Mundial?',
        options: [
            { id: 'a', text: '1918' },
            { id: 'b', text: '1945' },
            { id: 'c', text: '1939' },
            { id: 'd', text: '1950' }
        ],
        correctAnswer: 'b',
        explanation: 'La Segunda Guerra Mundial finalizó en 1945 con la rendición incondicional de Alemania en mayo y de Japón en septiembre del mismo año.',
        reference: 'United Nations - History Archives.'
    },
    {
        id: 'CG-011',
        context: 'El derecho humano a la libertad y la igualdad fue proclamado en documentos históricos fundamentales tras procesos revolucionarios.',
        text: '¿En qué ciudad se firmó la Declaración Universal de los Derechos Humanos en 1948?',
        options: [
            { id: 'a', text: 'Nueva York' },
            { id: 'b', text: 'Ginebra' },
            { id: 'c', text: 'París' },
            { id: 'd', text: 'Londres' }
        ],
        correctAnswer: 'c',
        explanation: 'La Declaración Universal de los Derechos Humanos fue adoptada por la Asamblea General de las Naciones Unidas en París el 10 de diciembre de 1948.',
        reference: 'Naciones Unidas - Derechos Humanos.'
    },
    {
        id: 'CG-012',
        context: 'La tabla periódica organiza los elementos químicos según sus propiedades y número atómico.',
        text: '¿Cuál es el símbolo químico del Oro?',
        options: [
            { id: 'a', text: 'Ag' },
            { id: 'b', text: 'Fe' },
            { id: 'c', text: 'Au' },
            { id: 'd', text: 'Pb' }
        ],
        correctAnswer: 'c',
        explanation: 'El símbolo del Oro es "Au", proveniente del latín "aurum". Ag es Plata, Fe es Hierro y Pb es Plomo.',
        reference: 'IUPAC - Periodic Table of Elements.'
    },
    {
        id: 'CG-013',
        context: 'La filosofía griega sentó las bases del pensamiento occidental mediante el uso de la razón y el cuestionamiento constante.',
        text: '¿Quién fue el maestro de Alejandro Magno y discípulo de Platón?',
        options: [
            { id: 'a', text: 'Sócrates' },
            { id: 'b', text: 'Aristóteles' },
            { id: 'c', text: 'Heródoto' },
            { id: 'd', text: 'Epicuro' }
        ],
        correctAnswer: 'b',
        explanation: 'Aristóteles fue uno de los filósofos más influyentes de la historia; estudió en la Academia de Platón y años más tarde fue tutor del futuro rey Alejandro Magno de Macedonia.',
        reference: 'Stanford Encyclopedia of Philosophy.'
    },
    {
        id: 'CG-014',
        context: 'La informática moderna se basa en el procesamiento de información mediante bits y software.',
        text: '¿Quién es considerado a menudo como el "padre de la informática" por su diseño de la Máquina Analítica?',
        options: [
            { id: 'a', text: 'Alan Turing' },
            { id: 'b', text: 'Bill Gates' },
            { id: 'c', text: 'Charles Babbage' },
            { id: 'd', text: 'Steve Jobs' }
        ],
        correctAnswer: 'c',
        explanation: 'Charles Babbage diseñó la Máquina Analítica en el siglo XIX, un diseño mecánico que contenía todos los elementos esenciales de una computadora moderna (memoria, procesador y entrada de datos).',
        reference: 'Science Museum London - Computer History.'
    },
    {
        id: 'CG-015',
        context: 'La Amazonía es el bosque tropical más grande del mundo y juega un papel crucial en la regulación del clima global.',
        text: '¿En qué continente se encuentra la selva amazónica?',
        options: [
            { id: 'a', text: 'África' },
            { id: 'b', text: 'Sudamérica' },
            { id: 'c', text: 'Asia' },
            { id: 'd', text: 'Oceanía' }
        ],
        correctAnswer: 'b',
        explanation: 'La selva amazónica se extiende por nueve países de Sudamérica, siendo Brasil y Perú los que poseen la mayor parte de su territorio.',
        reference: 'National Geographic - Amazon Rainforest.'
    }
];
