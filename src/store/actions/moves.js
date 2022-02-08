import { findWinner } from "../../utils"
export const SELECT_CELL = 'SELECT_CELL'
export const UPDATE_WINNER = 'UPDATE_WINNER'
export const RESET_GAME = 'RESET_GAME'

export function selectCell(currentPlayer, row, col) {
  return {
    type: SELECT_CELL,
    currentPlayer,
    row,
    col
  }
}

export function updateWinner(winner) {
  return {
    type: UPDATE_WINNER,
    winner
  }
}

export function resetGame() {
  return {
    type: RESET_GAME
  }
}

export const updateCell = (currentPlayer, row, col) => (dispatch, getState) => {
  dispatch(selectCell(currentPlayer, row, col));
  const updatedState = getState();
  const winner = findWinner(updatedState.board, row, col);
  if(winner) {
    dispatch(updateWinner(winner));
  }
}
