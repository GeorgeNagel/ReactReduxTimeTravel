export const playPiece = (row, column) => {
  return {
    type: 'PLAY_PIECE',
    row,
    column
  }
}

export const setPlayerName = (player, name) => {
  return {
    type: 'SET_PLAYER_NAME',
    player,
    name
  }
}

export const setPlayerToken = (player, token) => {
  return {
    type: 'SET_PLAYER_TOKEN',
    player,
    token
  }
}