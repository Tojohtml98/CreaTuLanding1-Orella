# CreaTuLanding1-Apellido

## Descripción del Proyecto
Este proyecto es una aplicación de e-commerce construida con React. La aplicación incluye una barra de navegación, un widget de carrito de compras y un contenedor para mostrar el catálogo de productos. Está diseñada para ser la base de un sitio de comercio electrónico.

## Estructura del Proyecto
La estructura del proyecto es la siguiente:

```
CreaTuLanding1-Apellido
├── src
│   ├── components
│   │   ├── NavBar.jsx
│   │   ├── CartWidget.jsx
│   │   └── ItemListContainer.jsx
│   ├── App.jsx
│   ├── index.js
│   └── styles
│       └── App.css
├── public
│   ├── index.html
│   └── favicon.ico
├── package.json
├── README.md
└── .gitignore
```

## Componentes
- **NavBar**: Componente que renderiza la barra de navegación, incluyendo enlaces, el logo de la tienda y el widget del carrito.
- **CartWidget**: Componente que muestra el icono del carrito de compras y la cantidad de artículos en el carrito.
- **ItemListContainer**: Componente que acepta props y muestra un mensaje de bienvenida. Servirá como contenedor para el catálogo de productos en el futuro.

## Instrucciones de Instalación
1. Clona el repositorio en tu máquina local.
2. Navega a la carpeta del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm start` para iniciar la aplicación en modo de desarrollo.

## Uso de Props
El componente `ItemListContainer` utiliza props para recibir un mensaje de bienvenida, lo que permite personalizar la experiencia del usuario.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia
Este proyecto está bajo la Licencia MIT.