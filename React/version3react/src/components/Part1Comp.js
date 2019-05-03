import React, { Component } from "react";
import NextLevelComp from "./NextLevelComp";

class Part1Comp extends Component {
  constructor() {
    super();
    this.state = { count: 0 }; //setting state for changeable object
  }

  onPushMe = () => {
    console.log("before", this.state.count);
    this.setState({ count: this.state.count + 1 }); //function to change state
    console.log("after", this.state.count);
    console.log("you pushed me");
    console.log("my number is", this.state.count + 1);
  };
  onAddOne = () => {
    console.log("im in onAddOne");
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const Greeting = () => (
      <h6>
        "im a const function in the render method and when used in the return
        requires curly brackets"
      </h6>
    );

    const message =
      "im const text in render method and just needs name of const in an element to render";
    const message1 = "im from part1comp";
    return (
      <div>
        <h6>Hello from Part1Comp</h6>
        <button id="btnClick" type="button" onClick={this.onPushMe}>
          PushMe
        </button>
        <h6>It is {this.state.count}</h6>
        {Greeting()}
        <h6>im in an element {message}</h6>
        <NextLevelComp msg="Hello from part1" Linden={this.onAddOne} />
      </div>
    );
  }
}

export default Part1Comp;
