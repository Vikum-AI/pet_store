import AddPet from "../forms/AddPet";
import RemovePet from "../forms/RemovePet";

const PetEditor = () => {
  return (
    <div className="flex justify-end m-2 space-x-4">
      <div className="w-32">
        <AddPet />
      </div>
    </div>
  );
};

export default PetEditor;
