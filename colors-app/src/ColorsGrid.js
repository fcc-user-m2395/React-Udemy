import React, { Component } from "react";
import ColorBox from "./ColorBox";
import { Link } from "react-router-dom";

class ColorsGrid extends Component {
  //colors[],emoji,id,paletteName
  render() {
    const { id, colors, level, format, mode } = this.props;
    let grid;
    if (mode !== "single") {
      grid = (
        <div className='ColorsGrid-colors'>
          {colors[level].map((color) => (
            <ColorBox
              paletteId={id}
              background={color[format]}
              name={color.name}
              key={color.id}
              id={color.id}
              mode={mode}
            />
          ))}
          ;
        </div>
      );
    } else {
      grid = (
        <div className='ColorsGrid-colors'>
          {colors.map((color) => (
            <ColorBox
              paletteId={id}
              background={color[format]}
              name={color.name}
              key={color.name}
              id={color.id}
              mode={mode}
            />
          ))}
          <div
            className='ColorBox'
            style={{ background: "black", height: "50%" }}
          >
            <Link exact to={`/palette/${id}`} className='back-button'>
              go-Back
            </Link>
          </div>
        </div>
      );
    }
    return <div className='ColorsGrid'>{grid}</div>;
  }
}

export default ColorsGrid;
