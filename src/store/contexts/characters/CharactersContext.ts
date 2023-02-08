import { createContext } from "react";
import { CharactersStructure } from "../../../data/types";
import { CharactersAction } from "../../actions/characters/types";

interface CharactersContextStructure {
  characters: CharactersStructure;
  dispatch: React.Dispatch<CharactersAction>;
}

const CharactersContext = createContext<CharactersContextStructure>(
  {} as CharactersContextStructure
);

export default CharactersContext;
