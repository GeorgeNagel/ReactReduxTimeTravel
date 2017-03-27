import {combineReducers} from "redux"

import currentGrid from './currentGrid'
import currentPlayer from './currentPlayer'
import players from './players'

const appState = combineReducers({
  currentGrid,
  currentPlayer,
  players
})

export default appState