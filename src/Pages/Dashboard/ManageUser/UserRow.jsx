import PropTypes, { string } from "prop-types";
import { Link } from "react-router-dom";

const UserRow = ({ user, handleDelete }) => {
  const { name, email, role, status, _id } = user;
  return (
    <>
      <tr className="border-t-2">
        <td className="py-2 px-4">{name}</td>
        <td className="py-2 px-4">{email}</td>
        <td className="py-2 px-4">{role}</td>
        <td className="py-2 px-4">{status}</td>
        <td className="py-2 px-4">
          <button
            onClick={() => handleDelete(_id)}
            className="text-red-500 hover:text-red-700 mr-2"
          >
            Delete
          </button>
          <Link
            to={`${_id}`}
            className="text-green-500 hover:text-green-700 mr-2"
          >
            Edit
          </Link>
        </td>
      </tr>
    </>
  );
};

UserRow.propTypes = {
  handleDelete: PropTypes.func,
  user: PropTypes.shape({
    name: string,
    email: string,
    role: string,
    status: string,
    _id: string,
  }),
};

export default UserRow;
