import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  selectDate,
  selectTime,
  selectLocation,
  selectPatient,
  selectPurpose,
  selectStatus,
  selectDuration,
  selectType,
  selectOnline,
  handleChange,
  handleOnline,
} from "@/store/features/appointment/appointmentSlice";
import useHandleMessage from "./useHandleMessage";

const useSchedule = (email: string | null | undefined) => {
  const date = useAppSelector(selectDate);
  const time = useAppSelector(selectTime);
  const location = useAppSelector(selectLocation);
  const patient = useAppSelector(selectPatient);
  const purpose = useAppSelector(selectPurpose);
  const status = useAppSelector(selectStatus);
  const duration = useAppSelector(selectDuration);
  const type = useAppSelector(selectType);
  const online = useAppSelector(selectOnline);
  const [dateTime, setDateTime] = useState(false);
  const [locations, setLocation] = useState(false);
  const [loading, setLoading] = useState(false);
  const notification = useHandleMessage();

  const dispatch = useAppDispatch();

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };
  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const dataToSend = {
        date,
        time,
        location,
        patientName: patient,
        purpose,
        status,
        duration,
        type,
        online,
      };

      const response = await axios.post(
        `/api/appointment/add/${email}`,
        dataToSend
      );
      if (response.status === 201) {
        toast.success("Successfully added appointment");
        notification(email,`Successfully registered ${patient} appointment`)
      } else {
        toast.error(response?.data?.message || "Failed to add appointment");
      }
    } catch (error: any) {
      if (error?.response) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const setDateTimeFalse = () => setDateTime(false);
  const setDateTimeTrue = () => setDateTime(true);
  const setLocationFalse = () => setLocation(false);
  const setLocationTrue = () => setLocation(true);
  const handleChangeInput = (name: string, value: string) => {
    dispatch(handleChange({ name: name, value: value }));
  };
  const handleChangeToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    dispatch(handleOnline(checked));
  };

  const durations = [
    {
      id: 1,
      name: "duration",
      value: duration,
      num: "10'",
      onChange: () => handleChangeInput("duration", "10'"),
    },
    {
      id: 2,
      name: "duration",
      value: duration,
      num: "30'",
      onChange: () => handleChangeInput("duration", "30'"),
    },
    {
      id: 3,
      name: "duration",
      value: duration,
      num: "45'",
      onChange: () => handleChangeInput("duration", "45'"),
    },
    {
      id: 4,
      name: "duration",
      value: duration,
      num: "60'",
      onChange: () => handleChangeInput("duration", "60'"),
    },
    {
      id: 5,
      name: "duration",
      value: duration,
      num: "90'",
      onChange: () => handleChangeInput("duration", "90'"),
    },
    {
      id: 6,
      name: "duration",
      value: duration,
      num: "120'",
      onChange: () => handleChangeInput("duration", "120'"),
    },
  ];

  const statuses = [
    {
      id: 1,
      value: status,
      child: "Confirmation Required",
      onChange: () => handleChangeInput("status", "Confirmation Required"),
    },
    {
      id: 2,
      value: status,
      child: "Confirmed",
      onChange: () => handleChangeInput("status", "Confirmed"),
    },
  ];
  const types = [
    {
      id: 1,
      value: type,
      child: "First time",
      onchange: () => handleChangeInput("type", "First time"),
    },
    {
      id: 2,
      value: type,
      child: "Followup visit",
      onchange: () => handleChangeInput("type", "Followup visit"),
    },
  ];

  return {
    dateTime,
    locations,
    date,
    time,
    location,
    patient,
    purpose,
    statuses,
    durations,
    types,
    online,
    loading,
    setDateTimeFalse,
    setDateTimeTrue,
    setLocationFalse,
    setLocationTrue,
    handleSubmit,
    handleChanges,
    handleChangeText,
    handleChangeToggle,
  };
};

export default useSchedule;
