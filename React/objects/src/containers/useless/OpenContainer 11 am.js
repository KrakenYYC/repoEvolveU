import React, { Component } from "react";

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
export default OpenContainer;
