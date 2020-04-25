import React, { Component } from "react";

import "./Die.css";

class Die extends Component {
  render() {
    console.log('Die');
    return (
      <i
        className={`Die fas fa-dice-${this.props.num} ${
          this.props.isRolling && "rolling"
        }`}
      ></i>
    );
  }
}

export default Die;
