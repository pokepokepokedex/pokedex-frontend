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
      const result = await axios
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
          localStorage.setItem("id", res.data.id);
          this.setState({
            registerInfo: {
              username: "",
              password: ""
            }
          });
        });
      this.props.history.push("/home");
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  takeToRegister = () => {
    this.props.history.push("/register");
  };
  componentDidMount = () => {
    if (localStorage.getItem("token")) {
      this.props.history.push("/home");
    }
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
        <form onSubmit={this.tryLogin} className="login-container">
          <input
            type="text"
            name="username"
            value={this.state.loginInfo.username}
            onChange={this.handleChanges}
            placeholder="username"
            required
          />
          <input
            type="password"
            name="password"
            value={this.state.loginInfo.password}
            onChange={this.handleChanges}
            placeholder="password"
            required
          />
          <button onClick={this.tryLogin} className="log-in-btn">
            Log in
          </button>
          <div className="login-caption-flex">
            <span className="login-border" />
            <p className="login-caption">Don't have an account yet?</p>
            <span className="login-border" />
          </div>
          <button onClick={this.takeToRegister} className="register-btn">
            Sign up
          </button>
        </form>
      </div>
    );
  }
}
