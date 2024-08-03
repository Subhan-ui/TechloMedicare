import Image from "next/image";
import DonutChart from "react-donut-chart";
import { typeChart } from "@/types/types";
import { awaiting, mutedRed } from "@/constants/colors";

const Chart = ({ male, female, width }: typeChart) => {
  if (male === undefined || female === undefined) {
    return (
      <>
        <Image
          src="/assets/dashboard/chart3.svg"
          alt="chart"
          width={width}
          height={112}
        />
      </>
    );
  }
  return (
    <div className="relative md:hidden med:block">
      <div className="absolute top-[2.7rem] left-[2.2rem]">
        <p className="text-black text-xs font-normal font-mukta">
          {female}
          <span className="font-normal text-xs ml-1 text-awaiting">Female</span>
        </p>
        <p className="text-black text-xs font-normal font-mukta">
          {male}
          <span className="font-normal text-xs ml-1 text-mutedRed">Male</span>
        </p>
      </div>
      <DonutChart
        width={width}
        height={112}
        data={[
          { label: "Male", value: male },
          { label: "Female", value: female },
        ]}
        colors={[mutedRed, awaiting]}
        legend={false}
        className="font-mukta md:hidden med:inline z-[150]"
        interactive={false}
      />
    </div>
  );
};

export default Chart;
