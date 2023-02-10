import { useMemo, useReducer } from "react";
import uiReducer from "../../reducers/ui/uiReducer";
import UiContext from "./UiContext";

export interface SetIsLoadingContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const UiContextProvider = ({
  children,
}: SetIsLoadingContextProviderProps): JSX.Element => {
  const [isLoading, dispatch] = useReducer(uiReducer, true);

  const store = useMemo(() => ({ isLoading, dispatch }), [isLoading, dispatch]);

  return <UiContext.Provider value={store}>{children}</UiContext.Provider>;
};
export default UiContextProvider;
