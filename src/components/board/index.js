import React from 'react';
import 'w3-css/w3.css';
import './index.css';
import { useSelector, useDispatch } from 'react-redux';
import { resetGame } from '../../store/actions/moves';
import Cell from "./Cell"

const selectBoard = (state) => state.board
const selectGame = (state) => state.game

export const Board = () => {
  const board = useSelector(selectBoard)
  const dispatch = useDispatch()
  const game = useSelector(selectGame)
  const isDraw = !game.winner ? board.flat().filter(val => val === null).length === 0 : null;
  const isGameStarted = board.flat().filter(val => val !== null).length > 0

  return (
    <div className="game">
      <div className="tic-tac-toe-board">
      { board.map((row, rowIndex) => 
      <div className='row' key={rowIndex}> 
        { row.map((cell, colIndex) => 
        <Cell value={cell} key={colIndex} rowIndex={rowIndex} colIndex={colIndex}/>
        )}
        </div>
      )}
      </div>
      {game.winner ?  
      <div className="w3-container w3-center w3-animate-top">
        <span className='winner'>Winner: {game.winner} </span>
      </div> :
       isDraw ? <div className="draw"> It's a draw</div> :
        <div className="player">Player {game.currentPlayer} </div>      
      }
      <div className="restart-button-section">
        <button className="restart-button" disabled={!isGameStarted} onClick={() => dispatch(resetGame())}>Restart</button>
      </div>
    </div>
  )
}
