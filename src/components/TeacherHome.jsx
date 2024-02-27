import { Select } from "flowbite-react";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import DisciplinesList from "./DisciplinesList";

export default function TeacherHome({ user, role }) {
  const [loading, setLoading] = useState(true);
  const [disciplines, setDisciplines] = useState([]);
  const [semesters, setSemesters] = useState([]);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [bonds, setBonds] = useState([]);
  const [selectedBond, setSelectedBond] = useState(null);
  useEffect(() => {
    loadBonds();
  }, []);
  useEffect(() => {
    if (selectedBond?.id > 0) {
      loadSemesters();
    }
  }, [selectedBond]);

  useEffect(() => {
    if (selectedSemester?.id > 0) {
      loadData();
    }
  }, [selectedSemester]);
  
  const loadData = async () => {
    setLoading(true);
    await api
      .get("disciplines", {
        params: {
          teacher_id: user.id,
          semester_id: selectedSemester.id,
          bond_id: selectedBond.id,
        },
      })
      .then((res) => {
        var data = res.data;
        setDisciplines(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const loadSemesters = async () => {
    setLoading(true);
    await api
      .get("semesters", {
        params: { bond_id: selectedBond.id },
      })
      .then((res) => {
        var data = res.data;
        setSemesters(data.reverse());
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
        if (selectedBond === null) setSelectedBond(data[0]);
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
      <div className={`flow-root h-full ${!loading&&'overflow-auto'} w-full`}>
        <DisciplinesList
          loading={loading}
          disciplines={disciplines}
          bond={selectedBond}
        />
      </div>
    </>
  );
}
