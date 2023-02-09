import { useContext, useEffect } from "react";
import Characters from "./components/CharacterList/CharacterList";
import useApi from "./hooks/useApi/useApi";
import CharactersContext from "./store/contexts/characters/CharactersContext";

const App = (): JSX.Element => {
  const { getCharactersApi } = useApi();

  const { characters } = useContext(CharactersContext);

  useEffect(() => {
    getCharactersApi();
  }, [getCharactersApi]);

  return <Characters characters={characters} />;
};

export default App;
