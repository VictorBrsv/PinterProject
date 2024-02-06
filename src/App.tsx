import React, { useState } from 'react';
import elbrusLogo from './assets/elbrus.svg';
import { Link } from 'react-router-dom';
import './App.css';

function App(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://github.com/Elbrus-Bootcamp" target="_blank" rel="noreferrer">
          <img src={elbrusLogo} className="logo elbrus" alt="Elbrus logo" />
        </a>
      </div>
      <h2>PINTER</h2>
      <h1>Pinter + Elbrus</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((prev) => prev + 1)}>
          count is {count}
        </button>
        <div className="button-container">
          <Link to={'about'} className="button">about</Link>
          <Link to={'main'} className="button">main</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
