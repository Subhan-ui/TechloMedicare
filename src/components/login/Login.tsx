"use client";

import Modals from "@/components/passwordModal/Modal";
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
    <div className="w-[544px] h-[1025px] px-[47px]">
      <h1 className="mt-[125px] font-mukta font-normal med:text-4xl md:text-2xl text-3xl">
        Welcome to Medicare
      </h1>
      <p className="font-mukta font-medium med:text-xl md:text-lg text-grey mt-2">
        Login In here
      </p>
      {values.map((value)=>(
        <Input
        key={value.id}
        name={value.name}
        placeholder={value.placeholder}
        value={value.value}
        onChange={value.onChange}
        />
      ))}
      {show ? (
        <>
          <Modals hiding={handleShow} />
        </>
      ) : (
        <p
          onClick={handleShow}
          className="cursor-pointer font-mukta text-grey text-end hover:text-blue font-semibold"
        >
          Forgot Password?
        </p>
      )}
      <button
        onClick={handleSubmit}
        className="w-full font-mukta bg-blue text-white py-4 rounded-xl disabled:bg-disabled"
        disabled={loading}
      >
        {loading ? "Loading..." : "Login"}
      </button>
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
