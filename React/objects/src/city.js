class City {

    constructor (name, latitude, longitude, population) {
        this.name = name ;
        this.latitude = latitude ;
        this.longitude = longitude ;
        this.population = population ;
    }

    show () {
        return this.name + ": " + this.latitude + ", " + this.longitude + ", " + this.population
    }

    movedIn (adjustment) {
        this.population += adjustment;
    }

    movedOut (adjustment) {
        this.population -= adjustment;
    }

    howBig() {
        let cityScale = "Village";

        if (this.population > 100000) {
            cityScale = "City";
        } else if (this.population >= 20000) {
            cityScale = "Large town";
        } else if (this.population >= 1000) {
            cityScale = "Town";
        } else if (this.population <= 100) {
            cityScale = "Hamlet";
        }
        return cityScale;
    }

}

export default City
