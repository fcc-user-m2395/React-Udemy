import React from "react";
import { SortableElement } from "react-sortable-hoc";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/styles";
//Styles :
import styles from "./styles/DraggableColorBoxStyles";

function DraggableColorBox(props) {
  const { classes, color, removeColor } = props;
  return (
    <div
      className={classes.DraggableColorBox}
      style={{ backgroundColor: color.color }}
    >
      <div className={classes.boxContent}>
        <span className={classes.colorText}>{color.name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={removeColor} />
      </div>
    </div>
  );
}

export default withStyles(styles)(SortableElement(DraggableColorBox));
