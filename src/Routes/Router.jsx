import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Podcasts from "../Pages/Podcasts/Podcasts";
import SingleEpisode from "../components/SingleEpisode/SingleEpisode";
import SingleBlogPage from "../components/BlogCard/SingleBlogPage";
import Blog from "../Pages/Blog/Blog";
import NotFound from "../Pages/NotFound/NotFound";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Login from "../Shared/Login/Login";
import Register from "../Shared/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";

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
        path: "/podcasts/:id",
        element: <SingleEpisode />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlogPage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default Router;
