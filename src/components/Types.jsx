import React from "react";
import "./Types.css";


export default function Types ({pokeData}) {

  // console.log("types :", pokeData.types.map(t => t.slot))
  
  return (
    <div className="types-container">
      {/* {pokeData 
        ? <div className="types-header">
            TYPES
          </div>
          : " "} */}
      {pokeData 
        ? pokeData.types.map(t => {
            return (
              <div className="types" key={t.type.name}>
                {t.type.name.toUpperCase()}
              </div>
            )
        }) 
          : " "}
    </div>
  )
}