import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import MenuItem from "@material-ui/core/MenuItem";

class Navbar extends Component {
  render() {
    const { level, changeLevel, handleChange, format, mode } = this.props;
    return (
      <div className='Navbar'>
        <div className='logo'>
          <Link to='/'>reactcolorpicker</Link>
        </div>
        {mode !== "single" && (
          <div className='slider-container'>
            <span>Level:{level}</span>
            <div className='slider'>
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
        <div className='select-container'>
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

export default Navbar;
