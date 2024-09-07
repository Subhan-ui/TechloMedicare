import { useState } from "react";

import { handleDateTime } from "../store/features/appointment/appointmentSlice";
import { useAppDispatch } from "../store/hooks";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const useDateTime = (onClick: () => void) => {
  const dispatch = useAppDispatch();
  const [value, onChange] = useState<Value>(new Date());
  const handleChange = () => {
    dispatch(handleDateTime(value));
    onChange;
    onClick();
  };
  return { handleChange, value, onChange };
};

export default useDateTime;
