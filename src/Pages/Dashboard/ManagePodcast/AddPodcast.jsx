import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import ReactQuill for the long description
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddPodcast = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState(null); // Thumbnail file
  const [audio, setAudio] = useState(null); // Audio file
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData to send image, audio, and text data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("thumbnail", thumbnail); // Thumbnail image file
    formData.append("podcast", audio); // Audio file
    formData.append("shortDescription", shortDescription);
    formData.append("longDescription", longDescription);

    try {
      // Send formData to server
      // await createPodcast(formData).unwrap();
      // navigate("/admin/podcasts");
    } catch (error) {
      console.error("Failed to add podcast:", error);
    }
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const isLoading = false;

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

          {/* Title */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              placeholder="Podcast Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Thumbnail Upload */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Thumbnail
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setThumbnail(e.target.files[0])} // Handle file input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Audio File Upload */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Podcast Audio
            </label>
            <input
              type="file"
              accept="audio/*"
              onChange={(e) => setAudio(e.target.files[0])} // Handle audio file input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          {/* Short Description */}
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

          {/* Long Description with Rich Text Editor */}
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

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              disabled={isLoading}
            >
              {isLoading ? "Adding..." : "Add Podcast"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPodcast;
