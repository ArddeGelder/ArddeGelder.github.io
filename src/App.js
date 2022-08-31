import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import React from 'react';
import Game from './TicTacToe/Game';

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
