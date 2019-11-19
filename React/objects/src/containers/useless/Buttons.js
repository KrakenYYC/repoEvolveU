import React, { Component } from "react";
import AccountsPOJO from "../components/AccountsPOJO";

class Buttons extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <button id="idDeposit" type="button" onClick={this.onUpdateAccount}>
          Dep(+)
        </button>

        <button id="idWithdraw" type="button" onClick={this.onUpdateAccount}>
          Wdw(-)
        </button>

        <button id="idRename" type="button" onClick={this.onUpdateAccount}>
          Rename
        </button>

        <button id="idClose" type="button" onClick={this.onUpdateAccount}>
          Close
        </button>
      </div>
    );
  }
}

export default Buttons;
