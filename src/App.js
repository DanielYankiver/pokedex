import logo from './pokemon-logo.png';
import pokeball from './pokeball.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-wrapper">
          <img src={logo} className="pokemon-logo" alt="logo" />
          <div className="pokeball-wrapper">
            <img src={pokeball} className="pokeball" alt="logo" />
          </div>
        </div>
      </div>
      {/* <div className="header">
      </div> */}
      {/* <div className="pokedex">
        <div className="search-bar">
          Search Bar
        </div>
      </div> */}
    </div>
  );
}

export default App;