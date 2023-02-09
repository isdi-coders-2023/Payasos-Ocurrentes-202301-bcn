import { CharactersStructure } from "../data/types";
import {
  CharactersActionType,
  LoadCharactersAction,
} from "../store/actions/characters/types";
import { SetIsLoadingAction, UiActionType } from "../store/actions/ui/types";

export const dispatch: React.Dispatch<any> = jest.fn();
export const characters: CharactersStructure = [
  {
    id: 1,
    name: "Rick",
    status: "",
    species: "",
    gender: "",
    origin: { name: "" },
    location: { name: "" },
    image: "",
  },
  {
    id: 2,
    name: "Morty",
    status: "",
    species: "",
    gender: "",
    origin: { name: "" },
    location: { name: "" },
    image: "",
  },
];
export const mockStore = { dispatch, characters };
export const mockDispatch = jest.spyOn(mockStore, "dispatch");
export const mockLoadCharactersAction: LoadCharactersAction = {
  type: CharactersActionType.loadCharacters,
  payload: characters,
};

export const isLoading = false;
export const uiDispatch: React.Dispatch<any> = jest.fn();
export const mockUiStore = { dispatch: uiDispatch, isLoading };
export const mockUiDispatch = jest.spyOn(mockUiStore, "dispatch");
export const mockSetIsLoading: SetIsLoadingAction = {
  type: UiActionType.setIsLoading,
};
