import axios from "axios";
import toast from "react-hot-toast";

import useNotification from "./useNotification";

const useHandleMessage = () => {
  const { playSound } = useNotification();
  const notification = async (
    email: string | undefined | null,
    message: string
  ) => {
    try {
      await axios.post(`/api/messages/add?email=${email}`, { message });
      playSound();
    } catch (error: any) {
      toast.error(error?.message);
    }
  };
  return notification;
};

export default useHandleMessage;
