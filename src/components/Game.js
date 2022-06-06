import React from 'react'
import { useState } from 'react'

const Game = () => {
  const [hasWinner, toggleHasWinner] = useState(false)
  const [xAndO, setXAndO] = useState('X')
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
    if (!hasWinner) {
      let newBoard = board
      newBoard[index] = xAndO
      setBoard(newBoard)
      xAndO === 'X' ? setXAndO('O') : setXAndO('X')
    }
  }

  const checkHaveValue = (b) => {
    if (b[0] && b[1] && b[2]) checkEqual(b[0], b[1], b[2])
    if (b[3] && b[4] && b[5]) checkEqual(b[3], b[4], b[5])
    if (b[6] && b[7] && b[8]) checkEqual(b[6], b[7], b[8])
    if (b[0] && b[3] && b[6]) checkEqual(b[0], b[2], b[6])
    if (b[1] && b[4] && b[7]) checkEqual(b[1], b[4], b[7])
    if (b[2] && b[5] && b[8]) checkEqual(b[2], b[5], b[8])
    if (b[0] && b[4] && b[8]) checkEqual(b[0], b[4], b[8])
    if (b[2] && b[4] && b[6]) checkEqual(b[1], b[4], b[6])
  }

  const checkEqual = (a, b, c) => {
    if (a === b && a === c) {
      console.log(`${a} has Won!`)
      toggleHasWinner(true)
    }
  }

  if (!hasWinner) checkHaveValue(board)

  return (
    <div className="board">
      {board.map((s, index) => (
        <div className="square" key={index} onClick={() => squareClick(index)}>
          {s}
        </div>
      ))}
    </div>
  )
}

export default Game
