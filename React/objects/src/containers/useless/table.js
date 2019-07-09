class DisplayField extends React.Component {
  render() {
    return <td>{this.props.fieldvalue}</td>;
  }
}

class ButtonGroup extends React.Component {
  render() {
    return (
      <td>
        <div className="btn-group btn-group-sm">{this.props.buttons}</div>
      </td>
    );
  }
}

class EditButton extends React.Component {
  render() {
    return (
      <button type="button" className="edit btn btn-default">
        <span className="glyphicon glyphicon-pencil" />
      </button>
    );
  }
}

class DeleteButton extends React.Component {
  render() {
    return (
      <button type="button" className="edit btn btn-default">
        <span className="glyphicon glyphicon-trash" />
      </button>
    );
  }
}

class ConfirmButton extends React.Component {
  render() {
    return (
      <button type="button" className="edit btn btn-default btn-success">
        <span className="glyphicon glyphicon-ok" />
      </button>
    );
  }
}

class CancelButton extends React.Component {
  render() {
    return (
      <button type="button" className="edit btn btn-default">
        <span className="glyphicon glyphicon-pencil" />
      </button>
    );
  }
}

class AddRowButton extends React.Component {
  render() {
    return (
      <button type="button" className="btn btn-default btn-block">
        Add {this.props.objectname}
      </button>
    );
  }
}

class DisplayRow extends React.Component {
  render() {
    var fieldgroup = [];
    this.props.fieldvalues.forEach(function(fieldvalue) {
      fieldgroup.push(
        <DisplayField fieldvalue={fieldvalue} key={fieldvalue} />
      );
    });
    var buttons = [<EditButton />, <DeleteButton />];
    return (
      <tr>
        {fieldgroup}
        <ButtonGroup buttons={buttons} />
      </tr>
    );
  }
}
/*Table row has state = display or edit? - instead of DisplayRow*/
class EditRow extends React.Component {
  render() {
    const fields = [];
    this.props;
    return <tr>{fields}</tr>;
  }
}

class TableHeader extends React.Component {
  render() {
    var tableheaders = [];
    this.props.headers.forEach(function(header) {
      tableheaders.push(<th>{header}</th>);
    });
    tableheaders.push(<th>Actions</th>);
    return <tr>{tableheaders}</tr>;
  }
}

class Table extends React.Component {
  render() {
    var rows = [];
    var headers = [];
    var fieldnames = [];
    this.props.data.fielddata.forEach(function(field) {
      headers.push(field.header);
      fieldnames.push(field.name);
    });
    this.props.data.instances.forEach(function(instance) {
      var fieldvalues = [];
      fieldnames.forEach(function(fieldname) {
        fieldvalues.push(instance[fieldname]);
      });
      rows.push(<DisplayRow fieldvalues={fieldvalues} />);
    });
    return (
      <table className="table table-striped">
        <thead>
          <TableHeader headers={headers} />
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class TableContainer extends React.Component {
  render() {
    return (
      <div className="table-responsive">
        <legend>{this.props.title}</legend>
        <Table data={data} />
        <AddRowButton objectname={"Case"} />
      </div>
    );
  }
}
// Need to add a class name at level of fieldata / instances
var data = {
  api_uri: "https://www.benhoyle.co.uk/attass/oar/cases/data/",
  fielddata: [
    {
      header: "Case Ref.",
      inputfield: true,
      length: 10,
      name: "caseref",
      placeholder: "e.g. E1234.EP"
    },
    {
      header: "Application No.",
      inputfield: true,
      length: 10,
      name: "appln_no",
      placeholder: "e.g. XX...X.X"
    },
    {
      header: "Country",
      inputfield: true,
      length: 7,
      name: "countrycode",
      placeholder: "e.g. EP"
    },
    {
      header: "Last Modified",
      inputfield: false,
      length: 10,
      name: "date_modified",
      placeholder: ""
    }
  ],
  instances: [
    {
      appln_no: "12881603.0",
      caseref: "R1234.W#",
      childlinks: [
        {
          name: "Office Actions",
          uri:
            "https://www.benhoyle.co.uk/attass/oar/officeactions/?parent_id=2"
        },
        {
          name: "Application States",
          uri: "https://www.benhoyle.co.uk/attass/oar/applnstates/?parent_id=2"
        },
        {
          name: "Cited Art",
          uri: "https://www.benhoyle.co.uk/attass/oar/citedart/?parent_id=2"
        }
      ],
      countrycode: "EP",
      date_created: "04 July 2016",
      date_modified: "04 July 2016",
      filing_date: null,
      id: 2,
      pub_date: "03 June 2015",
      pub_no: "EP2877953",
      uri: "https://www.benhoyle.co.uk/attass/oar/cases/data/2"
    },
    {
      appln_no: "79300903.6",
      caseref: "E1234.EP#",
      childlinks: [
        {
          name: "Office Actions",
          uri:
            "https://www.benhoyle.co.uk/attass/oar/officeactions/?parent_id=1"
        },
        {
          name: "Application States",
          uri: "https://www.benhoyle.co.uk/attass/oar/applnstates/?parent_id=1"
        },
        {
          name: "Cited Art",
          uri: "https://www.benhoyle.co.uk/attass/oar/citedart/?parent_id=1"
        }
      ],
      countrycode: "EP",
      date_created: "01 June 2016",
      date_modified: "11 July 2016",
      filing_date: null,
      id: 1,
      pub_date: null,
      pub_no: null,
      uri: "https://www.benhoyle.co.uk/attass/oar/cases/data/1"
    },
    {
      appln_no: "1324250.1",
      caseref: "Exxxxx.EP",
      childlinks: [
        {
          name: "Office Actions",
          uri:
            "https://www.benhoyle.co.uk/attass/oar/officeactions/?parent_id=3"
        },
        {
          name: "Application States",
          uri: "https://www.benhoyle.co.uk/attass/oar/applnstates/?parent_id=3"
        },
        {
          name: "Cited Art",
          uri: "https://www.benhoyle.co.uk/attass/oar/citedart/?parent_id=3"
        }
      ],
      countrycode: "EP",
      date_created: "11 November 2016",
      date_modified: "11 November 2016",
      filing_date: null,
      id: 3,
      pub_date: null,
      pub_no: null,
      uri: "https://www.benhoyle.co.uk/attass/oar/cases/data/3"
    }
  ]
};

ReactDOM.render(
  <TableContainer title="Case View" />,
  document.getElementById("container")
);
