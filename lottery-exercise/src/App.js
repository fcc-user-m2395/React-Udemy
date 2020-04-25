import React, { Component } from "react";

import "./App.css";
import Lottery from "./Lottery";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Lottery />
        <Lottery numBalls={4} maxNum={10} />
        <Lottery numBalls={9} maxNum={10} />
      </div>
    );
  }
}

export default App;
