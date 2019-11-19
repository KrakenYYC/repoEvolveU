import React, { Component } from "react";

class CityContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newAcctName: "",
      newAcctBal: 0
    };
  }

  // componentDidMount() {
  //   this.newAccountName.focus();
  // }

  render() {
    const currentState = this.props.currentState;
    let maxBalanceAccount = "";
    let minBalanceAccount = "";
    let totalBalance = 0;
    let acct = document.getElementById;

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
            <span className="AccountLabel">Maximum:</span>
            <span className="AccountValue">{maxBalanceAccount}</span>
          </p>
          <p>
            <span className="AccountLabel">Minimum:</span>
            <span className="AccountValue">{minBalanceAccount}</span>
          </p>
          <p>
            <span className="AccountLabel">Total:</span>
            <span className="AccountValue">{totalBalance}</span>
          </p>
        </div>
        <div className="AccountsControllerBox">
          <h4>Open New Account:</h4>
          <p>
            <span className="AccountLabel">Name:</span>
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
            <span className="AccountLabel">Balance:</span>
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
                  const accountIndex = this.state.newAccountName;
                  const adjustmentValue = this.state.newAccountBalance;
                  const adjustmentType = "open";
                  this.props.adjustAccount(
                    accountIndex,
                    adjustmentType,
                    adjustmentValue
                  );
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

export default CityContainer;
