import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import PrivateLayout from "../../../layouts/PrivateLayout";
import UsersList from "../../../components/UsersList";

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
    <PrivateLayout title="Usuários">
      <div className="w-full h-full">
        <UsersList users={users}/>
      </div>
    </PrivateLayout>
  );
}
