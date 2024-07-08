"use client";

import Bar from "@/components/commonContent/TopBar";
import { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";
import FormAddPatient from "./FormAddPatient";
import usePatientCRUD from "@/hooks/usePatientCRUD";

const AddPatient: React.FC<{ email: string | undefined | null }> = ({
  email,
}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  const {
    handlePost,
    handleChangeImage,
    handleChangeUrl,
    image,
    urls,
    progress,
  } = usePatientCRUD("", handleShow, email);

  return (
    <form onSubmit={handlePost}>
      {show && (
        <Modal
          handleChange={handleChangeImage}
          handleChangeUrl={handleChangeUrl}
          image={image}
          handleShow={handleShow}
          urls={urls?.url}
          progress={progress}
        />
      )}
      <Bar classN="justify-between">
        <h1 className="font-mukta font-semibold text-xl">Add New Patients</h1>
        <div className="flex gap-4">
          <Link
            href="/patients"
            className="border-2  border-[#0000AC] text-[#0000AC] font-mukta text-base center px-2 rounded-lg"
          >
            Cancel
          </Link>
          <button className="border-2 bg-[#0000AC] border-[#0000AC] text-white font-mukta text-base py-1.5 px-3.5  rounded-lg">
            Save
          </button>
        </div>
      </Bar>
      <div className="h_center pt-[43px] w-full">
        <div className="w-[783px] h-[800px] bg-white">
          <table className="table-auto  ml-[41px] w-full mt-[58px]">
            <tbody className="">
              <tr className=" font-mukta text-lg text-[#4f4f4f]">
                <td>Record Number</td>
                <td className="text-[#333333] relative left-10">
                  Record Number will be assigned automatically when you save.
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="relative left-10">
                  <button className=" mt-2 border-2 border-[#e0e0e0] py-2 px-3 text-[#333333] text-lg font-bold">
                    Assign manually{" "}
                  </button>
                </td>
              </tr>
              <tr className=" font-mukta text-lg text-[#4f4f4f]">
                <td>Profile Image</td>
                <td className="relative left-10">
                  <button
                    type="button"
                    className="border-2 hover:bg-slate-400 hover:text-white p-2  bg-white"
                    onClick={handleShow}
                  >
                    Upload your profile Image
                  </button>
                </td>
              </tr>
              <FormAddPatient handleShow={handleShow} cross={true} />
            </tbody>
          </table>
        </div>
      </div>
    </form>
  );
};

export default AddPatient;
