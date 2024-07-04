import React, { useState } from "react";
import Backdrop from "../modal/ModalBackdrop";
import FormAddPatient from "../forms/FormAddPatient";
import axios from "axios";
import { useAppSelector } from "@/store/hooks";
import {
  selectDateOfBirth,
  selectDiagnosis,
  selectForeName,
  selectImage,
  selectLastName,
  selectNotes,
  selectPhNo,
  selectSex,
} from "@/store/features/patients/patientSlice";
import toast from "react-hot-toast";
import { useEdgeStore } from "@/lib/edgestore";

const Modal: React.FC<{ handleShow: () => void; id: string }> = ({
  handleShow,
  id,
}) => {
  const foreName = useAppSelector(selectForeName);
  const lastName = useAppSelector(selectLastName);
  const dateOfBirth = useAppSelector(selectDateOfBirth);
  const diagnosis = useAppSelector(selectDiagnosis);
  const notes = useAppSelector(selectNotes);
  const phNo = useAppSelector(selectPhNo);
  const sex = useAppSelector(selectSex);
  const urls = useAppSelector(selectImage)
  const {edgestore} = useEdgeStore()
  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(id);
    try {
      setLoading(true);
      await axios.patch("/api/patients/update", {
        id: id,
        firstName: foreName,
        lastName,
        dateOfBirth,
        sex,
        diagnosis,
        notes,
        phNo,
      });
      handleShow();
      toast.success("Updated Successfully!");
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async () => {
    const sure = confirm("Are you sure You wan tto delete this patient?");
    if (sure) {
      try {
        setLoadingDelete(true);
        
        
        await axios.delete(`/api/patients/delete/${id}`);
        
        toast.success("Successfully removed");
        handleShow();
      } catch (error: any) {
        console.log(error);
        // toast.error(error.response.data.message);
      } finally {
        setLoadingDelete(false);
      }
    }
  };
  return (
    <div>
      <Backdrop hiding={handleShow} />
      <form
        onSubmit={handleSubmit}
        className="table-auto  ml-[41px] p-12 block absolute z-[250] top-24 left-1/2 transform -translate-x-1/2 rounded-lg h-[800px] w-[783.2px] bg-white"
      >
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
          {loadingDelete?'Deleting':'Delete'}
        </button>
      </form>
    </div>
  );
};

export default Modal;
