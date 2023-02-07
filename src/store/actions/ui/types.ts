export enum UiActionType {
  setIsLoading,
  unsetIsLoading,
}

export interface UiAction {
  type: UiActionType;
  payload?: unknown;
}

export interface SetIsLoadingAction extends UiAction {}

export interface UnsetIsLoadingAction extends UiAction {}
