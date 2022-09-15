import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props;

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
