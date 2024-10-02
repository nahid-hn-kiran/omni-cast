// import { useGetAllUsersQuery, useDeleteUserMutation } from '../../features/userSlice';
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from "../../../redux/features/auth/authSlice";
import Loading from "../../../Shared/Loading/Loading";
import Error from "../../../Shared/Error/Error";
import UserRow from "./UserRow";
import { showPopup } from "../../../Shared/ShowPopup/ShowPopup";

const ManageUser = () => {
  const { data: users, error, isLoading } = useGetAllUsersQuery();
  const [deleteUser, { isLoading: loading1, isError: error1 }] =
    useDeleteUserMutation();
  const handleDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete this user? ${id}`)) {
      deleteUser(id);
      showPopup({
        title: "Success!",
        text: "User deleted successfully!",
        icon: "success",
      });
    } else {
      showPopup({
        title: "Failed!",
        text: "Couldn't delete the user!",
        icon: "error",
      });
    }
  };

  if (isLoading || loading1) return <Loading />;
  if (error || error1) return <Error />;

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Manage Users</h1>
      </div>
      <table className="min-w-full bg-white shadow-md rounded my-6">
        <thead>
          <tr className="w-full text-left bg-gray-800 text-white">
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Role</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.data?.map((user) => (
            <UserRow key={user._id} user={user} handleDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
