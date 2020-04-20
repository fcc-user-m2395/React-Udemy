import React, { Component } from 'react';

import './RollDice.css'
import Die from './Die';

class RollDice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dice1: 'one',
      dice2: 'one'
    }
    this.rollDice = this.rollDice.bind(this);
  }
  rollDice() {
    let number = ['one', 'two', 'three', 'four', 'five', 'six']
    let die1 = number[Math.floor(Math.random() * 6)];
    let die2 = number[Math.floor(Math.random() * 6)];
    this.setState({ dice1: die1, dice2: die2 });
  }

  render() {
    return (
      <div className='RollDice'>
        <div className="RollDice-container">
          <Die num={this.state.dice1} />
          <Die num={this.state.dice2} />
          <button onClick={this.rollDice}>Roll Dice</button>
        </div>
      </div>
    );
  }
}


export default RollDice;
