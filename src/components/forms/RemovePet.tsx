import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";
import IAddItem from "./IAddItem";

const RemovePet = ({ edit, onClick }: IAddItem) => {
  const [openModal, setOpenModal] = useState<boolean>();
  return (
    <>
      <Button className="bg-red-500" onClick={() => setOpenModal(true)}>
        Remove Pet
      </Button>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
        dismissible
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Remove Pet
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="id" value="Enter ID to delete" />
              </div>
              <TextInput id="name" type="text" placeholder="1" required />
            </div>

            <div className="w-full gap-3 flex justify-around">
              <Button
                className="w-full bg-red-500"
                onClick={() => {
                  if (onClick) onClick();
                }}
              >
                {edit ? "Edit" : "Remove"}
              </Button>
              <Button className="w-full bg-blue-500" onClick={() => setOpenModal(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default RemovePet;
