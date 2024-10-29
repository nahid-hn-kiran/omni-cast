import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAddPodcastMutation } from "../../../redux/features/podcast/podcastSlice";
import Loading from "../../../Shared/Loading/Loading";
import { showPopup } from "../../../Shared/ShowPopup/ShowPopup";

const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_PODCAST_UPLOAD_PRESET;
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
console.log(CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET);
const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`;

const AddPodcast = () => {
  const [addPodcast, { isLoading, error }] = useAddPodcastMutation();

  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");

  const [audioFile, setAudioFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);

  // Function to upload a file to Cloudinary
  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const response = await fetch(CLOUDINARY_URL, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const thumbnailUrl = thumbnailFile
      ? await handleFileUpload(thumbnailFile)
      : "";
    const audioUrl = audioFile ? await handleFileUpload(audioFile) : "";
    const title = e.target.title.value;
    const formData = {
      title,
      thumbnail: thumbnailUrl,
      podcast: audioUrl,
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
              onChange={(e) => setThumbnailFile(e.target.files[0])}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            {thumbnailFile ? (
              <p className="mt-2 text-sm text-green-500">New file selected</p>
            ) : null}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Podcast Audio
            </label>
            <input
              type="file"
              accept="audio/*"
              onChange={(e) => setAudioFile(e.target.files[0])}
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline info-btn"
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
