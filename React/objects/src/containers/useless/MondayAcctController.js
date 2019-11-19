import React, { Component } from "react";
import AccountsPOJO from "../components/AccountsPOJO";
import AcctMultiple from "./AcctMultiple";

class AcctController extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newName: "",
      newBalance: 0,
      minValue: 0,
      maxValue: 0,
      totValue: 0
    };
    this.accList = new AccountsPOJO();
    // this.nameref = React.createRef();
    // this.balanceref = React.createRef();

    this.onCreateAccount = this.onCreateAccount.bind(this);
    this.accList.onOpen("me", 54);
    this.accList.onOpen("you", 6);
  }

  onCreateAccount(e) {
    console.log(
      "imhere in create account",
      this.accList.accList.length,
      this.accList
    );

    const newName = document.getElementById("idName").value;
    const newBalance = Number(document.getElementById("idBalance").value);
    this.accList.onOpen(newName, newBalance);
    //const setAccount = this.setState({ setAccount: input.target.value }); //new
  }
  //next 6 lines could be good
  // let updateMax = this.controller.maxAccount();
  // this.setState({ maxValue: updateMax });

  // let updateMin = this.controller.minAccount();
  // this.setState({ minValue: updateMin });

  // let total = this.controller.totalAccount();
  // this.setState({ total: total });
  // .
  // .
  // .
  // .
  // .

  //from old carrie stuff - 2 lines
  // this.accList.onOpen(name, amount);
  // this.setState({ accounts: this.accList });
  // const cup = () => {
  //   <AcctSingle name={this.state.newName} balance={this.state.newBalance} />;
  // };

  // render() {//can you acctually render something here?
  //             return (
  //                        let name = this.state.newName;
  //                       let amount = this.state.newBalance;

  //                        this.accList.onOpen(name, amount);
  //                       this.setState
  //                      ({accounts: this.accList});
  //                      )
  //          }
  //}
  //start the onOpen for a new account with this.state.newName and this.state.newBalance
  //we are passing those 2 items to this.accList

  // let updateMax = this.controller.maxAccount();
  //     this.setState( { maxValue: updateMax } );

  //     let updateMin = this.controller.minAccount();
  //     this.setState( { minValue: updateMin } );

  //     let total = this.controller.totalAccount();
  //     this.setState( { total: total } );
  // const NewAccount = () => (
  //   <AcctContainer name={this.state.name} balance={this.state.balance} />
  // );
  // return NewAccount;

  // onfindMin(arr) {

  //   //put in findMin function
  // }

  // onfindMax(arr) {
  //   //put in findMax function
  // }

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
                ref={newName => {
                  this.newName = newName;
                }}
                onChange={input =>
                  this.setState({ newName: input.target.value })
                }
                value={this.state.newName}
              />
              Balance: ($)
              <input
                id="idBalance"
                type="text"
                className="OpenInputs"
                size="10"
                placeholder=""
                onChange={input =>
                  this.setState({
                    newBalance: Number(
                      input.target.value.replace(/[^0-9.]/g, "")
                    )
                  })
                }
                //value={this.state.newBalance}
              />
              <button
                id="open"
                className="Round"
                type="text"
                size="10"
                placeholder="Open"
                onClick={() => {
                  const name = this.state.newName;
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
                onChange={input =>
                  this.setState({
                    myMinimum: Number(
                      input.target.value.replace(/[^0-9.]/g, "")
                    )
                  })
                }
                value={this.props.myMinimum}
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
            <div>
              {/* {this.accList.map((value, index) => {
            <AcctSingle accounts={value} index={index} key={index} />;
          })} */}

              {/* .
.
.
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
.
.
. */}
            </div>
          </div>
          <h3>LIST OF ACCOUNTS</h3>
        </div>
        <div />

        {this.accList.accList.length &&
          this.accList.accList.map((account, i) => {
            return (
              <AcctMultiple
                name={account.accName}
                balance={account.accBalance}
                key={i}
              />
            );
          })}
      </div>
    );
  }
}
export default AcctController;
