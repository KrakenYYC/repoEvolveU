import React, { Component } from "react";
import MathFunctions from "../components/MathFunctions";

class MathContainer extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    };

    this.findValue = this.findValue.bind(this);
  }
  onChange1(e) {
    console.log("onChange1", parseInt(e.target.value));
  }
  onChange2(e) {
    console.log("onChange2", parseInt(e.target.value));
  }
  findValue(e) {
    console.log("imhere", e.target.value);

    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);

    if (e.target.id === "idAdd") {
      this.setState({
        result: MathFunctions.Sum(a, b)
      });
    } else if (e.target.id === "idSub") {
      this.setState({
        result: MathFunctions.Sub(a, b)
      });
    } else if (e.target.id === "idMul") {
      this.setState({
        result: MathFunctions.Mul(a, b)
      });
    } else if (e.target.id === "idDiv") {
      this.setState({
        result: MathFunctions.Div(a, b)
      });
    } else {
      this.setState({ result: null });
    }
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: "#3c2aa3"
        }}
        className="App-mathComp"
      >
        <form>
          <h3> Simple Calculator</h3>
          <div>
            <input
              id="number1"
              type="text"
              placeholder="First number here"
              onChange={this.onChange1}
            />
          </div>
          <div>
            <input
              id="number2"
              type="text"
              placeholder="Second number here"
              onChange={this.onChange2}
            />
          </div>
          <div>
            <input
              id="result"
              type="text"
              name="result"
              placeholder="Result"
              value={this.state.result}
            />
          </div>
          <div>
            <button id="idAdd" type="button" onClick={this.findValue}>
              Add
            </button>
            <button id="idSub" type="button" onClick={this.findValue}>
              Sub
            </button>
            <button id="idMul" type="button" onClick={this.findValue}>
              Mul
            </button>
            <button id="idDiv" type="button" onClick={this.findValue}>
              Div
            </button>
            <br />
            <br />
          </div>
        </form>
      </div>
    );
  }
}
export default MathContainer;
