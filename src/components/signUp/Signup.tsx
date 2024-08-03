"use client";

import Input from "@/components/ui/input/Input";
import useSignup from "@/hooks/useSignup";
import Link from "next/link";

const Signup = () => {
  const { handleRegister, loading, values } = useSignup();

  return (
    <div className="w-[544px] h-[1025px] px-[47px]">
      <h1 className="mt-[125px] font-mukta text-4xl">Welcome to Medicare</h1>
      <p className="font-mukta font-medium text-xl text-grey mt-2">
        Tell us about your company
      </p>
      {values.map((value) => (
        <Input
          name={value.name}
          key={value.id}
          placeholder={value.placeholder}
          value={value.value}
          onChange={value.onChange}
        />
      ))}
      <button
        onClick={handleRegister}
        className="w-full bg-blue disabled:bg-disabled text-white py-4 rounded-xl"
        disabled={loading}
      >
        {loading ? "Creating..." : "Sign Up"}
      </button>
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
