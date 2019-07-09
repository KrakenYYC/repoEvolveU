import CityPOJO from "../containers/CityPOJO";

class CommunityPOJO {
  constructor() {
    this.cityList = [];
    this.counter = 1;
  }
  onCreate(name, population, latitude, longitude) {
    const tempCity = new CityPOJO(
      this.counter,
      name,
      population,
      latitude,
      longitude
    );
    this.cityList.push(tempCity);
    this.counter++;
  }

  onDelete(removeId) {
    const tempList = this.cityList.filter(item => {
      return item.cityId !== removeId;
    });
    this.cityList = tempList;
  }

  whichSphere(index) {
    // console.log(this.cityList[0].latitude);
    if (this.cityList[index].latitude > 0) {
      return "Northern Hemisphere";
    } else if (this.cityList[index].latitude < 0) {
      return "Southern Hemisphere";
    } else if (this.cityList[index].latitude === 0) {
      return "You are at the Equator";
    }
  }

  getMostNorthern() {
    if (this.cityList.length > 0) {
      let mostNorth = this.cityList[0].latitude;
      this.cityList.forEach(item => {
        if (item.latitude > mostNorth) {
          mostNorth = item.latitude;
        }
      });
      console.log("mostNorth", mostNorth);
      return mostNorth;
    }
  }

  getMostSouthern() {
    if (this.cityList.length > 0) {
      let mostSouth = this.cityList[0].latitude;
      this.cityList.forEach(item => {
        if (item.latitude < mostSouth) {
          mostSouth = item.latitude;
        }
      });
      console.log("mostSouth", mostSouth);
      return mostSouth;
    }
  }

  getPopulation() {
    let totalPopulation = this.cityList.reduce((acc, curr) => {
      return (acc += curr.population);
    }, 0);
    return totalPopulation;
  }
}

export default CommunityPOJO;
