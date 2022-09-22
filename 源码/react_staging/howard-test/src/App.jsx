import React, { Component } from "react";
import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import About from "./components/Router/About";
import Home from "./components/Router/Home";
import Header from "./components/Router/Header";
import MyNavLink from "./components/MyNavLink";

export default class App extends Component {
  render() {
    return (
      <div>
        {/*HashRouter要包含註冊NavLink和註冊Route*/}
        <HashRouter>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-8">
              <div className="page-header">
                <Header a={1} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/*註冊NavLink*/}
                <MyNavLink to="/about">About</MyNavLink>
                <MyNavLink to="/home">Home</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/*註冊Route*/}
                  <Routes>
                    <Route path="/about" element={<About a={1} />} />
                    <Route path="/home/*" element={<Home a={1} />} />
                    <Route
                      path="/"
                      element={<Navigate replace to="/about" />}
                    />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </HashRouter>
      </div>
    );
  }
}
