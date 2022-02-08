import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCell } from '../../store/actions/moves';
const selectGame = (state) => state.game

const Cell = ({rowIndex, colIndex, value}) => {
    const game = useSelector(selectGame)
    const dispatch = useDispatch()

    const handleClick = () => {
        if(!game.winner && !value) {
          dispatch(
            updateCell(
              game.currentPlayer,
              rowIndex,
              colIndex
            ))
        }
      }

    return <div className='cell' onClick={() => handleClick()}>
        {value}
    </div>
};

export default Cell;