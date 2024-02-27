import { Select } from "flowbite-react";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import RegistrationsList from "./RegistrationsList";
import RegistrationsSchedules from "./RegistrationsSchedules";

export default function StudentHome({ user, role }) {
  const [loading, setLoading] = useState(true);
  const [contentShow, setContentShow] = useState("points");
  const [registrations, setRegistrations] = useState([]);
  const [semesters, setSemesters] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [bonds, setBonds] = useState([]);
  const [selectedBond, setSelectedBond] = useState(null);
  useEffect(() => {
    loadBonds();
  }, []);
  useEffect(() => {
    if (selectedSemester !== null) {
      loadData();
    }
  }, [selectedSemester]);
  useEffect(() => {
    if (selectedBond !== null) {
      loadSemesters();
    }
  }, [selectedBond]);

  const loadData = async () => {
    setLoading(true);
    await api
      .get("registrations", {
        params: {
          user_id: user.id,
          bond_id: selectedBond.id,
          semester_id: selectedSemester.id,
        },
      })
      .then((res) => {
        var data = res.data;
        setRegistrations(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const loadSemesters = async () => {
    setLoading(true);
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
    setLoading(true);
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
            className="w-3/5"
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
          <Select
            name="semester"
            id=""
            className="w-1/3"
            onChange={(e) => {
              setSelectedSemester(
                semesters.filter((item) => {
                  return parseInt(item.id) === parseInt(e.target.value) && item;
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
          <Select
            className="w-2/5"
            onChange={(e) => {
              setContentShow(e.target.value);
            }}
          >
            <option value="points">Nota/Frequência</option>
            <option value="schedules">Horários</option>
          </Select>
        </div>
      </div>
      <div className="flow-root overflow-y-auto w-full">
        {contentShow === "points" ? (
          <RegistrationsList
            loading={loading}
            registrations={registrations}
            bond={selectedBond}
          />
        ) : (
          <RegistrationsSchedules
            loading={loading}
            registrations={registrations}
            bond={selectedBond}
          />
        )}
      </div>
    </>
  );
}
