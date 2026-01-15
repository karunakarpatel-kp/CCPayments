import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface loginSliceState {
  userName: string;
  passWord: string;
}

const initialState: loginSliceState = {
  userName: "",
  passWord: "",
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    getUserEnteredLoginDetails: (state, action: PayloadAction<{ userName: string; passWord: string }>) => {
      state.userName = action.payload.userName;
      state.passWord = action.payload.passWord;
    },
  },
});

export const { getUserEnteredLoginDetails } = loginSlice.actions;

export default loginSlice.reducer;
