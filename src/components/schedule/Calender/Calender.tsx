import { components } from "./CalenderRelated";
import Calendar from "./CalenderRelated";
import { emailType } from "@/models/types";
import useAppointment from "@/hooks/useAppointment";

export default function ControlCalendar({ email }: emailType) {
  const data = useAppointment(email);
  return (
    <div className="w-[1139px] h-[750px]">
      <Calendar events={data} components={components} />
    </div>
  );
}
