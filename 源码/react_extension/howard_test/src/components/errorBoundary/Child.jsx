import React, { useState } from "react";

export default function Child() {
  const [userInfo, setUserInfo] = useState([
    { id: `001`, name: `tom`, age: 18 },
    { id: `002`, name: `jack`, age: 19 },
    { id: `003`, name: `howard`, age: 20 },
  ]);
  // const [userInfo, setUserInfo] = useState(`error test`);

  const tryCatch = () => {
    try {
      return userInfo.map((user) => {
        return (
          <h4 key={user.id}>
            {user.name}----{user.age}
          </h4>
        );
      });
    } catch (e) {
      console.log(e);
      return <h2>There is an error, plz contact with IT</h2>;
    }
  };

  return (
    <div>
      <h2>I'm component Child</h2>
      {tryCatch()}
    </div>
  );
}
