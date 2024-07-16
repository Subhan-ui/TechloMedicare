import { useAppDispatch } from "@/store/hooks";
import {
  handleChangeImages,
  handleChangePatient,
} from "@/store/features/patients/patientSlice";
import { useEffect, useState } from "react";
import axios from "axios";

type datatype = {
  id: string;
  name: string;
  diagnosis: string;
  image: string;
  phNo: string;
  dateOfBirth: string;
  sex: string;
  notes: string;
};

const usePatients = (email: string | null | undefined) => {
  const [data, setData] = useState<datatype[]>([]);
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);

  const [id, setId] = useState<string>("");
  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const response = await axios.get(`/api/patients/get/${email}`);
        setData(response.data as datatype[]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    })();
  }, []);
  const handleShow = (id: string) => {
    const content = data.find((dat) => dat.id === id);
    dispatch(
      handleChangePatient({
        name: "foreName",
        value: content?.name.split(" ")[0],
      })
    );
    dispatch(
      handleChangePatient({
        name: "lastName",
        value: content?.name.split(" ")[1],
      })
    );
    dispatch(
      handleChangePatient({ name: "dateOfBirth", value: content?.dateOfBirth })
    );
    dispatch(handleChangePatient({ name: "sex", value: content?.sex }));
    dispatch(
      handleChangePatient({ name: "diagnosis", value: content?.diagnosis })
    );
    dispatch(handleChangePatient({ name: "notes", value: content?.notes }));
    dispatch(handleChangePatient({ name: "phNo", value: content?.phNo }));
    dispatch(handleChangeImages(content?.image));
    setId(id);
    setShow(true);
  };
  const handleHiding = () => {
    setShow(false);
  };
  
  return {
    id,
    show,
    data,
    loading,
    handleHiding,
    handleShow,
  };
};

export default usePatients;
