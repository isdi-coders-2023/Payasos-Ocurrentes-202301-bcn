import { CharactersApiStructure } from "../../../data/types";
import { CharactersActionType, LoadCharactersAction } from "./types";

export const loadCharactersActionCreator = (
  characters: CharactersApiStructure
): LoadCharactersAction => ({
  type: CharactersActionType.loadCharacters,
  payload: characters,
});
