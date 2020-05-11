import React, { Component } from "react";
import Jokes from "./Jokes";
import Navbar from "./Navbar";

class DadJokes extends Component {
  render() {
    return (
      <div className='DadJokes'>
        <Navbar />
        <Jokes />
      </div>
    );
  }
}

export default DadJokes;
