import React, { useState, useEffect } from "react";

export default function SetState() {
  const [total, setTotal] = useState(0);

  const add = () => {
    setTotal(total + 1);
    console.log(`add`, total);
  };

  useEffect(() => {
    /* componentDidMount */
    console.log(`useEffect`, total);
    return () => {
      /* componentWillUnmount */
    };
  });

  return (
    <div>
      <h1>Total: {total}</h1>
      <button onClick={add}>Click Me+1</button>
    </div>
  );
}
