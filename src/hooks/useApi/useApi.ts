import { useContext, useCallback } from "react";
import CharactersContext from "../../store/contexts/characters/CharactersContext";
import {
  loadCharacterActionCreator,
  loadCharactersActionCreator,
} from "../../store/actions/characters/charactersActionCreators";
import { CharactersApiStructure, CharacterStructure } from "../../data/types";
import UiContext from "../../store/contexts/ui/UiContext";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "../../store/actions/ui/uiActionCreator";

const useApi = () => {
  const { dispatch } = useContext(CharactersContext);
  const { dispatch: uiDispatch } = useContext(UiContext);

  const getCharactersApi = useCallback(async () => {
    try {
      uiDispatch(setIsLoadingActionCreator());

      const characterInfoResponse = await fetch(process.env.REACT_APP_URL_API!);

      const charactersInfo =
        (await characterInfoResponse.json()) as CharactersApiStructure;

      uiDispatch(unsetIsLoadingActionCreator());

      dispatch(loadCharactersActionCreator(charactersInfo));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch, uiDispatch]);

  const getSingleCharacter = useCallback(
    async (id: number) => {
      try {
        uiDispatch(setIsLoadingActionCreator());

        const singleCharacterResponse = await fetch(
          `${process.env.REACT_APP_ID_CHARACTER}${id}`
        );

        const singleCharacter =
          (await singleCharacterResponse.json()) as CharacterStructure;

        dispatch(loadCharacterActionCreator(singleCharacter));
        uiDispatch(unsetIsLoadingActionCreator());
      } catch (error) {
        return (error as Error).message;
      }
    },
    [dispatch, uiDispatch]
  );

  return { getCharactersApi, getSingleCharacter };
};

export default useApi;
