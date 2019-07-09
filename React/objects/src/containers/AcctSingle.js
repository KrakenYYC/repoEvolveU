import React, { Component } from "react";

class AcctSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: this.props.account
      // name: this.props.name,
      // balance: this.props.balance
    };
    //lets AcctContainer bind these functions
    this.onUpdateAccount = this.onUpdateAccount.bind(this);
    this.onDeposit = this.onDeposit.bind(this);
    this.onWithdraw = this.onWithdraw.bind(this);
    //creates a reference to this single account
    this.myRef = React.createRef();
    //creates a reference to amount and name
    // this.inputAmount = React.createRef();
    // this.inputName = React.createRef();
    //sets account from App to this.state.account
    this.account = this.state.account;
  }

  onUpdateAccount(e) {
    let amount = Number(document.getElementById("amount").value);
    let name = document.getElementById("accName").value;
    //let id = this.state.accList;

    if (e.target.id === "idDeposit") {
      this.account.onDeposit(amount);
      this.setState({
        account: this.account
      });
    } else if (e.target.id === "idWithdraw") {
      this.account.onWithdraw(amount);
      this.setState({
        account: this.account
      });
    } else if (e.target.id === "idRename") {
      this.account.onRename(name);
      const newName = prompt("Please enter new Account Name");
      this.account.onRename(newName);
      this.setState({
        account: this.account
      });
    } else if (e.target.id === "idClose") {
      this.props.onClose(this.props.id);

      // this.setState({
      //   account: this.account
      // });
    } else {
      this.setState({ accBalance: null });
    }
  }

  onUpdate() {
    this.setState({
      account: this.account
    });
  }

  onDeposit() {
    const value = Number(this.inputAmount.current.value);
    if (!isNaN(value)) {
      this.account.onDeposit(value);
      this.onUpdate();
    }
  }

  onWithdraw() {
    const value = Number(this.inputAmount.current.value);
    if (!isNaN(value)) {
      this.account.onWithdraw(value);
      this.onUpdate();
    }
  }

  //new item not working
  onClose() {
    const value = Number(this.inputAmount.current.value);
    if (!isNaN(value)) {
      this.account.onClose(value);
      this.onUpdate();
    }
  }

  onName = () => {
    //id={id="Single" ? {{this.account.showName()} : null}
  };

  render() {
    console.log("inAcctSingle", this.account);
    return (
      <div
        style={{
          backgroundColor: "#3c2aa3"
        }}
        className="App-acctComp"
      >
        <div>
          <div id="accName">Name: {this.account.showName()}</div>
          {/* original {this.account.showName()} */}
          <div>Balance: {this.account.showBalance()}</div>
          {/* original {this.account.showBalance()} */}

          <div>
            Amount to be processed
            <input
              id="amount"
              type="text"
              placeholder="Enter dollar amount"
              ref={this.myRef}
            />
            <br />
          </div>

          <div>
            <button id="idDeposit" type="button" onClick={this.onUpdateAccount}>
              Dep(+)
            </button>

            <button
              id="idWithdraw"
              type="button"
              onClick={this.onUpdateAccount}
            >
              Wdw(-)
            </button>

            <button id="idRename" type="button" onClick={this.onUpdateAccount}>
              Rename
            </button>

            {/* <button id="idClose" type="button" onClick={this.onUpdateAccount}>
              Close
            </button> */}
          </div>
        </div>
      </div>
    );
  }
}
export default AcctSingle;
