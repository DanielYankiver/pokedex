import React from "react";
import "./Types.css";

export default function Types ({pokeData}) {
  
  return (
    <div className="types-container">
      {pokeData && (pokeData.error 
        ? " "
          : pokeData.types.map(t => {
            return (
              <div className="types" key={t.type.name}>
                {t.type.name.toUpperCase()}
              </div>
            )
        }) )}
    </div>
  )
}