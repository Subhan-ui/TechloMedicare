import React from "react";
import { Person, Clock, LocationI, Notes } from "@/constants/react-icons";
import Modal from "../modals/modal/Modal";
import {AppointmentProps} from '@/types/types'
import { awaiting } from "@/constants/colors";

const Card: React.FC<AppointmentProps> = ({ event, handleShow }) => {
  const color = awaiting;
  const { location, patientName, purpose, start, end } = event;

  return (
    <>
      <Modal className="fixed" hiding={handleShow}>
        <div
          className="w-[187px] h-[119px] rounded-lg pt-1"
          style={{ backgroundColor: `${color}4f`, color: color }}
        >
          <p
            className="font-mukta font-normal text-xs pl-2 border-l-2 h-5 v_center"
            style={{ borderColor: color, backgroundColor: `${color}40` }}
          >
            Pending
          </p>
          <div className="flex flex-col justify-around h-[99px]">
            <div className="v_center gap-3 ml-2 font-mukta font-normal text-xs">
              <Person size={10} />
              {patientName}
            </div>
            <div className="v_center gap-3 ml-2 font-mukta font-normal text-xs">
              <Notes size={10} />
              {purpose}
            </div>
            <div className="v_center gap-3 ml-2 font-mukta font-normal text-xs">
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
            <div className="v_center gap-3 ml-2 font-mukta font-normal text-xs">
              <LocationI size={10} />
              Room {location}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Card;
