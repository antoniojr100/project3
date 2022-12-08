import logo from './logo.svg';
import Header from './Header.js';
import Main from './Main.js';
import Footer from "./Footer.js"
import './App.css';

function App() {
  // Phase 1:
    // Establish API connection
    // Create buttons for each movie with episode id and title
    // update stateful variable (selected episode) to update on every time the selected button changes
    // set the api returned movie obj to the same episode as the selected episode stateful variable

  // Phase 2:
    // Now that movieObj contains the selected movie info, structure the data in Main.js
    // In Welcome.js add welcome message and generate quote if the user has not selected a movie

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
    </div>
  );
}

export default App;
