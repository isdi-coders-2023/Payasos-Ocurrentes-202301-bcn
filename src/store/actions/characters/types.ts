import {
  CharactersApiStructure,
  CharacterStructure,
} from "../../../data/types";

export enum CharactersActionType {
  defaultAction,
  loadCharacters,
  loadCharacter,
}

export interface CharactersAction {
  type: CharactersActionType;
  payload?: unknown;
}

export interface LoadCharactersAction extends CharactersAction {
  payload: CharactersApiStructure;
}

export interface LoadCharacterAction extends CharactersAction {
  payload: CharacterStructure;
}
