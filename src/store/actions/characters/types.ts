export enum CharactersActionType {
  loadCharacters,
}

export interface CharactersAction {
  type: CharactersActionType;
  payload?: unknown;
}
