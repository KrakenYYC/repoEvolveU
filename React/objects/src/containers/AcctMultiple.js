import React, { Component } from "react";

class AcctMultiple extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      accounts: this.props.accounts,
      newName: this.props.newName,
      newBalance: this.props.newBalance
    };
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
    this.accounts = this.state.accounts;
  }

  onUpdateAccounts(e) {
    let amount = Number(document.getElementById("amount").value);
    let name = document.getElementById("accName").value;
    let id = this.state.accList;

    if (e.target.id === "idDeposit") {
      this.accounts.onDeposit(amount);
      this.setState({
        accounts: this.accounts
      });
    } else if (e.target.id === "idWithdraw") {
      this.accounts.onWithdraw(amount);
      this.setState({
        accounts: this.accounts
      });
    } else if (e.target.id === "idRename") {
      this.accounts.onRename(name);
      const newName = prompt("Please enter new Account Name");
      this.accounts.onRename(newName);
      this.setState({
        accounts: this.accounts
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
      accounts: this.accounts
    });
  }

  onDeposit() {
    const value = Number(this.inputAmount.current.value);
    if (!isNaN(value)) {
      this.accounts.onDeposit(value);
      this.onUpdate();
    }
  }

  onWithdraw() {
    const value = Number(this.inputAmount.current.value);
    if (!isNaN(value)) {
      this.accounts.onWithdraw(value);
      this.onUpdate();
    }
  }

  //new item not working
  onClose() {
    const value = Number(this.inputAmount.current.value);
    if (!isNaN(value)) {
      this.accounts.onClose(value);
      this.onUpdate();
    }
  }

  onName = () => {
    //id={id="Single" ? {{this.account.showName()} : null}
  };

  render() {
    console.log("inAcctMultiple", this.accounts);
    return (
      <div
=======
      name: this.props.name,
      balance: this.props.balance,
      amount: this.props.amount
    };

    this.myRef = React.createRef();
    // this.name = this.state.name;
    // this.balance = this.state.balance;
    // this.amount = this.state.amount;
  }

  onClose = () => {
    this.props.onClose(this.props.index);
  };

  onUpdate() {
    this.setState({
      account: this.props.account
    });
  }

  onAdjust = (name, id, balance) => {
    const savedState = this.state;
    if (id === "idDeposit") {
      savedState.accounts[name].balance += balance;
    } else if (id === "idWithdraw") {
      savedState.accounts[name].balance -= balance;
    }

    this.setState(savedState);
  };

  // someFn = () => {
  //   [(inputValue = amount)];
  //   this.props.onDeposit(amount);
  // };

  render() {
    console.log("a iminmultiple props this works", this.props.balance);
    console.log("b iminmultiple state this works", this.state.amount);
    console.log("c iminmult props.account will do", this.props.account);

    return (
      <form
>>>>>>> ce5400e42a445aa09eb8e014d59e7144f3466829
        style={{
          backgroundColor: "#3c2aa3"
        }}
        className="App-acctComp"
      >
<<<<<<< HEAD
        <div className="Multiple">
          <div id="accName">Name: {this.props.newName}</div>
          {/* original {this.account.showName()} */}
          <div>Balance: {this.props.newBalance}</div>
          {/* original {this.account.showBalance()} */}

=======
        <div className="Multiple" accountname={this.props.name}>
          {/* .
          .
          . */}
          <div>Name: {this.props.name}</div>
          {/* original {this.account.showName()} */}
          {/* .
          .
          . */}
          <div>Balance: {this.props.balance}</div>
          {/* original {this.account.showBalance()} */}
          {/* .
          .
          . */}
>>>>>>> ce5400e42a445aa09eb8e014d59e7144f3466829
          <div>
            Amount to be processed
            <input
              id="amount"
              type="text"
<<<<<<< HEAD
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
=======
              // size="30"
              placeholder="Enter dollar amount"
              ref={this.myRef}
              // ref={amount => {   original
              //   this.myRef = amount;
              // }}
              //value={this.amount}
              onChange={e => this.setState({ amount: e.target.value })} //old
              //onChange={() => this.setState({ amount: e.target.value })} //new
            />
            <br />
          </div>
          {/* .
.
.
. */}

          <div>
            {/* <button   this is the original
              id="idDeposit"
              type="button"
              onClick={() => {
                this.props.onDeposit(this.state.amount);
              }}
            >
              Dep(+)
            </button> */}
            <button
              id="idDeposit"
              type="button"
              onClick={() => {
                const balance = Number(this.myRef.current.value);
                if (!isNaN(balance)) {
                  this.myRef.current.value = "";
                  this.props.onDeposit(this.props.account, balance);
                }
                // this.props.onDeposit(this.state.amount);
              }}
>>>>>>> ce5400e42a445aa09eb8e014d59e7144f3466829
            >
              Dep(+)
            </button>

            <button
              id="idWithdraw"
              type="button"
<<<<<<< HEAD
              onClick={this.onUpdateAccounts}
=======
              onClick={() => {
                const balance = Number(this.myRef.current.value);
                if (!isNaN(balance)) {
                  this.myRef.current.value = "";
                  this.props.onWithdraw(this.props.account, balance);
                }
                // this.props.onDeposit(this.state.amount);
              }}
>>>>>>> ce5400e42a445aa09eb8e014d59e7144f3466829
            >
              Wdw(-)
            </button>

<<<<<<< HEAD
            <button id="idRename" type="button" onClick={this.onUpdateAccounts}>
              Rename
            </button>

            <button id="idClose" type="button" onClick={this.onUpdateAccounts}>
=======
            <button
              id="idRename"
              type="button"
              onClick={() => {
                this.props.onRename(this.props.account);
              }}
            >
              Rename
            </button>

            <button id="idClose" type="button" onClick={this.onClose}>
>>>>>>> ce5400e42a445aa09eb8e014d59e7144f3466829
              Close
            </button>
          </div>
        </div>
<<<<<<< HEAD
      </div>
=======
      </form>
>>>>>>> ce5400e42a445aa09eb8e014d59e7144f3466829
    );
  }
}
export default AcctMultiple;
