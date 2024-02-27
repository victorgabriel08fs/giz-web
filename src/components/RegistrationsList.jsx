import { useState } from "react";
import RegistrationExercisesModal from "./RegistrationExercisesModal";
import { Table } from "flowbite-react";
import LoadingComponent from "./LoadingComponent";

function RegistrationsList({ loading, registrations, bond }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRegExercises, setSelectedRegExercises] = useState(null);
  const resultLiBg = (points) => {
    var res;
    if (points >= 70) {
      res = "bg-green-500";
    } else if (points >= 50) {
      res = "bg-yellow-400";
    } else {
      res = "bg-red-500";
    }

    return res;
  };
  const resultLiText = (points) => {
    var res;
    if (points >= 70) {
      res = "text-black";
    } else if (points >= 50) {
      res = "text-white";
    } else {
      res = "text-black";
    }

    return res;
  };
  const translateStatus = (status) => {
    var res;
    switch (status) {
      case "APPROVED":
        res = "Aprovado";
        break;
      case "RECUPERATION":
        res = "Prova Final";
        break;
      case "PENDING":
        res = "Pendente";
        break;
      case "IN_COURSE":
        res = "Cursando";
        break;
      case "ABSENCES_REPROVED":
        res = "Reprovado por falta";
        break;
      case "POINTS_REPROVED":
        res = "Reprovado por nota";
        break;
      default:
        res = "Não informado";
    }

    return res;
  };

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <Table>
            <Table.Head>
              <Table.HeadCell>Disciplina</Table.HeadCell>
              <Table.HeadCell>Professor</Table.HeadCell>
              <Table.HeadCell>Faltas</Table.HeadCell>
              <Table.HeadCell>Nota</Table.HeadCell>
              <Table.HeadCell>Situação</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {registrations.map((registration) => (
                <Table.Row
                  className={`bg-white dark:border-gray-700 dark:bg-gray-800 ${`font-bold sm:py-2 ${
                    registration.status !== "PENDING" &&
                    registration.status !== "IN_COURSE" &&
                    `${resultLiBg(registration.points)} ${resultLiText(
                      registration.points
                    )}`
                  }  w-full`}`}
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {registration.discipline.name}
                  </Table.Cell>
                  <Table.Cell>
                    {registration.discipline.teacher.name}
                  </Table.Cell>
                  <Table.Cell>{registration.absences}</Table.Cell>
                  <Table.Cell
                    className="cursor-pointer"
                    onClick={() => {
                      setSelectedRegExercises(registration.exercises);
                      setOpenModal(true);
                    }}
                  >
                    {registration.points}
                  </Table.Cell>
                  <Table.Cell>
                    {translateStatus(registration.status)}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          {selectedRegExercises !== null && (
            <RegistrationExercisesModal
              openModal={openModal}
              setOpenModal={setOpenModal}
              regExercises={selectedRegExercises}
            />
          )}
        </>
      )}
    </>
  );
}

export default RegistrationsList;
