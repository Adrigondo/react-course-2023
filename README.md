# react-course-2023

First and second classes:
https://github.com/Adrigondo/react-course-2023/tree/main/first-exercises

**Advance to the project**. Third class:
https://github.com/Adrigondo/react-course-2023/tree/main/project

### Guía de instalación de bootstrap y tabler
En la carpeta de tu proyecto, ejecuta:
`npm install bootstrap`, y posteriormente `npm install tabler`.

Luego, en el archivo `index.html` debes agregar las siguientes lineas:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Estas 2 lineas -->
    <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="/node_modules/@tabler/core/dist/css/tabler.min.css">
    <!-- ...... -->

    <title>Vite + React + TS</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>


    <!-- Estas 2 lineas -->
    <script src="/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/node_modules/@tabler/core/dist/js/tabler.min.js"></script>
    <!-- ...... -->

  </body>
</html>
```

Con ello ya debería estar funcionando los estilos. En caso contrario, solicitame ayuda c:
