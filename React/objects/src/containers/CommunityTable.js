import React, { Component } from "react";

class CommunityTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const TableHeader = () => {
      return (
        <thead>
          <tr className="tableHeader">
            <th>City ID</th>
            <th>City Name</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Population</th>
            <th>Type</th>
            <th>Global Location</th>
            <th />
            <th />
            <th />
          </tr>
        </thead>
      );
    };

    const TableBody = () => {
      const rows = this.props.cityData.map(row => {
        return (
          <tr className="cityTable" key={row.cityId}>
            <td>{row.cityId}</td>
            <td>{row.name}</td>
            <td>{row.latitude}</td>
            <td>{row.longitude}</td>
            <td>{row.population}</td>
            <td>{row.howBig()}</td>
            <td>
              <button type="button" onClick={this.whichSphere}>
                ?
              </button>
            </td>
            <td>{this.whichSphere}</td>
            <td>
              <button
                type="button"
                id={"rem" + row.cityId}
                onClick={this.props.onDelete}
              >
                Delete
              </button>
            </td>
            <td>
              <button
                type="button"
                id={"edit" + row.cityId}
                // onClick={this.props.editCityClick}
              >
                Edit
              </button>
            </td>
          </tr>
        );
      });
      return <tbody>{rows}</tbody>;
    };

    return (
      <table className="table table-striped">
        <TableHeader />
        <TableBody
          cityData={this.props.cityData}
          onDelete={this.props.onDelete}
          // editCityClick={this.props.editCityClick}
        />
      </table>
    );
  }
}

export default CommunityTable;
