import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  handleChange,
  selectCompanyName,
  selectENumber,
  selectEmail,
  selectIndustry,
  selectName,
  selectPassword,
} from "@/store/features/login/loginSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import axios from "axios";

const useSignup = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const name = useAppSelector(selectName);
  const companyName = useAppSelector(selectCompanyName);
  const industry = useAppSelector(selectIndustry);
  const email = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);
  const eNumber = useAppSelector(selectENumber);
  const [loading, setLoading] = useState(false);

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };

  const handleRegister = async () => {
    try {
      setLoading(true);
      await axios.post("/api/auth/register", {
        name,
        companyName,
        email,
        industry,
        password,
        eNumber,
      });

      toast.success("Successfully registered");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const values = [
    {
      id: 1,
      name: "name",
      placeholder: "Name",
      value: name,
      onChange: handleChanges,
    },
    {
      id: 2,
      name: "companyName",
      placeholder: "Company Name",
      value: companyName,
      onChange: handleChanges,
    },
    {
      id: 3,
      name: "industry",
      placeholder: "Industry",
      value: industry,
      onChange: handleChanges,
    },
    {
      id: 4,
      name: "email",
      placeholder: "Email",
      value: email,
      onChange: handleChanges,
    },
    {
      id: 5,
      name: "password",
      placeholder: "Password",
      value: password,
      onChange: handleChanges,
    },
    {
      id: 6,
      name: "eNumber",
      placeholder: "How many employees do you have",
      value: eNumber,
      onChange: handleChanges,
    },
  ];
  return {
    loading,
    values,
    handleRegister,
  };
};

export default useSignup;
