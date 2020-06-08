import sizes from "./sizes";

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh",
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    fontWeight: "500",
    backgroundColor: "#eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "& a": { textDecoration: "none", color: "black" },
    [sizes.down("xs")]: {
      display: "none",
    },
  },
  slider: {
    width: "350px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-track": { backgroundColor: "transparent" },
    "& .rc-slider-rail": { height: "8px" },
    "& .rc-slider-handle,.rc-slider-handle-active,.rc-slider-handle:focus,.rc-slider-handle:hover": {
      background: "green",
      outline: "none",
      border: "2px solid green",
      marginLeft: "-7px",
      marginTop: "-4px",
    },
    [sizes.down("sm")]: {
      width: "150px",
    },
  },
  selectContainer: { marginLeft: "auto", marginRight: "1rem" },
};

export default styles;
