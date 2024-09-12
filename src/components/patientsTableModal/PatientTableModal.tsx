import React from "react";

import Modals from "../modals/modal/Modal";
import FormAddPatient from "../formAddPatientModal/FormAddPatientModal";
import usePatientCRUD from "@/hooks/usePatientCRUD";

const Modal: React.FC<{ handleShow: () => void; id: string }> = ({
  handleShow,
  id,
}) => {
  const { handleDelete, handleSubmit, loading, loadingDelete } = usePatientCRUD(
    id, handleShow,
  );
  return (
    <Modals
      hiding={handleShow}
      className="absolute med:w-[783.2px] md:w-[670px] sm:w-[calc(100vw-50px)]  h-[800px] sm:ml-[41px] ml-[20px] md:px-12 px-5"
    >
      <form onSubmit={handleSubmit} className="table-auto ">
        <table className="table-auto  w-full">
          <tbody className="w-full mx-4">
            <FormAddPatient handleShow={handleShow} cross={false} />
          </tbody>
        </table>
        <div className="flex justify-between">
        <button
          className="bg-blue disabled:bg-disabled text-white px-3 py-2 absolute bottom-16 md:right-64 sm:right-[12rem] right-[11rem] rounded-lg hover:bg-white hover:text-black hover:border-2"
          type="submit"
          disabled={loading}
        >
          {loading ? "Submiting..." : "Submit"}
        </button>
        <button
          className="bg-blue text-white px-3 py-2 absolute bottom-16 md:right-40 sm:right-[7rem] right-[6rem] rounded-lg hover:bg-white hover:text-black hover:border-2"
          type="button"
          onClick={handleShow}
        >
          Cancel
        </button>
        <button
          className="bg-blue disabled:bg-disabled text-white px-3 py-2 absolute bottom-16 md:right-16 sm:right-[2rem] right-[1rem] rounded-lg hover:bg-white hover:text-black hover:border-2"
          type="button"
          disabled={loadingDelete}
          onClick={handleDelete}
        >
          {loadingDelete ? "Deleting" : "Delete"}
        </button>
        </div>
      </form>
    </Modals>
  );
};

export default Modal;
