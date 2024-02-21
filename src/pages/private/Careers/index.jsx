import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import PrivateLayout from "../../../layouts/PrivateLayout";
import CareersList from "../../../components/CareersList";
import { Card } from "flowbite-react";

export default function Index() {
  const [careers, setCareers] = useState([]);
  useEffect(() => {
    loadData();
  }, [careers]);
  const loadData = async () => {
    await api.get("careers").then((res) => {
      var data = res.data;
      setCareers(data);
    });
  };
  return (
    <PrivateLayout title="Usuários">
      <Card className="w-full h-full">
        <div className="flow-root w-full">
          <CareersList careers={careers} />
        </div>
      </Card>
    </PrivateLayout>
  );
}
