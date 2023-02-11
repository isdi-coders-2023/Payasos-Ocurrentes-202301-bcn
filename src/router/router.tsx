import { createBrowserRouter } from "react-router-dom";
import App from "../App";
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
    ],
  },
]);

export default router;
