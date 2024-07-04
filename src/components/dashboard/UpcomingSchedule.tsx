import { IoAddSharp } from "react-icons/io5";

const UpcomingSchedule = () => {
  return (
    <div className="h-[624.66px] w-[384.41px] bg-white mt-[17px]">
      <div className="flex justify-between mt-[19.61px] mx-[16.67px] ">
        <h1 className="font-mukta font-bold text-base">Upcoming Schedule</h1>
        <div className="v_center gap-3 font-mukta font-semibold text-xs text-[#0000ac]">
          <p>New Appointment{" "}</p>
          <IoAddSharp
            className="border p-1 h-[23.45px] w-[23.45px]"
            color="#0000ac"
            size={18}
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
