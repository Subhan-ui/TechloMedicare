"use client";

import Input from "@/components/ui/input/Input";
import useSignup from "@/hooks/useSignup";
import Link from "next/link";

const Signup = () => {
  const { handleRegister, loading, values } = useSignup();

  return (
    <div className="w-[544px] h-[1025px]">
      <h1 className="mt-[125px] font-mukta text-4xl md:px-[47px] px-[22px]">Welcome to Medicare</h1>
      <p className="font-mukta font-medium text-xl text-grey mt-2 md:px-[47px] px-[22px]">
        Tell us about your company
      </p>
      <div className="md:pl-[44px] md:pr-[48px] px-[22px]">
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
      <p className="text-center mt-3 font-mukta font-medium text-xl text-grey">
        Already have an account?
        <Link href="/login" className="text-blue mx-1">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Signup;
