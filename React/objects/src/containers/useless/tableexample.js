// beginning of example

// let data = [{
//     "Title": "The Wizard of Oz",
//     "Year": 1939,
//     "Genre": "Fantasy"
//   }]

//   function sortByColumn(a, colIndex, reverse) {
//     if (reverse == true) {
//       a.sort(sortFunction).reverse();
//     } else {
//       a.sort(sortFunction);
//     }

//     function sortFunction(a, b) {
//       if (a[colIndex] === b[colIndex]) {
//         return 0;
//       } else {
//         return (a[colIndex] < b[colIndex]) ? -1 : 1;
//       }
//     }
//     return a;
//   }

//   const Table = React.createClass({
//     getInitialState: function() {
//       return {
//         data: this.props.data,
//         toggle: false,
//         activeColumn: 0,
//         lastActiveColumn: 0,
//       }
//     },
//     handleClick: function(title, key) {
//       if (this.state.activeColumn === key) {
//         let toggle = !this.state.toggle
//         this.setState({
//           toggle: toggle,
//           activeColumn: key,
//           rows: sortByColumn(this.state.data, title, toggle)
//         })
//       } else {
//         this.setState({
//           activeColumn: key,
//           rows: sortByColumn(this.state.data, title, false)
//         })
//       }
//     },
//     render: function() {
//       return (
//         <table className="responsive-table">
//           <thead>
//             <tr>
//               {Object.keys(this.state.data[0]).map((title, key) => {
//                 return (
//                 <th
//                  key={key}
//                  onClick={() => this.handleClick(title, key)}
//                  scope="col"
//                  data-label={title} >
//                  {title}
//                  {(this.state.activeColumn === key) ? (this.state.toggle) ? " ↓": " ↑" : ""}
//                 </th>)
//               })}
//             </tr>
//           </thead>
//           <tbody>
//             {this.state.data.map(function(row, key) {
//               return (
//                 <tr key={key}>
//                   {Object.keys(row).map(function(entry, key) {
//                     return (
//                       <td
//                         scope="row"
//                         key={key}
//                         data-label={entry}>
//                         {row[entry]}
//                       </td>
//                     )
//                   })}
//                 </tr>
//               )
//             })}
//           </tbody>
//         </table>
//       )
//     }
//   })

//   const App = React.createClass({
//     render: function() {
//       return (
//         <div>
//           <Table data={data} />
//         </div>
//       )
//     }
//   })

//   ReactDOM.render(<App />, document.querySelector('#app'))
//end of example
//   <Table striped bordered hover>
//     <thead>
//       <tr>
//         <th>#</th>
//         <th>First Name</th>
//         <th>Last Name</th>
//         <th>Username</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <td>1</td>
//         <td>Mark</td>
//         <td>Otto</td>
//         <td>@mdo</td>
//       </tr>
//       <tr>
//         <td>2</td>
//         <td>Jacob</td>
//         <td>Thornton</td>
//         <td>@fat</td>
//       </tr>
//       <tr>
//         <td>3</td>
//         <td colSpan="2">Larry the Bird</td>
//         <td>@twitter</td>
//       </tr>
//     </tbody>
//   </Table>
