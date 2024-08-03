"use client";

import { tableContent } from "@/types/table";
import { Options } from "@/constants/react-icons";
import Image from "next/image";
import useChooseColor from "@/hooks/useChooseColor";

const Row: React.FC<tableContent> = (props) => {
  const { color } = useChooseColor(props.status);

  return (
    <>
      <tr className="h-[72.57px] font-mukta text-lg text-black text-center cursor-pointer">
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
          <span
            className=" w-[140.23px] h-[25.5px] center rounded-full text-center font-mukta text-xs"
            style={{ backgroundColor: `${color}52`, color: color }}
          >
            {props.status}
          </span>
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
