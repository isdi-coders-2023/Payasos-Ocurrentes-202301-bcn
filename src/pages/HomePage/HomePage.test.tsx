import { render, screen } from "@testing-library/react";
import CharactersContextProvider from "../../store/contexts/characters/CharactersContextProvider";
import UiContextProvider from "../../store/contexts/ui/UiContextProvider";
import HomePage from "./HomePage";

describe("Given a Character provider", () => {
  describe("When rendered", () => {
    test("Then it should show the HomePage component", () => {
      render(
        <UiContextProvider>
          <CharactersContextProvider>
            <HomePage></HomePage>
          </CharactersContextProvider>
        </UiContextProvider>
      );

      const result = screen.getByRole("heading", { level: 1 });

      expect(result).toBeInTheDocument();
    });
  });
});
