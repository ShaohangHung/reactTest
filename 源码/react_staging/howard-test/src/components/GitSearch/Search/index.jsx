import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  search = () => {
    // 連續寫法
    const {
      keyWordElement: { value },
    } = this;
    // console.log(keyWordElement); 不宣告keyWordElement
    // console.log(value);

    // 連續寫法+命名
    // const {
    //   keyWordElement: { value: newName },
    // } = this;
    // console.log(newName);

    const { updateAppState } = this.props;

    //loading
    updateAppState({ isFirst: false, isLoading: true });

    axios
      .get(`/api1/search/users?q=${value}`)
      .then((response) => {
        // console.log(`success`, response);
        updateAppState({ isLoading: false, users: response.data.items });
      })
      .catch((err) => {
        // console.log(`error`, err);
        updateAppState({ isLoading: false, err: err });
      });
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
