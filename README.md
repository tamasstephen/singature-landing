# Responsive Landing Page

This project is a responsive landing page built using React, TypeScript, and Vite. The page is designed to adapt across multiple screen sizes and works seamlessly on desktop, tablet, and mobile devices.

## Tech Stack

- React: Frontend UI library for building the page.
- TypeScript: For type safety and better development experience.
- Vite: Fast and lightweight development build tool.
- CSS/SCSS: Styling the components with a modular approach.

## Setup

1. Clone the repository
2. Install the dependencies with `npm install`
3. Run the app from the terminal with `npm run dev`

## Users with colors function

The fetch users with colors function is under the fetchUsers folder.

## Questions

### Adott egy gomb. Elvileg minden rendben kód szinten, mégsem csinál semmit se hover, se egyéb eseményre (nem disabled). Mi lehet a probléma, mi okozhat ilyen jelenséget?

Az első gondolatom, hogy a js ki van kapcsolva, de ez nem magyarázza meg a hover hiányát.
A következtőket tartom még elképzelhetőnek:

- pointer eventek ki vannak kapcsolva a gombon
- esetleg egy átlátszó elem kitakarja a gombot

![large screen](./screenshots/desktop.png "Title")
![medium screen](./screenshots/medium.png "Title")
<img src="./screenshots/mobile.png" width="375" alt="mobile landing" />
