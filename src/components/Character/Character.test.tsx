import { render, screen } from "@testing-library/react";
import CharactersContextProvider from "../../store/contexts/characters/CharactersContextProvider";
import Character from "./Character";

describe("Given a card Character", () => {
  describe("When rendered", () => {
    test("Then it should have a span", () => {
      const expectedResult = "Morty Smith";

      render(<Character name="Morty Smith" specie="" status="" />);

      const result = screen.getByText("Morty Smith");

      expect(result.innerHTML).toBe(expectedResult);
    });
  });

  test("Then it should have a h2 element", () => {
    render(<Character name="" status="" specie="" />);

    const result = screen.getByRole("heading", { level: 2 });

    expect(result).toBeInTheDocument();
  });
});

describe("Given a Character provider", () => {
  describe("When rendered", () => {
    test("Then it should show a Character card", () => {
      render(
        <CharactersContextProvider>
          <Character name="" status="" specie=""></Character>
        </CharactersContextProvider>
      );

      const result = screen.getByRole("heading", { level: 2 });

      expect(result).toBeInTheDocument();
    });
  });
});
