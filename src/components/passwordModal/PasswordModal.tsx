import Input from "../ui/input/Input";

import { ModalProps } from "@/types/types";
import usePasswordChange from "@/hooks/usePasswordChange";

const PasswordModal: React.FC<ModalProps> = ({ hiding }) => {
  const { loading, handleSubmit, inputs } = usePasswordChange(hiding);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="md:block hidden fixed z-[250] top-24 left-1/2 transform -translate-x-1/2 p-12  rounded-lg w-[45%] bg-white"
      >
        <h2 className="font-mukta text-2xl font-bold text-center ">
          Please Provide Your Credentials to change your password.
        </h2>
        {inputs.map((input) => (
          <Input
            key={input.id}
            placeholder={input.placeholder}
            name={input.name}
            value={input.value}
            onChange={input.onChange}
          />
        ))}
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
