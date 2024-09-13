"use client";

import Image from "next/image";

import useChooseColor from "@/hooks/useChooseColor";
import { tableContent } from "@/types/types";
import { Options } from "@/constants/react-icons";

const Row: React.FC<tableContent> = (props) => {
  const { color } = useChooseColor(props.status);

  return (
    <>
      <tr className="h-[72.57px] text-lg text-black text-start cursor-pointer">
        <td className="">
          <Image
            src={props.image}
            alt="profile image"
            height={45}
            width={45}
            className="aspect-square rounded-full relative left-8"
          />
        </td>
        <td>{props.name}</td>
        <td>{props.diagnosis}</td>
        <td>
          <span
            className=" w-[140.23px] h-[25.5px] center rounded-full text-center text-xs"
            style={{ backgroundColor: `${color}52`, color: color }}
          >
            {props.status}
          </span>
        </td>
        <td>{props.last}</td>
        <td>{props.next}</td>
        <td
          className="relative left-8"
          onClick={() => props.handleShow(props.id)}
        >
          <Options style={{ fontSize: "20px" }} />
        </td>
      </tr>
    </>
  );
};

export default Row;
