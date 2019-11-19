import React, { Component } from "react";

class MinMaxContainer extends Component {
  constructor(balance, acctname) {
    super(balance, acctname);

    this.state = {
      balance: 0
    };
    //this.setState{balance: 25}
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#3c2aa3"
        }}
        className="App-acctCompLong"
      >
        <form>
          <div className="CenterForm">
            <h3>Account Information</h3>

            <table>
              <tr>
                <td>Maximum Value: ($) </td>
                <td>
                  <input id="maximum" type="text" size="30" placeholder="" />{" "}
                </td>
              </tr>

              <tr>
                <td>Minimum Value: ($) </td>
                <td>
                  <input id="minimum" type="text" size="30" placeholder="" />
                </td>
              </tr>

              <tr>
                <td>Total Value: ($) </td>
                <td>
                  <input
                    id="total"
                    className="Round"
                    type="text"
                    size="30"
                    onClick={this.identifyAccount}
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
export default MinMaxContainer;
