import { useMemo, useReducer } from "react";
import characterReducer from "../../reducers/characters/charactersReducer";
import CharactersContext from "./CharactersContext";

interface CharactersContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const CharactersContextProvider = ({
  children,
}: CharactersContextProviderProps): JSX.Element => {
  const [characters, dispatch] = useReducer(characterReducer, []);

  const store = useMemo(
    () => ({ characters, dispatch }),
    [characters, dispatch]
  );

  return (
    <CharactersContext.Provider value={store}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContextProvider;
