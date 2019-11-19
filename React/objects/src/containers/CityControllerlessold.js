import React, { Component } from "react";
import CommunityPOJO from "./CommunityPOJO";
import CommunityTable from "./CommunityTable";
import CommunityEdit from "./CommunityEdit";

class CityController extends Component {
  constructor(props) {
    super(props);
    this.cityControl = new CommunityPOJO();

    this.state = {
      cityControl: this.cityControl,
      editId: null
    };
  }

  onCreate = e => {
    console.log("check naming coNvention - have action", e);
    const newCity = document.getElementById("newName").value;
    const newLatitude = Number(document.getElementById("newLatitude").value);
    const newLongitude = Number(document.getElementById("newLongitude").value);
    const newPopulation = Number(
      document.getElementById("newPopulation").value
    );
    this.newCity.onCreate(newCity, newLatitude, newLongitude, newPopulation);
    this.setState({ newCity: this.newCity });
    // add following lines to clear input fields between entries
    document.getElementById("newName").value = "";
    document.getElementById("newLatitude").value = "";
    document.getElementById("newLongitude").value = "";
    document.getElementById("newPopulation").value = "";
  };

  onDelete = e => {
    console.log("imondelete in the parent");
    //  console.log("e target id", e.target.id);
    //console.log("length?", e.target.id.length);

    const removeId = Number(e.target.id.slice(3, e.target.id.length));
    this.newCity.onDelete(removeId);
    this.setState({ newCity: this.newCity });
  };

  // editCityClick = e => {
  //   console.log("edit clicked");
  //   console.log("e target id", e.target.id);

  //   const editId = Number(e.target.id.slice(4, e.target.id.length));
  //   console.log(editId);
  //   const indexCityList = this.newCity.cityList.findIndex(
  //     item => item.cityId === editId
  //   );
  //   this.setState({ editId: indexCityList });
  //   console.log(indexCityList);
  // };

  onChangeCity = () => {
    this.setState({ newCity: this.newCity });
  };

  // closeEditWindow = () => {
  //   this.setState({ editId: null });
  // };

  render() {
    console.log("im after the render", this.cityList);

    return (
      <div>
        <div>
          <div
            style={{
              backgroundColor: "#3c2aa3"
            }}
            className="App-city"
          >
            <div>
              <h3>Cities and Communities</h3>
              <div className="CityLeft">
                Population Total: {this.cityControl.getPopulation()}
                City Most Northern: {this.cityControl.getMostNorthern()}
                City Most Southern: {this.cityControl.getMostSouthern()}
              </div>

              <div className="createCity">
                <div className="input-group input-group-lg">
                  <input
                    type="text"
                    id="newName"
                    placeholder="Enter new City"
                  />
                  <input
                    type="number"
                    id="newLatitude"
                    placeholder="Enter City Latitude "
                  />
                  <input
                    type="number"
                    id="newLongitude"
                    placeholder="Enter City Longitude"
                  />
                  <input
                    type="number"
                    id="newPopulation"
                    placeholder="Enter City Population "
                  />
                  <button className="text-btn" onClick={this.addCityClick}>
                    Add City
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            {this.state.editId !== null ? (
              <CommunityEdit
                cityData={this.cityControl.cityList[this.state.editId]}
                editId={this.state.editId}
                onChangeCity={this.onChangeCity}
                closeEditWindow={this.closeEditWindow}
              />
            ) : (
              ""
            )}
          </div>

          <div>
            <CommunityTable
              cityData={this.state.cityControl.cityList}
              remCityClick={this.remCityClick}
              editCityClick={this.editCityClick}
              whichSphere={this.whichSphere}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CityController;
