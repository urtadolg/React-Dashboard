import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
  sales: number;
} = {
  sales: 300,
};

const salesSlice = createSlice({
  name: "sales",
  initialState: initialState,
  reducers: {
    add(state) {
      state.sales = state.sales + 300;
    },
    remove(state, action: PayloadAction<number>) {
      state.sales = state.sales - 300;
    },
  },
});

export const { add } = salesSlice.actions;
export default salesSlice.reducer;
