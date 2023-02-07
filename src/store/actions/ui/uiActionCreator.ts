import { UiActionType } from "./types";

export const setIsLoadingActionCreator = () => ({
  type: UiActionType.setIsLoading,
});

export const unsetIsLoadingActionCreator = () => ({
  type: UiActionType.unsetIsLoading,
});
