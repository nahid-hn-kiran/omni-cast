import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="dashboard flex">
        <>
          <Sidebar />
        </>
        <div className="p-6 flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
