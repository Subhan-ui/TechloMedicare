"use client";

import Input from "../ui/Input";
import { handleChange } from "@/store/features/login/loginSlice";
import Bar from "../commonContent/TopBar";
import { useAppDispatch } from "@/store/hooks";
import useSettings from "@/hooks/usePassword";

const ChangePassword: React.FC<{ email: string | null | undefined }> = ({
  email,
}) => {
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
