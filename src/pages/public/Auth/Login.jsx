import React, { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import PublicLayout from "../../../layouts/PublicLayout";
import LoginCard from "../../../components/LoginCard";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [remember, setRemeber] = useState("");

  const handleSubmit = async () => {
    await login({ email, password, role });
  };

  return (
    <PublicLayout title="Entrar">
      <LoginCard
        handleSubmit={() => {
          handleSubmit();
        }}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        role={role}
        setRole={setRole}
        remember={remember}
        setRemeber={setRemeber}
      />
    </PublicLayout>
  );
};

export default Login;
