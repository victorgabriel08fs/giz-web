"use client";

import { Button, Modal, Table } from "flowbite-react";
import { useState } from "react";

export default function RegistrationExercisesModal({
  openModal,
  setOpenModal,
  regExercises,
}) {
  const totalReg = () => {
    var total = 0;
    regExercises.map((item) => {
      total = parseFloat(total) + parseFloat(item.points);
    });
    return total;
  };
  const totalEx = () => {
    var total = 0;
    regExercises.map((item) => {
      total = parseFloat(total) + parseFloat(item.exercise.points);
    });
    return total;
  };
  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Terms of Service</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Atividade</Table.HeadCell>
              <Table.HeadCell>Descrição</Table.HeadCell>
              <Table.HeadCell>Nota</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {regExercises.map((regExercise) => (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {regExercise.exercise.name}
                  </Table.Cell>
                  <Table.Cell>{regExercise.exercise.description}</Table.Cell>
                  <Table.Cell>{`${regExercise.points}/${regExercise.exercise.points}`}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </Modal.Body>
    </Modal>
  );
}
