import { connect } from 'react-redux'

import Grid from '../components/Grid'

const mapStateToProps = (state) => {
  return {
    board: state.gameBoard.board,
    currentPlayerName: state.players[state.gameBoard.currentPlayer].name
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