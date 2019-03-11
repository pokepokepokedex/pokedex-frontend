import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props);
    const pokemon = this.props.pokemon.find(
      pokemon => `${pokemon.id}` === this.props.match.params.id
    );
    if (!pokemon) {
      return <h1>Pokemon MIA</h1>;
    } else {
      return (
        <div className='dashboard-container'>
          <div className='pokemon-model'>
            <img
              src={`https://res.cloudinary.com/kingmuze/image/upload/v1552283064/${
                pokemon.name
              }.gif`}
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
            <h2>{pokemon.name}</h2>
            <div className='poke-info'>
              <p>Type:{pokemon.type1}</p>
              <p>Abilities: {pokemon.abilities}</p>
            </div>
          </div>
          <div className='stats'>
            <div className='stat-container'>
              <p>HP : {pokemon.hp}</p>
              <Progress
                percent={pokemon.hp}
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
              <p>ATTACK : {pokemon.attack}</p>
              <Progress
                percent={pokemon.attack}
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
              <p>DEFENSE : {pokemon.defense}</p>
              <Progress
                percent={pokemon.defense}
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
              <p>SPEED : {pokemon.defense}</p>
              <Progress
                percent={pokemon.defense}
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
              <p>SPECIAL DEFENSE : {pokemon.sp_defense}</p>
              <Progress
                percent={pokemon.sp_defense}
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
              <p>SPECIAL ATTACK : {pokemon.sp_attack}</p>
              <Progress
                percent={pokemon.sp_attack}
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
}

export default Dashboard;

// src={require(`../assets/${this.state.pokemon}.gif`)}
