import chroma from "chroma-js";
import sizes from "./sizes";

const styles = {
  DraggableColorBox: {
    // height: (props) =>
    //   `${props.length >= 10 ? 100 / Math.ceil(props.length / 5) : 50}%`,
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    marginBottom: "-4px",
    position: "relative",
    cursor: "pointer",
    backgroundColor: (props) => props.color,
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%",
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5%",
    },
  },
  boxContent: {
    position: "absolute",
    left: "0",
    bottom: "0",
    padding: "10px",
    width: "100%",
    color: "rgba(0, 0, 0, 0.5)",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  colorText: {
    color: (props) =>
      chroma(props.color.color).luminance() >= 0.6 ? "black" : "white",
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
  },
};

export default styles;
