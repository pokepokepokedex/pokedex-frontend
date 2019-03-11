import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';

import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    axios
      .get('https://pokepokepokedex.herokuapp.com/data')
      .then(res => this.setState({ pokemon: res.data.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <Route component={Nav} />
        <Route
          exact
          path='/home'
          render={props => <Home {...props} pokemon={this.state.pokemon} />}
        />
        <Route
          path='/dashboard/:id'
          render={props => (
            <Dashboard {...props} pokemon={this.state.pokemon} />
          )}
        />
        <div className='bg-elements'>
          <span className='sidebar-left' />
          <span className='sidebar-right' />
          <span className='bar-bottom' />
          <span className='dotted-grid' />
          <span className='bg-image' />
          <span className='blur' />
        </div>
      </>
    );
  }
}

export default App;
