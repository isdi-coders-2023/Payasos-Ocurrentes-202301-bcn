import { useMemo, useReducer } from "react";
import { CharactersApiStructure } from "../../../data/types";
import charactersReducer from "../../reducers/characters/charactersReducer";
import CharactersContext from "./CharactersContext";

interface CharactersContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const CharactersContextProvider = ({
  children,
}: CharactersContextProviderProps): JSX.Element => {
  const [characters, dispatch] = useReducer(charactersReducer, {
    info: { count: 0, pages: 0, next: "", prev: "" },
    results: [
      {
        id: 0,
        name: "",
        status: "",
        species: "",
        gender: "",
        origin: { name: "" },
        location: { name: "" },
        image: "",
      },
    ],
  } as CharactersApiStructure);

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
