import React, { useState, useEffect } from 'react';
import logo from './pokemon-logo.png';
import pokeball from './pokeball.png';
import rotate from './rotate.png';
import pokemonService from './pokemonService';
import './App.css';
import Types from "./components/Types";
import Stats from "./components/Stats";

function App() {
  const [pokemon, setPokemon] = useState('');
  const [pokeData, setPokeData] = useState(null);
  const [rotatePoke, setRotatePoke] = useState(false);

  const handleClick = async () => {
      try {
      const response = await pokemonService.detail(pokemon ? pokemon.toLocaleLowerCase() : "blank")
      setPokeData(response);
    } catch (err) {
      setPokeData({ error: <div className="hello">pokemon not found</div> });
    }
  };

  function rotatePokemon() {
    setRotatePoke(!rotatePoke)
    console.log("AYOOOO")
  }

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
                    <div className="camera-search-container">
                      <div className="lens-border">
                        <div className="lens">
                          <div className="lens-dot"></div>
                        </div>
                      </div>
                      <div className="search-lights-wrapper">
                        <div className="search">
                          <input
                            id="search-input" 
                            placeholder="search"
                            value={pokemon} 
                            onChange={evt => setPokemon(evt.target.value)} 
                            onKeyPress={(e) => e.key === 'Enter' && handleClick()}
                          />
                        </div>
                        <div className="camera-lights-container">
                          <div className="red-light">
                            <div className="red-light-dot"></div>
                          </div>
                          <div className="yellow-light">
                            <div className="yellow-light-dot"></div>
                          </div>
                          <div className="green-light">
                            <div className="green-light-dot"></div>
                          </div>
                          <div className="yellow-light-long">
                            <div className="yellow-light-long-dot"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="name-container">
                      {pokeData && (pokeData.error 
                        ? "" 
                          : <div className="name">
                              {pokeData.name.toUpperCase()}
                            </div>)}
                    </div>
                    {rotatePoke && (
                       <div className="image-container">
                       {pokeData && (pokeData.error 
                           ? <h1>{pokeData.error}</h1> 
                             : <img src={pokeData.sprites.back_default} alt="pokemon-image" />)}
                     </div>
                    )}
                    {!rotatePoke && (
                       <div className="image-container">
                       {pokeData && (pokeData.error 
                           ? <h1>{pokeData.error}</h1> 
                             : <img src={pokeData.sprites.front_default} alt="pokemon-image" />)}
                     </div>
                    )}
                    <div className="specs-back-container">
                      <div className="specs-container">
                        {pokeData && (pokeData.error 
                            ? ""
                              : 
                            <div className="specs">
                                <div className="weight-wrapper">
                                  <div className="weight-text">
                                    weight:
                                  </div>
                                  <div className="weight">
                                    {pokeData.weight / 10}{" "}kgs
                                  </div>
                                </div>
                                <div className="height-wrapper">
                                  <div className="height-text">
                                    height:
                                  </div>
                                  <div className="height">
                                    {pokeData.height * 10}{" "}cm
                                  </div>
                                </div>
                                <div className="base-exp-wrapper">
                                  <div className="base-exp-text">
                                    base:
                                  </div>
                                  <div className="base-exp">
                                    {pokeData.base_experience}{" "}xp
                                  </div>
                                </div>
                              </div>
                        )}
                      </div>
                      <div className="rotate-button" onClick={rotatePokemon}>
                        <img src={rotate} className="rotate" alt="rotate-symbol" />
                      </div>
                      
                    </div>
                  </div>
                </div>
              <div className="middle-area">
                <div className="center-square-1"></div>
                <div className="center-square-2"></div>
                <div className="center-square-3"></div>
              </div>
              <div className="right-panel">
                <div className="right-panel-container">
                  <div className="types-wrapper">
                    <Types pokeData={pokeData}/>
                  </div>
                  <div className="stats-wrapper">
                    <Stats pokeData={pokeData} />           
                  </div>
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