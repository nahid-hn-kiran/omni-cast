import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { useAddNewBlogMutation } from "../../../redux/features/blog/blogSlice";
import Loading from "../../../Shared/Loading/Loading";
import Error from "../../../Shared/Error/Error";
import { showPopup } from "../../../Shared/ShowPopup/ShowPopup";

const AddBlog = () => {
  const [description, setDescription] = useState("");
  const [addNewBlog, { isLoading, error }] = useAddNewBlogMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    // const thumbnail = e.target.thumbnail.files[0];
    const formData = {
      title,
      description,
      thumbnail: "https://i.ibb.co.com/tszFjVW/single-blog.png",
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

  if (error) {
    showPopup({
      title: "Success!",
      text: error?.data?.error,
      icon: "error",
    });
  }

  if (isLoading) return <Loading />;
  if (error) return <Error />;

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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
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
