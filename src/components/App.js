import React from 'react';
// import logo from '../logo.svg';
import pic1 from '../pic1.JPEG';
import '../App.css';
import SimpleTabs from './Tabs.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="Header-main-text">
          <h1>
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
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        <p>
          this is the body
        </p>
      </body>
    </div>
  );
}

export default App;
