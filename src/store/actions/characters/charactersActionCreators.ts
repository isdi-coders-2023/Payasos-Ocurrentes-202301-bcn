import {
  CharactersApiStructure,
  CharacterStructure,
} from "../../../data/types";
import {
  CharactersActionType,
  LoadCharacterAction,
  LoadCharactersAction,
} from "./types";

export const loadCharactersActionCreator = (
  characters: CharactersApiStructure
): LoadCharactersAction => ({
  type: CharactersActionType.loadCharacters,
  payload: characters,
});

export const loadCharacterActionCreator = (
  character: CharacterStructure
): LoadCharacterAction => ({
  type: CharactersActionType.loadCharacter,
  payload: character,
});
