import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <ul>
        <li className="mb-4">
          <Link to="/admin/dashboard" className="hover:text-gray-400">
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/admin/dashboard/manage-podcasts"
            className="hover:text-gray-400"
          >
            Manage Podcasts
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/admin/dashboard/manage-blogs"
            className="hover:text-gray-400"
          >
            Manage Blogs
          </Link>
        </li>
        <li className="mb-4">
          <Link
            to="/admin/dashboard/manage-users"
            className="hover:text-gray-400"
          >
            Manage Users
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/my-profile" className="hover:text-gray-400">
            My Profile
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
