import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {
  margin: 0;
  min-height: 100vh;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}

button {
  font-family: inherit;
}

h1,
h2 {
  margin: 0;
}

`;

export default GlobalStyles;
