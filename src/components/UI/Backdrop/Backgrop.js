import React from "react";
import "./Backdrop.css";

const Backdrop = props => (
  <div className="Backdrop" onClick={props.onClose}></div>
);

export default Backdrop;
