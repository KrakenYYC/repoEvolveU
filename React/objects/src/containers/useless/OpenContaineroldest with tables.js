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
        <form>
          <div>
            <h3>Account Management</h3>
            <table>
              <tr>
                <td>Account Name:</td>
                <td>
                  <input
                    id="idName"
                    type="text"
                    size="30"
                    placeholder=""
                    usename={newname => {
                      this.newname = newname;
                    }}
                    onChange={input =>
                      this.setState({ newname: input.target.value })
                    }
                    value={this.state.newname}
                  />
                </td>
                <td>Balance: ($) </td>
                <td>
                  <input
                    id="idBalance"
                    type="text"
                    size="15"
                    placeholder=""
                    onChange={input =>
                      this.setState({
                        newbalance: Number(
                          input.target.value.replace(/[^0-9.]/g, "")
                        )
                      })
                    }
                    value={this.state.newbalance}
                  />
                </td>
                <td />
                <td>
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
                </td>
                <td>Minimum: ($) </td>
                <td>
                  <input
                    id="idMinimum"
                    type="text"
                    size="15"
                    placeholder=""
                    onChange={input =>
                      this.setState({
                        newbalance: Number(
                          input.target.value.replace(/[^0-9.]/g, "")
                        )
                      })
                    }
                    value={this.state.newbalance}
                  />
                </td>
                <td>Maximum: ($) </td>
                <td>
                  <input
                    id="idMaximum"
                    type="text"
                    size="15"
                    placeholder=""
                    onChange={input =>
                      this.setState({
                        newbalance: Number(
                          input.target.value.replace(/[^0-9.]/g, "")
                        )
                      })
                    }
                    value={this.state.newbalance}
                  />
                </td>
              </tr>
            </table>
          </div>
        </form>
      </div>
    );
  }
}
export default OpenContainer;
