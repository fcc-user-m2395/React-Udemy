import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";

class FormatChangeMessage extends Component {
  render() {
    const { open, handleClose, format } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id='message-id'>Format Changed To {format} !!</span>}
        action={[
          <IconButton
            onClick={handleClose}
            aria-label='close'
            key='close'
            color='inherit'
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    );
  }
}

export default FormatChangeMessage;
