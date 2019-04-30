import React, { Component } from "react";
import ReactDOM from "react-dom";
import Extension from "./components/Extension";
import logo from "./logo.svg";

import "./App.css";

//this has put the title from index into a constant variable
const App = props => {
  return <h1>{props.title}</h1>;
};
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1>{this.props.title}</h1>
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//         </header>
//       </div>
//     );
//   }
// }
<Extension />;
export default App;
