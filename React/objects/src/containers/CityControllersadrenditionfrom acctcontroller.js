import React, { Component } from "react";
import CommunityPOJO from "../components/CommunityPOJO";


class CityController extends Component {
  constructor(props) {
    super(props);

   
    this.cityList = new populationsPOJO();
    this.onCreatepopulation = this.onCreatepopulation.bind(this);
    this.cityList.onCreate("me", 4, 22, 54);
    this.cityList.onCreate("you", 9, 43, 6);
    this.cityList.onCreate("her", 22, 45, 79);
  }

  onCreate = e => {
    const name = document.getElementById("idName").value; //newnaem
    const newPopulation = Number(document.getElementById("idPop").value);
    const newLatitude = Number(document.getElementById("idLat").value);
    const newLongitude = Number(document.getElementById("idLong").value);
    this.cityList.onCreate(name, newPopulation, newLatitude, newLongitude); //newnaem
    this.setState({ name: name, newPopulation: newPopulation, newLatitude: newLatitude, newLongitude: newLongitude }); //newnaem
  };

  onPickpopulation = id => {
    // console.log("im looking for target", id.target);
    // console.log("i may be parent", id.target.parentNode);
    return this.cityList.cityList.findIndex(item => item.id === Number(id));
  };

  onFindMinimum = e => {
    console.log(Math.min(this.cityList));
    console.log(this.minValue);
    // Math.min(this.cityList);
    var myMinimum = this.cityList;
    Math.min(...myMinimum);
  };

  //ways to make sure min max stay current
  onFindMaximum = e => {};

  onFindTotal = e => {};

  onClose = id => {
    this.cityList.onClose(id);
    this.setState({ nonsense: null });
  };

  onDeposit = (population, people) => {
    console.log("whereami", population.newPopulation);
    console.log("this from single", this.props.population);
    let cityList = this.cityList.cityList;
    let index = cityList.indexOf(population);
    cityList[index].onDeposit(people);
    this.setState({ population: population });
  };

  onWithdraw = (population, people) => {
    console.log("whereami", population.newPopulation);
    console.log("howdy", this.props.population);
    let cityList = this.cityList.cityList;
    let index = cityList.indexOf(population);
    cityList[index].onWithdraw(people);
    this.setState({ population: population });
  };

  onRename = population => {
    console.log("whereami", population.newPopulation);
    console.log("this from single", this.props.population);
    let cityList = this.cityList.cityList;
    let index = cityList.indexOf(population);
    const name = prompt("Please enter new population Name");
    cityList[index].onRename(name);
    this.setState({ population: population });
  };

  render() {
    return (
      <div>
        <div>
          <div
            style={{
              backgroundColor: "#3c2aa3"
            }}
            className="App-acctCompLong"
          >
            <div>
              <h3>Population Management</h3>
              City Name:
              <input
                id="idName"
                type="text"
                className="OpenInputs"
                size="10"
                placeholder=""
                ref={name => {
                  this.name = name; //newnaem
                }}
                // onChange={input =>
                //   this.setState({ newNaem: input.target.value })
                // }
                // value={this.state.newNaem}
              />
         Population:
              <input
                id="idPop"
                type="text"
                className="OpenInputs"
                size="10"
                placeholder=""
                ref={newPopulation => {
                  this.newPopulation = newPopulation;
                }}
                
              />
              Latitude:
              <input
                id="idLat"
                type="text"
                className="OpenInputs"
                size="10"
                placeholder=""
                ref={newLatitude => {
                  this.newLatitude = newLatitude;
                }}
                
              />
              Longitude:
              <input
                id="idLong"
                type="text"
                className="OpenInputs"
                size="10"
                placeholder=""
                ref={newLongitude => {
                  this.newLongitude = newLongitude;
                }}
                
              />
              <button
                id="open"
                className="Round"
                type="text"
                size="10"
                placeholder="Open"
                onClick={() => {
                  const name = this.state.name; //state.newnaem
                  const population = this.state.newPopulation;
                  const latitude = this.state.newLatitude;
                  const longitude = this.state.newLongitude;
                  this.onCreate(name, population, latitude, longitude);
                }}
              >
                Open
              </button>
              <br />
              Minimum: ($)
              <input
                id="idMinimum"
                type="text"
                className="MinMaxInputs"
                size="13"
                placeholder="Create population First"
                onChange={this.onFindMinimum}
                value={this.minValue}
              />
              Maximum: ($)
              <input
                id="idMaximum"
                type="text"
                className="MinMaxInputs"
                size="13"
                placeholder="Create population First"
                onChange={input =>
                  this.setState({
                    myMaximum: Number(
                      input.target.value.replace(/[^0-9.]/g, "")
                    )
                  })
                }
                value={this.props.myMaximum}
              />
              Total: ($)
              <input
                id="idTotal"
                type="text"
                className="MinMaxInputs"
                size="13"
                placeholder="Total Balance"
                onChange={input =>
                  this.setState({
                    myTotal: Number(input.target.value.replace(/[^0-9.]/g, ""))
                  })
                }
                value={this.props.myTotal}
              />
            </div>
            <div />
          </div>
          <h3>LIST OF CITIES</h3>
        </div>
        <div />

        {/* <div className="CreateArray" onClick={this.onPickpopulation}>
          {this.cityList.cityList.length &&
            this.cityList.cityList.map((population, i) => {
              return ( */}
                {/* // <div classNaem="CreateArray" onClick={this.onPickpopulation}>
                // <AcctMultiple */}
                {/* //   // classNaem="CreateArray"
                //   // onClick={this.onPickpopulation}
                //   population={this.cityList.cityList[i]}
                //   name={population.accName}
                //   balance={population.newPopulation}
                //   //people={this.props.people}
                //   id={population.id}
                //   onDeposit={this.onDeposit}
                //   onWithdraw={this.onWithdraw}
                //   onRename={this.onRename}
                //   onClose={this.onClose}
                //   // onShowBalance={population.}
                //   //other functions
                //   key={i}
               // />
              //);
           // })}*/</div></div> */}
              
      {/* //   </div>
      // </div>
    // ); */}
  }
    }
  }
export default CityController;
