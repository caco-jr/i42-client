import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root,
[data-theme="default"] {
  // --- Base Colors
  --light-grey: #f4f4f4;
  --grey: #bababa;
  --dark-grey: #7c7c84;
  --blue: #1ea2e0;
  --darker-blue: #0a0818;
  --green: #0ad0b5;
  --pink: #d83f87;
  --red: #fb5050;
  --purple: #2a2356;
  --dark-purple: #201a41;
  // -------------------------
  // --- Brand colors
  --primary-color: var(--color-green);
  --secondary-color: #6b4dc4;
  // -------------------------
  // --- Status color
  --error-color: var(--color-pink);
  // -------------------------
  // --- Border
  --border-color: var(--color-grey);
  --border-radius: 5px;
  // -------------------------
  // --- Others
  --background-color: var(--darker-blue);
  --text-color: #fff;
  // -------------------------
  // --- Font
  --primary-font: 'Avenir LT Std 45 Book', sans-serif;
  --primary-font-medium: 'Avenir LT Std 65 Medium', sans-serif;
  --primary-font-bold: 'Avenir LT Std 85 Heavy', sans-serif;
  --primary-font-black: 'Avenir LT Std 95 Black', sans-serif;

  --title-font-family: var(--primary-font-black);
  --text-font-family: var(--primary-font);
  // -------------------------
}

[data-theme] {
  background-color: var(--background-color);
  color: var(--text-color);
}

[data-theme="light"] {
  --background-color: #fff;
  --text-color: #111;
}

* {
  font-family: var(--primary-font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img {
  border-radius: var(--border-radius);
  height: auto;
  max-width: 100%;
}
`;
