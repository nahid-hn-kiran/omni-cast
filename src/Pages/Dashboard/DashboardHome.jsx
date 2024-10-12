const DashboardHome = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
      <div className="text-center p-10 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-500 ease-in-out">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
          Welcome to the Dashboard
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Manage your content and settings here with ease!
        </p>
      </div>
    </div>
  );
};

export default DashboardHome;
