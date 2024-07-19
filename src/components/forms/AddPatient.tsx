"use client";

import Bar from "@/components/commonContent/TopBar";
import { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";
import FormAddPatient from "./FormAddPatient";
import usePatientCRUD from "@/hooks/usePatientCRUD";
import { emailType } from "@/models/types";

const AddPatient: React.FC<emailType> = ({ email }) => {
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
    loadingPost,
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
            className="border-2  border-blue text-blue font-mukta text-base center px-2 rounded-lg"
          >
            Cancel
          </Link>
          <button
            disabled={loadingPost}
            className=" border-2 disabled:bg-disabled bg-blue border-blue text-white font-mukta text-base py-1.5 px-3.5  rounded-lg"
          >
            {loadingPost ? "Saving" : "Save"}
          </button>
        </div>
      </Bar>
      <div className="h_center pt-[43px] w-full">
        <div className="med:w-[783px] md:w-[550px] sm:w-[80vw] w-[90vw] h-[800px] bg-white">
          <table className="table-auto  med:ml-[41px] md:ml-[25px] w-full mt-[58px]">
            <tbody className="">
              <tr className=" font-mukta med:text-lg md:text-sm text-[#4f4f4f]">
                <td>Record Number</td>
                <td className="text-[#333333] relative med:left-10 left-5">
                  Record Number will be assigned automatically when you save.
                </td>
              </tr>
              <tr>
                <td></td>
                <td className="relative med:left-10 left-5">
                  <button className=" mt-2 border-2 border-[#e0e0e0] py-2 px-3 text-[#333333] text-lg font-bold">
                    Assign manually{" "}
                  </button>
                </td>
              </tr>
              <tr className=" font-mukta med:text-lg md:text-sm text-[#4f4f4f]">
                <td>Profile Image</td>
                <td className="relative med:left-10 left-5">
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
