import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./GlobalStyles";
import CharactersContextProvider from "./store/contexts/characters/CharactersContextProvider";
import "@fontsource/work-sans";
import Character from "./components/Character/Character";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CharactersContextProvider>
      <App />
      <Character />
      <GlobalStyles />
    </CharactersContextProvider>
  </React.StrictMode>
);
