import { timeManagement, timeDurationManage } from "@/hooks/timeManagement";
import { AiOutlineDelete, Person, FiEdit } from "@/constants/react-icons";
import { deletingAppointment } from "@/hooks/useAppointment";
import { scheduleDashboardType } from "@/types/types";

const ScheduleDashboardDetail = ({
  clickedId,
  id,
  patientName,
  time,
  duration,
  purpose,
}: scheduleDashboardType) => {
    return(
  clickedId === id && (
    <>
      <div className="w-[273px]  h-[121px] border-2 relative border-lightGrey">
        <div className="flex font-mukta mx-[11.7px]  items-center">
          <p className="font-semibold text-[10.79px] text-black mt-[7.85px]">
            Patient
          </p>
          <p className="text-[10.79px] text-black absolute left-[75px] mt-[7.85px]">
            {patientName}
          </p>
        </div>
        <div className="flex font-mukta mx-[11.7px]  items-center">
          <p className="font-semibold text-[10.79px] text-black mt-[7.85px]">
            Time
          </p>
          <p className="text-[10.79px] text-black absolute left-[75px] mt-[7.85px]">
            {timeManagement(time) + " - " + timeDurationManage(time, duration)}
          </p>
        </div>
        <div className="flex font-mukta mx-[11.7px]  items-center">
          <p className="font-semibold text-[10.79px] text-black mt-[7.85px]">
            Purpose
          </p>
          <p className="text-[10.79px] text-black absolute left-[75px] mt-[7.85px]">
            {purpose}
          </p>
        </div>
        <div className="border-[1px]  border-lightGrey w-[270px]  absolute top-[84.33px]" />
        <div className="v_center  absolute top-[92px] justify-around">
          <div className="flex gap-3 ml-[11.7px]">
            <p className="h-[17.6px] w-[17.61px] border-[1px] border-lightGrey rounded-[5.88px] center">
              <AiOutlineDelete color="red" size={8} onClick={()=>deletingAppointment(id)} />
            </p>
            <p className="h-[17.6px] w-[17.61px] border-[1px] border-lightGrey rounded-[5.88px] center">
              <Person color="blue" size={8} />
            </p>
            <p className="h-[17.6px] w-[17.61px] border-[1px] border-lightGrey rounded-[5.88px] center">
              <FiEdit color="blue" size={8} />
            </p>
          </div>
          <button className="font-mukta font-medium text-[10px] text-white h-[25px] w-[100px] bg-blue rounded-sm absolute left-[162px]">
            Begin Appointment
          </button>
        </div>
      </div>
    </>
  )
)
};

export default ScheduleDashboardDetail;
