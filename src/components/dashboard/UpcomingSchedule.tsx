"use client";

import { Add } from "@/constants/react-icons";
import Modals from "@/components/schedule/modal/Modal";
import { useState } from "react";

const UpcomingSchedule = ({
  name,
  email,
}: {
  name: string | undefined | null;
  email: string | null | undefined;
}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      {show && <Modals email={email} name={name} hiding={handleShow} />}
      <div className="h-[624.66px] w-[384.41px] bg-white mt-[17px]">
        <div className="flex justify-between mt-[19.61px] mx-[16.67px] ">
          <h1 className="font-mukta font-bold text-base">Upcoming Schedule</h1>
          <div
            onClick={handleShow}
            className="cursor-pointer v_center gap-3 font-mukta font-semibold text-xs text-[#0000ac]"
          >
            <p>New Appointment </p>
            <Add
              className="border p-1 h-[23.45px] w-[23.45px]"
              color="#0000ac"
              size={18}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingSchedule;
