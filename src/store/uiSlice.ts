import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCancelFormModalOpened: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    openCancelFormModal(state) {
      state.isCancelFormModalOpened = true;
    },

    closeCancelFormModal(state) {
      state.isCancelFormModalOpened = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
