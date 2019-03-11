import React, { Component } from 'react';

class Searcg extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <div className='search-container'>
        <form>
            <input placeholder='search' type='text' name='search' />
        </form>
        </div>
      );
    }
  }
  
  export default Searcg;