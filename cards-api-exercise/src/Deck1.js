import React, { Component } from "react";
import axios from "axios";
import "./Deck.css";

class Deck1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deckId: undefined,
      remaining: undefined,
      cards: [],
      disabled: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    let response = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle"
    );
    let data = response.data;
    console.log(data);
    this.setState({
      deckId: data.deck_id,
      remaining: data.remaining,
      disabled: false,
    });
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  async handleClick() {
    this.setState({ disabled: true });
    let response = await axios.get(
      `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`
    );
    let data = response.data;

    this.setState((st) => ({
      cards: [
        ...st.cards,
        {
          code: data.cards[0].code,
          name: `${data.cards[0].value} of ${data.cards[0].suit}`,
          img: data.cards[0].image,
        },
      ],
      remaining: data.remaining,
      disabled: false,
    }));
  }
  getCards() {
    return this.state.remaining !== undefined ? (
      this.state.remaining > 0 ? (
        this.state.cards.map((card, i) => (
          <div className={`Cards-card card-${i % 0}`}>
            <img src={card.img} alt={card.name} />
          </div>
        ))
      ) : (
        <h1>Please refresh!!!</h1>
      )
    ) : (
      <h1>Wait</h1>
    );
  }

  render() {
    return (
      <div className='Cards'>
        <h1>Cards Component</h1>
        {this.getCards()}
        <button onClick={this.handleClick} disabled={this.state.disabled}>
          Gimme A Card
        </button>
      </div>
    );
  }
}

export default Deck1;
