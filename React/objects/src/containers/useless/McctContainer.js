import React, { Component } from "react";
import OpenContainer from "./OpenContainer";
import MinMaxContainer from "./MinMaxContainer";

class McctContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
      //   balance: 0,
      //   minimumvalue: "",
      //   maximumvalue: ""
      //   acctname: "",
    };
  }

  render() {
    return (
      <div>
        <div className="LayoutParent">
          {/* main container calling 2 different children with mcctcontainer as the parent 
        
        grandpa*/}
          <OpenContainer />
          <MinMaxContainer />
        </div>
      </div>
    );
  }
}
export default McctContainer;
