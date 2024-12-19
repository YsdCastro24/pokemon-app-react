# Pokémon App react

Esta es una aplicación web desarrollada con React que permite explorar y gestionar información de Pokémon utilizando la PokéAPI. Los usuarios pueden ver detalles de Pokémon, agregarlos a favoritos y explorar información adicional como habilidades, debilidades y categorías.

## Características

- **Navegación entre Pokémon:** Lista de Pokémon y detalles individuales.
- **Sistema de favoritos:** Agregar y eliminar Pokémon de una lista personalizada de favoritos.
- **Animaciones interactivas:** Botones con animaciones modernas y una interfaz responsiva.
- **Consumo de PokéAPI:** Obtención de datos sobre Pokémon, incluyendo imagen, habilidades, tipos y descripciones.
- **Interfaz moderna:** Diseño optimizado con Tailwind CSS.

## Tecnologías utilizadas

- **Frontend:**
  - React
  - React Router DOM
  - Axios
- **Estilos:**
  - Tailwind CSS
- **API:**
  - PokéAPI ([https://pokeapi.co](https://pokeapi.co))

## Instalación

Sigue estos pasos para ejecutar el proyecto localmente:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/YsdCastro24/pokemon-app.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd pokemon-app-react
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Abre el navegador y accede a [http://localhost:5173](http://localhost:5173).

## Estructura del proyecto

```
|-- src
    |-- assets
    |-- components
        |-- Layout.jsx
        |-- Navbar.jsx
        |-- PokemonCard.jsx
    |-- hooks
        |-- useFavorites.js
    |-- pages
        |-- Detail.jsx
        |-- Favorites.jsx
        |-- Home.jsx
    |-- App.css
    |-- App.jsx
    |-- index.css
    |-- main.jsx
|---eslint.config.js
|---index.html
|---package-lock.json
|---package.json
|---postcss.config.js
|---tailwind.config.js
|---vite.config.js
```

### Descripción de los archivos principales

- **Navbar.jsx:** Barra de navegación con enlaces a Home y Favoritos.
- **PokemonCard.jsx:** Componente para renderizar las tarjetas de Pokémon en la lista principal.
- **Detail.jsx:** Muestra información detallada de un Pokémon, incluyendo habilidades, tipos y debilidades.
- **Favorites.jsx:** Lista de Pokémon marcados como favoritos.
- **Home.jsx:** Página principal que muestra la lista de Pokémon.
- **useFavorites.js:** Hook personalizado para gestionar el estado de favoritos.
- **index.css:** Estilos personalizados y configuración de animaciones.

## Configuración especial

### Tailwind CSS

Este proyecto utiliza Tailwind CSS para la gestión de estilos. Asegúrate de que el archivo `tailwind.config.js` esté configurado correctamente para incluir clases personalizadas, como las animaciones de botones:

```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'pokemon-red': '#EE1515',
        'pokemon-blue': '#3B4CCA',
        'pokemon-yellow': '#FFDE00'
      },
      animation: {
        vibrate: 'vibrate 0.3s ease-in-out'
      },
      keyframes: {
        vibrate: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-4px)' },
          '50%': { transform: 'translateX(4px)' },
          '75%': { transform: 'translateX(-4px)' }
        }
      }
    }
  },
  plugins: []
};
```

## Funcionalidades adicionales

- **Animaciones:**
  - Las tarjetas de Pokémon y los botones incluyen animaciones modernas para mejorar la experiencia de usuario.
- **Interfaz responsiva:**
  - Adaptada para dispositivos móviles, tabletas y computadoras de escritorio.

## Contribuir

Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Envía tus cambios:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Crea un pull request en GitHub.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más información.

---

¡Gracias por usar Pokémon App react! Si tienes algún comentario o sugerencia, no dudes en comunicarte.

