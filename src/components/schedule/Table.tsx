'use client'

import Card from "./Card";
import Col from "./Col";
import Bar from "@/components/commonContent/TopBar";
import {
  IoPrintOutline,
  IoAddSharp,
  IoFunnelOutline,
  IoHelpCircleOutline,
} from "react-icons/io5";
import Modals from "@/components/schedule/modal/Modal";
import { useState } from "react";


const Table:React.FC<{name:string|undefined|null}> = ({name}) => {
  const [show,setShow]=useState(false);
  
  const handleShowModal = ()=>{
    setShow(prev=>!prev);
  }

  return (
    <>
    {show&&<Modals name={name} hiding={handleShowModal}/>}
    <Bar classN="justify-between">
        <h1 className="font-mukta font-medium text-xl">
        Weekly schedule from 25th  to 1st November 2022
        </h1>
        <div className="v_center gap-5">
          <IoAddSharp
            onClick={handleShowModal}
            className="border p-1 h-[40px] w-[40px]"
            color="#333333"
            size={18}
          />
          <IoFunnelOutline
            className="border p-1 h-[40px] w-[40px]"
            color="#333333"
            size={25}
          />
          <IoPrintOutline
            className="border p-1 h-[40px] w-[40px]"
            color="#333333"
            size={25}
          />
          <IoHelpCircleOutline
            className="border p-1 h-[40px] w-[40px]"
            color="#333333"
            size={26}
          />
        </div>
      </Bar>
    <div className="w-[1139px] overflow-scroll h-[750px] flex bg-white mx-auto  mt-[17px] relative">
      <div className="w-[269px]">
        <Col day="Mon" />
      </div>
      <div className="w-[190px]">
        <Col day="Tue" />
      </div>
      <div className="w-[190px]">
        <Col day="Wed" />
      </div>
      <div className="w-[190px]">
        <Col day="Thur" />
      </div>
      <div className="w-[190px]">
        <Col day="Fri" />
      </div>
      <div className="w-[190px]">
        <Col day="Sat" />
      </div>
      <p className="absolute top-[87px] bg-white">9:00</p>
      <p className="absolute top-[277px] bg-white">10:00</p>
      <p className="absolute top-[467px] bg-white">11:00</p>
      <p className="absolute top-[657px] bg-white">12:00</p>
    </div>
    </>
  );
};

export default Table;

// <Card
// color="#2f80ed"
// name="John Doe"
// reason="Medical Appointment"
// time="9:00 - 9:45"
// location="General Hospital"
// />
// <Card
// color="#EB5757"
// name="John Doe"
// reason="Medical Appointment"
// time="9:00 - 9:45"
// location="General Hospital"
// />
// <Card
// color="#27AE60"
// name="John Doe"
// reason="Medical Appointment"
// time="9:00 - 9:45"
// location="General Hospital"
// />
