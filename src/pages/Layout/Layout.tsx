import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import GlobalStyles from "../../styles/GlobalStyles";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <GlobalStyles />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
