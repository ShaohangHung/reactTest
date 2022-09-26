import React, { useState } from "react";

export default function Count(props) {
  console.log("CountProps", props);
  const { count } = props;
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
