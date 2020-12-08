import React from 'react';
// import logo from '../logo.svg';
import pic1 from '../pic1.JPEG';
import '../App.css';
import SimpleTabs from './Tabs.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to the Turtle Bay House!
        </h1>
        <img src={pic1} className="App-logo" alt="logo" />
        <h4>
          Your serene paradise in Sea Isle City
        </h4>
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
