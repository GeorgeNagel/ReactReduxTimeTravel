import { connect } from 'react-redux'

import Grid from '../components/Grid'

const mapStateToProps = (state) => {
  return {
    board: state.gameBoard.board,
    player1Token: state.players[0].token,
    player2Token: state.players[1].token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findBug: () => {
      dispatch(findBug())
    }
  }
}

let CurrentGrid = connect(
  mapStateToProps,
  mapDispatchToProps
)(Grid)

export default CurrentGrid