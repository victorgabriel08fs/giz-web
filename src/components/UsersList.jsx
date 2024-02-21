 

import { Button, Card } from "flowbite-react";
import logo from "../assets/logo512.png";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { HiTrash, HiEye, HiPencil } from "react-icons/hi";

function UsersList({ users }) {
  return (
    <Card className="w-full h-full">
      <div className="flex items-center justify-between"></div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700 overflow-y-auto pr-4 max-h-96">
          {users.map((user) => (
            <li className="sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="shrink-0">
                  <img src={logo} className="h-10 rounded-full" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                    {user?.name ?? "Não informado"}
                  </p>
                  <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                    {user?.email ?? "Não informado"}
                  </p>
                </div>
                <div className="min-w-0 flex-1">
                  {user?.bonds.length > 0 ? (
                    user?.bonds.map((item) => (
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        {item.name}
                      </p>
                    ))
                  ) : (
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                      Não informado
                    </p>
                  )}
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
      </div>
    </Card>
  );
}

export default UsersList;
