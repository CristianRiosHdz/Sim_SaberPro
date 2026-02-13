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
    },
    {
        id: 'CG-016',
        context: 'La literatura española del Siglo de Oro produjo la que es considerada por muchos como la primera novela moderna de la historia.',
        text: '¿Quién es el autor de "El ingenioso hidalgo Don Quijote de la Mancha"?',
        options: [
            { id: 'a', text: 'Lope de Vega' },
            { id: 'b', text: 'Miguel de Cervantes Saavedra' },
            { id: 'c', text: 'Francisco de Quevedo' },
            { id: 'd', text: 'Federico García Lorca' }
        ],
        correctAnswer: 'b',
        explanation: 'Miguel de Cervantes Saavedra publicó la primera parte del Quijote en 1605, revolucionando la narrativa universal mediante el uso de la polifonía y la metaficción.',
        reference: 'Biblioteca Virtual Miguel de Cervantes.'
    },
    {
        id: 'CG-017',
        context: 'La mitología griega ha influido profundamente en el arte, la psicología y la terminología científica occidental.',
        text: '¿Quién era el dios del inframundo en la mitología griega?',
        options: [
            { id: 'a', text: 'Zeus' },
            { id: 'b', text: 'Poseidón' },
            { id: 'c', text: 'Hades' },
            { id: 'd', text: 'Ares' }
        ],
        correctAnswer: 'c',
        explanation: 'Hades es el hermano de Zeus y Poseidón, y le correspondió el gobierno del mundo subterráneo o inframundo. Zeus gobierna el cielo y Poseidón los mares.',
        reference: 'Manual de Mitología Griega - Ed. Gredos.'
    },
    {
        id: 'CG-018',
        context: 'El agua es una molécula esencial para la vida tal como la conocemos, con propiedades químicas únicas debido a sus puentes de hidrógeno.',
        text: '¿Cuál es la fórmula química del agua?',
        options: [
            { id: 'a', text: 'CO2' },
            { id: 'b', text: 'NaCl' },
            { id: 'c', text: 'H2O' },
            { id: 'd', text: 'O2' }
        ],
        correctAnswer: 'c',
        explanation: 'La molécula de agua está compuesta por dos átomos de hidrógeno unidos covalentemente a un átomo de oxígeno (H2O).',
        reference: 'Química General - Raymond Chang.'
    },
    {
        id: 'CG-019',
        context: 'La geografía física estudia las grandes formaciones de la Tierra, incluyendo sus montañas y sistemas fluviales.',
        text: '¿Cuál es la montaña más alta del mundo sobre el nivel del mar?',
        options: [
            { id: 'a', text: 'K2' },
            { id: 'b', text: 'Monte Everest' },
            { id: 'c', text: 'Kilimanjaro' },
            { id: 'd', text: 'Aconcagua' }
        ],
        correctAnswer: 'b',
        explanation: 'El Monte Everest, ubicado en la cordillera del Himalaya (frontera entre Nepal y China), tiene una altitud de 8,848 metros sobre el nivel del mar.',
        reference: 'National Geographic - Geography Facts.'
    },
    {
        id: 'CG-020',
        context: 'La historia de la independencia de las naciones americanas estuvo liderada por figuras militares y políticas clave durante el siglo XIX.',
        text: '¿Quién es conocido como "El Libertador" de cinco naciones sudamericanas (Venezuela, Colombia, Ecuador, Perú y Bolivia)?',
        options: [
            { id: 'a', text: 'José de San Martín' },
            { id: 'b', text: 'Bernardo O\'Higgins' },
            { id: 'c', text: 'Simón Bolívar' },
            { id: 'd', text: 'Antonio Nariño' }
        ],
        correctAnswer: 'c',
        explanation: 'Simón Bolívar fue el principal líder militar y político de las guerras de independencia contra la corona española en el norte de Sudamérica.',
        reference: 'Biografía de Simón Bolívar - Archivo Histórico.'
    },
    {
        id: 'CG-021',
        context: 'La fotosíntesis es el proceso biológico mediante el cual las plantas convierten la energía solar en energía química.',
        text: '¿Qué gas absorben las plantas de la atmósfera para realizar la fotosíntesis?',
        options: [
            { id: 'a', text: 'Oxígeno' },
            { id: 'b', text: 'Nitrógeno' },
            { id: 'c', text: 'Dióxido de Carbono (CO2)' },
            { id: 'd', text: 'Argón' }
        ],
        correctAnswer: 'c',
        explanation: 'Las plantas absorben CO2 y agua, y utilizando la energía de la luz, producen glucosa y liberan oxígeno como subproducto.',
        reference: 'Biología de Campbell.'
    },
    {
        id: 'CG-022',
        context: 'El arte moderno rompió con las reglas de la perspectiva tradicional para explorar nuevas formas de expresión visual.',
        text: '¿Qué artista es famoso por co-fundar el movimiento cubista y pintar "Guernica"?',
        options: [
            { id: 'a', text: 'Salvador Dalí' },
            { id: 'b', text: 'Vincent van Gogh' },
            { id: 'c', text: 'Pablo Picasso' },
            { id: 'd', text: 'Claude Monet' }
        ],
        correctAnswer: 'c',
        explanation: 'Pablo Picasso fue un artista español extremadamente versátil, cuya obra "Guernica" es un poderoso alegato contra los horrores de la guerra.',
        reference: 'Museo Reina Sofía - Archivos de Arte.'
    },
    {
        id: 'CG-023',
        context: 'La Revolución Francesa de 1789 cambió el curso de la historia política al introducir conceptos de ciudadanía y derechos universales.',
        text: '¿Cuál era el lema de la Revolución Francesa?',
        options: [
            { id: 'a', text: 'Orden y Progreso' },
            { id: 'b', text: 'Libertad, Igualdad, Fraternidad' },
            { id: 'c', text: 'Paz, Pan y Tierra' },
            { id: 'd', text: 'Dios, Patria y Familia' }
        ],
        correctAnswer: 'b',
        explanation: '"Liberté, Égalité, Fraternité" se convirtió en el lema oficial de la República Francesa y un símbolo de los valores democráticos modernos.',
        reference: 'Historia Universal - Ed. Santillana.'
    },
    {
        id: 'CG-024',
        context: 'La invención del World Wide Web (WWW) permitió la explosión del uso de Internet en todo el mundo a principios de los años 90.',
        text: '¿Quién inventó el World Wide Web mientras trabajaba en el CERN?',
        options: [
            { id: 'a', text: 'Steve Jobs' },
            { id: 'b', text: 'Tim Berners-Lee' },
            { id: 'c', text: 'Mark Zuckerberg' },
            { id: 'd', text: 'Linus Torvalds' }
        ],
        correctAnswer: 'b',
        explanation: 'Sir Tim Berners-Lee inventó el sistema de hipertexto que sustenta la web moderna en 1989, buscando una forma eficiente de compartir información entre científicos.',
        reference: 'CERN - International History of Web.'
    },
    {
        id: 'CG-025',
        context: 'Las Naciones Unidas (ONU) fueron creadas tras la Segunda Guerra Mundial para prevenir futuros conflictos globales.',
        text: '¿Dónde se encuentra la sede principal de las Naciones Unidas?',
        options: [
            { id: 'a', text: 'Ginebra, Suiza' },
            { id: 'b', text: 'Bruselas, Bélgica' },
            { id: 'c', text: 'Nueva York, EE. UU.' },
            { id: 'd', text: 'Viena, Austria' }
        ],
        correctAnswer: 'c',
        explanation: 'Aunque tiene sedes importantes en Ginebra y Viena, la sede principal de la ONU está ubicada en Manhattan, Nueva York.',
        reference: 'Sitio Oficial de las Naciones Unidas.'
    }
];
