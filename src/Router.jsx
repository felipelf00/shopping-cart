import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import Shop from "./components/Shop";
import Home from "./components/Home";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
