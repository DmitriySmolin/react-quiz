import React, { Component } from "react";
import "./Drawer.css";
import Backdrop from "../../UI/Backdrop/Backgrop";
const links = [1, 2, 3];

class Drawer extends Component {
  renderLinks() {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a>Link {link}</a>
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
