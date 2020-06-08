import React, { Component } from "react";
import { Picker } from "emoji-mart";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
//Styles :
import "emoji-mart/css/emoji-mart.css";

class PaletteMetaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newPaletteName: "",
      stage: "form",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.openPicker = this.openPicker.bind(this);
    this.closePicker = this.closePicker.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
      this.props.palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }

  openPicker() {
    this.setState({ stage: "emoji" });
  }

  closePicker() {
    this.setState({ stage: "" });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  checkFlag({ id, name, native }) {
    const flagIDIndex = id.indexOf("_flag");
    const flagNameIndex = name.indexOf("Flag");
    let emoji = native;
    const flag = id.substring(id.length - 2);
    if (flagIDIndex === -1 && flagNameIndex >= 0) emoji = `flag-${flag}`;
    return emoji;
  }

  handleSubmit(emojiObj) {
    const emoji = this.checkFlag(emojiObj);
    this.props.handleSubmit(this.state.newPaletteName, emoji);
    this.closePicker();
  }

  render() {
    const { newPaletteName, stage } = this.state;
    const { closeForm } = this.props;
    return (
      <div>
        <Dialog open={stage === "emoji"} onClose={this.closePicker}>
          <Picker onSelect={this.handleSubmit} />
        </Dialog>
        <Dialog
          open={stage === "form"}
          onClose={closeForm}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>
            Choose A Palette Name
          </DialogTitle>
          <ValidatorForm onSubmit={this.openPicker}>
            <DialogContent>
              <DialogContentText>
                Please enter a name for the new Palette.Make Sure its unique!
              </DialogContentText>
              <TextValidator
                autoFocus
                label='Palette Name'
                name='newPaletteName'
                value={newPaletteName}
                fullWidth
                margin='normal'
                onChange={this.handleChange}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Enter Palette Name",
                  "Palette Name Already Taken",
                ]}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={closeForm} color='primary'>
                Cancel
              </Button>
              <Button variant='contained' color='primary' type='submit'>
                Save Palette
              </Button>
            </DialogActions>
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}

export default PaletteMetaForm;
