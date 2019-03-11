import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id
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
          <h2>Mr. Mime</h2>
          <div className='poke-info'>
            <p>Type: PSYCHIC FAIRY</p>
            <p>Evolution: 3</p>
          </div>
        </div>
        <div className='stats'>
          <div className='stat-container'>
            <p>HP : 40</p>
            <Progress
              percent={40}
              status='active'
              theme={{
                active: {
                  color: 'rgb(255, 236, 67)',
                  trailColor: 'rgba(255, 255, 255, 0)',
                  symbol: '  '
                }
              }}
            />
          </div>
          <div className='stat-container'>
            <p>ATTACK : 45</p>
            <Progress
              percent={45}
              status='active'
              theme={{
                active: {
                  color: 'rgb(255, 236, 67)',
                  trailColor: 'rgba(255, 255, 255, 0)',
                  symbol: '  '
                }
              }}
            />
          </div>
          <div className='stat-container'>
            <p>DEFENSE : 65</p>
            <Progress
              percent={65}
              status='active'
              theme={{
                active: {
                  color: 'rgb(255, 236, 67)',
                  trailColor: 'rgba(255, 255, 255, 0)',
                  symbol: '  '
                }
              }}
            />
          </div>
          <div className='stat-container'>
            <p>SPEED : 90</p>
            <Progress
              percent={90}
              status='active'
              theme={{
                active: {
                  color: 'rgb(255, 236, 67)',
                  trailColor: 'rgba(255, 255, 255, 0)',
                  symbol: '  '
                }
              }}
            />
          </div>
          <div className='stat-container'>
            <p>SPECIAL DEFENSE : 120</p>
            <Progress
              percent={120}
              status='active'
              theme={{
                active: {
                  color: 'rgb(255, 236, 67)',
                  trailColor: 'rgba(255, 255, 255, 0)',
                  symbol: '  '
                }
              }}
            />
          </div>
          <div className='stat-container'>
            <p>SPECIAL ATTACK : 100</p>
            <Progress
              percent={100}
              status='active'
              theme={{
                active: {
                  color: 'rgb(255, 236, 67)',
                  trailColor: 'rgba(255, 255, 255, 0)',
                  symbol: '  '
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;

// src={require(`../assets/${this.state.pokemon}.gif`)}
