import { Link } from "react-router-dom";
import { useGetAllblogQuery } from "../../../redux/features/blog/blogSlice";
import Loading from "../../../Shared/Loading/Loading";
import Error from "../../../Shared/Error/Error";

const ManageBlog = () => {
  const { data: blogs, error, isLoading } = useGetAllblogQuery();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      //   deleteBlog(id);
      console.log(id);
    }
  };

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Manage Blogs</h1>
        <Link
          to="/admin/blogs/create"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Blog
        </Link>
      </div>
      <table className="min-w-full bg-white shadow-md rounded my-6">
        <thead>
          <tr className="w-full text-left bg-gray-800 text-white">
            <th className="py-2 px-4">Title</th>
            <th className="py-2 px-4">Author</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t-2">
            <td className="py-2 px-4 w-4/6">
              Mastering JavaScript: Tips and TricksMastering JavaScript: Tips
              and TricksMastering JavaScript: Tips and TricksMastering
              JavaScript: Tips and TricksMastering JavaScript: Tips and Tricks
            </td>
            <td className="py-2 px-4">Nahid Hasan</td>
            <td className="py-2 px-4">
              <button className="text-red-500 hover:text-red-700 mr-2">
                Delete
              </button>
              <Link className="text-green-500 hover:text-green-700 mr-2">
                Edit
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageBlog;
