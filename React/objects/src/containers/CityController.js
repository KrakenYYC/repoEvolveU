import React, { Component } from "react";
import CommunityPOJO from "./CommunityPOJO";
import CommunityTable from "./CommunityTable";
import CommunityEdit from "./CommunityEdit";
import { ENOTCONN } from "constants";

class CityController extends Component {
  constructor(props) {
    super(props);
    this.cityControl = new CommunityPOJO();
    this.cityControl.onCreate("Regina", 50, 104.61, 48.22);

    this.state = {
      cityControl: this.cityControl,
      editId: null
    };
  }

  onCreate = e => {
    console.log("check naming coNvention - have action", e);
    const newCity = document.getElementById("newName").value;
    const newPopulation = document.getElementById("newPopulation").value;
    const newLatitude = document.getElementById("newLatitude").value;
    const newLongitude = document.getElementById("newLongitude").value;
    this.cityControl.onCreate(
      newCity,
      newPopulation,
      newLatitude,
      newLongitude
    );
    newPopulation.value = Math.floor(Math.random() * 150000);
    newLatitude.value = Math.random(newLatitude);
    newLongitude.value = Math.floor(Math.random() * 150000);
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
  // onGenerate = e => {
  //   //once a city is mentioned generate population or generate lat/long
  //   //newName  newPopulation  newLatitude  newLongitude

  //   const { newName } = this.state;
  //   const isEnabled = newName.length > 0;
  //   newPopulation.value = Math.floor(Math.random() * 150000);
  //   newLatitude.value = Math.random(newLatitude);
  //   newLongitude.value = Math.floor(Math.random() * 150000);
  // };
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

  onPickCity = id => {
    // console.log("im looking for target", id.target);
    // console.log("i may be parent", id.target.parentNode);
    return this.cityList.findIndex(item => item.id === Number(id));
  };

  onChangeCity = () => {
    this.setState({ newCity: this.newCity });
  };

  // closeEditWindow = () => {
  //   this.setState({ editId: null });
  // };

  render() {
    // console.log("im after the render", this.cityList);
    // const { cityControl } = this.props;
    // const cityList = map.cityControl(name => {
    //   return (table here eg cityList.name, cityList.population etc);

    // });

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

              <div className="createCity">
                <div className="App-newcity">
                  <input
                    type="text"
                    className="CityInputs"
                    id="newName"
                    placeholder="Enter new City"
                    onBlur={this.onCreate}
                  />
                  <input
                    type="text"
                    className="CityInputs"
                    id="newPopulation"
                    placeholder="Enter City Population "
                  />
                  <input
                    type="text"
                    className="CityInputs"
                    id="newLatitude"
                    placeholder="Enter City Latitude "
                  />
                  <input
                    type="text"
                    className="CityInputs"
                    id="newLongitude"
                    placeholder="Enter City Longitude"
                  />

                  <button className="Round" onClick={this.onCreate}>
                    Add City
                  </button>
                  <div className="CityLeft">
                    Population Total
                    <input
                      id="idTotPop"
                      type="text"
                      className="MinMaxInputs"
                      size="13"
                      placeholder="Create City First"
                      onChange={this.cityControl.getPopulation()}
                    />
                    Northern City
                    <input
                      id="idNorth"
                      type="text"
                      className="MinMaxInputs"
                      size="13"
                      placeholder="Create City First"
                      onChange={this.cityControl.getMostNorthern()}
                    />
                    Southern City
                    <input
                      id="idSouth"
                      type="text"
                      className="MinMaxInputs"
                      size="13"
                      placeholder="Create City First"
                      onChange={this.cityControl.getMostSouthern()}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
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
          </div> */}

          {/* <div className="CreateArray" onClick={this.onPickCity}>
            {this.cityList.map((cityList, i) => {
              return (
                <CommunityTable
                  cityData={this.state.cityControl.cityList}
                  name={cityList.name}
                  population={cityList.population}
                  latitude={cityList.latitude}
                  longitude={cityList.longitude}
                  id={cityList.id}
                  onDelete={this.onDelete}
                  whichSphere={this.whichSphere}
                  key={i}
                />
              );
            })}
          </div> */}

          {/* .
.
.
.
. */}

          {/* <div>
            <CommunityTable
              cityData={this.state.cityControl.cityList}
              onDelete={this.onDelete}
              // editCityClick={this.editCityClick}
              whichSphere={this.whichSphere}
            />
          </div> */}
        </div>
      </div>
    );
  }
}

export default CityController;
