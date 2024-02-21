"use client";

import { Button, Modal } from "flowbite-react";
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
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {regExercises.map((regExercise) => (
              <>
                <li>
                  <div className="grid grid-cols-4">
                    {regExercise.id}{' '}
                    <div>{regExercise.exercise.name}</div>
                    <div>
                      {regExercise.exercise.description ?? "Não informado"}
                    </div>
                    <div>{`${regExercise.points}/${regExercise.exercise.points}`}</div>
                  </div>
                </li>
              </>
            ))}
            <li>
              <div className="grid grid-cols-3">
                <div>Total</div>
                <div></div>
                <div>{`${totalReg()}/${totalEx()}`}</div>
              </div>
            </li>
          </ul>
        </div>
      </Modal.Body>
    </Modal>
  );
}
