import React, { Component } from "react";
import Search from "./components/GitSearch/Search";
import List from "./components/GitSearch/List";

export default class App extends Component {
  state = { users: [], isFirst: true, isLoading: false, err: `` };

  updateAppState = (obj) => {
    this.setState(obj);
  };

  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    );
  }
}
