"use client";

import Bar from "../bar/TopBar";
import { Cross } from "../../constants/react-icons";
import useGetMessage from "../../hooks/useGetMessage";
import Loader from "../ui/loader/Loader";

const Message = ({ email }: { email: string | null | undefined }) => {
  const { data, capitalize, handleDeleteAll, handleDelete } =
    useGetMessage(email);
  return (
    <>
      {data?.length === 0 ? (
        <div className="w-[75vw] h-[75vh] center ">
        <h1 className="font-mukta text-lg font-bold ">No Notifications here yet...</h1>
        </div>
      ) : (
        <>
          <button
            className="border-2 py-2 px-4 mt-4 mx-[22.5px] rounded-md"
            onClick={handleDeleteAll}
          >
            Delete All
          </button>
          {data.map((da) => {
            const time = new Date(da.time);
            return (
              <Bar classN="mt-6 justify-between" key={da.id}>
                <p className="font-mukta md:text-lg text-sm font-semibold">
                  {capitalize(da.message)}
                </p>
                <div className="flex md:gap-5 gap-2 items-center">
                  <p>{time.toLocaleTimeString()}</p>
                  <Cross
                    size={18}
                    color="red"
                    onClick={() => handleDelete(da.id)}
                    className="cursor-pointer"
                  />
                </div>
              </Bar>
            );
          })}
        </>
      )}
    </>
  );
};

export default Message;
