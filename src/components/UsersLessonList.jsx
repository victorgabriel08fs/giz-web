import { Button, Card, Checkbox, Table } from "flowbite-react";
import moment from "moment";
import { api } from "../services/api";
import { useState } from "react";

export default function UsersLessonList({
  setPresence,
  registrations,
  lessons,
}) {
  const verifyPresence = (lesson, registration) => {
    var res = false;
    const a = lesson.registers.filter((item) => {
      return item.registration_id === registration.id && item.presence === 1;
    })[0];
    res = a?.presence;
    res = res === undefined ? false : res == 1 ? true : false;
    return res;
  };

  const handleCheck = async (value, lesson_id, registration_id) => {
    const data = { lesson_id, registration_id, value };
    await api
      .post("disciplines/checkPresence", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        var data = res.data;
        setPresence(data);
      });
  };

  return (
    <Card className="w-full h-full">
      <div className="overflow-x-auto">
        <Table striped>
          <Table.Head className="sticky top-0 z-10">
            <Table.HeadCell className="sticky" colSpan={2}>
              Aluno
            </Table.HeadCell>
            {lessons.map((lesson) => (
              <Table.HeadCell className="sticky">
                {moment(lesson.datetime).format("DD/MM/YY - HH:mm")}
              </Table.HeadCell>
            ))}
          </Table.Head>
          <Table.Body className=" sticky divide-y">
            {registrations.map((registration) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell
                  colSpan={2}
                  className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                >
                  {registration.user.name}
                </Table.Cell>
                {lessons.map((lesson) => (
                  <Table.Cell className="font-medium text-gray-900 dark:text-white">
                    <Checkbox
                      id={`${lesson.id}${registration.id}`}
                      defaultChecked={verifyPresence(lesson, registration)}
                      onChange={async (e) => {
                        await handleCheck(
                          e.target.checked,
                          lesson.id,
                          registration.id
                        );
                      }}
                    />
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </Card>
  );
}
