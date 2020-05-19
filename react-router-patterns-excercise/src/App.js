import React, { Component } from "react";
import Routes from "./Routes";
import dogs from "./DogsAPI";
import NavBar from "./NavBar";

class App extends Component {
  static defaultProps = dogs;
  render() {
    return (
      <div className='App'>
        <NavBar dogs={this.props.dogs} />
        <div className='container'>
          <Routes dogs={this.props.dogs} />
        </div>
      </div>
    );
  }
}

export default App;
