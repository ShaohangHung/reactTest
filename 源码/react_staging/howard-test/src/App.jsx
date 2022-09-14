//创建“外壳”组件App
import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  getStudentData = () => {
    axios.get("http://localhost:3000/api1/students").then(
      (response) => {
        console.log("success", response.data);
      },
      (error) => {
        console.log("error", error);
      }
    );
  };

  getCarData = () => {
    axios.get("http://localhost:3000/api2/cars").then(
      (response) => {
        console.log("success", response.data);
      },
      (error) => {
        console.log("error", error);
      }
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>點我取得學生資料</button>
        <button onClick={this.getCarData}>點我取得汽車資料</button>
      </div>
    );
  }
}
