import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.props.submitHandler}>
          <input
            placeholder="search pokemon"
            type="text"
            name="search"
            value={this.props.search}
            onChange={this.props.searchHandler}
          />
        </form>
        <form onSubmit={this.props.submitHandler}>
          <input
            placeholder="search pokemon type"
            type="text"
            name="type"
            value={this.props.type}
            onChange={this.props.searchHandler}
          />
        </form>
      </div>
    );
  }
}

export default Search;
