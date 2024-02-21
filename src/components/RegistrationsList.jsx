import { useState } from "react";
import RegistrationExercisesModal from "./RegistrationExercisesModal";

function RegistrationsList({ registrations, bond }) {
  const [openModal, setOpenModal] = useState(false);
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
    <ul className="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto w-full pr-4 max-h-96">
      {registrations.map((registration) => (
        <>
          <li
            className={`font-bold sm:py-2 ${
              registration.status !== "PENDING" &&
              registration.status !== "IN_COURSE" &&
              `${resultLiBg(registration.points)} ${resultLiText(
                registration.points
              )}`
            }  w-full`}
          >
            <div className="grid grid-cols-9 gap-4 p-6">
              <div className="col-span-3 flex justify-start">
                <p
                  className="truncate text-xs font-medium "
                  title={
                    `${registration?.discipline?.name} ${
                      registration?.discipline?.career?.id !== bond?.career?.id
                        ? ` (${registration?.discipline?.career?.name})`
                        : ""
                    }` ?? "Não informado"
                  }
                >
                  {`${registration?.discipline?.name} ${
                    registration?.discipline?.career?.id !== bond?.career?.id
                      ? ` (${registration?.discipline?.career?.name})`
                      : ""
                  }` ?? "Não informado"}
                </p>
              </div>
              <div className="col-span-2 flex justify-start">
                <p
                  className="truncate text-xs "
                  title={
                    registration?.discipline?.teacher?.name ?? "Não informado"
                  }
                >
                  {registration?.discipline?.teacher?.name ?? "Não informado"}
                </p>
              </div>
              <div className="flex justify-start">
                <p
                  className="truncate text-xs cursor-pointer"
                  title={registration.points ?? "Não informado"}
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  {registration.points ?? "Não informado"}
                </p>
              </div>
              <div className="flex justify-start">
                <p
                  className="truncate text-xs "
                  title={registration?.absences ?? "Não informado"}
                >
                  {registration?.absences ?? "Não informado"}
                </p>
              </div>
              <div className="col-span-2 flex justify-start">
                <p
                  className="truncate text-xs "
                  title={translateStatus(registration.status)}
                >
                  {translateStatus(registration.status)}
                </p>
              </div>
            </div>
          </li>
          <RegistrationExercisesModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            regExercises={registration.exercises}
          />
        </>
      ))}
    </ul>
  );
}

export default RegistrationsList;
