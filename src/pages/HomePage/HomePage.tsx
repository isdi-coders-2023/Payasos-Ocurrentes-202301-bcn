import HomePageStyled from "./HomePageStyled";
import { useContext, useEffect } from "react";
import CharactersList from "../../components/CharacterList/CharactersList";
import useApi from "../../hooks/useApi/useApi";
import CharactersContext from "../../store/contexts/characters/CharactersContext";
import UiContext from "../../store/contexts/ui/UiContext";

const HomePage = (): JSX.Element => {
  const { getCharactersApi } = useApi();

  useEffect(() => {
    getCharactersApi();
  }, [getCharactersApi]);

  const { characters } = useContext(CharactersContext);
  const { isLoading } = useContext(UiContext);

  return (
    <>
      <HomePageStyled>
        <h1>Characters</h1>
        {!isLoading && <CharactersList characters={characters} />}
      </HomePageStyled>
    </>
  );
};

export default HomePage;
