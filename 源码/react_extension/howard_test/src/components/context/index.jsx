import React, { useState, useContext } from "react";
import "./index.css";

const MyContext = React.createContext();
export default function A() {
  const [userName, setUserName] = useState(`Howard`);
  const [userAge, setUserAge] = useState(18);

  return (
    <div className="parent">
      <h3>I'm component A</h3>
      <h4>
        My user name is:{userName}, age:{userAge}
      </h4>
      <MyContext.Provider value={{ userName, userAge }}>
        <B />
      </MyContext.Provider>
    </div>
  );
}

const B = () => {
  return (
    <div className="child">
      <h3>I'm component B</h3>
      <C />
    </div>
  );
};

const C = () => {
  const context = useContext(MyContext);
  console.log(context);
  return (
    <div className="grand-child">
      <h3>I'm component C</h3>
      <h4>
        Got a user name from A is:{context.userName}, age:{context.userAge}
      </h4>
      <D />
    </div>
  );
};

const D = () => {
  const context = useContext(MyContext);
  console.log(context);
  return (
    <div className="grand-grand-child">
      <h3>I'm component D</h3>
      <h4>
        Got a user name from A is:
        <MyContext.Consumer>
          {(value) => {
            return `${value.userName}, age:${value.userAge}`;
          }}
        </MyContext.Consumer>
      </h4>
    </div>
  );
};
