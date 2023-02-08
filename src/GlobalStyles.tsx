import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

body {
  margin: 0;
  font-family: 'Work Sans', sans serif;
}

ul,
ol,
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
