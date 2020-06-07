import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import styles from "./styles/ColorPickerFormStyles";
import { withStyles } from "@material-ui/core/styles";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentColor: "#123456",
      newColorName: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateColor = this.updateColor.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit() {
    this.props.addNewColor(this.state);
    this.setState({ newColorName: "" });
  }
  updateColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule("isColorUnique", () =>
      this.props.colors.every(({ color }) => color !== this.props.currentColor)
    );
  }

  render() {
    const { disabled, classes } = this.props;
    const { currentColor, newColorName } = this.state;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateColor}
          className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            onChange={this.handleChange}
            className={classes.colorNameInput}
            variant='filled'
            placeholder='Color Name'
            name='newColorName'
            margin='normal'
            value={newColorName}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter Color Name",
              "Color Name Already Taken",
              "Color Already Taken",
            ]}
          />
          <Button
            variant='contained'
            className={classes.addColor}
            color='primary'
            type='submit'
            style={{
              background: disabled ? "rgba(0, 0, 0, 0.12)" : currentColor,
            }}
            disabled={disabled}>
            {disabled ? "Palette Full" : "Choose Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
