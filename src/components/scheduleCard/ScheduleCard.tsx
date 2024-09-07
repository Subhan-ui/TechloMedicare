import React, { useEffect, useState } from "react";

import { Person, Clock, LocationI, Notes } from "@/constants/react-icons";
import { AppointmentProps } from "@/types/types";
import { awaiting, recover, treat } from "@/constants/colors";

const Card: React.FC<AppointmentProps> = ({ event }) => {
  const { location, patientName, purpose, start, end } = event;
  const [color, setColor] = useState<string>("");
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  useEffect(() => {
    switch (randomNumber) {
      case 1:
        setColor(awaiting);
        break;
      case 2:
        setColor(recover);
        break;
      case 3:
        setColor(treat);
    }
  }, []);

  return (
    <>
      <div
        className="w-full h-[100%] min-h-4 rounded-lg pt-1"
        style={{ backgroundColor: `${color}4f`, color: color }}
      >
        <p
          className="font-normal text-xs pl-2 border-l-2 h-5 v_center"
          style={{ borderColor: color, backgroundColor: `${color}40` }}
        >
          Pending
        </p>
        <div className="flex flex-col justify-around h-[99px]">
          <div className="v_center gap-3 ml-2 font-normal text-xs">
            <Person size={10} />
            {patientName}
          </div>
          <div className="v_center gap-3 ml-2 font-normal text-xs">
            <Notes size={10} />
            {purpose}
          </div>
          <div className="v_center gap-3 ml-2 font-normal text-xs">
            <Clock size={10} />
            {start.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
            -
            {end.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
          <div className="v_center gap-3 ml-2 font-normal text-xs">
            <LocationI size={10} />
            Room {location}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
