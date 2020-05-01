import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

class Board1 extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25,
  };

  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      board: this.createBoard(),
    };
    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    let choices = [true, false];
    let boards = Array.from({ length: this.props.nrows }, (_, i) =>
      Array.from({ length: this.props.ncols })
    );
    board = boards.map((row) =>
      row.map((column) => choices[Math.floor(Math.random() * 2)])
    );

    // TODO: create array-of-arrays of true/false values
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let { y, x } = coord;

    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
      return board[y][x];
    }
    let boards = board.map((row, idxRow) => {
      let newRow = row;
      if (idxRow == y - 1 || idxRow == y + 1) {
        newRow = row.map((column, idxCol) =>
          idxCol == x ? flipCell(idxRow, idxCol) : column
        );
      } else if (idxRow == y) {
        newRow = row.map((column, idxCol) =>
          idxCol >= x - 1 && idxCol <= x + 1 ? flipCell(idxRow, idxCol) : column
        );
      }
      return newRow;
    });
    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won

    this.setState({ boards });
  }

  /** Render game board or winning message. */

  render() {
    // let BoardState = this.state.board;
    return (
      <table className='Board'>
        <tbody>
          {this.state.board.map((row, idxRow) => (
            <tr className='Board-row'>
              {row.map((col, idxCol) => (
                <Cell
                  isLit={this.state.board[idxRow][idxCol]}
                  key={`${idxRow}-${idxCol}`}
                  coord={`${idxRow}-${idxCol}`}
                  flipCellsAroundMe={this.flipCellsAround}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );

    // if the game is won, just show a winning msg & render nothing else

    // TODO

    // make table board

    // TODO
  }
}

export default Board1;
