import { CharactersStructure } from "../data/types";
import {
  CharactersAction,
  CharactersActionType,
  LoadCharactersAction,
} from "../store/actions/characters/types";

export const dispatch: React.Dispatch<CharactersAction> = jest.fn();
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
