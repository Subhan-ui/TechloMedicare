import React, { useState } from "react";

import useAppointment from "@/hooks/useAppointment";
import ScheduleDashboardDetail from "../scheduleDashboardDetail/ScheduleDashboardDetail";
import { timeManagement } from "@/hooks/timeManagement";
import { emailType } from "@/types/types";
import { FaCircle, IoIosArrowDown } from "@/constants/react-icons";
import { darkGreen } from "@/constants/colors";

const ScheduleDashboard = ({ email }: emailType) => {
  const data = useAppointment(email);
  const [hoveredId, setHoveredId] = useState<string>("0");
  const [clickedId, setClickedId] = useState<string>("0");

  const handleShow = (id: string) => {
    if (clickedId === id) {
      setClickedId("0");
    }
    setClickedId(id);
  };

  return (
    <div className="flex items-end flex-col mt-[20px] mx-3">
      {data.length === 0 ? (
        <p className="h_center w-full">You don't have any appointments yet.</p>
      ) : (
        data?.map((item, index) => (
          <div key={item?.id} className="justify-between relative flex-col flex w-full">
            <div className="flex flex-col gap-[7px]">
              <div className=" v_center w-[86.7px] gap-[35.7px]">
                <p className="font-normal text-xs text-lightSlate w-[21.7px]">{timeManagement(item?.time)}</p>
                <div className="rounded-full h-[9px] w-[9px] bg-black  flex-shrink-0 relative z-10" />
                {index !== data?.length - 1 && (
                  <div className="absolute left-[61.5px] top-[11px] h-full w-[1px] bg-gray-300" />
                )}
              </div>
              <div className="w-full flex justify-end">
                <div
                  onMouseEnter={() => setHoveredId(item?.id)}
                  onMouseLeave={() => setHoveredId("0")}
                  className={`v_center justify-between pl-3 pr-1 border-lightGrey rounded-md max:w-[272px] maxi:w-[80%] w-[calc(100%-80px)] h-[25px] ${
                    hoveredId === item?.id ? "border-2" : ""
                  }`}
                >
                  <div className="v_center">
                    <p className="center gap-2 relative top-1/2 font-bold text-[10px]">
                      <FaCircle
                        size={6}
                        color={darkGreen}
                        className="relative bottom-1/2"
                      />
                      {timeManagement(item?.time)}
                    </p>
                    <p className="ml-5 font-normal text-xs">
                      {item?.patientName}
                    </p>
                  </div>
                  <p
                    className={`border-2 border-lightGrey rounded-md `}
                    onClick={() => handleShow(item?.id)}
                  >
                    <IoIosArrowDown
                      size={12}
                      className={`${hoveredId === item?.id ? "" : "hidden"}`}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end mt-[9.81px]">
            <ScheduleDashboardDetail
              id={item?.id}
              clickedId={clickedId}
              patientName={item?.patientName}
              time={item?.time}
              duration={item?.duration}
              purpose={item?.purpose}
            /></div>
          </div>
        ))
      )}
    </div>
  );
};

export default ScheduleDashboard;
