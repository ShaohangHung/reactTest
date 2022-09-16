import React, { Component } from "react";
import PubSub from "pubsub-js";
// import axios from "axios";

export default class Search extends Component {
  search = async () => {
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

    //loading
    PubSub.publish("howardhung", { isFirst: false, isLoading: true });

    // axios
    //   .get(`/api1/search/users?q=${value}`)
    //   .then((response) => {
    //     // console.log(`success`, response);
    //     PubSub.publish("howardhung", {
    //       isLoading: false,
    //       users: response.data.items,
    //     });
    //   })
    //   .catch((err) => {
    //     // console.log(`error`, err);
    //     PubSub.publish("howardhung", { isLoading: false, err: err.message });
    //   });

    try {
      const result = await fetch(`/api1/search/users?q=${value}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await result.json();
      PubSub.publish("howardhung", {
        isLoading: false,
        users: data.items,
      });
    } catch (err) {
      console.log(err);
      PubSub.publish("howardhung", { isLoading: false, err: err });
    }
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
