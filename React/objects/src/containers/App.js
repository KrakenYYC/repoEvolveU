import React, { Component } from "react";

// icons
import logo from "../images/logo.svg";
import math from "../images/calc.svg";
import account from "../images/account.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";

// mini component functions per icon which will change to something interesting
import MathContainer from "./MathContainer";
import AcctContainer from "./AcctContainer";
import TwitterComponent from "../components/TwitterComponent";
import LinkedinComponent from "../components/LinkedinComponent";
import YoutubeComponent from "../components/YoutubeComponent";
import IconComponent from "../components/IconComponent";
// import Test from "./components/Functions/Test";

// css for App
import "../styles/App.css";

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
    //just a side task assigning a variable name to the functions
    const element1 = <MathContainer name="Math" />;
    const element2 = <AcctContainer name="Account" />;
    const element3 = <LinkedinComponent name="Linkedin" />;
    const element4 = <TwitterComponent name="Twitter" />;
    const element5 = <YoutubeComponent name="Youtube" />;

    return (
      <div className="App">
        <div className="App-top">
          <h1> What a Wonderful World!, {this.whichOne}</h1>
        </div>

        <div className="App-img">
          <img
            src={logo}
            className="App-logo-img"
            alt="r"
            title="Logo"
            onClick={this.handleClick}
          />

          <img
            src={math}
            className="App-math-img"
            alt="m"
            title="Math"
            onClick={this.handleClick}
          />
          <img
            src={account}
            className="App-acct-img"
            alt="l"
            title="Account"
            onClick={this.handleClick}
          />
          <img
            src={linkedin}
            className="App-instagram-img"
            alt="i"
            title="LinkedIn"
            onClick={this.handleClick}
          />
          <img
            src={twitter}
            className="App-twitter-img"
            alt="t"
            title="Twitter"
            onClick={this.handleClick}
          />
          <img
            src={twitter}
            className="App-twitter-img"
            alt="y"
            title="YouTube"
            onClick={this.handleClick}
          />
        </div>

        <div className="App-switch">
          {(() => {
            switch (this.whichOne) {
              case "Math":
                return <MathContainer />;
              case "Account":
                return <AcctContainer />;
              case "LinkedIn":
                return <LinkedinComponent />;
              case "Twitter":
                return <TwitterComponent />;
              case "YouTube":
                return <YoutubeComponent />;
              default:
                return <IconComponent />;
            }
          })()}
        </div>
      </div>
    );
  }
}
export default App;
