import React, { useState } from "react";
import "./index.css";

export default function Parent() {
  return (
    <div className="parent">
      <h3>I'm component Parent</h3>
      <A render={(name) => <B name={name} />}></A>
    </div>
  );
}

const A = (props) => {
  const [name, setName] = useState(`Howard`);
  console.log(props);
  return (
    <div className="a">
      <h3>I'm component A</h3>
      {props.render(name)}
    </div>
  );
};

const B = (props) => {
  console.log(props);
  return (
    <div className="b">
      <h3>I'm component B, name:{props.name}</h3>
    </div>
  );
};
