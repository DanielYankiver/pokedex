import pokeball from './pokeball.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={pokeball} className="pokeball" alt="logo" />
      </div>
      <div className="pokedex">
        {/* <div className="search-bar">
          Search Bar
        </div> */}
      </div>
    </div>
  );
}

export default App;