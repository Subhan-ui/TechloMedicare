import React from "react";

import { checkbox } from "@/types/types";

const Checkbox: React.FC<checkbox> = (props) => (
  <div className={`w-10 h-10 rounded-lg ${props.checked?'bg-[#0075ff]':"bg-white"}`}>
    <label className="text-white ">
      <input
        checked={props.checked}
        onChange={props.handleChange}
        className=" dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-75 w-10 h-10 rounded-lg bg-lightGray"
        type="checkbox"
      />
    </label>
  </div>
 
);

export default Checkbox;
