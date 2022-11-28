import React from "react";
import "./Stats.css";


export default function Stats ({pokeData}) {

  // console.log("stat name :", pokeData.stats.map(s => s.stat.name))
  // console.log("stat number :", pokeData.stats.map(s => s.base_stat))
  
  return (
    <div className="stats-container">
      {pokeData
        ? pokeData.stats.map(s => {
          return (
            <div>
              {s.stat.name}
            </div>
          )
        })
          : " "
      }
      {pokeData
        ? pokeData.stats.map(s => {
          return (
            <div>
              {s.base_stat}
            </div>
          )
        })
          : " "
      }
   
    </div>
  )
}