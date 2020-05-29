import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./PaletteList";
import Palette from "./Palette";
import palettes from "./seedColors";
import { generatePalette } from "./color-Helpers";

class Routes extends Component {
  findPalette(id) {
    return palettes.find((palette) => palette.id === id);
  }
  makeSinglePalette(routerProps) {
    const { paletteId, colorId } = routerProps.match.params;
    const palette = generatePalette(this.findPalette(paletteId));
    let colors = palette.colors;
    const newColors = [];
    for (let level in colors) {
      const colorsArr = colors[level];
      newColors.push(colorsArr.find((color) => color.id === colorId));
    }
    return { ...palette, colors: newColors.slice(1) };
  }
  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={(routerProps) => (
            <PaletteList palettes={palettes} {...routerProps} />
          )}
        />
        <Route
          exact
          path='/palette/:id'
          render={(routerProps) => (
            <Palette
              palette={generatePalette(
                this.findPalette(routerProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={(routerProps) => (
            <Palette
              mode='single'
              palette={this.makeSinglePalette(routerProps)}
            />
          )}
        />
      </Switch>
    );
  }
}

export default Routes;
