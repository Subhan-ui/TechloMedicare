import { IoCloseSharp } from "react-icons/io5";
import { GoPerson, GoClock, GoLocation } from "react-icons/go";
import { FaRegBell } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Button from "./Button";
import Toggle from "@/components/ui/ScheduleModalToggle";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  handleChange,
  handleOnline,
  selectDate,
  selectDuration,
  selectLocation,
  selectOnline,
  selectPatient,
  selectPurpose,
  selectStatus,
  selectTime,
  selectType,
} from "@/store/features/appointment/appointmentSlice";
import { useState } from "react";
import DateTime from "./change/DateTime";
import Location from "./change/Location";
import axios from "axios";
import toast from "react-hot-toast";


type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


const ScheduleModal: React.FC<{
  hiding: () => void;
  name: string | null | undefined;
  email: string | null | undefined;
}> = ({ hiding, name,email }) => {
  const date = useAppSelector(selectDate);
  const time = useAppSelector(selectTime);
  const location = useAppSelector(selectLocation);
  const patient = useAppSelector(selectPatient);
  const purpose = useAppSelector(selectPurpose);
  const status = useAppSelector(selectStatus);
  const duration = useAppSelector(selectDuration);
  const type = useAppSelector(selectType);
  const online = useAppSelector(selectOnline);
  const [dateTime,setDateTime] = useState(false);
  const [locations,setLocation] = useState(false);
  const [loading,setLoading] = useState(false);
  

  const dispatch = useAppDispatch();

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };
  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Assuming data is from component state
      const dataToSend = {
        date,
        time,
        location,
        patientName:patient,
        purpose,
        status,
        duration,
        type,
        online,
      };

      // Implement data validation if needed (using Yup, Zod, etc.)

      const response = await axios.post(`/api/appointment/add/${email}`, dataToSend);
      if (response.status === 201) {
        toast.success('Successfully added appointment');
      } else {
        toast.error(response.data.message || 'Failed to add appointment');
      }
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        console.error('Error creating appointment:', error);
        toast.error('An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="block absolute z-[250] top-16 left-1/2 transform -translate-x-1/2 rounded-lg w-[760.2px] bg-white"
    >
      {dateTime&&(<DateTime onClick={()=>setDateTime(false)} />)}
      {locations&&(<Location onClick={()=>setLocation(false)} />)}
      <div className="text-white bg-[#0000ac] w-full h-[82px] v_center justify-between px-6">
        <h2 className="font-mukta font-bold text-2xl ">New Appointment</h2>
        <IoCloseSharp size={24} onClick={hiding} className="cursor-pointer" />
      </div>
      <div className="mt-7 flex justify-around">
        <div className="v_center gap-1 flex-col">
          <GoPerson size={24} color="#2f80ed" />
          <h2 className="font-mukta text-lg text-[#2f80ed]">Practitioner</h2>
          <p className="font-mukta text-base">{name}</p>
          <p className="font-mukta font-bold text-base">General Doctor</p>
        </div>
        <div className="v_center gap-1 flex-col">
          <GoClock size={24} color="#2f80ed" />
          <h2 className="font-mukta text-lg text-[#2f80ed]">Date and Time</h2>
          <p className="font-mukta text-base">{date}</p>
          <p className="font-mukta font-bold text-base">{time}</p>
          <p onClick={()=>setDateTime(true)} className="font-mukta text-xs text-[#2f80ed] cursor-pointer">Change</p>
        </div>
        <div className="v_center gap-1 flex-col">
          <GoLocation size={24} color="#2f80ed" />
          <h2 className="font-mukta text-lg text-[#2f80ed]">Location</h2>
          <p className="font-mukta text-base">General Clinic</p>
          <p className="font-mukta font-bold text-base">Room {location}</p>
          <p onClick={()=>setLocation(true)} className="font-mukta text-xs text-[#2f80ed] cursor-pointer">Change</p>
        </div>
      </div>
      <div className="relative left-10 mt-20 v_center">
        Patient
        <input
          value={patient}
          name="patient"
          onChange={handleChanges}
          type="text"
          className="w-[415px] px-3 h-[44px] ml-40 border-2 border-gray-300"
          placeholder=""
        />
        <ImCross
          className="absolute right-40 bottom-[1.08rem]"
          color="#333333"
          size={12}
        />
      </div>
      <div className="relative left-10 mt-4 v_center">
        Purpose of Visit
        <textarea
          name="purpose"
          value={purpose}
          onChange={handleChangeText}
          id="notes"
          className="w-[415px] ml-[98px] h-[103px] px-3 border-2 border-gray-300"
        ></textarea>
      </div>
      <div className="mt-4 relative left-10 v_center">
        Appointment Status
        <div className="ml-[70px] flex gap-3">
          <Button name="status" value={status} onChange={()=>dispatch(handleChange({name:'status', value: 'Confirmation Required'}))}>Confirmation Required</Button>
          <Button name="status" value={status} onChange={()=>dispatch(handleChange({name:'status', value: 'Confirmed'}))}>Confirmed</Button>
        </div>
      </div>
      <div className="mt-4 relative left-10 v_center">
        Duration
        <div className="ml-[150px] flex gap-3">
          <Button name="duration" value={duration} onChange={()=>dispatch(handleChange({name:'duration',value:'10\''}))}>10'</Button>
          <Button name="duration" value={duration} onChange={()=>dispatch(handleChange({name:'duration',value:'30\''}))}>30'</Button>
          <Button name="duration" value={duration} onChange={()=>dispatch(handleChange({name:'duration',value:'45\''}))}>45'</Button>
          <Button name="duration" value={duration} onChange={()=>dispatch(handleChange({name:'duration',value:'60\''}))}>60'</Button>
          <Button name="duration" value={duration} onChange={()=>dispatch(handleChange({name:'duration',value:'90\''}))}>90'</Button>
          <Button name="duration" value={duration} onChange={()=>dispatch(handleChange({name:'duration',value:'120\''}))}>120'</Button>
        </div>
      </div>
      <div className="mt-4 relative left-10 v_center">
        Appointment Type
        <div className="ml-[83px] flex gap-3">
          <Button name="type" value={type} onChange={()=>dispatch(handleChange({name:'type',value:'First time'}))}>First time</Button>
          <Button name="type" value={type} onChange={()=>dispatch(handleChange({name:'type',value:'Followup visit'}))}>Followup visit</Button>
        </div>
      </div>
      <div className="mt-4 relative left-10 v_center">
        Online Consultations
        <Toggle isChecked={online} handleChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
          const  {checked} = e.target;
          dispatch(handleOnline(checked))
          
        }} />
      </div>
      <div>
        <div className="v_center gap-3 ml-7 mt-16">
          <FaRegBell size={30} />
          <p className="font-mukta font-bold text-lg">Send Notifications</p>
        </div>
        <p className="font-mukta text-[#333333] text-base mx-7 mt-2">
          Appointment confirmation and reminder messages will be automatically
          sent to clinic SMS notification settings.
        </p>

        <div className="v_center justify-end mx-20 gap-5 my-12">
          <button
          type="button"
            onClick={hiding}
            className="font-mukta font-medium text-base py-2 px-3 text-black"
          >
            Cancel{" "}
          </button>
          <button type="button" className="font-mukta font-medium text-base py-2 px-3 bg-[#0000ac] text-white rounded-lg border-2 border-[#0000ac]">
            Begin Appointment{" "}
          </button>
          <button  className="font-mukta font-medium text-base py-2 px-3 text-[#0000ac] rounded-lg border-2 border-[#0000ac]">
            {loading?'Saving...':'Save'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ScheduleModal;
