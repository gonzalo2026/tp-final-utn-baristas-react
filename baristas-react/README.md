# Baristas — Tienda de café (versión React)

Proyecto de e-commerce de café "Baristas", migrado de HTML/CSS/JS plano a
**React + Vite**, para la cursada de UTN. Incluye catálogo de productos,
galería, testimonios y un formulario de contacto controlado por estado de
React, con navegación mediante React Router.

## Tecnologías

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/) — bundler y servidor de desarrollo
- [React Router v6](https://reactrouter.com/) — navegación entre páginas
- CSS puro (sin frameworks de estilos), con variables CSS y diseño responsive
- Font Awesome (iconografía) y Google Fonts (tipografía Poppins)

## Estructura del proyecto

```
src/
├── components/     → Navbar, Layout, Card, Gallery, Footer
├── pages/          → Home, Contact
├── styles/         → un archivo .css por componente/página + global.css
├── hooks/          → useContactForm (lógica del formulario)
└── assets/         → recursos estáticos propios de React (si se agregan)
public/
└── img/            → imágenes del sitio
```

## Funcionalidades

- **Componentización**: cada sección del sitio es un componente reutilizable
  (`Card` se usa tanto en "Mejores productos" como en "Especiales"; `Gallery`
  arma la grilla de imágenes; `Layout` envuelve Navbar + contenido + Footer).
- **Formulario controlado**: el hook `useContactForm` maneja todos los campos
  con `useState`. Al enviar, se previene el comportamiento por defecto y se
  loguean los datos en la consola del navegador; el botón "Limpiar" resetea
  el estado.
- **Navegación**: rutas `/` (Home) y `/contacto` (Contact) con React Router.
  Los enlaces del menú a secciones internas (`#mejores-productos`, etc.)
  hacen scroll suave automático hasta la sección correspondiente.

## Cómo hacer funcionar el proyecto

### 1. Requisitos

Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior).
Para verificarlo, abrí una terminal y escribí:

```bash
node -v
```

### 2. Instalar las dependencias

Abrí una terminal **parado adentro de la carpeta del proyecto**
(la que contiene `package.json`) y corré:

```bash
npm install
```

### 3. Levantar el servidor de desarrollo

```bash
npm run dev
```

La terminal va a mostrar una URL, normalmente:

```
Local: http://localhost:5173/
```

Copiá esa URL y pegala en la barra de direcciones de Chrome (no abras el
archivo `index.html` haciendo doble clic ni con `file://`, no va a
funcionar: es un proyecto React que necesita el servidor de Vite corriendo).

### 4. Compilar para producción (opcional)

Cuando el proyecto esté terminado, para generar la versión optimizada lista
para subir a un hosting:

```bash
npm run build
```

Esto genera una carpeta `dist/` con los archivos finales.
