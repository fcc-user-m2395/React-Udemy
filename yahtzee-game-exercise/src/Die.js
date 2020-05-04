import React, { Component } from "react";
import "./Die.css";
import "C:/Users/m1043026/Desktop/M1043026/VS Code Practice/React Udemy/React-Udemy/yahtzee-game-exercise/node_modules/@fortawesome/fontawesome-free/css/all.css";

class Die extends Component {
  static defaultProps = {
    dices: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    let { dices, locked, val, isRolling, disabled } = this.props;
    let classes = `Die fas fa-dice-${dices[val - 1]} `;
    if (locked) classes += "Die-locked";
    if (isRolling) classes += "Die-rolling";
    return (
      /* Die without Font Awesome Icons */
      /*<button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.props.handleClick}
      >
        {this.props.val}
      </button>*/
      /* Die with Font Awesome Icons */
      <i className={classes} onClick={this.handleClick} disabled={disabled} />
    );
  }
}

export default Die;
