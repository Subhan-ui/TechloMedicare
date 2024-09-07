"use client";

import Bar from "../topBar/TopBar";
import Input from "../ui/input/Input";
import usePersonalInformation from "@/hooks/usePersonalInformation";
import { emailType } from "@/types/types";

const PersonalInformation: React.FC<emailType> = ({ email }) => {
  const {
    show,
    loading,
    nameS,
    companyNameS,
    industryS,
    eNumberS,
    handleSubmit,
    handleShow,
    handleChanges,
  } = usePersonalInformation(email);
  return (
    <>
      {show ? (
        <Bar classN="justify-between mt-9 cursor-pointer ml-[26px]" onClick={handleShow}>
          <h1 className="font-semibold text-xl">
            Change Personal Info
          </h1>
        </Bar>
      ) : (
        <>
          <h2 className="med:text-3xl text-lg font-semibold text-center mt-10">
            Change Information for {email}
          </h2>
          <form className="med:mx-24 md:mx-8 " onSubmit={handleSubmit}>
            <Input
              placeholder="Enter Your Name"
              name="name"
              value={nameS}
              onChange={handleChanges}
            />
            <Input
              placeholder="Enter Your Company Name"
              name="companyName"
              value={companyNameS}
              onChange={handleChanges}
            />
            <Input
              placeholder="Enter Your Industry"
              name="industry"
              value={industryS}
              onChange={handleChanges}
            />
            <Input
              placeholder="How many Employees do you have"
              name="eNumber"
              value={eNumberS}
              onChange={handleChanges}
            />
            <div className="h_center gap-24">
              <button
                type="submit"
                className="med:w-48 w-32 bg-blue disabled:bg-disabled text-white py-4 rounded-xl"
                disabled={loading}
              >
                {loading ? "Changing..." : "Change"}
              </button>
              <button
                onClick={handleShow}
                className="med:w-48 w-32 bg-blue text-white py-4 rounded-xl"
              >
                Cancel
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
};

export default PersonalInformation;
