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
        <form onChange={this.props.submitSearch}>
          <input
            placeholder="search"
            type="text"
            name="search"
            value={this.props.search}
            onChange={this.props.searchHandler}
          />
        </form>
      </div>
    );
  }
}

export default Search;
