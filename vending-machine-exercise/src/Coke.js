import React, { Component } from "react";
import { Link } from "react-router-dom";

class Coke extends Component {
  render() {
    return (
      <div className='Coke'>
        <h1 className='Coke-title'>Coke Component</h1>
        <Link to='/'>GO BACK</Link>
      </div>
    );
  }
}

export default Coke;
