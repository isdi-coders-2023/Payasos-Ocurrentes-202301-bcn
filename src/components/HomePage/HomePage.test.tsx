import { render, screen } from "@testing-library/react";
import CharactersContextProvider from "../../store/contexts/characters/CharactersContextProvider";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When rendered", () => {
    test("Then it should render a heading element on the screen", () => {
      render(<HomePage />);

      const text = screen.getByRole("heading", { level: 1 });

      expect(text).toBeInTheDocument();
    });

    test("Then it should show a 'Characters' text", () => {
      const expectedOutput = "Characters";
      render(<HomePage />);

      const text = screen.getByText(expectedOutput);

      expect(text).toBeVisible();
    });

    test("Then it should show the text 'Characters'", () => {
      const expectedResult = "Characters";

      render(<HomePage />);

      const result = screen.getByText("Characters");

      expect(result.innerHTML).toBe(expectedResult);
    });
  });
});

describe("Given a Character provider", () => {
  describe("When rendered", () => {
    test("Then it should show the HomePage component", () => {
      render(
        <CharactersContextProvider>
          <HomePage></HomePage>
        </CharactersContextProvider>
      );

      const result = screen.getByRole("heading", { level: 1 });

      expect(result).toBeInTheDocument();
    });
  });
});
