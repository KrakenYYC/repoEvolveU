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

//this will return undefined as the value of this
class Foo extends React.Component{
  constructor( props ){
    super( props );

    //inside here is where we bind the function
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(event){
    console.log(this); // 'this' is undefined
  }
  render(){
    return (
      <button type="button" onClick={this.handleClick}>
        Click Me
      </button>
    );
  }
}
ReactDOM.render(
  <Foo />,
  document.getElementById("app")
);