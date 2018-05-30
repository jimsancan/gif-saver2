import React, { Component } from 'react';
import './App.css';
import Gifs from './gifs.jsx'

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <h1>Gifs</h1>
        <Gifs />
      </div>
    );
  }
}

export default App;
