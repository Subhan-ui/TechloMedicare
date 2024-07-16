import { Cross, Person, Clock, LocationI, Bell } from "@/constants/react-icons";
import Button from "./Button";
import Toggle from "@/components/ui/ScheduleModalToggle";
import DateTime from "./change/DateTime";
import Location from "./change/Location";
import useSchedule from "@/hooks/useSchedule";

const ScheduleModal: React.FC<{
  hiding: () => void;
  name: string | null | undefined;
  email: string | null | undefined;
}> = ({ hiding, name, email }) => {
  const {
    dateTime,
    locations,
    date,
    time,
    location,
    patient,
    purpose,
    status,
    duration,
    type,
    online,
    loading,
    setDateTimeFalse,
    setDateTimeTrue,
    setLocationFalse,
    setLocationTrue,
    handleSubmit,
    handleChanges,
    handleChangeText,
    handleChangeInput,
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
          <Person size={24} color="#2f80ed" />
          <h2 className="font-mukta text-lg text-[#2f80ed]">Practitioner</h2>
          <p className="font-mukta text-base">{name}</p>
          <p className="font-mukta font-bold text-base">General Doctor</p>
        </div>
        <div className="v_center gap-1 flex-col">
          <Clock size={24} color="#2f80ed" />
          <h2 className="font-mukta text-lg text-[#2f80ed]">Date and Time</h2>
          <p className="font-mukta text-base">{date}</p>
          <p className="font-mukta font-bold text-base">{time}</p>
          <p
            onClick={setDateTimeTrue}
            className="font-mukta text-xs text-[#2f80ed] cursor-pointer"
          >
            Change
          </p>
        </div>
        <div className="v_center gap-1 flex-col">
          <LocationI size={24} color="#2f80ed" />
          <h2 className="font-mukta text-lg text-[#2f80ed]">Location</h2>
          <p className="font-mukta text-base">General Clinic</p>
          <p className="font-mukta font-bold text-base">Room {location}</p>
          <p
            onClick={setLocationTrue}
            className="font-mukta text-xs text-[#2f80ed] cursor-pointer"
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
          <Button
            name="status"
            value={status}
            onChange={() =>
              handleChangeInput("status", "Confirmation Required")
            }
          >
            Confirmation Required
          </Button>
          <Button
            name="status"
            value={status}
            onChange={() => handleChangeInput("status", "Confirmed")}
          >
            Confirmed
          </Button>
        </div>
      </div>
      <div className="mt-4 relative left-10 v_center">
        Duration
        <div className="ml-[150px] flex gap-3">
          <Button
            name="duration"
            value={duration}
            onChange={() => handleChangeInput("duration", "10'")}
          >
            10'
          </Button>
          <Button
            name="duration"
            value={duration}
            onChange={() => handleChangeInput("duration", "30'")}
          >
            30'
          </Button>
          <Button
            name="duration"
            value={duration}
            onChange={() => handleChangeInput("duration", "45'")}
          >
            45'
          </Button>
          <Button
            name="duration"
            value={duration}
            onChange={() => handleChangeInput("duration", "60'")}
          >
            60'
          </Button>
          <Button
            name="duration"
            value={duration}
            onChange={() => handleChangeInput("duration", "90'")}
          >
            90'
          </Button>
          <Button
            name="duration"
            value={duration}
            onChange={() => handleChangeInput("duration", "120'")}
          >
            120'
          </Button>
        </div>
      </div>
      <div className="mt-4 relative left-10 v_center">
        Appointment Type
        <div className="ml-[83px] flex gap-3">
          <Button
            name="type"
            value={type}
            onChange={() => handleChangeInput("type", "First time")}
          >
            First time
          </Button>
          <Button
            name="type"
            value={type}
            onChange={() => handleChangeInput("type", "Followup visit")}
          >
            Followup visit
          </Button>
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
          <button
            type="button"
            className="font-mukta font-medium text-base py-2 px-3 bg-blue text-white rounded-lg border-2 border-blue"
          >
            Begin Appointment{" "}
          </button>
          <button className="font-mukta font-medium text-base py-2 px-3 text-blue rounded-lg border-2 border-blue">
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ScheduleModal;
