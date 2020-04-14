import React, { Component } from 'react';

import './Pokedex.css'
import PokeCard from './Pokecard';



class Pokedex extends Component {
  static defaultProps = {
    cards: [
      { id: 4, name: 'Charmander', type: 'fire', exp: 62 },
      { id: 7, name: 'Squirtle', type: 'water', exp: 63 },
      { id: 11, name: 'Metapod', type: 'bug', exp: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', exp: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', exp: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', exp: 95 },
      { id: 94, name: 'Gengar', type: 'poison', exp: 225 },
      { id: 133, name: 'Eevee', type: 'normal', exp: 65 }
    ]
  }
  render() {
    let title = this.props.isWinner ? 'winner' : 'loser';
    let titleClass = `Pokedex-title ${title}`
    return (
      <div className='Pokedex'>
        <h1 className={titleClass}>{title}</h1>
        <h4 className="Pokedex-Totalexp">{this.props.exp}</h4>
        <div className="Pokedex-card-container">
          {this.props.cards.map((card) => (
            <PokeCard c={card} />
          ))}
        </div>
      </div>
    );
  }
}


export default Pokedex;
