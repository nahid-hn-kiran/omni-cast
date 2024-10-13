import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetSinglePodcastQuery,
  useUpdatePodcastMutation,
} from "../../../redux/features/podcast/podcastSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { showPopup } from "../../../Shared/ShowPopup/ShowPopup";
import Loading from "../../../Shared/Loading/Loading";

const UpdatePodcast = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: podcast, isLoading, error } = useGetSinglePodcastQuery(id);
  const [updatePodcast, { isLoading: updateLoading, error: updateError }] =
    useUpdatePodcastMutation();

  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [audioURL, setAudioURL] = useState("");
  useEffect(() => {
    if (podcast) {
      setTitle(podcast?.data.title);
      setThumbnail(podcast?.data.thumbnail);
      setShortDescription(podcast?.data.shortDescription);
      setLongDescription(podcast?.data.longDescription);
      setAudioURL(podcast?.data.podcast);
    }
  }, [podcast]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPodcast = {
      title,
      thumbnail,
      shortDescription,
      longDescription,
      podcast: audioURL,
    };
    if (window.confirm(`Are you sure you want to Update this Podcast? ${id}`)) {
      const result = await updatePodcast({ id, updatedPodcast });
      showPopup({
        title: "Success!",
        text: result?.data?.message,
        icon: "success",
      });
    } else {
      showPopup({
        title: "Failed!",
        text: updateError?.data?.message,
        icon: "error",
      });
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  if (isLoading || updateLoading) return <Loading />;
  if (error) {
    showPopup({
      title: "Failed!",
      text: error?.data?.message,
      icon: "error",
    });
  }
  return (
    <div>
      <button onClick={() => goBack()} className="primary-btn mb-4">
        Go Back
      </button>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl font-bold mb-4">Update Podcast</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Thumbnail URL
            </label>
            <input
              type="url"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Short Description
            </label>
            <textarea
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-16"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Long Description
            </label>
            <ReactQuill
              value={longDescription}
              onChange={setLongDescription}
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Podcast Audio
            </label>
            <input
              type="url"
              value={audioURL}
              onChange={(e) => setAudioURL(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline info-btn"
            >
              Update Podcast
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePodcast;
