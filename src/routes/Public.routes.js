import { Routes, Route } from "react-router-dom";
import Login from "../pages/public/Auth/Login";

export default function Public() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Login />} />
    </Routes>
  );
}
