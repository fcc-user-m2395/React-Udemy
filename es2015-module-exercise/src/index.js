import React,{ Component} from 'react';
import ReactDOM from 'react-dom';

import FruitComponent from './FruitComponent'

class App extends Component{
  render(){
    return (
      <div>
        <FruitComponent/>
        <FruitComponent/>
        <FruitComponent/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));