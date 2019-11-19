import React, { Component } from "react";
import AccountsPOJO from '../components/AccountsPOJO'



class AcctsControl extends Component {
  constructor(props) {
    super(props);

//     this.state = {
//       // newAccountName: "",
//       // newAccountBalance: 0,
//       minBalance: "",
//       maxBalance: "",
// totalBalance: ""
//     };
this.accList= new AccountsPOJO;
  }

  render() {
    const curState = this.props.curState;

    let totalBalance = 0;

    if (curState.accounts.length > 0) {
      this.accounts.findMin(minBalance);
      this.setState({
        accounts: this.accounts
      });

      // onUpdate() {
      //   this.setState({
      //     accounts: this.accounts
      //   });
      // };

      // findMax() {
      //   const value = Number(this.inputAmount.current.value);
      //   if (!isNaN(value)) {
      //     this.account.findMax(value);
      //     this.onUpdate();
      //   }
      // };

      // const maxReducer = (max, current) => Math.max(max, current);
      // const minReducer = (min, current) => Math.min(min, current);
      // const totalReducer = (value, current) => value + current;

      // const maxBalance = currentState.accounts
      //   .map(account => account.balance)
      //   .reduce(maxReducer);
      // const minBalance = currentState.accounts
      //   .map(account => account.balance)
      //   .reduce(minReducer);

      // totalBalance = currentState.accounts
      //   .map(account => account.balance)
      //   .reduce(totalReducer);

      // const isMaxBalance = account => account.balance === maxBalance;
      // const isMinBalance = account => account.balance === minBalance;

      // minBalanceAccount =
      //   currentState.accounts[currentState.accounts.findIndex(isMinBalance)]
      //     .name;

      // maxBalanceAccount =
      //   currentState.accounts[currentState.accounts.findIndex(isMaxBalance)]
      //     .name;
//     }

//     return (
//       <div className="AccountsControllerSection">
//         <div className="AccountsControllerBox">
//           <h4>Accounts Overview:</h4>
//           <p>
//             <span className="AccountLabel">Maximfffffffum:</span>
//             <span className="AccountValue">{maxBalanceAccount}</span>
//           </p>
//           <p>
//             <span className="AccountLabel">Minimum:</span>
//             <span className="AccountValue">{minBalanceAccount}</span>
//           </p>
//           <p>
//             <span className="AccountLabel">Total:</span>
//             <span className="AccountValue">{totalBalance}</span>
//           </p>
//         </div>

//         <div className="AccountsControllerBox">
//           <h4>Open New Account:</h4>
//           <p>
//             <span className="AccountLabel">Name:</span>
//             <span>
//               <input
//                 type="text"
//                 className="AccountField"
//                 ref={newAccountName => {
//                   this.newAccountName = newAccountName;
//                 }}
//                 onChange={input =>
//                   this.setState({ newAccountName: input.target.value })
//                 }
//                 value={this.state.newAccountName} //value=this.setState({newAccountName});
//               />
//             </span>
//           </p>

//           <p>
//             <span className="AccountLabel">Balance:</span>
//             <span>
//               <input
//                 type="text"
//                 className="AccountField"
//                 onChange={input =>
//                   this.setState({
//                     newAccountBalance: Number(
//                       input.target.value.replace(/[^0-9.]/g, "")
//                     )
//                   })
//                 }
//                 value={this.state.newAccountBalance} //see comment this.state
//               />
//             </span>
//           </p>

//           <p className="AccountButtonP">
//             <button
//               className="AccountButton"
//               onClick={() => {
//                 if (this.state.newAccountName.length > 0) {
//                   //see comment this.state
//                   const accountIndex = this.state.newAccountName; //see comment
//                   const adjustmentValue = this.state.newAccountBalance; //see comment
//                   const adjustmentType = "open";
//                   this.props.adjustAccount(
//                     accountIndex,
//                     adjustmentType,
//                     adjustmentValue
//                   );
//                 } else {
//                   this.newAccountName.focus();
//                 }
//               }}
//             >
//               Open
//             </button>
//           </p>
//         </div>
//       </div>
//     );
//   }
// }

//create the card



//maybethis is the controller?
class AcctsContainer extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#3c2aa3"
        }}
        className="App-acctComp"
      >
        <div>
          <div id="accName">Name: {this.account.showName()}</div>
          <div>Balance: {this.account.showBalance()}</div>
          <div>
            Amount to be processed
            <input
              id="amount"
              type="text"
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
              //            .
              // .
              //             .
              onClick={() => {
                const jack = this.myRef.current.value;
                if (jack !== "") {
                  const accName = this.props.index;
                  //const  = "rename";
                  this.myRef.current.value = "";
                  this.props.adjustAccount(
                    accName,
                    //adjustmentType,
                    jack
                  );
                }
              }}
            >
              Dep(+)
            </button>
          
            <button
              id="idWithdraw"
              type="button"
              onClick={this.onUpdateAccount}
            >
              Wdw(-)
            </button>
            <button id="idRename" type="button" onClick={this.onUpdateAccount}>
              Rename
            </button>
            <button id="idClose" type="button" onClick={this.onUpdateAccount}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

class OpenContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newName: "",
      newBalance: 0,
      accounts: this.props.accounts,
      accList: []
      //for map function
      // for (let i = 0; i < 10; i++) {
      //   accList.push({
      //       name: chance.name(),
      //       balance: chance.balance({ full: true })
    };
    // for map function
    //     this.state = { accList };
    this.onCreateAccount = this.onCreateAccount.bind(this);
    this.accounts = this.state.accounts;
  }

  //bunch of if statements that are on the account not here

  onCreateAccount(e) {
    console.log(this.state.newName, this.state.newBalance, e.target);
    let amount = Number(document.getElementById("amount").value);
    let name = document.getElementById("accName").value;
    let id = this.state.accList;
    // const NewAccount = () => (
    //   <AcctContainer name={this.state.name} balance={this.state.balance} />
    // );
    // return NewAccount;
  }

  //it renders the accounts controller and the single account
  //which renders the

  render() {
    return (
      <div
        style={{
          backgroundColor: "#3c2aa3"
        }}
        className="App-acctCompLong"
      >
        {/* for map function
  render() {
    return (<div>
    {this.state.people.map((person, index) => (
        <p>Hello, {person.name} from {person.country}!</p>
    ))}
    </div>); */}

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
            onChange={input => this.setState({ newName: input.target.value })}
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
                newBalance: Number(input.target.value.replace(/[^0-9.]/g, ""))
              })
            }
            value={this.state.newBalance}
          />
          <button
            id="open"
            className="Round"
            type="text"
            size="10"
            placeholder="Open"
            onClick={() => {
              if (this.state.newName.length > 0) {
                const name = this.state.newName;
                const balance = this.state.newBalance;

                this.props.onCreateAccount(name, balance);
              } else {
                this.newAccountName.focus();
              }
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
            size="10"
            placeholder="Create Account First"
            onChange={input =>
              this.setState({
                newBalance: Number(input.target.value.replace(/[^0-9.]/g, ""))
              })
            }
            value={this.state.newBalance}
          />
          Maximum: ($)
          <input
            id="idMaximum"
            type="text"
            className="MinMaxInputs"
            size="10"
            placeholder="Create Account First"
            onChange={input =>
              this.setState({
                newBalance: Number(input.target.value.replace(/[^0-9.]/g, ""))
              })
            }
            value={this.state.newBalance}
          />
          Total: ($)
          <input
            id="idTotal"
            type="text"
            className="MinMaxInputs"
            size="10"
            placeholder="Total Balance"
            onChange={input =>
              this.setState({
                newBalance: Number(input.target.value.replace(/[^0-9.]/g, ""))
              })
            }
            value={this.state.newBalance}
          />
        </div>
      </div>
    );
  }
}