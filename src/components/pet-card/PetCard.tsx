import { Card } from "flowbite-react";
import React from "react";
import IPetCard from "./IPetCard";
import AddPet from "../forms/AddPet";
import DeletePopup from "../forms/DeletePopup";

const PetCard = ({ data, admin }: IPetCard) => {
  return (
    <Card>
      <p className="text-black">{data.title}</p>
      <img
        alt="Pet Image"
        className="h-80 w-full self-center"
        src={data.imageURL}
      />
      <div className="text-black">
        <p>Breed: {data.breed}</p>
        <p>Color: {data.color}</p>
        <p>Age: {data.age}</p>
        <p>Characteristics: {data.characteristic}</p>
        <div className="flex justify-between">
          <div>
            <p>Previous Price</p>
            <p> {data.prevPrice}</p>
          </div>
          <div>
            <p>New Price</p>
            <p>LKR {data.newPrice}</p>
          </div>
        </div>
      </div>
      {admin && (
        <div className="flex gap-3">
          <AddPet edit />
          <DeletePopup id={data.id} />
        </div>
      )}
    </Card>
  );
};

export default PetCard;
