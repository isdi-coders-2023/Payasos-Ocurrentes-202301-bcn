import { CharactersStructure } from "../../../data/types";
import { CharactersActionType, LoadCharactersAction } from "./types";

export const loadCharactersActionCreator = (
  characters: CharactersStructure
): LoadCharactersAction => ({
  type: CharactersActionType.loadCharacters,
  payload: characters,
});
