import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dog extends Component {
  render() {
    let { name, age, src, facts } = this.props.dog;
    return (
      <div className='Dog'>
        <div className='row justify-content-center mt-5'>
          <div className='Dog-details col-11 col-lg-5'>
            <div className='Dog-card card'>
              <img className='card-img-top img-fluid' src={src} alt={name} />
              <div className='card-body'>
                <h2 className='card-title'>{name}</h2>
                <h5 className='card-subtitle text-muted'>
                  Age: {age} Years old.
                </h5>
              </div>
              <ul className='list-group list-group-flush'>
                {facts.map((fact, i) => (
                  <li className='list-group-item' key={i}>
                    {fact}
                  </li>
                ))}
              </ul>
              <div className='card-body'>
                <Link to='/' className='btn btn-info'>
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dog;
