import { card } from "@/models/dashboardCard";
import Card from "./Card";

const Cards = () => {
  const cardData: card[] = [
    {
      id: 1,
      heading: "Offline Consultations",
      number: 101,
      percentage: "+3.11%",
      image: "/assets/dashboard/chart1.svg",
      width: 164,
    },
    {
      id: 2,
      heading: "Online Consultations",
      number: 96,
      percentage: "-20.9%",
      image: "/assets/dashboard/chart2.svg",
      width: 164,
    },
    {
      id: 3,
      heading: "Total Patients",
      number: 197,
      percentage: "",
      image: "/assets/dashboard/chart3.svg",
      width: 119,
    },
  ];

  return (
    <div className="flex gap-[17px]">
      {cardData.map((cart) => (
        <Card
          key={cart.id}
          id={cart.id}
          heading={cart.heading}
          number={cart.number}
          percentage={cart.percentage}
          image={cart.image}
          width={cart.width}
        />
      ))}
    </div>
  );
};
export default Cards;
