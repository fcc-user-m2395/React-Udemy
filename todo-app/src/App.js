import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { HashRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <div>
          {/* <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
          <hr /> */}

          <Route exact path='/' component={Home} />
          {/* <Route path='/todo' component={Todo} /> */}
        </div>
      </HashRouter>
    );
  }
}
// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );
const Home = () => (
  <div className='App'>
    <TodoList />
  </div>
);
export default App;
