import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

class DogList extends Component {
  render() {
    let dogs = this.props.dogs;
    return (
      <div className='DogList text-center'>
        <div className='row'>
          {dogs.map((dog) => (
            <div className='DogList-dog col-lg-4' key={dog.name}>
              <Link to={`/dogs/${dog.name}`}>
                <img className='img-fluid' src={dog.src} alt={dog.name} />
                <h3 className='DogList-figure-caption underline'>{dog.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default DogList;
