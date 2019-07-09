import React, { Component } from "react";
import star from "./star.svg";

import "./SponsorComponent.css";

class SponsorComponent extends Component {
  constructor(props) {
    super(props);
    // this.type = this.type;
    // this.name = this.name;
    // this.image = this.image;
    // this.since = this.since;
  }
  render() {
    let type = this.type;
    let name = this.name;
    let image = this.image;
    let since = this.since;

    return (
      <div className="Overall">
        <div className="SponsorDetail">
          <img className="Image" src={star} />
          <p>(Company Name goes here) {name}</p>
          <p>(Company Logo goes here) {image}</p>
          <p>(since goes here) {since}</p>
        </div>
      </div>
    );
  }
}
export default SponsorComponent;
