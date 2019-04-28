import React, { Component } from "react";

// icons
import math from "./components/Pictures/calc.svg";
import youtube from "./components/Pictures/youtube.svg";
import twitter from "./components/Pictures/twitter.svg";
import linkedin from "./components/Pictures/linkedin.svg";
import instagram from "./components/Pictures/instagram.svg";

// mini component functions per icon which will change to something interesting
import MathComponent from "./components/Functions/MathComponent";
import YoutubeComponent from "./components/Functions/YoutubeComponent";
import TwitterComponent from "./components/Functions/TwitterComponent";
import LinkedinComponent from "./components/Functions/LinkedinComponent";
import InstagramComponent from "./components/Functions/InstagramComponent";
import IconComponent from "./components/Functions/IconComponent";
// import Test from "./components/Functions/Test";

// css for App
import "./App.css";

class App extends Component {
  constructor() {
    super();

    //this sets all items in the current state as null basically
    this.state = {
      what: false
    };

    this.whichOne = "React"; //this is not in state
    // this.number1 = a;
    // this.number2 = b;
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
    const element1 = <MathComponent name="Math" />;
    const element2 = <InstagramComponent name="Instagram" />;
    const element3 = <LinkedinComponent name="Linkedin" />;
    const element4 = <TwitterComponent name="Twitter" />;
    const element5 = <YoutubeComponent name="Youtube" />;

    return (
      <div className="App">
        <div className="App-Top">
          <h1> What a Wonderful World!, {this.whichOne} </h1>{" "}
        </div>
        <div className="App-Main">
          <button id="React" type="button" onClick={this.handleClick}>
            React{" "}
          </button>{" "}
          <img
            src={math}
            className="App-math"
            alt="m"
            title="Math"
            onClick={this.handleClick}
          />{" "}
          <img
            src={instagram}
            className="App-linkedin"
            alt="l"
            title="Instagram"
            onClick={this.handleClick}
          />{" "}
          <img
            src={linkedin}
            className="App-instagram"
            alt="i"
            title="LinkedIn"
            onClick={this.handleClick}
          />{" "}
          <img
            src={twitter}
            className="App-twitter"
            alt="t"
            title="Twitter"
            onClick={this.handleClick}
          />{" "}
          <img
            src={youtube}
            className="App-youtube"
            alt="y"
            title="YouTube"
            onClick={this.handleClick}
          />{" "}
        </div>
        <div>
          <div className="App-header">
            {" "}
            {(() => {
              switch (this.whichOne) {
                case "Math":
                  return <MathComponent />;
                case "Instagram":
                  return <InstagramComponent />;
                case "LinkedIn":
                  return <LinkedinComponent />;
                case "Twitter":
                  return <TwitterComponent />;
                case "YouTube":
                  return <YoutubeComponent />;
                default:
                  return <IconComponent />;
              }
            })()}{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
export default App;
