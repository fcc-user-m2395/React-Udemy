import chroma from "chroma-js";
import sizes from "./sizes";

const styles = {
  colorBox: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    marginBottom: "-4px",
    position: "relative",
    cursor: "pointer",
    "&:hover button": {
      opacity: "1",
      cursor: "pointer",
      transition: "0.5s",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%",
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "5%",
    },
  },
  singleColorBox: {
    width: "20%",
    height: "50%",
    [sizes.down("md")]: {
      width: "50%",
      height: "20%",
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%",
    },
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.2 ? "white" : "black",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginTop: "-15px",
    marginLeft: "-50px",
    outline: "none",
    textAlign: "center",
    border: "none",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    lineHeight: "30px",
    fontSize: "1rem",
    textTransform: "uppercase",
    textDecoration: "none",
    opacity: "0",
  },
  boxContent: {
    position: "absolute",
    left: "0",
    bottom: "0",
    padding: "10px",
    color: "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
  },
  colorText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.6 ? "black" : "white",
  },
  seeMore: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0",
    bottom: "0",
    color: (props) =>
      chroma(props.background).luminance() <= 0.2 ? "white" : "black",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)",
  },
  showCopyOverlay: {
    opacity: "1",
    zIndex: "10",
    transform: "scale(50)",
    position: "absolute",
  },
  copyMessage: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      margin: "0",
      padding: "1rem",
      textTransform: "uppercase",
      [sizes.down("xs")]: {
        fontSize: "6rem",
      },
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100",
      color: (props) =>
        chroma(props.background).luminance() <= 0.2 ? "white" : "black",
    },
  },
  showMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s",
  },
};

export default styles;
