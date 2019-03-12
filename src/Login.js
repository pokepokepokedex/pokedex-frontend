import React, { Component } from "react";
import axios from "axios";

import "./Login.css";

export default class Login extends Component {
  state = {
    loginInfo: {
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      loginInfo: {
        ...this.state.loginInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  tryLogin = async e => {
    e.preventDefault();
    try {
      return await axios
        .post(
          "https://pokepokepokedex.herokuapp.com/auth/login",
          this.state.loginInfo,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: window.localStorage.token
            }
          }
        )
        .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          this.setState({
            registerInfo: {
              username: "",
              password: ""
            }
          });
          this.props.history.push("/home");
        });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.tryLogin} className="login-container">
          <input
            type="text"
            name="username"
            value={this.state.loginInfo.username}
            onChange={this.handleChanges}
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            value={this.state.loginInfo.password}
            onChange={this.handleChanges}
            placeholder="password"
          />
          <button className="log-in-btn">Log in</button>
        </form>
      </div>
    );
  }
}
