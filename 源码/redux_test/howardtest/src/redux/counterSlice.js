import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = { status: `Ready to count`, count: 0 };

export const incrementAyncAction = createAsyncThunk(
  "counter/createAsyncIncrementAction",
  async (data) => {
    console.log(`incrementAyncAction`, data);
    await new Promise((resolve) => setTimeout(resolve, data.sleepTime));
    return data.value;
  }
);

export const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementAction: (preState, action) => {
      console.log(preState);
      console.log(action);
      const { type, payload } = action;
      return {
        status: `Ready to count`,
        count: preState.count + payload,
      };
    },
    decrementAction: (preState, action) => {
      console.log(preState);
      console.log(action);
      const { type, payload } = action;
      return {
        status: `Ready to count`,
        count: preState.count - payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAyncAction.pending, (preState, action) => {
        console.log(`pending`, preState);
        console.log(`pending`, action);
        preState.status = `Counting...`;
        return preState;
      })
      .addCase(incrementAyncAction.fulfilled, (preState, action) => {
        console.log(`fulfilled`, preState);
        console.log(`fulfilled`, action);
        const { type, payload } = action;
        return {
          status: `Ready to count`,
          count: preState.count + payload,
        };
      });
  },
});

// action creators
export const { incrementAction, decrementAction } = countSlice.actions;

// reducer
export default countSlice.reducer;
