"use client";

import { useState } from "react";

import Bar from "@/components/topBar/TopBar";
import Modals from "@/components/schedule/scheduleModal/modal/Modal";
import Calendar from "../calender/Calender";
import useMonth from "@/hooks/useMonth";
import { Print, Add, Filter, Help } from "@/constants/react-icons";
import { darkGrey } from "@/constants/colors";
import { emailType } from "@/types/types";

const Table: React.FC<emailType> = ({ name, email }) => {
  const [show, setShow] = useState(false);

  const handleShowModal = () => {
    setShow((prev) => !prev);
  };
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const Month = `${useMonth(currentMonth.toString())} ${currentYear}`;

  return (
    <>
      {show && <Modals email={email} name={name} hiding={handleShowModal} />}
      <Bar classN="max:ml-[27px] max:mt-[13px] max:mr-[19px]  max:w-[calc(100vw-300px)]  sm:justify-between justify-center">
        <h1 className="font-medium med:text-xl md:text-lg sm:text-base text-sm">
          Schedule of {Month}
        </h1>
        <div className="v_center  sm:gap-5 gap-2">
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
      <div className="maxi:w-[76vw] max:w-[calc(100vw-300px)]  max:mt-[34px] med:mt-[29px] md:mt-[19px] mt-[28px] max:ml-[27px] md:ml-[24px] ml-[20px] med:w-[calc(100vw-250px)] md:w-[calc(100vw-240px)] w-[94vw] overflow-x-scroll">
        <Calendar email={email} view="week"/>
      </div>
    </>
  );
};

export default Table;
