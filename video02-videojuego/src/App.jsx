import { useState } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square"
import { TURNS } from "./constants"
import { checkWinner } from "./logic/board"
import { WinnerModal } from "./components/WinnerModal"

function App() {
  //variables de estado para tablero y turno
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState((TURNS.X))
  const [winner, setWinner] = useState(null)

  const checkEndGame = newBoard => {
    return newBoard.every((square) => square !== null)
  }

  //actualizando el tablero
  const updateBoard = (index) => {
    //evitando volver a colocar valor en el square
    if (board[index] || winner) return

    //actualizando el valor del  tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    
    //cambiando  de turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //chequeando si existe nuevo ganador al terminar el turno
    const newWinner = checkWinner(newBoard)

    if (newWinner) {
      //alert(`El ganador es ${newWinner}`)
      setWinner(newWinner)
      confetti()
    } else if (checkEndGame(newBoard)){
      setWinner(false) // empate
    }

    //Check if game over

  }

  //CHEQUEANDO EL WINNER


  //RESETEANDO GAME
  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  
  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Resetear juego</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
    </main>
  )
}

export default App
