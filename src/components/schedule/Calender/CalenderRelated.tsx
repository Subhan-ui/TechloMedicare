import useMonth from "@/hooks/useMonth";
import {
  Calendar as BigCalendar,
  CalendarProps,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import Card from "../Card";

const localizer = momentLocalizer(moment);

export default function Calendar(props: Omit<CalendarProps, "localizer">) {
  return <BigCalendar {...props} localizer={localizer} />;
}

const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth();
const Month = `${useMonth(currentMonth.toString())} ${currentYear}`;

export const components = {
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
