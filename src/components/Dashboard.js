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
            src={require(`../assets/Mr.-Mime.gif`)}
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
        <div className='pokemon-title-tag'>
          <h2>Pokemon</h2>
          <div className='poke-info'>
            <p>Type: Type Goes Here</p>
            <p>Evolution: Evolution Goes Here</p>
          </div>
        </div>
        <div className='stats'>
          <p>HP: 0 </p>
          <p>ATTACK: 0</p>
          <p>DEFENSE: 0</p>
          <p>SPEED: 0</p>
          <p>SPECIAL DEFENSE: 0</p>
          <p>SPECIAL ATTACK: 0</p>
        </div>
      </div>
    );
  }
}

export default Dashboard;

// src={require(`../assets/${this.state.pokemon}.gif`)}
