import React, { Component } from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.style = {};
  }
  render() {
    console.log(this.props);

    const determineColor = type => {
      let colorResult;
      switch (type) {
        case 'fire':
          {
            colorResult = 'red';
          }
          break;
        case 'water':
          {
            colorResult = '#09E1FF';
          }
          break;
        case 'normal':
          {
            colorResult = '#E4E4E4';
          }
          break;
        case 'poison':
          {
            colorResult = '#B918FF';
          }
          break;
        case 'electric':
          {
            colorResult = 'yellow';
          }
          break;
        case 'ground':
          {
            colorResult = '#FF9C15';
          }
          break;
        case 'fairy':
          {
            colorResult = '#FF69B4';
          }
          break;
        case 'grass':
          {
            colorResult = '#34FF5C';
          }
          break;
        case 'bug':
          {
            colorResult = '#90EE38';
          }
          break;
        case 'psychic':
          {
            colorResult = '#B71ECF';
          }
          break;
        case 'rock':
          {
            colorResult = '#DCB883';
          }
          break;
        case 'fighting':
          {
            colorResult = '#FF3A17';
          }
          break;
        case 'ghost':
          {
            colorResult = '#6817FF';
          }
          break;
        case 'ice':
          {
            colorResult = '#52FFFA';
          }
          break;
        case 'dragon':
          {
            colorResult = '#A533FF';
          }
          break;
        case 'dark':
          {
            colorResult = '#3D009C';
          }
          break;
        case 'flying':
          {
            colorResult = '#4DA1FF';
          }
          break;
        case 'steel': {
          colorResult = '#BFBFBF';
        }
      }
      return colorResult;
    };

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
              src={`https://res.cloudinary.com/kingmuze/image/upload/v1552280621/Pokemon_Gifs/${
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
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='552'
              height='552'
              viewBox='0 0 552 552'
              className='pokeball-logo'
            >
              <g
                id='Neon_Pokeball_Logo'
                data-name='Neon Pokeball Logo'
                transform='translate(-684 -223)'
              >
                <path
                  id='Path_14'
                  data-name='Path 14'
                  d='M43.167,378.167,491.5-39.167'
                  transform='translate(679.5 364.5)'
                  fill='none'
                  stroke={determineColor(pokemon.type1)}
                  stroke-linecap='round'
                  stroke-width='6'
                />
                <g
                  id='Ellipse_2'
                  data-name='Ellipse 2'
                  transform='translate(723 262)'
                  fill='none'
                  stroke={determineColor(pokemon.type1)}
                  stroke-width='6'
                >
                  <circle cx='237' cy='237' r='237' stroke='none' />
                  <circle cx='237' cy='237' r='234' fill='none' />
                </g>
                <g
                  id='Ellipse_3'
                  data-name='Ellipse 3'
                  transform='translate(684 223)'
                  fill='none'
                  stroke={determineColor(pokemon.type1)}
                  stroke-width='6'
                  opacity='0.18'
                >
                  <circle cx='276' cy='276' r='276' stroke='none' />
                  <circle cx='276' cy='276' r='273' fill='none' />
                </g>
                <g
                  id='Ellipse_5'
                  data-name='Ellipse 5'
                  transform='translate(889 428)'
                  fill='none'
                  stroke={determineColor(pokemon.type1)}
                  stroke-width='6'
                >
                  <circle cx='71' cy='71' r='71' stroke='none' />
                  <circle cx='71' cy='71' r='68' fill='none' />
                </g>
                <path
                  id='Path_26'
                  data-name='Path 26'
                  d='M43.167,378.167,491.5-39.167'
                  transform='translate(705.5 289.5)'
                  fill='none'
                  stroke={determineColor(pokemon.type1)}
                  stroke-linecap='round'
                  stroke-width='6'
                />
              </g>
            </svg>
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
                    color: determineColor(pokemon.type1),
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
                    color: determineColor(pokemon.type1),
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
                    color: determineColor(pokemon.type1),
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
                    color: determineColor(pokemon.type1),
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
                    color: determineColor(pokemon.type1),
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
                    color: determineColor(pokemon.type1),
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
