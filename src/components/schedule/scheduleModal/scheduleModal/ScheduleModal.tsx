import { Cross, Person, Clock, LocationI, Bell } from "@/constants/react-icons";
import Button from "../../button/Button";
import Toggle from "@/components/ui/scheduleModalToggle/ScheduleModalToggle";
import DateTime from "../../dateTime/DateTime";
import Location from "../../location/Location";
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
    <><form
      onSubmit={(e) => {
        handleSubmit(e);
        hiding();
      }}
      className="block absolute z-[6000] top-16 left-1/2 transform -translate-x-1/2 rounded-lg md:w-[760.2px] w-[calc(100%-32px)] bg-white"
    >
      {dateTime && <DateTime onClick={setDateTimeFalse} />}
      {locations && <Location onClick={setLocationFalse} />}
      <div className="text-white bg-blue w-full h-[82px] v_center justify-between px-6">
        <h2 className="font-mukta font-bold md:text-2xl text-lg ">New Appointment</h2>
        <Cross size={24} onClick={hiding} className="cursor-pointer" />
      </div>
      <div className="mt-7 flex justify-around">
        <div className="v_center gap-1 flex-col md:flex hidden">
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
      <div className="relative md:left-10 left-3 mt-20 v_center sm:justify-start justify-between md:w-[550px] w-[calc(100%-32px)]">
        <p className="md:text-[18px] text-sm font-mukta">Patient</p>
        <input
          value={patient}
          name="patient"
          onChange={handleChanges}
          type="text"
          className="md:w-[415px] sm:w-[50%] w-[100%-120px] px-3 md:h-[44px] h-[32px] md:ml-40 sm:ml-32 ml-7 border-2 border-gray-300"
          placeholder=""
        />
        <Cross
          className="absolute right-40 bottom-[1.08rem] md:block hidden"
          color={darkGrey}
          size={12}
        />
      </div>
      <div className="relative md:left-10 left-3 mt-4 v_center sm:justify-start justify-between md:w-[550px] w-[calc(100%-32px)]">
      <p className="md:text-[18px] text-sm font-mukta">Purpose of Visit</p>
        <textarea
          name="purpose"
          value={purpose}
          onChange={handleChangeText}
          id="notes"
          className="md:w-[415px] sm:w-[50%] w-[100%-120px] md:ml-[98px] sm:ml-[66px] ml-4 md:h-[103px] h-[70px] px-3 border-2 border-gray-300"
        ></textarea>
      </div>
      <div className="mt-4 relative md:left-10 left-3 v_center sm:justify-start justify-between md:w-[550px] w-[calc(100%-32px)]">
      <p className="md:text-[18px] text-sm font-mukta">Appointment Status</p>
        <div className="md:ml-[70px] sm:ml-[29px] ml-[6px] flex md:gap-3 gap-1">
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
      <div className="mt-4 relative md:left-10 left-3 v_center sm:justify-start justify-between md:w-[550px] w-[calc(100%-32px)]">
      <p className="md:text-[18px] text-sm font-mukta">Duration</p>
        <div className="md:ml-[150px] sm:ml-[100px] ml-[6px] flex md:gap-3 gap-1">
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
      <div className="mt-4 relative md:left-10 left-3 v_center sm:justify-start justify-between md:w-[550px] w-[calc(100%-32px)]">
      <p className="md:text-[18px] text-sm font-mukta">Appointment Type</p>
        <div className="md:ml-[83px] sm:ml-[48px] ml-[12px] flex md:gap-3 gap-1">
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
      <div className="mt-4 relative md:left-10 left-3 v_center sm:justify-start justify-between md:w-[550px] w-[calc(100%-100px)] ">
      <p className="md:text-[18px] text-sm font-mukta">Online Consultations</p>
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

        <div className="md:v_center flex flex-col md:flex-row  justify-end md:mx-20 mx-12 gap-5 my-12">
          <button
            type="button"
            onClick={hiding}
            className="font-mukta font-medium text-base py-2 px-3 text-black"
          >
            Cancel
          </button>
          <button
            type="button"
            className="font-mukta md:font-medium font-normal md:text-base text-sm py-2 md:px-3 px-2 bg-blue text-white rounded-lg border-2 border-blue"
          >
            Begin Appointment
          </button>
          <button
            disabled={loading}
            className="font-mukta font-medium text-base py-2 px-3 text-blue rounded-lg border-2 border-blue"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </form>
    <form className=""></form>
    </>
  );
};

export default ScheduleModal;
