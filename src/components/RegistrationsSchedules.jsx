import { useState } from "react";
import moment from "moment";
import { Table } from "flowbite-react";

export default function RegistrationsSchedules({ registrations }) {
  // Array de dias da semana
  const diasSemana = [
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
  ];

  const markSchedule = (registration, day, order) => {
    const schedule = registration.discipline.schedule;
    return schedule.items.some((item) => {
      return item.day === day && item.order === order;
    });
  };

  // Array de horários
  const horarios = ["07:10", "9:00", "10:50", "13:10", "15:00", "16:50"];

  return (
    <div>
      <h2 className="p-4 font-serif">Quadro de Horário Semanal</h2>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Horário</Table.HeadCell>
          {diasSemana.map((dia, index) => (
            <Table.HeadCell key={index}>{dia}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body className="divide-y">
          {horarios.map((horario, orderIndex) => (
            <Table.Row key={orderIndex}>
              <Table.Cell>{horario}</Table.Cell>
              {diasSemana.map((dia, dayIndex) => (
                <Table.Cell key={dayIndex}>
                  {registrations.map((registration) =>
                    registration?.discipline?.schedule !== null &&
                    markSchedule(registration, dayIndex+1, orderIndex+1)
                      ? registration.discipline.name
                      : ""
                  )}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
