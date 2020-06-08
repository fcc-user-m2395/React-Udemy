import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/styles";
//Styles :
import "rc-slider/assets/index.css";
import styles from "./styles/NavbarStyles";

class Navbar extends Component {
  render() {
    const {
      level,
      changeLevel,
      handleChange,
      format,
      showingFullPalette,
      classes,
    } = this.props;
    return (
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <Link to='/'>reactcolorpicker</Link>
        </div>
        {showingFullPalette && (
          <div>
            <span>Level:{level}</span>
            <div className={classes.slider}>
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                onAfterChange={changeLevel}
                step={100}
              />
            </div>
          </div>
        )}
        <div className={classes.selectContainer}>
          <Select value={format} onChange={handleChange}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255,255,255,1)</MenuItem>
          </Select>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);
