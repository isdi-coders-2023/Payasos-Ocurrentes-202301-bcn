import { CharactersStructure } from "../../../data/types";
import { CharactersActionType } from "../../actions/characters/types";
import characterReducer from "./charactersReducer";

describe("Given the characterReducer", () => {
  describe("When it is invoked with two characters and the loadCharacter action", () => {
    test("Then it should return the two characters", () => {
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
      const expectedCharacters = characters;
      const loadAction = {
        type: CharactersActionType.loadCharacters,
        payload: characters,
      };

      const returnedCharacters = characterReducer(characters, loadAction);

      expect(returnedCharacters).toStrictEqual(expectedCharacters);
    });
  });
});
