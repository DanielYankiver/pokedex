import React, { useState, useEffect } from 'react';
import logo from './pokemon-logo.png';
import pokeball from './pokeball.png';
import pokemonService from './pokemonService';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState('');
  const [pokeData, setPokeData] = useState(null);

  const handleClick = async () => {
      try {
      const response = await pokemonService.detail(pokemon ? pokemon.toLocaleLowerCase() : "blank")
      setPokeData(response);
    } catch (err) {
      setPokeData({ error: "pokemon not found" });
    }
  };

  console.log(pokeData)

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
                  <div className="left-panel-container">
                    <div className="search">
                      <input value={pokemon} onChange={evt => setPokemon(evt.target.value)} />
                      <button className="search-button" onClick={handleClick}>Search</button>
                    </div>
                    { 
                    pokeData && (
                      pokeData.error 
                        ? (
                        <h1>{pokeData.error}</h1>
                        ) : (
                        <div>
                            <div className="name-container">
                              <div className="name">
                                {pokeData.name.toUpperCase()}
                              </div>
                            </div>
                            <div className="image-container">
                              <img src={pokeData.sprites.front_default} alt="pokemon-image" />
                            </div>
                            <div className="poke-types">
                              {/* Add types here: ex: charizard = fire */}
                              {/* style types do have dynamic colors: ex: water = blue square */}
                            </div>
                        </div>
                    ))}
                  </div>
                </div>
              <div className="middle-area">

              </div>
              <div className="right-panel">
                <div className="right-panel-container">
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;