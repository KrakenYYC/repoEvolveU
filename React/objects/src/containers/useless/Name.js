import React from "react";

class Name extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   accName: this.props.accName
    // };
    // this.accName = this.state.accName;
  }
  render() {
    console.log("in Name", this.props.accName);
    console.log("props", this.props);
    console.log("accname", this.accName);
    console.log("children", this.children);
    console.log("this", this);

    console.log("this account", this.myAccount);
    return (
      <div>
        <p>Name: </p>
      </div>
    );
    // <p>imhere</p>;{this.account.showName()}
  }
}

// var Name = React.createClass({
//   render: function() {
//     return <div id="accName">Name: {this.account.showName()}</div>;
//   }
// });

export default Name;
