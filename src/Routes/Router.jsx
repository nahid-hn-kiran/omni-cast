import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Podcasts from "../Pages/Podcasts/Podcasts";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/podcasts",
        element: <Podcasts />,
      },
    ],
  },
]);

export default Router;
