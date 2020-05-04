import React, { Component } from "react";
import RuleRow from "./RuleRow";
import "./ScoreTable.css";
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance,
} from "./Rules";

class ScoreTable extends Component {
  render() {
    const { scores, doScore, isRolling } = this.props;

    return (
      <div className='ScoreTable'>
        <section className='ScoreTable-section'>
          <h2>Upper</h2>
          <table cellSpacing='0'>
            <tbody>
              <RuleRow
                isRolling={isRolling}
                name='Ones'
                score={scores.ones}
                doScore={(evt) => doScore("ones", ones.evalRoll)}
                desc={ones.description}
              />
              <RuleRow
                isRolling={isRolling}
                name='Twos'
                score={scores.twos}
                doScore={(evt) => doScore("twos", twos.evalRoll)}
                desc={twos.description}
              />
              <RuleRow
                isRolling={isRolling}
                name='Threes'
                score={scores.threes}
                doScore={(evt) => doScore("threes", threes.evalRoll)}
                desc={threes.description}
              />
              <RuleRow
                isRolling={isRolling}
                name='Fours'
                score={scores.fours}
                doScore={(evt) => doScore("fours", fours.evalRoll)}
                desc={fours.description}
              />
              <RuleRow
                isRolling={isRolling}
                name='Fives'
                score={scores.fives}
                doScore={(evt) => doScore("fives", fives.evalRoll)}
                desc={fives.description}
              />
              <RuleRow
                isRolling={isRolling}
                name='Sixes'
                score={scores.sixes}
                doScore={(evt) => doScore("sixes", sixes.evalRoll)}
                desc={sixes.description}
              />
            </tbody>
          </table>
        </section>
        <section className='ScoreTable-section ScoreTable-section-lower'>
          <h2>Lower</h2>
          <table cellSpacing='0'>
            <tbody>
              <RuleRow
                isRolling={isRolling}
                name='Three of Kind'
                score={scores.threeOfKind}
                doScore={(evt) => doScore("threeOfKind", threeOfKind.evalRoll)}
                desc={threeOfKind.description}
              />
              <RuleRow
                isRolling={isRolling}
                name='Four of Kind'
                score={scores.fourOfKind}
                doScore={(evt) => doScore("fourOfKind", fourOfKind.evalRoll)}
                desc={fourOfKind.description}
              />
              <RuleRow
                isRolling={isRolling}
                name='Full House'
                score={scores.fullHouse}
                doScore={(evt) => doScore("fullHouse", fullHouse.evalRoll)}
                desc={fullHouse.description}
              />
              <RuleRow
                isRolling={isRolling}
                name='Small Straight'
                score={scores.smallStraight}
                doScore={(evt) =>
                  doScore("smallStraight", smallStraight.evalRoll)
                }
                desc={smallStraight.description}
              />
              <RuleRow
                isRolling={isRolling}
                name='Large Straight'
                score={scores.largeStraight}
                doScore={(evt) =>
                  doScore("largeStraight", largeStraight.evalRoll)
                }
                desc={largeStraight.description}
              />
              <RuleRow
                isRolling={isRolling}
                name='Yahtzee'
                score={scores.yahtzee}
                doScore={(evt) => doScore("yahtzee", yahtzee.evalRoll)}
                desc={yahtzee.description}
              />
              <RuleRow
                isRolling={isRolling}
                name='Chance'
                score={scores.chance}
                doScore={(evt) => doScore("chance", chance.evalRoll)}
                desc={chance.description}
              />
            </tbody>
          </table>
        </section>
      </div>
    );
  }
}

export default ScoreTable;
