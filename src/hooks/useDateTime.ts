import { useState } from "react";

import { handleDateTime } from "../store/features/appointment/appointmentSlice";
import { useAppDispatch } from "../store/hooks";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece] | string;

const formatDateTimeLocal = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const useDateTime = (onClick: () => void) => {
  const dispatch = useAppDispatch();
  const [value, onChange] = useState<string>(formatDateTimeLocal(new Date()));
  const handleChange = () => {
    dispatch(handleDateTime(value));
    onChange;
    console.log(value);
    onClick();
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value)
  }
  return { handleChange, value, onChange, handleInputChange };
};

export default useDateTime;
