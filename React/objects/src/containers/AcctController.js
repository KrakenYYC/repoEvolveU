import React, { Component } from "react";
import AccountsPOJO from "../components/AccountsPOJO";
import AcctMultiple from "./AcctMultiple";

<<<<<<< HEAD
//import AcctTable from "./AcctTable";
=======
>>>>>>> ce5400e42a445aa09eb8e014d59e7144f3466829
class AcctController extends Component {
  constructor(props) {
    super(props);

    this.state = {
<<<<<<< HEAD
      minValue: 0,
      maxValue: 0,
      totValue: 0
    };
    this.accList = new AccountsPOJO();
    this.nameref = React.createRef();
    this.balanceref = React.createRef();

    this.onCreateAccount = this.onCreateAccount.bind(this);
    this.accList.onOpen("me", 54);
    this.accList.onOpen("you", 6);
  }

  //bunch of if statements that are on the account not here
  //const accList = this.accList = [];

  onCreateAccount(e) {
    console.log(
      "imhere in create account",
      this.state.newName,
      this.state.newBalance,
      this.accList,
      this.props
    );
    // let name = this.state.newName;
    // let amount = this.state.newBalance;
    // let NewAccount = this.NewAccount;

    const newName = document.getElementById("idName").value;
    const newBalance = Number(document.getElementById("idBalance").value);
    this.accList.onOpen(newName, newBalance);
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
  }

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
    // const accList = this.NewAccount.accList.map(item => {
    //   return <AcctSingle key={item.id} account={item} />;
    // });
=======
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
>>>>>>> ce5400e42a445aa09eb8e014d59e7144f3466829
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
<<<<<<< HEAD
                ref={newName => {
                  this.newName = newName;
                }}
                onChange={input =>
                  this.setState({ newName: input.target.value })
                }
                //value={this.state.newName}
=======
                ref={name => {
                  this.name = name; //newnaem
                }}
                // onChange={input =>
                //   this.setState({ newNaem: input.target.value })
                // }
                // value={this.state.newNaem}
>>>>>>> ce5400e42a445aa09eb8e014d59e7144f3466829
              />
              Balance: ($)
              <input
                id="idBalance"
                type="text"
                className="OpenInputs"
                size="10"
                placeholder=""
<<<<<<< HEAD
                onChange={input =>
                  this.setState({
                    newBalance: Number(
                      input.target.value.replace(/[^0-9.]/g, "")
                    )
                  })
                }
                //value={this.state.newBalance}
=======
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
>>>>>>> ce5400e42a445aa09eb8e014d59e7144f3466829
              />
              <button
                id="open"
                className="Round"
                type="text"
                size="10"
                placeholder="Open"
<<<<<<< HEAD
                // onClick={() => {
                onClick={this.onCreateAccount}

                //   const name =
                // }

                // }
                // onClick={() => {
                //   if (this.state.newName.length > 0) {
                //     const name = this.state.newName;
                //     const balance = this.state.newBalance;
                //     this.onCreateAccount(name, balance);

                //     // this.props.onCreateAccount(name, balance);
                //   } else {
                //     this.state.newName;
                //   }
                // }}

                // onClick={() => removeProduct(product)}
=======
                onClick={() => {
                  const name = this.state.name; //state.newnaem
                  const balance = this.state.newBalance;
                  this.onCreateAccount(name, balance);
                }}
>>>>>>> ce5400e42a445aa09eb8e014d59e7144f3466829
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
<<<<<<< HEAD
                onChange={input =>
                  this.setState({
                    myMinimum: Number(
                      input.target.value.replace(/[^0-9.]/g, "")
                    )
                  })
                }
                value={this.props.myMinimum}
=======
                onChange={this.onFindMinimum}
                value={this.minValue}
>>>>>>> ce5400e42a445aa09eb8e014d59e7144f3466829
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
<<<<<<< HEAD
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
        <div>
          <AcctMultiple id="Multiple" />
=======
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
>>>>>>> ce5400e42a445aa09eb8e014d59e7144f3466829
        </div>
      </div>
    );
  }
}
export default AcctController;
