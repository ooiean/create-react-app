import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {
  const [name, setName] = useState("Test Name");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <h1>{name}</h1>
      </body>
    </div>
  );
}

export default App;
