import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
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

export default GlobalStyle;
