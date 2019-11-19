import CityPOJO from "./CityPOJO";

class CommunityPOJO {
  constructor() {
    this.cityList = [];
    this.counter = 1;
  }
  //refer to all things cities

  //new for here

  // const newCity = new CityPOJO(name, population, latitude, longitude); //id was added
  // this.cityList.push(newCity);
  addCity(name, population, latitude, longitude) {
    const newCity = new CityPOJO(
      this.counter,
      name,
      population,
      latitude,
      longitude
    );
    this.cityList.push(newCity);
    this.counter++;
    console.log("addcity", this.cityList);
  }
  // removeCity() {}
  // whichSphere() {}

  // getMostNorthern() {}

  // getMostSouthern() {}
  // getPopulation() {}
}
// generatePop = (min, max) => {
//   //if person enters number then use that number
//   //if person enters go to generate population
//   console.log("something between 1 and 1000000 to whole number");
// };

// generateGPS = (min, max) => {
//   //if person enters number then use that number
//   //if person enters go to generate latitude or longitude
//   console.log("something between -180 and +180 to 4 digits");
// };
// render() {
//   //let cityID = this.props.passCity.cityID;
//   return (
//     <div className="CityComp">
//         {/* <h3>City: {this.props.passCity.city}</h3>
//         <h3>Population: {this.props.passCity.population}</h3>
//         <h3>Latitude: {this.props.passCity.latitude}</h3>
//         <h3>Longitude: {this.props.passCity.longitude}</h3>
//         <h3>How Big: {this.props.passCity.howBig()}</h3>
//         <h3>Which Sphere: {this.props.passCommunity.whichSphere(cityID)}</h3> */}
//         {/* .
//         .
//         . */}
//         {/* im going to be a table that shows city pop lat long and 2 buttons delte and
//      edit and as edit is pushed it pops up another component??Big */}
//         {/* <input
//           className="inputMove"
//           type="text"
//           id="idMove"
//           placeholder="Move"
//         /> */}
//         {/* <button className="btnMove" onClick={this.props.movedIn}>
//           Move In
//         </button> */}
//         {/* .
//         .
//         .
//         .
//         . */}
//         {/* <input
//           className="inputCity"
//           type="text"
//           id="idCity"
//           placeholder="Enter City Name"
//         />
//         <input
//           className="inputPopulation"
//           type="text"
//           id="idPopulation"
//           placeholder="Generate Population"
//           onChange={this.generatePop}
//         />
//         <input
//           className="inputLatitude"
//           type="text"
//           id="idLatitude"
//           placeholder="Generate Latitude"
//           onChange={this.generateGPS}
//         />
//         <input
//           className="inputLongitude"
//           type="text"
//           id="idLongitude"
//           placeholder="Generate Longitude"
//           onChange={this.generateGPS}
//         />
//         <input
//           className="inputLeave"
//           type="text"
//           id="idPeople"
//           placeholder="People"
//         />
//         <button className="btnMove" onClick={this.props.movedIn}>
//           Move In
//         </button>
//         <button className="btnLeave" onClick={this.props.movedOut}>
//           Move Out
//         </button> */}
//         {/* <button className="btnEdit" onClick={this.props.onEdit}>
//           Edit
//         </button> */}
// //       </div>
//     );
//   }
// }
export default CommunityPOJO;
