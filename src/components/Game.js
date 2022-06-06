import React from 'react'
import { useState } from 'react'

const Game = () => {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ])

  return (
    <div className="board">
      {board.map((s) => (
        <div className="square"></div>
      ))}
    </div>
  )
}

export default Game
