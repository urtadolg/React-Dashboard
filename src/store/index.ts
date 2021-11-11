import { configureStore } from "@reduxjs/toolkit";

import salesReducer from "./salesSlice";
import employeeReducer from "./employeeSlice";

const store = configureStore({
  reducer: { sales: salesReducer, employee: employeeReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
