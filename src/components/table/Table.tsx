import Link from "next/link";
import { Help, Add, Search, Filter } from "@/constants/react-icons";
import Bar from "@/components/topBar/TopBar";
import { selectNumber } from "@/store/features/patients/patientSlice";
import { useAppSelector } from "@/store/hooks";
import { darkGrey } from "@/constants/colors";

const Table: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const number = useAppSelector(selectNumber);
  return (
    <>
      <Bar classN="justify-between">
        <h1 className="font-mukta font-semibold text-xl">
          Total Patients <span className="text-lightSlate">({number})</span>
        </h1>
        <div className="v_center gap-5">
          <Link href="/patients/add">
            <Add
              className="border p-1 h-[40px] w-[40px]"
              color={darkGrey}
              size={18}
            />
          </Link>
          <Search
            className="border p-1 h-[40px] w-[40px]"
            color={darkGrey}
            size={22}
          />
          <Filter
            className="border p-1 h-[40px] w-[40px]"
            color={darkGrey}
            size={25}
          />
          <Help
            className="border p-1 h-[40px] w-[40px]"
            color={darkGrey}
            size={26}
          />
        </div>
      </Bar>
      <div className="max:w-[1122px] med:w-[calc(100vw-250px)] md:w-[calc(100vw-240px)] w-[94vw] bg-white mx-[22.55px] overflow-x-scroll mt-[17px]">
      <table className=" w-full min-w-[1122px] table-fixed">
        <thead className="h-[65.7px] border-b-2  overflow-x-scroll border-gray-300">
          <tr className="font-mukta text-lg text-lightSlate  text-center">
            <td>Profile</td>
            <td>Name</td>
            <td>Diagnosis</td>
            <td>Status</td>
            <td>Phone Number</td>
            <td>Date of Birth</td>
            <td>Options</td>
          </tr>
        </thead>
        <tbody>
          <tr>{children}</tr>
        </tbody>
      </table>
      </div>
    </>
  );
};

export default Table;
