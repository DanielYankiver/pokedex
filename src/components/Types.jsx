import React from "react";
import "./Types.css";


export default function Types ({pokeData}) {

  // console.log("pokeData :", pokeData.types.map(t => t.type.name))
  
  return (
    <div className="types-container">
      <div className="types-header">
        TYPES
      </div>
      {pokeData 
        ? pokeData.types.map(t => {
            return (
              <div className="types">{t.type.name}</div>
            )
        }) 
          : " "}
    </div>
  )
}