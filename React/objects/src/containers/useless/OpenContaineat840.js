import React, { Component } from "react";

class OpenContainer extends Component {
  constructor(newbalance, newname) {
    super(newbalance, newname);

    this.state = {
      newbalance: "",
      newname: ""
    };
  }

  // componentDidMount() {
  //   this.newname.focus();
  // }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#3c2aa3"
        }}
        className="App-acctCompLong"
      >
        <div>
          <h3>Account Management</h3>

          <div>
            Account Name:
            <input
              id="idName"
              type="text"
              size="30"
              placeholder=""
              usename={newname => {
                this.newname = newname;
              }}
              onChange={input => this.setState({ newname: input.target.value })}
              value={this.state.newname}
            />
          </div>

          <div>
            Balance: ($)
            <input
              id="idBalance"
              type="text"
              size="15"
              placeholder=""
              onChange={input =>
                this.setState({
                  newbalance: Number(input.target.value.replace(/[^0-9.]/g, ""))
                })
              }
              value={this.state.newbalance}
            />
          </div>

          <div>
            {" "}
            <button
              id="open"
              className="Round"
              type="text"
              size="15"
              placeholder="Open"
              onClick={this.onOpenAccount}
            >
              Open
            </button>
          </div>

          <div>
            {" "}
            Minimum: ($)
            <input
              id="idMinimum"
              type="text"
              size="15"
              placeholder=""
              onChange={input =>
                this.setState({
                  newbalance: Number(input.target.value.replace(/[^0-9.]/g, ""))
                })
              }
              value={this.state.newbalance}
            />
          </div>

          <div>
            {" "}
            Maximum: ($)
            <input
              id="idMaximum"
              type="text"
              size="15"
              placeholder=""
              onChange={input =>
                this.setState({
                  newbalance: Number(input.target.value.replace(/[^0-9.]/g, ""))
                })
              }
              value={this.state.newbalance}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default OpenContainer;
