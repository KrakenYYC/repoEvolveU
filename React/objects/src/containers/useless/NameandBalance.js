import React, { Component } from "react";

class NameandBalance extends Component {
  constructor(accName, accBalance) {
    this.accName = accName;
    this.accBalance = accBalance;
    //will it be necessary to add id in state
  }
  render() {
    return (
      <div>
        <div id="accName">Name: {this.account.showName()}</div>
        <div>Balance: {this.account.showBalance()}</div>
      </div>
    );
  }
}
export default NameandBalance;
