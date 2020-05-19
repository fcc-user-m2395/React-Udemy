import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DogList from "./DogList";
import Dog from "./Dog";

class Routes extends Component {
  render() {
    const getDog = (routerProps) => {
      let dog = this.props.dogs.find(
        (dog) =>
          dog.name.toLowerCase() === routerProps.match.params.name.toLowerCase()
      );
      return dog === undefined ? (
        <Redirect to='/dogs' />
      ) : (
        <Dog {...routerProps} dog={dog} />
      );
    };
    return (
      <Switch>
        <Route
          exact
          path='/dogs'
          render={() => <DogList dogs={this.props.dogs} />}
        />
        <Route exact path='/dogs/:name' render={getDog} />
        {/* <Route
          exact
          path=''
          render={() => <DogList dogs={this.props.dogs} />}
        /> */}
        <Redirect to='/dogs' />
      </Switch>
    );
  }
}

export default Routes;
