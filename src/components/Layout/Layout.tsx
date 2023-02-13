import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import UiContext from "../../store/contexts/ui/UiContext";

const Layout = (): JSX.Element => {
  const { isLoading } = useContext(UiContext);

  return (
    <>
      <Header />
      <main>
        {isLoading && <Loader />}
        <Outlet />
      </main>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </>
  );
};

export default Layout;
