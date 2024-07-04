"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Input from "../ui/Input";
import {
  handleChange,
  selectPassword,
} from "@/store/features/login/loginSlice";
import Bar from "../commonContent/TopBar";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const ChangePassword: React.FC<{ email: string | null | undefined }> = ({
  email,
}) => {
  const router = useRouter();
  const password = useAppSelector(selectPassword);
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false); 
  const dispatch = useAppDispatch();
  const handleShow = () => {
    setShow((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.patch("/api/auth/change", {
        email: email,
        password: password,
      });

      toast.success("Successfully updated your password");
      router.push("/");
    } catch (error: any) {
      console.log(error);
      if (error.response && error.response.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {show ? (
        <Bar classN="justify-between mt-9" onClick={handleShow}>
          <h1 className="font-mukta font-semibold text-xl">Change Password</h1>
        </Bar>
      ) : (
        <>
          <h2 className="font-mukta text-3xl font-semibold text-center mt-10">
            Change Password for {email}
          </h2>
          <form className="mx-24 " onSubmit={handleSubmit}>
            <Input
              placeholder="Enter Your New Password"
              name="password"
              value={password}
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

export default ChangePassword;
