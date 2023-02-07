import { useContext, useCallback } from "react";
import CharactersContext from "../../store/contexts/characters/CharactersContext";
import { loadCharactersActionCreator } from "../../store/actions/characters/charactersActionCreators";
import {
  ApiEndpointsStructure,
  CharactersApiStructure,
} from "../../data/types";

const useApi = () => {
  const { dispatch } = useContext(CharactersContext);

  const getCharactersApi = useCallback(async () => {
    const response = await fetch(process.env.REACT_APP_URL_API!);
    const apiEndPoints = (await response.json()) as ApiEndpointsStructure;
    const characterInfoResponse = await fetch(apiEndPoints.characters);
    const charactersInfo =
      (await characterInfoResponse.json()) as CharactersApiStructure;
    dispatch(loadCharactersActionCreator(charactersInfo.results));
  }, [dispatch]);

  return { getCharactersApi };
};

export default useApi;
