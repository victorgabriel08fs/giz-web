import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/private/DashboardPage";
import SideBar from "../components/SideBar";
import UsersIndex from "../pages/private/Users/index";

const PrivateRoutes = () => {
  return (
    <Router>
      <div className="flex flex-row h-screen bg-slate-700">
        <SideBar />
        <div className="w-full h-full flex items-center justify-center">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/users" element={<UsersIndex />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default PrivateRoutes;
