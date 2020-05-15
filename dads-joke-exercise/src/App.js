import React from "react";
import "./App.css";
import JokeList from "./JokeList";
import "@fortawesome/fontawesome-free/css/all.css";
import ls from "local-storage";

function App() {
  return (
    <div className='App'>
      <JokeList />
    </div>
  );
}

export default App;
