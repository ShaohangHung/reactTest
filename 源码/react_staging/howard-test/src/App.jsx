import React, { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./components/Router/About";
import Home from "./components/Router/Home";
import Header from "./components/Router/Header";
import Test from "./components/Router/Test";
import MyNavlink from "./components/MyNavlink";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <Header a={1} />
            </div>
          </div>
        </div>
        {/*BrowserRouter要包含註冊NavLink和註冊Route*/}
        <BrowserRouter>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/*註冊NavLink*/}
                <MyNavlink to="/about">About</MyNavlink>
                <MyNavlink to="/home">Home</MyNavlink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/*註冊Route*/}
                  <Routes>
                    <Route path="/about" element={<About a={1} />} />
                    <Route path="/home" element={<Test a={1} />} />
                    <Route path="/home" element={<Home a={1} />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
