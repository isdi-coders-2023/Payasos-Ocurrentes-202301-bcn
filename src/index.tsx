import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import CharactersContextProvider from "./store/contexts/characters/CharactersContextProvider";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/work-sans";
import Character from "./components/Character/Character";
import GlobalStyles from "./styles/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CharactersContextProvider>
      <App />
      <HomePage />
      <Character />
      <GlobalStyles />
    </CharactersContextProvider>
  </React.StrictMode>
);
