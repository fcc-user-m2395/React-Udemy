import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }
  render() {
    const { background, name, id, paletteId, mode } = this.props;
    const { copied } = this.state;
    const styles =
      mode !== "single"
        ? { background }
        : { background: background, height: "50%" };
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className='ColorBox' style={styles}>
          <div
            className={`copy-overlay ${copied && "show"}`}
            style={{ background }}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1>Copied!</h1>
            <p>{background}</p>
          </div>
          <div className='ColorBox-copy-container'>
            <div className='box-content'>
              <span className='ColorBox-name'>{name}</span>
            </div>
            <button className='copy-button' onClick={this.handleCopy}>
              Copy
            </button>
          </div>
          {mode !== "single" && (
            <Link
              exact
              to={`/palette/${paletteId}/${id}`}
              onClick={(e) => e.stopPropagation()}
            >
              <span className='see-more'>More</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
