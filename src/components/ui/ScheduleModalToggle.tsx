import React from "react";

const Toggle: React.FC<{
  isChecked: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ isChecked, handleChange }) => {
  return (
    <label className="relative left-16 inline-flex items-center cursor-pointer">
      <input
        className="sr-only peer"
        checked={isChecked}
        onChange={handleChange}
        type="checkbox"
      />
      <div className="peer rounded-full outline-none duration-100 after:duration-500 w-28 h-14 bg-red-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-500  after:content-['No'] after:absolute after:outline-none after:rounded-full after:h-12 after:w-12 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-14 peer-checked:after:content-['Yes'] peer-checked:after:border-white"></div>
    </label>
  );
};

export default Toggle;
