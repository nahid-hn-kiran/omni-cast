import PropTypes from "prop-types";
import NotFound from "../../Pages/NotFound/NotFound";
import Loading from "../../Shared/Loading/Loading";
import { useGetUserProfileQuery } from "../../redux/features/auth/authSlice";

const PrivateRoute = ({ children }) => {
  const { data: userData, isLoading: userLoading } = useGetUserProfileQuery();
  if (userLoading) return <Loading />;
  if (userData?.data?.role === "super-admin") {
    return children;
  } else {
    return <NotFound />;
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
