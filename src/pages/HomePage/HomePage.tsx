import HomePageStyled from "./HomePageStyled";
import { useContext, useEffect } from "react";
import CharactersList from "../../components/CharacterList/CharactersList";
import useApi from "../../hooks/useApi/useApi";
import CharactersContext from "../../store/contexts/characters/CharactersContext";

const HomePage = (): JSX.Element => {
  const { characters } = useContext(CharactersContext);

  const { getCharactersApi } = useApi();

  useEffect(() => {
    getCharactersApi();
  }, [getCharactersApi]);

  return (
    <>
      <HomePageStyled>
        <h1>Characters</h1>
        <CharactersList characters={characters} />
      </HomePageStyled>
    </>
  );
};

export default HomePage;
