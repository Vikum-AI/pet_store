import { Button, Label, Modal, TextInput } from "flowbite-react";
import React, { useState } from "react";
import IAddItem from "./IAddItem";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddPet = ({ edit, onClick }: IAddItem) => {
  const [openModal, setOpenModal] = useState<boolean>();
  const router = useRouter();

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const [data, setData] = useState({
    breed: "",
    title: "",
    color: "",
    imageURL: "",
    age: "",
    characteristic: "",
    prevPrice: "",
    currentPrice: "",
  });

  const handleChange = (e: any) => {
    const value = e.target.value;
    setData({ ...data, [e.target.value]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const animalData = {
      prevPrice: data.prevPrice,
      color: data.color,
      imageURL: data.imageURL,
      title: data.title,
      newPrice: data.currentPrice,
      breed: data.breed,
      characteristic: data.characteristic,
      age: data.age,
    };
    console.log(animalData);
    axios
      .post(
        "https://lcbv4eko7hewypbhllatabxcku0tibwl.lambda-url.us-east-1.on.aws/",
        animalData,
        axiosConfig
      )
      .then((response) => {
        console.log(response.status, response.data.token);
        router.refresh();
      });
  };

  return (
    <>
      {!edit ? (
        <Button
          className="bg-blue-500 w-full"
          onClick={() => setOpenModal(true)}
        >
          {edit ? "Edit" : "Add Pet"}
        </Button>
      ) : null}
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
              {edit ? "Edit Pet" : "Add Pet"}
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Enter title" />
              </div>
              <TextInput
                id="name"
                type="text"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="breed" value="Enter breed" />
              </div>
              <TextInput
                id="name"
                type="text"
                placeholder="Boxer"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="color" value="Enter color" />
              </div>
              <TextInput
                id="color"
                type="text"
                placeholder="Brown"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="imageURL" value="Enter image URL" />
              </div>
              <TextInput
                id="color"
                type="text"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="age" value="Enter age" />
              </div>
              <TextInput
                id="age"
                type="text"
                placeholder="1"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="characteristic" value="Enter characteristics" />
              </div>
              <TextInput
                id="characteristic"
                type="text"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="prevPrice" value="Enter Previous Price" />
              </div>
              <TextInput
                id="prevPrice"
                type="text"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="currentPrice" value="Enter Current Price" />
              </div>
              <TextInput
                id="currentPrice"
                type="text"
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full gap-3 flex justify-around">
              <Button className="w-full" onClick={handleSubmit}>
                {edit ? "Edit" : "Add"}
              </Button>
              <Button className="w-full" onClick={() => setOpenModal(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddPet;
