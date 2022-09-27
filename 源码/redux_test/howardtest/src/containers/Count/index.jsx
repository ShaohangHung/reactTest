import React, { useState } from "react";
import { connect } from "react-redux";
import {
  incrementAction,
  decrementAction,
  incrementAyncAction,
} from "../../redux/counterSlice";

const Count = (props) => {
  console.log("CountProps", props);
  const { count, status, personArray } = props;

  let selectNumber = null;
  const [carName, setCarName] = useState(`Benz`);

  const increment = () => props.increment(Number(selectNumber.value));
  const decrement = () => props.decrement(Number(selectNumber.value));
  const incrementIfTotalIsOdd = () => {
    if (count % 2 !== 0) {
      props.increment(Number(selectNumber.value));
    }
  };
  const incrementAsync = () => {
    props.incrementAsync(Number(selectNumber.value));
  };

  return (
    <div>
      <h1>我是Count组件,下方组件总人数为:{personArray.length}</h1>
      <h2>
        Count: {count}, Status: {status}
      </h2>
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
};

const mapStateToProps = (state, ownProps) => {
  console.log("mapStateToProps", state);
  console.log("mapStateToProps", ownProps);
  return {
    a: 1,
    count: state.countObj.count,
    status: state.countObj.status,
    personArray: state.personObj,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(incrementAction(value)),
    decrement: (value) => dispatch(decrementAction(value)),
    incrementAsync: (value) =>
      dispatch(incrementAyncAction({ value, sleepTime: 500 })),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Count);
