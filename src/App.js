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
      .get('http://localhost:8000/api/pokemon')
      .then(res => this.setState({ pokemon: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <Route component={Nav} />
        <Route
          exact
          path='/'
          render={props => <Home {...props} pokemon={this.state.pokemon} />}
        />
        <Route component={Dashboard} path='/dashboard' />
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
