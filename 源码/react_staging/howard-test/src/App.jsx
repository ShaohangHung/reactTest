import React, { Component } from "react";
import Search from "./components/GitSearchFetch/Search";
import List from "./components/GitSearchFetch/List";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    );
  }
}
