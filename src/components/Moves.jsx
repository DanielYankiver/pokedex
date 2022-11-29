import React from "react";
import "./Moves.css";


export default function Moves ({pokeData}) {

  const allMoves = pokeData && (pokeData.error ? " " : pokeData.moves.map(m => m.move.name))

  return (
    <div className="moves-container">
      <div className="moves-title">
        {pokeData && (pokeData.error ? " " : "Moves")}
      </div>
      <div className="move-wrapper">
        <div className="move-box">
          <div className="move">
          {pokeData && (pokeData.error 
            ? " " 
              : allMoves[0])}
          </div>
        </div>
        <div className="move-box">
          <div className="move">
            {pokeData && (pokeData.error 
            ? " " 
              : allMoves[1])}
          </div>
        </div>
        <div className="move-box">
          <div className="move">
            {pokeData && (pokeData.error 
            ? " " 
              : allMoves[2])}
          </div>
        </div>
        <div className="move-box">
          <div className="move">
            {pokeData && (pokeData.error 
            ? " " 
              : allMoves[3])}
          </div>
        </div>
        <div className="move-box">
          <div className="move">
            {pokeData && (pokeData.error 
            ? " " 
              : allMoves[4])}
          </div>
        </div>
        <div className="move-box">
          <div className="move">
            {pokeData && (pokeData.error 
            ? " " 
              : allMoves[5])}
          </div>
        </div>
        <div className="move-box">
          <div className="move">
            {pokeData && (pokeData.error 
            ? " " 
              : allMoves[6])}
          </div>
        </div>
        <div className="move-box">
          <div className="move">
            {pokeData && (pokeData.error 
            ? " " 
              : allMoves[7])}
          </div>
        </div>
      </div>
    </div>
  )
}