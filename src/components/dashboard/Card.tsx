import { card } from "@/models/dashboardCard";
import { Options, Upgrade } from "@/constants/react-icons";

import Image from "next/image";
import Chart from "../ui/Chart";
import Loader from "../ui/Loader";

const Card: React.FC<card> = (props) => {
  const color: string = props.percentage === "+3.11%" ? "#27AE60" : "#EB5757";
  return (
    <div className="max:w-[358.91px] med:w-[250px] md:w-[180px] w-full h-[191.22px] bg-white max:p-[22px] med:p-[14px] md:p-[7px] p-[22px] relative">
      {props.loading ? (
        <Loader />
      ) : (
        <>
          <div className="v_center justify-between ">
            <h1 className="font-semibold font-mukta">{props.heading}</h1>
            <Options  className="hidden med:inline"/>
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-4xl font-bold mt-6">{props.number}</h1>

              {props.percentage !== "" && (
                <div className="absolute v_center bottom-8 gap-2">
                  <Upgrade
                    className={`bg-[#27AE60] text-white rounded-full`}
                    style={{ backgroundColor: color }}
                    size={21}
                  />
                  <p className={`text-[#27AE60]`} style={{ color: color }}>
                    {props.percentage}
                  </p>
                </div>
              )}
            </div>
            {props.image ? (
              <Image
                src={props.image}
                alt="chart"
                width={props.width}
                height={112}
                className="md:hidden med:inline"
              />
            ) : (
              <Chart
                male={props.total?.male}
                width={props.width}
                female={props.total?.female}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default Card;
