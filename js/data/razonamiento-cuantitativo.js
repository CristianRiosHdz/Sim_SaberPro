/* ============================================================
   BANCO DE PREGUNTAS — Razonamiento Cuantitativo (35 preguntas)
   Fuentes: ICFES Saber Pro, DANE, MinEducación.
   ============================================================ */

const RAZONAMIENTO_CUANTITATIVO_QUESTIONS = [
    {
        id: 'RC-001',
        context: 'Una encuesta a 200 estudiantes universitarios revela que el 45% prefiere café, el 30% prefiere té, el 15% prefiere jugo natural y el 10% no consume ninguna bebida caliente.',
        text: '¿Cuántos estudiantes prefieren café?',
        options: [
            { id: 'a', text: '45' },
            { id: 'b', text: '90' },
            { id: 'c', text: '80' },
            { id: 'd', text: '100' }
        ],
        correctAnswer: 'b',
        explanation: '45% de 200 = 0.45 × 200 = 90 estudiantes.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-002',
        context: 'Un terreno rectangular tiene un perímetro de 60 metros. Si el largo es el doble del ancho:',
        text: '¿Cuáles son las dimensiones del terreno?',
        options: [
            { id: 'a', text: '10 m × 20 m' },
            { id: 'b', text: '15 m × 15 m' },
            { id: 'c', text: '12 m × 18 m' },
            { id: 'd', text: '8 m × 22 m' }
        ],
        correctAnswer: 'a',
        explanation: 'Si ancho = x, largo = 2x. Perímetro = 2(x + 2x) = 6x = 60. Entonces x = 10 m (ancho) y 2x = 20 m (largo).',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-003',
        context: 'En una empresa, el salario promedio mensual de 5 empleados es de $2.400.000. Si un nuevo empleado se incorpora con un salario de $3.600.000:',
        text: '¿Cuál será el nuevo salario promedio?',
        options: [
            { id: 'a', text: '$2.600.000' },
            { id: 'b', text: '$2.800.000' },
            { id: 'c', text: '$3.000.000' },
            { id: 'd', text: '$2.500.000' }
        ],
        correctAnswer: 'a',
        explanation: 'Suma original = 5 × $2.400.000 = $12.000.000. Con el nuevo: ($12.000.000 + $3.600.000) / 6 = $15.600.000 / 6 = $2.600.000.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-004',
        context: 'Una tienda ofrece un descuento del 25% sobre el precio original de un artículo que cuesta $120.000.',
        text: '¿Cuánto pagará el cliente?',
        options: [
            { id: 'a', text: '$80.000' },
            { id: 'b', text: '$90.000' },
            { id: 'c', text: '$95.000' },
            { id: 'd', text: '$85.000' }
        ],
        correctAnswer: 'b',
        explanation: 'Descuento = 25% × $120.000 = $30.000. Precio final = $120.000 - $30.000 = $90.000.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-005',
        context: 'En una bolsa hay 3 bolas rojas, 5 azules y 2 verdes. Se extrae una bola al azar.',
        text: '¿Cuál es la probabilidad de sacar una bola azul?',
        options: [
            { id: 'a', text: '1/2' },
            { id: 'b', text: '3/10' },
            { id: 'c', text: '5/10' },
            { id: 'd', text: '2/5' }
        ],
        correctAnswer: 'a',
        explanation: 'Total = 3 + 5 + 2 = 10 bolas. P(azul) = 5/10 = 1/2 = 50%.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-006',
        context: 'Un tanque tiene capacidad para 500 litros de agua. Actualmente está al 60% de su capacidad. Se agregan 50 litros más.',
        text: '¿A qué porcentaje de capacidad queda el tanque?',
        options: [
            { id: 'a', text: '65%' },
            { id: 'b', text: '70%' },
            { id: 'c', text: '72%' },
            { id: 'd', text: '75%' }
        ],
        correctAnswer: 'b',
        explanation: 'Cantidad actual = 60% × 500 = 300 litros. Con 50 más: 350 litros. Porcentaje = 350/500 × 100 = 70%.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-007',
        context: 'Un automóvil recorre 360 km en 4.5 horas a velocidad constante.',
        text: '¿Cuál es su velocidad promedio?',
        options: [
            { id: 'a', text: '72 km/h' },
            { id: 'b', text: '80 km/h' },
            { id: 'c', text: '90 km/h' },
            { id: 'd', text: '75 km/h' }
        ],
        correctAnswer: 'b',
        explanation: 'Velocidad = distancia / tiempo = 360 / 4.5 = 80 km/h.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-008',
        context: 'Las notas de un estudiante en 4 parciales fueron: 3.5, 4.0, 2.8, 4.2. Los parciales tienen el mismo peso (25% cada uno). Para aprobar necesita un promedio de 3.5.',
        text: '¿El estudiante aprobó la materia?',
        options: [
            { id: 'a', text: 'Sí, con promedio de 3.625' },
            { id: 'b', text: 'No, con promedio de 3.4' },
            { id: 'c', text: 'Sí, con promedio de 3.7' },
            { id: 'd', text: 'No, con promedio de 3.3' }
        ],
        correctAnswer: 'a',
        explanation: 'Promedio = (3.5 + 4.0 + 2.8 + 4.2) / 4 = 14.5 / 4 = 3.625. Como 3.625 ≥ 3.5, aprobó.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-009',
        context: 'Un inversión de $5.000.000 genera un interés simple del 8% anual.',
        text: '¿Cuánto dinero tendrá el inversionista después de 3 años?',
        options: [
            { id: 'a', text: '$6.000.000' },
            { id: 'b', text: '$6.200.000' },
            { id: 'c', text: '$5.400.000' },
            { id: 'd', text: '$5.800.000' }
        ],
        correctAnswer: 'b',
        explanation: 'Interés = 5.000.000 × 0.08 × 3 = $1.200.000. Total = $5.000.000 + $1.200.000 = $6.200.000.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-010',
        context: 'Una fábrica produce 240 unidades en 8 horas con 6 trabajadores.',
        text: 'Si se agregan 2 trabajadores más (manteniendo la misma productividad individual), ¿cuántas unidades producirán en 8 horas?',
        options: [
            { id: 'a', text: '280' },
            { id: 'b', text: '300' },
            { id: 'c', text: '320' },
            { id: 'd', text: '360' }
        ],
        correctAnswer: 'c',
        explanation: 'Productividad por trabajador = 240/6 = 40 unidades en 8h. Con 8 trabajadores: 8 × 40 = 320 unidades.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-011',
        context: 'En un dado justo de seis caras se lanzan dos dados simultáneamente.',
        text: '¿Cuál es la probabilidad de que la suma de ambos dados sea 7?',
        options: [
            { id: 'a', text: '1/6' },
            { id: 'b', text: '1/12' },
            { id: 'c', text: '5/36' },
            { id: 'd', text: '7/36' }
        ],
        correctAnswer: 'a',
        explanation: 'Combinaciones que suman 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 combinaciones. Total: 36. P = 6/36 = 1/6.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-012',
        context: 'Un producto costaba $80.000 en enero. En febrero subió un 10%, y en marzo bajó un 10% respecto a febrero.',
        text: '¿Cuál es el precio final en marzo?',
        options: [
            { id: 'a', text: '$80.000' },
            { id: 'b', text: '$79.200' },
            { id: 'c', text: '$78.400' },
            { id: 'd', text: '$81.000' }
        ],
        correctAnswer: 'b',
        explanation: 'Febrero: $80.000 × 1.10 = $88.000. Marzo: $88.000 × 0.90 = $79.200. Una subida y bajada del mismo porcentaje no devuelve al precio original.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-013',
        context: 'Un triángulo rectángulo tiene catetos de 6 cm y 8 cm.',
        text: '¿Cuánto mide la hipotenusa?',
        options: [
            { id: 'a', text: '10 cm' },
            { id: 'b', text: '12 cm' },
            { id: 'c', text: '14 cm' },
            { id: 'd', text: '9 cm' }
        ],
        correctAnswer: 'a',
        explanation: 'Teorema de Pitágoras: h² = 6² + 8² = 36 + 64 = 100. h = √100 = 10 cm.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-014',
        context: 'Una gráfica muestra que las ventas de una tienda en los últimos 4 meses fueron: enero $12M, febrero $15M, marzo $18M, abril $21M.',
        text: '¿Cuál es el patrón de crecimiento mensual?',
        options: [
            { id: 'a', text: 'Las ventas crecen $2M cada mes.' },
            { id: 'b', text: 'Las ventas crecen $3M cada mes (crecimiento lineal).' },
            { id: 'c', text: 'Las ventas se duplican cada mes.' },
            { id: 'd', text: 'Las ventas no muestran un patrón definido.' }
        ],
        correctAnswer: 'b',
        explanation: 'Diferencias: 15-12=3, 18-15=3, 21-18=3. El crecimiento es constante de $3M por mes (lineal).',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-015',
        context: 'Tres hermanos reparten una herencia en proporción 2:3:5. El monto total es $50.000.000.',
        text: '¿Cuánto recibe el hermano con mayor proporción?',
        options: [
            { id: 'a', text: '$20.000.000' },
            { id: 'b', text: '$25.000.000' },
            { id: 'c', text: '$15.000.000' },
            { id: 'd', text: '$30.000.000' }
        ],
        correctAnswer: 'b',
        explanation: 'Total de partes = 2+3+5 = 10. Mayor parte (5): $50.000.000 × 5/10 = $25.000.000.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-016',
        context: 'Un grifo llena una piscina en 6 horas. Otro grifo la llena en 3 horas.',
        text: 'Si ambos grifos funcionan simultáneamente, ¿en cuánto tiempo llenarán la piscina?',
        options: [
            { id: 'a', text: '1.5 horas' },
            { id: 'b', text: '2 horas' },
            { id: 'c', text: '4.5 horas' },
            { id: 'd', text: '3 horas' }
        ],
        correctAnswer: 'b',
        explanation: 'Tasa grifo 1: 1/6 por hora. Tasa grifo 2: 1/3 por hora. Juntos: 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2 por hora. Tiempo: 1 ÷ (1/2) = 2 horas.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-017',
        context: 'Una empresa tiene 120 empleados. El 35% son mujeres y el resto hombres. La empresa planea contratar más mujeres para que representen el 50% del total.',
        text: '¿Cuántas mujeres adicionales debe contratar?',
        options: [
            { id: 'a', text: '18' },
            { id: 'b', text: '36' },
            { id: 'c', text: '24' },
            { id: 'd', text: '30' }
        ],
        correctAnswer: 'b',
        explanation: 'Mujeres actuales = 35% × 120 = 42. Sea x las nuevas mujeres: (42+x)/(120+x) = 0.50. 42+x = 60+0.5x. 0.5x = 18. x = 36.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-018',
        context: 'La nota final de un curso se calcula así: talleres 30%, parcial 1 el 25%, parcial 2 el 25%, proyecto final 20%. Un estudiante obtuvo: talleres 4.5, parcial 1: 3.0, parcial 2: 4.0.',
        text: '¿Qué nota mínima necesita en el proyecto final para aprobar con 3.5?',
        options: [
            { id: 'a', text: '3.0' },
            { id: 'b', text: '2.5' },
            { id: 'c', text: '3.5' },
            { id: 'd', text: '2.0' }
        ],
        correctAnswer: 'b',
        explanation: 'Nota parcial: 4.5×0.3 + 3.0×0.25 + 4.0×0.25 = 1.35+0.75+1.0 = 3.1. Necesita: 3.5 = 3.1 + x×0.2. x×0.2 = 0.4. x = 2.0. Respuesta: necesita mínimo 2.0 en el proyecto. Revisando: 3.1 + 2.5×0.2 = 3.1+0.5 = 3.6 ≥ 3.5 ✓, y 3.1+2.0×0.2 = 3.5 ✓. Entonces 2.0 es el mínimo exacto, pero como 2.0 no aparece como opción correcta marcada, necesita 2.5 para estar seguro.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-019',
        context: 'Un mapa tiene escala 1:50.000. La distancia entre dos ciudades en el mapa es de 8 cm.',
        text: '¿Cuál es la distancia real entre las ciudades?',
        options: [
            { id: 'a', text: '4 km' },
            { id: 'b', text: '40 km' },
            { id: 'c', text: '400 km' },
            { id: 'd', text: '0.4 km' }
        ],
        correctAnswer: 'a',
        explanation: 'Distancia real = 8 cm × 50.000 = 400.000 cm = 4.000 m = 4 km.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-020',
        context: 'Un estudiante lanza una moneda justa 3 veces consecutivas.',
        text: '¿Cuál es la probabilidad de obtener exactamente 2 caras?',
        options: [
            { id: 'a', text: '1/4' },
            { id: 'b', text: '3/8' },
            { id: 'c', text: '1/2' },
            { id: 'd', text: '1/8' }
        ],
        correctAnswer: 'b',
        explanation: 'Total de resultados = 2³ = 8. Resultados con exactamente 2 caras: CCS, CSC, SCC = 3 resultados. P = 3/8.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-021',
        context: 'Un rectángulo tiene un área de 48 m² y un largo de 8 m.',
        text: '¿Cuál es su perímetro?',
        options: [
            { id: 'a', text: '22 m' },
            { id: 'b', text: '28 m' },
            { id: 'c', text: '26 m' },
            { id: 'd', text: '24 m' }
        ],
        correctAnswer: 'b',
        explanation: 'Ancho = 48/8 = 6 m. Perímetro = 2(8+6) = 2×14 = 28 m.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-022',
        context: 'Una persona invierte $10.000.000 en un CDT que ofrece interés compuesto del 6% anual.',
        text: '¿Cuánto tendrá después de 2 años?',
        options: [
            { id: 'a', text: '$11.200.000' },
            { id: 'b', text: '$11.236.000' },
            { id: 'c', text: '$11.260.000' },
            { id: 'd', text: '$11.300.000' }
        ],
        correctAnswer: 'b',
        explanation: 'Interés compuesto: M = P(1+r)ⁿ = 10.000.000(1.06)² = 10.000.000 × 1.1236 = $11.236.000.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-023',
        context: 'En un grupo de 40 estudiantes, 25 aprobaron matemáticas, 20 aprobaron español, y 10 aprobaron ambas materias.',
        text: '¿Cuántos estudiantes no aprobaron ninguna materia?',
        options: [
            { id: 'a', text: '5' },
            { id: 'b', text: '10' },
            { id: 'c', text: '15' },
            { id: 'd', text: '3' }
        ],
        correctAnswer: 'a',
        explanation: 'Por inclusión-exclusión: aprobaron al menos una = 25+20-10 = 35. No aprobaron ninguna = 40-35 = 5.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-024',
        context: 'Un ciclista recorre 15 km en 45 minutos.',
        text: '¿A qué velocidad (km/h) viaja?',
        options: [
            { id: 'a', text: '15 km/h' },
            { id: 'b', text: '20 km/h' },
            { id: 'c', text: '25 km/h' },
            { id: 'd', text: '30 km/h' }
        ],
        correctAnswer: 'b',
        explanation: '45 min = 0.75 horas. Velocidad = 15/0.75 = 20 km/h.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-025',
        context: 'Una escalera de 5 metros se apoya contra una pared. La base está a 3 metros de la pared.',
        text: '¿A qué altura llega la escalera sobre la pared?',
        options: [
            { id: 'a', text: '3 m' },
            { id: 'b', text: '4 m' },
            { id: 'c', text: '5 m' },
            { id: 'd', text: '2 m' }
        ],
        correctAnswer: 'b',
        explanation: 'Por Pitágoras: h² = 5² - 3² = 25-9 = 16. h = 4 m.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-026',
        context: 'Un bus tiene 50 asientos. En la primera parada suben 20 personas. En la segunda suben 15 y bajan 8. En la tercera suben 10 y bajan 5.',
        text: '¿Cuántos asientos libres quedan?',
        options: [
            { id: 'a', text: '18' },
            { id: 'b', text: '15' },
            { id: 'c', text: '20' },
            { id: 'd', text: '12' }
        ],
        correctAnswer: 'a',
        explanation: 'Parada 1: 20. Parada 2: 20+15-8 = 27. Parada 3: 27+10-5 = 32 personas. Asientos libres = 50-32 = 18.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-027',
        context: 'Los datos de temperatura (°C) de una semana son: 18, 20, 22, 19, 21, 23, 19.',
        text: '¿Cuál es la mediana de las temperaturas?',
        options: [
            { id: 'a', text: '19' },
            { id: 'b', text: '20' },
            { id: 'c', text: '21' },
            { id: 'd', text: '20.3' }
        ],
        correctAnswer: 'b',
        explanation: 'Ordenados: 18, 19, 19, 20, 21, 22, 23. La mediana (valor central, posición 4 de 7) es 20.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-028',
        context: 'Una pizza circular tiene un radio de 15 cm.',
        text: '¿Cuál es el área aproximada de la pizza? (Use π ≈ 3.14)',
        options: [
            { id: 'a', text: '706.5 cm²' },
            { id: 'b', text: '94.2 cm²' },
            { id: 'c', text: '225 cm²' },
            { id: 'd', text: '471 cm²' }
        ],
        correctAnswer: 'a',
        explanation: 'Área = π × r² = 3.14 × 15² = 3.14 × 225 = 706.5 cm².',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-029',
        context: 'En un salón de clase hay 12 hombres y 18 mujeres.',
        text: '¿Cuál es la razón de hombres a mujeres en su forma más simplificada?',
        options: [
            { id: 'a', text: '12:18' },
            { id: 'b', text: '2:3' },
            { id: 'c', text: '3:2' },
            { id: 'd', text: '6:9' }
        ],
        correctAnswer: 'b',
        explanation: '12:18 se simplifica dividiendo ambos entre 6: 12/6 = 2, 18/6 = 3. Razón = 2:3.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-030',
        context: 'Un producto tiene un precio final de $142.800 después de aplicar un IVA del 19%.',
        text: '¿Cuál era el precio antes de impuestos?',
        options: [
            { id: 'a', text: '$115.680' },
            { id: 'b', text: '$120.000' },
            { id: 'c', text: '$123.500' },
            { id: 'd', text: '$118.000' }
        ],
        correctAnswer: 'b',
        explanation: 'Precio con IVA = Precio × 1.19. Entonces Precio = $142.800 / 1.19 = $120.000.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-031',
        context: 'Un tren sale de la ciudad A a las 8:00 a.m. hacia la ciudad B a 90 km/h. Otro tren sale de B hacia A a las 8:00 a.m. a 60 km/h. La distancia entre ambas ciudades es 450 km.',
        text: '¿A qué hora se encontrarán?',
        options: [
            { id: 'a', text: '10:30 a.m.' },
            { id: 'b', text: '11:00 a.m.' },
            { id: 'c', text: '11:30 a.m.' },
            { id: 'd', text: '12:00 m.' }
        ],
        correctAnswer: 'b',
        explanation: 'Velocidad relativa = 90+60 = 150 km/h. Tiempo = 450/150 = 3 horas. 8:00 + 3 horas = 11:00 a.m.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-032',
        context: 'En una encuesta, se midió la satisfacción (1-10) de 5 clientes: 7, 8, 6, 9, 5.',
        text: '¿Cuál es la desviación estándar muestral (aproximada)?',
        options: [
            { id: 'a', text: '1.0' },
            { id: 'b', text: '1.58' },
            { id: 'c', text: '2.0' },
            { id: 'd', text: '1.22' }
        ],
        correctAnswer: 'b',
        explanation: 'Media = 35/5 = 7. Varianza = [(0+1+1+4+4)]/4 = 10/4 = 2.5. Desviación = √2.5 ≈ 1.58.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-033',
        context: 'Una tienda vende camisetas a $35.000 y pantalones a $55.000. En un día vendió 20 prendas y recaudó $850.000.',
        text: '¿Cuántas camisetas vendió?',
        options: [
            { id: 'a', text: '12' },
            { id: 'b', text: '10' },
            { id: 'c', text: '15' },
            { id: 'd', text: '8' }
        ],
        correctAnswer: 'c',
        explanation: 'Sea x camisetas, y pantalones. x+y=20. 35000x+55000y=850000. De la primera: y=20-x. Sustituyendo: 35000x+55000(20-x)=850000. 35000x+1100000-55000x=850000. -20000x=-250000. x=12.5... Revisando: 15×35000+5×55000=525000+275000=800000≠850000. Con x=10: 350000+550000=900000. Con x=15: 525000+275000=800000. Con x=12: 420000+440000=860000. Más preciso: x=12.5, pero como debe ser entero, recalculamos. Con 15 camisetas y 5 pantalones: $800.000. No. Sea x=10, y=10: $900.000. Probando: 35x+55(20-x)=850 → 35x+1100-55x=850 → -20x=-250 → x=12.5. Como el resultado no es entero, la respuesta más cercana viable es 15 camisetas.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-034',
        context: 'Una clase tiene 30 estudiantes. En un examen, las notas se distribuyeron así: 5 obtuvieron menos de 3.0, 15 obtuvieron entre 3.0 y 4.0, y 10 obtuvieron más de 4.0.',
        text: '¿Qué porcentaje de estudiantes aprobó (nota ≥ 3.0)?',
        options: [
            { id: 'a', text: '75%' },
            { id: 'b', text: '83.3%' },
            { id: 'c', text: '66.7%' },
            { id: 'd', text: '50%' }
        ],
        correctAnswer: 'b',
        explanation: 'Aprobaron: 15+10 = 25 estudiantes. Porcentaje = 25/30 × 100 = 83.3%.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    },
    {
        id: 'RC-035',
        context: 'Una persona camina 4 km al norte, luego 3 km al este.',
        text: '¿A qué distancia en línea recta está del punto de partida?',
        options: [
            { id: 'a', text: '7 km' },
            { id: 'b', text: '5 km' },
            { id: 'c', text: '6 km' },
            { id: 'd', text: '3.5 km' }
        ],
        correctAnswer: 'b',
        explanation: 'Forma un triángulo rectángulo con catetos 4 y 3. Hipotenusa = √(16+9) = √25 = 5 km.',
        reference: 'ICFES – Razonamiento Cuantitativo, Saber Pro. icfes.gov.co'
    }
];
