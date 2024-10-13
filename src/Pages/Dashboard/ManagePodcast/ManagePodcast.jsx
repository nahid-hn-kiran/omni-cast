import { Link } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";
import {
  useDeletePodcastMutation,
  useGetAllPodcastQuery,
} from "../../../redux/features/podcast/podcastSlice";
import { showPopup } from "../../../Shared/ShowPopup/ShowPopup";

const ManagePodcast = () => {
  const { data: podcasts, isLoading, error } = useGetAllPodcastQuery();
  const [deletePodcast, { isLoading: deleteLoading, error: deleteError }] =
    useDeletePodcastMutation();

  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete this podcast? ${id}`)) {
      deletePodcast(id);
      showPopup({
        title: "Success!",
        text: "Podcast deleted successfully!",
        icon: "success",
      });
    } else {
      showPopup({
        title: "Failed!",
        text: "Couldn't delete the Podcast!",
        icon: "error",
      });
    }
  };

  if (isLoading || deleteLoading) return <Loading />;
  if (error || deleteError)
    showPopup({
      title: "Failed!",
      text: error ? error?.data?.message : deleteError?.data?.message,
      icon: "error",
    });

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Podcasts</h2>
        <Link
          to="/admin/dashboard/add-podcast"
          className="bg-blue-500 text-white px-4 py-2 rounded info-btn"
        >
          Add New Podcast
        </Link>
      </div>

      {/* Podcast List Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto w-full text-left">
          <thead>
            <tr className="w-full">
              <th className="px-4 py-2">Title</th>
              <th>Author</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {podcasts?.data?.map((podcast) => (
              <tr key={podcast._id} className="border-b">
                <td className="px-4 py-2px-4 w-4/6">{podcast.title}</td>
                <td>Nahid Hasan</td>
                <td className="py-2 px-4 flex flex-col gap-y-2">
                  <button
                    onClick={() => handleDelete(podcast._id)}
                    className="text-red-500 primary-btn"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/admin/edit-podcast/${podcast._id}`}
                    className="text-green-500 mr-4 secondary-btn w-full text-center"
                  >
                    Edit
                  </Link>
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
