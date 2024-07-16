import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  companyName: "",
  industry: "",
  email: "",
  password: "",
  eNumber: "",
};

const loginSlice = createSlice({
  name: "login",
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
  },
  selectors: {
    selectName: (data) => data.name,
    selectCompanyName: (data) => data.companyName,
    selectIndustry: (data) => data.industry,
    selectEmail: (data) => data.email,
    selectPassword: (data) => data.password,
    selectENumber: (data) => data.eNumber,
  },
});

export const { handleChange } = loginSlice.actions;
export const {
  selectName,
  selectCompanyName,
  selectIndustry,
  selectEmail,
  selectPassword,
  selectENumber,
} = loginSlice.selectors;
export default loginSlice.reducer;
