import React, { Component } from "react";
import AccountsPOJO from "./AccountsPOJO";
import CardComp from "./CardComp";
import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from "constants";

class Accounts1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxValue: 0,
      minValue: 0,
      total: 0
    };

    this.controller = new AccountsPOJO();
  }
  addNewAccount(e) {
    const newName = document.getElementById("inputName").value;
    const newBalance = Number(document.getElementById("inputBalance").value);
    this.controller.addAccounts(newBalance, newName);

    console.log("This is the accounts list:", this.controller.arrControl);

    let updateMax = this.controller.maxAccount();
    this.setState({ maxValue: updateMax });

    let updateMin = this.controller.minAccount();
    this.setState({ minValue: updateMin });

    let total = this.controller.totalAccount();
    this.setState({ total: total });
  }

  getSingleAccount = id => {
    return this.controller.arrControl.find(item => item.id === Number(id));
  };

  updateVisual = () => {
    let tempMin = this.controller.minAccount();
    let tempMax = this.controller.maxAccount();
    let tempTotal = this.controller.totalAccount();
    this.setState({ maxValue: tempMax, minValue: tempMin, total: tempTotal });
  };

  delAccount = event => {
    const targetId = event.target.parentElement.id;
    // console.log(event.target.parentElement.id);
    this.controller.deleteAccount(targetId);
    this.updateVisual();
  };

  depAccount = event => {
    const targetId = event.target.parentElement.id;
    const tempInputValue = Number(
      document.getElementById("dollarAmount" + targetId).value
    );
    console.log("in deposit", tempInputValue);
    const findSingleAccount = this.getSingleAccount(targetId);
    console.log("in deposit, in id", targetId);
    findSingleAccount.deposit(tempInputValue);
    this.updateVisual();
  };

  witAccount = event => {
    const targetId = event.target.parentElement.id;
    const tempInputValue = Number(
      document.getElementById("dollarAmount" + targetId).value
    );
    console.log("in withdraw", tempInputValue);
    const findSingleAccount = this.getSingleAccount(targetId);
    console.log("in withdraw, in id", targetId);
    findSingleAccount.withdraw(tempInputValue);
    this.updateVisual();
  };

  render() {
    const CardList = this.controller.arrControl.map(item => {
      return (
        <CardComp
          key={item.id}
          account={item}
          delAcc={this.delAccount}
          depAcc={this.depAccount}
          witAcc={this.witAccount}
        />
      );
    });

    return (
      <div>
        <div className="App">
          <h2> ~ Account Controller ~ </h2>
          <h3> ~ Create a new Account ~ </h3>

          <input type="text" id="inputName" placeholder="Name of Account" />
          <br />
          <input type="text" id="inputBalance" placeholder="Starting Balance" />
          <br />
          <button
            name="newAccountName"
            onClick={() => {
              this.addNewAccount();
            }}
          >
            {" "}
            Open New Account{" "}
          </button>
        </div>

        <div className="Card">
          <br />
          {CardList}
        </div>

        <div className="minmax">
          <h3> The max value is: {this.state.maxValue} </h3>
          <h3> The min value is: {this.state.minValue} </h3>
          <h3> The total value is: {this.state.total} </h3>
        </div>
      </div>
    );
  }
}

export default Accounts1;
