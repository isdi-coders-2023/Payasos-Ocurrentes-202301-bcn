import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CharactersApiStructure } from "../../data/types";
import CharactersList from "./CharactersList";

describe("Given a component Characters List", () => {
  describe("When rendered with a given character", () => {
    test("Then it should show a list of characters and one of them should have the name 'Morty Smith'", () => {
      const characters: CharactersApiStructure = {
        info: { count: 0, pages: 0, next: "", prev: "" },
        results: [
          {
            id: 1,
            name: "Rick",
            status: "",
            species: "",
            gender: "",
            origin: { name: "" },
            location: { name: "" },
            image: "",
          },
          {
            id: 2,
            name: "Morty Smith",
            status: "",
            species: "",
            gender: "",
            origin: { name: "" },
            location: { name: "" },
            image: "",
          },
        ],
      };

      render(<CharactersList characters={characters} />, {
        wrapper: BrowserRouter,
      });

      const result = screen.getByText("Morty Smith");

      expect(result).toBeInTheDocument();
    });
  });
});
