import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    countReducer: (preState, payloadAction) => {
      const { payload } = payloadAction;
      const { type, data } = payload;
      // console.log(preState);
      //根据type决定如何加工数据
      switch (type) {
        case "increment": //如果是加
          return preState + data;
        case "decrement": //若果是减
          return preState - data;
        default:
          return preState;
      }
    },
  },
});

// action creators
export const { countReducer } = counterSlice.actions;

// reducer
export default counterSlice.reducer;
