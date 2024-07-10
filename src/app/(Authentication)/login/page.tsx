"use client";

import Modals from "@/components/modal/Modal";
import Input from "@/components/ui/Input";
import {
  handleChange,
  selectEmail,
  selectPassword,
} from "@/store/features/login/loginSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useRouter();
  const email = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);
  const dispatch = useAppDispatch();
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  // useEffect(()=>{
  //   signOut({
  //     redirect:false
  //   })
  // })
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const login = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (login?.ok) {
        toast.success("successfully Logged in");
        navigate.push("/");
      } else if (login?.error) {
        toast.error(login?.error);
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="w-[544px] h-[1025px] px-[47px]">
      <h1 className="mt-[125px] font-mukta text-4xl">Welcome to Medicare</h1>
      <p className="font-mukta font-medium text-xl text-[#4f4f4f] mt-2">
        Login In here
      </p>
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
      {show ? (
        <>
          <Modals hiding={handleShow} />
        </>
      ) : (
        <p
          onClick={handleShow}
          className="cursor-pointer font-mukta text-[#4f4f4f] text-end hover:text-[#0000ac] font-semibold"
        >
          Forgot Password?
        </p>
      )}
      <button
        onClick={handleSubmit}
        className="w-full bg-[#0000ac] text-white py-4 rounded-xl disabled:bg-[#0000ac96]"
        disabled={loading}
      >
        {loading?'Loading...':'Login'}
      </button>
      <p className="text-center mt-3 font-mukta font-medium text-xl text-[#4f4f4f]">
        Don't have an account?{" "}
        <Link href="/signup" className="text-[#0000ac]">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
