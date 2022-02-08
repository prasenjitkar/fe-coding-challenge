import { combineReducers } from "redux";
import { SELECT_CELL, UPDATE_WINNER, RESET_GAME } from "../actions/moves";
import { BOARD_SIZE } from "../../constants";

const initialGameState = { currentPlayer: 'X', winner: null };

export const createBoard = (i) =>
  Array(i)
    .fill(null)
    .map(_ =>
      Array(i)
        .fill(null)
    )

export const board = (state = createBoard(BOARD_SIZE), action) => {
  switch (action.type) {
    case SELECT_CELL: {
      const newBoard = JSON.parse(JSON.stringify(state))
      newBoard[action.row][action.col] = action.currentPlayer
      return newBoard
    }
    case RESET_GAME: {
      return createBoard(BOARD_SIZE)
    }
    default: {
      return state
    }
  }
}

export const game = (state = initialGameState, action) => {
  switch (action.type) {
    case SELECT_CELL: {
      return {
        ...state,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X'
      }
    }
    case RESET_GAME: {
      return initialGameState
    }
    case UPDATE_WINNER: {
      return {
        ...state,
      winner: action.winner
      }
    }
    default: {
      return state
    }
  }
}

export default combineReducers({
  board,
  game
})
