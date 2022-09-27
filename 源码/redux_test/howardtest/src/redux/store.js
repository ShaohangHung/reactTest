import countReducer from "./counterSlice";
import personReducer from "./personSlice";
import { configureStore } from "@reduxjs/toolkit";

// 透過 configureStore() 建立 Redux Store
export const store = configureStore({
  reducer: {
    countObj: countReducer,
    personObj: personReducer,
  },
});
