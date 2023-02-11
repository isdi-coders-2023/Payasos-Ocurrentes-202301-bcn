import { Outlet } from "react-router-dom";
import { useContext } from "react";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import UiContext from "../../store/contexts/ui/UiContext";
import GlobalStyles from "../../styles/GlobalStyles";

const Layout = (): JSX.Element => {
  const { isLoading } = useContext(UiContext);

  return (
    <>
      <Header />
      <main>
        {isLoading && <Loader />}
        <GlobalStyles />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
