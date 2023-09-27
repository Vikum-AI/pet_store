import { Card } from "flowbite-react";
import React from "react";
import IItemCard from "./IItemsCard";
import AddItem from "../forms/AddItem";
import DeletePopup from "../forms/DeletePopup";

const ItemsCard = ({ data, admin }: IItemCard) => {
  return (
    <Card className="text-black">
      <p>{data.name}</p>
      <img
        alt="Item Image"
        className="h-80 w-full self-center"
        src={data.imageURL}
      />
      <p>Status: {data.status}</p>
      <p>Price: LKR {data.price}</p>
      {admin && (
        <div className="flex w-full gap-3">
          <AddItem edit />
          <DeletePopup id="" />
        </div>
      )}
    </Card>
  );
};

export default ItemsCard;
