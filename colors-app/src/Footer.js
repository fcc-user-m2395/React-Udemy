import React from "react";
import { withStyles } from "@material-ui/styles";
//Styles :
import styles from "./styles/PaletteStyles";

function Footer(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.footer}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(Footer);