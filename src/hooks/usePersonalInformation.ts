import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
  handleChange,
  selectCompanyName,
  selectENumber,
  selectIndustry,
  selectName,
} from "@/store/features/login/loginSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { data } from "../types/types";

const usePersonalInformation = (email: string | undefined | null) => {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const nameS = useAppSelector(selectName);
  const companyNameS = useAppSelector(selectCompanyName);
  const industryS = useAppSelector(selectIndustry);
  const eNumberS = useAppSelector(selectENumber);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`/api/auth/get/${email}`);
      const data = response?.data as data;
      dispatch(handleChange({ name: "name", value: data?.name }));
      dispatch(handleChange({ name: "companyName", value: data?.companyName }));
      dispatch(handleChange({ name: "industry", value: data?.industry }));
      dispatch(handleChange({ name: "eNumber", value: data?.eNumber }));
    })();
  }, []);
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.put(`/api/auth/get/${email}`, {
        name: nameS,
        companyName: companyNameS,
        industry: industryS,
        eNumber: eNumberS,
      });
      toast.success("Successfully updated your data");
    } catch (error: any) {
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };
  return {
    show,
    loading,
    nameS,
    companyNameS,
    industryS,
    eNumberS,
    handleSubmit,
    handleShow,
    handleChanges,
  };
};

export default usePersonalInformation;
