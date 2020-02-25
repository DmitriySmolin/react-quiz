import React, { Component } from "react";
import "./Auth.css";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import is from "is_js";
import { auth } from "../../store/actions/auth";
import { connect } from "react-redux";

class Auth extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: "",
        type: "email",
        label: "Email",
        errorMessage: "Введите корректный email",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true
        }
      },
      password: {
        value: "",
        type: "password",
        label: "Пароль",
        errorMessage: "Введите корректный пароль",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 5
        }
      }
    }
  };

  loginHandler = () => {
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      true
    );
  };

  registerHandler = () => {
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      true
    );
  };

  submitHandler = e => {
    e.preventDefault();
  };
  validateControl = (value, validation) => {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (validation.email) {
      isValid = is.email(value) && isValid;
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }
    return isValid;
  };

  onChangeHandler = (event, controlName) => {
    // console.log(`${controlName}`, event.target.value);
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };
    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    let isFormValid = true;
    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    formControls[controlName] = control;
    this.setState({
      formControls,
      isFormValid
    });
  };
  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          value={control.value}
          type={control.type}
          label={control.label}
          errorMessage={control.errorMessage}
          valid={control.valid}
          touched={control.touched}
          shouldValidate={!!control.validation}
          onChange={event => this.onChangeHandler(event, controlName)}
        />
      );
    });
  }
  render() {
    return (
      <div className="Auth">
        <div>
          <h1>Авторизация</h1>
          <form onSubmit={this.submitHandler} className="AuthForm">
            {this.renderInputs()}
            <Button
              type="btnSuccess"
              onRetry={this.loginHandler}
              disabled={!this.state.isFormValid}
            >
              Войти
            </Button>
            <Button
              type="btnPrimary"
              onRetry={this.registerHandler}
              disabled={!this.state.isFormValid}
            >
              Зарегистрироваться
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
  };
}

export default connect(null, mapDispatchToProps)(Auth);
