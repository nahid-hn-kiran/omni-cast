import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import { useGetUserProfileQuery } from "../../redux/features/auth/authSlice";
import Loading from "../../Shared/Loading/Loading";
import { showPopup } from "../../Shared/ShowPopup/ShowPopup";

const Root = () => {
  const token = localStorage.getItem("token");
  const {
    data: userData,
    isLoading,
    error,
  } = useGetUserProfileQuery(undefined, {
    skip: !token,
  });
  if (isLoading) return <Loading />;
  if (error) {
    showPopup({
      title: "Error!",
      text: "Something wrong!",
      icon: "error",
    });
  }
  return (
    <>
      <Header user={userData} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
