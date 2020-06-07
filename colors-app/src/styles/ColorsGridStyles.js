import sizes from "./sizes";

const styles = {
  colorsGrid: { height: "90vh" },
  colorsGridColors: {
    height: "100%",
  },
  singleColorBox: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    marginBottom: "-4px",
    position: "relative",
    cursor: "pointer",
    background: "black",
    [sizes.down("lg")]: {
      height: "50%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%",
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%",
    },
  },
  backButton: {
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
    color: "white",
    textTransform: "uppercase",
    textDecoration: "none",
  },
};

export default styles;
