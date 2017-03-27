import {combineReducers} from "redux"

import gameBoard from './gameBoard'
import players from './players'

const appState = combineReducers({
  gameBoard,
  players
})

export default appState