import counterReducer from "./counterSlice";
import { configureStore } from "@reduxjs/toolkit";

// 透過 configureStore() 建立 Redux Store
export const store = configureStore({
  reducer: {
    count: counterReducer,
  },
});
