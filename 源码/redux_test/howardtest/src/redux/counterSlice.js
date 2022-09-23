import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    countReducer: (preState, payloadAction) => {
      console.log(payloadAction.type);
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
export const { countReducer } = countSlice.actions;

// reducer
export default countSlice.reducer;
