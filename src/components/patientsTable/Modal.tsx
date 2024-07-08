import React from "react";
import Modals from "../modals/Modal";
import FormAddPatient from "../forms/FormAddPatient";
import usePatientCRUD from "@/hooks/usePatientCRUD";

const Modal: React.FC<{ handleShow: () => void; id: string }> = ({
  handleShow,
  id,
}) => {
  const { handleDelete, handleSubmit, loading, loadingDelete } = usePatientCRUD(
    id,
    handleShow
  );
  return (
    <Modals
      hiding={handleShow}
      className="absolute w-[783.2px] h-[800px] ml-[41px]"
    >
      <form onSubmit={handleSubmit} className="table-auto ">
        <table>
          <tbody>
            <FormAddPatient handleShow={handleShow} cross={false} />
          </tbody>
        </table>
        <button
          className="bg-[#0000ac] text-white px-3 py-2 absolute bottom-16 right-64 rounded-lg hover:bg-white hover:text-black hover:border-2 font-mukta"
          type="submit"
        >
          {loading ? "Submiting..." : "Submit"}
        </button>
        <button
          className="bg-[#0000ac] text-white px-3 py-2 absolute bottom-16 right-40 rounded-lg hover:bg-white hover:text-black hover:border-2 font-mukta"
          type="button"
          onClick={handleShow}
        >
          Cancel
        </button>
        <button
          className="bg-[#0000ac] text-white px-3 py-2 absolute bottom-16 right-16 rounded-lg hover:bg-white hover:text-black hover:border-2 font-mukta"
          type="button"
          onClick={handleDelete}
        >
          {loadingDelete ? "Deleting" : "Delete"}
        </button>
      </form>
    </Modals>
  );
};

export default Modal;
