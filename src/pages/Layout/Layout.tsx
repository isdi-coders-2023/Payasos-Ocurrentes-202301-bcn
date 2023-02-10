import { Outlet } from "react-router-dom";
import { useContext } from "react";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";
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
