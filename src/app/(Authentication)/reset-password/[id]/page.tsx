"use client";

import Input from "@/components/ui/input/Input";
import useResetPassword from "@/hooks/useResetPassword";

import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const { loading, handleSubmit, password, onChange } = useResetPassword(
    params.id as string
  );
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[544px] h-[1025px] maxi:w-[32vw]"
    >
      <h1 className="mt-[125px] text-4xl md:px-[47px] px-[22px]">
        Welcome to Medicare
      </h1>
      <p className="font-medium text-[22px] text-grey md:px-[47px] px-[22px]">
        Tell us about your company
      </p>
      <div className="md:pl-[44px] md:mt-[55px] md:pr-[48px] px-[22px]">
        <Input
          name="password"
          placeholder="Your new Password here"
          value={password}
          onChange={onChange}
        />
      </div>
      <div className="md:ml-[42px] mx-[23px] md:mr-[46px]">
        <button
          className="w-full bg-blue disabled:bg-disabled text-white py-4 rounded-xl"
          disabled={loading}
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </div>
    </form>
  );
};

export default Page;
