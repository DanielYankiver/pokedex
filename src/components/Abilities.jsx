import React from "react";
import "./Abilities.css";

export default function Abilities ({pokeData}) {

  const abilities = pokeData && (pokeData.error ? " " : pokeData.abilities.map(a => a.ability.name))
  
  return (
    <div className="abilities-container">
      <div className="abilities-title">
        {pokeData && (pokeData.error ? " " : "Abilities")}
      </div>
      <div className="ability-wrapper">
        <div className="ability-box">
          <div className="ability">
          {pokeData && (pokeData.error 
            ? " " 
              : abilities[0])}
          </div>
        </div>
        <div className="ability-box">
          <div className="ability">
          {pokeData && (pokeData.error 
            ? " " 
              :  abilities[1])}
          </div>
        </div>
      </div>
    </div>

  )
}