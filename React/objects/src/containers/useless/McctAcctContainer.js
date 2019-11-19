import React from "react";
import "./RAccounts.css";

class Accounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: []
    };
  }

  adjustAccount = (accountIndex, adjustmentType, adjustmentValue) => {
    const savedState = this.state;
    if (adjustmentType === "open") {
      const newAccount = { name: accountIndex, balance: adjustmentValue };
      savedState.accounts.push(newAccount);
    } else if (adjustmentType === "rename") {
      savedState.accounts[accountIndex].name = adjustmentValue;
    } else if (adjustmentType === "close") {
      savedState.accounts.splice(accountIndex, 1);
    } else if (adjustmentType === "deposit") {
      savedState.accounts[accountIndex].balance += adjustmentValue;
    } else if (adjustmentType === "withdraw") {
      savedState.accounts[accountIndex].balance -= adjustmentValue;
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
            adjustAccount={this.adjustAccount}
          />
          <div className="AccountsListSection">
            {this.state.accounts.map((account, index) => (
              <div key={index}>
                <Account
                  account={account}
                  key={index}
                  index={index}
                  adjustAccount={this.adjustAccount}
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
