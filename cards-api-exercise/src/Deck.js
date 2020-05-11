import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import "./Deck.css";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";
class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deck: undefined,
      cards: [],
      disabled: true,
    };
    this.getCard = this.getCard.bind(this);
  }
  async componentDidMount() {
    let response = await axios.get(`${API_BASE_URL}new/shuffle`);
    let deck = response.data;
    this.setState({
      deck: deck,
      disabled: false,
    });
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  async getCard() {
    let id = this.state.deck.deck_id;
    try {
      let cardRes = await axios.get(`${API_BASE_URL}${id}/draw/`);
      let card = cardRes.data.cards[0];
      if (!cardRes.data.success) {
        throw new Error("error");
      }
      this.setState((st) => ({
        cards: [
          ...st.cards,
          {
            id: card.code,
            name: `${card.value} of ${card.suit}`,
            img: card.image,
          },
        ],
        disabled: false,
      }));
    } catch (err) {
      this.setState({ disabled: true });
    }
  }

  render() {
    let cards = this.state.cards.map((card) => (
      <Card key={card.id} image={card.img} name={card.name} />
    ));
    return (
      <div className='Cards'>
        <h1>Cards Component</h1>
        <button onClick={this.getCard} disabled={this.state.disabled}>
          Gimme A Card
        </button>
        <div className='Deck-cardArea'>{cards}</div>
      </div>
    );
  }
}

export default Deck;
