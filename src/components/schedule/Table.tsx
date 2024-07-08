'use client'

import Card from "./Card";
import Col from "./Col";
import Bar from "@/components/commonContent/TopBar";
import { Print, Add, Filter, Help } from "@/constants/react-icons";
import Modals from "@/components/schedule/modal/Modal";
import { useEffect, useState } from "react";
import axios from "axios";
import Something from "../ui/Something";
import { EventProps } from "react-big-calendar";


// location,time,duration,name,purpose
type appointmentData = {
  id: string,
  event_id:string,
  title:string,
  location: string;
  time: string;
  nextDate:string;
  duration: string;
  name: string;
  purspose: string;
  online: boolean;
  start: Date;
  end: Date;
}
type cardType = EventProps&{location:string,name:string,purpose:string,start:Date,end:Date}

const calculateEndTime = (startDate: Date, duration: string): Date => {
  const endDate = new Date(startDate);
  endDate.setMinutes(startDate.getMinutes() + Number(duration));
  return endDate;
};

const convertToDateTime = (dateString: string, timeString: string): Date => {
  const date = new Date(dateString);
  const [hours, minutes] = timeString.split(':').map(Number);
  date.setHours(hours, minutes, 0, 0);
  return date;
};

const Table:React.FC<{name:string|undefined|null,email:string|undefined|null}> = ({name,email}) => {
  const [show,setShow]=useState(false);
  const [data,setData]=useState<cardType[]>([])

  useEffect(() => {
    (async () => {
      if (email) {
        try {
          const response = await axios.get(`/api/appointment/get?email=${email}`);
          const transformedData = response.data.map((appointment: appointmentData) => {
            const start = convertToDateTime(appointment.nextDate, appointment.time);
            const end = calculateEndTime(start, appointment.duration);

            return {
              ...appointment,
              start: start,
              end: end,
              event_id: appointment.id,
              title: appointment.name
            };
          });
          
          setData(transformedData);
        } catch (error) {
          console.error('Error fetching appointments:', error);
        }
      }
    })();
  }, [email]);
  
  const handleShowModal = ()=>{
    setShow(prev=>!prev);
  }

  return (
    <>
      {show && <Modals email={email} name={name} hiding={handleShowModal} />}
      <Bar classN="justify-between">
        <h1 className="font-mukta font-medium text-xl">Weekly schedule from 25th to 1st November 2022</h1>
        <div className="v_center gap-5">
          <Add onClick={handleShowModal} className="border p-1 h-[40px] w-[40px]" color="#333333" size={18} />
          <Filter className="border p-1 h-[40px] w-[40px]" color="#333333" size={25} />
          <Print className="border p-1 h-[40px] w-[40px]" color="#333333" size={25} />
          <Help className="border p-1 h-[40px] w-[40px]" color="#333333" size={26} />
        </div>
      </Bar>
      <Something data={data} />
    </>
  );
};

export default Table;
{/* <div className="w-[1139px] overflow-scroll h-[750px] flex bg-white mx-auto  mt-[17px] relative">
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
</div> */}

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
