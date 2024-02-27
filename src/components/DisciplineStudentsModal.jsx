"use client";

import { Button, Modal, Table } from "flowbite-react";
import { useState } from "react";

export default function DisciplineStudentsModal({
  openModal,
  setOpenModal,
  registrations,
}) {
  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Header>Terms of Service</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Aluno</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {registrations.map((registration) => (
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {registration.user.name}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </Modal.Body>
    </Modal>
  );
}
