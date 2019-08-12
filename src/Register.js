import React, { Component } from "react";
import axios from "axios";
import "./Login.css";

export default class Register extends Component {
  state = {
    registerInfo: {
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      registerInfo: {
        ...this.state.registerInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  tryRegister = e => {
    e.preventDefault();
    axios
      .post(
        "https://pokepokepokedex.herokuapp.com/auth/register",
        this.state.registerInfo
      )
      .then(() => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="login-text">
          <img
            src={require(`../src/assets/pokestat-login.png`)}
            className="login-header"
            alt="logo"
          />
        </div>
        <form onSubmit={this.tryRegister} className="login-container">
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.registerInfo.username}
            onChange={this.handleChanges}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.registerInfo.password}
            onChange={this.handleChanges}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.registerInfo.email}
            onChange={this.handleChanges}
            required
          />
          <button className="log-in-btn" type="submit">
            Make Account
          </button>
        </form>
      </div>
    );
  }
}
