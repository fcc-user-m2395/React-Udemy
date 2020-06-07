import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ls from "local-storage";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PaletteList from "./PaletteList";
import Palette from "./Palette";
import palettes from "./seedColors";
import { generatePalette } from "./color-Helpers";
import NewPaletteForm from "./NewPaletteForm";
import Page from "./Page";

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      savedPalettes: ls.get("savedPalettes") || palettes,
      palettes: (ls.get("savedPalettes") || palettes).map((palette) =>
        this.checkFlag(palette)
      ),
    };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.checkFlag = this.checkFlag.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
    this.syncLocalStorage = this.syncLocalStorage.bind(this);
  }

  checkFlag(palette) {
    let emoji = palette.emoji;
    const flagIDIndex = emoji.indexOf("flag");
    if (flagIDIndex >= 0) {
      const flag = emoji.substring(emoji.length - 2);
      emoji = (
        <img src={`https://www.countryflags.io/${flag}/shiny/32.png`} alt='' />
      );
    }
    return { ...palette, emoji: emoji };
  }

  findPalette(id) {
    return this.state.palettes.find((palette) => palette.id === id);
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

  syncLocalStorage() {
    ls.set("savedPalettes", this.state.savedPalettes);
  }

  savePalette(newPalette) {
    this.setState(
      {
        palettes: [...this.state.palettes, this.checkFlag(newPalette)],
        savedPalettes: [...this.state.savedPalettes, newPalette],
      },
      this.syncLocalStorage
    );
  }

  deletePalette(id) {
    this.setState(
      (st) => ({
        palettes: st.palettes.filter((palette) => palette.id !== id),
        savedPalettes: st.savedPalettes.filter((palette) => palette.id !== id),
      }),
      this.syncLocalStorage
    );
  }

  render() {
    return (
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames='page' timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path='/palette/new-palette-form'
                  render={(routerProps) => (
                    <Page>
                      <NewPaletteForm
                        savePalette={this.savePalette}
                        {...routerProps}
                        palettes={this.state.palettes}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/'
                  render={(routerProps) => (
                    <Page>
                      <PaletteList
                        palettes={this.state.palettes}
                        {...routerProps}
                        deletePalette={this.deletePalette}
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/palette/:id'
                  render={(routerProps) => (
                    <Page>
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routerProps.match.params.id)
                        )}
                        showingFullPalette
                      />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path='/palette/:paletteId/:colorId'
                  render={(routerProps) => (
                    <Page>
                      <Palette
                        showingFullPalette={false}
                        palette={this.makeSinglePalette(routerProps)}
                      />
                    </Page>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    );
  }
}

export default Routes;
