import React, { Component } from 'react';

import Search from './Search';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Search />
        <div className='home-container'>
          <div className='pokemon'>
            <h1 className='pokemon-name'>Pokemon</h1>
            <span className='poke-frame' />
            <img
              src='https://i.ibb.co/k53vsg2/Pikachu.gif'
              alt='pokemon'
              className='home-pokemon'
            />
          </div>
          {/* <div className='pokemon'>
            <h1 className='pokemon-name'>Pokemon</h1>
            <span className='poke-frame' />
            <img
              src='https://i.ibb.co/PTg7DZJ/Abra.gif'
              alt='pokemon'
              className='home-pokemon'
            />
          </div>
          <div className='pokemon'>
            <h1 className='pokemon-name'>Pokemon</h1>
            <span className='poke-frame' />
            <img
              src='https://i.ibb.co/gWdzrFb/Blastoise.gif'
              alt='pokemon'
              className='home-pokemon'
            />
          </div>
          <div className='pokemon'>
            <h1 className='pokemon-name'>Pokemon</h1>
            <span className='poke-frame' />
            <img
              src='https://i.ibb.co/qgXGGRK/Bulbasaur.gif'
              alt='pokemon'
              className='home-pokemon'
            />
          </div>
          <div className='pokemon'>
            <h1 className='pokemon-name'>Pokemon</h1>
            <span className='poke-frame' />
            <img
              src='https://i.ibb.co/QJp7sYb/Butterfree-Female.gif'
              alt='pokemon'
              className='home-pokemon'
            />
          </div>
          <div className='pokemon'>
            <h1 className='pokemon-name'>Pokemon</h1>
            <span className='poke-frame' />
            <img
              src='https://i.ibb.co/n1WkDw9/Charizard.gif'
              alt='pokemon'
              className='home-pokemon'
            />
          </div>
          <div className='pokemon'>
            <h1 className='pokemon-name'>Pokemon</h1>
            <span className='poke-frame' />
            <img
              src='https://i.ibb.co/hm6vKdd/Haunter.gif'
              alt='pokemon'
              className='home-pokemon'
            />
          </div>
          <div className='pokemon'>
            <h1 className='pokemon-name'>Pokemon</h1>
            <span className='poke-frame' />
            <img
              src='https://i.ibb.co/F4XQwFZ/Mr-Mime.gif'
              alt='pokemon'
              className='home-pokemon'
            />
          </div>
          <div className='pokemon'>
            <h1 className='pokemon-name'>Pokemon</h1>
            <span className='poke-frame' />
            <img
              src='https://i.ibb.co/YLTDhmj/Mew.gif'
              alt='pokemon'
              className='home-pokemon'
            />
          </div>
          <div className='pokemon'>
            <h1 className='pokemon-name'>Pokemon</h1>
            <span className='poke-frame' />
            <img
              src='https://i.ibb.co/9h1k9yv/Gyarados-Female.gif'
              alt='pokemon'
              className='home-pokemon'
            />
          </div>
          <div className='pokemon'>
            <h1 className='pokemon-name'>Pokemon</h1>
            <span className='poke-frame' />
            <img
              src='https://i.ibb.co/QrW7FXy/Golbat-Female.gif'
              alt='pokemon'
              className='home-pokemon'
            />
          </div>
          <div className='pokemon'>
            <h1 className='pokemon-name'>Pokemon</h1>
            <span className='poke-frame' />
            <img
              src='https://i.ibb.co/F70YhG2/Jigglypuff.gif'
              alt='pokemon'
              className='home-pokemon'
            />
          </div>
          <div className='pokemon'>
            <h1 className='pokemon-name'>Pokemon</h1>
            <span className='poke-frame' />
            <img
              src='https://i.ibb.co/CKS4X4z/Rapidash.gif'
              alt='pokemon'
              className='home-pokemon'
            />
          </div>
          <div className='pokemon'>
            <h1 className='pokemon-name'>Pokemon</h1>
            <span className='poke-frame' />
            <img
              src='https://i.ibb.co/SP69YDX/Rayquaza-Mega.gif'
              alt='pokemon'
              className='home-pokemon'
            />
          </div>
          <div className='pokemon'>
            <h1 className='pokemon-name'>Pokemon</h1>
            <span className='poke-frame' />
            <img
              src='https://i.ibb.co/njj850C/Vibrava.gif'
              alt='pokemon'
              className='home-pokemon'
            />
          </div> */}
        </div>
      </>
    );
  }
}

export default Home;
