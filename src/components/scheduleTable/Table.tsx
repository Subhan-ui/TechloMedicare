"use client";

import Bar from "@/components/bar/TopBar";
import { Print, Add, Filter, Help } from "@/constants/react-icons";
import Modals from "@/components/schedule/scheduleModal/Modal";
import { useState } from "react";
import Something from "../calender/Calender";
import { darkGrey } from "@/constants/colors";
import { emailType } from "@/types/types";

const Table: React.FC<emailType> = ({ name, email }) => {
  const [show, setShow] = useState(false);

  const handleShowModal = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      {show && <Modals email={email} name={name} hiding={handleShowModal} />}
      <Bar classN="sm:justify-between justify-center">
        <h1 className="font-mukta font-medium med:text-xl md:text-lg sm:text-base text-sm">
          Weekly schedule from 25th to 1st November 2022
        </h1>
        <div className="v_center sm:gap-5 gap-2">
          <Add
            onClick={handleShowModal}
            className="border p-1 med:h-[40px] med:w-[40px] w-[30px] h-[30px] "
            color={darkGrey}
            size={18}
          />
          <Filter
            className="border p-1 med:h-[40px] med:w-[40px] w-[30px] h-[30px]"
            color={darkGrey}
            size={25}
          />
          <Print
            className="border p-1 med:h-[40px] med:w-[40px] w-[30px] h-[30px]"
            color={darkGrey}
            size={25}
          />
          <Help
            className="border p-1 med:h-[40px] med:w-[40px] w-[30px] h-[30px]"
            color={darkGrey}
            size={26}
          />
        </div>
      </Bar>
      <div className="max:w-[1139px]  med:w-[780px] md:w-[550px] w-[90vw] overflow-x-scroll">
        <Something email={email} />
      </div>
    </>
  );
};

export default Table;
