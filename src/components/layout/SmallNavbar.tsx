"use client";

import Image from "next/image";
import { Options, Bell } from "@/constants/react-icons";
import LogoutButton from "../ui/logoutButton";
import { useState } from "react";
import ModalSide from "./ModalSide";

const SmallNavbar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <>
    {show&&<ModalSide handleShow={handleShow}/>}
    <nav className="md:hidden flex font-mukta h-[64px] w-full border-b-2 border-gray-300 bg-white items-center justify-around">
      <div className="center h-full gap-3">
        <Image src="/assets/logo.svg" height={30.07} width={30.07} alt="logo" />
        <h1 className="font-normal text-blue font-mukta text-xl">Medicare</h1>
      </div>

      <div className="gap-[34.9px] v_center">
        <Options size={20} color="#828282" onClick={handleShow}/>
        <Bell size={20} color="#828282" />
        <LogoutButton size={20} />
      </div>
    </nav>
    </>
  );
};

export default SmallNavbar;
