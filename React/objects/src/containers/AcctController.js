import React, { Component } from "react";
import AccountsPOJO from "../components/AccountsPOJO";
import AcctMultiple from "./AcctMultiple";

class AcctController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //I AM THE PARENT
      // newName: "",
      // newBalance: 0,
      // minValue: 0,
      // maxValue: 0,
      // totValue: 0
    };
    this.accList = new AccountsPOJO();
    this.onCreateAccount = this.onCreateAccount.bind(this);
    this.accList.onOpen("me", 54);
    this.accList.onOpen("you", 6);
    this.accList.onOpen("her", 9);
  }

  onCreateAccount = e => {
    const name = document.getElementById("idName").value; //newnaem
    const newBalance = Number(document.getElementById("idBalance").value);
    this.accList.onOpen(name, newBalance); //newnaem
    this.setState({ name: name, newBalance: newBalance }); //newnaem
  };

  onPickAccount = id => {
    // console.log("im looking for target", id.target);
    // console.log("i may be parent", id.target.parentNode);
    return this.accList.accList.findIndex(item => item.id === Number(id));
  };

  onFindMinimum = e => {
    console.log(Math.min(this.accList));
    console.log(this.minValue);
    // Math.min(this.accList);
    var myMinimum = this.accList;
    Math.min(...myMinimum);
  };

  //ways to make sure min max stay current
  onFindMaximum = e => {};

  onFindTotal = e => {};

  onClose = id => {
    this.accList.onClose(id);
    this.setState({ nonsense: null });
  };

  onDeposit = (account, amount) => {
    console.log("whereami", account.accBalance);
    console.log("this from single", this.props.account);
    let accList = this.accList.accList;
    let index = accList.indexOf(account);
    accList[index].onDeposit(amount);
    this.setState({ account: account });
  };

  onWithdraw = (account, amount) => {
    console.log("whereami", account.accBalance);
    console.log("howdy", this.props.account);
    let accList = this.accList.accList;
    let index = accList.indexOf(account);
    accList[index].onWithdraw(amount);
    this.setState({ account: account });
  };

  onRename = account => {
    console.log("whereami", account.accBalance);
    console.log("this from single", this.props.account);
    let accList = this.accList.accList;
    let index = accList.indexOf(account);
    const name = prompt("Please enter new Account Name");
    accList[index].onRename(name);
    this.setState({ account: account });
  };

  render() {
    return (
      <div>
        <div>
          <div
            style={{
              backgroundColor: "#3c2aa3"
            }}
            className="App-acctCompLong"
          >
            <div>
              <h3>Account Management</h3>
              Account Name:
              <input
                id="idName"
                type="text"
                className="OpenInputs"
                size="10"
                placeholder=""
                ref={name => {
                  this.name = name; //newnaem
                }}
                // onChange={input =>
                //   this.setState({ newNaem: input.target.value })
                // }
                // value={this.state.newNaem}
              />
              Balance: ($)
              <input
                id="idBalance"
                type="text"
                className="OpenInputs"
                size="10"
                placeholder=""
                ref={newBalance => {
                  this.newBalance = newBalance;
                }}
                //   onChange={input =>
                //     this.setState({
                //       newBalance: Number(
                //         input.target.value.replace(/[^0-9.]/g, "")
                //       )
                //     })
                //   }
                //   value={this.state.newBalance}
              />
              <button
                id="open"
                className="Round"
                type="text"
                size="10"
                placeholder="Open"
                onClick={() => {
                  const name = this.state.name; //state.newnaem
                  const balance = this.state.newBalance;
                  this.onCreateAccount(name, balance);
                }}
              >
                Open
              </button>
              <br />
              Minimum: ($)
              <input
                id="idMinimum"
                type="text"
                className="MinMaxInputs"
                size="13"
                placeholder="Create Account First"
                onChange={this.onFindMinimum}
                value={this.minValue}
              />
              Maximum: ($)
              <input
                id="idMaximum"
                type="text"
                className="MinMaxInputs"
                size="13"
                placeholder="Create Account First"
                onChange={input =>
                  this.setState({
                    myMaximum: Number(
                      input.target.value.replace(/[^0-9.]/g, "")
                    )
                  })
                }
                value={this.props.myMaximum}
              />
              Total: ($)
              <input
                id="idTotal"
                type="text"
                className="MinMaxInputs"
                size="13"
                placeholder="Total Balance"
                onChange={input =>
                  this.setState({
                    myTotal: Number(input.target.value.replace(/[^0-9.]/g, ""))
                  })
                }
                value={this.props.myTotal}
              />
            </div>
            <div />
          </div>
          <h3>LIST OF ACCOUNTS</h3>
        </div>
        <div />

        <div className="CreateArray" onClick={this.onPickAccount}>
          {this.accList.accList.length &&
            this.accList.accList.map((account, i) => {
              return (
                // <div classNaem="CreateArray" onClick={this.onPickAccount}>
                <AcctMultiple
                  // classNaem="CreateArray"
                  // onClick={this.onPickAccount}
                  account={this.accList.accList[i]}
                  name={account.accName}
                  balance={account.accBalance}
                  //amount={this.props.amount}
                  id={account.id}
                  onDeposit={this.onDeposit}
                  onWithdraw={this.onWithdraw}
                  onRename={this.onRename}
                  onClose={this.onClose}
                  // onShowBalance={account.}
                  //other functions
                  key={i}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
export default AcctController;
