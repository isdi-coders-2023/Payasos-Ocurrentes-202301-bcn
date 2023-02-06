import { useReducer } from "react";
import characterReducer from "../../reducers/characters/charactersReducer";
import CharactersContext from "./CharactersContext";

interface CharactersContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const CharactersContextProvider = ({
  children,
}: CharactersContextProviderProps): JSX.Element => {
  const [characters, dispatch] = useReducer(characterReducer, []);

  return (
    <CharactersContext.Provider value={{ characters, dispatch }}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContextProvider;
