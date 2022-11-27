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
      setPokeData({ error: <div className="hello">pokemon not found</div> });
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
                      <input 
                        value={pokemon} 
                        onChange={evt => setPokemon(evt.target.value)} 
                        onKeyPress={(e) => e.key === 'Enter' && handleClick()}
                      />
                      <button className="search-button" onClick={handleClick}>Search</button>
                    </div>
                    <div className="name-container">
                      {pokeData && (pokeData.error 
                        ? "" 
                          : <div className="name">
                              {pokeData.name.toUpperCase()}
                            </div>)}
                    </div>
                    <div className="image-container">
                      {pokeData && (pokeData.error 
                          ? <h1>{pokeData.error}</h1> 
                            : <img src={pokeData.sprites.front_default} alt="pokemon-image" />)}
                    </div>
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