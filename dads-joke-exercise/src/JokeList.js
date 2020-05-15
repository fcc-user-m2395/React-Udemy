import React, { Component } from "react";
import axios from "axios";
import emoji from "./laughing-emoji.svg";
import Joke from "./Joke";
import "./JokeList.css";
import ls from "local-storage";

class JokeList extends Component {
  static defaultProps = {
    numJokes: 10
  };

  constructor(props) {
    super(props);

    this.state = {
      jokes: ls.get("jokes") || []
    };
    this.ids = this.state.jokes.map((joke) => joke.id);
    this.getJokes = this.getJokes.bind(this);
    this.voteJoke = this.voteJoke.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.deleteJoke = this.deleteJoke.bind(this);
  }

  componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  }
  async getJokes() {
    let jokes = [];
    while (jokes.length < this.props.numJokes) {
      let jokeRes = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      let joke = jokeRes.data;
      if (!this.ids.includes(joke.id)) {
        jokes.push({ ...joke, votes: 0 });
        this.ids.push(joke.id);
      }
    }
    this.setState(
      (st) => ({
        jokes: [...st.jokes, ...jokes],
        loading: false
      }),
      () => ls.set("jokes", this.state.jokes)
    );
  }
  handleClick() {
    this.setState({ loading: true }, this.getJokes);
  }
  // voteJokes(id, action) {
  //   let jokes = this.state.jokes.map((joke) => {
  //     let votes = joke.votes;
  //     if (joke.id === id) {
  //       votes += action === "+" ? 1 : -1;
  //       return { ...joke, votes: votes };
  //     }
  //     return joke;
  //   });
  //   this.setState({ jokes: jokes });
  // }
  voteJoke(id, action) {
    this.setState(
      (st) => ({
        jokes: st.jokes.map((j) =>
          j.id === id ? { ...j, votes: j.votes + action } : j
        )
      }),
      () => ls.set("jokes", this.state.jokes)
    );
  }
  deleteJoke(id) {
    this.setState(
      (st) => ({
        jokes: st.jokes.filter((j) => j.id !== id)
      }),
      () => ls.set("jokes", this.state.jokes)
    );
  }
  render() {
    if (this.state.loading) {
      return (
        <div className='JokeList-spinner'>
          <i className='far fa-8x fa-laugh fa-spin' />
          <h1 className='JokeList-title'>Loading...</h1>
        </div>
      );
    }
    return (
      <div className='JokeList'>
        <div className='JokeList-sidebar'>
          <h1 className='JokeList-title'>
            <span>Dad</span> Jokes
          </h1>
          <img src={emoji} />
          <button className='JokeList-getmore' onClick={this.handleClick}>
            Fetch Jokes
          </button>
        </div>
        <div className='JokeList-jokes'>
          {this.state.jokes.map((joke) => (
            <Joke
              key={joke.id}
              joke={joke}
              vote={this.voteJoke}
              deleteJoke={this.deleteJoke}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
