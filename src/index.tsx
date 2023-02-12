import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fontsource/work-sans";
import { RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import CharactersContextProvider from "./store/contexts/characters/CharactersContextProvider";
import GlobalStyles from "./styles/GlobalStyles";
import UiContextProvider from "./store/contexts/ui/UiContextProvider";
import { router } from "./router/router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UiContextProvider>
      <CharactersContextProvider>
        <GlobalStyles />
        <RouterProvider router={router} />
      </CharactersContextProvider>
    </UiContextProvider>
  </React.StrictMode>
);
