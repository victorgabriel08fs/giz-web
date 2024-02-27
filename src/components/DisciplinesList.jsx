import { Button, Table } from "flowbite-react";
import { HiUserGroup } from "react-icons/hi";
import LoadingComponent from "./LoadingComponent";
import ExercisesModal from "./ExercisesModal";
import { useState } from "react";
import DisciplineStudentsModal from "./DisciplineStudentsModal";
import { Link } from "react-router-dom";

function DisciplinesList({ disciplines, loading, bond }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedExercises, setSelectedExercises] = useState(null);
  const [openModalStudents, setOpenModalStudents] = useState(false);
  const [selectedRegistrations, setSelectedRegistrations] = useState(null);
  const total = (exercises) => {
    var total = 0;
    exercises.map((item) => {
      total = parseFloat(total) + parseFloat(item.points);
    });
    return total;
  };
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="overflow-x-auto">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Disciplina</Table.HeadCell>
              <Table.HeadCell>Matriculados</Table.HeadCell>
              <Table.HeadCell>Nota lançada</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {disciplines.map((discipline) => (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {discipline.name}
                  </Table.Cell>
                  <Table.Cell
                    className="cursor-pointer"
                    onClick={() => {
                      setSelectedRegistrations(discipline.registrations);
                      setOpenModalStudents(true);
                    }}
                  >
                    {discipline.registrations.length}
                  </Table.Cell>
                  <Table.Cell
                    className="cursor-pointer"
                    onClick={() => {
                      setSelectedExercises(discipline.exercises);
                      setOpenModal(true);
                    }}
                  >
                    {total(discipline.exercises)}
                  </Table.Cell>
                  <Table.Cell className="flex flex-row gap-3 items-center justify-center">
                    <Link to={`lessons/${discipline.id}`}>
                      <Button color="gray" title="Aulas">
                        <HiUserGroup className="h-4 w-3" />
                      </Button>
                    </Link>
                    <Button color="gray">
                      <HiUserGroup className="h-4 w-3" />
                    </Button>
                    <Button color="gray">
                      <HiUserGroup className="h-4 w-3" />
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      )}
      {selectedExercises !== null && (
        <ExercisesModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          exercises={selectedExercises}
        />
      )}
      {selectedRegistrations !== null && (
        <DisciplineStudentsModal
          openModal={openModalStudents}
          setOpenModal={setOpenModalStudents}
          registrations={selectedRegistrations}
        />
      )}
    </>
  );
}

export default DisciplinesList;
