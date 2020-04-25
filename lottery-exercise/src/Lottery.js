import React, { Component } from "react";

import "./Lottery.css";
import LottoBall from "./LottoBall";

class Lottery extends Component {
  static defaultProps = {
    numBalls: 6,
    maxNum: 40,
    title: "Lotto",
  };
  constructor(props) {
    super(props);
    this.state = {
      // nums: this.generateBalls(),
      nums: Array.from({ length: this.props.numBalls }),
    };
    this.handleClick = this.handleClick.bind(this);
  }
  generateBalls() {
    let { numBalls, maxNum } = this.props;
    let balls = [];
    while (balls.length < numBalls) {
      let ball = Math.floor(Math.random() * maxNum) + 1;
      // if (!balls.includes(ball)) balls.push(ball);
      !balls.includes(ball) && balls.push(ball);
    }
    // return balls;
    this.setState((currState) => ({ nums: balls }));
  }

  handleClick() {
    // this.setState((currState) => ({ nums: this.generateBalls() }));
    this.generateBalls();
  }

  render() {
    return (
      <section className='Lottery'>
        <h1 className='Lottery-title'>{this.props.title}</h1>
        <div className='Lottery-balls'>
          {this.state.nums.map((b) => (
            <LottoBall num={b} />
          ))}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </section>
    );
  }
}

export default Lottery;
