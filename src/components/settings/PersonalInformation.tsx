"use client";

import Bar from "../commonContent/TopBar";
import Input from "../ui/Input";

import usePersonalInformation from "@/hooks/usePersonalInformation";

const PersonalInformation: React.FC<{
  email: string | null | undefined;
}> = ({ email }) => {
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
        <Bar classN="justify-between mt-9 cursor-pointer" onClick={handleShow}>
          <h1 className="font-mukta font-semibold text-xl">
            Change Personal Info{" "}
          </h1>
        </Bar>
      ) : (
        <>
          <h2 className="font-mukta text-3xl font-semibold text-center mt-10">
            Change Information for {email}
          </h2>
          <form className="mx-24 " onSubmit={handleSubmit}>
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
                className="w-48 bg-[#0000ac] disabled:bg-[#0000ac97] text-white py-4 rounded-xl"
                disabled={loading}
              >
                {loading ? "Changing..." : "Change"}
              </button>
              <button
                onClick={handleShow}
                className="w-48 bg-[#0000ac] text-white py-4 rounded-xl"
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
