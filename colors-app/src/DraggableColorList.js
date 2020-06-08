import React from "react";
import { withStyles } from "@material-ui/styles";
import { SortableContainer } from "react-sortable-hoc";
//Components :
import DraggableColorBox from "./DraggableColorBox";

const styles = {
  DraggableColorList: {
    height: "100%",
  },
};

function DraggableColorList(props) {
  const { classes, colors, removeColor } = props;
  return (
    <div className={classes.DraggableColorList}>
      {colors.map((color, i) => (
        <DraggableColorBox
          index={i}
          color={color}
          key={color.color}
          removeColor={() => removeColor(color.name)}
        />
      ))}
    </div>
  );
}

export default withStyles(styles)(SortableContainer(DraggableColorList));
