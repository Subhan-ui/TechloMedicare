import { handleChange } from "@/store/features/appointment/appointmentSlice";
import { useAppDispatch } from "@/store/hooks";
import React from "react";
import { useDispatch } from "react-redux";

const Location: React.FC<{ onClick: () => void }> = ({ onClick }) => {
    const dispatch = useAppDispatch();
    const handleChanges = (no:string)=>{
        dispatch(handleChange({name: 'location', value: no}))
        onClick();
    }
  return (
    <div className="font-mukta center flex-col  absolute right-16 top-24 bg-white h-52 w-52 gap-3 p-7 border-2 border-black ">
        <p className="">Select Room no</p>
        <div className="flex justify-around ">

      <button
        type="button"
        className="bg-black  text-white border-2 border-white hover:bg-white hover:border-black hover:text-black py-2 px-4"
        onClick={()=>handleChanges('1')}
        >
        1
      </button>
      <button
        type="button"
        className="bg-black text-white border-2 border-white hover:bg-white hover:border-black hover:text-black py-2 px-4"
        onClick={()=>handleChanges('2')}
        >
        2
      </button>
          </div>
          <div className="flex justify-around ">
      <button
        type="button"
        onClick={()=>handleChanges('3')}
        className="bg-black text-white border-2 border-white hover:bg-white hover:border-black hover:text-black py-2 px-4"
      >
        3
      </button>
      <button
        type="button"
        onClick={()=>handleChanges('4')}
        className="bg-black text-white border-2 border-white hover:bg-white hover:border-black hover:text-black py-2 px-4"
      >
        4
      </button>
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
