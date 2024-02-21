import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    async function me(token) {
      try {
        setLoading(true);
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await api.get("me", {
          params: { role: localStorage.getItem("giz@role") },
        });
        setUser(response.data.user);
        setRole(response.data.role);
      } catch (error) {
        console.error("Erro ao efetuar login:", error);
        toast("Erro ao efetuar login:", error);
        localStorage.setItem("giz@token", null);
      }
      setLoading(false);
    }

    const token = localStorage.getItem("giz@token");
    if (token !== "null") {
      // lógica para verificar a validade do token JWT e obter informações do usuário
      // por exemplo, enviar uma solicitação ao backend para validar o token
      // e definir o estado do usuário com as informações obtidas
      me(token); // obter informações do usuário a partir do token JWT
    }
  }, []);

  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (userData) => {
    try {
      setLoading(true);
      const response = await api.post("login", userData);
      setUser(response.data.user);
      setRole(response.data.role);
      localStorage.setItem("giz@role", response.data.role);
      localStorage.setItem("giz@token", response.data.access_token);
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.access_token}`;

      // Armazenar o token JWT no armazenamento local
      // Redirecionar o usuário para a próxima página
      // Você pode fazer isso usando react-router-dom ou redirecionando manualmente
      // Exemplo: history.push('/dashboard');
    } catch (error) {
      console.error("Erro ao efetuar login:", error);
      localStorage.setItem("giz@token", null);
      toast("Erro ao efetuar login");
    }
    setLoading(false);
  };

  const logout = () => {
    // lógica para fazer logout (por exemplo, limpar o token JWT do armazenamento local)
    setUser(null);
    setRole(null);
    localStorage.setItem("giz@role", null);
    localStorage.setItem("giz@token", null);
    toast("Logout realizado");
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        auth: user ? true : false,
        user,
        role,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
