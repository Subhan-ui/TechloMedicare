import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import { useAppDispatch } from "@/store/hooks";
import { handleNumber } from "@/store/features/appointment/appointmentSlice";
import { message } from "../types/types";

const useGetMessage = (email: string | null | undefined) => {
  const [data, setData] = useState<message[]>([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    handleFetch();
  }, []);
  useEffect(() => {
    dispatch(handleNumber(data.length));
  }, [data.length]);
  const handleFetch = async () => {
    try {
      const response = await axios.get(`/api/messages/get?email=${email}`);
      setData(response?.data);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };
  const handleDeleteAll = async () => {
    try {
      await axios.delete(`/api/messages/deleteAll?email=${email}`);
      handleFetch();
      toast.success("Successfully removed all messages");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/messages/delete?id=${id}`);
      handleFetch();
      toast.success("Successfully deleted.");
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };
  function capitalize(text: string) {
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
  }

  return { data, capitalize, handleDeleteAll, handleDelete };
};

export default useGetMessage;
