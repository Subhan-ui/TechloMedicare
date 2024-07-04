"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Bar from "@/components/commonContent/TopBar";
import {
  selectForeName,
  selectDateOfBirth,
  selectDiagnosis,
  selectLastName,
  selectNotes,
  selectPhNo,
  selectSex,
  handleChangeImages,
} from "@/store/features/patients/patientSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEdgeStore } from "@/lib/edgestore";
import { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";
import FormAddPatient from "./FormAddPatient";

const AddPatient: React.FC<{ email: string | undefined | null }> = ({
  email,
}) => {
  const foreName = useAppSelector(selectForeName);
  const lastName = useAppSelector(selectLastName);
  const dateOFBirth = useAppSelector(selectDateOfBirth);
  const diagnosis = useAppSelector(selectDiagnosis);
  const notes = useAppSelector(selectNotes);
  const phNo = useAppSelector(selectPhNo);
  const sex = useAppSelector(selectSex);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { edgestore } = useEdgeStore();
  const dispatch = useAppDispatch();
  const [urls, setUrls] = useState<{
    url: string;
    thumbnailUrl: string | null;
  }>();
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  const router = useRouter();
  const handleChangeUrl = async () => {
    if (image) {
      const res = await edgestore.publicFiles.upload({
        file: image,
        onProgressChange: (progress) => {
          setProgress(progress);
        },
      });
      setUrls({
        url: res.url,
        thumbnailUrl: res.thumbnailUrl,
      });
      dispatch(handleChangeImages(urls?.url))
      setShow(false)
    }
  };
  const [image, setImage] = useState<File>();
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const maxSize = 1024 * 1024 * 1; // 1 MB in bytes
  
    if (file && file.size > maxSize) {
      alert("File size is too large! Maximum size allowed is 1 MB.");
      e.target.value = ""; // Clear the file selection
    }
    setImage(e.target.files?.[0]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const patientData = {
        foreName: foreName,
        lastName: lastName,
        dateOfBirth: dateOFBirth,
        sex,
        diagnosis,
        notes,
        phNo,
        url: urls?.url,
      };

      console.log("Sending patient data:", patientData);

      const response = await axios.post(
        `/api/patients/add/${email}`,
        patientData
      );

      console.log("Server response:", response);

      toast.success("Patient Successfully added.");
      router.push("/patients");
    } catch (error: any) {
      console.error("Error during submission:", error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
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
              <FormAddPatient handleShow={handleShow} cross={true}/>
            </tbody>
          </table>
        </div>
      </div>
    </form>
  );
};

export default AddPatient;
