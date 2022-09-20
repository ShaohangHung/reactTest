import React, { Component } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: 1, title: "message 1" },
      { id: 2, title: "message 2" },
      { id: 3, title: "message 3" },
    ],
  };
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((message) => {
            return (
              <li key={message.id}>
                <Link to={`detail/${message.id}/${message.title}`}>
                  {message.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <hr />
        <Routes>
          <Route path="detail/:id/:title" element={<Detail />} />
        </Routes>
      </div>
    );
  }
}
