import { handleChange } from "@/store/features/appointment/appointmentSlice";
import { useAppDispatch } from "@/store/hooks";
import React from "react";

const Location: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const dispatch = useAppDispatch();
  const handleChanges = (no: string) => {
    dispatch(handleChange({ name: "location", value: no }));
    onClick();
  };

  const row = ["1", "2"];
  const row2 = ["3", "4"];

  return (
    <div className="font-mukta center flex-col  absolute right-16 top-24 bg-white h-52 w-52 gap-3 p-7 border-2 border-black ">
      <p className="">Select Room no</p>
      <div className="flex justify-around ">
        {row.map((r) => (
          <button
            type="button"
            key={r}
            className="bg-black  text-white border-2 border-white hover:bg-white hover:border-black hover:text-black py-2 px-4"
            onClick={() => handleChanges(r)}
          >
            {r}
          </button>
        ))}
      </div>
      <div className="flex justify-around ">
        {row2.map((r) => (
          <button
            type="button"
            key={r}
            onClick={() => handleChanges(r)}
            className="bg-black text-white border-2 border-white hover:bg-white hover:border-black hover:text-black py-2 px-4"
          >
            {r}
          </button>
        ))}
      </div>
      <button
        type="button"
        onClick={onClick}
        className="bg-black text-white border-2 border-white hover:bg-white hover:border-black hover:text-black py-2 px-4"
      >
        Cancel
      </button>
    </div>
  );
};

export default Location;
