import { useState } from "react";
import {
  useGetUserProfileQuery,
  useUpdateProfileMutation,
} from "../../redux/features/auth/authSlice";
import Error from "../../Shared/Error/Error";
import Loading from "../../Shared/Loading/Loading";
import { showPopup } from "../../Shared/ShowPopup/ShowPopup";
import {
  cloudinary_upload_preset,
  cloudinary_url,
} from "../../utility/utility";

const UserProfile = () => {
  const {
    data: userData,
    isLoading: userLoading,
    error,
  } = useGetUserProfileQuery();
  const [updateUser, { isLoading: updateLoading, updateError }] =
    useUpdateProfileMutation();

  const id = userData?.data?._id;

  const [profileImgFile, setProfileImgFile] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    imgURL: null,
  });

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
      imgURL: updatedProfileImglUrl,
    };
    if (window.confirm(`Are you sure you want to update user ${id} ?`)) {
      const result = await updateUser({ id, updatedUser });
      showPopup({
        title: "Success",
        text: result?.data?.message,
        icon: "success",
      });
      window.location.reload();
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

  if (userLoading || updateLoading) return <Loading />;
  if (error) return <Error />;
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">My Profile</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData?.data?.name}
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
            value={userData?.data.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block text-gray-700">
            Role: {userData?.data?.role}
          </label>
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
          <p className="mt-2 text-sm text-gray-500">
            <img
              src={userData?.data?.imgURL}
              onChange={(e) => setProfileImgFile(e.target.files[0])}
              alt="Profile Picture"
              className="w-28"
            />
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-omni-yellow text-white py-2 rounded-md hover:bg-omni-pink transition-colors"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
