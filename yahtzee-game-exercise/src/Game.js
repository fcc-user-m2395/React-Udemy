import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      isRolling: false,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined,
      },
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.restart = this.restart.bind(this);
    // this.displayRollInfo = this.displayRollInfo.bind(this);
  }

  // componentDidMount() {
  //   this.roll();
  // }

  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState((st) => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      isRolling: true,
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
    }));
    setTimeout(() => {
      this.setState((st) => ({
        isRolling: false,
        rollsLeft: st.rollsLeft - 1,
      }));
    }, 1000);
  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
    if (this.state.rollsLeft > 0 && !this.state.isRolling) {
      this.setState((st) => ({
        locked: [
          ...st.locked.slice(0, idx),
          !st.locked[idx],
          ...st.locked.slice(idx + 1),
        ],
      }));
    }
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState((st) => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false),
    }));
    this.roll();
  }

  restart() {
    this.setState({
      dice: Array.from({ length: NUM_DICE }),
      isRolling: false,
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined,
      },
    });
  }
  displayRollInfo() {
    const messages = [
      "0 Rolls Left",
      "1 Roll Left",
      "2 Rolls Left",
      "Starting Round",
    ];
    return this.state.isRolling ? "Rolling" : messages[this.state.rollsLeft];
  }
  getTotalScore() {
    let scores = this.state.scores;
    let totalScore = 0;
    let rulesDone = 0;
    for (let key in scores) {
      if (scores[key] !== undefined) {
        totalScore += scores[key];
        rulesDone++;
      }
    }
    return { score: totalScore, rulesDone: rulesDone };
  }
  render() {
    const { dice, locked, rollsLeft, isRolling, scores } = this.state;
    const { rulesDone, score } = this.getTotalScore();
    return (
      <div className='Game'>
        {this.state.dice[0] === undefined && this.roll()}
        <header className='Game-header'>
          {rulesDone < 13 && (
            <i className='Game-restart fas fa-redo' onClick={this.restart}></i>
          )}
          <h1 className='App-title'>Yahtzee!</h1>
          {rulesDone < 13 && (
            <section className='Game-dice-section'>
              <Dice
                dice={dice}
                isRolling={isRolling}
                locked={locked}
                handleClick={this.toggleLocked}
                disabled={rollsLeft === 0}
              />
              <div className='Game-button-wrapper'>
                <button
                  className='Game-reroll'
                  disabled={
                    locked.every((x) => x) ||
                    rollsLeft === 0 ||
                    isRolling ||
                    rulesDone === 13
                  }
                  onClick={this.roll}
                >
                  {this.displayRollInfo()}
                </button>
              </div>
            </section>
          )}
          {rulesDone === 13 && (
            <div className='Game-button-wrapper'>
              <button className='Game-reroll' onClick={this.restart}>
                Play Again?
              </button>
            </div>
          )}
        </header>
        {rulesDone < 13 && (
          <ScoreTable
            doScore={this.doScore}
            scores={scores}
            isRolling={isRolling}
          />
        )}
        <h2>TOTAL SCORE : {score}</h2>
      </div>
    );
  }
}

export default Game;
