import React, { Component } from "react";

//create a class that doesnt have to be exported but is used in the file
class Header extends Component {
  constructor(props) {
    super(props);
  }
  person = props => {
    return (
      <p>
        {props.name} {props.children}
      </p>
    );
  };

  render() {
    // const person = props => {
    //   return (
    //     <p>
    //       {props.name} {props.children}
    //     </p>
    //   );
    // };

    return (
      <header className="App-header">
        <h1>Hellotop</h1>
        <h2>{this.props.maintitle}</h2>
        <h2>{this.props.secondtitle}</h2>
        <h2>{this.props.num}</h2>
        {/* <h2>{this.myObj.a}</h2>  not sure why this isnt working
        <h2>{this.myObj.b}</h2>
        <h2>{this.myObj.c}</h2> */}
        {/* <h2>{this.myArr.c}</h2> */}
        {this.props.carrie}
      </header>
    );
  }
}

class AppForFun extends Component {
  render() {
    return (
      <div className="AppForFun">
        <Header
          maintitle={"Hello"}
          secondtitle="Hello there"
          num={5}
          myObj={{ a: 5, b: 8, c: "im c in the object" }}
          myArr={[2, 4, 6, 7]}
          carrie={(a, b) => a + b}
        />
      </div>
    );
  }
}
export default AppForFun;
