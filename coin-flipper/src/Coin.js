import React, { Component } from "react";

import "./Coin.css";

class Coin extends Component {
  render() {
    return (
      <div className='Coin'>
        <img src={this.props.face.imgSrc} alt={this.props.face.face} />
      </div>
    );
  }
}

export default Coin;
