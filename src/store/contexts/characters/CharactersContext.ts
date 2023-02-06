import { createContext } from "vm";
import { CharactersStructure } from "../../../data/types";
import { CharactersAction } from "../../actions/characters/types";

interface CharactersContextStructure {
  characters: CharactersStructure;
  dispatch: React.Dispatch<CharactersAction>;
}

const CharactersContext = createContext({} as CharactersContextStructure);

export default CharactersContext;
