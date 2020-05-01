import React, { Component } from "react";

import "./Flipper.css";
import Coin from "./Coin";
import { choice } from "./helpers";

class Flipper extends Component {
  static defaultProps = {
    faces: [
      { face: "head", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { face: "tail", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" },
    ],
  };

  constructor(props) {
    super(props);

    this.state = {
      totalFlips: 0,
      heads: 0,
      coinFace: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    let newFace = choice(this.props.faces);
    this.setState((currState) => ({
      ...currState,
      totalFlips: currState.totalFlips + 1,
      coinFace: newFace,
      heads: currState.heads + (newFace.face === "head" ? 1 : 0),
    }));
  }

  handleClick(e) {
    this.flipCoin();
  }

  render() {
    return (
      <div className='Flipper'>
        <h2>Let's Flip A Coin</h2>
        {this.state.coinFace && <Coin face={this.state.coinFace} />}
        <button onClick={this.handleClick}>FLIP ME</button>
        <p>
          Out of {this.state.totalFlips} flips, there have been{" "}
          {this.state.heads} heads and{" "}
          {this.state.totalFlips - this.state.heads} tails.
        </p>
      </div>
    );
  }
}

export default Flipper;
