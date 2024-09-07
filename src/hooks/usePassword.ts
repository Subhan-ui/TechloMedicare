import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { selectPassword } from "@/store/features/login/loginSlice";
import { useAppSelector } from "@/store/hooks";

const useSettings = (email: string | null | undefined) => {
  const router = useRouter();

  const password = useAppSelector(selectPassword);
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.put("/api/auth/change", {
        email: email,
        password: password,
      });

      toast.success("Successfully updated your password");
      router.push("/");
    } catch (error: any) {
      if (error?.response && error?.response?.data) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    show,
    password,
    handleShow,
    handleSubmit,
  };
};

export default useSettings;
