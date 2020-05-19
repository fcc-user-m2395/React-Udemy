import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/'>
          Dog Shelter
        </Link>
        {/* {this.props.dogs.map((dog) => (
          <NavLink exact to={`/dogs/${dog.name}`}>
            {dog.name}
          </NavLink>
        ))} */}
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' exact to={`/dogs`}>
                Home
              </NavLink>
            </li>
            {this.props.dogs.map((dog) => (
              <li className='nav-item' key={dog.name}>
                <NavLink className='nav-link' exact to={`/dogs/${dog.name}`}>
                  {dog.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      // <div className='Navigation'>
      //   <div className='Navigation-bar'>

      //     {this.props.dogs.map((dog) => (
      //       <NavLink exact to={`/dogs/${dog.name}`}>
      //         {dog.name}
      //       </NavLink>
      //     ))}
      //   </div>
      // </div>
    );
  }
}

export default NavBar;
