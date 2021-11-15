import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  dummyData: [
    {
      id: 1,
      name: "Leandro",
      email: "leandro@gmail.com",
      phone: "987654321",
      skype: "leandro.skype",
      active: true,
      storeId: 1,
      managerId: 1,
    },
    {
      id: 2,
      name: "Leandro",
      email: "leandro@gmail.com",
      phone: "987654321",
      skype: "leandro.skype",
      active: true,
      storeId: 1,
      managerId: 1,
    },
    {
      id: 3,
      name: "Leandro",
      email: "leandro@gmail.com",
      phone: "987654321",
      skype: "leandro.skype",
      active: true,
      storeId: 1,
      managerId: 1,
    },
    {
      id: 4,
      name: "Leandro",
      email: "leandro@gmail.com",
      phone: "987654321",
      skype: "leandro.skype",
      active: true,
      storeId: 1,
      managerId: 1,
    },
    {
      id: 5,
      name: "Leandro",
      email: "leandro@gmail.com",
      phone: "987654321",
      skype: "leandro.skype",
      active: true,
      storeId: 1,
      managerId: 1,
    },
  ],
};

const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    remove(state, action: PayloadAction<number>) {
      state.dummyData.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { remove } = employeeSlice.actions;

export default employeeSlice.reducer;
