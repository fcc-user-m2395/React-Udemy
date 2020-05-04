import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    const { score, name, doScore, desc, isRolling } = this.props;
    const disabled = score !== undefined;
    const clickDisabled = disabled || isRolling;
    return (
      <tr
        className={`RuleRow ${
          disabled
            ? "RuleRow-disabled"
            : isRolling
            ? "disabled"
            : " RuleRow-active"
        }`}
        onClick={clickDisabled ? null : doScore}
      >
        <td className='RuleRow-name'>{name}</td>
        <td className='RuleRow-score'>{disabled ? score : desc}</td>
      </tr>
    );
  }
}

export default RuleRow;
