  import { BOARD_SIZE } from "../constants";
  const findWinner = (board, rowIndex, colIndex) => {
    let colCount = 0;
    let rowCount = 0;
    let diagCount = 0;
    let revDiagCount = 0;
    let player = board[rowIndex][colIndex]; 
    for(let i=0; i< BOARD_SIZE; i++) {
      if(board[rowIndex][i] === player) {
        colCount++
      }
      if(board[i][colIndex] === player) {
        rowCount++
      }
      if(board[i][i] === player) {
        diagCount++
      }
      if(board[i][BOARD_SIZE-i-1] === player) {
        revDiagCount++
      }
    }

    if(rowCount === BOARD_SIZE || colCount === BOARD_SIZE || diagCount === BOARD_SIZE || revDiagCount === BOARD_SIZE){
      return player;
    } 
    return null;
  }

  export {findWinner}