import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
//Components:
import ColorBox from "./ColorBox";
//Styles :
import styles from "./styles/ColorsGridStyles";

class ColorsGrid extends Component {
  render() {
    const {
      id,
      colors,
      level,
      format,
      showingFullPalette,
      classes,
    } = this.props;
    let grid;
    if (showingFullPalette) {
      grid = (
        <div className={classes.colorsGridColors}>
          {colors[level].map((color) => (
            <ColorBox
              paletteId={id}
              background={color[format]}
              name={color.name}
              key={color.id}
              id={color.id}
              showingFullPalette={showingFullPalette}
            />
          ))}
        </div>
      );
    } else {
      grid = (
        <div className={classes.colorsGridColors}>
          {colors.map((color) => (
            <ColorBox
              paletteId={id}
              background={color[format]}
              name={color.name}
              key={color.name}
              id={color.id}
              showingFullPalette={showingFullPalette}
            />
          ))}
          <div className={classes.singleColorBox}>
            <Link to={`/palette/${id}`} className={classes.backButton}>
              Go Back
            </Link>
          </div>
        </div>
      );
    }
    return <div className={classes.colorsGrid}>{grid}</div>;
  }
}

export default withStyles(styles)(ColorsGrid);
