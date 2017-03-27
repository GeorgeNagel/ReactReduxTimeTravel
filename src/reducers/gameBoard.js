const initialState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  currentPlayer: 0
}
const gameBoard = (state = initialState, action) => {
  switch (action.type) {
    case "PLAY_PIECE":
      let row = action.row
      let column = action.column
      if (state.board[row][column] === null) {
        let currentPlayer = state.currentPlayer
        let newBoard = [...state.board]
        newBoard[row] = [...state.board[row]]
        newBoard[row][column] = currentPlayer
        let newPlayer = (currentPlayer + 1) % 2
        return {
          ...state,
          board: newBoard,
          currentPlayer: newPlayer
        }
      } else {
        return state
      }
    default:
      return state
  }
}

export default gameBoard