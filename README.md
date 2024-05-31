# React + Vite

This project was made as an assignment in the The Odin's Project React Course. The markup and styling are done with HTML + CSS, and the whole layout and logic are done with React through Vite.

The main purpose of the application is to fetch data from an API, PokéAPI (https://pokeapi.co/) being the chosen one, and use that info to display a simple memory game.

How the game works: the player is asked to select a Pokémon Interval, that being the regions depicted on the anime and games (e.g, Kanto, Johton, Hoenn, etc.). The player can also select a Number of Cards, which will dictate the difficulty of the game, the more cards, the harder it gets.
The only goal of the game is to pick a Pokémon Card that you haven't clicked before, when you select all Pokémon Cards without repeating them once, you win the game, that simple!

I chose Netlify to host this project and you can check it out here: https://iridescent-pothos-27488d.netlify.app/

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
