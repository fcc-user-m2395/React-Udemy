import React, { Component } from "react";
import styles from "./styles/PaletteFormNavStyles";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import { Link } from "react-router-dom";
import PaletteMetaForm from "./PaletteMetaForm";

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formShowing: false,
    };
    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState((st) => ({ formShowing: !st.formShowing }));
  }

  render() {
    const {
      classes,
      open,
      handleDrawerToggle,
      handleSubmit,
      palettes,
    } = this.props;
    const { formShowing } = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          color='default'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}>
          <Toolbar disableGutters={!open}>
            <IconButton
              color='inherit'
              aria-label='Open drawer'
              onClick={handleDrawerToggle}
              className={classNames(classes.menuButton, {
                [classes.hide]: open,
              })}>
              <AddToPhotosIcon />
            </IconButton>
            <Typography variant='h6' color='inherit' noWrap>
              Create A Palette
            </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
            <Link to='/' className={classes.link}>
              <Button
                variant='contained'
                className={classes.button}
                color='secondary'>
                GO BACK
              </Button>
            </Link>
            <Button
              variant='contained'
              className={classes.button}
              color='primary'
              onClick={this.toggleForm}>
              SAVE PALETTE
            </Button>
          </div>
        </AppBar>
        {formShowing && (
          <PaletteMetaForm
            handleSubmit={handleSubmit}
            palettes={palettes}
            closeForm={this.toggleForm}
            open={formShowing}
          />
        )}
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
