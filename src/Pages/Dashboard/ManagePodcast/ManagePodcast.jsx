import { Link } from "react-router-dom";
// import {
//   useGetAllPodcastQuery,
//   useDeletePodcastMutation,
// } from "../features/podcast/podcastSlice";
import Loading from "../../../Shared/Loading/Loading";
import Error from "../../../Shared/Error/Error";
import { useGetAllPodcastQuery } from "../../../redux/features/podcast/podcastSlice";

const ManagePodcast = () => {
  const { data: podcasts, isLoading, isError } = useGetAllPodcastQuery();
  //   const [deletePodcast] = useDeletePodcastMutation();

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  const handleDelete = (id) => {
    // deletePodcast(id);
    console.log(id);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Podcasts</h2>
        <Link
          to="/admin/add-podcast"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add New Podcast
        </Link>
      </div>

      {/* Podcast List Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {podcasts?.data?.map((podcast) => (
              <tr key={podcast._id} className="border-b">
                <td className="px-4 py-2">{podcast.title}</td>
                <td className="px-4 py-2">
                  <Link
                    to={`/admin/edit-podcast/${podcast._id}`}
                    className="text-green-500 mr-4"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(podcast._id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagePodcast;
