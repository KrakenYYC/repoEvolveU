import React from "react";

export default class DoubleClick extends React.Component {
  constructor() {
    super();
    this.state = {
      style: { 
       
      }
    };
  }
  handleClick() {
    console.log("Hi");
    this.setState({ style: {  });
  }

  handleDoubleClick() {
    console.log("Double Click");
  }

  render() {
    return (
      <div>
        <div onClick={this.handleClick.bind(this)} style={this.state.style}>
          <span onDoubleClick={this.handleDoubleClick.bind(this)}> Hello </span>
          <span onDoubleClick={this.handleDoubleClick.bind(this)}>
            {" "}
            world.{" "}
          </span>
        </div>
      </div>
    );
  }
}
