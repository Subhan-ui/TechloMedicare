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
      <div className="peer rounded-[5px] outline-none duration-100 after:duration-500 md:w-[89px] md:h-[43px] w-14 h-7 border-[1px] border-red-500 text-white bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-500  after:content-['No'] after:absolute after:outline-none after:rounded-[5px] md:after:h-[32px] md:after:w-[32px] after:w-6 after:h-6 after:bg-red-500 md:after:top-[5.5px] after:top-[2px] after:left-[2px] md:after:left-[10px] after:flex after:justify-center after:items-center  after:text-white after:font-bold md:peer-checked:after:translate-x-9 peer-checked:after:bg-green peer-checked:border-green peer-checked:peer-focus:ring-green peer-checked:after:translate-x-7 peer-checked:after:content-['Yes'] peer-checked:after:border-white"></div>
    </label>
  );
};

export default Toggle;
