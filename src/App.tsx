import { useContext, useEffect } from "react";
import CharactersList from "./components/CharacterList/CharactersList";
import useApi from "./hooks/useApi/useApi";
import CharactersContext from "./store/contexts/characters/CharactersContext";

const App = (): JSX.Element => {
  const { getCharactersApi } = useApi();

  const { characters } = useContext(CharactersContext);

  useEffect(() => {
    getCharactersApi();
  }, [getCharactersApi]);

  return <CharactersList characters={characters} />;
};

export default App;
