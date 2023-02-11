import {
  CharactersApiStructure,
  CharacterStructure,
} from "../../../data/types";
import {
  CharactersAction,
  CharactersActionType,
  LoadCharacterAction,
  LoadCharactersAction,
} from "../../actions/characters/types";
import charactersReducer from "./charactersReducer";

describe("Given the charactersReducer", () => {
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
        name: "Morty",
        status: "",
        species: "",
        gender: "",
        origin: { name: "" },
        location: { name: "" },
        image: "",
      },
    ],
  };

  describe("When it is invoked with two characters and the loadCharacters action type", () => {
    test("Then it should return the two characters", () => {
      const expectedCharacters = characters;
      const loadAction: LoadCharactersAction = {
        type: CharactersActionType.loadCharacters,
        payload: characters,
      };

      const returnedCharacters = charactersReducer(characters, loadAction);

      expect(returnedCharacters).toStrictEqual(expectedCharacters);
    });
  });

  describe("When it is invoked with two characters and the defaultActtion type", () => {
    test("Then it should return the two characters", () => {
      const expectedCharacters = characters;
      const defaultAction: CharactersAction = {
        type: CharactersActionType.defaultAction,
        payload: characters,
      };

      const returnedCharacters = charactersReducer(characters, defaultAction);

      expect(returnedCharacters).toStrictEqual(expectedCharacters);
    });
  });

  describe("When it is invoked with one character and the 'loadCharacter' action type", () => {
    test("Then it should return the single character", () => {
      const character: CharacterStructure = {
        id: 2,
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

      const loadedCharacter: CharactersApiStructure = {
        info: { count: 0, pages: 0, next: "", prev: "" },
        results: [character],
      };

      const loadCharacter: LoadCharacterAction = {
        type: CharactersActionType.loadCharacter,
        payload: character,
      };

      const returnedCharacter = charactersReducer(characters, loadCharacter);

      expect(returnedCharacter).toStrictEqual(loadedCharacter);
    });
  });
});
