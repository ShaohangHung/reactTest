import React, { Component } from "react";
import Search from "./components/GitSearch/Search";
import List from "./components/GitSearch/List";

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
