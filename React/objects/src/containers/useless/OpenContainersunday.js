import React, { Component } from "react";
import AcctContainer from "./AcctContainer";

class OpenContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newName: "",
      newBalance: 0
      // accList: []
    };

    this.onCreateAccount = this.onCreateAccount.bind(this);
  }

  componentDidMount() {
    this.newName.focus();
  }

  onCreateAccount(e) {
    console.log(this.state.newName, this.state.newBalance, e.target);
    const NewAccount = () => (
      <AcctContainer name={this.state.name} balance={this.state.balance} />
    );
    return NewAccount;
  }

  //     const NewAccount = props => <div>{props.children}</div>

  // export default () => <NewAccount><h1>Hello word</h1></NewAccount>

  // render () {
  //   return (
  //     <div className='container'>
  //       <Picture key={picture.id} src={picture.src}>
  //           //what is placed here is passed as props.children
  //       </Picture>
  //     </div>
  //   )
  // }

  // let newAccount = this.state.newAccount

  // (
  //   <AcctContainer
  //     newName={this.state.newName}
  //     newBalance={this.state.newBalance}
  //   />
  // );
  // console.log(newAccount);
  // render () {
  // return
  // <div>
  // <AcctContainer newName={this.state.newName} newBalance={this.state.newBalance}
  // </div>
  // <div className='App-acctComp'>
  //   <App-acctComp key={app-acctcomp.id} src={picture.src}>
  //       //what is placed here is passed as props.children
  //   </App-acctComp>
  // </div>
  //   )
  // }

  // let newName = document.getElementById("accName").value;
  // let newBalance = Number(document.getElementById("amount").value);
  //let id = accList[i].value;

  // this.accList.onOpen(newName, newBalance);
  // this.setState({
  //   accList: this.accList

  // if (this.state.newName === 1) {
  //   alert("We won't let you go");
  // } else if {

  // (this.state.newName.length > 0) {
  //   const newName = this.state.newAccountName;
  //   const adjustmentValue = this.state.newAccountBalance;
  //   const adjustmentType = "open";
  //   this.props.adjustAccount(
  //     accountIndex,
  //     adjustmentType,
  //     adjustmentValue
  //   );
  // } else {
  //   this.newAccountName.focus();
  //}

  // }

  // handleChange(e) {
  //   this.setState({
  //     name: e.target.value
  //   });
  // }
  // handleAddAccount() {
  //   this.onOpen();
  //   //   this.state.value.push(this.state.name)
  //   //   this.setState(
  //   //     this.state
  //   //   )
  //   //   this.state
  //   //   console.log(this.state.value)
  // }

  // handleDeleteAccount(v) {
  //   for (var i = 0; i < this.state.value.length; i++) {
  //     if (this.state.value[i] == v) {
  //       delete this.state.value[i];
  //     }
  //   }
  //   this.setState({
  //     value: this.state.value
  //   });
  //   console.log(this.state.value);
  // }

  render() {
    // let { newName } = this.state; //new line
    // let { newBalance } = this.state;
    return (
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
            // newName={newName => {
            //   this.newName = newName;
            // }}
            onChange={input => this.setState({ newName: input.target.value })}
            //onChange={ this.handleChange } //new

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
            // onClick={this.onCreateAccount}
            onClick={() => {
              if (this.state.newName.length > 0) {
                const name = this.state.newName;
                const balance = this.state.newBalance;

                this.props.onCreateAccount(name, balance);
              } else {
                this.newAccountName.focus();
              }
            }}

            //onClick={() => this.onOpen()}
            // ref={newAccount => {
            //   this.newAccount = newAccount;
            // }}
            // onChange={createNew =>
            //   this.setState({ newName: createNew.target.value })
            // }
            // value={this.state.newAccount}
          >
            Open
          </button>
          {/* {value.map((newName) => {
          return <div>
            <h1 className="font"><button className="allbutton" 
            onClick={this.handledelTodoItem.bind(this, v)}>DelTodoItem</button>
            {v}</h1></div> */}
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
