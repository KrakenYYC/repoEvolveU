import React, { Component } from "react";
import "./RAccounts.css";

class McctenContainer extends Component {
  constructor(props) {
    super(props);
    // this.myRef = React.createRef();
  }

  render() {
    return (
      <div className="AccountsListBox">
        <p>
          <span className="AccountLabel">Account:</span>
          <span className="AccountValue">{this.props.account.name}</span>
        </p>
        <p>
          <span className="AccountLabel">Balance:</span>
          <span className="AccountValue">{this.props.account.balance}</span>
        </p>
        <p className="AccountButtonP">
          <span className="AccountLabel">Adjust:</span>
          <span>
            <input type="text" className="AccountField" ref={this.myRef} />
          </span>
        </p>
        <p className="AccountButtonP">
          <button
            className="AccountButton"
            onClick={() => {
              const adjustmentValue = this.myRef.current.value;
              if (adjustmentValue !== "") {
                const accountIndex = this.props.index;
                const adjustmentType = "rename";
                this.myRef.current.value = "";
                this.props.adjustAccount(
                  accountIndex,
                  adjustmentType,
                  adjustmentValue
                );
              }
            }}
          >
            Rename
          </button>
          <button
            className="AccountButton"
            onClick={() => {
              const adjustmentValue = Number(this.myRef.current.value);
              if (!isNaN(adjustmentValue)) {
                const accountIndex = this.props.index;
                const adjustmentType = "deposit";
                this.myRef.current.value = "";
                this.props.adjustAccount(
                  accountIndex,
                  adjustmentType,
                  adjustmentValue
                );
              }
            }}
          >
            Deposit
          </button>
          <button
            className="AccountButton"
            onClick={() => {
              const adjustmentValue = Number(this.myRef.current.value);
              if (
                !isNaN(adjustmentValue) &&
                adjustmentValue <= this.props.account.balance
              ) {
                const accountIndex = this.props.index;
                const adjustmentType = "withdraw";
                this.myRef.current.value = "";
                this.props.adjustAccount(
                  accountIndex,
                  adjustmentType,
                  adjustmentValue
                );
              }
            }}
          >
            Withdraw
          </button>

          <button
            className="AccountButton"
            onClick={() => {
              const adjustmentValue = this.myRef.current.value;
              const accountIndex = this.props.index;
              const adjustmentType = "close";
              this.myRef.current.value = "";
              this.props.adjustAccount(
                accountIndex,
                adjustmentType,
                adjustmentValue
              );
            }}
          >
            Close
          </button>
        </p>
      </div>
    );
  }
}

export default McctenContainer;
