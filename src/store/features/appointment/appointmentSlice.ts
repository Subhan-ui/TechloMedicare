import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

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
    handleDateTime: (state, action: PayloadAction<Value>) => {
      const formatted = action.payload?.toLocaleString("en-US", {
        weekday: "short",
        month: "long",
        day: "numeric",
      });
      const hours = (action.payload as Date)?.getHours();
      const minutes = (action.payload as Date)?.getMinutes();
      const originalHours = hours < 12 ? hours : hours - 12;
      const time = originalHours + ":" + minutes;
      if (formatted) {
        state.date = formatted;
        state.time = time;
      }
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
  },
});

export const { handleChange, handleOnline,handleDateTime, } = appointmentSlice.actions;
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
} = appointmentSlice.selectors;

export default appointmentSlice.reducer;
