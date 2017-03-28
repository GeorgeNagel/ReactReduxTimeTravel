const initialState = [
  {
    token: 'X',
    name: 'Player 1'
  },
  {
    token: 'O',
    name: 'Player 2'
  }
]
const players = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PLAYER_NAME":
      let playerIndex = action.player
      let newState = [...state]
      let newPlayerSettings = {...state[playerIndex]}
      newPlayerSettings.name = action.name
      newState[playerIndex] = newPlayerSettings
      return newState
    case "SET_PLAYER_TOKEN":
      playerIndex = action.player
      newState = [...state]
      newPlayerSettings = {...state[playerIndex]}
      newPlayerSettings.token = action.token
      newState[playerIndex] = newPlayerSettings
      return newState
    default:
      return state
  }
}

export default players