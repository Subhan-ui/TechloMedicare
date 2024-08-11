import DateTimePicker from "react-datetime-picker";
import useDateTime from "@/hooks/useDateTime";

const DateTime: React.FC<{
  onClick: () => void;
}> = ({ onClick }) => {
  const { onChange, handleChange, value } = useDateTime(onClick);

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
