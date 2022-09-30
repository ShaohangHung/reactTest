import React, { useState } from "react";
import "./index.css";

export default function Parent() {
  const [carName, setCarName] = useState("Benz");

  const changeCar = () => {
    setCarName(`BMW`);
  };

  console.log(`parent render`);
  return (
    <div className="parent">
      <h3>I'm component Parent</h3>
      <span>My car Name is:{carName}</span>
      <br />
      <button onClick={changeCar}>click me to change a car</button>
      <Child carName={carName} />
    </div>
  );
}

const Child = (props) => {
  console.log(`child render`);
  return (
    <div className="child">
      <h3>I'm component Child</h3>
      <span>Got a car Name from parent is:{props.carName}</span>
    </div>
  );
};
