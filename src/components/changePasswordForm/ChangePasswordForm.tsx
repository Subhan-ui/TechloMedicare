"use client";

import Input from "../ui/input/Input";
import { handleChange } from "@/store/features/login/loginSlice";
import Bar from "../bar/TopBar";
import { useAppDispatch } from "@/store/hooks";
import useSettings from "@/hooks/usePassword";
import { emailType } from "@/types/types";

const ChangePassword: React.FC<emailType> = ({ email }) => {
  const dispatch = useAppDispatch();
  const { handleShow, handleSubmit, loading, show, password } =
    useSettings(email);
  return (
    <>
      {show ? (
        <Bar classN="justify-between mt-9 cursor-pointer" onClick={handleShow}>
          <h1 className="font-mukta font-semibold text-xl">Change Password</h1>
        </Bar>
      ) : (
        <>
          <h2 className="font-mukta med:text-3xl text-lg font-semibold text-center mt-10">
            Change Password for {email}
          </h2>
          <form className="med:mx-24 md:mx-8 " onSubmit={handleSubmit}>
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
                className="med:w-48 w-32 bg-blue text-white disabled:bg-disabled py-4 rounded-xl"
                disabled={loading}
              >
                {loading ? "Changing..." : "Change"}
              </button>
              <button
                onClick={handleShow}
                className="med:w-48 w-32 bg-blue text-white py-4 rounded-xl"
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
