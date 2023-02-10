import { CharactersApiStructure } from "../../../data/types";
import {
  CharactersAction,
  CharactersActionType,
  LoadCharactersAction,
} from "../../actions/characters/types";

const characterReducer = (
  currentCharacters: CharactersApiStructure,
  action: CharactersAction
): CharactersApiStructure => {
  let newCharacters: CharactersApiStructure;

  if (action.type === CharactersActionType.loadCharacters) {
    newCharacters = { ...(action as LoadCharactersAction).payload };
    return newCharacters;
  } else {
    newCharacters = currentCharacters;
    return newCharacters;
  }
};

export default characterReducer;
