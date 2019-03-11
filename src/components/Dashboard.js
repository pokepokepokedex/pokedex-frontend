import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   pokemon: name
    };
  }
  render() {
    return (
      <div className='dashboard-container'>
        <div className='pokemon-model'>
          <img
            src={require(`../assets/Tyranitar.gif`)}
            alt='pokemon'
            className='pokemon-dash'
          />
          <img
            src={require(`../assets/Turntable.svg`)}
            alt='turntable'
            className='turntable'
          />
          <img
            src={require(`../assets/Neon_Pokeball_Logo.svg`)}
            alt='pokeball-logo'
            className='pokeball-logo'
          />
        </div>
        <div className='pokemon-title-box'>
          <h2>Tyranitar</h2>
          <div className='poke-info'>
            <p>Type: Type Goes Here</p>
            <p>Evolution: Evolution Goes Here</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

// src={require(`../assets/${this.state.pokemon}.gif`)}
