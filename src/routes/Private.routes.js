import { Routes, Route } from "react-router-dom";
import SideBar from "../components/SideBar";
import DashboardPage from "../pages/private/DashboardPage";
import { useAuth } from "../contexts/AuthContext";
import Lessons from "../pages/private/Lessons";
import CareersIndex from "../pages/private/Careers/index";
import UsersIndex from "../pages/private/Users/index";
import HomePage from "../pages/private/HomePage";

export default function Private() {
  const { role } = useAuth();

  return (
    <div className="flex flex-row h-screen bg-slate-700">
      <SideBar />
      <div className="w-full h-full flex items-center justify-center">
        <Routes>
          {role === "admin" && (
            <>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/careers" element={<CareersIndex />} />
              <Route path="/users" element={<UsersIndex />} />
            </>
          )}
          {role === "student" && <Route path="/" element={<HomePage />} />}
          {role === "teacher" && (
            <>
              <Route path="/" element={<HomePage />} />
              <Route path="/lessons/:id" element={<Lessons />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  );
}
