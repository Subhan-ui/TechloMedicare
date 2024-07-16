"use client";

import Modals from "@/components/modal/Modal";
import Input from "@/components/ui/Input";
import useLogin from "@/hooks/useLogin";
import Link from "next/link";

const Login = () => {
  const {
    email,
    password,
    show,
    loading,
    handleChanges,
    handleShow,
    handleSubmit,
  } = useLogin();

  return (
    <div className="w-[544px] h-[1025px] px-[47px]">
      <h1 className="mt-[125px] font-mukta med:text-4xl md:text-2xl text-3xl">
        Welcome to Medicare
      </h1>
      <p className="font-mukta font-medium med:text-xl md:text-lg text-[#4f4f4f] mt-2">
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
          className="cursor-pointer font-mukta text-[#4f4f4f] text-end hover:text-blue font-semibold"
        >
          Forgot Password?
        </p>
      )}
      <button
        onClick={handleSubmit}
        className="w-full bg-blue text-white py-4 rounded-xl disabled:bg-disabled"
        disabled={loading}
      >
        {loading ? "Loading..." : "Login"}
      </button>
      <p className="text-center mt-3 font-mukta font-medium text-xl text-[#4f4f4f]">
        Don't have an account?{" "}
        <Link href="/signup" className="text-blue">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
