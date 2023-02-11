import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CharacterPage from "../pages/CharacterPage/CharacterPage";
import { DetailPage } from "../pages/DetailPage/DetailPage";
import HomePage from "../pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        element: <CharacterPage />,
      },
    ],
  },
]);

export default router;
