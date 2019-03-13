import React, { Component } from "react";
import axios from "axios";
import "./Login.css";

export default class Register extends Component {
  state = {
    registerInfo: {
      username: "",
      password: "",
      email: ""
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

  tryRegister = async e => {
    e.preventDefault();
    try {
      return await axios
        .post(
          "https://pokepokepokedex.herokuapp.com/auth/register",
          this.state.registerInfo
        )
        .then(res => {
          console.log(res);
          this.setState({
            registerInfo: {
              username: "",
              password: "",
              email: ""
            }
          });
          this.props.history.push("/");
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.tryRegister} className="login-container">
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.registerInfo.username}
            onChange={this.handleChanges}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.registerInfo.password}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.registerInfo.email}
            onChange={this.handleChanges}
          />
          <button className="log-in-btn">Make Account</button>
        </form>
      </div>
    );
  }
}
