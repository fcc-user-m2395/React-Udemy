import React, { Component } from "react";

import "../ColorGrid.css";
import { colorArray } from "../Colors";
import { generateRandom, choice } from "../helpers";
import ColorBox from "./ColorBox";

class ColorGrid extends Component {
  static defaultProps = {
    numBoxes: 18,
  };
  constructor(props) {
    super(props);

    this.state = {
      colors: generateRandom(colorArray.slice(), this.props.numBoxes),
    };
    this.setColor = this.setColor.bind(this);
  }
  setColor(idx) {
    let newColors = this.state.colors.map((color, index) => {
      let newColor;
      if (index == idx) {
        do {
          newColor = choice(colorArray);
        } while (color === newColor);
      } else return color;
      return newColor;
    });
    this.setState({ colors: newColors });
  }

  render() {
    let boxes = this.state.colors.map((color, idx) => (
      <ColorBox color={color} setColor={this.setColor} idx={idx} />
    ));
    return <div className='ColorGrid'>{boxes}</div>;
  }
}

export default ColorGrid;
