import React, { Component } from "react";
import PubSub from "pubsub-js";
import "./index.css";

export default class List extends Component {
  state = {
    //初始化状态
    users: [], //users初始值为数组
    isFirst: true, //是否为第一次打开页面
    isLoading: false, //标识是否处于加载中
    err: "", //存储请求相关的错误信息
  };

  componentDidMount() {
    this.token = PubSub.subscribe("howardhung", (_, stateObj) => {
      // console.log(msg);
      // console.log(stateObj);
      this.setState(stateObj);
    });
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token);
  }

  render() {
    const { users, isFirst, isLoading, err } = this.state;

    let result;
    if (isFirst) {
      result = <h2>Welcome, enter keywords, and click search</h2>;
    } else if (isLoading) {
      result = <h2>Loading....</h2>;
    } else if (err) {
      result = <h2 style={{ color: "red" }}>{err.message}</h2>;
    } else {
      result = users.map((user) => {
        const { id, html_url, avatar_url, login } = user;
        return (
          <div key={id} className="card">
            <a rel="noreferrer" href={html_url} target="_blank">
              <img
                alt="head_profile"
                src={avatar_url}
                style={{ width: "100px" }}
              />
            </a>
            <p className="card-text">{login}</p>
          </div>
        );
      });
    }

    return <div className="row">{result}</div>;
  }
}
