import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='home-container'>
        <div className='pokemon'>
          <h1 className='pokemon-title'>Pokemon</h1>
          <span className='poke-frame' />
          <img
            src='https://i.ibb.co/7NtGcPs/Arcanine.gif'
            alt='pokemon'
            className='home-pokemon'
          />
        </div>
        <div className='pokemon'>
          <span className='poke-frame' />
          <img
            src='https://i.ibb.co/PTg7DZJ/Abra.gif'
            alt='pokemon'
            className='home-pokemon'
          />
        </div>
        <div className='pokemon'>
          <span className='poke-frame' />
          <img
            src='https://i.ibb.co/gWdzrFb/Blastoise.gif'
            alt='pokemon'
            className='home-pokemon'
          />
        </div>
        <div className='pokemon'>
          <span className='poke-frame' />
          <img
            src='https://i.ibb.co/qgXGGRK/Bulbasaur.gif'
            alt='pokemon'
            className='home-pokemon'
          />
        </div>
        <div className='pokemon'>
          <span className='poke-frame' />
          <img
            src='https://i.ibb.co/QJp7sYb/Butterfree-Female.gif'
            alt='pokemon'
            className='home-pokemon'
          />
        </div>
        <div className='pokemon'>
          <span className='poke-frame' />
          <img
            src='https://i.ibb.co/n1WkDw9/Charizard.gif'
            alt='pokemon'
            className='home-pokemon'
          />
        </div>
        <div className='pokemon'>
          <span className='poke-frame' />
          <img
            src='https://i.ibb.co/hm6vKdd/Haunter.gif'
            alt='pokemon'
            className='home-pokemon'
          />
        </div>
        <div className='pokemon'>
          <span className='poke-frame' />
          <img
            src='https://i.ibb.co/F4XQwFZ/Mr-Mime.gif'
            alt='pokemon'
            className='home-pokemon'
          />
        </div>
        <div className='pokemon'>
          <span className='poke-frame' />
          <img
            src='https://i.ibb.co/YLTDhmj/Mew.gif'
            alt='pokemon'
            className='home-pokemon'
          />
        </div>
        <div className='pokemon'>
          <span className='poke-frame' />
          <img
            src='https://i.ibb.co/9h1k9yv/Gyarados-Female.gif'
            alt='pokemon'
            className='home-pokemon'
          />
        </div>
      </div>
    );
  }
}

export default Home;
