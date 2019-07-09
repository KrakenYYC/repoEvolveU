import React, { Component } from "react";

class AcctMultiple extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   accounts: this.propaccounts,
    //   newName: this.props.newName,
    //   newBalance: this.props.newBalance
    // };
    //lets AcctContainer bind these functions
    this.onUpdateAccounts = this.onUpdateAccounts.bind(this);
    this.onDeposit = this.onDeposit.bind(this);
    this.onWithdraw = this.onWithdraw.bind(this);
    //creates a reference to this single account
    this.myRef = React.createRef();
    //creates a reference to amount and name
    // this.inputAmount = React.createRef();
    // this.inputName = React.createRef();
    //sets account from App to this.state.account
    // this.props.accounts = this.state.accounts;
  }

  onUpdateAccounts(e) {
    let amount = Number(document.getElementById("amount").value);
    let name = document.getElementById("accName").value;
    let id = this.state.accList;

    if (e.target.id === "idDeposit") {
      this.props.accounts.onDeposit(amount);
      this.setState({
        accounts: this.props.accounts
      });
    } else if (e.target.id === "idWithdraw") {
      this.props.accounts.onWithdraw(amount);
      this.setState({
        accounts: this.props.accounts
      });
    } else if (e.target.id === "idRename") {
      this.props.accounts.onRename(name);
      const newName = prompt("Please enter new Account Name");
      this.props.accounts.onRename(newName);
      this.setState({
        accounts: this.props.accounts
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
      accounts: this.props.accounts
    });
  }

  onDeposit() {
    const value = Number(this.inputAmount.current.value);
    if (!isNaN(value)) {
      this.props.accounts.onDeposit(value);
      this.onUpdate();
    }
  }

  onWithdraw() {
    const value = Number(this.inputAmount.current.value);
    if (!isNaN(value)) {
      this.props.accounts.onWithdraw(value);
      this.onUpdate();
    }
  }

  //new item not working
  onClose() {
    const value = Number(this.inputAmount.current.value);
    if (!isNaN(value)) {
      this.props.accounts.onClose(value);
      this.onUpdate();
    }
  }

  onName = () => {
    //id={id="Single" ? {{this.account.showName()} : null}
  };

  render() {
    console.log("inAcctMultiple", this.props.accounts);
    return (
      <div
        style={{
          backgroundColor: "#3c2aa3"
        }}
        className="App-acctComp"
      >
        <div className="Multiple">
          <div id="accName">Name: {this.props.name}</div>
          {/* original {this.account.showName()} */}
          <div>Balance: {this.props.balance}</div>
          {/* original {this.account.showBalance()} */}

          <div>
            Amount to be processed
            <input
              id="amount"
              type="text"
              size="30"
              placeholder="Enter dollar amount"
              ref={this.myRef}
            />
            <br />
          </div>

          <div>
            <button
              id="idDeposit"
              type="button"
              onClick={this.onUpdateAccounts}
            >
              Dep(+)
            </button>

            <button
              id="idWithdraw"
              type="button"
              onClick={this.onUpdateAccounts}
            >
              Wdw(-)
            </button>

            <button id="idRename" type="button" onClick={this.onUpdateAccounts}>
              Rename
            </button>

            <button id="idClose" type="button" onClick={this.onUpdateAccounts}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default AcctMultiple;
