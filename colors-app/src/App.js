import React, { Component } from "react";
//Components :
import Routes from "./Routes";
//Styles:
import "./App.css";

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
