import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  handleChange,
  selectEmail,
  selectPassword,
} from "../store/features/login/loginSlice";

const usePasswordChange = (hiding: () => void) => {
  const dispatch = useAppDispatch();
  const email = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const some = await axios.post("/api/sendEmail", {
        email,
      });

      toast.success("Email Sent", some.data.message);
    } catch (error: any) {
      if (error?.response?.data) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);

      hiding();
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };

  const inputs = [
    {
      id: 1,
      placeholder: "Email",
      name: "email",
      value: email,
      onChange: onChange,
    },
  ];

  return { loading, handleSubmit, inputs, password, onChange };
};

export default usePasswordChange;
