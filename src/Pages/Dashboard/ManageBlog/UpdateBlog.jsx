import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
} from "../../../redux/features/blog/blogSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Loading from "../../../Shared/Loading/Loading";
import { showPopup } from "../../../Shared/ShowPopup/ShowPopup";
import {
  cloudinary_upload_preset,
  cloudinary_url,
} from "../../../utility/utility";

const UpdateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: blog, isLoading, error } = useGetSingleBlogQuery(id);
  const [updateBlog, { isLoading: updateLoading, error: updateError }] =
    useUpdateBlogMutation();

  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState(null);

  useEffect(() => {
    if (blog) {
      setTitle(blog?.data.title);
      setThumbnail(blog?.data.thumbnail);
      setDescription(blog?.data.description);
    }
  }, [blog]);

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
    const updatedThumbnailUrl = thumbnailFile
      ? await handleFileUpload(thumbnailFile)
      : thumbnail;

    const updatedBlog = {
      title,
      thumbnail: updatedThumbnailUrl,
      description,
    };

    if (confirm(`Are you sure you want to update the blog ${id}`)) {
      const result = await updateBlog({ id, updatedBlog });
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
          <h2 className="text-2xl font-bold mb-4">Update Blog</h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              placeholder="Blog Title"
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
              type="file"
              placeholder="Thumbnail URL"
              accept="image/*"
              onChange={(e) => setThumbnailFile(e.target.files[0])}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
            {thumbnailFile ? (
              <p className="mt-2 text-sm text-green-500">New file selected</p>
            ) : (
              <p className="mt-2 text-sm text-gray-500">
                <img src={thumbnail} alt={title} className="w-48" />
              </p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <ReactQuill
              value={description}
              onChange={setDescription}
              className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline info-btn"
            >
              Update Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
