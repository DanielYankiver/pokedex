import React, { useState, useEffect } from 'react';
import logo from './pokemon-logo.png';
import pokeball from './pokeball.png';
import pokemonService from './pokemonService';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState('');
  const [details, setDetails] = useState(null);

  const handleClick = async () => {
      try {
      const responce = await pokemonService.detail(pokemon)
      setDetails(responce);
    } catch (err) {
      setDetails({ error: "pokemon not found" });
    }
  };

  return (
    <div className="App">
      <div className="header">
        <div className="header-wrapper">
          <div className="pokeball-logo-wrapper">
            <img src={logo} className="pokemon-logo" alt="logo" />
          </div>
          <div className="pokeball-wrapper">
            <img src={pokeball} className="pokeball" alt="logo" />
          </div>
        </div>
        <div className="pokedex-container">
          <div className="pokedex">
            <div className="panels">
              <div className="left-panel">

              </div>
              <div className="middle-area">

              </div>
              <div className="right-panel">

              </div>
            </div>
            {/* <input value={pokemon} onChange={evt => setPokemon(evt.target.value)} />
            <button onClick={handleClick}>Search</button>
            { details && (
              details.error ? (
                <h1>{details.error}</h1>
              ) : (
                <div>
                  <h1>{details.name}</h1>
                  <img src={details.sprites.front_default} alt="lolsorry" />
                </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;