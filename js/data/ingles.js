/* ============================================================
   BANCO DE PREGUNTAS — Inglés (35 preguntas)
   Fuentes: ICFES Saber Pro, British Council, Cambridge Assessment.
   ============================================================ */

const INGLES_QUESTIONS = [
    {
        id: 'EN-001',
        text: 'Choose the correct sentence:',
        options: [
            { id: 'a', text: '"She don\'t like coffee."' },
            { id: 'b', text: '"She doesn\'t likes coffee."' },
            { id: 'c', text: '"She doesn\'t like coffee."' },
            { id: 'd', text: '"She not like coffee."' }
        ],
        correctAnswer: 'c',
        explanation: 'With third person singular (she/he/it), we use "doesn\'t" + base form of the verb.',
        reference: 'ICFES – Módulo de Inglés, Saber Pro / Cambridge Assessment.'
    },
    {
        id: 'EN-002',
        context: 'Read the following passage:\n\n"Climate change is one of the most pressing issues of our time. Rising global temperatures have led to more frequent extreme weather events, including hurricanes, droughts, and floods. Scientists warn that without immediate action, these effects will only worsen in the coming decades."',
        text: 'According to the passage, what will happen if no action is taken?',
        options: [
            { id: 'a', text: 'Global temperatures will decrease naturally.' },
            { id: 'b', text: 'Extreme weather events will become less common.' },
            { id: 'c', text: 'The negative effects of climate change will intensify.' },
            { id: 'd', text: 'Scientists will stop conducting research.' }
        ],
        correctAnswer: 'c',
        explanation: 'The passage states "without immediate action, these effects will only worsen," meaning the negative consequences will intensify.',
        reference: 'ICFES – Módulo de Inglés, Saber Pro. icfes.gov.co'
    },
    {
        id: 'EN-003',
        text: 'Select the correct conditional sentence:',
        options: [
            { id: 'a', text: '"If I would have time, I will go."' },
            { id: 'b', text: '"If I had time, I would go."' },
            { id: 'c', text: '"If I have time, I would go."' },
            { id: 'd', text: '"If I had time, I will go."' }
        ],
        correctAnswer: 'b',
        explanation: 'Second conditional (hypothetical): If + past simple, would + base verb.',
        reference: 'ICFES – Módulo de Inglés, Saber Pro / British Council.'
    },
    {
        id: 'EN-004',
        text: 'The word "nevertheless" is closest in meaning to:',
        options: [
            { id: 'a', text: 'Therefore' },
            { id: 'b', text: 'Moreover' },
            { id: 'c', text: 'However' },
            { id: 'd', text: 'Because' }
        ],
        correctAnswer: 'c',
        explanation: '"Nevertheless" means "in spite of that" or "however." Both express contrast.',
        reference: 'ICFES – Módulo de Inglés, Saber Pro / Cambridge Dictionary.'
    },
    {
        id: 'EN-005',
        context: '"The company announced that it _____ its operations to three new countries by the end of next year."',
        text: 'Choose the correct form to complete the sentence:',
        options: [
            { id: 'a', text: 'will have expanded' },
            { id: 'b', text: 'has expanded' },
            { id: 'c', text: 'is expanding' },
            { id: 'd', text: 'expanded' }
        ],
        correctAnswer: 'a',
        explanation: '"By the end of next year" requires the future perfect tense (will have + past participle).',
        reference: 'ICFES – Módulo de Inglés, Saber Pro. icfes.gov.co'
    },
    {
        id: 'EN-006',
        context: 'Read the text:\n\n"Working from home has become increasingly popular since the pandemic. While employees appreciate the flexibility, some managers worry about decreased productivity. Research, however, suggests that most remote workers are actually more productive than their office counterparts."',
        text: 'What is the main idea of the passage?',
        options: [
            { id: 'a', text: 'Managers are right to worry about remote work.' },
            { id: 'b', text: 'Remote work is popular but concerns exist, though research supports its productivity.' },
            { id: 'c', text: 'All employees prefer working from home.' },
            { id: 'd', text: 'The pandemic ended remote work opportunities.' }
        ],
        correctAnswer: 'b',
        explanation: 'The passage presents a balanced view: remote work is popular, concerns exist, but research shows remote workers tend to be more productive.',
        reference: 'ICFES – Módulo de Inglés, Saber Pro. icfes.gov.co'
    },
    {
        id: 'EN-007',
        text: 'Choose the sentence with the correct use of reported speech:',
        options: [
            { id: 'a', text: '"She said that she is going to the store."' },
            { id: 'b', text: '"She said that she was going to the store."' },
            { id: 'c', text: '"She said that she goes to the store."' },
            { id: 'd', text: '"She said that she go to the store."' }
        ],
        correctAnswer: 'b',
        explanation: 'In reported speech with past reporting verb ("said"), tenses shift back: "is going" → "was going".',
        reference: 'ICFES – Módulo de Inglés, Saber Pro / British Council.'
    },
    {
        id: 'EN-008',
        text: '"She managed to finish the project _____ the tight deadline."',
        options: [
            { id: 'a', text: 'although' },
            { id: 'b', text: 'because of' },
            { id: 'c', text: 'despite' },
            { id: 'd', text: 'therefore' }
        ],
        correctAnswer: 'c',
        explanation: '"Despite" + noun phrase expresses contrast. "Although" requires a clause.',
        reference: 'ICFES – Módulo de Inglés, Saber Pro / Cambridge Assessment.'
    },
    {
        id: 'EN-009',
        text: 'Which sentence uses the passive voice correctly?',
        options: [
            { id: 'a', text: '"The book was wrote by the author."' },
            { id: 'b', text: '"The experiment was conducted by the research team."' },
            { id: 'c', text: '"The students was taught by the professor."' },
            { id: 'd', text: '"The report is being write right now."' }
        ],
        correctAnswer: 'b',
        explanation: 'Passive voice: subject + be (conjugated) + past participle. "Was conducted" is correct.',
        reference: 'ICFES – Módulo de Inglés, Saber Pro. icfes.gov.co'
    },
    {
        id: 'EN-010',
        context: '"Artificial intelligence is transforming industries worldwide. From healthcare to finance, AI-powered tools are improving efficiency. _____, ethical concerns about data privacy remain significant."',
        text: 'Which transition word best completes the passage?',
        options: [
            { id: 'a', text: 'Furthermore' },
            { id: 'b', text: 'Consequently' },
            { id: 'c', text: 'Nonetheless' },
            { id: 'd', text: 'Similarly' }
        ],
        correctAnswer: 'c',
        explanation: '"Nonetheless" introduces a contrasting idea. The first sentences are positive; the final presents challenges.',
        reference: 'ICFES – Módulo de Inglés, Saber Pro. icfes.gov.co'
    },
    {
        id: 'EN-011',
        text: 'Identify the sentence with correct subject-verb agreement:',
        options: [
            { id: 'a', text: '"Each of the students have completed their assignment."' },
            { id: 'b', text: '"Neither the teacher nor the students was present."' },
            { id: 'c', text: '"The committee has decided to postpone the meeting."' },
            { id: 'd', text: '"The news are very disturbing today."' }
        ],
        correctAnswer: 'c',
        explanation: '"Committee" is a collective noun taking a singular verb ("has decided").',
        reference: 'ICFES – Módulo de Inglés, Saber Pro / Cambridge Assessment.'
    },
    {
        id: 'EN-012',
        text: '"The project, _____ was completed ahead of schedule, received an award."',
        options: [
            { id: 'a', text: 'who' },
            { id: 'b', text: 'which' },
            { id: 'c', text: 'whom' },
            { id: 'd', text: 'whose' }
        ],
        correctAnswer: 'b',
        explanation: '"Which" is the relative pronoun for things in non-defining relative clauses (with commas).',
        reference: 'ICFES – Módulo de Inglés, Saber Pro / British Council.'
    },
    {
        id: 'EN-013',
        text: 'Choose the correct form: "I wish I _____ more time to study for the exam."',
        options: [
            { id: 'a', text: 'have' },
            { id: 'b', text: 'had' },
            { id: 'c', text: 'will have' },
            { id: 'd', text: 'having' }
        ],
        correctAnswer: 'b',
        explanation: '"I wish" + past simple expresses a desire for something unreal in the present.',
        reference: 'ICFES – Módulo de Inglés / British Council.'
    },
    {
        id: 'EN-014',
        text: 'The prefix "mis-" in "misunderstand" indicates:',
        options: [
            { id: 'a', text: 'doing something again' },
            { id: 'b', text: 'doing something wrongly or badly' },
            { id: 'c', text: 'doing something before' },
            { id: 'd', text: 'doing something excessively' }
        ],
        correctAnswer: 'b',
        explanation: '"Mis-" means wrongly or badly: misunderstand (understand wrongly), misjudge, misplace.',
        reference: 'Cambridge Dictionary / ICFES – Inglés, Saber Pro.'
    },
    {
        id: 'EN-015',
        context: 'Read the text:\n\n"The Amazon rainforest produces approximately 20% of the world\'s oxygen and is home to 10% of all known species on Earth. Deforestation rates have increased by 30% in the last decade, primarily due to agricultural expansion and illegal logging. Environmental organizations argue that protecting the Amazon is not just a regional concern but a global imperative."',
        text: 'The author\'s main purpose in this passage is to:',
        options: [
            { id: 'a', text: 'promote tourism in the Amazon region.' },
            { id: 'b', text: 'highlight the Amazon\'s global importance and the urgency of its protection.' },
            { id: 'c', text: 'criticize the agricultural industry specifically.' },
            { id: 'd', text: 'compare the Amazon to other rainforests.' }
        ],
        correctAnswer: 'b',
        explanation: 'The passage presents facts about the Amazon\'s importance (oxygen, biodiversity) and then the threat (deforestation), concluding that protection is a "global imperative."',
        reference: 'ICFES – Módulo de Inglés, Saber Pro. icfes.gov.co'
    },
    {
        id: 'EN-016',
        text: '"By the time we arrived, the concert _____ already _____."',
        options: [
            { id: 'a', text: 'has / started' },
            { id: 'b', text: 'had / started' },
            { id: 'c', text: 'was / starting' },
            { id: 'd', text: 'would / start' }
        ],
        correctAnswer: 'b',
        explanation: 'Past perfect (had + past participle) is used for an action completed before another past action.',
        reference: 'ICFES – Inglés, Saber Pro / British Council.'
    },
    {
        id: 'EN-017',
        text: 'Which sentence contains a grammatical error?',
        options: [
            { id: 'a', text: '"She has been working here since 2019."' },
            { id: 'b', text: '"They have went to the museum yesterday."' },
            { id: 'c', text: '"We will finish the project by Friday."' },
            { id: 'd', text: '"He had never seen snow before that trip."' }
        ],
        correctAnswer: 'b',
        explanation: '"Went" is past simple, not past participle. Correct: "They have gone" or "They went yesterday" (not both).',
        reference: 'Cambridge Assessment / ICFES – Inglés, Saber Pro.'
    },
    {
        id: 'EN-018',
        text: '"The teacher asked the students _____ they had finished the assignment."',
        options: [
            { id: 'a', text: 'that' },
            { id: 'b', text: 'whether' },
            { id: 'c', text: 'what' },
            { id: 'd', text: 'which' }
        ],
        correctAnswer: 'b',
        explanation: '"Whether" is used for indirect yes/no questions. "The teacher asked whether they had finished" = "Did they finish?"',
        reference: 'ICFES – Módulo de Inglés, Saber Pro / British Council.'
    },
    {
        id: 'EN-019',
        text: 'Choose the correct phrasal verb: "The meeting was _____ until next week due to the storm."',
        options: [
            { id: 'a', text: 'put off' },
            { id: 'b', text: 'put up' },
            { id: 'c', text: 'put on' },
            { id: 'd', text: 'put out' }
        ],
        correctAnswer: 'a',
        explanation: '"Put off" means to postpone. "Put up" = accommodate, "put on" = wear, "put out" = extinguish.',
        reference: 'Cambridge Dictionary / ICFES – Inglés, Saber Pro.'
    },
    {
        id: 'EN-020',
        context: '"Education is not the filling of a pail, but the lighting of a fire." — W.B. Yeats',
        text: 'This quote uses which literary device?',
        options: [
            { id: 'a', text: 'Simile' },
            { id: 'b', text: 'Metaphor' },
            { id: 'c', text: 'Hyperbole' },
            { id: 'd', text: 'Onomatopoeia' }
        ],
        correctAnswer: 'b',
        explanation: 'A metaphor compares without "like" or "as." Education IS (not) a pail/IS a fire — direct comparison.',
        reference: 'British Council / ICFES – Inglés, Saber Pro.'
    },
    {
        id: 'EN-021',
        text: '"If she _____ the email, she would have replied immediately."',
        options: [
            { id: 'a', text: 'saw' },
            { id: 'b', text: 'had seen' },
            { id: 'c', text: 'has seen' },
            { id: 'd', text: 'would see' }
        ],
        correctAnswer: 'b',
        explanation: 'Third conditional (past unreal): If + past perfect, would have + past participle.',
        reference: 'ICFES – Módulo de Inglés / British Council.'
    },
    {
        id: 'EN-022',
        text: 'The word "ubiquitous" means:',
        options: [
            { id: 'a', text: 'very rare and difficult to find' },
            { id: 'b', text: 'extremely dangerous or harmful' },
            { id: 'c', text: 'found everywhere; very common' },
            { id: 'd', text: 'incredibly beautiful or attractive' }
        ],
        correctAnswer: 'c',
        explanation: '"Ubiquitous" means present, appearing, or found everywhere. Example: "Smartphones have become ubiquitous."',
        reference: 'Cambridge Dictionary / ICFES – Inglés, Saber Pro.'
    },
    {
        id: 'EN-023',
        context: 'Read the passage:\n\n"Social media platforms have revolutionized how people communicate. They enable instant connection across continents and have given voice to previously marginalized communities. Critics, however, point to the spread of misinformation, cyberbullying, and the negative impact on mental health as serious drawbacks. The debate over whether social media is a net positive or negative for society continues."',
        text: 'The passage can best be described as:',
        options: [
            { id: 'a', text: 'entirely in favor of social media.' },
            { id: 'b', text: 'entirely against social media.' },
            { id: 'c', text: 'a balanced presentation of both benefits and drawbacks.' },
            { id: 'd', text: 'a historical account of social media development.' }
        ],
        correctAnswer: 'c',
        explanation: 'The passage presents benefits ("instant connection," "voice to marginalized") and drawbacks ("misinformation," "cyberbullying"), concluding the debate is ongoing.',
        reference: 'ICFES – Módulo de Inglés, Saber Pro. icfes.gov.co'
    },
    {
        id: 'EN-024',
        text: '"You _____ have told me earlier! Now it\'s too late to change the reservation."',
        options: [
            { id: 'a', text: 'must' },
            { id: 'b', text: 'should' },
            { id: 'c', text: 'can' },
            { id: 'd', text: 'may' }
        ],
        correctAnswer: 'b',
        explanation: '"Should have + past participle" expresses regret about a past action that didn\'t happen.',
        reference: 'British Council / ICFES – Inglés, Saber Pro.'
    },
    {
        id: 'EN-025',
        text: 'Which word is the correct synonym for "to enhance"?',
        options: [
            { id: 'a', text: 'to diminish' },
            { id: 'b', text: 'to improve' },
            { id: 'c', text: 'to destroy' },
            { id: 'd', text: 'to ignore' }
        ],
        correctAnswer: 'b',
        explanation: '"Enhance" means to intensify, increase, or further improve the quality or value of something.',
        reference: 'Cambridge Dictionary / ICFES – Inglés, Saber Pro.'
    },
    {
        id: 'EN-026',
        text: '"He\'s the person _____ car was stolen last night."',
        options: [
            { id: 'a', text: 'who' },
            { id: 'b', text: 'whom' },
            { id: 'c', text: 'whose' },
            { id: 'd', text: 'which' }
        ],
        correctAnswer: 'c',
        explanation: '"Whose" shows possession: the car belongs to "him." It replaces "his" in the relative clause.',
        reference: 'ICFES – Módulo de Inglés / British Council.'
    },
    {
        id: 'EN-027',
        text: 'Choose the correct sentence with proper use of articles:',
        options: [
            { id: 'a', text: '"She is an university professor."' },
            { id: 'b', text: '"She is a university professor."' },
            { id: 'c', text: '"She is the university professor."' },
            { id: 'd', text: '"She is university professor."' }
        ],
        correctAnswer: 'b',
        explanation: '"A" is used before consonant sounds. "University" starts with /juː/ (consonant sound), so "a university" is correct, not "an."',
        reference: 'Cambridge Assessment / ICFES – Inglés, Saber Pro.'
    },
    {
        id: 'EN-028',
        text: '"Not only _____ the exam, but she also got the highest score in the class."',
        options: [
            { id: 'a', text: 'she passed' },
            { id: 'b', text: 'did she pass' },
            { id: 'c', text: 'she did pass' },
            { id: 'd', text: 'passed she' }
        ],
        correctAnswer: 'b',
        explanation: '"Not only" at the beginning of a clause triggers subject-auxiliary inversion: "did she pass."',
        reference: 'ICFES – Módulo de Inglés / Cambridge Assessment.'
    },
    {
        id: 'EN-029',
        context: '"The number of international students in Colombia has been _____ increasing over the past decade."',
        text: 'Choose the correct adverb:',
        options: [
            { id: 'a', text: 'steady' },
            { id: 'b', text: 'steadily' },
            { id: 'c', text: 'more steady' },
            { id: 'd', text: 'most steady' }
        ],
        correctAnswer: 'b',
        explanation: 'An adverb is needed to modify the verb "increasing." "Steadily" is the adverb form of "steady."',
        reference: 'ICFES – Inglés, Saber Pro / British Council.'
    },
    {
        id: 'EN-030',
        context: 'Read the text:\n\n"The concept of universal basic income (UBI) — a regular cash payment to every citizen regardless of employment status — has gained traction worldwide. Finland conducted a two-year pilot program, and proponents argue it reduces poverty and provides economic security. Opponents, however, warn that it could discourage work and would be prohibitively expensive for most governments."',
        text: 'Which of the following best summarizes the opponents\' argument?',
        options: [
            { id: 'a', text: 'UBI would make everyone wealthy and eliminate inequality.' },
            { id: 'b', text: 'UBI could reduce the motivation to work and would be too costly.' },
            { id: 'c', text: 'UBI has already been proven to fail in Finland.' },
            { id: 'd', text: 'UBI only benefits people who already have jobs.' }
        ],
        correctAnswer: 'b',
        explanation: 'Opponents warn about two issues: "discourage work" (motivation) and "prohibitively expensive" (cost).',
        reference: 'ICFES – Módulo de Inglés, Saber Pro. icfes.gov.co'
    },
    {
        id: 'EN-031',
        text: '"_____ the rain, the outdoor event was a great success."',
        options: [
            { id: 'a', text: 'Because of' },
            { id: 'b', text: 'In spite of' },
            { id: 'c', text: 'Due to' },
            { id: 'd', text: 'Thanks to' }
        ],
        correctAnswer: 'b',
        explanation: '"In spite of" expresses contrast: rain would normally hinder an outdoor event, but it was still successful.',
        reference: 'British Council / ICFES – Inglés, Saber Pro.'
    },
    {
        id: 'EN-032',
        text: 'Which sentence uses "used to" correctly?',
        options: [
            { id: 'a', text: '"I used to going to the park every Sunday."' },
            { id: 'b', text: '"She used to lived in Paris."' },
            { id: 'c', text: '"We used to play soccer after school."' },
            { id: 'd', text: '"They use to be friends in college."' }
        ],
        correctAnswer: 'c',
        explanation: '"Used to" + base verb describes past habits: "used to play." Not "used to going" or "used to lived."',
        reference: 'ICFES – Módulo de Inglés / Cambridge Assessment.'
    },
    {
        id: 'EN-033',
        text: 'The expression "to turn a blind eye" means:',
        options: [
            { id: 'a', text: 'to look carefully at something' },
            { id: 'b', text: 'to pretend not to notice something' },
            { id: 'c', text: 'to have poor eyesight' },
            { id: 'd', text: 'to cry about a situation' }
        ],
        correctAnswer: 'b',
        explanation: '"Turn a blind eye" is an idiom meaning to deliberately ignore something, usually wrongdoing.',
        reference: 'Cambridge Dictionary / ICFES – Inglés, Saber Pro.'
    },
    {
        id: 'EN-034',
        text: '"The researchers suggested that further studies _____ conducted before drawing conclusions."',
        options: [
            { id: 'a', text: 'are' },
            { id: 'b', text: 'be' },
            { id: 'c', text: 'were' },
            { id: 'd', text: 'being' }
        ],
        correctAnswer: 'b',
        explanation: 'After "suggest/recommend/insist that," English uses the subjunctive: base form "be" (not "are" or "were").',
        reference: 'ICFES – Módulo de Inglés / Cambridge Assessment.'
    },
    {
        id: 'EN-035',
        context: 'Read the passage:\n\n"Leonardo da Vinci was not only a painter but also an engineer, scientist, and inventor. His notebooks reveal designs for flying machines, armored vehicles, and anatomical studies that were centuries ahead of their time. Despite never publishing most of his scientific work, his contributions to art and science remain unparalleled."',
        text: 'The word "unparalleled" in the passage most likely means:',
        options: [
            { id: 'a', text: 'unimportant and forgettable' },
            { id: 'b', text: 'having no equal; exceptional' },
            { id: 'c', text: 'controversial and debated' },
            { id: 'd', text: 'easily replicated by others' }
        ],
        correctAnswer: 'b',
        explanation: '"Unparalleled" means having no parallel or equal — unique and exceptional. The context supports this: da Vinci\'s contributions are presented as extraordinary.',
        reference: 'Cambridge Dictionary / ICFES – Inglés, Saber Pro.'
    }
];
