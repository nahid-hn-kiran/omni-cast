import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "../../../redux/features/auth/authSlice";
import { showPopup } from "../../../Shared/ShowPopup/ShowPopup";
import Loading from "../../../Shared/Loading/Loading";
import Error from "../../../Shared/Error/Error";
import {
  cloudinary_upload_preset,
  cloudinary_url,
} from "../../../utility/utility";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: user, isLoading, error } = useGetSingleUserQuery(id);
  const [updateUser, { isLoading: updateLoading, updateError }] =
    useUpdateUserMutation();

  const [profileImgFile, setProfileImgFile] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    imgURL: null,
  });

  useEffect(() => {
    if (user?.data) {
      setFormData({
        name: user?.data?.name,
        email: user?.data?.email,
        role: user?.data?.role,
        imgURL: user?.data?.imgURL,
      });
    }
  }, [user]);

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
    const updatedProfileImglUrl = profileImgFile
      ? await handleFileUpload(profileImgFile)
      : formData.imgURL;
    const updatedUser = {
      name: formData.name,
      email: formData.email,
      role: formData.role,
      imgURL: updatedProfileImglUrl,
    };
    if (window.confirm(`Are you sure you want to update user ${id} ?`)) {
      const result = await updateUser({ id, updatedUser });
      showPopup({
        title: "Success",
        text: result?.data?.message,
        icon: "success",
      });
    } else {
      showPopup({
        title: "Error",
        text: updateError?.data?.message,
        icon: "error",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const goBack = () => {
    navigate(-1);
  };

  if (isLoading || updateLoading) return <Loading />;
  if (error || updateError) return <Error />;

  return (
    <div>
      <button onClick={() => goBack()} className="primary-btn mb-4">
        Go Back
      </button>

      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold mb-4 text-center">Update User</h1>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700">
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="imgURL" className="block text-gray-700">
              Profile Picture
            </label>
            <input
              type="file"
              id="imgURL"
              name="imgURL"
              accept="image/*"
              onChange={(e) => setProfileImgFile(e.target.files[0])}
              className="mt-1 p-2 w-full border rounded-md"
            />
            {profileImgFile ? (
              <p className="mt-2 text-sm text-green-500">New file selected</p>
            ) : (
              <p className="mt-2 text-sm text-gray-500">
                Current URL: {formData?.imgURL}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-omni-yellow text-white py-2 rounded-md hover:bg-omni-pink transition-colors"
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
