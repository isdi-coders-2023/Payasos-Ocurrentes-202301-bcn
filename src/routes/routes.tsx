import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateCharacterPage from "../pages/CreateCharacterPage/CreateCharacterPage";
import { DetailPage } from "../pages/DetailPage/DetailPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";

export const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
      {
        path: "detail/:id",
        element: <DetailPage />,
      },
      {
        path: "create-character",
        element: <CreateCharacterPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
