import sizes from "./sizes";
import bg from "./bg.svg";

const styles = {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-in-out",
    },
  },
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "auto",
    /* background by SVGBackgrounds.com */
    backgroundColor: "#350eaa",
    backgroundImage: `url(${bg})`,
  },
  heading: {
    fontSize: "2rem",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "70%",
    },
    [sizes.down("lg")]: {
      width: "80%",
    },
    [sizes.down("sm")]: {
      width: "60%",
    },
    [sizes.down("xs")]: {
      width: "75%",
    },
  },
  nav: {
    color: "white",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    "& a": {
      color: "white",
    },
  },
  palettes: {
    boxSizing: "border-box",
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2,50%)",
      gridGap: "2rem",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1,100%)",
      gridGap: "1.5rem",
    },
  },
};

export default styles;
