import axios from "axios";
import { Button, Modal } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeletePopup = ({ id }: { id: string }) => {
  const [openModal, setOpenModal] = useState<boolean>();
  const router = useRouter();

  const axiosConfig = {
    headers: {
      authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const deletePet = () => {
    axios.delete(
      `https://lcbv4eko7hewypbhllatabxcku0tibwl.lambda-url.us-east-1.on.aws/?id=${id}`,
      axiosConfig
    );
    setOpenModal(false);
    router.refresh();
  };

  return (
    <>
      <Button className="w-full bg-red-500" onClick={() => setOpenModal(true)}>
        Delete
      </Button>
      <Modal
        show={openModal}
        size="md"
        popup
        dismissible
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete?
            </h3>
            <div className="flex justify-center gap-4">
              <Button className="w-full" color="failure" onClick={deletePet}>
                Yes
              </Button>
              <Button
                className="w-full"
                color="gray"
                onClick={() => setOpenModal(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DeletePopup;
