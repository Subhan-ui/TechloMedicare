"use client";

import Card from "../card/Card";
import useHandleCards from "@/hooks/useHandleCards";
import { emailType } from "@/types/types";

const Cards = ({ email }: emailType) => {
  const { cardData, total } = useHandleCards({ email });

  return (
    <div className="flex max:gap-[19px] med:gap-[13px] md:gap-[15px] md:flex-row flex-col w-[100vw-44px] gap-8">
      {cardData.map((cart) => (
        <Card
          email={email}
          loading={cart.loading}
          key={cart.id}
          id={cart.id}
          heading={cart.heading}
          number={cart.number}
          percentage={cart.percentage}
          image={cart?.image}
          total={total}
        />
      ))}
    </div>
  );
};

export default Cards;
