import React, { Component } from "react";
import "./Drawer.css";
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
      <navigation className={cls.join(" ")}>
        <ul>{this.renderLinks()}</ul>
      </navigation>
    );
  }
}

export default Drawer;
