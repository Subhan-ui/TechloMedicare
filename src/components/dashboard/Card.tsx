import { card } from "@/models/dashboardCard";
import { Options, Upgrade } from "@/constants/react-icons";

import Image from "next/image";

const Card: React.FC<card> = (props) => {
  const color: string = props.percentage === "+3.11%" ? "#27AE60" : "#EB5757";
  return (
    <div className="w-[358.91px] h-[191.22px] bg-white p-[22px] relative">
      <div className="v_center justify-between ">
        <h1 className="font-semibold font-mukta">{props.heading}</h1>
        <Options />
      </div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold mt-6">{props.number}</h1>
          {props.percentage !== "" && (
            <div className="absolute v_center bottom-8 gap-2">
              <Upgrade
                className={`bg-[#27AE60] text-white rounded-full`}
                style={{ backgroundColor:color}}
                size={21}
              />
              <p className={`text-[#27AE60]`} style={{color:color}}>{props.percentage}</p>
            </div>
          )}
        </div>
        <Image src={props.image} alt="chart" width={props.width} height={112} />
      </div>
    </div>
  );
};
export default Card;
