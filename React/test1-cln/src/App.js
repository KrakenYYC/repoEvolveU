import React, { Component } from "react";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import LeftPanel from "./components/LeftPanel";
import SectionA from "./components/SectionA";
import SectionB from "./components/SectionB";
import Foot from "./components/Foot";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Navbar />
        <LeftPanel />
        <SectionA />
        <SectionB />
        <Foot />
      </div>
    );
  }
}

export default App;
