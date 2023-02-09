import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/work-sans";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import CharactersContextProvider from "./store/contexts/characters/CharactersContextProvider";
import GlobalStyles from "./styles/GlobalStyles";
import UiContextProvider from "./store/contexts/ui/UiContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UiContextProvider>
      <CharactersContextProvider>
        <HomePage />
        <App />
        <GlobalStyles />
      </CharactersContextProvider>
    </UiContextProvider>
  </React.StrictMode>
);
