import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import GlobalStyles from "./GlobalStyles";
import CharactersContextProvider from "./store/contexts/characters/CharactersContextProvider";
import Button from "./components/Button/Button";
import "@fortawesome/fontawesome-free/css/all.min.css";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CharactersContextProvider>
      <App />
      <HomePage />
      <Button
        className="fa-solid fa-arrow-left-long"
        action={function (): void {}}
      />
      <GlobalStyles />
    </CharactersContextProvider>
  </React.StrictMode>
);
