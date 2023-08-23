import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="mb-4">Bienvenue sur O'Invest</p>

      <NavLink
        to="/dashboard"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
      >
        Home
      </NavLink>
    </div>
  );
};

export default Dashboard;
