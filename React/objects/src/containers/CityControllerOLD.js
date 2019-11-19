import React, { Component } from "react";
import CommunityPOJO from "./CommunityPOJO";
import CommunityTable from "./CommunityTable";

class CityController extends Component {

    constructor (props) {
      super (props);
      this.cityControl = new CommunityPOJO ();

  
  
      this.state = {
        cityControl: this.cityControl,
        editId: null
      };
    }

    // this.newCity = new CommunityPOJO(); //jack
    // // this.newCity.onCreate("Calgary, 10, 51.442, 22.4323"); //jack

    // this.state = {
    //   newCity: this.newCity //jack
      // cities: [
      //   {
      //     id: 1,
      //     name: "Calgary",
      //     population: 10,
      //     latitude: 51.4323,
      //     longitude: 22.4345,
      //     type: "Village"
      //   }
      // ]
    // };

    // this.cityList = [];
  // }

  // renderTableHeader() {
  //   let header = Object.keys(this.state.newCommunity[0]);
  //   return header.map((key, index) => {
  //     return <th key={index}>{key.toUpperCase()}</th>;
  //   });
  // }

  // renderTable() {
  //   return this.state.newCommunity.map((city, index) => {
  //     const { cityId, name, population, latitude, longitude, type } = city;
  //     return (
  //       <tr key={cityId}>
  //         <td>{cityId}</td>
  //         <td>{name}</td>
  //         <td>{population}</td>
  //         <td>{latitude}</td>
  //         <td>{longitude}</td>
  //         <td>{type}</td>
  //       </tr>
  //     );
  //   });
  // }

  //add function that on change it will reset state

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

  editCityClick = e => {
    console.log("edit clicked");
    console.log("e target id", e.target.id);

    const editId = Number(e.target.id.slice(4, e.target.id.length));
    console.log(editId);
    const indexCityList = this.newCity.cityList.findIndex(
      item => item.cityId === editId
    );
    this.setState({ editId: indexCityList });
    console.log(indexCityList);
  };

  onChangeAccount = () => {
    this.setState({ newCity: this.newCity });
  };

  closeEditWindow = () => {
    this.setState({ editId: null });
  };
  // generatePop = (min, max) => {
  //   //if person enters number then use that number
  //   //if person enters go to generate population
  //   console.log("im here to generate population", pop);

  //   const pop = Math.random() * (max - min) + min;
  //   return pop;
  // };

  // generateGPS = (min, max) => {
  //   console.log("im here to generate latitude or longigude", gps);
  //   const gps = Math.random() * (max - min) + min;
  //   return gps;
  // };
  //   <thead >
  //   <tr className="tableHeader">
  //     <th>City ID</th>
  //     <th>City Name</th>
  //     <th>Latitude</th>
  //     <th>Longitude</th>
  //     <th>Population</th>
  //     <th>Type</th>
  //     <th>Global Location</th>
  //     <th></th>
  //     <th></th>
  //     <th></th>
  //   </tr>
  // </thead>
  // const TableBody = () => {
  // const rows = this.props.cityData.map((row) => {
  // return (
  //   <tr className="cityTable" key={row.cityId} >
  //     <td>{row.cityId}</td>
  //     <td>{row.cityName}</td>
  //     <td>{row.cityLat}</td>
  //     <td>{row.cityLong}</td>
  //     <td>{row.cityPop}</td>
  //     <td>{row.howBig()}</td>
  //     <td><button type="button" onClick={this.whichSphereClick}>?</button></td>
  //     <td>{this.whichSphere}</td>
  //     <td><button type="button" id={"rem" + row.cityId}  onClick={this.props.remCityClick}>Delete</button></td>
  //     <td><button type="button" id={"edit" + row.cityId} onClick={this.props.editCityClick}>Edit</button></td>
  //   </tr>
  // );
  // })
  // return <tbody>{rows}</tbody>;
  // }
  render() {
    console.log("im after the render", this.cityList);
    // const TableHeader = () => {
    // 	return (
    // <thead>
    //   <tr className="tableHeader">
    //     <th>City ID</th>
    //     <th>City Name</th>
    //     <th>Latitude</th>
    //     <th>Longitude</th>
    //     <th>Population</th>
    //     <th>Type</th>
    //     <th>Global Location</th>
    //     <th />
    //     <th />
    //     <th />
    //   </tr>
    // </thead>;
    // const TableBody = () => {
    //   const rows = this.props.cityData.map(row => {
    //     return (
    //       <tr className="cityTable" key={row.cityId}>
    //         <td>{row.cityId}</td>
    //         <td>{row.cityName}</td>
    //         <td>{row.cityLat}</td>
    //         <td>{row.cityLong}</td>
    //         <td>{row.cityPop}</td>
    //         <td>{row.howBig()}</td>
    //         <td>
    //           <button type="button" onClick={this.whichSphereClick}>
    //             ?
    //           </button>
    //         </td>
    //         <td>{this.whichSphere}</td>
    //         <td>
    //           <button
    //             type="button"
    //             id={"rem" + row.cityId}
    //             onClick={this.props.remCityClick}
    //           >
    //             Delete
    //           </button>
    //         </td>
    //         <td>
    //           <button
    //             type="button"
    //             id={"edit" + row.cityId}
    //             onClick={this.props.editCityClick}
    //           >
    //             Edit
    //           </button>
    //         </td>
    //       </tr>
    //     );
    //   });
    //   return <tbody>{rows}</tbody>;
    // };
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
              <div className="row my-3">
            <div className="col-4 text-center mb-2">
              <h3>Population Total: {this.cityControl.getPopulation()}</h3>
            </div>
            <div className="col-4 text-center">
              <h3>City Most Northern: {this.cityControl.getMostNorthern()}</h3>
            </div>
            <div className="col-4 text-center">
              <h3>City Most Southern: {this.cityControl.getMostSouthern()}</h3>
            </div>
          </div>
     
     

  
        <div className="createCity">
          <div className="input-group input-group-lg">
            <input type="text" id="newName" placeholder="Enter new City"/>
            <input type="number" id="newLatitude" placeholder="Enter City Latitude "/>
            <input type="number" id="newLongitude" placeholder="Enter City Longitude"/>
            <input type="number" id="newPopulation" placeholder="Enter City Population "/>
            <button className="text-btn" onClick={this.addCityClick}>Add Account</button>
          </div>
        </div>
        <div >
              {this.state.editId !== null 
                ? <CommunityEdit
                  cityData={this.cityControl.cityList[this.state.editId]}
                  editId={this.state.editId}
                  onChangeAccount={this.onChangeAccount}
                  closeEditWindow={this.closeEditWindow}
                /> 
                : ""}
        </div>

        <hr />
        <div>
          <CommunityTable 
            cityData={this.state.cityControl.cityList}
            remCityClick={this.remCityClick}
            editCityClick={this.editCityClick}
            whichSphere={this.whichSphere}
          />
        </div>

              {/* <div>
                City Name:
                <input
                  id="idCity"
                  type="text"
                  className="OpenInputs"
                  size="10"
                  placeholder=""
                  onBlur={this.generateCity}
                />
                {/* <br /> */}
                City Population:
                <input
                  id="idPop"
                  type="text"
                  className="OpenInputs"
                  size="10"
                  placeholder=""
                  onClick={this.generatePop}
                  //value={this.props.population}
                />
                {/* <br /> */}
                Latitude:
                <input
                  id="idLat"
                  type="text"
                  className="OpenInputs"
                  size="10"
                  placeholder=""
                  // onChange={this.generateGPS(-180, 180)}
                  value={this.props.latitude}
                  //Math.round(3) // Math.random
                  // faker.finance.amount(0,360,4) between 0-360 dec 4
                  // (Math.random().toFixed(4)yes
                />
                {/* <br /> */}
                Longitude:
                <input
                  id="idLong"
                  type="text"
                  className="OpenInputs"
                  size="10"
                  placeholder=""
                  // onChange={this.generateGPS(-180, 180)}
                  value={this.props.longitude}
                />
              </div>
              <button
                id="create"
                className="Create"
                type="text"
                size="10"
                onClick={this.onCreate}
              >
                Create
              </button>
              {/* <br /> */}
            </div>
          </div>
          <p>List of Cities</p>

          {/* <table id="cities">
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTable()}
            </tbody>
          </table> */}
        </div>
        /* <thead >
					<tr className="tableHeader">
						<th>City ID</th>
						<th>City Name</th>
						<th>Latitude</th>
						<th>Longitude</th>
						<th>Population</th>
						<th>Type</th>
						<th>Global Location</th>
						<th></th>
						<th></th>
						<th></th>
					</tr>
				</thead>
        const TableBody = () => { 
			const rows = this.props.cityData.map((row) => {
				return (
					<tr className="cityTable" key={row.cityId} >
						<td>{row.cityId}</td>
						<td>{row.cityName}</td>
						<td>{row.cityLat}</td>
            <td>{row.cityLong}</td>
            <td>{row.cityPop}</td>
            <td>{row.howBig()}</td>
						<td><button type="button" onClick={this.whichSphereClick}>?</button></td>
						<td>{this.whichSphere}</td>
						<td><button type="button" id={"rem" + row.cityId}  onClick={this.props.remCityClick}>Delete</button></td>
						<td><button type="button" id={"edit" + row.cityId} onClick={this.props.editCityClick}>Edit</button></td>
					</tr>
				);
			})
			return <tbody>{rows}</tbody>;
	  } */}
        {/* <table>

          <thead>
            <tr>
              <th>{""}</th>
              <th>Name of City</th>
              <th>Population</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>buttons</th>
            </tr>
          </thead> */}

        {/* <tbody>
            {this.cityList.map(item => {
              return (
                <tr key={item}>
                  <th scope="row">1</th>
                  <td>{item}</td>
                  <td>Item</td>
                  <td>Item2</td>
                  <td>Item3</td>
                  <td>Item4</td>
                </tr>
              );
            })}
          </tbody> */}
        {/* </table> */}

        {/* <CommunityPOJO
          // onEdit={this.onEdit()}
          onDelete={this.onDelete()}
          // generatePop={this.generatePop()}
          // generateGPS={this.generateGPS()}
        /> */}
        {/* <table className="table table-striped"> */}
        {/* .
          .
          .
          .
          . */}
        {/* <TableHeader />
          <TableBody
            cityData={this.props.cityData}
            remCityClick={this.props.remCityClick}
            editCityClick={this.props.editCityClick}
          />
        </table> */}
        <CommunityTable
          cityData={this.state.cityControl.cityList}
          remCityClick={this.remCityClick}
          editCityClick={this.editCityClick}
          whichSphere={this.whichSphere}
        /> */}
      </div>
    );
  }
}
export default CityController;
