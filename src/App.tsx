import { useEffect } from "react";
import useApi from "./hooks/useApi/useApi";

const App = (): JSX.Element => {
  const { getCharactersApi } = useApi();

  useEffect(() => {
    getCharactersApi();
  });

  return <div></div>;
};

export default App;
