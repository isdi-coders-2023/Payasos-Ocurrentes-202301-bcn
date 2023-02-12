import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import CharactersContextProvider from "../store/contexts/characters/CharactersContextProvider";
import UiContextProvider from "../store/contexts/ui/UiContextProvider";
import { routes } from "./routes";

describe("Given a router", () => {
  describe("seds", () => {
    test("dsds", () => {
      const expectedName = "rick and morty - wiki";
      const router = createMemoryRouter(routes, {
        initialEntries: ["/"],
      });

      render(
        <UiContextProvider>
          <CharactersContextProvider>
            <RouterProvider router={router} />
          </CharactersContextProvider>
        </UiContextProvider>
      );

      const resultedName = screen.getByText(expectedName);

      expect(resultedName).toBeInTheDocument();
    });
  });
});
