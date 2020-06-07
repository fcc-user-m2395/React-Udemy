import React, { Component } from "react";
import ColorsGrid from "./ColorsGrid";
import Navbar from "./Navbar";
import FormatChangeMessage from "./FormatChangeMessage";
import Footer from "./Footer";
import styles from "./styles/PaletteStyles";
import { withStyles } from "@material-ui/styles";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex",
      open: false,
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
    this.closeMessage = this.closeMessage.bind(this);
  }
  changeLevel(level) {
    this.setState({ level });
  }
  changeFormat(e) {
    this.setState({ format: e.target.value, open: true });
  }
  closeMessage() {
    this.setState({ open: false });
  }
  render() {
    const { level, format, open } = this.state;
    const { showingFullPalette, classes } = this.props;
    const { paletteName, emoji, colors, id } = this.props.palette;
    return (
      <div className={classes.palette}>
        <Navbar
          changeLevel={this.changeLevel}
          level={level}
          handleChange={this.changeFormat}
          format={format}
          showingFullPalette={showingFullPalette}
        />
        <ColorsGrid
          colors={colors}
          level={level}
          format={format}
          id={id}
          showingFullPalette={showingFullPalette}
        />
        <FormatChangeMessage
          open={open}
          handleClose={this.closeMessage}
          format={format.toUpperCase()}
        />
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
