import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/private/DashboardPage";
import HomePage from "../pages/private/HomePage";
import SideBar from "../components/SideBar";
import UsersIndex from "../pages/private/Users/index";
import CareersIndex from "../pages/private/Careers/index";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoutes = () => {
  const {role} = useAuth();
  return (
    <Router>
      <div className="flex flex-row h-screen bg-slate-700">
        <SideBar />
        <div className="w-full h-full flex items-center justify-center">
          <Routes>
            <Route path="/" element={role==="admin"?<DashboardPage/>:<HomePage />} />
            <Route path="/users" element={<UsersIndex />} />
            <Route path="/careers" element={<CareersIndex />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default PrivateRoutes;
