import React, { useEffect, useState } from "react";

import { Person, Clock, LocationI, Notes } from "@/constants/react-icons";
import { AppointmentProps } from "@/types/types";
import { awaiting, recover, treat } from "@/constants/colors";

const Card: React.FC<AppointmentProps> = ({ event }) => {
  const { location, patientName, purpose, start, end } = event;
  const [color, setColor] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [duration, setDuration] = useState<number>(0);
  useEffect(() => {
    switch (event.patientRecordNumber) {
      case 1:
        setColor(awaiting);
        setText("Awaiting Surgery")
        break;
        case 2:
        setText("Recovered")
        setColor(recover);
        break;
        default:
        setText("On treatment")
        setColor(treat);
    }
    const startTime = new Date(start);
const endTime = new Date(end);

const durationInMilliseconds = endTime.getTime() - startTime.getTime();

setDuration(Math.floor(durationInMilliseconds / (1000 * 60)))
  }, []);
  return (
    <>
      <div
        className="w-full h-[100%] min-h-[8rem] rounded-lg pt-1"
        style={{ backgroundColor: `${color}4f`, color: color }}
      >
        <p
          className="font-normal text-xs pl-2 border-l-2 h-5 v_center"
          style={{ borderColor: color, backgroundColor: `${color}40` }}
        >
          {text}
        </p>
        <div className="flex flex-col gap-[7%] h-[75%] pt-[5px]">
          <div className="v_center gap-3 ml-2 font-normal text-xs">
            <Person size={10} />
            {patientName}
          </div>
          {duration>=45&&<div className="v_center gap-3 ml-2 font-normal text-xs">
            <Notes size={10} />
            {purpose}
          </div>}
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
          {duration>=10&&<div className="v_center gap-3 ml-2 font-normal text-xs">
            <LocationI size={10} />
            Room {location}
          </div>}
        </div>
      </div>
    </>
  );
};

export default Card;
