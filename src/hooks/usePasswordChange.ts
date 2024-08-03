import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  handleChange,
  selectEmail,
  selectPassword,
} from "../store/features/login/loginSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const usePasswordChange = (hiding: () => void) => {
  const dispatch = useAppDispatch();
  const email = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.patch("/api/auth/change", {
        email: email,
        password: password,
      });

      toast.success("Successfully updated your password");
      hiding();
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
    {
      id: 2,
      placeholder: "Your new Password",
      name: "password",
      value: password,
      onChange: onChange,
    },
  ];
  return { loading, handleSubmit, inputs };
};

export default usePasswordChange;
