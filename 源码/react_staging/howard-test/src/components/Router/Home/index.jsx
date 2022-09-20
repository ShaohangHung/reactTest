import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import News from "./News";
import Message from "./Message";
import MyNavLink from "../../MyNavLink";

export default class Home extends Component {
  render() {
    console.log(`Home`, this.props);
    return (
      <div>
        <h3>我是Home的内容</h3>
        {/* <HashRouter> */}
        <div>
          <ul class="nav nav-tabs">
            {/*註冊NavLink*/}
            <li>
              <MyNavLink to="news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="message">Message</MyNavLink>
            </li>
          </ul>
          {/* 注册路由 */}
          <Routes>
            <Route path="news" element={<News a={1} />} />
            <Route path="message/*" element={<Message a={1} />} />
            <Route
              path="/"
              element={<Navigate replace to="news" />}
            />
          </Routes>
        </div>
        {/* </HashRouter> */}
      </div>
    );
  }
}
