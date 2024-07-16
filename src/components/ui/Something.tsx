import {
  Calendar as BigCalendar,
  CalendarProps,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import Card from "../schedule/Card";
import { emailType } from "@/models/types";
import useMonth from "@/hooks/useMonth";
import useAppointment from "@/hooks/useAppointment";

const localizer = momentLocalizer(moment);

function Calendar(props: Omit<CalendarProps, "localizer">) {
  return <BigCalendar {...props} localizer={localizer} />;
}

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const Month = `${useMonth(currentMonth.toString())} ${currentYear}`;

const components = {
  toolbar: () => {
    return (
      <div className="center h-[60px]">
        <p className="font-bold text-lg">{Month}</p>
      </div>
    );
  },
  event: (props: any) => {
    const [show, setShow] = useState(false);
    return (
      <>
        {show && (
          <Card
            event={props?.event}
            handleShow={() => setShow((prev) => !prev)}
          />
        )}
        <div
          onClick={() => setShow((prev) => !prev)}
          style={{ background: "black", color: "white", height: "100%" }}
        >
          {props?.event?.title}
        </div>
      </>
    );
  },
};

export default function ControlCalendar({ email }: emailType) {
  const data = useAppointment(email);
  return <Calendar events={data} components={components} />;
}
