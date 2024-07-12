import Image from "next/image";
import DonutChart from "react-donut-chart";

const Chart = ({
  male,
  female,
  width,
}: {
  width: number;
  male: number | undefined;
  female: number | undefined;
}) => {
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
    <>
      <DonutChart
        width={width}
        height={112}
        data={[
          { label: "Male", value: male },
          { label: "Female", value: female },
        ]}
        colors={["#EB5757", "#2F80ED"]}
        legend={false}
        className="font-mukta md:hidden med:inline"
        interactive={false}
      />
    </>
  );
};

export default Chart;
