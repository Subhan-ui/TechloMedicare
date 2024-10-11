import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece] | string;

const dates = new Date();
const formattedDate = dates.toLocaleString("en-US", {
  weekday: "short",
  month: "long",
  day: "numeric",
});
const hours = dates.getHours();
const normalHours = hours < 12 ? hours : hours - 12;
const minutes = dates?.getMinutes();
const times = normalHours + ":" + minutes;

const initialState = {
  date: formattedDate,
  time: times,
  location: "1",
  patient: "",
  purpose: "",
  status: "",
  duration: "",
  type: "",
  online: false,
  number: 0,
};

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    handleChange: (
      state,
      action: PayloadAction<{ name: string; value: string }>
    ) => {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    },
    handleOnline: (state, action: PayloadAction<boolean>) => {
      state.online = action.payload;
    },
    handleDateTime: (state, action: PayloadAction<string>) => {
      const formatted = new Date(action.payload)?.toLocaleString("en-US", {
        weekday: "short",
        month: "long",
        day: "numeric",
      });
      const hours = new Date(action.payload)?.getHours();
      const minutes = new Date(action.payload)?.getMinutes();
      const time = hours + ":" + minutes;
      if (formatted) {
        state.date = formatted;
        state.time = time;
      }
    },
    handleNumber: (state, action: PayloadAction<number>) => {
      state.number = action.payload;
    },
  },
  selectors: {
    selectDate: (data) => data.date,
    selectTime: (data) => data.time,
    selectLocation: (data) => data.location,
    selectPatient: (data) => data.patient,
    selectPurpose: (data) => data.purpose,
    selectStatus: (data) => data.status,
    selectDuration: (data) => data.duration,
    selectType: (data) => data.type,
    selectOnline: (data) => data.online,
    selectNumber: (data) => data.number,
  },
});

export const { handleChange, handleOnline, handleDateTime, handleNumber } =
  appointmentSlice.actions;
export const {
  selectDate,
  selectDuration,
  selectLocation,
  selectOnline,
  selectPatient,
  selectPurpose,
  selectStatus,
  selectTime,
  selectType,
  selectNumber,
} = appointmentSlice.selectors;

export default appointmentSlice.reducer;
