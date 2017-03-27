import { connect } from 'react-redux'

import Grid from '../components/Grid'

const mapStateToProps = (state) => {
  return {
    board: state.gameBoard.board
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