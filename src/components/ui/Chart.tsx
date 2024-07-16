import Image from "next/image";
import DonutChart from "react-donut-chart";
import { typeChart } from "@/models/types";

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
    <div className="relative">
      <div className="absolute top-[2.7rem] left-[2.2rem]">
        <p className="text-[#000000] text-xs font-normal font-mukta">
          {female}{" "}
          <span className="font-normal text-xs text-[#2780ed]">Female</span>
        </p>
        <p className="text-[#000000] text-xs font-normal font-mukta">
          {male}{" "}
          <span className="font-normal text-xs text-[#eb5757]">Male</span>
        </p>
      </div>
      <DonutChart
        width={width}
        height={112}
        data={[
          { label: "Male", value: male },
          { label: "Female", value: female },
        ]}
        colors={["#EB5757", "#2F80ED"]}
        legend={false}
        className="font-mukta md:hidden med:inline z-[150]"
        interactive={false}
      />
    </div>
  );
};

export default Chart;
