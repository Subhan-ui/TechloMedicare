import {
  Calendar as BigCalendar,
  CalendarProps,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import Card from "../scheduleCard/ScheduleCard";

const localizer = momentLocalizer(moment);

export default function Calendar(props: Omit<CalendarProps, "localizer">) {
  return <BigCalendar {...props} localizer={localizer} />;
}

export const components = {
  toolbar: () => {
    return <></>;
  },
  event: (props: any) => {
    const [show, setShow] = useState(false);
    return (
      <div className="bg-white rounded-lg  h-[calc(100%-16px)]">
        {props?.event?.title && (
          <Card
            event={props?.event}
            handleShow={() => setShow((prev) => !prev)}
          />
        )}
      </div>
    );
  },
};
