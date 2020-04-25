import React, { Component } from "react";

import { choice } from "./helpers";
import "./ColorBox.css";
import { colorArray } from "./Colors";

class ColorBox extends Component {
  static defaultProps = {
    colorsArray: colorArray.slice(),
  };
  constructor(props) {
    super(props);

    this.state = {
      color: choice(this.props.colorsArray),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  setColor() {
    let newColor;
    do {
      newColor = choice(this.props.colorsArray);
    } while (this.state.color === newColor);
    this.setState({ color: newColor });
  }
  handleClick() {
    this.setColor();
  }
  render() {
    return (
      <div
        className='ColorBox'
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default ColorBox;
