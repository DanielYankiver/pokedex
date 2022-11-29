import React from "react";
import "./Moves.css";


export default function Moves ({pokeData}) {

  const allMoves = pokeData ? pokeData.moves.map(m => m.move.name) : " "
  const moves = allMoves.slice(0, 8)

  return (
    <div className="moves-container">
      <div className="moves-title">
        {pokeData ? "Moves" : " "}
      </div>
      <div className="move-wrapper">
        <div className="move-box">
          <div className="move">
            {moves[0]}
          </div>
        </div>
        <div className="move-box">
          <div className="move">
            {moves[1]}
          </div>
        </div>
        <div className="move-box">
          <div className="move">
            {moves[2]}
          </div>
        </div>
        <div className="move-box">
          <div className="move">
            {moves[3]}
          </div>
        </div>
        <div className="move-box">
          <div className="move">
            {moves[4]}
          </div>
        </div>
        <div className="move-box">
          <div className="move">
            {moves[5]}
          </div>
        </div>
        <div className="move-box">
          <div className="move">
            {moves[6]}
          </div>
        </div>
        <div className="move-box">
          <div className="move">
            {moves[7]}
          </div>
        </div>
      </div>
    </div>
  )
}