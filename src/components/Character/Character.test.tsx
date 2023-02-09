import { render, screen } from "@testing-library/react";
import { CharacterStructure } from "../../data/types";
import CharactersContextProvider from "../../store/contexts/characters/CharactersContextProvider";
import Character from "./Character";

describe("Given a card Character component", () => {
  describe("When rendered with a given character", () => {
    test("Then it should have a h2 element with the name 'Morty Smith'", () => {
      const character: CharacterStructure = {
        id: 0,
        name: "Morty Smith",
        status: "",
        species: "",
        gender: "",
        origin: {
          name: "",
        },
        location: {
          name: "",
        },
        image: "",
      };

      render(<Character character={character} />);

      const expectedResult = "Morty Smith";

      const result = screen.getByText("Morty Smith");

      const resultTitleElement = screen.getByRole("heading", { level: 2 });

      expect(resultTitleElement).toBeInTheDocument();

      expect(result.innerHTML).toBe(expectedResult);
    });
  });
});

describe("Given a Character provider", () => {
  describe("When rendered with the card character component", () => {
    test("Then it should show a Character card", () => {
      const character: CharacterStructure = {
        id: 0,
        name: "",
        status: "",
        species: "",
        gender: "",
        origin: {
          name: "",
        },
        location: {
          name: "",
        },
        image: "",
      };

      render(
        <CharactersContextProvider>
          <Character character={character}></Character>
        </CharactersContextProvider>
      );

      const result = screen.getByRole("heading", { level: 2 });

      expect(result).toBeInTheDocument();
    });
  });
});
