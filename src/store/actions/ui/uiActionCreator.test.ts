import { SetIsLoadingAction, UnsetIsLoadingAction } from "./types";
import { UiActionType } from "./types";
import {
  setIsLoadingActionCreator,
  unsetIsLoadingActionCreator,
} from "./uiActionCreator";

describe("Given a 'setIsLoadingActionCreator'", () => {
  describe("When called", () => {
    test("Then it should return an action type 'setIsLoading'", () => {
      const expectedSetIsLoadingAction: SetIsLoadingAction = {
        type: UiActionType.setIsLoading,
      };

      const setIsLoadingAction = setIsLoadingActionCreator();

      expect(setIsLoadingAction).toStrictEqual(expectedSetIsLoadingAction);
    });
  });
});

describe("Given a 'unsetIsLoadingActionCreator'", () => {
  describe("When called", () => {
    test("Then it should return an action type 'unsetIsLoading'", () => {
      const expectedUnsetIsLoadingAction: UnsetIsLoadingAction = {
        type: UiActionType.unsetIsLoading,
      };

      const unsetIsLoadingAction = unsetIsLoadingActionCreator();

      expect(unsetIsLoadingAction).toStrictEqual(expectedUnsetIsLoadingAction);
    });
  });
});
