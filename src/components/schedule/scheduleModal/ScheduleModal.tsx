import { Cross, Person, Clock, LocationI, Bell } from "@/constants/react-icons";
import Button from "../scheduleModalButton/Button";
import Toggle from "@/components/ui/scheduleModalToggle/ScheduleModalToggle";
import DateTime from "../changeDateTime/DateTime";
import Location from "../changeLocation/Location";
import useSchedule from "@/hooks/useSchedule";
import { ModalProps } from "@/types/types";
import { awaiting, darkGrey } from "@/constants/colors";

const ScheduleModal: React.FC<ModalProps> = ({ hiding, name, email }) => {
  const {
    dateTime,
    locations,
    date,
    time,
    location,
    patient,
    purpose,
    statuses,
    durations,
    types,
    online,
    loading,
    setDateTimeFalse,
    setDateTimeTrue,
    setLocationFalse,
    setLocationTrue,
    handleSubmit,
    handleChanges,
    handleChangeText,
    handleChangeToggle,
  } = useSchedule(email);

  return (
    <form
      onSubmit={handleSubmit}
      className="block absolute z-[250] top-16 left-1/2 transform -translate-x-1/2 rounded-lg w-[760.2px] bg-white"
    >
      {dateTime && <DateTime onClick={setDateTimeFalse} />}
      {locations && <Location onClick={setLocationFalse} />}
      <div className="text-white bg-blue w-full h-[82px] v_center justify-between px-6">
        <h2 className="font-mukta font-bold text-2xl ">New Appointment</h2>
        <Cross size={24} onClick={hiding} className="cursor-pointer" />
      </div>
      <div className="mt-7 flex justify-around">
        <div className="v_center gap-1 flex-col">
          <Person size={24} color={awaiting} />
          <h2 className="font-mukta text-lg text-awaiting">Practitioner</h2>
          <p className="font-mukta text-base">{name}</p>
          <p className="font-mukta font-bold text-base">General Doctor</p>
        </div>
        <div className="v_center gap-1 flex-col">
          <Clock size={24} color={awaiting} />
          <h2 className="font-mukta text-lg text-awaiting">Date and Time</h2>
          <p className="font-mukta text-base">{date}</p>
          <p className="font-mukta font-bold text-base">{time}</p>
          <p
            onClick={setDateTimeTrue}
            className="font-mukta text-xs text-awaiting cursor-pointer"
          >
            Change
          </p>
        </div>
        <div className="v_center gap-1 flex-col">
          <LocationI size={24} color={awaiting} />
          <h2 className="font-mukta text-lg text-awaiting">Location</h2>
          <p className="font-mukta text-base">General Clinic</p>
          <p className="font-mukta font-bold text-base">Room {location}</p>
          <p
            onClick={setLocationTrue}
            className="font-mukta text-xs text-awaiting cursor-pointer"
          >
            Change
          </p>
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
        <Cross
          className="absolute right-40 bottom-[1.08rem]"
          color={darkGrey}
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
          {statuses.map((status) => (
            <Button
              name="status"
              value={status.value}
              onChange={status.onChange}
              key={status.id}
            >
              {status.child}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-4 relative left-10 v_center">
        Duration
        <div className="ml-[150px] flex gap-3">
          {durations.map((duration) => (
            <Button
              key={duration.id}
              name={duration.name}
              value={duration.value}
              onChange={duration.onChange}
            >
              {duration.num}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-4 relative left-10 v_center">
        Appointment Type
        <div className="ml-[83px] flex gap-3">
          {types.map((type) => (
            <Button
              name="type"
              value={type.value}
              onChange={type.onchange}
              key={type.id}
            >
              {type.child}
            </Button>
          ))}
        </div>
      </div>
      <div className="mt-4 relative left-10 v_center">
        Online Consultations
        <Toggle isChecked={online} handleChange={handleChangeToggle} />
      </div>
      <div>
        <div className="v_center gap-3 ml-7 mt-16">
          <Bell size={30} />
          <p className="font-mukta font-bold text-lg">Send Notifications</p>
        </div>
        <p className="font-mukta text-darkGrey text-base mx-7 mt-2">
          Appointment confirmation and reminder messages will be automatically
          sent to clinic SMS notification settings.
        </p>

        <div className="v_center justify-end mx-20 gap-5 my-12">
          <button
            type="button"
            onClick={hiding}
            className="font-mukta font-medium text-base py-2 px-3 text-black"
          >
            Cancel
          </button>
          <button
            type="button"
            className="font-mukta font-medium text-base py-2 px-3 bg-blue text-white rounded-lg border-2 border-blue"
          >
            Begin Appointment
          </button>
          <button
            disabled={loading}
            className="disabled:bg-disabled font-mukta font-medium text-base py-2 px-3 text-blue rounded-lg border-2 border-blue"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ScheduleModal;
