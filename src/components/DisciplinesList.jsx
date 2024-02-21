 

import { Button } from "flowbite-react";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { HiTrash, HiEye, HiPencil } from "react-icons/hi";

function DisciplinesList({ disciplines }) {

  const total = (exercises) => {
    var total = 0;
    exercises.map((item) => {
      total = parseFloat(total) + parseFloat(item.points);
    });
    return total;
  };
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto w-full pr-4 max-h-96">
      {disciplines.map((discipline) => (
        <li className="sm:py-2 hover:bg-slate-100 w-full">
          <div className="flex items-center p-6">
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-gray-900 dark:text-white">
                {discipline?.name ?? "Não informado"}
              </p>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                {discipline?.exercises.length ?? "Não informado"}
              </p>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                {`${total(discipline?.exercises)}/100` ?? "Não informado"}
              </p>
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                {discipline?.registrations.length ?? "Não informado"}
              </p>
            </div>
            <div className="min-w-0 flex-1">
              <Button.Group>
                <Button color="gray" className="hover:text-black">
                  <HiEye size={18} />
                </Button>
                <Button color="gray" className="hover:text-black">
                  <HiPencil size={18} />
                </Button>
                <Button color="gray" className="hover:text-black">
                  {<HiTrash size={18} /> ?? <FaTrashRestoreAlt size={18} />}
                </Button>
              </Button.Group>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default DisciplinesList;
