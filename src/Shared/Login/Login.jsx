import { Link, useNavigate } from "react-router-dom";
import {
  useGetUserProfileQuery,
  useLoginUserMutation,
} from "../../redux/features/auth/authSlice";
import Loading from "../Loading/Loading";
import { useEffect } from "react";

const Login = () => {
  const [loginUser, { data, isLoading, error, isSuccess }] =
    useLoginUserMutation();
  const { data: userData, isLoading: userLoading } = useGetUserProfileQuery();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { email, password };
    const response = await loginUser(user);
    localStorage.setItem("token", response.data.token);
  };

  useEffect(() => {
    if (isSuccess) {
      window.location.reload();
    }
  }, [isSuccess]);

  const navigate = useNavigate();

  useEffect(() => {
    if (userData?.data?.email) {
      navigate("/");
    }
  }, [userData, navigate]);

  if (isLoading || userLoading) return <Loading />;
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-gradient-pink p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
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
              type="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <p>{error && error?.data?.error}</p>
          <p>{data?.error && data.error}</p>
          <button
            type="submit"
            className="w-full bg-omni-yellow text-white py-2 rounded-md hover:bg-omni-pink transition-color"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Dont have an account?{" "}
          <Link to="/register" className="text-red-500 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
