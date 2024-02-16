import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  useEffect(() => {
    async function me(token) {
      setLoading(true);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await api.get("me");
      setUser(response.data);
      setLoading(false);
    }

    const token = localStorage.getItem("giz@token");
    if (token!=="null") {
      // lógica para verificar a validade do token JWT e obter informações do usuário
      // por exemplo, enviar uma solicitação ao backend para validar o token
      // e definir o estado do usuário com as informações obtidas
      me(token); // obter informações do usuário a partir do token JWT
    }
  }, []);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (userData) => {
    try {
      setLoading(true);
      const response = await api.post("login", userData);
      setUser(response.data.user);
      localStorage.setItem("giz@token", response.data.access_token);
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.access_token}`;
      setLoading(false);
      
      // Armazenar o token JWT no armazenamento local
      // Redirecionar o usuário para a próxima página
      // Você pode fazer isso usando react-router-dom ou redirecionando manualmente
      // Exemplo: history.push('/dashboard');
    } catch (error) {
      console.error("Erro ao efetuar login:", error);
    }
  };
  
  const logout = () => {
    // lógica para fazer logout (por exemplo, limpar o token JWT do armazenamento local)
    setUser(null);
    localStorage.setItem("giz@token", null);
    toast("Logout realizado.");
  };

  return (
    <AuthContext.Provider
      value={{ loading, auth: user ? true : false, user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
