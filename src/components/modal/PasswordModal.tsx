import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Input from "../ui/Input";
import {
  handleChange,
  selectEmail,
  selectPassword,
} from "@/store/features/login/loginSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

type ModalProps = {
  hiding: () => void;
};

const PasswordModal: React.FC<ModalProps> = ({ hiding }) => {
  const dispatch = useAppDispatch();
  const email = useAppSelector(selectEmail);
  const password = useAppSelector(selectPassword);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.patch("/api/auth/change", {
        email: email,
        password: password,
      });

      toast.success("Successfully updated your password");
      hiding();
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
          className="w-48 bg-[#0000ac] text-white py-4 rounded-xl"
          disabled={loading}
        >
          {loading ? "Changing..." : "Change"}
        </button>
        <button
          onClick={hiding}
          className="w-48 bg-[#0000ac] text-white py-4 rounded-xl"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default PasswordModal;
