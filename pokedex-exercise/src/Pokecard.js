import React, { Component } from 'react';

import './Pokecard.css'
// let imgAPI = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

let advImgAPI = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

function threeDigit(num) {
  return `00${num}`.slice(-3);
}

class Pokecard extends Component {

  render() {
    let card = this.props.c;
    // let imgPath = `${imgAPI}${card.id}.png`;
    let imgPath = `${advImgAPI}${threeDigit(card.id)}.png`
    return (
      <div className='Pokecard'>
        <h4 className="Pokecard-name"> {card.name} </h4>
        <img className="Pokecard-img" src={imgPath} alt="" />
        <p className="Pokecard-info">Type: {card.type} </p>
        <p className="Pokecard-info">Exp: {card.exp} </p>
      </div>
    );
  }
}

export default Pokecard;