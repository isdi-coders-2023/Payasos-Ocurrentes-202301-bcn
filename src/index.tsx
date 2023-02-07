import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HomePage from "./components/HomePage/HomePage";
import GlobalStyles from "./GlobalStyles";
import CharactersContextProvider from "./store/contexts/characters/CharactersContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CharactersContextProvider>
      <App />
      <HomePage />
      <GlobalStyles />
    </CharactersContextProvider>
  </React.StrictMode>
);
