import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as Actions from './moves'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('selectCell', () => {
  it('should create an action to select a cell', () => {
    const expectedAction = {
      type: Actions.SELECT_CELL,
      currentPlayer: 'X',
      row: 0,
      col: 0
    }
    const result = Actions.selectCell('X', 0, 0)
    expect(result).toEqual(expectedAction)
  })

  it('should create an action to update the Winner', () => {
    const expectedAction = {
      type: Actions.UPDATE_WINNER,
      winner: 'X'
    }
    const result = Actions.updateWinner('X')
    expect(result).toEqual(expectedAction)
  })

  it('should create an action to reset the game', () => {
    const expectedAction = {
      type: Actions.RESET_GAME
    }
    const result = Actions.resetGame()
    expect(result).toEqual(expectedAction)
  })

  it('creates SELECT_CELL if there is no winner', () => {
    const store = mockStore({ board: [["X", "X", null],[null, null, null],[null, null, null]], game: {currentPlayer: "X", winner: null}});
    const expectedActions = [{type: "SELECT_CELL", currentPlayer: "X", row: 1, col: 1 }];
    store.dispatch(Actions.updateCell('X', 1, 1))
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('creates SELECT_CELL & UPDATE_WINNER if there is winner', () => {
    const store = mockStore({ board: [["X", "X", "X"],[null, null, null],[null, null, null]], game: {currentPlayer: "X", winner: null}});
    const expectedActions = [
      { 
        type: "SELECT_CELL", 
        currentPlayer: "X", 
        row: 0, 
        col: 1 
      },
      { 
        type: "UPDATE_WINNER",
        winner: "X"
      }
    ];
    store.dispatch(Actions.updateCell('X', 0, 1))
    expect(store.getActions()).toEqual(expectedActions)
  })
})
