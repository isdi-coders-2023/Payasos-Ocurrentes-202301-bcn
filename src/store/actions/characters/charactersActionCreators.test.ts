import {
  CharactersApiStructure,
  CharacterStructure,
} from "../../../data/types";
import {
  loadCharacterActionCreator,
  loadCharactersActionCreator,
} from "./charactersActionCreators";
import {
  CharactersActionType,
  LoadCharacterAction,
  LoadCharactersAction,
} from "./types";

describe("Given a charactersActionCreator", () => {
  describe("When it receives a list of 2 characters", () => {
    test("Then it should return an action with type `loadCharacters` and the two characters as payload", () => {
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

      const expectedLoadCharactersAction: LoadCharactersAction = {
        type: CharactersActionType.loadCharacters,
        payload: characters,
      };

      const loadCharactersAction = loadCharactersActionCreator(characters);

      expect(loadCharactersAction).toStrictEqual(expectedLoadCharactersAction);
    });
  });

  describe("When it receives a list of 1 character", () => {
    test("Then it should return an action with type 'loadCharacter' and the single character as a payload", () => {
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

      const expectedLoadCharacterAction: LoadCharacterAction = {
        type: CharactersActionType.loadCharacter,
        payload: character,
      };

      const loadCharacterAction = loadCharacterActionCreator(character);

      expect(loadCharacterAction).toStrictEqual(expectedLoadCharacterAction);
    });
  });
});
