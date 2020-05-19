import React, { Component } from "react";
import logo from "./logo.svg";
import { NavLink, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Chip from "./Chip";
import Candy from "./Candy";
import Coke from "./Coke";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chips: 0
    };
    this.addChips = this.addChips.bind(this);
  }

  addChips() {
    this.setState((st) => ({ chips: st.chips + 1 }));
  }

  render() {
    return (
      <div className='App'>
        <h1>Vending Machine</h1>
        <nav>
          <NavLink exact activeClassName='active-link' to='/'>
            Home
          </NavLink>
          <NavLink exact activeClassName='active-link' to='/chip'>
            Chips
          </NavLink>
          <NavLink exact activeClassName='active-link' to='/candy'>
            Candies
          </NavLink>
          <NavLink exact activeClassName='active-link' to='/coke'>
            Coke
          </NavLink>
        </nav>
        <Route exact path='/' component={Home} />
        <Route
          exact
          path='/chip'
          render={() => <Chip chips={this.state.chips} add={this.addChips} />}
        />
        <Route exact path='/candy' component={Candy} />
        <Route exact path='/coke' component={Coke} />
      </div>
    );
  }
}

export default App;
