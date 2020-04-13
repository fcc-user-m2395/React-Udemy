import React,{ Component} from 'react';

import fruits from './food';
import { choice,remove } from "./helpers";

class FruitComponent extends Component{
  render(){
    let fruit = choice(fruits);
    let changeFruits = remove(fruits,fruit);
   console.log(" I'd like one"+fruit+', please');
   console.log('Here you go:'+fruit);
   console.log('Delicious! May I have another?');
   console.log("I'm sorry, we're all out. We have "+changeFruits.length+' left.');     
    return <h1>Module Exercise</h1>
  }
}

export default FruitComponent;
