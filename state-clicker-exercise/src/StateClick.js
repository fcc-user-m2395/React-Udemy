import React, { Component } from 'react';

import './StateClick.css'

class StateClick extends Component {
  constructor(props) {
    super(props)
    this.state = { num: 1 }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    let rand = Math.floor(Math.random() * 10) + 1;
    this.setState({ num: rand });
    // this.setState({ num: Math.floor(Math.random() * 10) + 1 });
  }

  render() {
    return (
      <div className='StateClick'>
        <h1>Number is {this.state.num} </h1>
        {this.state.num !== 7 ? <button onClick={this.handleClick}> Random Number </button> : <h2>You Win!!!</h2>}
      </div>
    );
  }
}


export default StateClick;
