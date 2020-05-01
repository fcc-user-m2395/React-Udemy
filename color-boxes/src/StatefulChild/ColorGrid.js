import React, { Component } from "react";

import "../ColorGrid.css";
import { colorArray } from "../Colors";
import { generateRandom } from "../helpers";
import ColorBox from "./ColorBox";

class ColorGrid extends Component {
  static defaultProps = {
    numBoxes: 18,
  };

  render() {
    let boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <ColorBox />
    ));
    return <div className='ColorGrid'>{boxes}</div>;
  }
}

export default ColorGrid;
