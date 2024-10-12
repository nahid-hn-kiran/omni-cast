import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAddPodcastMutation } from "../../../redux/features/podcast/podcastSlice";
import Loading from "../../../Shared/Loading/Loading";
import { showPopup } from "../../../Shared/ShowPopup/ShowPopup";

const AddPodcast = () => {
  const [addPodcast, { isLoading, error }] = useAddPodcastMutation();

  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const formData = {
      title,
      thumbnail: "https://www.google.com",
      podcast: "https://www.google.com",
      shortDescription,
      longDescription,
    };
    const result = await addPodcast(formData).unwrap();
    setShortDescription("");
    setLongDescription("");
    showPopup({
      title: "Success!",
      text: result?.message,
      icon: "success",
    });
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    showPopup({
      title: "Error!",
      text: error?.data?.error,
      icon: "error",
    });
  }

  return (
    <div>
      <button onClick={() => goBack()} className="primary-btn mb-2">
        Go Back
      </button>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h2 className="text-2xl font-bold mb-4">Add New Podcast</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              placeholder="Podcast Title"
              name="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Thumbnail
            </label>
            <input
              type="file"
              accept="image/*"
              name="thumbnail"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Podcast Audio
            </label>
            <input
              type="file"
              accept="audio/*"
              name="podcast"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Short Description
            </label>
            <textarea
              placeholder="Short Description"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
              maxLength={100}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Long Description
            </label>
            <ReactQuill
              theme="snow"
              value={longDescription}
              onChange={setLongDescription}
              className="bg-white shadow-md rounded w-full"
              placeholder="Write your podcast's long description..."
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={isLoading}
            >
              Add Podcast
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPodcast;
