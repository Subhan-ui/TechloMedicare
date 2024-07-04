"use client";

import { useState } from "react";
import Checkbox from "../ui/Checkbox";
import { SlOptions } from "react-icons/sl";
import { task } from "@/models/taskCard";

const Task:React.FC<task> = (props) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="v_center justify-between w-[676.63px] h-[101px] bg-[#F5F5F5] pr-[20px] pl-[25.5px] pt-[18.63px]">
      <div className="flex relative bottom-4">
        <Checkbox checked={checked} handleChange={handleChange} />
        <div className="flex flex-col gap-2 mt-1">
          <h4 className="text-base font-mukta font-medium">
            {checked ? "Task completed Successfully" : "Task not completed"}
          </h4>
          <p className="text-xs font-mukta ">
            Sign up for covid - 19 training course for medicine
          </p>
        </div>
      </div>

      <p className="relative bottom-2">24 October 2022</p>

      <SlOptions
        size={24}
        className="relative bottom-8 border-2 p-1 w-[30px] rounded-md h-[30px] border-gray-300"
      />
    </div>
  );
};

export default Task;
