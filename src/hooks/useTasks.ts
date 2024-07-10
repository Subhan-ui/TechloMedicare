import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type typeTasks = {
  id: string;
  task: string;
  date: string;
  completed: boolean;
}[];

const useTasks = ({ email }: { email: string | null | undefined }) => {
  const [loadAdd, setLoadAdd] = useState(false);
  const [show, setShow] = useState(false);

  const [title, setTitle] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [track, setTrack] = useState(0);
  const [data, setData] = useState<typeTasks>([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/tasks/get?email=${email}`);
        setData(response.data);
      } catch (error: any) {
        toast.error(error.response.data.message);
        console.log(error);
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
      await axios.patch(`/api/tasks/update/${id}`, {
        checked: event.target.checked,
      });
      toast.success("Successfully updated task");
      setTrack((prev) => prev + 1);
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/tasks/delete?id=${id}`);
      toast.success("Task deleted successfully");
      setTrack((prev) => prev + 1);
    } catch (error: any) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoadAdd(true);
      await axios.post(`/api/tasks/add/${email}`, {
        title: title,
      });
      toast.success("Successfully added Your Task");
      setTrack((prev) => prev + 1);
      handleShow();
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
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
