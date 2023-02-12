import HomePageStyled from "./HomePageStyled";
import { useCallback, useContext, useEffect } from "react";
import CharactersList from "../../components/CharacterList/CharactersList";
import useApi from "../../hooks/useApi/useApi";
import CharactersContext from "../../store/contexts/characters/CharactersContext";
import UiContext from "../../store/contexts/ui/UiContext";
import Button from "../../components/Button/Button";
import { CharactersApiStructure } from "../../data/types";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/actions/ui/uiActionCreator";
import { loadCharactersActionCreator } from "../../store/actions/characters/charactersActionCreators";

const HomePage = (): JSX.Element => {
  const { characters, dispatch } = useContext(CharactersContext);
  const { isLoading, dispatch: uiDispatch } = useContext(UiContext);

  const { getCharactersApi } = useApi();

  useEffect(() => {
    getCharactersApi();
  }, [getCharactersApi]);

  const getNextPage = useCallback(async () => {
    if (!characters.info.next) {
      return;
    }
    uiDispatch(setIsLoadingActionCreator());

    const response = await fetch(characters.info.next!);
    const nextPage = (await response.json()) as CharactersApiStructure;

    uiDispatch(unsetIsLoadingActionCreator());

    dispatch(loadCharactersActionCreator(nextPage));
  }, [characters.info.next, dispatch, uiDispatch]);

  const getPrevPage = useCallback(async () => {
    if (!characters.info.prev) {
      return;
    }
    uiDispatch(setIsLoadingActionCreator());

    const response = await fetch(characters.info.prev!);
    const nextPage = (await response.json()) as CharactersApiStructure;

    uiDispatch(unsetIsLoadingActionCreator());

    dispatch(loadCharactersActionCreator(nextPage));
  }, [characters.info.prev, dispatch, uiDispatch]);

  return (
    <>
      <HomePageStyled>
        {!isLoading && <h1>Characters</h1>}
        {!isLoading && <CharactersList characters={characters} />}
        <div className="button-container">
          {!isLoading && (
            <Button action={getPrevPage} className="button-container__prev">
              <span>Previous</span>
            </Button>
          )}
          {!isLoading && (
            <Button action={getNextPage} className="button-container__next">
              <span>Next</span>
            </Button>
          )}
        </div>
      </HomePageStyled>
    </>
  );
};

export default HomePage;
