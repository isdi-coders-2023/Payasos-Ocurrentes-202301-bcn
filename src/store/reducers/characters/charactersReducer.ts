import { CharactersStructure } from "../../../data/types";
import {
  CharactersAction,
  CharactersActionType,
  LoadCharactersAction,
} from "../../actions/characters/types";

const characterReducer = (
  currentCharacters: CharactersStructure,
  action: CharactersAction
): CharactersStructure => {
  let newCharacters: CharactersStructure;

  if (action.type === CharactersActionType.loadCharacters) {
    newCharacters = [...(action as LoadCharactersAction).payload];
    return newCharacters;
  } else {
    newCharacters = currentCharacters;
    return newCharacters;
  }
};

export default characterReducer;
