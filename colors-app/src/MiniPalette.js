import React, { PureComponent } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/styles";
//Styles :
import styles from "./styles/MiniPaletteStyles";

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleClick() {
    this.props.goToPalette(this.props.id);
  }
  handleDelete(e) {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  }

  render() {
    const { classes, palette } = this.props;
    const { paletteName, colors, emoji } = palette;
    const miniColorBoxes = colors.map((color) => (
      <div
        className={classes.miniColorBoxes}
        style={{ backgroundColor: color.color }}
        key={color.name}
      ></div>
    ));
    return (
      <div className={classes.root} onClick={this.handleClick}>
        <DeleteIcon
          className={classes.deleteIcon}
          style={{ transition: "all 0.3s ease-in-out" }}
          onClick={this.handleDelete}
        />
        <div className={classes.colors}>{miniColorBoxes}</div>
        <h5 className={classes.title}>
          {paletteName}
          <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
