import React from "react";
import "./ZExercises.css";

class AccountsController extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newAccountName: "",
      newAccountBalance: 0
    };
  }

  componentDidMount() {
    this.newAccountName.focus();
  }

  render() {
    const currentState = this.props.currentState;
    let maxBalanceAccount = "";
    let minBalanceAccount = "";
    let totalBalance = 0;

    if (currentState.accounts.length > 0) {
      const maxReducer = (max, current) => Math.max(max, current);
      const minReducer = (min, current) => Math.min(min, current);
      const totalReducer = (value, current) => value + current;

      const maxBalance = currentState.accounts
        .map(account => account.balance)
        .reduce(maxReducer);
      const minBalance = currentState.accounts
        .map(account => account.balance)
        .reduce(minReducer);

      totalBalance = currentState.accounts
        .map(account => account.balance)
        .reduce(totalReducer);

      const isMaxBalance = account => account.balance === maxBalance;
      const isMinBalance = account => account.balance === minBalance;

      minBalanceAccount =
        currentState.accounts[currentState.accounts.findIndex(isMinBalance)]
          .name;

      maxBalanceAccount =
        currentState.accounts[currentState.accounts.findIndex(isMaxBalance)]
          .name;
    }

    return (
      <div className="AccountsControllerSection">
        <div className="AccountsControllerBox">
          <h4>Accounts Overview:</h4>
          <p>
            <span className="lab">Maximum:</span>
            <span className="valA">{maxBalanceAccount}</span>
          </p>
          <p>
            <span className="lab">Minimum:</span>
            <span className="valA">{minBalanceAccount}</span>
          </p>
          <p>
            <span className="lab">Total:</span>
            <span className="valA">{totalBalance}</span>
          </p>
        </div>

        <div className="AccountsControllerBox">
          <h4>O pen New Account:</h4>
          <p>
            <span className="lab">Name:</span>
            <span>
              <input
                type="text"
                className="AccountField"
                ref={newAccountName => {
                  this.newAccountName = newAccountName;
                }}
                onChange={input =>
                  this.setState({ newAccountName: input.target.value })
                }
                value={this.state.newAccountName}
              />
            </span>
          </p>

          <p>
            <span className="lab">Balance:</span>
            <span>
              <input
                type="text"
                className="AccountField"
                onChange={input =>
                  this.setState({
                    newAccountBalance: Number(
                      input.target.value.replace(/[^0-9.]/g, "")
                    )
                  })
                }
                value={this.state.newAccountBalance}
              />
            </span>
          </p>

          <p className="AccountButtonP">
            <button
              className="AccountButton"
              onClick={() => {
                if (this.state.newAccountName.length > 0) {
                  const cat = this.state.newAccountName;
                  const pig = this.state.newAccountBalance;
                  const dog = "open";
                  this.props.onAdjust(cat, dog, pig);
                } else {
                  this.newAccountName.focus();
                }
              }}
            >
              Open
            </button>
          </p>
        </div>
      </div>
    );
  }
}
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
class Account extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div className="AccountsListBox">
        <p>
          <span className="lab">Account:</span>
          <span className="valA">{this.props.account.name}</span>
        </p>
        <p>
          <span className="lab">Balance:</span>
          <span className="george">{this.props.account.balance}</span>
        </p>
        <p className="AccountButtonP">
          <span className="lab">Adjust:</span>
          <span>
            <input type="text" className="AccountField" ref={this.myRef} />
          </span>
        </p>
        <p className="AccountButtonP">
          <button
            className="AccountButton"
            onClick={() => {
              const pig = this.myRef.current.value;
              if (pig !== "") {
                const cat = this.props.index;
                const dog = "rename";
                this.myRef.current.value = "";
                this.props.onAdjust(cat, dog, pig);
              }
            }}
          >
            Rename
          </button>
          <button
            className="AccountButton"
            onClick={() => {
              const pig = Number(this.myRef.current.value);
              if (!isNaN(pig)) {
                const cat = this.props.index;
                const dog = "deposit";
                this.myRef.current.value = "";
                this.props.onAdjust(cat, dog, pig);
              }
            }}
          >
            Deposit
          </button>

          <button
            className="AccountButton"
            onClick={() => {
              const pig = Number(this.myRef.current.value);
              if (!isNaN(pig) && pig <= this.props.account.balance) {
                const cat = this.props.index;
                const dog = "withdraw";
                this.myRef.current.value = "";
                this.props.onAdjust(cat, dog, pig);
              }
            }}
          >
            Withdraw
          </button>
          <button
            className="AccountButton"
            onClick={() => {
              const pig = this.myRef.current.value;
              const cat = this.props.index;
              const dog = "close";
              this.myRef.current.value = "";
              this.props.onAdjust(cat, dog, pig);
            }}
          >
            Close
          </button>
        </p>
      </div>
    );
  }
}
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

//this is the only thing that gets exported

class Accounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: []
    };
  }

  onAdjust = (cat, dog, pig) => {
    const savedState = this.state;
    if (dog === "open") {
      const newAccount = { name: cat, balance: pig };
      savedState.accounts.push(newAccount);
    } else if (dog === "rename") {
      savedState.accounts[cat].name = pig;
    } else if (dog === "close") {
      savedState.accounts.splice(cat, 1);
    } else if (dog === "deposit") {
      savedState.accounts[cat].balance += pig;
    } else if (dog === "wi onAdjustthdraw") {
      savedState.accounts[cat].balance -= pig;
    }

    this.setState(savedState);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Module 140 - Accounts
          <AccountsController
            currentState={this.state}
            onAdjust={this.onAdjust}
          />
          <div className="AccountsListSection">
            {this.state.accounts.map((account, index) => (
              <div key={index}>
                <Account
                  account={account}
                  key={index}
                  index={index}
                  onAdjust={this.onAdjust}
                />
              </div>
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default Accounts;
