import { configureStore } from "@reduxjs/toolkit";

import salesReducer from "./salesSlice";
import employeeReducer from "./employeeSlice";
import uiReducer from "./uiSlice";

const store = configureStore({
  reducer: { sales: salesReducer, employee: employeeReducer, ui: uiReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
