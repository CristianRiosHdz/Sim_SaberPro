# Documentación Técnica: Simulador Saber Pro 2026 🎓

> **Proyecto creado y desarrollado por: Cristian Rios**

Este documento explica la arquitectura, el funcionamiento del motor de cuestionarios y la estructura de contenidos de la plataforma **Saber Pro Simulator**. El sistema ha sido diseñado bajo principios de **Separación de Responsabilidades (SoC)** y **Agnosticismo de Datos**, permitiendo una alta escalabilidad y facilidad de mantenimiento.

---

## 1. Arquitectura del Sistema (SPA)

La aplicación es una **Single Page Application (SPA)** pura, construida con Vanilla JavaScript, lo que garantiza velocidad máxima y cero dependencias externas.

### Componentes Principales:
- **`index.html`**: Punto de entrada único que carga los estilos, datos y scripts en el orden correcto de dependencia.
- **`js/ui/renderer.js`**: Actúa como el "Router" de la aplicación, manejando la navegación hash-based (`#home`, `#quiz/id`, `#study`) y gestionando la inicialización de editores interactivos.
- **`js/ui/components.js`**: Biblioteca de funciones puras de UI que retornan strings HTML (Diseño Atómico), ahora con soporte para renderizado de contenido dinámico de Quill.
- **`js/services/`**: Capa de servicios para comunicación con **Supabase**, manejando la autenticación y la persistencia de datos en la nube.

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

### Gestión de Contenido Dinámico:
A diferencia de versiones anteriores, el contenido ya no es estático:
- **Editor Enriquecido**: Uso de `Quill.js` para crear enunciados con formato, listas y multimedia (imágenes/videos).
- **Soporte Matemático**: Integración de `KaTeX` para el renderizado de fórmulas complejas en lenguaje LaTeX.

### Estructura de una Pregunta:
Cada objeto de pregunta contiene:
- `id`: Identificador único.
- `context`: Texto base o situación de estudio (Renderizado HTML).
- `text`: La pregunta específica (Renderizado HTML).
- `options`: 4 alternativas con ID propio (pueden incluir imágenes).
- `correctAnswer`: El ID de la opción válida.
- `explanation`: Justificación pedagógica enriquecida.

---

## 4. Biblioteca de Estudio Modular 📚

A diferencia de otros simuladores, este cuenta con una **Biblioteca de Estudio** enriquecida que ofrece:
- **Estructura por Temas**: El contenido se divide en secciones tituladas (temas) para facilitar el estudio progresivo.
- **Multimedia e Interactividad**: Incorporación de videos educativos y diagramas directamente en los temas.
- **Fórmulas Científicas**: Renderizado de alta calidad para leyes físicas y modelos matemáticos.
- **Tips de Expertos**: Estrategias para abordar cada tipo de pregunta.

---

## 5. Persistencia y Nube (`Supabase`) 💾

La plataforma utiliza una arquitectura híbrida de persistencia:
- **Supabase Cloud Backend**: Gestión centralizada y segura de contenidos, preguntas y perfiles en tiempo real.
- **LocalStorage**: Caché local para preferencias rápidas y estado de sesión.

---

## 6. Diseño y Estética 🎨

La interfaz utiliza un sistema de **Tokens de Diseño** (`tokens.css`) para mantener la consistencia:
- **Modo Oscuro/Claro**: Adaptable según la preferencia del usuario, con correcciones automáticas de contraste para editores.
- **Responsive**: Optimizado para PC, Tableta y Móvil.
- **Micro-animaciones**: Transiciones suaves al navegar entre preguntas para reducir la fatiga cognitiva.

---
*Proyecto y Documentación creados por **Cristian Rios** — Arquitecto de Sistemas Principal — Febrero 2026.*
