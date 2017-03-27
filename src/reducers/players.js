const initialState = [
  {
    icon: 'X',
    name: 'Player 1',
    score: 0
  },
  {
    icon: 'O',
    name: 'Player 2',
    score: 0
  }
]
const players = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default players