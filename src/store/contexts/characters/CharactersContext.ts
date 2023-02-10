import { createContext } from "react";
import { CharactersApiStructure } from "../../../data/types";
import { CharactersAction } from "../../actions/characters/types";

interface CharactersContextStructure {
  characters: CharactersApiStructure;
  dispatch: React.Dispatch<CharactersAction>;
}

const CharactersContext = createContext<CharactersContextStructure>(
  {} as CharactersContextStructure
);

export default CharactersContext;
