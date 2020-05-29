import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    flex: "0 0 30%",
    // marginBottom: "2%",
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    border: "1px solid black",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors: {
    backgroundColor: "#dae1e4",
    width: "100%",
    height: "150px",
    display: "flex",
    flexWrap: "wrap",
    borderRadius: "5px",
    overflow: "hidden"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    margin: "0",
    paddingTop: "0.5rem",
    fontSixe: "1rem",
    position: "relative"
  },
  emoji: {
    marginRight: "0.5rem",
    fontSize: "1.5rem"
  },
  miniColorBoxes: {
    // flex: "0 0 20%",
    // display: "inline-block",
    // margin: "0 auto",
    // position: "relative",
    width: "20%",
    height: "25%"
  }
};

function MiniPalette(props) {
  const { classes, palette, handleClick } = props;
  const { paletteName, colors, emoji } = palette;
  const miniColorBoxes = colors.map((color) => (
    <div
      className={classes.miniColorBoxes}
      style={{ backgroundColor: color.color }}
      key={color.name}
    ></div>
  ));
  return (
    <div className={classes.root} onClick={handleClick}>
      <div className={classes.colors}>{miniColorBoxes}</div>
      <h5 className={classes.title}>
        {paletteName}
        <span className={classes.emoji}>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
