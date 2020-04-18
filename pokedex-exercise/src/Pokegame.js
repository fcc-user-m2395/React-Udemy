import React, { Component } from 'react';

import Pokedex from './Pokedex'
import './Pokegame.css'

// function totalExp(cards) {
//   let totalexp = 0;
//   cards.map((card) => (totalexp += card.exp));
//   return totalexp;
// }




class Pokegame extends Component {
  static defaultProps = {
    cards: [
      { id: 4, name: 'Charmander', type: 'fire', exp: 62 },
      { id: 7, name: 'Squirtle', type: 'water', exp: 63 },
      { id: 11, name: 'Metapod', type: 'bug', exp: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', exp: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', exp: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', exp: 95 },
      { id: 94, name: 'Gengar', type: 'poison', exp: 225 },
      { id: 133, name: 'Eevee', type: 'normal', exp: 65, 'JIU-ASDB' }
    ]
  }
  render() {
    let player1 = [...this.props.cards];
    let player2 = [];
    while (player1.length > player2.length) {
      let randomIdx = Math.floor(Math.random() * player1.length);
      player2.push(player1.splice(randomIdx, 1)[0]);
    }
    // let player1Exp = totalExp(player1);
    let player1Exp = player1.reduce((exp, card) => (exp + card.exp), 0);
    // let player2Exp = totalExp(player2);
    let player2Exp = player2.reduce((exp, card) => (exp + card.exp), 0);



    return (
      <div className='Pokegame'>
        <Pokedex cards={player1} exp={player1Exp} isWinner={player1Exp >= player2Exp} />
        <Pokedex cards={player2} exp={player2Exp} isWinner={player2Exp >= player1Exp} />
      </div>
    );
  }
}


export default Pokegame;
