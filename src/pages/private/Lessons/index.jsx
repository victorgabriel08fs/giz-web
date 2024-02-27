import { useEffect, useState } from "react";
import UsersLessonList from "../../../components/UsersLessonList";
import PrivateLayout from "../../../layouts/PrivateLayout";
import { api } from "../../../services/api";
import { useParams } from "react-router-dom";

export default function Lessons() {
  const { id } = useParams();
  const [presence, setPresence] = useState(null);

  const [registrations, setRegistrations] = useState([]);
  const [lessons, setLessons] = useState([]);
  useEffect(() => {
    loadData();
  }, [presence]);
  const loadData = async () => {
    await api.get(`disciplines/lessons/${id}`).then((res) => {
      var data = res.data;
      setRegistrations(data.registrations);
      setLessons(data.lessons);
    });
  };

  return (
    <PrivateLayout title="Usuários">
      <div className="w-full h-full">
        <UsersLessonList
          setPresence={setPresence}
          lessons={lessons}
          registrations={registrations}
        />
      </div>
    </PrivateLayout>
  );
}
