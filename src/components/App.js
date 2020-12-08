import logo from '../logo.svg';
import pic1 from '../pic1.JPEG';
import '../App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pic1} className="App-logo" alt="logo" />
        <h1>
          Welcome to the Turtle Bay House!
        </h1>
        <h4>
          Your serene paradise in Sea Isle City
        </h4>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
