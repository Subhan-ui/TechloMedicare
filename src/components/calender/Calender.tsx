import { some } from "@/types/types";
import useAppointment from "@/hooks/useAppointment";
import { components } from "../scheduleCalender/CalenderRelated";
import Calendar from "../scheduleCalender/CalenderRelated";

export default function ControlCalendar({ email, view }: some) {
  const data = useAppointment(email);
  return (
    <div className="w-[1463px] h-[calc(100vh-245px)]">
      <Calendar step={5}  view={view} events={data} components={components} />
    </div>
  );
}
