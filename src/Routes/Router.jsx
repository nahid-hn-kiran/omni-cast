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
import ManagePodcast from "../Pages/Dashboard/ManagePodcast/ManagePodcast";
import AddPodcast from "../Pages/Dashboard/ManagePodcast/AddPodcast";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import ManageBlog from "../Pages/Dashboard/ManageBlog/ManageBlog";
import AddBlog from "../Pages/Dashboard/ManageBlog/AddBlog";
import UpdateUser from "../Pages/Dashboard/ManageUser/UpdateUser";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import UpdatePodcast from "../Pages/Dashboard/ManagePodcast/UpdatePodcast";
import UpdateBlog from "../Pages/Dashboard/ManageBlog/UpdateBlog";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: <DashboardHome />,
          },
          {
            path: "manage-podcasts",
            element: <ManagePodcast />,
          },
          {
            path: "add-podcast",
            element: <AddPodcast />,
          },
          {
            path: "edit-podcast/:id",
            element: <UpdatePodcast />,
          },
          {
            path: "manage-users",
            element: <ManageUser />,
          },
          {
            path: "manage-users/:id",
            element: <UpdateUser />,
          },
          {
            path: "manage-blogs",
            element: <ManageBlog />,
          },
          {
            path: "edit-blog/:id",
            element: <UpdateBlog />,
          },
          {
            path: "add-blog",
            element: <AddBlog />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default Router;
