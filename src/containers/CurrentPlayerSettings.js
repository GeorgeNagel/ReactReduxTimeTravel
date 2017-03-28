import { connect } from 'react-redux'

import PlayerSettings from '../components/PlayerSettings'
import { setPlayerName, setPlayerToken } from '../actions'

const mapStateToProps = (state) => {
  return {
    playerSettings: state.players
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePlayer1Name: (name) => {
      dispatch(setPlayerName(0, name))
    },
    updatePlayer1Token: (token) => {
      dispatch(setPlayerToken(0, token))
    },
    updatePlayer2Name: (name) => {
      dispatch(setPlayerName(1, name))
    },
    updatePlayer2Token: (token) => {
      dispatch(setPlayerToken(1, token))
    }
  }
}

let CurrentPlayerSettings = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerSettings)

export default CurrentPlayerSettings