import { useGetUserProfileQuery } from "../../redux/features/auth/authSlice";
import Error from "../../Shared/Error/Error";
import Loading from "../../Shared/Loading/Loading";

const UserProfile = () => {
  const {
    data: userData,
    isLoading: userLoading,
    error,
  } = useGetUserProfileQuery();
  if (userLoading) return <Loading />;
  if (error) return <Error />;
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4 text-center">My Profile</h1>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData?.data?.name}
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
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block text-gray-700">
            Role
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData?.data?.role}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imgURL" className="block text-gray-700">
            Profile Picture
          </label>
          <p className="mt-2 text-sm text-gray-500">
            <img
              src={userData?.data?.imgURL}
              alt="Profile Picture"
              className="w-28"
            />
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-omni-yellow text-white py-2 rounded-md hover:bg-omni-pink transition-colors cursor-not-allowed"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default UserProfile;
