import React, { Component } from "react";
import { Link } from "react-router-dom";
import chipsPacket from "./chips.jpg";

class Chip extends Component {
  render() {
    const chips = Array.from({ length: this.props.chips }, () => (
      <img src={chipsPacket} alt='chips' />
    ));
    return (
      <div className='Chip'>
        <h1 className='Chip-title'>Chip Component</h1>
        {chips}
        <button onClick={this.props.add}>ADD CHIPS PACKET</button>
        <Link to='/'>GO BACK</Link>
      </div>
    );
  }
}

export default Chip;
