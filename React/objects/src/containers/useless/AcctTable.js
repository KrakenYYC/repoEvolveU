import React, { Component } from "react";
import Buttons from "./Buttons";
import AccountsPOJO from "../components/AccountsPOJO";

class AcctTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buyItems: ["milk", "break", "cow", "wonder"]
    };
    //lets AcctContainer bind these functions
    this.onUpdateAccount = this.onUpdateAccount.bind(this);
    this.onDeposit = this.onDeposit.bind(this);
    this.onWithdraw = this.onWithdraw.bind(this);
    //creates a reference to this single account
    this.myRef = React.createRef();
    //creates a reference to amount and name
    this.inputAmount = React.createRef();
    this.inputName = React.createRef();
    //sets account from App to this.state.account
    this.account = this.state.account;
  }

  onUpdateAccount(e) {
    let amount = Number(document.getElementById("amount").value);
    let name = document.getElementById("accName").value;
    let id = this.state.accList;

    if (e.target.id === "idDeposit") {
      this.account.onDeposit(amount);
      this.setState({
        account: this.account
      });
    } else if (e.target.id === "idWithdraw") {
      this.account.onWithdraw(amount);
      this.setState({
        account: this.account
      });
    } else if (e.target.id === "idRename") {
      this.account.onRename(name);
      const newName = prompt("Please enter new Account Name");
      this.account.onRename(newName);
      this.setState({
        account: this.account
      });
    } else if (e.target.id === "idClose") {
      this.props.onClose(this.props.id);

      // this.setState({
      //   account: this.account
      // });
    } else {
      this.setState({ accBalance: null });
    }
  }

  onUpdate() {
    this.setState({
      account: this.account
    });
  }

  onDeposit() {
    const value = Number(this.inputAmount.current.value);
    if (!isNaN(value)) {
      this.account.onDeposit(value);
      this.onUpdate();
    }
  }

  onWithdraw() {
    const value = Number(this.inputAmount.current.value);
    if (!isNaN(value)) {
      this.account.onWithdraw(value);
      this.onUpdate();
    }
  }

  //new item not working
  onClose() {
    const value = Number(this.inputAmount.current.value);
    if (!isNaN(value)) {
      this.account.onClose(value);
      this.onUpdate();
    }
  }
  render() {
    const { buyItems } = this.state;
    console.log(this.account);
    return (
      <div
      // style={{
      //   backgroundColor: "#3c2aa3"
      // }}
      // className="App-acctComp"
      >
        <div className="App-acctTable">
          <table className="table">
            <caption>LIST OF ACCOUNTS</caption>
            <form className="form-inline">
              <div className="form-group">
                <label className="sr-only" htmlFor="newItemInput">
                  Add New Item
                </label>
                <input
                  type="text"
                  placeholder="bread"
                  className="form-control"
                  id="newItemInput"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Add
              </button>
            </form>
            <thead>
              <tr>
                <th>{""}</th>
                <th>Name of Account</th>
                <th>Balance</th>
                <th>Amount</th>
                <th>Functions</th>
              </tr>
            </thead>

            <tbody>
              {buyItems.map(item => {
                return (
                  <tr key={item}>
                    <th scope="row">1</th>
                    <td>{item}</td>
                    <td>Item</td>
                    <td>Item2</td>
                    <td>Item3</td>
                    <td>{<Buttons />}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const styles = theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing.unit * 3,
//     overflowX: 'auto',
//   },
//   table: {
//     minWidth: 700,
//   },
// });

// let id = 0;
// function createData(name, calories, fat, carbs, protein) {
//   id += 1;
//   return { id, name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// function SimpleTable(props) {
//   const { classes } = props;

//   return (
//     <Paper className={classes.root}>
//       <Table className={classes.table}>
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat (g)</TableCell>
//             <TableCell align="right">Carbs (g)</TableCell>
//             <TableCell align="right">Protein (g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <TableRow key={row.id}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// }

// SimpleTable.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(SimpleTable);

export default AcctTable;
