import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "Home",
        element: "",
      },
    ],
  },
]);

export default router;
