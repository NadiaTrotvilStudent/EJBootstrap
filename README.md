# Sitio Web - Estudio Jurídico

Este proyecto es un sitio web desarrollado para un **Estudio Jurídico** como parte de la materia de **Diseño y Desarrollo Web**. El objetivo principal es aplicar conceptos de HTML, CSS, JavaScript y **Bootstrap** para crear una experiencia visual agradable y funcional.

## Consigna

1. Cree un formulario sencillo utilizando **Bootstrap** o **Tailwinds**.
2. Cree un enlace con todos los inputs del formulario para darles un estilo uniforme (puede ser color, pseudoclases, etc.).
3. Personalice la web añadiendo un **menú genérico** y un **footer** que se ubique al final de la pantalla (siempre visible, independientemente del contenido).
4. Muestre un mensaje con **JavaScript** cuando el usuario toque el botón de enviar el formulario.

## Estructura del Proyecto

El sitio consta de las siguientes páginas:

- **`index.html`**: Página principal con el formulario de consulta.
- **`areas.html`**: Información sobre las áreas de trabajo del estudio.
- **`nosotros.html`**: Información sobre el equipo del estudio jurídico.
- **`contacto.html`**: Página con datos de contacto.
- **`styles.css`**: Archivo CSS personalizado para el sitio.
- **`scripts.js`**: Archivo JavaScript para las validaciones y mensajes del formulario.

## Características Principales

### 1. **Formulario de Consulta**
- Diseñado con **Bootstrap** para un estilo limpio y responsivo.
- Inputs estilizados uniformemente usando pseudoclases y clases personalizadas.
- Validaciones adicionales con JavaScript:
  - El correo debe contener `.com`.
  - El número de teléfono solo permite números y un carácter `+` opcional al inicio.

### 2. **Menú**
- Menú genérico con enlaces a todas las secciones del sitio.
- Responsivo y con funcionalidad de colapso en dispositivos móviles (botón hamburguesa).

### 3. **Footer**
- Footer informativo que incluye:
  - Materia, curso y grupo.
  - Derechos reservados.
  - Logo de UADE.
- Estilo adaptado para permanecer al final de la pantalla, incluso si el contenido del body es escaso.

### 4. **Interacción con JavaScript**
- Al enviar el formulario de consulta, aparece un mensaje amigable de confirmación.

## Instrucciones para Ejecutar el Proyecto

1. **Clona el repositorio o descarga los archivos:**
   ```bash
   git clone <https://github.com/NadiaTrotvilStudent/EJBootstrap.git>


├── index.html
├── areas.html
├── nosotros.html
├── contacto.html
├── styles.css
├── scripts.js
├── Imagenes/
    └── uade.png
