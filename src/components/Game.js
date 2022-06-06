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

  const squareClick = (index) => {
    let newBoard = board
    newBoard[index] = 'X'
    setBoard(newBoard)
  }

  return (
    <div className="board">
      {board.map((s, index) => (
        <div className="square" key={index} onClick={() => squareClick(index)}>
          {board[index]}
        </div>
      ))}
    </div>
  )
}

export default Game
