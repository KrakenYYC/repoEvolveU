import React, { Component } from "react";
import SponsorComponent from "./SponsorComponent";

//create a pyramidal for gold, silver and bronze levels

class Sponsors extends Component {
  constructor(props) {
    super(props);
    this.type = "Sponsor Type";
    this.name = "Sponsor Name";
    this.image = "Sponsor Icon";
    this.since = "Sponsor Since";
  }
  render() {
    return (
      <div className="Sponsors">
        <h1>SPONSORS</h1>
        <div className="SponsorGold">
          <SponsorComponent
            type="gold"
            name="Microsoft"
            image="Microsoft"
            since="2019"
          />
        </div>
        <div className="SponsorSilver">
          <SponsorComponent
            type="silver"
            name="Microsoft"
            image="Microsoft"
            since="2019"
          />
        </div>
        <div className="SponsorBronze">
          <SponsorComponent
            type="bronze"
            name="Microsoft"
            image="Microsoft"
            since="2019"
          />
        </div>
        <div className="Sponsor-Add">
          Do you want to become a sponsor just fill out the form and submit
          <br />
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>
                  <input type="text" />
                </td>
                <br />
              </tr>
              <tr>
                <td>Company:</td>
                <td>
                  <input type="text" name="name" />
                </td>
                <br />
              </tr>
              <tr>
                <td>email:</td>
                <td>
                  <input type="text" name="name" />
                </td>
                <br />
              </tr>
              <tr>
                <td>phone:</td>
                <td>
                  <input type="text" name="name" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Sponsors;
