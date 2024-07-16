import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  foreName: "",
  lastName: "",
  dateOfBirth: "",
  sex: "",
  diagnosis: "",
  notes: "",
  phNo: "",
  image: "",
  numberOfPatient:0,
  data: [
    {
      name: "",
      diagnosis: "",
      status: "",
      lastAppointment: "no appointment",
      nextAppointment: "no appointment",
    },
  ],
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    handleChangePatient: (
      state,
      action: PayloadAction<{ name: string; value: string | undefined }>
    ) => {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    },
    handleGender: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        sex: action.payload,
      };
    },
    handlePatientFromAPI: (
      state,
      action: PayloadAction<{ name: string; diagnosis: string }>
    ) => {},
    handleChangeImages: (state, action: PayloadAction<string|undefined>) => {
      if(action.payload){
        state.image = action.payload;
      }
    },
    handleNumber:(state,action:PayloadAction<number>)=>{
      state.numberOfPatient=action.payload
    }
  },
  selectors: {
    selectForeName: (data) => data.foreName,
    selectLastName: (data) => data.lastName,
    selectDateOfBirth: (data) => data.dateOfBirth,
    selectSex: (data) => data.sex,
    selectDiagnosis: (data) => data.diagnosis,
    selectNotes: (data) => data.notes,
    selectPhNo: (data) => data.phNo,
    selectImage: (data) => data.image,
    selectNumber: (data) => data.numberOfPatient,
    selectData: (content) => content.data,
  },
});

export const {
  handleChangePatient,
  handleGender,
  handlePatientFromAPI,
  handleChangeImages,
  handleNumber,
} = patientSlice.actions;
export const {
  selectForeName,
  selectDateOfBirth,
  selectDiagnosis,
  selectLastName,
  selectNotes,
  selectPhNo,
  selectSex,
  selectData,
  selectImage,
  selectNumber,
} = patientSlice.selectors;
export default patientSlice.reducer;
