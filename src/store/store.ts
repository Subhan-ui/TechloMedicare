import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginSlice from "./features/login/loginSlice";
import patientSlice from "./features/patients/patientSlice";
import appointmentSlice from "./features/appointment/appointmentSlice";

const rootReducer = combineReducers({
  login: loginSlice,
  patient: patientSlice,
  appointment: appointmentSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
