import React, { Component } from "react";

class CommunityEdit extends Component {
  constructor(props) {
    super(props);
  }

  handleButtonPopIn = () => {
    const people = Number(document.getElementById("people").value);
    this.props.cityData.movedInPop(people);
    this.props.onChangeAccount();
    this.props.closeEditWindow();
    document.getElementById("people").value = "";
  };

  handleButtonPopOut = () => {
    const people = Number(document.getElementById("people").value);
    this.props.cityData.movedOutPop(people);
    this.props.onChangeAccount();
    this.props.closeEditWindow();
    document.getElementById("people").value = "";
  };

  render() {
    return (
      <div className="cityToEdit">
        <h4>
          <strong>City Name: </strong>
          {this.props.cityData.name}
        </h4>
        <h4>
          <strong>City Id: </strong>
          {this.props.cityData.cityId}
        </h4>
        <div className="input-group input-group-lg">
          <input id="people" type="number" placeholder="Enter amount" />
          <br />
          <button
            id="movedInPop"
            className="text-btn"
            onClick={this.handleButtonPopIn}
          >
            People Increase
          </button>
          <input id="people" type="number" placeholder="Enter amount" />
          <br />
          <button
            id="movedOutPop"
            className="text-btn"
            onClick={this.handleButtonPopOut}
          >
            People Decrease
          </button>
        </div>
      </div>
    );
  }
}

export default CommunityEdit;
