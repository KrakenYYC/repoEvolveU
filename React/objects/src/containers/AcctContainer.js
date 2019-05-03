import React, { Component } from "react";

class AcctContainer extends Component {
  constructor(balance, acctname) {
    super(balance, acctname);

    this.state = {
      balance: 25
    };
  }

  onAction = e => {
    console.log("imhere", e.target.value);
    // let a = Number(document.getElementById("currentbalance").value);
    let b = Number(document.getElementById("amount").value);

    if (e.target.id === "idDep") {
      this.setState({
        balance: this.state.balance + b
      });
    } else {
      this.setState({ balance: this.state.balance - b });
    }
  };
  // if (e.target.id === "idDep") {
  //   this.setState({
  //   a={this.state.balance
  //   });

  // onNewBalance(e) {
  //   console.log("onNewBalance", e.target.value);

  //   let acct = Number(document.getElementById("balance").value);

  //   if (e.target.id === "idDep") {
  //     this.setState({
  //       balance: "deposit"
  //     });
  //   } else if (e.target.id === "idWith") {
  //     this.setState({
  //       result: "withdraw"
  //     });
  //   } else {
  //     this.setState({ balance: null });
  //   }
  // }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#3c2aa3"
        }}
        className="App-acctComp"
      >
        <form>
          <h1> Simple Chequing Account</h1>

          {/* <div>
            Current Balance..............
            <input
              id="currentbalance"
              type="text"
              name="currentbalance"
              placeholder="Current Balance"
              value={this.state.balance}
            />
          </div> */}

          <div>
            Amount to be processed ...
            <input
              id="amount"
              type="text"
              placeholder="Enter dollar amount"
              onChange={this.onInput}
            />
          </div>

          <div>
            New Balance.............................
            <input
              id="result"
              type="text"
              name="result"
              placeholder="New Balance"
              value={this.state.balance}
            />
          </div>

          <div>
            What would you like to do?
            <button id="idDep" type="button" onClick={this.onAction}>
              Deposit
            </button>
            <button id="idWith" type="button" onClick={this.onAction}>
              Withdraw
            </button>
            <br />
            <br />
          </div>
        </form>
      </div>
    );
  }
}
export default AcctContainer;
