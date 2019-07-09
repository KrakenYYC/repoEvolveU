import React, { Component } from "react";

class AcctMultiple extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        style={{
          backgroundColor: "#3c2aa3"
        }}
        className="App-acctComp"
      >
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
          <div>
            Amount to be processed
            <input
              id="amount"
              type="text"
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
            >
              Dep(+)
            </button>

            <button
              id="idWithdraw"
              type="button"
              onClick={() => {
                const balance = Number(this.myRef.current.value);
                if (!isNaN(balance)) {
                  this.myRef.current.value = "";
                  this.props.onWithdraw(this.props.account, balance);
                }
                // this.props.onDeposit(this.state.amount);
              }}
            >
              Wdw(-)
            </button>

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
              Close
            </button>
          </div>
        </div>
      </form>
    );
  }
}
export default AcctMultiple;
