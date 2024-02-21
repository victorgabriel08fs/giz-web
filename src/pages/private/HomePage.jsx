import { useEffect, useState } from "react";
import { api } from "../../services/api";
import PrivateLayout from "../../layouts/PrivateLayout";
import RegistrationsList from "../../components/RegistrationsList";
import { Card, Select } from "flowbite-react";
import { useAuth } from "../../contexts/AuthContext";
import StudentHome from "../../components/StudentHome";
import TeacherHome from "../../components/TeacherHome";

export default function Index() {
  const { user, role } = useAuth();

  return (
    <PrivateLayout title="Home">
      <Card className="w-full h-full">
        {role === "student" ? (
          <StudentHome user={user} role={role} />
        ) : (
          <TeacherHome user={user} role={role} />
        )}
      </Card>
    </PrivateLayout>
  );
}
