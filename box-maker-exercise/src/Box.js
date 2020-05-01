import React, { Component } from "react";

class Box extends Component {
  render() {
    const styleBox = {
      width: `${this.props.width}em`,
      height: `${this.props.height}em`,
      backgroundColor: this.props.bgColor,
    };
    return <div className='Box' style={styleBox}></div>;
  }
}

export default Box;
