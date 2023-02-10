import { CharactersApiStructure } from "../data/types";
import CharactersContext from "../store/contexts/characters/CharactersContext";
import UiContext from "../store/contexts/ui/UiContext";

export interface CharactersStoreStructure {
  dispatch: React.Dispatch<any>;
  characters: CharactersApiStructure;
}

export interface UiStoreStructure {
  dispatch: React.Dispatch<any>;
  isLoading: boolean;
}

export interface WrapperProps {
  children: JSX.Element | JSX.Element[];
  charactersStore: CharactersStoreStructure;
  uiStore: UiStoreStructure;
}

export const Wrapper = ({
  children,
  charactersStore,
  uiStore,
}: WrapperProps): JSX.Element => {
  return (
    <UiContext.Provider value={uiStore}>
      <CharactersContext.Provider value={charactersStore}>
        {children}
      </CharactersContext.Provider>
    </UiContext.Provider>
  );
};
