import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: "001", name: "tom", age: 18 }];

export const personSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    addPersonAction: (preState, action) => {
      console.log(preState);
      console.log(action);
      const { type, payload } = action;
      // return [payload, ...preState];
      preState.unshift(payload);
      return preState;
    },
  },
});

// action creators
export const { addPersonAction } = personSlice.actions;

// reducer
export default personSlice.reducer;
