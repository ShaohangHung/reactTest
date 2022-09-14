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

  addNewItem = (itemObj) => {
    // console.log(itemObj);
    const { todos } = this.state;
    todos.unshift(itemObj);
    this.setState({ todos: todos });
  };

  updateItem = (id, done) => {
    let { todos } = this.state;
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = done;
      }
      return todo;
    });
    this.setState({ todos: todos });
  };

  deleteItem = (id) => {
    let { todos } = this.state;
    todos = todos.filter((todo) => {
      if (todo.id === id) {
        return false;
      } else {
        return true;
      }
    });
    this.setState({ todos: todos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addNewItem={this.addNewItem} />
          <List
            todos={todos}
            updateItem={this.updateItem}
            deleteItem={this.deleteItem}
          />
          <Footer />
        </div>
      </div>
    );
  }
}
