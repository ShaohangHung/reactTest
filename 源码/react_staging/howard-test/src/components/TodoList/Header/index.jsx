import React, { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import "./index.css";

export default class Header extends Component {
  static propTypes = {
    addNewItem: PropTypes.func.isRequired,
  };

  handleKeyUp = (event) => {
    const { addNewItem } = this.props;
    const { keyCode, target } = event;
    if (keyCode !== 13) {
      return;
    }
    if (target.value.trim() === "") {
      alert("輸入不能為空");
      return;
    }
    // console.log(target.value);
    const itemObj = { id: nanoid(), name: target.value, done: false };
    addNewItem(itemObj);
    target.value = "";
  };

  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleKeyUp}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
