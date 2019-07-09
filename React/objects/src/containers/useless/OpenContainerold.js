import React, { Component } from "react";

class OpenContainer extends Component {
  constructor(balance, acctname) {
    super(balance, acctname);

    this.state = {
      balance: 0
    };
    //this.setState{balance: 25}
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#3c2aa3"
        }}
        className="App-acctCompLong"
      >
        <form>
          <h3>Create Account</h3>
          <div>
            Account Name:
            <input id="open" type="text" size="30" placeholder="Account Name" />
          </div>

          <div>
            Balance:
            <input
              id="init"
              type="text"
              size="30"
              placeholder="Insert Balance"
            />
          </div>

          <br />

          <button
            className="Round"
            alt="button"
            type="button"
            placeholder="Open"
            onClick={this.createAccount}
          >
            Open Account
          </button>
        </form>
      </div>
    );
  }
}
export default OpenContainer;
