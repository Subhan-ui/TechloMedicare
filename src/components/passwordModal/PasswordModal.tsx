import { useAppDispatch } from "@/store/hooks";
import Input from "../ui/input/Input";
import { handleChange } from "@/store/features/login/loginSlice";

import { ModalProps } from "@/types/modalTypes";
import usePasswordChange from "@/hooks/usePasswordChange";

const PasswordModal: React.FC<ModalProps> = ({ hiding }) => {
  const dispatch = useAppDispatch();
  const { loading, handleSubmit, email, password } = usePasswordChange(hiding);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="md:block hidden fixed z-[250] top-24 left-1/2 transform -translate-x-1/2 p-12  rounded-lg w-[45%] bg-white"
      >
        <h2 className="font-mukta text-2xl font-bold text-center ">
          Please Provide Your Credentials to change your password.
        </h2>
        <Input
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => {
            const { name, value } = e.target;
            dispatch(handleChange({ name, value }));
          }}
        />
        <Input
          placeholder="Your new Password"
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
            className="w-48 bg-blue text-white py-4 rounded-xl"
            disabled={loading}
          >
            {loading ? "Changing..." : "Change"}
          </button>
          <button
            onClick={hiding}
            className="w-48 bg-blue text-white py-4 rounded-xl"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default PasswordModal;
