import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
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

      render(<Character character={character} />, { wrapper: BrowserRouter });

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
        </CharactersContextProvider>,
        { wrapper: BrowserRouter }
      );

      const result = screen.getByRole("heading", { level: 2 });

      expect(result).toBeInTheDocument();
    });
  });
});

describe("Given a card Character component with a large name title", () => {
  describe("When rendered and has a bigger character name than 13 characteres", () => {
    test("Then it should show a card Character with the class and the modifyier 'title-characters--smalltitle'", () => {
      const character: CharacterStructure = {
        id: 0,
        name: "Ants in my Eyes Johnson",
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
      const className = "character-card__title-characters--smallTitle";

      render(<Character character={character} />, { wrapper: BrowserRouter });

      const expectedResult = screen.getByRole("heading", { level: 2 });

      expect(expectedResult).toHaveClass(className);
    });
  });
});
