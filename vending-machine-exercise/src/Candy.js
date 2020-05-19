import React, { Component } from "react";
import { Link } from "react-router-dom";

class Candy extends Component {
  render() {
    return (
      <div className='Candy'>
        <h1>Candy Component</h1>
        <Link to='/'>GO BACK</Link>
      </div>
    );
  }
}

export default Candy;
