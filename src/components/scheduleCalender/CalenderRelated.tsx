import {
  Calendar as BigCalendar,
  CalendarProps,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";

import Card from "../scheduleCard/ScheduleCard";

const localizer = momentLocalizer(moment);

export default function Calendar(props: Omit<CalendarProps, "localizer">) {
  return (
    <BigCalendar
      style={{ backgroundColor: "white" }}
      {...props}
      localizer={localizer}
    />
  );
}

export const components = {
  toolbar: () => {
    return <></>;
  },
  event: (props: any) => {
    return (
      <div className="bg-white rounded-lg  h-[calc(100%-16px)]">
        {props?.event?.title && <Card event={props?.event} />}
      </div>
    );
  },
};
