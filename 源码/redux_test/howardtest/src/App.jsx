import React from "react";
import Count from "./containers/Count";
import Person from "./containers/Person";

function App() {
  return (
    <div>
      <Count x="777" />
      <hr/>
      <Person />
    </div>
  );
}

export default App;
