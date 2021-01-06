import React from 'react';
import '../App.css';
import SimpleTabs from './Tabs.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="Header-main-text">
          <h1 id="Header-main-text">
            Welcome to
            <br></br>Turtle Bay House!
          </h1>
        </div>
        <h2 id="Header-sub-text">
          Your serene paradise in Sea Isle City.
        </h2>
      </header>
      <body>
        <SimpleTabs></SimpleTabs>
      </body>
    </div>
  );
}

export default App;
