import { useEffect, useState } from "react";
import { api } from "../../../services/api";

export default function Index() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadData();
  }, [users]);
  const loadData = async () => {
    await api.get("users").then((res) => {
      var data = res.data;
      setUsers(data);
    });
  };
  return (
    <div>
      <h1>Usuários ({users.length})</h1>
      {users.length === 0
        ? "Nenhum usuário encontrado"
        : users.map((user) => <span>{user.name}</span>)}
    </div>
  );
}
