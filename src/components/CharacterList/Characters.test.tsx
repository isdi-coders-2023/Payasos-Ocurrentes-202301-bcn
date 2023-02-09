import { render, screen } from "@testing-library/react";
import { CharactersStructure } from "../../data/types";
import CharactersList from "./CharactersList";

describe("Given a component Characters List", () => {
  describe("When rendered with a given character", () => {
    test("Then it should show a list of characters and one of them should have the name 'Morty Smith'", () => {
      const characters: CharactersStructure = [
        {
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
        },
      ];

      render(<CharactersList characters={characters} />);

      const result = screen.getByText("Morty Smith");

      expect(result).toBeInTheDocument();
    });
  });
});
