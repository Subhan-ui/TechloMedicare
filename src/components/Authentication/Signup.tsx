"use client";

import Input from "@/components/ui/Input";
import useSignup from "@/hooks/useSignup";
import Link from "next/link";

const Signup = () => {
  const {
    name,
    handleChanges,
    companyName,
    industry,
    email,
    password,
    eNumber,
    handleRegister,
    loading,
  } = useSignup();
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
        className="w-full bg-blue disabled:bg-disabled text-white py-4 rounded-xl"
        disabled={loading}
      >
        {loading ? "Creating..." : "Sign Up"}
      </button>
      <p className="text-center mt-3 font-mukta font-medium text-xl text-[#4f4f4f]">
        Already have an account?{" "}
        <Link href="/login" className="text-blue">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Signup;
