import { components } from "../scheduleCalender/CalenderRelated";
import Calendar from "../scheduleCalender/CalenderRelated";
import { some } from "@/types/types";
import useAppointment from "@/hooks/useAppointment";

export default function ControlCalendar({ email, view }: some) {
  const data = useAppointment(email);
  return (
    <div className="w-[1463px] h-[750px]">
      <Calendar step={5}  view={view} events={data} components={components} />
    </div>
  );
}
