import { checkbox } from "@/types/types";
import React from "react";

const Checkbox: React.FC<checkbox> = (props) => (
  <div>
    <label className="text-white">
      <input
        checked={props.checked}
        onChange={props.handleChange}
        className="rounded-[10px] dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-10 h-10"
        type="checkbox"
      />
    </label>
  </div>
);

export default Checkbox;
