"use client";

import Link from "next/link";

import Modals from "@/components/passwordModal/modal/Modal";
import Input from "@/components/ui/input/Input";
import useLogin from "@/hooks/useLogin";

const Login = () => {
  const { values, show, loading, handleShow, handleSubmit } = useLogin();
  return (
    <div className="w-[544px] h-[1024px] maxi:h-screen maxi:min-h-[1026px] maxi:w-[32vw]">
      {show && <Modals hiding={handleShow} />}
      <form
        className="w-full pt-[125px] h-full maxi:w-[32vw]"
        onSubmit={handleSubmit}
      >
        <h1 className=" md:px-[47px] px-[22px] font-normal med:text-4xl md:text-2xl text-3xl">
          Welcome to Medicare
        </h1>
        <p className="font-medium med:text-xl md:px-[47px] px-[22px]  md:text-lg text-grey ">
          Login In here
        </p>
        <div className="md:pl-[44px] md:pr-[48px] md:mt-[55px] px-[22px]">
          {values.map((value) => (
            <Input
              key={value.id}
              name={value.name}
              placeholder={value.placeholder}
              value={value.value}
              onChange={value.onChange}
            />
          ))}
        </div>
        <p
          onClick={handleShow}
          className="cursor-pointer md:pl-[42px] md:pr-[46px] mx-[23px] text-grey text-end hover:text-blue font-semibold"
        >
          Forgot Password?
        </p>
        <div className="md:ml-[42px] mx-[23px] md:mr-[46px]">
          <button
            className="w-full bg-blue text-white  py-[15px] rounded-xl disabled:bg-disabled"
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </div>
        <p className="text-center mt-3 font-medium text-xl text-grey">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
