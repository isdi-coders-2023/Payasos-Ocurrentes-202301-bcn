import HomePageStyled from "./HomePageStyled";
import { useContext, useEffect } from "react";
import CharactersList from "../../components/CharacterList/CharactersList";
import useApi from "../../hooks/useApi/useApi";
import CharactersContext from "../../store/contexts/characters/CharactersContext";
import UiContext from "../../store/contexts/ui/UiContext";
import Footer from "../../components/Footer/Footer";

const HomePage = (): JSX.Element => {
  const { characters } = useContext(CharactersContext);
  const { isLoading } = useContext(UiContext);

  const { getCharactersApi } = useApi();

  useEffect(() => {
    getCharactersApi();
  }, [getCharactersApi]);

  return (
    <>
      <HomePageStyled>
        <h1 className="main-title">Characters</h1>
        {!isLoading && <CharactersList characters={characters} />}
        <Footer />
      </HomePageStyled>
    </>
  );
};

export default HomePage;
