"use client";

import { useState } from "react";

import Modals from "@/components/schedule/scheduleModal/modal/Modal";
import ScheduleDashboard from "../scheduleDashboard/ScheduleDashboard";
import { Add } from "@/constants/react-icons";
import { blue } from "@/constants/colors";
import { emailType } from "@/types/types";

const UpcomingSchedule = ({ name, email }: emailType) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      {show && <Modals email={email} name={name} hiding={handleShow} />}
      <div className="h-[624.66px] maxi:w-[38%] max:w-[384.41px] med:w-full bg-white mt-[20px]">
        <div className="flex justify-between items-center mt-[19.61px] mx-[16.67px] ">
          <h1 className="font-bold md:text-base text-[12px]">
            Upcoming Schedule
          </h1>
          <div
            onClick={handleShow}
            className="cursor-pointer v_center gap-3 font-semibold text-xs text-blue"
          >
            <p>New Appointment </p>
            <Add
              className="border p-1 h-[23.45px] w-[23.45px]"
              color={blue}
              size={18}
            />
          </div>
        </div>
        <ScheduleDashboard email={email} />
      </div>
    </>
  );
};

export default UpcomingSchedule;
