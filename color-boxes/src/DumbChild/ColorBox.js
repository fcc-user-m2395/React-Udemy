import React, { Component } from "react";

import { choice } from "../helpers";
import "../ColorBox.css";
import { colorArray } from "../Colors";

class ColorBox extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.setColor(this.props.idx);
  }
  render() {
    return (
      <div
        className='ColorBox'
        style={{ backgroundColor: this.props.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default ColorBox;
