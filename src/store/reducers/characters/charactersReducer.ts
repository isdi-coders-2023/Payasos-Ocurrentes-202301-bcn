import { CharactersStructure } from "../../../data/types";
import { CharactersAction } from "../../actions/characters/types";

const characterReducer = (
  currentCharacters: CharactersStructure,
  action: CharactersAction
) => {
  let newCharacters: CharactersStructure;

  switch (action.type) {
    default:
      newCharacters = currentCharacters;
  }

  return newCharacters;
};

export default characterReducer;
