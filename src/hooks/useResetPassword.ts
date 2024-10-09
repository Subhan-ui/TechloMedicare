"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  handleChange,
  selectEmail,
  selectPassword,
} from "../store/features/login/loginSlice";

const useResetPassword = (id: string) => {
  const dispatch = useAppDispatch();
  const email = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.put(`/api/auth/change/${id}`, {
        password,
      });
      toast.success(response.data.message);
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

  return { loading, handleSubmit, password, onChange };
};

export default useResetPassword;
