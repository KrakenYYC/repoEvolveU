import React from "react";
import logo from "../Pictures/logo.svg";

function IconComponent() {
  return (
    <div className="App-Header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code> src / App.js </code> and save to reload.{" "}
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React to Impress your Friends and Show Up your Enemies
      </a>
    </div>
  );
}

export default IconComponent;
