import React, { Component } from "react";

class NextLevelComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>im next level comp {this.props.msg}</h3>
        <button id="btnGetFunction" type="button" onClick={this.props.Linden}>
          Push Me to Get Comp1Function
        </button>
      </div>
    );
  }
}
export default NextLevelComp;
