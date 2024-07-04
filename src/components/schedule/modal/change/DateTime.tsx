import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { useAppDispatch } from "@/store/hooks";
import { handleDateTime } from "@/store/features/appointment/appointmentSlice";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const DateTime: React.FC<{
  onClick: () => void;
}> = ({ onClick }) => {
    const dispatch = useAppDispatch();
    const [value, onChange] = useState<Value>(new Date());
    const handleChange = ()=>{
        dispatch(handleDateTime(value))
        onChange;
        onClick();
    }
    
  return (
    <div className="flex flex-col absolute left-72 top-24 bg-white h-48 w-66 gap-3 p-7 border-2 border-black ">
      <DateTimePicker onChange={onChange} value={value} />
      <button
        type="button"
        className="bg-black text-white border-2 border-white hover:bg-white hover:border-black hover:text-black py-2 px-4"
        onClick={handleChange}
      >
        OK
      </button>
      <button
        type="button"
        className="bg-black text-white border-2 border-white hover:bg-white hover:border-black hover:text-black py-2 px-4"
        onClick={onClick}
      >
        Close
      </button>
    </div>
  );
};

export default DateTime;
