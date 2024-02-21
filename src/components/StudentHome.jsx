import { Select } from "flowbite-react";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import RegistrationsList from "./RegistrationsList";

export default function StudentHome({ user,role }) {
  const [registrations, setRegistrations] = useState([]);
  const [semesters, setSemesters] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [bonds, setBonds] = useState([]);
  const [selectedBond, setSelectedBond] = useState(null);
  useEffect(() => {
    if (bonds.length === 0) {
      loadBonds();
    }
    if (semesters.length === 0 && selectedBond?.id > 0) {
      loadSemesters();
    }
    if (selectedSemester?.id > 0) {
      loadData();
    }
  }, [selectedSemester, selectedBond]);

  const loadData = async () => {
    await api
      .get("registrations", {
        params: { user_id: user.id, semester_id: selectedSemester.id },
      })
      .then((res) => {
        var data = res.data;
        setRegistrations(data);
      });
  };
  const loadSemesters = async () => {
    await api
      .get("semesters", {
        params: { user_id: user.id, bond_id: selectedBond.id },
      })
      .then((res) => {
        var data = res.data;
        setSemesters(data);
        setSelectedSemester(data[0]);
      });
  };
  const loadBonds = async () => {
    await api
      .get("bonds", {
        params: { user_id: user.id, type: role },
      })
      .then((res) => {
        var data = res.data;
        setBonds(data);
        setSelectedBond(data[0]);
      });
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <p>Olá, {user.name}</p>
        <div className="flex flex-row gap-2 w-2/3">
          <Select
            name="bond"
            id=""
            className="w-2/3"
            onChange={(e) => {
              setSelectedBond(
                bonds.filter((item) => {
                  return parseInt(item.id) === parseInt(e.target.value) && item;
                })[0]
              );
            }}
          >
            {bonds.map((bond) => (
              <option selected={bond.id === bonds[0].id} value={bond.id}>
                {bond.career.name}
              </option>
            ))}
          </Select>
          {selectedBond && (
            <Select
              name="semester"
              id=""
              className="w-1/3"
              onChange={(e) => {
                setSelectedSemester(
                  semesters.filter((item) => {
                    return (
                      parseInt(item.id) === parseInt(e.target.value) && item
                    );
                  })[0]
                );
              }}
            >
              {semesters.map((semester) => (
                <option
                  selected={semester.id === semesters[0].id}
                  value={semester.id}
                >
                  {`${semester.reference.substring(
                    4
                  )}/${semester.reference.substring(0, 4)}`}
                </option>
              ))}
            </Select>
          )}
        </div>
      </div>
      <div className="flow-root w-full">
        <RegistrationsList registrations={registrations} bond={selectedBond} />
      </div>
    </>
  );
}
