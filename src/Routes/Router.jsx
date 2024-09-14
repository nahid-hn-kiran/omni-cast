import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Podcasts from "../Pages/Podcasts/Podcasts";
import SingleEpisode from "../components/SingleEpisode/SingleEpisode";
import SingleBlogPage from "../components/BlogCard/SingleBlogPage";

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
      {
        path: "/page",
        element: <SingleEpisode />,
      },
      {
        path: "/single",
        element: <SingleBlogPage />,
      },
    ],
  },
]);

export default Router;
