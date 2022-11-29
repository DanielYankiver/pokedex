import React from "react";
import "./Abilities.css";


export default function Abilities ({pokeData}) {

  const abilities = pokeData ? pokeData.abilities.map(a => a.ability.name) : " "

  console.log(abilities)
  
  return (
    <div className="abilities-container">
      <div className="abilities-title">
        {pokeData ? "Abilities" : " "}
      </div>
      <div className="ability-wrapper">
        <div className="ability-box">
          <div className="ability">
            {abilities[0]}
          </div>
        </div>
        <div className="ability-box">
          <div className="ability">
            {abilities[1]}
          </div>
        </div>
      </div>
    </div>

  )
}