import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";
import styles from "./styles/DraggableColorBoxStyles";

function DraggableColorBox(props) {
  const { classes, color, removeColor } = props;
  return (
    <div
      className={classes.DraggableColorBox}
      style={{ backgroundColor: color.color }}>
      <div className={classes.boxContent}>
        <span className={classes.colorText}>{color.name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={removeColor} />
      </div>
    </div>
  );
}

export default withStyles(styles)(SortableElement(DraggableColorBox));

// import React, { Component } from "react";
// import { withStyles } from "@material-ui/styles";
// import chroma from "chroma-js";
// import DeleteIcon from "@material-ui/icons/Delete";
// import { SortableElement } from "react-sortable-hoc";
// // import styles from "./Styles/DraggableColorBoxStyles";

// const styles = {
//   DraggableColorBox: {
//     // height: (props) =>
//     //   `${props.length >= 10 ? 100 / Math.ceil(props.length / 5) : 50}%`,
//     height: "25%",
//     width: "20%",
//     position: "relative",
//     cursor: "pointer",
//     backgroundColor: (props) => props.color,
//     "&:hover svg": {
//       color: "white",
//       transform: "scale(1.5)",
//     },
//   },
//   boxContent: {
//     position: "absolute",
//     left: "0",
//     bottom: "0",
//     padding: "10px",
//     width: "100%",
//     color: "rgba(0, 0, 0, 0.5)",
//     letterSpacing: "1px",
//     textTransform: "uppercase",
//     fontSize: "12px",
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   colorText: {
//     color: (props) =>
//       chroma(props.color.color).luminance() >= 0.6 ? "black" : "white",
//   },
//   deleteIcon: {
//     transition: "all 0.3s ease-in-out",
//   },
// };

// class DraggableColorBox extends Component {
//   constructor(props) {
//     super(props);
//     this.handleDelete = this.handleDelete.bind(this);
//   }

//   handleDelete() {
//     this.props.deleteColor(this.props.color.name);
//   }
//   render() {
//     const { classes, color, removeColor } = this.props;
//     return (
//       <div
//         className={classes.DraggableColorBox}
//         style={{ backgroundColor: color.color }}>
//         <div className={classes.boxContent}>
//           <span className={classes.colorText}>{color.name}</span>
//           <DeleteIcon className={classes.deleteIcon} onClick={removeColor} />
//         </div>
//       </div>
//     );
//   }
// }

// export default withStyles(styles)(DraggableColorBox);
