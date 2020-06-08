import React, { Component } from "react";
import classNames from "classnames";
import { arrayMove } from "react-sortable-hoc";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { withStyles } from "@material-ui/core/styles";
//Components :
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import DraggableColorList from "./DraggableColorList";
//Helpers :
import seedColors from "./helpers/seedColors";
//Styles :
import styles from "./styles/NewPaletteFormStyles";

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20,
  };

  constructor(props) {
    super(props);

    this.state = {
      open: true,
      colors: seedColors[0].colors,
    };
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.onSortEnd = this.onSortEnd.bind(this);
    this.randomColor = this.randomColor.bind(this);
  }

  handleDrawerToggle() {
    this.setState((st) => ({ open: !st.open }));
  }

  addNewColor({ newColorName, currentColor }) {
    this.setState((st) => ({
      colors: [...st.colors, { name: newColorName, color: currentColor }],
    }));
  }

  clearPalette() {
    this.setState({ colors: [] });
  }
  randomColor() {
    const allColors = this.props.palettes.map((p) => p.colors).flat();
    let rand, randColor, isDuplicateColor;
    do {
      rand = Math.floor(Math.random() * allColors.length);
      randColor = allColors[rand];
      isDuplicateColor = this.state.colors.some(
        (color) => color.name === randColor.name
      );
    } while (isDuplicateColor);
    this.setState(({ colors }) => ({ colors: [...colors, allColors[rand]] }));
  }

  handleSubmit(newPaletteName, emoji) {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors: this.state.colors,
      emoji: emoji,
    };
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  removeColor(colorName) {
    this.setState((st) => ({
      colors: st.colors.filter(({ name }) => name !== colorName),
    }));
  }
  onSortEnd({ oldIndex, newIndex }) {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  }

  render() {
    const { classes, maxColors, palettes } = this.props;
    const { open, colors } = this.state;
    const disabled = colors.length >= maxColors;
    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          handleDrawerToggle={this.handleDrawerToggle}
          handleSubmit={this.handleSubmit}
          palettes={palettes}
        />
        <Drawer
          className={classes.drawer}
          variant='persistent'
          anchor='left'
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerToggle}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant='h4' gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.buttons}>
              <Button
                variant='contained'
                className={classes.button}
                color='secondary'
                onClick={this.componentWillMountclearPalette}
              >
                Clear Palette
              </Button>
              <Button
                variant='contained'
                color='primary'
                className={classes.button}
                onClick={this.randomColor}
                disabled={disabled}
              >
                Random Color
              </Button>
            </div>
            <ColorPickerForm
              disabled={disabled}
              addNewColor={this.addNewColor}
              colors={colors}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <div style={{ height: "95%" }}>
            <DraggableColorList
              colors={colors}
              removeColor={this.removeColor}
              onSortEnd={this.onSortEnd}
              axis='xy'
              distance={10}
            />
          </div>
          {/* <div className={classes.colorBoxContainer}>
            {colors.map((color, i) => (
              <DraggableColorBox
                index={i}
                color={color}
                key={color.color}
                removeColor={() => this.removeColor(color.name)}
              />
            ))}
          </div> */}
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
