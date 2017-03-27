const initialState = {
  player1: {
    icon: 'X',
    name: 'Player 1',
    score: 0
  },
  player2: {
    icon: 'O',
    name: 'Player 2',
    score: 0
  },
  currentPlayer: 1,
  currentGrid: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}
const appState = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default appState