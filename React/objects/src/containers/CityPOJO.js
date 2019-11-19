class CityPOJO {
  constructor(cityId, name, population, latitude, longitude) {
    this.cityId = cityId;
    //eg cityName
    this.name = name;
    this.population = population;
    this.latitude = latitude;
    this.longitude = longitude;

    // this.cityList = [];
  }
  //consider changing items to say city for the individual city and cities when it
  //applies to the array of cities

  onShow() {
    return (
      this.cityId +
      " " +
      this.name +
      ": " +
      "Population: " +
      this.population +
      ", " +
      "Latitude: " +
      this.latitude +
      ", " +
      "Longitude: " +
      this.longitude
    );
  }

  movedIn(people) {
    this.population += people;
    return this.population;
  }

  movedOut(people) {
    this.population -= people;
    return this.population;
  }

  // howBig() {
  //   console.log("im a howbig function which will identify based on population");
  //   //this gets generated from city population which is defined above

  howBig() {
    let cityType = "Hamlet";

    if (this.population > 100000) {
      cityType = "City";
    } else if (this.population >= 20000) {
      cityType = "Large Town";
    } else if (this.population >= 1000) {
      cityType = "Town";
    } else if (this.population >= 100) {
      cityType = "Village";
    }
    return cityType;
  }
}

export default CityPOJO;
