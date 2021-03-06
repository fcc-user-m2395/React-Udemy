import React, { Component } from 'react';

import fruits from './food';
import { choice, remove } from "./helpers";

class FruitComponent extends Component {
  render() {
    let fruit = choice(fruits);
    let remainingFruits = remove(fruits, fruit);
    // console.log(" I'd like one" + fruit + ', please');
    console.log(`I'd like one ${fruit}, please`);
    // console.log('Here you go:' + fruit);
    console.log(`Here you go: ${fruit}`);
    console.log('Delicious! May I have another?');
    // console.log("I'm sorry, we're all out. We have " + changeFruits.length + ' left.');
    console.log(`I'm sorry, we're all out. We have ${remainingFruits.length} left.`);
    return <h1>Module Exeercise</h1>
  }
}

export default FruitComponent;
