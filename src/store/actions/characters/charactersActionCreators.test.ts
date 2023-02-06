import { CharactersStructure } from "../../../data/types";
import { loadCharactersActionCreator } from "./charactersActionCreators";
import { CharactersActionType, LoadCharactersAction } from "./types";

describe("Given a charactersActionCreator", () => {
  describe("When it receives a list of 2 characters", () => {
    test("Then it should return an action with type `loadCharacters` and the two characters as payload", () => {
      const characters: CharactersStructure = [
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
      ];

      const expectedLoadCharactersAction: LoadCharactersAction = {
        type: CharactersActionType.loadCharacters,
        payload: characters,
      };

      const loadCharactersAction = loadCharactersActionCreator(characters);

      expect(loadCharactersAction).toStrictEqual(expectedLoadCharactersAction);
    });
  });
});
