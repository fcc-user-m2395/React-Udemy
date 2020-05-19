import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <h1 className='Home-title'>Home Component</h1>
        <div className='Home-links'>
          <Link to='/chip'>Chips</Link>
          <Link to='/coke'>Coke</Link>
          <Link to='/candy'>Candy</Link>
        </div>
      </div>
    );
  }
}

export default Home;
