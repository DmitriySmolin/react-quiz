import React, { Component } from "react";
import "./Drawer.css";
import Backdrop from "../../UI/Backdrop/Backgrop";
import { NavLink } from "react-router-dom";

class Drawer extends Component {
  clickHandler = () => {
    this.props.onClose();
  };

  renderLinks(links) {
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

    const links = [
      {
        to: "/",
        label: "Список",
        exact: true
      }
    ];

    if (this.props.isAuthenticated) {
      links.push(
        {
          to: "/quiz-creator",
          label: "Создать тест",
          exact: false
        },
        {
          to: "/logout",
          label: "Выйти",
          exact: false
        }
      );
    } else {
      links.push({
        to: "/auth",
        label: "Авторизация",
        exact: false
      });
    }

    return (
      <React.Fragment>
        <navigation className={cls.join(" ")}>
          <ul>{this.renderLinks(links)}</ul>
        </navigation>
        {this.props.isOpen ? <Backdrop onClose={this.props.onClose} /> : null}
      </React.Fragment>
    );
  }
}

export default Drawer;
