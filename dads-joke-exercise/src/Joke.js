import React, { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  constructor(props) {
    super(props);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.deleteJoke = this.deleteJoke.bind(this);
  }
  upVote() {
    this.props.vote(this.props.joke.id, 1);
  }
  downVote() {
    this.props.vote(this.props.joke.id, -1);
  }
  deleteJoke() {
    this.props.deleteJoke(this.props.joke.id);
  }
  getEmoji() {
    if (this.props.joke.votes >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (this.props.joke.votes >= 12) {
      return "em em-laughing";
    } else if (this.props.joke.votes >= 9) {
      return "em em-smiley";
    } else if (this.props.joke.votes >= 6) {
      return "em em-slightly_smiling_face";
    } else if (this.props.joke.votes >= 3) {
      return "em em-neutral_face";
    } else if (this.props.joke.votes >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  }
  getColor() {
    if (this.props.joke.votes >= 15) {
      return { borderColor: "#4CAF50" };
    } else if (this.props.joke.votes >= 12) {
      return { borderColor: "#8BC34A" };
    } else if (this.props.joke.votes >= 9) {
      return { borderColor: "#CDDC39" };
    } else if (this.props.joke.votes >= 6) {
      return { borderColor: "#FFEB3B" };
    } else if (this.props.joke.votes >= 3) {
      return { borderColor: "#FFC107" };
    } else if (this.props.joke.votes >= 0) {
      return { borderColor: "#FF9800" };
    } else {
      return { borderColor: "#f44336" };
    }
  }
  render() {
    return (
      <div className='Joke'>
        <div className='Joke-buttons'>
          <i className='fas fa-arrow-up' onClick={this.upVote}></i>
          <span className='Joke-votes' style={this.getColor()}>
            {this.props.joke.votes}
          </span>
          <i className='fas fa-arrow-down' onClick={this.downVote}></i>
        </div>
        <div className='Joke-text'>{this.props.joke.joke}</div>
        <div className='Joke-smiley'>
          <i className={this.getEmoji()} />
        </div>
        <div className='Joke-delete'>
          <i className='fas fa-trash' onClick={this.deleteJoke} />
        </div>
      </div>
    );
  }
}

export default Joke;
