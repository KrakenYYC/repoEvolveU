import React, { Component } from "react";

// icons
import react from "../images/react.svg";
import math from "../images/math.svg";
import acct from "../images/acct.svg";
import mcct from "../images/mcct.svg";
import city from "../images/city.svg";

// mini component functions per icon which will change to something interesting
import IconContainer from "./IconContainer";
import MathContainer from "./MathContainer";
import AcctSingle from "./AcctSingle";
import AcctController from "./AcctController";
import AppForFun from "./AppForFun";
import ZExercises from "./ZExercises";
import AcctMultiple from "./AcctMultiple";

import Buttons from "./Buttons";

// import Test from "./components/Functions/Test";

// css for App
import "../styles/App.css";
import AccountPOJO from "../components/AccountPOJO";

class App extends Component {
  constructor() {
    super();

    //this sets all items in the current state as null basically
    this.state = {
      what: false
    };

    this.whichOne = "React"; //this is not in state
    // this.result = result; //may need to be removed

    //this closes the constructor
  }

  //this is the function that toggles the state from true to false
  //anything that will not display will go here before the render
  //also nothing can go here that will be needed eg a variable
  handleClick = e => {
    console.log(e.target.title);
    this.setState({
      what: !this.state.what
    });
    this.whichOne = e.target.title;
  };

  render() {
    const myAccount = new AccountPOJO("Checking", 25);
    const myAccounts = new AccountPOJO("", 0);

    return (
      <div className="App">
        <div className="App-top">
          <h1> What a Wonderful World!, {this.whichOne}</h1>
        </div>

        <div className="App-Main">
          <img
            src={react}
            className="App-img"
            alt="l"
            title="React"
            onClick={this.handleClick}
          />

          <img
            src={math}
            className="App-img"
            alt="m"
            title="Math"
            onClick={this.handleClick}
          />

          <img
            src={acct}
            className="App-img"
            alt="l"
            title="Acct"
            onClick={this.handleClick}
          />

          <img
            src={mcct}
            className="App-img"
            alt="i"
            title="Mcct"
            onClick={this.handleClick}
          />

          <img
            src={city}
            className="App-img"
            alt="i"
            title="City"
            onClick={this.handleClick}
          />
          <img
            src={react}
            className="App-img"
            alt="p"
            title="Open"
            onClick={this.handleClick}
          />

          <img
            src={react}
            className="App-img"
            alt="p"
            title="MinMax"
            onClick={this.handleClick}
          />

          <img
            src={react}
            className="App-img"
            alt="p"
            title="table"
            onClick={this.handleClick}
          />
        </div>

        <div className="App-switch">
          {(() => {
            switch (this.whichOne) {
              case "Math":
                return <MathContainer />;
              case "Acct":
                return (
                  <AcctSingle
                    account={myAccount}
                    // showName="Checking"
                    // showBalance="0"
                    onClose={() => {}}
                    id={0}
                  />
                );

              case "Mcct":
                return <AcctController />;

              // case "City":
              //   return <ZExercises />;

              case "Open":
                return <AcctMultiple accounts={myAccounts} />;

              case "MinMax":
                return <AppForFun />;

              default:
                return <IconContainer />;
            }
          })()}
        </div>
      </div>
    );
  }
}
export default App;
