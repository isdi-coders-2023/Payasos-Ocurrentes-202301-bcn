import { CharactersStructure } from "../../../data/types";
import {
  CharactersAction,
  CharactersActionType,
  LoadCharactersAction,
} from "../../actions/characters/types";

const characterReducer = (
  currentCharacters: CharactersStructure,
  action: CharactersAction
) => {
  let newCharacters: CharactersStructure;

  if (action.type === CharactersActionType.loadCharacters) {
    return (newCharacters = [...(action as LoadCharactersAction).payload]);
  } else {
    newCharacters = currentCharacters;
    return newCharacters;
  }
};

export default characterReducer;
