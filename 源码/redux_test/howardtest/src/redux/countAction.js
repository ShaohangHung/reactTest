import { countReducer } from "./counterSlice";

export const createIncrementAction = (data) => ({ type: "increment", data });
export const createDecrementAction = (data) => ({ type: "decrement", data });
export const createAsyncIncrementAction = (data, sleepTime) => {
  return (dispatch) => {
    setTimeout(() => {
      console.log(`hello world`);
      dispatch(countReducer(createIncrementAction(data)));
    }, sleepTime);
  };
};
