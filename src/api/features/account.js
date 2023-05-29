import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    showSidebar: false,
  },
  reducers: {
    toggleShowSidebar(state) {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export const { toggleShowSidebar } = accountSlice.actions;

export default accountSlice.reducer;
