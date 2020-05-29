import React, { Component } from "react";
import "./Color.scss";

class Color extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultColors: this.generateColors(this.props.rgb)
    };
    this.generateColors = this.generateColors.bind(this);
  }

  generateColors(rgb) {
    var { r, g, b } = rgb;
    var result = [];
    var max = Math.max(r, Math.max(g, b));
    var step = 255 / (max * 10);
    while (result.length < 10) {
      var i = result.length + 1;
      var red = Math.round(r * step * i);
      var green = Math.round(g * step * i);
      var blue = Math.round(b * step * i);
      var lumi = Math.ceil((red * 299 + green * 587 + blue * 114) / 1000);
      if (lumi > 10) {
        result.push({
          background: `rgb(${red},${green},${blue})`,
          luminance: lumi
        });
      }
    }
    return result;
  }
  render() {
    let { r, g, b } = this.props.rgb;
    let background = { background: "black" };
    return (
      <div className='Color'>
        <h1 className='Color-title'>Color Component</h1>
        <div
          className='colorBox'
          style={{ background: `rgb(${r},${g},${b})` }}
        ></div>
        <div className='color-box' style={background}></div>
        <div className='color-boxes'>
          {this.state.resultColors.map((styleObj) => (
            <div className='color-box' style={styleObj}></div>
          ))}
        </div>
      </div>
    );
  }
}

export default Color;
