import React, { Component } from "react";
import "./Drawer.css";
import Backdrop from "../../UI/Backdrop/Backgrop";
import { NavLink } from "react-router-dom";
const links = [
  {
    to: "/",
    label: "Список",
    exact: true
  },
  {
    to: "/auth",
    label: "Авторизация",
    exact: false
  },
  {
    to: "/quiz-reactor",
    label: "Создать тест",
    exact: false
  }
];

class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose();
  };

  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            exact={link.exact}
            className="active"
            onClick={this.clickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    const cls = ["Drawer"];
    if (!this.props.isOpen) {
      cls.push("close");
    }

    return (
      <React.Fragment>
        <navigation className={cls.join(" ")}>
          <ul>{this.renderLinks()}</ul>
        </navigation>
        {this.props.isOpen ? <Backdrop onClose={this.props.onClose} /> : null}
      </React.Fragment>
    );
  }
}

export default Drawer;
