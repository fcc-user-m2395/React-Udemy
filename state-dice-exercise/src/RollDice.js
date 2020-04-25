import React, { Component } from "react";

import "./RollDice.css";
import Die from "./Die";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1: "one",
      dice2: "one",
      isRolling: false,
    };
    this.rollDice = this.rollDice.bind(this);
  }
  rollDice() {
    let number = ["one", "two", "three", "four", "five", "six"];
    let die1 = number[Math.floor(Math.random() * 6)];
    let die2 = number[Math.floor(Math.random() * 6)];
    this.setState({ dice1: die1, dice2: die2, isRolling: true });
    //wait for one second and set the rolling back to false
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-container'>
          <Die num={this.state.dice1} isRolling={this.state.isRolling} />
          <Die num={this.state.dice2} isRolling={this.state.isRolling} />
        </div>
        <button
          className='RollDice-button'
          onClick={this.rollDice}
          disabled={this.state.isRolling}
        >
          {this.state.isRolling ? "Rolling..." : "Roll Dice"}
        </button>
      </div>
    );
  }
}

export default RollDice;
