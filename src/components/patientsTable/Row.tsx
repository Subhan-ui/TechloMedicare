"use client";

import { tableContent } from "@/models/table";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Options } from "@/constants/react-icons";

const Row: React.FC<tableContent> = (props) => {
  const [color, setColor] = useState("#1d1d1d");
  useEffect(() => {
    if (props.status === "Recovered") {
      setColor("#27AE60");
    } else if (props.status === "Awaiting Surgery") {
      setColor("#2f80ed");
    } else if ("On Treatment") {
      setColor("#EB5757");
    }
  }, [props.status]);

  return (
    <>
      <tr className="h-[72.57px] font-mukta text-lg text-[#1d1d1d] text-center cursor-pointer">
        <td className="">
          <Image
            src={props.image}
            alt="profile image"
            height={45}
            width={45}
            className="aspect-square rounded-full relative left-14"
          />
        </td>
        <td>{props.name}</td>
        <td>{props.diagnosis}</td>
        <td>
          <div
            className=" w-[140.23px] h-[25.5px] center rounded-full text-center font-mukta text-xs"
            style={{ backgroundColor: `${color}52`, color: color }}
          >
            {props.status}
          </div>
        </td>
        <td>{props.last}</td>
        <td>{props.next}</td>
        <td
          className="relative left-16"
          onClick={() => props.handleShow(props.id)}
        >
          <Options style={{ fontSize: "20px" }} />
        </td>
      </tr>
    </>
  );
};

export default Row;
