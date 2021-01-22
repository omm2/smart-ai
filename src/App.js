import React from 'react';
import logo from './logo.svg';
import { Intents } from './features/intents/Intents';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-header-wrapper">
          <h2 className="App-header">Hello, I am Smart AI</h2>
          <sub className="App-header-sub">I am here to help you and your customers</sub>
        </div>
      </header>
      <div className="App-content">
        <Intents />
      </div>
    </div>
  );
}

export default App;
