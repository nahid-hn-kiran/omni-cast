import { Link, useNavigate } from "react-router-dom";
import {
  useGetUserProfileQuery,
  useRegisterUserMutation,
} from "../../redux/features/auth/authSlice";
import Loading from "../Loading/Loading";
import { showPopup } from "../ShowPopup/ShowPopup";
import { useEffect } from "react";

const Register = () => {
  const [registerUser, { isLoading, error, isSuccess }] =
    useRegisterUserMutation();
  const { data: userData, isLoading: userLoading } = useGetUserProfileQuery();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const user = { name, email, password, confirmPassword };
    await registerUser(user).unwrap();
    e.target.reset();
    showPopup({
      title: "Success!",
      text: "Successfully Registered!",
      icon: "success",
    });
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    if (userData?.data?.email) {
      navigate("/");
    }
  }, [userData, navigate]);

  if (isLoading || userLoading) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-gradient-pink p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="name"
              name="name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <p>{error && error?.data?.error}</p>
          <button
            type="submit"
            className="w-full bg-omni-yellow text-white py-2 rounded-md hover:bg-omni-pink transition-colors"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
