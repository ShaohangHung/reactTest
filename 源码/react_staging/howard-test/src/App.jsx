//创建“外壳”组件App
import React, { Component } from "react";
import "./App.css";
import Header from "./components/TodoList/Header";
import Footer from "./components/TodoList/Footer";
import List from "./components/TodoList/List";

export default class App extends Component {
  state = {
    todos: [
      { id: "001", name: "吃飯", done: true },
      { id: "002", name: "睡覺", done: true },
      { id: "003", name: "寫code", done: false },
      { id: "004", name: "逛街", done: true },
    ],
  };

  render() {
    const {todos} = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header />
          <List todos={todos}/>
          <Footer />
        </div>
      </div>
    );
  }
}
