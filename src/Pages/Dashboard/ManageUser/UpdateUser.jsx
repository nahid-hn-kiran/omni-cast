import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "../../../redux/features/auth/authSlice";
import { showPopup } from "../../../Shared/ShowPopup/ShowPopup";
import Loading from "../../../Shared/Loading/Loading";
import Error from "../../../Shared/Error/Error";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: user, isLoading, isError } = useGetSingleUserQuery(id);
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

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
        imgURL: null,
      });
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser({ id, updatedUser: formData });
      showPopup({
        title: "Success",
        text: "User updated successfully!",
        icon: "success",
      });
      navigate("/admin/dashboard/manage-users");
    } catch (error) {
      showPopup({
        title: "Error",
        text: error?.message,
        icon: "error",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, imgURL: e.target.files[0] });
  };

  if (isLoading || isUpdating) return <Loading />;
  if (isError) return <Error />;

  return (
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
            onChange={handleFileChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-omni-yellow text-white py-2 rounded-md hover:bg-omni-pink transition-colors"
        >
          {isUpdating ? "Updating..." : "Update User"}
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
