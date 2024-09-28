import Sidebar from "./sidebar";

const Dashboard = () => {
  return (
    <div className="container">
      <div className="dashboard flex">
        <>
          <Sidebar />
        </>
        <div className="p-6">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p>
            Welcome to the admin panel. From here, you can manage podcasts,
            blogs, and more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
