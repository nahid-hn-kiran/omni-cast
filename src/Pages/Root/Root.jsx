import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
