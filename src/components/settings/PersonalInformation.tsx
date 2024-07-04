"use client";

import React, { useEffect, useState } from "react";
import Bar from "../commonContent/TopBar";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Input from "../ui/Input";
import {
  handleChange,
  selectCompanyName,
  selectENumber,
  selectIndustry,
  selectName,
} from "@/store/features/login/loginSlice";
import axios from "axios";
import toast from "react-hot-toast";

type data = {
  name: string;
  companyName: string;
  industry: string;
  eNumber: string;
};

const PersonalInformation: React.FC<{
  email: string | null | undefined;
}> = ({ email }) => {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const nameS = useAppSelector(selectName);
  const companyNameS = useAppSelector(selectCompanyName);
  const industryS = useAppSelector(selectIndustry);
  const eNumberS = useAppSelector(selectENumber);
  useEffect(() => {
    (async () => {
      const response = await axios.get(`/api/auth/get/${email}`);
      const data = response.data as data;
      dispatch(handleChange({ name: "name", value: data.name }));
      dispatch(handleChange({ name: "companyName", value: data.companyName }));
      dispatch(handleChange({ name: "industry", value: data.industry }));
      dispatch(handleChange({ name: "eNumber", value: data.eNumber }));
    })();
  }, []);
  const handleShow = () => {
    setShow((prev) => !prev);
  };
  const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
      setLoading(true);
      await axios.patch(`/api/auth/get/${email}`,{
        name: nameS,
        companyName:companyNameS,
        industry:industryS,
        eNumber:eNumberS
      })
      toast.success('Successfully updated your data')
    } catch (error:any) {
      toast.error(error.message)
    } finally{
      setLoading(false)
    }
  }
  return (
    <>
      {show ? (
        <Bar classN="justify-between mt-9" onClick={handleShow}>
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
              onChange={(e) => {
                const { name, value } = e.target;
                dispatch(handleChange({ name, value }));
              }}
            />
            <Input
              placeholder="Enter Your Company Name"
              name="companyName"
              value={companyNameS}
              onChange={(e) => {
                const { name, value } = e.target;
                dispatch(handleChange({ name, value }));
              }}
            />
            <Input
              placeholder="Enter Your Industry"
              name="industry"
              value={industryS}
              onChange={(e) => {
                const { name, value } = e.target;
                dispatch(handleChange({ name, value }));
              }}
            />
            <Input
              placeholder="How many Employees do you have"
              name="eNumber"
              value={eNumberS}
              onChange={(e) => {
                const { name, value } = e.target;
                dispatch(handleChange({ name, value }));
              }}
            />
            <div className="h_center gap-24">
              <button
                type="submit"
                className="w-48 bg-[#0000ac] text-white py-4 rounded-xl"
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
