import { CharactersApiStructure } from "../../../data/types";
import {
  CharactersAction,
  CharactersActionType,
  LoadCharacterAction,
  LoadCharactersAction,
} from "../../actions/characters/types";

const charactersReducer = (
  currentCharacters: CharactersApiStructure,
  action: CharactersAction
): CharactersApiStructure => {
  let newCharacters: CharactersApiStructure;

  switch (action.type) {
    case CharactersActionType.loadCharacters:
      newCharacters = { ...(action as LoadCharactersAction).payload };
      break;

    case CharactersActionType.loadCharacter:
      newCharacters = {
        ...currentCharacters,
        results: [(action as LoadCharacterAction).payload],
      };
      break;

    default:
      newCharacters = currentCharacters;
  }
  return newCharacters;
};

export default charactersReducer;
