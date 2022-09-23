import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countReducer } from "../../redux/counterSlice";
//引入actionCreator，专门用于创建action object
import {
  createIncrementAction,
  createDecrementAction,
} from "../../redux/countAction";

export default function Count() {
  let selectNumber = null;
  const [carName, setCarName] = useState(`Benz`);
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.count;
  });

  const increment = () => {
    dispatch(countReducer(createIncrementAction(Number(selectNumber.value))));
  };
  const decrement = () => {
    dispatch(
      countReducer(createDecrementAction(Number(selectNumber.value)))
    );
  };
  const incrementIfTotalIsOdd = () => {
    if (count % 2 !== 0) {
      dispatch(
        countReducer(createIncrementAction(Number(selectNumber.value)))
      );
    }
  };
  const incrementAsync = () => {
    setTimeout(() => {
      dispatch(
        countReducer(createIncrementAction(Number(selectNumber.value)))
      );
    }, 500);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <select ref={(c) => (selectNumber = c)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      &nbsp;<button onClick={increment}>+</button>
      &nbsp;<button onClick={decrement}>-</button>
      &nbsp;
      <button onClick={incrementIfTotalIsOdd}>
        increment when count is odd.
      </button>
      &nbsp;<button onClick={incrementAsync}>increment async</button>
    </div>
  );
}
