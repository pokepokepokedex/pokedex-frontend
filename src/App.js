import React, { Component } from 'react';
import Register from "./Register";
import Login from "./Login";
import { Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Link to="/login">Login Here</Link>
       <Link to="/register">Register Here</Link>
       <Route exact path="/login" component={Login}/>
       <Route exact path="/register" component={Register}/>  
      </div>
    );
  }
}

export default App;
