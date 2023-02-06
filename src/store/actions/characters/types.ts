import { CharactersStructure } from "../../../data/types";

export enum CharactersActionType {
  loadCharacters,
}

export interface CharactersAction {
  type: CharactersActionType;
  payload?: unknown;
}

export interface LoadCharactersAction extends CharactersAction {
  payload: CharactersStructure;
}
