import { CharactersStructure } from "../data/types";
import CharactersContext from "../store/contexts/characters/CharactersContext";

export interface StoreStructure {
  dispatch: React.Dispatch<any>;
  characters: CharactersStructure;
}

export interface WrapperProps {
  children: JSX.Element | JSX.Element[];
  store: StoreStructure;
}

export const Wrapper = ({ children, store }: WrapperProps): JSX.Element => {
  return (
    <CharactersContext.Provider value={store}>
      {children}
    </CharactersContext.Provider>
  );
};
