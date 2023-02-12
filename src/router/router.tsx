import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Header from "../components/Header/Header";
import CreateCharacterPage from "../pages/CreateCharacterPage/CreateCharacterPage";
import { DetailPage } from "../pages/DetailPage/DetailPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <>
        <Header />
        <ErrorPage />
      </>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/detail",
        element: <DetailPage />,
      },
      {
        path: "/create",
        element: <CreateCharacterPage />,
      },
    ],
  },
]);

export default router;
