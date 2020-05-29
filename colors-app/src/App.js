import React, { Component } from "react";
import Routes from "./Routes";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Routes />
        {/* <Palette palette={palettes[2]} /> */}
      </div>
    );
  }
}

export default App;
