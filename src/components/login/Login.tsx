"use client";

import Modals from "@/components/passwordModal/modal/Modal";
import Input from "@/components/ui/input/Input";
import useLogin from "@/hooks/useLogin";
import Link from "next/link";

const Login = () => {
  const {
    values,
    show,
    loading,
    handleShow,
    handleSubmit,
  } = useLogin();

  return (
    <div className="w-[544px] h-[1025px] ">
      <h1 className="mt-[125px] font-mukta md:px-[47px] px-[22px] font-normal med:text-4xl md:text-2xl text-3xl">
        Welcome to Medicare
      </h1>
      <p className="font-mukta font-medium med:text-xl md:px-[47px] px-[22px] md:text-lg text-grey mt-2">
        Login In here
      </p>
      <div className="md:pl-[44px] md:pr-[48px] px-[22px]">
      {values.map((value)=>(
        <Input
        key={value.id}
        name={value.name}
        placeholder={value.placeholder}
        value={value.value}
        onChange={value.onChange}
        />
      ))}
      </div>
      {show ? (
        <>
          <Modals hiding={handleShow} />
        </>
      ) : (
        <p
          onClick={handleShow}
          className="cursor-pointer md:pl-[42px] md:pr-[46px] mx-[23px] font-mukta text-grey text-end hover:text-blue font-semibold"
        >
          Forgot Password?
        </p>
      )}
      <div className="md:ml-[42px] mx-[23px] md:mr-[46px]">
      <button
        onClick={handleSubmit}
        className="w-full font-mukta bg-blue text-white  py-4 rounded-xl disabled:bg-disabled"
        disabled={loading}
      >
        {loading ? "Loading..." : "Login"}
      </button>
      </div>
      <p className="text-center mt-3 font-mukta font-medium text-xl text-grey">
        Don't have an account?{" "}
        <Link href="/signup" className="text-blue">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
