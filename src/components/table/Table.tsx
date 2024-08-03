import Link from "next/link";
import { Help, Add, Search, Filter } from "@/constants/react-icons";
import Bar from "@/components/bar/TopBar";
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
      <table className="mx-[22.55px] bg-white mt-[17px] table-fixed w-[1122px]">
        <thead className="h-[65.7px] border-b-2 border-gray-300">
          <tr className="font-mukta text-lg text-lightSlate text-center">
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
    </>
  );
};

export default Table;
