import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  deleteFinishedItems = () => {
    if (window.confirm(`確定清除嗎?`)) {
      const { deleteFinishedItems } = this.props;
      deleteFinishedItems();
    }
  };

  handleCheckAll = (event) => {
    const isChecked = event.target.checked;
    const { checkAllItems } = this.props;
    checkAllItems(isChecked);
  };

  render() {
    const { todos } = this.props;
    const doneCount = todos.reduce((doneCount, todo) => {
      return todo.done ? ++doneCount : doneCount;
    }, 0);
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={
              doneCount === todos.length && todos.length !== 0 ? true : false
            }
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{todos.length}
        </span>
        <button className="btn btn-danger" onClick={this.deleteFinishedItems}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
