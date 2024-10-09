"use client";

import { typeLogout } from "@/types/types";

const Input: React.FC<typeLogout> = ({
  placeholder,
  value,
  name,
  onChange,
}) => {
  const type = name.toLowerCase();

  return (
    <div className="relative md:my-12 my-10">
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type === "password" ? "password" : "text"}
        className="border-b w-full p-2 text-lg border-grey py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
      />
      <label
        htmlFor="username"
        className="absolute left-0 -top-6 cursor-text text-base  transition-all text-blue-700"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
