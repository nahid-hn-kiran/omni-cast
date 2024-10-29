import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { useAddNewBlogMutation } from "../../../redux/features/blog/blogSlice";
import Loading from "../../../Shared/Loading/Loading";
import { showPopup } from "../../../Shared/ShowPopup/ShowPopup";
import {
  cloudinary_upload_preset,
  cloudinary_url,
} from "../../../utility/utility";

const AddBlog = () => {
  const [description, setDescription] = useState("");
  const [addNewBlog, { isLoading, error }] = useAddNewBlogMutation();

  const [thumbnailFile, setThumbnailFile] = useState(null);

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", cloudinary_upload_preset);

    const response = await fetch(cloudinary_url, {
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
    const title = e.target.title.value;
    const formData = {
      title,
      description,
      thumbnail: thumbnailUrl,
    };
    const result = await addNewBlog(formData).unwrap();
    setDescription("");
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

  if (isLoading) return <Loading />;
  if (error)
    return showPopup({
      title: "Error!",
      text: error?.data?.error,
      icon: "error",
    });

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
          <h2 className="text-2xl font-bold mb-4">Add New Blog</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Blog Title"
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
              name="thumbnail"
              onChange={(e) => setThumbnailFile(e.target.files[0])}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            {thumbnailFile ? (
              <p className="mt-2 text-sm text-green-500">New file selected</p>
            ) : null}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <ReactQuill
              theme="snow"
              value={description}
              onChange={setDescription}
              className="bg-white shadow-md rounded w-full h-full"
              placeholder="Write your blog description here..."
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline info-btn"
              disabled={isLoading}
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
