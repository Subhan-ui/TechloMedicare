"use client";

import Bar from "@/components/commonContent/TopBar";
import { Print, Add, Filter, Help } from "@/constants/react-icons";
import Modals from "@/components/schedule/modal/Modal";
import { useState } from "react";
import Something from "../ui/Something";

const Table: React.FC<{
  name: string | undefined | null;
  email: string | undefined | null;
}> = ({ name, email }) => {
  const [show, setShow] = useState(false);

  const handleShowModal = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      {show && <Modals email={email} name={name} hiding={handleShowModal} />}
      <Bar classN="justify-between">
        <h1 className="font-mukta font-medium text-xl">
          Weekly schedule from 25th to 1st November 2022
        </h1>
        <div className="v_center gap-5">
          <Add
            onClick={handleShowModal}
            className="border p-1 h-[40px] w-[40px]"
            color="#333333"
            size={18}
          />
          <Filter
            className="border p-1 h-[40px] w-[40px]"
            color="#333333"
            size={25}
          />
          <Print
            className="border p-1 h-[40px] w-[40px]"
            color="#333333"
            size={25}
          />
          <Help
            className="border p-1 h-[40px] w-[40px]"
            color="#333333"
            size={26}
          />
        </div>
      </Bar>
      <Something email={email} />
    </>
  );
};

export default Table;
