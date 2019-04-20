import React, { Component } from 'react';
import './App.css';
import { PlaylistApp } from './containers/PlaylistApp';

class App extends Component {
  render() {
    return (
      <div className="App">

        <PlaylistApp/>
      </div>
    );
  }
}

export default App;
