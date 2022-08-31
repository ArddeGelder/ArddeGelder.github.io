import logo from './logo.svg';

import Timer from './Timer';
import React from 'react';
import Game from './TicTacToe/Game';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Game />
        <Timer />
      </header>
    </div>
  );
}


export default App;
