import React, { Component } from "react";

import "./App.css";
import ColorGrid from "./DumbChild/ColorGrid";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ColorGrid />
      </div>
    );
  }
}

export default App;
