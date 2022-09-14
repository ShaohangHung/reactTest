import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = { mouse: false };

  handleMouse = (flag) => {
    return () => {
      this.setState({ mouse: flag });
    };
  };

  handleDelete = (id) => {
    return (event) => {
      const { deleteItem } = this.props;
      if (window.confirm(`確定刪除?`)) {
        deleteItem(id);
      }
    };
  };

  handleCheck = (id) => {
    return (event) => {
      const { updateItem } = this.props;
      const { checked } = event.target;
      console.log(id);
      console.log(checked);
      updateItem(id, checked);
    };
  };

  render() {
    const { id, name, done } = this.props;
    const { mouse } = this.state;
    return (
      <li
        onMouseLeave={this.handleMouse(false)}
        onMouseEnter={this.handleMouse(true)}
        style={{ backgroundColor: mouse ? "#ddd" : "white" }}
      >
        <label>
          <input
            type="checkbox"
            defaultChecked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? "block" : "none" }}
          onClick={this.handleDelete(id)}
        >
          删除
        </button>
      </li>
    );
  }
}
