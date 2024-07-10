"use client";

import Input from "@/components/ui/Input";
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
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Home = () => {
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

  // useEffect(()=>{
  //   signOut({
  //     redirect:false
  //   })
  // })

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
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-[544px] h-[1025px] px-[47px]">
      <h1 className="mt-[125px] font-mukta text-4xl">Welcome to Medicare</h1>
      <p className="font-mukta font-medium text-xl text-[#4f4f4f] mt-2">
        Tell us about your company
      </p>
      <Input
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleChanges}
      />
      <Input
        name="companyName"
        placeholder="Company Name"
        value={companyName}
        onChange={handleChanges}
      />
      <Input
        name="industry"
        placeholder="Industry"
        value={industry}
        onChange={handleChanges}
      />
      <Input
        name="email"
        placeholder="Email"
        value={email}
        onChange={handleChanges}
      />
      <Input
        name="password"
        placeholder="Password"
        value={password}
        onChange={handleChanges}
      />
      <Input
        name="eNumber"
        placeholder="How many employees do you have?"
        value={eNumber}
        onChange={handleChanges}
      />
      <button
        onClick={handleRegister}
        className="w-full bg-[#0000ac] disabled:bg-[#0000ac96] text-white py-4 rounded-xl"
        disabled={loading}
      >
        {loading ? "Creating..." : "Sign Up"}
      </button>
      <p className="text-center mt-3 font-mukta font-medium text-xl text-[#4f4f4f]">
        Already have an account?{" "}
        <Link href="/login" className="text-[#0000ac]">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Home;
