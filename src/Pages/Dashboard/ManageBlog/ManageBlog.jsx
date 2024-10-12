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
  console.log(blogs?.data);
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Manage Blogs</h1>
        <Link
          to="/admin/dashboard/add-blog"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded info-btn"
        >
          Add New Blog
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
          {blogs?.data?.map((blog) => (
            <tr className="border-t-2" key={blog._id}>
              <td className="py-2 px-4 w-4/6">{blog.title}</td>
              <td className="py-2 px-4">Nahid Hasan</td>
              <td className="py-2 px-4 flex flex-col gap-y-2">
                <button className="text-red-500 hover:text-red-700 mr-2 primary-btn">
                  Delete
                </button>
                <Link className="text-green-500 text-center hover:text-green-700 mr-2 secondary-btn">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBlog;
