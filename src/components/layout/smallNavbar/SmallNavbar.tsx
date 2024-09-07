"use client";

import Image from "next/image";
import { useState } from "react";

import LogoutButton from "../../ui/logoutButton/logoutButton";
import ModalSide from "../modalSide/ModalSide";
import { Burger } from "@/constants/react-icons";
import { lightSlate } from "@/constants/colors";

const SmallNavbar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
      {show && <ModalSide show={show} handleShow={handleShow} />}
      <nav className="md:hidden flex sticky top-0 z-[5000] h-[64px] w-full border-b-2 border-gray-300 bg-white items-center justify-between pl-5 pr-10">
          <Burger size={20} color={lightSlate} onClick={handleShow} />
        <div className="center h-full gap-3">
          <Image
            src="/assets/logo.svg"
            height={30.07}
            width={30.07}
            alt="logo"
          />
          <h1 className="font-normal text-blue text-xl">Medicare</h1>
        </div>

        <div className="gap-[34.9px] v_center">
          
          <LogoutButton size={20} />
        </div>
      </nav>
    </>
  );
};

export default SmallNavbar;
