"use client";

import Link from "next/link";

import useSignup from "@/hooks/useSignup";
import Input from "@/components/ui/input/Input";

const Signup = () => {
  const { handleRegister, loading, values } = useSignup();

  return (
    <div className="w-[544px] h-[1025px] maxi:w-[32vw]">
      <h1 className="mt-[125px] text-4xl md:px-[47px] px-[22px]">Welcome to Medicare</h1>
      <p className="font-medium text-[22px] text-grey md:px-[47px] px-[22px] mt-2">
        Tell us about your company
      </p>
      <div className="md:pl-[44px] md:mt-[55px] md:pr-[48px] px-[22px]">
      {values.map((value) => (
        <Input
          name={value.name}
          key={value.id}
          placeholder={value.placeholder}
          value={value.value}
          onChange={value.onChange}
        />
      ))}
      </div>
      <div className="md:ml-[42px] mx-[23px] md:mr-[46px]">
      <button
        onClick={handleRegister}
        className="w-full bg-blue disabled:bg-disabled text-white py-4 rounded-xl"
        disabled={loading}
      >
        {loading ? "Creating..." : "Sign Up"}
      </button>
      </div>
      <p className="text-center mt-3 font-medium text-xl text-grey">
        Already have an account?
        <Link href="/login" className="text-blue mx-1">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Signup;
