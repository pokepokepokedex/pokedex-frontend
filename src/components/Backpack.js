import React, { Component } from 'react';
import './Backpack.css';

class Backpack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='backpack-container'>
        <img
          src={require(`../assets/controls.png`)}
          alt='controls'
          className='controls'
        />
      </div>
    );
  }
}

export default Backpack;
