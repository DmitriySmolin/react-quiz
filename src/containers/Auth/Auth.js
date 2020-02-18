import React, { Component } from "react";
import "./Auth.css";
import Button from "../../components/UI/Button/Button";

export default class Auth extends Component {
  loginHandler = () => {};
  registerHandler = () => {};
  submitHandler = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="Auth">
        <div>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHandler} className="AuthForm">
            <input type="text" />
            <input type="text" />

            <Button type="btnSuccess" onClick={this.loginHandler}>
              Войти
            </Button>
            <Button type="btnPrimary" onClick={this.registerHandler}>
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
