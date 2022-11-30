import React from "react";
import "./Stats.css";

export default function Stats ({pokeData}) {
  
  return (
    <div className="stats-container">
      <div className="stats-name-container">
        {pokeData && (pokeData.error 
          ? " "
            : pokeData.stats.map(s => {
                return (
                  <div className="stat-name">
                    {s.stat.name}:
                  </div>
                )
              })
        )}
      </div>
      <div className="stats-number-container">
        {pokeData && (pokeData.error 
          ? " "
            : pokeData.stats.map(s => {
              return (
                <div className="stat-number">
                  {s.base_stat}
                </div>
              )
            })
        )}
      </div>
    </div>
  )
}