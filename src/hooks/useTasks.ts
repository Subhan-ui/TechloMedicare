import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import useHandleMessage from "./useHandleMessage";
import { emailType, typeTasks } from "@/types/types";

const useTasks = ({ email }: emailType) => {
  const [loadAdd, setLoadAdd] = useState(false);
  const [show, setShow] = useState(false);

  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [track, setTrack] = useState(0);
  const [data, setData] = useState<typeTasks>([]);
  const notification = useHandleMessage();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/tasks/get?email=${email}`);
        setData(response?.data);
      } catch (error: any) {
        toast.error(error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [track]);

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const handleChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    try {
      await axios.put(`/api/tasks/update/${id}`, {
        checked: event.target.checked,
      });
      toast.success("Successfully updated task");
      setTrack((prev) => prev + 1);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/tasks/delete?id=${id}`);
      toast.success("Task deleted successfully");
      setTrack((prev) => prev + 1);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoadAdd(true);
      await axios.post(`/api/tasks/add/${email}`, {
        title: title,
      });
      toast.success("Successfully added Your Task");
      setTrack((prev) => prev + 1);
      notification(email, `task added successfully...`);
      handleShow();
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    } finally {
      setLoadAdd(false);
    }
  };

  return {
    data,
    loading,
    show,
    loadAdd,
    title,
    handleSubmit,
    handleChange,
    handleDelete,
    handleTitle,
    handleShow,
  };
};

export default useTasks;
