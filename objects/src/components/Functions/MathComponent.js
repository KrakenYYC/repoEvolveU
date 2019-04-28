import React, { Component } from "react";
import zmath from "../Functions/zmath";

class MathComponent extends Component {
  constructor() {
    super();

    this.state = {
      add: false,
      sub: false,
      mul: false,
      div: false,
      mod: false
    };

    this.number1 = "0";
    this.number2 = "0";
    this.result = "Result";
  }

  findValue = e => {
    console.log("imhere", e.target);
    this.setState({
      add: !this.state.add,
      sub: !this.state.sub,
      mul: !this.state.mul,
      div: !this.state.div,
      mod: !this.state.mod
    });
    this.result = e.target.value;
  };

  render() {
    // console.log("im2and3", zmath.sum(2, 3));
    // console.log("im12and3", zmath.div(12, 3));
    return (
      <div
        style={{
          backgroundColor: "#e7a61a",
          height: "120px"
        }}
        className="App-mathComp"
      >
        <form>
          <div>
            <input id="a" type="text" placeholder="Number 1" />

            <input id="b" type="text" placeholder="Number 2" />
          </div>
          <div>
            <input id="c" type="text" placeholder="Result" />
          </div>
          {this.result.value}
          <div>
            <button id="Add" type="button" onClick={this.findValue}>
              Add
            </button>
            <button id="Sub" type="button" onClick={this.findValue}>
              Sub
            </button>
            <button id="Mul" type="button" onClick={this.findValue}>
              Mul
            </button>
            <button id="Div" type="button" onClick={this.findValue}>
              Div
            </button>
            <button id="Mod" type="button" onClick={this.findValue}>
              Mod
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default MathComponent;
