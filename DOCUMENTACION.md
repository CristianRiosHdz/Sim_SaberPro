# Documentación Técnica: Simulador Saber Pro 2026 🎓

Este documento explica la arquitectura, el funcionamiento del motor de cuestionarios y la estructura de contenidos de la plataforma **Saber Pro Simulator**. El sistema ha sido diseñado bajo principios de **Separación de Responsabilidades (SoC)** y **Agnosticismo de Datos**, permitiendo una alta escalabilidad y facilidad de mantenimiento.

---

## 1. Arquitectura del Sistema (SPA)

La aplicación es una **Single Page Application (SPA)** pura, construida con Vanilla JavaScript, lo que garantiza velocidad máxima y cero dependencias externas.

### Componentes Principales:
- **`index.html`**: Punto de entrada único que carga los estilos, datos y scripts en el orden correcto de dependencia.
- **`js/app.js`**: Orquestador principal que inicializa el sistema y lanza el Renderer.
- **`js/ui/renderer.js`**: Actúa como el "Router" de la aplicación, manejando la navegación hash-based (`#home`, `#quiz/id`, `#study`) y renderizando las vistas dinámicamente.
- **`js/ui/components.js`**: Biblioteca de funciones puras de UI que retornan strings HTML (Diseño Atómico).

---

## 2. El Motor del Quiz (`quiz-engine.js`) ⚙️

El corazón de la plataforma es un motor modular que gestiona el ciclo de vida de cada evaluación. Sus funciones principales son:

### A. Aleatoriedad Inteligente
El motor utiliza un algoritmo de selección aleatoria (`pickRandom`) para extraer **25 preguntas de un banco de mínimo 35**. Esto asegura que cada intento sea diferente, evitando la memorización por repetición. Además, las **opciones de cada pregunta (A, B, C, D) se barajan** en cada carga.

### B. Gestión de Estado Activo
El motor mantiene un objeto `_currentQuiz` que rastrea:
- Tiempo transcurrido vs. Límite de tiempo.
- Respuestas seleccionadas y su validez inmediata.
- Índice de navegación entre preguntas.

### C. Sistema de Evaluación
Al finalizar, el motor calcula el puntaje mediante la fórmula:
`Puntaje = (Respuestas Correctas / Total Preguntas) * 100`
El sistema compara este resultado con el `passingScore` (70 puntos) definido en la configuración para determinar el éxito.

---

## 3. Capa de Datos y Módulos 📊

El contenido está desacoplado de la lógica para permitir ediciones rápidas en los bancos de preguntas.

### Módulos Implementados:
1.  **Lectura Crítica**: Análisis de textos continuos y discontinuos.
2.  **Razonamiento Cuantitativo**: Interpretación de datos y lógica matemática.
3.  **Competencias Ciudadanas**: Constitución Política y multiperspectivismo.
4.  **Comunicación Escrita**: Estructura de redacción académica.
5.  **Inglés**: Niveles A1-B2 según el MCER.
6.  **Análisis Psicopedagógico**: Ética (Ley 1090) y modelos de intervención.
7.  **Cultura General**: Historia, ciencia y artes universales.

### Estructura de una Pregunta:
Cada objeto de pregunta contiene:
- `id`: Identificador único.
- `context`: Texto base o situación de estudio.
- `text`: La pregunta específica.
- `options`: 4 alternativas con ID propio.
- `correctAnswer`: El ID de la opción válida.
- `explanation`: Justificación pedagógica (clave para el aprendizaje).

---

## 4. Biblioteca de Estudio Autocontenida 📚

A diferencia de otros simuladores, este cuenta con una **Biblioteca de Estudio** integrada (`study-content.js`) que ofrece:
- **Teoría Destilada**: Conceptos clave sin necesidad de navegar a sitios externos.
- **Tips de Expertos**: Estrategias para abordar cada tipo de pregunta.
- **Resiliencia**: El contenido está escrito en código, lo que garantiza que nunca habrá "enlaces rotos" o videos caídos para la teoría fundamental.

---

## 5. Persistencia y Progreso (`storage.js`) 💾

La plataforma utiliza el **LocalStorage** del navegador para guardar el progreso del usuario localmente y de forma privada.
- **Seguimiento**: Guarda qué módulos han sido aprobados y el puntaje máximo obtenido.
- **Configuración**: Almacena preferencias como el Modo de Práctica (Secuencial o Libre).

---

## 6. Diseño y Estética 🎨

La interfaz utiliza un sistema de **Tokens de Diseño** (`tokens.css`) para mantener la consistencia:
- **Modo Oscuro/Claro**: Adaptable según la preferencia del usuario.
- **Responsive**: Optimizado para PC, Tableta y Móvil.
- **Micro-animaciones**: Transiciones suaves al navegar entre preguntas para reducir la fatiga cognitiva.

---
*Documentación generada por el Arquitecto de Sistemas Principal — Febrero 2026.*
